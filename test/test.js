const Contract = artifacts.require("Contract");

import jsutil from '../src/jsutil';
// import tsutil from '../src/tsutil';

contract("Contract", function(accounts) {

  it("Should return Hello", async function() {

    const contract = await Contract.new();

    jsutil();
    // tsutil();

    const str = await contract.test();
    assert.equal(str, "Hello");

  });

});
