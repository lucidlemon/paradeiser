#Paradeiser

### The only menu you will ever need to kill the hamburger.

Paradeiser is a slim package for dealing with one of the major problems in responsive webdesign: The navigation.

We all know that problem when it comes down to which navigation you might wanna use, and it is often the most comfortable way to go with any of the hamburger menus like [hamburgler](http://johnm.io/project/hamburgler/), but as many folks already discovered the hamburger menu is often not the best choice.

Asides from its recognition value, which is still pretty bad, it still affords to clicks to access your most important links.

On the other hand other methods like a select box (also double click needed) or displaying all the links on top like a styles `ul` list don't look that good.

So that's where _Paradeiser_ comes in. You get your most important links and even your company logo in the header bar, and for less important stuff you still have an overflow right there.

And it only weighs 1.5kb gzipped (1kb if you go for the css-only method).

## Requirements

### CSS Only Version

* CSS.
* Really. That's it.

Cons: You can't use the overflow button.

### JS Version

* jQuery > 1.7



## Usage

### HTML Markup

Within your head or wherever yout might find it suits you, include the source files

```html
<link rel="stylesheet" href="path-to/paradeiser.min.css">
<script src="path-to/paradeiser.min.js"></script>
```

And then place this stuff right below your `<body>` opening tag:


```html
<div class="paradeiser">
    <a href="#">
        <img src="http://danielwinter.at/apple-touch-icon_76x76.png" alt="Logo of Daniel Winter" class="logo">
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_home.svg" alt="Navigate to Home" class="icon">
        </div>
        <span>Home</span>
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_shop.svg" alt="Navigate to Shop" class="icon">
        </div>
        <span>Shop</span>
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_cart.svg" alt="Navigate to Cart" class="icon">
        </div>
        <span>Cart</span>
    </a>
    <a href="#">
        <div class="paradeiser_icon_canvas">
            <img src="img/menu_contact.svg" alt="Navigate to Contact" class="icon">
        </div>
        <span>Contact</span>
    </a>
</div>
```
