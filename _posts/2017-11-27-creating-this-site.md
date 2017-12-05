---
layout: post
title:  Creating This Site | Just F***ing Ship
date:   2017-11-27 08:00:03
categories: general
excerpt: I've been delaying creating my own personal site that's separate from my site I have for small business client work, so I finally made something. Here's how I made it.
---

## My Primary Goals
While I have a site to market myself to small business clients, I've been looking to join an agency or product team in-house, and wanted to showcase my technical chops. So I thought the best way to do that would be two methods: case studies and blog articles where I showcase my experience and share progress on things that I'm learning. So, I created this site.


## Choosing a Front-end Framework that didn't get in the way of content
Since I'm a developer, I wanted to showcase my techincal ability in making this site, but I also wanted to easily create new case studies and blog articles without putting effort into having to maintain different image sizes, go into the code, etc. I originally chose <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener">Gatsby</a> a React-based front-end framework (even React's Offical Docs site uses it!), but I was having some trouble setting up GraphQL (something it uses instead of APIs).

## Current Tech Stack
For this site, I wanted to launch quickly more than I wanted to get the tech stack just right and humblebrag about using the latest javascript-heavy front-end. So, with a fast launch date in mind, I used the following:

### Jekyll Static Site
For this current iteration of the site, I used ol-faithful, Jekyll, a static-site generator I've been using for a few years. Jekylls perfect for sites where clients don't need to go in and change content all too often, and it's also great for any small side projects you maybe working on. For instance, I used Jekyll to create <a href="//occreative.co/" target="_blank" rel="noopener">OC Creative</a>

### Gulp Build Tool to Compile SASS
I used Gulp, another tried-and-true build tool, to preprocess and minify my SCSS to minified CSS as well as implement Browsersync so I could look at what I'm coding in real-time. While lately I've been using plain NPM scripts as a build tool that processes my code and even Webpack for JS module bundling, I saw ShakyShane's <a href="https://github.com/shakyShane/jekyll-gulp-sass-browser-sync" target="_blank" rel="noopener">jekyll-gulp-sass-browser-sync</a> Jekyll StarterKit. This alone saves me an hour of setting up a Gulpfile with Jekyll. I simply cloned this repo and I was off to the races. If you want to quickly spin up a jekyll site and want to use SASS, I highly recommend using this repo.

### Deployed and Hosted Through Netlify
<a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a> was the answer to my prayers. It deploy and hosts your code through git pushes. It even has build commands so you can keep your github repo nice and clean, and build a "dist" or in the case of Jekll "_site" folder when you push your code to deploy. Set up if super easy: all you need to do it connect your github account to Netlify and choose the repo you want to use.

## Future Goals for This Site
This iteration of the site is solid. Besides a few tweaks (peformance, improved design, new icon set), it's a solid step to help my showcase my work and start blogging more regularly. However, I don't want this to be a premanent iteration. Here are some things I want to implement on this site:

### Improved Design
The design currently is only one color and have little to no design elements in the whole site. Eventually, I want to revisit my Figma file nad tweak the design to be a little less *minimalist*.

### React Front-end
I want to utilize React for a couple of reasons: 1) so I can showcase that I have worked with and shipped react projects before, 2) so I add a lot more interactivty into the site without having the page reload, and 3) speed up the site quite a bit. I'll most likely use Gatsby once I get the hang of GraphQL, as I haven't seen anything faster and with a lot of web app capabilities baked in.

### Wordpress Background
For a portfolio/blog such as this, Wordpress really is the best solution for a backend because of it's amazing authoring side. It's built around creating content, and that’s exactly what I'm doing in this site. Plus, Wordpress now has a REST API which I can hook up to the React front-end. Nice!

### Hosted on a VPS
I want to eventually start hosting on a VPS like DigitalOcean, where I host a couple of other sites. In addition to amazing speed, I'll be able to have complete control over the server environment (which I'll also get to learn how to do!).

#### Deploy through scripts
I want to rely less on third-party services for deploying as I'd like to learn how to do it the proper way. Main benfits would of course be that I'll be more hire-able, and that I'll be able to precisely control the deploy conditions I want;

## Conclusion
While its not exactly what I wanted to use, I'm happy that I wwas able to quickly launch my site using Jekyll, Gulp, and Netlify. I want to make a lot of changes to this site in early 2018, but in the meantime, I'm going to flesh out some more case studies and write a couple of more blog articles. So stay tuned!

#### Useful Links

- <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener">GatsbyJS</a>
- <a href="https://github.com/shakyShane/jekyll-gulp-sass-browser-sync" target="_blank" rel="noopener">Jekyll, Gulp, Sass, Browsersync StarterKit</a>
- <a href="https://netlify.com" target="_blank" rel="noopener">Netlify</a>