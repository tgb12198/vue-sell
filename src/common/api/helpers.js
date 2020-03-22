const urlMap = {
  development: '',
  production: 'http://latey.cn/sell/'
};
const baseUrl = urlMap[process.env.NODE_ENV];

// const ERR_OK = 0;

export function rootUrl (url) {
  return baseUrl + url;
}
