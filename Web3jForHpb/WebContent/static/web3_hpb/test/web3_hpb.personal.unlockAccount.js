var chai = require('chai');
var web3_hpb = require('../index');
<<<<<<< HEAD
var testMethod = require('./helpers/test.method.js');

var method = 'unlockAccount';

var tests = [{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!'],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!', null],
    result: true,
    formattedResult: true,
    call: 'personal_'+ method
},{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!', 10],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!', 10],
    result: true,
    formattedResult: true,
    call: 'personal_'+ method
}];

testMethod.runTests('personal', method, tests);
=======
var testMhpbod = require('./helpers/test.method.js');

var method = 'unlockAccount';

var tests = [{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!'],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!', null],
    result: true,
    formattedResult: true,
    call: 'personal_'+ method
},{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!', 10],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 'P@ssw0rd!', 10],
    result: true,
    formattedResult: true,
    call: 'personal_'+ method
}];

testMhpbod.runTests('personal', method, tests);
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git
