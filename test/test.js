QUnit.test("convert", function(assert) {
	assert.equal(convert(0), 0, "0 lb == 0 kg");
	assert.equal(convert(1), 0.453592, "1 lb == 0.43592");
	assert.equal(convert(2), 0.907184, "2 lb == 0.907184");
	assert.equal(convert(3), 1.360776, "3 lb == 1.360776");
	assert.equal(convert(10), 4.53592, "10 lb == 4.53592");
	assert.equal(convert(332549), 150841.566008, "332549 lb == 150841.566008");
    assert.equal(convert(-1), -0.453592, "-1 lb == -0.43592");
    assert.throws(function(){convert("bob")}, /this is not a number/, "passing null raises an exception")
 });