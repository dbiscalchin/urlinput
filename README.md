# URL Input

**URL Input** is a jQuery plugin to provide user-friendly text fields for URLs. It adds a link beside the input element to allow the user to test the inserted URL. It also enforces the presence of a protocol (HTTP or HTTPS).

A demonstration is available at [JSFiddle](https://jsfiddle.net/0qjqnbng/1/).

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

Some custom settings can be provided when setting up the URL Input plugin. For example, the following settings could be provided to apply a [Bootstrap](http://getbootstrap.com/) styling:

```
$('#my_url').urlinput({
  linkText: '<span class="glyphicon glyphicon-new-window"></span>',
  linkClass: 'btn btn-default',
  linkWrapper: $('<span class="input-group-btn"></span>'),
});
```

The following settings are available:
- **linkText**: A string with the text or HTML used for the link, inside the anchor. Default: 'Try it!'.
- **linkClass**: A string with custom classes added to the anchor. Default: ''.
- **linkWrapper**: A jQuery object or HTML string with a custom wrapper to the anchor. Default: `$('<span></span>')`.
