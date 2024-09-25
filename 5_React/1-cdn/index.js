/**import { a, b, plus, minus } from "./calculator.js";
console.log(a, b, plus(), minus());
**/

import calculater from "./calculator.js";
import lodash from "lodash";

console.log(calculater.a, calculater.b, calculater.plus(), calculater.minus());

const arr = [1, 1, 1, 1, 4, 4, 3, 3, 6, 7, 1, 3];
const unique = lodash.uniqBy(arr);
console.log(unique);
