//import Plotly from 'plotly.js-dist-min';
//import _ from 'lodash-es';
//import answer from 'the-answer';
//import Chart from 'chart.js/auto'
//import Plotly from 'plotly.js-basic-dist-min';
import * as math from './mathjs.js'

let a = math.matrix([[1,1],[2,2]]);
let b = math.matrix([[1,2],[2,3]]);
console.log(a._data);
let c = math.multiply(a, b)
console.log(c._data);
//console.log(c.get([0,0]));
console.log(c._data[0], c._data[0][0]);