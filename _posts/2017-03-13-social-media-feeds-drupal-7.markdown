---
layout: post
Title: "Social Media feeds for Drupal 7"
date: 2017-03-13
---

I am currently working with Drupal 7 for client work and a task that I had to overcome was embedding social media feeds into a Drupal 7 site. The client asked for Facebook, Twitter, and Instagram feeds. Below I will go over how I went about this.

There were several Drupal modules that will add feeds to your Drupal site but I found many of them overly complex to configure and very dependency heavy. I tried to do as much as I can by simple adding blocks but in the end I did make use of one module.

### Facebook feed embed

The [Facebook for developers](https://developers.facebook.com/docs/plugins/page-plugin) page has a wizard that allows you to choose various attributes like width, height, and styles for your embed and it spits out two pieces of code. The first is a Javascript SDK to be placed right after `<body>` tag of you site. It looks like this:

```Javascript
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=194773364343194";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
```

In Drupal, I had to place this code in html.tpl.php file. I found this file in the modules/system directory. I believe the file may be different and in a different location based on what theme you are using so you may have to do some digging.

An aside: If I wanted to embed this into my Jekyll site, I could put the Javascript SDK at the top of my header.html include page so that is available everywhere on the site.

The second piece of code output the actual Facebook embed and should be placed wherever you want your embed to appear on your site. The code looks like this:

```html
<div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="220" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
```

Here is an example of the output:

<div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="220" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>

*An extra - Facebook debugger - A nice tool to make use of when embed facebook plugins to your websites is the [Facebook debugger](https://developers.facebook.com/tools/debug/).*

### Twitter feed embed

Twitter also has a [simple wizard](https://publish.twitter.com/#) to help generate a feed embed code. They include feed template examples and a custom generator where you enter the user timeline URL, style, and add other custom settings to generate the code. The code and output are below:

```html
<a class="twitter-timeline" data-width="220" data-height="400" href="https://twitter.com/TwitterDev">Tweets by TwitterDev</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
```

<a class="twitter-timeline" data-width="220" data-height="400" href="https://twitter.com/TwitterDev">Tweets by TwitterDev</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

*Twitter also has a debugger tool called the [card validator](https://cards-dev.twitter.com/validator)*

### Instagram feed embed

Instagram was a little more involved. To generate a feed, I had to get access to Instagram's API and generate an access token. You can embed single images by using the embed code that is provided with each image under more options but if you want a feed from Instagram, you have to take a few extra steps. I used a Drupal module called Drupal [Instagram Block](https://www.drupal.org/project/instagram_block) to create a feed. Please note that there are several other modules and methods but this is what I chose.

To begin, head over to the [Instagram developers page](https://www.instagram.com/developer/) to register. Once you register, you will be given a client id and client secret code. You can use this information to generate an access token. I followed [this tutorial](https://medium.com/@bkwebster/how-to-get-instagram-api-access-token-and-fix-your-broken-feed-c8ad470e3f02#.1q8e3o4d5). Basically, you will start a local server to gain access to the API and authorize it with your client id to return a response which will be your access token. You can also so this with terminal using `cURL`.

One you have you access token, you can use it to configure the Instagram Block module and embed you feed.

The Instagram feed that Instagram Block create needs some styling but it does the job as far as functionality.
