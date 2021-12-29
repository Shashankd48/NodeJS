const url = require("url");

const address = "https://nodejs.org/dist/latest-v12.x/docs/api/path.html";

const parseUrl = url.parse(address, true);

console.log(parseUrl.host);
console.log(parseUrl.href);
console.log(parseUrl.protocol);
console.log(parseUrl);
