//const url = "https://tiems-d1ca.restdb.io/rest/clients?x-apikey:5f2c8c05013b1c34acef749b";

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

const breakout = $.ajax(settings).done(function (response) {
//  console.log(response);


 
 
 //data.forEach((Object) => {
 
 //console.log(Object)
});

var api = new $.fn.dataTable.Api( breakout );

$('#example').dataTable( {
    "drawCallback": function( dataSet ) {
      var api = new $.fn.dataTable.Api( dataSet );

         columns: [
            
            { data: "_id" },
            
            { data: "Client Name"},
            
            { data: "Sites"},
        ]

    }
    
}); 
var dataSet = JSON.parse(breakout);
