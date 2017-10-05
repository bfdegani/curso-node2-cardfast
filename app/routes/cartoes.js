module.exports = function(app) {

  //autoriza cartão
  app.post('/cartoes/autoriza', function(req,res){

      req.assert("numero", "Número do cartão é obrigatório e deve ter 16 caracteres").notEmpty().len(16,16);
      req.assert("bandeira","Bandeira é obrigatória").notEmpty();
      req.assert("ano_expiracao", "Ano de expiração é obrigatório e deve ter 4 dígitos").notEmpty().len(4,4);
      req.assert("mes_expiracao", "Mês de expiração é obrigatório e deve ter 2 dígitos").notEmpty().len(2,2)
      req.assert("cvv", "CVV é obrigatório e dever ter 3 ou 4 dígitos").notEmpty().len(3,4);

      req.getValidationResult().then(function(err){
        if(!err.isEmpty()){
          console.log("arquivo de entrada apresenta erros: ");
          console.log(err.array());
          res.status(400).json(err.array());
        }
        else{
          var cartao = req.body;
          console.log(cartao);
          cartao.status = 'AUTORIZADO';
          var response = { dados_cartao: cartao };
          res.status(201).json(response);
        }
      });
    });
}
