/**
 * Created by wlh on 2016/10/10.
 */
'use strict';

let money2Hanzi = require('./index');
let assert = require("assert");

describe('index.js', function() {
  
  it("10011001 => 壹仟零壹万壹仟零壹元整 should be ok", function() {
    assert.equal('壹仟零壹万壹仟零壹元整', money2Hanzi.toHanzi(10011001))
  })
  
  it("11011011 => 壹仟壹佰零壹万壹仟零壹拾壹元整 should be ok", function() {
    assert.equal(money2Hanzi.toHanzi(11011011), '壹仟壹佰零壹万壹仟零壹拾壹元整')
  })

  it("10011001.01 => 壹仟零壹万壹仟零壹元壹分整 should be ok", function() {
    assert.equal('壹仟零壹万壹仟零壹元壹分整', money2Hanzi.toHanzi(10011001.01))
  })
})