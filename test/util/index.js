// importando o sinon
const sinon = require("sinon");
const mockAsync = (model, module, result = null) => {
    return sinon.stub(model, module).resolves(result);
};

// armazena o valor do json e o status na variável
const RESPONSE = {
    json: function (data) {
        return data;
    },
    status: function (data) {
        return data;
    },
};

// armazeno os dados retornados do controller
const HeroCreate= {
    name: 'super', 
    power: 'voar',
    age: '19',
    secretIdentity: 'lucas'
};

const HeroList = {
    name: 'super', 
    power: 'voar',
    age: '19',
    secretIdentity: 'lucas'
};

const HeroListGun = {
    name: 'super', 
    power: 'voar',
    age: '19',
    secretIdentity: 'lucas',
    name: 'test',
    type: 'test'
}

module.exports = {
    mockAsync,
    RESPONSE,
    HeroCreate,
    HeroList,
    HeroListGun
};