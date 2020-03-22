/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlPase () {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345','&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArry = item.substring(1).split('=');
      let key = decodeURIComponent(tempArry[0]);
      let value = decodeURIComponent(tempArry[1]);
      obj[key] = value;
    });
  }
  return obj;
};
