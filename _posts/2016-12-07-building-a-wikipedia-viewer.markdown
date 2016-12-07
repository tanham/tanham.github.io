---
layout: post
Title: "Building a Wikipedia Viewer in Vanilla Javascript"
date: 2016-12-07
Category: Code
---

# What I learned from building a Wikipedia Viewer in Vanilla Javascript

This is not at all a tutorial but a reflection of the things that I learned and the problems I faced while building a Wikipedia viewer. 

### Event Handlers

Somehow I got into the habit of adding `onclick` events to html files. This works fine but my mentor mentioned that it's better practice to keep all of your Javascript self-contained to make debugging easier. 

While rewriting the functions that required an `addEventListener` object I ran into the error below: 


`error: Cannot read property 'addEventListener' of null`

I found that the function returned `null` because it executed before the DOM was fully loaded. I fixed this problem by adding [`window.onload`](https://developer.mozilla.org/en/docs/Web/API/GlobalEventHandlers/onload). MDN notes that "The **load event** fires at the end of the document loading process. At this point, all of the objects in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading."

### Scope

I was reminded a few times of the importance of understanding scope and how it can affect your code structure. I had to move functions around a bit to ensure that all of my variables were able to be accessed properly. 

In some cases, I would get an error that a variable is `undefined`. To fix this I'd either make the variable global or I would move the function to allow it access to that variable. 

### CORS

This was my biggest hurdle throughout this project. I spent several days reading about cross-origin resource sharing and trying several known hacks to enable CORS from the client side. I tried to manually [set request headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) within my xhr request, I tried to make my request using the [JSONP](https://plainjs.com/javascript/ajax/jsonp-ajax-requests-50/) method, and I even attempted to add CORS support from the server side. In the end, solving the problem was specific to the Wikipedia API and if I would have read the docs a bit more carefully I could have saved myself several days of headache. I am happy that I got such an in-depth lesson on how CORS works. I will also *ALWAYS* read the docs thoroughly from now on. 

To conclude, I probably spent more time than necessary banging my head up against the wall instead of just asking for help but I don't think I will run into any of these problems in this manner again.

Below is the source code and live preview: 

[Wikipedia Viewer code](https://github.com/tanham/wiki-viewer)

<p data-height="265" data-theme-id="0" data-slug-hash="yVpaQg" data-default-tab="js,result" data-user="tanham2122" data-embed-version="2" data-pen-title="Wikipedia Viewer" class="codepen">See the Pen <a href="http://codepen.io/tanham2122/pen/yVpaQg/">Wikipedia Viewer</a> by Tanisha Hampden (<a href="http://codepen.io/tanham2122">@tanham2122</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>



