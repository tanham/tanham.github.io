---
layout: post
Title: "Date Generator"
date: 2017-02-02
Category: Project 52
---

*Project 52 - My good friend [Desmond](http://designxdesmond.com/) and I are doing a project 52 where each of us complete a project in our respective fields to sharpen our skills and hold each other accountable. **This is week 4**.*

*I am four weeks late with this project due to travel and personal reasons. No excuses though! In the terms of our Project 52, we must pay $5 for each week we are late and make up for missed projects so I am adding 4 weeks to the end of the project.* 

***

For the past few weeks, I have been working on a [romantic or friendly] date generator. I came up with this because I wanted to make plans to go out with a new friend but I was unsure of what they liked so I made a list of various activities and used a little JavaScript to allow a user to choose date activities based on their interests/budget/time. 

#### First Implementation:

The first and easiest implementation I could think of was to create a array of date ideas and on the click of a button display a random activity. I used the built-in `Math` object to return a random integer to randomly choose an activity on each click. 

See first implementation below: 

<p data-height="376" data-theme-id="0" data-slug-hash="GrxzXr" data-default-tab="result" data-user="tanham2122" data-embed-version="2" data-pen-title="Date-Gen-1" class="codepen">See the Pen <a href="http://codepen.io/tanham2122/pen/GrxzXr/">Date-Gen-1</a> by Tanisha Hampden (<a href="http://codepen.io/tanham2122">@tanham2122</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Second Implementation:

I wanted to add the option to choose a date by category or type. I made a button for each category and upon clicking, the user would get back results relevant to their choice. 

Before I began to code this implementation, I put all the date ideas into spreadsheet, tagged with the different categories (i.e active, dinner, budget, etc.). I then coded a JSON object with each date idea and corresponding category and accessed the information with dot notation. 

When I began writing the JavaScript for this project, I hard coded a JSON object that contained date ideas and their corresponding category. This was tedious and messy. I thought to myself, it would be cool it there are an API that allowed me to access my own data in the spreadsheet that I had.

So I Googled it and there it was. [Airtable](http://airtable.com) (the spreadsheet software I used) generates an API for each table you create. I am able to create, read, update, and destroy records using the Airtable API. So far I have made successful API calls and I have access to all of the date records that I input into the tables. The repository that contains the code for this app is private because I haven't figured out how to hide my API key. 

What is interesting about building this project is that is was a dance between how to structure the user interface with the functionality. I couldn't dive into the code without considering the end user because I initially had little concept of what the user would need/want. For example, I tried to include a variety of budget options and activities of different time frames in each category. 

Next week, I will share my progress on this app as well as a proper demo. 