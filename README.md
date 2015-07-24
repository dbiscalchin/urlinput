# URL Input

**URL Input** is a jQuery plugin to provide user-friendly text fields for URLs. It adds a link on the right side of the input element to allow the user to test the inserted URL and shows the favicon of the inserted website (taken from [Google API](http://www.google.com/s2/favicons)). It also enforces the presence of a protocol (HTTP or HTTPS).

A demonstration is available at [JSFiddle](https://jsfiddle.net/0qjqnbng/5/).

## Requirements

URL Input requires the [jQuery library](https://jquery.com/) v1.6.4 or later.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/dbiscalchin/urlinput/master/dist/jquery.urlinput.min.js
[max]: https://raw.githubusercontent.com/dbiscalchin/urlinput/master/dist/jquery.urlinput.js

In your web page, create a form with a text field which will hold an URL. For example:

```html
<form action="submit.php" method="POST">
  <label for="my_url">Some url</label>
  <input type="text" name="my_url" id="my_url" />
  <input type="submit" value="Send" />
</form>
```

Then, set up URL Input on the appropriate fields:

```html
<script src="jquery.js"></script>
<script src="dist/urlinput.min.js"></script>
<script>
  jQuery(function ($) {
    $('#my_url').urlinput(); // Sets up URL Input on the selected fields
  });
</script>
```

## Settings

Some custom settings can be provided when setting up the URL Input plugin. For example, the following settings could be provided to change the link's text and add custom classes to it:

```js
$('#my_url').urlinput({
  linkText: 'Go!',
  linkClass: 'btn btn-default',
});
```

The following settings are available:
- **fieldClass**: A string with classes separated by whitespaces to be added to the input element. Default: `''`.
- **showLink**: Whether to show the link for testing the URL. Default: `true`.
- **linkText**: A string with the text or HTML used for the link, inside the anchor. Default: `'Try it!'`.
- **linkClass**: A string with custom classes separated by whitespaces added to the anchor. Default: `''`.
- **linkWrapper**: A jQuery object or HTML string with a custom wrapper to the anchor. Default: `'<span></span>'`.
- **showFavicon**: Whether to show the favicon of the inserted URL. Default: `true`,
- **faviconClass**: A string with custom classes separated by whitespaces added to the favicon. Default: `''`.
- **faviconWrapper**: A jQuery object or HTML string with a custom wrapper to the favicon. Default: `'<span></span>'`.
- **widgetWrapper**: A jQuery object or HTML string with a custom wrapper to the whole widget. Default: `'<div></div>'`.

## Themes

Instead of providing individual settings, by passing only the `theme` option, the plugin will load a set of default values to provide a pre-defined appearance or behavior. For example, to apply a [Bootstrap](http://getbootstrap.com/) styling, a simple call like this would work:

```js
$('#my_url').urlinput({ theme: 'bootstrap' });
```

Still, other parameters can be passed to override theme values. For example, to hide the website's icon:

```js
$('#my_url').urlinput({
  theme: 'bootstrap',
  showFavicon: false,
});
```

The following themes are currently available:
- **default**: Just load default settings. Can be omitted.
- **bootstrap**: Add [Bootstrap](http://getbootstrap.com/) classes.

## License

MIT © Daniel Catarino Biscalchin
