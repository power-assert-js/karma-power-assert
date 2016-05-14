describe('client.assert', function() {
  var orininalAssert = assert;

  describe('.output.maxDepth', function () {
    beforeEach('put fixtures', function () {
      this.foo = {flag: true};
      this.bar = {}
    })

    afterEach(function () {
      assert = orininalAssert;
    })

    it('should be 2 as the customized value in karma.conf.js', function () {
      var expected = [this.foo]
      var actual = [this.bar]
      try {
        assert.deepEqual(expected, actual)
      } catch (e) {
        var error = e.message
        var message = [
          '  # adapter.spec.js:18',
          '  ',
          '  assert.deepEqual(expected, actual)',
          '                   |         |      ',
          '                   |         [Object{}]',
          '                   [Object{flag:true}]',
          ''
        ].join('\n') + '  '
        assert.deepEqual(error, message)
      }
    })
  })
})
