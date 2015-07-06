
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
  jQuery.fn.urlinput = function (options) {
    // Set default options
    var settings = $.extend({
      linkText: 'Try it!',
      linkClass: '',
      linkWrapper: $('<span></span>'),
      showFavicon: true,
      faviconWrapper: $('<span></span>'),
    }, options);

    // Add icon before input
    if (settings.showFavicon) {
      var $wrapper = $(settings.faviconWrapper);
      $wrapper.addClass('urlinput-icon-wrapper');
      $wrapper.html('<img src="//www.google.com/s2/favicons" />');
      this.before($wrapper);
    }

    // Add link after input
    var $wrapper = $(settings.linkWrapper);
    $wrapper.addClass('urlinput-link-wrapper');
    $wrapper.html('<a href="' + this.val() +'" target="_blank" class="' + settings.linkClass + '">' + settings.linkText  + '</a>');
    this.after($wrapper);

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
}(jQuery));
