
/**
 * URL Input plugin for jQuery
 * @author Daniel Catarino Biscalchin
 *
 * Provides a widget for text inputs holding URL values.
 * It enforces the protocol and adds a link to test the URL.
 *
 * Basic usage: $('#my-text-input').urlinput()
 */

(function ($) {
  $.fn.urlinput = function (options) {
    // Set options based on theme or use default
    var theme = 'default';
    if (options && options.theme) {
      theme = options.theme;
    }
    var settings = $.extend({}, $.fn.urlinput.themes['default'],
                                $.fn.urlinput.themes[theme], options);

    // Add wrapper to input element
    var $widgetWrapper = $(settings.widgetWrapper);
    $widgetWrapper.addClass('urlinput-widget-wrapper');
    this.wrap($widgetWrapper);

    // Add extra classes to input element
    this.addClass('urlinput-field ' + settings.fieldClass);

    // Add icon before input
    if (settings.showFavicon) {
      var $iconWrapper = $(settings.faviconWrapper);
      $iconWrapper.addClass('urlinput-icon-wrapper');
      $iconWrapper.html('<img src="//www.google.com/s2/favicons" />');
      this.before($iconWrapper);
    }

    // Add link after input
    var $linkWrapper = $(settings.linkWrapper);
    $linkWrapper.addClass('urlinput-link-wrapper');
    $linkWrapper.html('<a href="' + this.val() +'" target="_blank" class="' + settings.linkClass + '">' + settings.linkText  + '</a>');
    this.after($linkWrapper);
    if (!settings.showLink) {
      // Favicon depends on the link, so it is just hidden
      $linkWrapper.hide();
    }

    // Iterate over each element to add a different value and handler
    this.each(function (i, elem) {
      var $this = $(this); // current element

      // Set default value
      var val = $this.val();
      var protocol = val.slice(0, 4);
      if (!(protocol == 'http')) {
        // Set val with http protocol
        val = 'http://' + val;
        $this.val(val);
      }

      // Add handler
      $this.change(function (ev) {
        var $this = $(this); // changed element
        var val = $this.val();

        // Add http protocol if not informed
        var protocol = val.slice(0, 4);
        if (!(protocol == 'http')) {
          // Set val with http protocol
          val = 'http://' + val;
          $this.val(val);
        }

        // Set link URL
        var $link = $this.next('.urlinput-link-wrapper').find('a').attr('href', $this.val());

        // Update favicon
        if (settings.showFavicon) {
          var faviconSrc = '//www.google.com/s2/favicons?domain=' + $link.prop('hostname');
          $this.prev('.urlinput-icon-wrapper').find('img').attr('src', faviconSrc);
        }
      });

      // Erase value when submitting if it has only the protocol
      $this.closest('form').submit(function (ev) {
        if ($this.val() == 'http://') {
          $this.val('');
        }
      });
    });

    return this;
  }

  $.fn.urlinput.themes = {
    default: {
      fieldClass: '',
      showLink: true,
      linkText: 'Try it!',
      linkClass: '',
      linkWrapper: $('<span></span>'),
      showFavicon: true,
      faviconWrapper: $('<span></span>'),
      widgetWrapper: $('<div></div>'),
    },
    bootstrap: {
      fieldClass: 'form-control',
      linkText: '<span class="glyphicon glyphicon-new-window"></span>',
      linkClass: 'btn btn-default',
      linkWrapper: $('<span class="input-group-btn"></span>'),
      faviconWrapper: $('<span class="input-group-addon"></span>'),
      widgetWrapper: $('<div class="input-group"></div>'),
    },
  };
}(jQuery));
