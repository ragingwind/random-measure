# random-measure

> Returns randomized measure data in between range scopes you given


## Install

```
$ npm install --save random-measure
```

## Usage

```js
var RandomMeasure = require('random-measure');

var random = RandomMeasure('-128.0~128.0');
//=> 100 or -10 or -120 or 128
```

## API

### RandomMeasure(rangeString)

#### rangeString

`rangeString` has a strict format to parse its, You must pass string of range type having `~` between in from/to numbers. ex) -128~128 5000~10000

*Required*  
Type: `string`

## License

MIT © [Jimmy Moon](http://ragingwind.me)
