import {getUrlParam} from './moduels/utils'
import _ from 'lodash';
import './styles/index.css'

console.log(getUrlParam())


function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  return element;
}
document.body.appendChild(component());