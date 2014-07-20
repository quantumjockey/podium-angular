podium-angular
=============

A client-side supplement to LVRUG's podium in AngularJS!

Summary
-------

This repository was intended to serve as a collaborative effort among the Las Vegas Ruby User Group meetup and various JavaScript meetups around the City of Las Vegas, notably AngularJS Las Vegas. Since that discussion came about, however, it has turned into a playground for members to experiment with the magic of the AngularJS framework in a multi-paradigm web application. The members who are working on this hope to provide users with rich application interfaces via AngularJS, and facilitate a clean set of functionality for deployment alongside server-side frameworks like Ruby-on-Rails and Grape.

Notes
-----

This repository was scaffolded with [Yeoman](http://yeoman.io/) (on OSX) and architected according to the original developer's interpretation of [Google's Style guide for AngularJS](http://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html). It stresses a module-centric pattern rather than the app/components pattern recently generalized by the Angular team. This approach was chosen to reduce the risk of coupling among application components and is intended to make markup, styles, and scripts associated with each module easier to locate within the application.

Instructions
------------

To get your machine ready for development with this repository:

1. Clone it to your machine.
2. Navigate to the directory you cloned your repository to via Terminal.
3. Install [GruntJS](http://gruntjs.com/) to your machine by following instructions provided on the [Getting Started Page](http://gruntjs.com/getting-started).
4. Install a local grunt (without -g option) to the repository so that existing Gruntfile.js configurations can be properly applied during the serve operation.
5. Install [Bower](http://bower.io/) to your machine by following instructions provided on the [Install Bower Page](http://bower.io/#install-bower) posted on the site.
6. Load dependencies to the cloned repository by running bower locally on the [bower.json manifest file](http://bower.io/docs/creating-packages/#bowerjson).

Then, run:

`$ grunt serve`

And you're ready to go!

Livereload and hosting are already configured out-of-the-box.
