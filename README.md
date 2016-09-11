# stefanimhoff.de

This is the source of my [personal website and blog](https://stefanimhoff.de/) build with [Hugo](http://gohugo.io/) and [Gulp.js](http://gulpjs.com/).

## Installation

You will need [Hugo](http://gohugo.io/) to run this website (e. g. with Homebrew):

```bash
$ brew install hugo
```

You will also need [Node.js](http://nodejs.org/) to run the Gulp tasks and build process:

```bash
$ git clone https://github.com/creationix/nvm.git ~/.nvm
$ cd ~/.nvm
$ git checkout `git describe --abbrev=0 --tags`
$ nvm install 4.4.1
```

After cloning the repository run:

```bash
$ npm install
```

## Running the website

The development enviroment is driven by Gulp.js. I have written these npm run tasks:

```bash
$ npm run dev
$ npm run preview
$ npm run publish
$ npm run build
$ npm run deploy
```

- To start the development enviroment run `npm run dev`.
- To build and preview a production build run `npm run preview`.
- To run a production build and sync it to the server run `npm run publish`.
- To build a production build run `npm run build`.
- To sync the files to a server run `npm run deploy`.

The developement server will run on [http://0.0.0.0:9999/](http://0.0.0.0:9999/).

The production server will run on [http://0.0.0.0:9998/](http://0.0.0.0:9998/).

## Stuff I use on my website

These are just some of the tools, packages, languages and stuff I used to build my website:

- [Hugo](http://gohugo.io/) to build the static website.
- [Node.js](http://nodejs.org/) to run Gulp.js.
- [Gulp.js](http://gulpjs.com/) to run the development enviroment and create builds.
- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript)
- [Browserify](http://browserify.org/) to use CommonJS modules.
- [BrowserSync](http://www.browsersync.io/) to have live reload and syning of actions.
- [PostCSS](https://github.com/postcss/postcss)
- [LostGrid](https://github.com/corysimmons/lost) to build the awesome Grid of my website.

## Licence
All content is copyrighted by [Stefan Imhoff](https://stefanimhoff.de) unless otherwise stated. Feel free to learn from the source code and reuse code for your projects. The only thing which is not allowed is the usage of my design (the unique combination of layout, fonts, images), private photos and logo.

In easier words: **This is not a free theme**. Learn from it. Remix. Reuse. Build your own stuff.
