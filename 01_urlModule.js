const { log } = require('console');
const url = require('url');
const urlString =  "https://us02web.zoom.us/rec/play";
const parsedUrl = url.parse(urlString,true);
console.log(parsedUrl);

// Getting url component
console.log(`Protocol : ${parsedUrl.protocol}`);
console.log(`Host : ${parsedUrl.host}`);
console.log(`HostName : ${parsedUrl.hostname}`);
console.log(`path : ${parsedUrl.path}`);
console.log(`Query : ${JSON.stringify(parsedUrl.query)}`);

//formatted URL
const formattedUrl = url.format({
    protocol : "https",
    host : "www.codemind.com",
    port : 8000,
    pathname : "/path/to/resource",
    query : {
        param1 : "value1",
        param2 : "value2",
        param3 : "value3"
    }
});
console.log(`FormattedURL : ${formattedUrl}`);