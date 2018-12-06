var assert = require('assert');
const Contract = artifacts.require("Contract");

import jsutil from '../src/jsutil.js';
import tsutil from '../src/tsutil.ts';

describe("Contract", function(accounts) {

  it("Should return Hello", async function() {

    const contract = await Contract.new();

    await jsutil(500);
    await tsutil(500);

    const str = await contract.test();
    assert.equal(str, "Hello");

    assert.equal([1, 2, 3].indexOf(4), -1);

  });

});
