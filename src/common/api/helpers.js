const urlMap = {
  development: '',
  production: 'http://latey.nat300.top/sell/'
};
const baseUrl = urlMap[process.env.NODE_ENV];

// const ERR_OK = 0;

export function rootUrl (url) {
  return baseUrl + url;
}
