# Summary

Laptop animation. As I used some modern css features for this demo, it supposed to work in 
modern browsers, such as:
* Chrome
* Firefox
* Safari (on Os X)
* Microsoft Edge

Will not work in Internet Explorer, as it does not support ``transform-style: preserve-3d;`` and it 
is hard to emulate in this case.

# Develop & Build

I use gulp to build this demo and npm to manage dependencies. If you want to modify this demo,
you will need to:

* Install recent node and npm
* Install gulp: ``npm install --global gulp-cli``
* Run ``npm install`` from project's directory to install dependencies
* Run ``gulp`` to build site and start local web-server or ``gulp compile`` just to build

# License
[CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/)