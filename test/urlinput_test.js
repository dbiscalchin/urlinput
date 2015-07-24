(function ($) {
  module('jQuery#urlinput', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.urlinput(), this.elems, 'should be chainable');
  });

  /*test('is urlinput', function () {
    expect(1);
    strictEqual(this.elems.urlinput().text(), 'urlinput0urlinput1urlinput2', 'should be urlinput');
  });*/

}(jQuery));
