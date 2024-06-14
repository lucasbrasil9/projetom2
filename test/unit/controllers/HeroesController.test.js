// importando o assert
const assert = require("assert");

// armazeno o controller desejado
const controller = require('../../../api/controllers/HeroesController');
const { mockAsync, RESPONSE, HeroCreate, HeroList } = require("../../util/index");

describe("HeroesController", () => {

    // teste para a função create no controller
    it("Create Heroes", async () => {
        const findStub = mockAsync(controller, "create", HeroCreate);
        const result = await controller.create({}, RESPONSE);
        assert.strictEqual(findStub.calledOnce, true);
        assert.deepStrictEqual(result, HeroCreate);
        findStub.restore();
    });

    it("Find Heroes", async () => {
        const findStub = mockAsync(controller, "list", HeroList);
        const result = await controller.list({}, RESPONSE);
        assert.strictEqual(findStub.calledOnce, true);
        assert.deepStrictEqual(result, HeroCreate);
        findStub.restore();
    });

    it("Find Heroes Guns", async () => {
        const findStub = mockAsync(controller, "listwithgun", HeroList);
        const result = await controller.listwithgun({}, RESPONSE);
        assert.strictEqual(findStub.calledOnce, true);
        assert.deepStrictEqual(result, HeroCreate);
        findStub.restore();
    });

});