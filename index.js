const url = "https://tiems-d1ca.restdb.io/rest/clients?x-apikey:5f2c8c05013b1c34acef749b";

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://tiems-d1ca.restdb.io/rest/clients",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5f2c8c05013b1c34acef749b",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);

var dataSet = JSON.parse(response);
var breakout = dataset(Object);
 
 $(document).ready(function() {
    $('#example').DataTable( {
        data: breakout,
        columns: [
            { title: "Client Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    } );
 //data.forEach((Object) => {
 
 console.log(Object) })

 });