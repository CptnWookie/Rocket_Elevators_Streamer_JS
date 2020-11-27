const fetch = require('node-fetch');

class Streamer {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getContent(name) {  
    this.name = name;
  }

  // constructor(desc, tmp, sun) {
  //   this.desc = desc;
  //   this.tmp = tmp;
  //   this.sun = sun;
  // }

  // getContent() {  
  //   const weatherVal = weather()
  //   const desc = weatherVal.first["weather"]["description"]
  //   const tmp = weatherVal.first["temp"]
  //   const sun = weatherVal.first["sunset"]

  //   const html = "<html><body><div>Weather: #{desc}, Temp: #{tmp}, Sunset: #{sun}</div></div></html>"
  //   return html   
  // }

  // weather() {
  //   const http = require("https");

  //   const options = {
  //     "method": "GET",
  //     "hostname": "weatherbit-v1-mashape.p.rapidapi.com",
  //     "port": null,
  //     "path": "/current?lon=46.8428435&lat=-71.2818835&units=M&lang=en",
  //     "headers": {
  //       "x-rapidapi-key": "cabeaa13femsh397090bcff2f3e1p1b842cjsn9ddf1fec8387",
  //       "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
  //       "useQueryString": true
  //     }
  //   };

  //   const req = http.request(options, function (res) {
  //   const chunks = [];

  //   res.on("data", function (chunk) {
  //     chunks.push(chunk);
  //   });

  //   res.on("end", function () {
  //     const body = Buffer.concat(chunks);
  //     console.log(body.toString());
  //   });
  //   });

  //   req.end();
  //   if (response.code == "200") {
  //       const result = JSON.parse(response.body)
  //       const resultdata = result["data"]
  //       return resultdata
  //   }else{
  //       return "It's not working"
  //   };
  //  
  // }
}

module.exports = Streamer;
