var express   = require('express');
var reloader  = require('connect-livereload');
var path      = require('path');

module.exports.run = function(){


var app = express()

app.use( reloader() )
app.use( express.static( path.join( './', 'src' ) ) )
app.use( express.static( path.join( './', 'dist' ) ) )
app.use( express.static( path.join( './', 'demo' ) ) )

app.listen( 9000, '127.0.0.1', function(){
  console.log('Server Listening on 9000')
  console.log('Serving demo/index.html')

  console.log('Serving localhost:9000/dist as /')
  console.log('Serving localhost:9000/src as /')
});

  return module.exports.app = app;
}