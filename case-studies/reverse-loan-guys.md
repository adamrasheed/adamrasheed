---
layout: case_study
title: Reverse Loan Guys
image: '/assets/Reverse-Loan-Guys-Case-Study-Image.png'
tagline: Landing page for a Reverse Mortgage Company
excerpt: I helped a California-based reverse mortgage company based validate their idea and grow their business.
tags: [UI Design, Landing Page Development]
---

## Project Goals
Reverse Loan Guys was a company started by an existing client of mine who wanted to quickly validte his idea for a reverse mortgage company. We started the project with a simple landing page where customers would sign up for an information packet. As my client's idea started to take form, we grew to landing page into a small site with a couple of additional pages.

---

## Tech Stack for Simple Static Development
Unlike his previous project with me, my client didn't need to go into the site an change the content. This meant I could spin up a static site instead of a dynamic Wordpress/Kirby site.

I used <a href="https://pugjs.org/api/getting-started.html" target="_blank" rel="noopener">Pug</a> to create "partials" for bits of html code I'd be using over and over again, like header and footer, and even utilized mixins for repeating pieces of content like "The Basics".

<figure>
    <img
        src="/assets/reverse-loan-guys-pug-partials.png"
        alt="Pug Mixins"
    >
    <figcaption>I used Pug Mixins for these bullets</figcaption>
</figure>

**The Mixin I Created for The Bullets**

``` ruby
mixin features
    .sml.med--col-6.lrg--col-6.features__info
        block

mixin feature(feature)
    h4.feature #{feature}

mixin featureImg(imgUrl)
    img.sml.med--col-2.lrg--col-6.feature__img(src=imgUrl)
```

``` ruby
.row.features__row
    +featureImg('img/benefits-img-1.png')
    +features
        +feature('A reverse mortgage makes the equity in your home available to you any time you need it')

        +feature('There is never a monthly mortgage payment with a  reverse mortgage')

        +feature('Reverse mortgages are non-recourse loans. So you never have to worry about the balance of the loan exceeding the value of your home')

        +feature('Minimal qualifying')
```

I also used SCSS (compiled into minified and autoprefixed CSS) and jquery (which was also minified)


## Beyond Development - Setting up Marketing
In addition to design and development of the landing page and website, I also setup retargeting for the through perfect audience, which helped automate retargeting for Facebook and Google.

---

## Conclusion
This project was a great opporutinty to work on and gave me solid exposure for creating projects in the financial niche. It also gave me an oppurtunity to strengthen my skills in static site generation.

Check out the live site <a href="http://reverseloanguys.com" target="_blank" rel="noopener">here</a>.