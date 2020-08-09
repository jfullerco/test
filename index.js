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
};

//const breakout = $.ajax(settings).done(function (response) {
//  console.log(response);

//var dataSet = JSON.parse((breakout),true);
 
 
 //data.forEach((Object) => {
 
 //console.log(Object)
//})

 $(document).ready(function() {
    $('#example').DataTable( {
        "ajax": {
        "url": "settings",
        "dataSrc": ""
        },
        "columns": [
            
            { "data": 'object._id' },
            
            { "data": 'object.Client Name'},
            
            { "data": 'object.Sites'},
        ]
    } 
    
    )
console.log(breakout)
 });