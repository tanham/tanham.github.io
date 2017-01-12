---
layout: post
Title: "Project 52[1]: Three JS Calculators"
date: 2017-01-11
Category: Project 52
---


*Project 52 - My good friend [Desmond](http://designxdesmond.com/) and I are doing a project 52 where each of us complete a project in our respective fields to sharpen our skills and hold each other accountable. **This is week 1**.* 

***


### 3 Implemations of a simple JS Calcuator 

#### Simple JS Calc 1

The simplest possible implementation I could think of was to include two input fields and the four operands buttons. The result comes up in an alert dialog box. Each input and operand has a function that is triggered in an `onclick` event. The code is self-contained in one document. 

<p data-height="265" data-theme-id="0" data-slug-hash="QdNKWa" data-default-tab="result" data-user="tanham2122" data-embed-version="2" data-pen-title="Simple JS Calculator 1 " class="codepen">See the Pen <a href="http://codepen.io/tanham2122/pen/QdNKWa/">Simple JS Calculator 1 </a> by Tanisha Hampden (<a href="http://codepen.io/tanham2122">@tanham2122</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


#### Simple JS Calc 2 

The next calculator uses a html form and only one JavaScript function. This calculator looks nicer to the user but the code is very ugly as it is also self-contained in one HTML document. This calulator also uses `onclick` events to fire a function.

<p data-height="265" data-theme-id="0" data-slug-hash="xgVEGo" data-default-tab="result" data-user="tanham2122" data-embed-version="2" data-pen-title="Simple JS Calculator 2" class="codepen">See the Pen <a href="http://codepen.io/tanham2122/pen/xgVEGo/">Simple JS Calculator 2</a> by Tanisha Hampden (<a href="http://codepen.io/tanham2122">@tanham2122</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Simple JS Calc 3 

This is the best and most programatic version of the calulator I have so far. The code is clean and the interface looks good. (I found a calulator design online and tweaked in to my liking).

I loop through the buttons to add an `onclick` event for each. Within the loop there is a `switch` that states the possibly cases and triggers a function based on what cases is being clicked. 

There is one bug that I know of so far. Once an equation is calucated, you can continue to add number to the result. I will keep working on this. 

<p data-height="265" data-theme-id="0" data-slug-hash="pRyEEO" data-default-tab="result" data-user="tanham2122" data-embed-version="2" data-pen-title="Simple JS Calculator 3 " class="codepen">See the Pen <a href="http://codepen.io/tanham2122/pen/pRyEEO/">Simple JS Calculator 3 </a> by Tanisha Hampden (<a href="http://codepen.io/tanham2122">@tanham2122</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>