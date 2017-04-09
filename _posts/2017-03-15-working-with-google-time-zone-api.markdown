---
layout: post
Title: "Working With Google Time Zone API"
date: 2017-03-13
---

I am working on a World Clock app and the first step was to get access to Google's Time Zone API.

The Google docs state "The Google Maps Time Zone API provides a simple interface to request the time zone for a location on the earth, as well as that location's time offset from UTC."

To access the API I used a plain javascript helper function to make an API call:

```javascript
function getCORS(url, success) {
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}
```
When I call the function I used a custom url that I built by concatenating the base url, the latitude and longitude coordinates, and the api key.
