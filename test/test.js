/* 
 * NOTE: Actual contracts and web3 stuff is disabled (commented out).
 * The point of this is to show that mocha tests can resolve both
 * es6 syntax and imported Typescript files.
 */

var assert = require('assert');
// const Contract = artifacts.require("Contract");

import jsutil from '../src/jsutil.js';
import tsutil from '../src/tsutil.ts';

describe("Contract", function(accounts) {

  it("Should return Hello", async function() {

    // const contract = await Contract.new();
    // const contract = getTruffleContract(Contract);

    await jsutil(500);
    await tsutil(500);

    // const str = await contract.test();
    // assert.equal(str, "Hello");

    assert.equal([1, 2, 3].indexOf(4), -1);

  });

});
