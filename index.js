var app = require('./config/express')();

var port = 3001;

app.listen(port, function(){
  console.log("Servidor de cartoes rodando na porta " + port);
});
