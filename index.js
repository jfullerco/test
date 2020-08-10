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

var api = new $.fn.dataTable.Api( settings );

$('#example').dataTable( {
    "drawCallback": function( settings ) {
        var api = new $.fn.dataTable.Api( settings );
 
        // Output the data for the visible rows to the browser's console
        // You might do something more useful with it!
        console.log( api.rows( {page:'current'} ).data() );
    }
} );