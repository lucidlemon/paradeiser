# Paradeiser

### The only menu you will ever need to kill the hamburger.

Paradeiser is a slim package for dealing with one of the major problems in responsive webdesign: The navigation.

We all know that problem when it comes down to which navigation you might wanna use, and it is often the most comfortable way to go with any of the hamburger menus like [hamburgler](http://johnm.io/project/hamburgler/), but as many folks already discovered the hamburger menu is often not the best choice.

Asides from its recognition value, which is still pretty bad, it still affords to clicks to access your most important links.

On the other hand other methods like a select box (also double click needed) or displaying all the links on top like a styles `ul` list don't look that good.

So that's where _Paradeiser_ comes in. You get your most important links and even your company logo in the header bar, and for less important stuff you still have an overflow right there.

![Demo of Paradeiser](https://raw.github.com/lucidlemon/paradeiser/master/demo/mockup_03.png)

And it only weighs 1.5kb gzipped (1kb if you go for the css-only method).


## Features

Based upon webkit, so all the links take the space they need and center themselves, therefore your may use 1, 2 or even 5 links within the navbar.

You may also adjust the sizes etc by overwriting the variables of the scss file.


## Requirements

### CSS Only Version

* CSS.
* Really. That's it.

Cons: You can't use the overflow button.

### JS Version

* jQuery > 1.7


## Install via bower

`bower install Paradeiser --save`



## Usage

### Required Files

```
paradeiser/
└── dist/
    └── min/ 
	    ├── paradeiser.min.css
	    └── paradeiser.min.js
```


### HTML Markup

Within your head or wherever yout might find it suits you, include the source files

```html
<link rel="stylesheet" href="path-to/paradeiser.min.css">
<script src="path-to/paradeiser.min.js"></script>
```

And then place this stuff right below your `<body>` opening tag:


```html
<nav class="paradeiser">
    <a href="#">
        <img src="http://danielwinter.at/apple-touch-icon_76x76.png" alt="Logo of Daniel Winter" class="paradeiser_logo">
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_home.svg" alt="Navigate to Home">
        </div>
        <span>Home</span>
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_shop.svg" alt="Navigate to Shop">
        </div>
        <span>Shop</span>
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_cart.svg" alt="Navigate to Cart">
        </div>
        <span>Cart</span>
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_contact.svg" alt="Navigate to Contact">
        </div>
        <span>Contact</span>
    </a>
    <!-- and include the dropdown aswell - you need js for this -->
    <span class="paradeiser_dropdown">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_overflow.svg" alt="">
        </div>
        <span>More</span>
        <ul class="paradeiser_children">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Yolo</a></li>
        </ul>
    </span>
</nav>
```

For further demonstration, visit the [Demo pages!](demo/)

[Simple, pure CSS!](demo/demo1.html)
[With basic overflow!](demo/demo2.html)
[With overflow and text as Icon as well as hiding links based on device size!](demo/demo3.html)


## Plans for the Future

* Better animations on the popout
* Javascript options instead of pure css
* Desktop alternative for a full featured set
* Support for one-page websites with automatic highlighting of the correct link


## Why the heck is this called Paradeiser?

Paradeiser is Austrian-German for tomato, I just thought it might sound cool, and it has a nice ring to it (Paradise - eh?).

## Changelog

### v 0.1.0
Paradeiser is now visible on Desktop systems aswell, if you want to supress this behaviour, just set the `$paradeiser-mobile-only` variable to true while importing the paradeiser_variables.