# 金额转汉子大写金额
```
 如 1234567890 => 壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾零元零角零分整
```

# 状态

[![Build Status](https://travis-ci.org/wanglihui/money2hanzi.svg?branch=master)](https://travis-ci.org/wanglihui/money2hanzi)

# 使用
```
   let money2Hanzi = require("./index");
   let hanzi = money2Hanzi.toHanzi(10011001);
   console.info(hanzi);
   //壹仟零壹万壹仟零壹元整
```

# 测试
```
   mocha

     index.js
       ✓ 10011001 => 壹仟零壹万壹仟零壹元整 should be ok
       ✓ 11011011 => 壹仟壹佰零壹万壹仟零壹拾壹元整 should be ok
       ✓ 10011001.01 => 壹仟零壹万壹仟零壹元壹分整 should be ok

```
