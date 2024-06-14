// código importando da documentação do sails js

// importando o sails 
var sails = require("sails");

// Antes de executar qualquer teste...
before(function(done) {

    // Aumente o tempo limite do Mocha para que o Sails tenha tempo suficiente para levantar, mesmo se você tiver muitos recursos.
    this.timeout(10000);

    sails.lift(
        {
            // Desabilita todos os logs, exceto erros e avisos:
            hooks: { grunt: false, csrf: false },
            log: { level: "warn" },
            
        },
        function (err) {
            if (err) {
                return done(err);
            }

            return done();
        }
    );
});

// Depois que todos os testes terminarem...
after(function (done) {
    sails.lower(done);
});
