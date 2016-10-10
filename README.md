# 金额转汉子大写金额
```
 如 1234567890 => 壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾零元零角零分整
```

# 使用
```
   let money2Hanzi = require("./index");
   let hanzi = money2Hanzi.toHanzi(1234567890);
   console.info(hanzi);
   //壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾零元零角零分整
```