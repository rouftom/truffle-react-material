
var assert = require('assert')

describe('App test', function() {
  describe('#Demo test', function() {
    it('It says Hello World', function() {
			let greetins = "Hello World"
      assert.equal(greetins, "Hello World", "Expected Hello World")
    })
  })
})

