export function getUrlParam(name) {//获取url中的参数
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null){
      return decodeURIComponent(r[2]);
  }
  return null; //返回参数值
}
