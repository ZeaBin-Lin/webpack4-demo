import {getUrlParam} from './moduels/utils'
import _ from 'lodash';

console.log(getUrlParam())


function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component());