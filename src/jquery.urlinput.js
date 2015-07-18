
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

  function addProtocol(elem) {
    var $elem = $(elem);
    var val = $elem.val();
    var endProtocol = (val.length < 4)? val.length : 4;
    var protocol = val.slice(0, endProtocol);
    if (protocol != 'http'.slice(0, endProtocol) || val.length == 0) {
      // Set val with http protocol
      val = 'http://' + val;
      $elem.val(val);
    }
  }

  function updateWidget(inputElem, settings) {
    var $inputElem = $(inputElem);

    // Add http protocol if not informed
    addProtocol($inputElem);

    // Set link URL
    var $link = $inputElem.next('.urlinput-link-wrapper').find('a').attr('href', $inputElem.val());

    // Update favicon
    if (settings.showFavicon) {
      var hostname = $link.prop('hostname');
      var faviconSrc = '//www.google.com/s2/favicons?domain=' + ($hostname? $hostname : '.');
      $inputElem.prev('.urlinput-icon-wrapper').find('img').attr('src', faviconSrc);
    }
  }

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
      $iconWrapper.html('<img src="//www.google.com/s2/favicons" class="' + settings.faviconClass + '"/>');
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

      // Add protocol to default value
      addProtocol($this);

      // Set interval to update widget on focus
      $this.focus(function (ev) {
        var $this = $(this); // updated element

        // Create iterval to check input and update widget
        var updateInterval = setInterval(function () {
          updateWidget($this, settings);
        }, 2000);
        $this.data('updateInterval', updateInterval);
      });

      // Remove interval to update widget on blur
      $this.blur(function (ev) {
        // Ensure data is updated
        updateWidget($this, settings);

        // Clear interval
        var updateInterval = $this.data('updateInterval');
        if (updateInterval) {
          clearInterval(updateInterval);
        }
        $this.data('updateInterval', false);
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
      faviconClass: '',
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
