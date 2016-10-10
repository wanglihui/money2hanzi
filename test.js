/**
 * Created by wlh on 2016/10/10.
 */
'use strict';

let money2Hanzi = require('./index');
let assert = require("assert");

describe('index.js', function() {
  
  it("should be ok", function() {
    assert.equal('壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾零元零角零分整', money2Hanzi.toHanzi(1234567890))
  })
})