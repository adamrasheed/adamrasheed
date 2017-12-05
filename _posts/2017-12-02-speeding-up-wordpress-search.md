---
layout: post
title:  How to Speed up Search on Wordpress site sites with 1,000+ pages
date:   2017-12-02 08:00:03
categories: wordpress
excerpt: Wordpress sites can grow really fast, and making sure your search bar can handle large volumes of data can be quite a challenge. In this post, I'll give some tips on how to make your wordpress search bar work in large-scale sites.
---

## Why Wordpress Sites Slow Down as They Grow
As your website grows beyond a typical site with a handful of pages to the like of 1,000+ or even 10,000+ pages, your site will inevitably slow down due to a couple of reasons which include: a mishmash of spaghetti code that started to pile up as your code was getting fixed, and Your site having to query through thousands is not millions of lines of the databse.

## What if You have a site with 100k+ pages?
If you take on client work, you may one day get a client that has a 100k+ page wordpress site that needs to be optimized. Funny thing, that's exactly what happened to me. Now, if you have a well-coded theme and are one a good host like <a href="https://m.do.co/c/73cb4550a3de" target="_blank" rel="noopener">DigitalOcean</a> (use this link and get $10 credit for free) there shouldn't be too much of a problem in the trouble happens with the search bar on your site.

With a site of this scale, wordpress literally has to query through millions of rows in your database to retrieve a specific page your user search for. Luckily, there's a fix to drastically speed up the search function on your site.

## How to Fix The Problem and Speed Up Your Search
While wordpress has some great functionalities baked right in, you need to make sure you're optimizing as much as you can when scaling up. Besides making sure you have a good host, your theme is well-coded, and you're using a CDN, you should look improving/outsourcing some of the functionality of your site. For the sake of this post, we're going to talk about using elasticsearch to drastically speed up the search functionality of your site.

### Elastic Search Can Speed Up Queries
Elasticsearch is an open-source, highly scalable search engine that you can use in a variety of applications. The main difference between elasticsearch and a typical wordpress search functionality is that elasticsearch is *blazing-fast* even at extremely large-scale.

### Use ElasticPress Plugin
As with a lot of other solutions, there's a wordpress plugin for elastic search as well, and it’s called <a href="https://www.elasticpress.io/" target="_blank" rel="noopener">ElasticPress</a>. While I was working on a large scale wordpress project, Tate Lucas of <a href="https://dotdash.io/" target="_blank" rel="noopener">Dot Dash</a> told me about it and implimented into the project. Later that month I spoke at a local Wordcamp, and met Vasken Hauri, the VP of engineering at <a href="https://dotdash.io/" target="_blank" rel="noopener">10Up</a>, the company that created ElasticPress, and spoke with him about it. Since this experience, I've been a huge fan of it. (Also, big shout out to Tate: Thanks for bringing me on for hte project! It was great working with you!)

Simply put, Elasticpress uses `WP_Query` to fetch info from elasticsearch instead of the normal MySQL databse it would look at. More simply put, ElasticPress replaces your default wordpress search engine with a better one.

### Use Search as a Service to Host Your Data
Now that you've got a way to index your searches in a faster method, you need somewhere to store it. This is where a Search as a Service like <a href="http://www.searchly.com/" target="_blank" rel="noopener">Searchly</a> comes in. It powers the backend of your ElasticPress plugin, and even offers analytics, which can be a very powerful tool to help you determine how to better present your data and even better market your product or service. You wouldn't want to have your cache hosted on the same server your website is on as that would substantially slow down your site (especially if you're on a shared host).

## Conclusion
If you're working on a large-scale wordpress project. Elasticpress and a good Search as a Service tool like are invaluable options to speeding up your search and keeping your users happy.

#### Useful Links

- <a href="https://github.com/elastic/elasticsearch" target="_blank" rel="noopener">Elastic Search</a>
- <a href="https://www.elasticpress.io/" target="_blank" rel="noopener">ElasticPress</a>
- <a href="http://www.searchly.com/" target="_blank" rel="noopener">Searchly</a> 
- <a href="https://m.do.co/c/73cb4550a3de" target="_blank" rel="noopener">DigitalOcean Hosting</a>