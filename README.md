# TuNiApp
TuNiApp is an user friendly web application used to manage, observe and change the Status an already implemented home automatization backend.
A nice und comfortable UI which is optimized for display on mobile phones, tablets or computer is core of the app.
The app itself can be installed/added to Home Screen for standalone usage and is SMALLER THAN 1MB!.

Demo: https://niklas-stephan.de/tuniapp/

## Backend
The Backend is called via Vanilla Javscript "fetch", and expected to listen by its endpoints at /api. For security reasons and easier handling I use the reverse proxy functionallity of webserver nginx to forward all requests from /api to my Node-Red (https://nodered.org/) instance. The "magic" itself is done by nodered websockets and webservices.


## Installation
- Have a webserver running, personally I prefer nginx in a docker container
- Copy the source files to the web server. Hosting on https:// by dedicated url is recommeded, since otherwise installation from browser on pc will not work (the app itself does not need https).
- Setup your backend, e.g. with Node-Red and adopt fronted code to your needs.


## Technique and Sources
- HTML
- Vanilla Javascript
- Bootstrap 5 (finally without jQuery), https://getbootstrap.com/
- OpenSans woff Web Fonts, https://www.opensans.com/
- Masonry JavaScript Library, https://masonry.desandro.com
