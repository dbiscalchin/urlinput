# URL Input

**URL Input** is a jQuery plugin to provide user-friendly text fields for URLs. It adds a link on the right side of the input element to allow the user to test the inserted URL and shows the favicon of the inserted website (taken from [Google API](http://www.google.com/s2/favicons)). It also enforces the presence of a protocol (HTTP or HTTPS).

A demonstration is available at [JSFiddle](https://jsfiddle.net/0qjqnbng/4/).

## Requirements

URL Input requires the [jQuery library](https://jquery.com/).

## Usage

Create a form with a text field which will hold an URL.

```
<form action="submit.php" method="POST">
  <label for="my_url">Some url</label>
  <input type="text" name="my_url" id="my_url" />
  <input type="submit" value="Send" />
</form>
```

To use the default settings, just call `urlinput` method on the jQuery object.

```
jQuery(function ($) {
  $('#my_url').urlinput();
});
```

This will set up the URL Input plugin on the selected fields.

## Settings

Some custom settings can be provided when setting up the URL Input plugin. For example, the following settings could be provided to change the link's text and add custom classes to it:

```
$('#my_url').urlinput({
  linkText: 'Go!',
  linkClass: 'btn btn-default',
});
```

The following settings are available:
- **fieldClass**: A string with classes separated by whitespaces to be added to the input element. Default ``''``.
- **showLink**: Whether to show the link for testing the URL. Default: ``true``.
- **linkText**: A string with the text or HTML used for the link, inside the anchor. Default: `'Try it!'`.
- **linkClass**: A string with custom classes separated by whitespaces added to the anchor. Default: `''`.
- **linkWrapper**: A jQuery object or HTML string with a custom wrapper to the anchor. Default: `$('<span></span>')`.
- **showFavicon**: Whether to show the favicon of the inserted URL. Default: `true`,
- **faviconWrapper**: A jQuery object or HTML string with a custom wrapper to the favicon. Default: `$('<span></span>')`.
- **widgetWrapper**: A jQuery object or HTML string with a custom wrapper to the whole widget. Default: ``$('<div></div>')``.

## Themes

Instead of providing individual settings, by passing only the `theme` option to the plugin, will load a set of default values to provide a pre-defined appearance or behavior. For example, to apply a [Bootstrap](http://getbootstrap.com/) styling, a simple call like this would work:

```
$('#my_url').urlinput({ theme: 'bootstrap' });
```

Still, other properties can be passed to override theme values. For example, to replace the icon with a text:

```
$('#my_url').urlinput({
  theme: 'bootstrap',
  linkText: 'Go!',
});
```

The following themes are avaliable:
- **default**: Just load default settings. Can be omitted.
- **bootstrap**: Apply a [Bootstrap](http://getbootstrap.com/) styling.
