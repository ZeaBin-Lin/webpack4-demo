import {getUrlParam} from './moduels/utils'
import _ from 'lodash';
import printMe from './print'
// import './styles/index.css'
// import Icon from './imgs/yzj.png';

console.log(getUrlParam())


function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // element.classList.add('hello');
  // element.classList.add('icon-shangyiye');
  
  // // 将图像添加到我们现有的 div。
  //  var myIcon = new Image();
  //  myIcon.src = Icon;

  //  element.appendChild(myIcon);

  return element;
}
document.body.appendChild(component());