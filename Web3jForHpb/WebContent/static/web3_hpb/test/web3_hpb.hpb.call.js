<<<<<<< HEAD
var testMethod = require('./helpers/test.method.js');

var method = 'call';

var tests = [{
    args: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: 11,
        gasPrice: 11
    }],
    formattedArgs: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: '0xb',
        gasPrice: '0xb'
    }, 'latest'],
    result: '0x31981',
    formattedResult: '0x31981',
    call: 'hpb_'+ method
},{
    args: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: 11,
        gasPrice: 11
    }, 11],
    formattedArgs: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: '0xb',
        gasPrice: '0xb'
    }, '0xb'],
    result: '0x31981',
    formattedResult: '0x31981',
    call: 'hpb_'+ method
}];

testMethod.runTests('hpb', method, tests);
=======
var testMhpbod = require('./helpers/test.method.js');

var method = 'call';

var tests = [{
    args: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: 11,
        gasPrice: 11
    }],
    formattedArgs: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: '0xb',
        gasPrice: '0xb'
    }, 'latest'],
    result: '0x31981',
    formattedResult: '0x31981',
    call: 'hpb_'+ method
},{
    args: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: 11,
        gasPrice: 11
    }, 11],
    formattedArgs: [{
        to: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
        data: '0x23455654',
        gas: '0xb',
        gasPrice: '0xb'
    }, '0xb'],
    result: '0x31981',
    formattedResult: '0x31981',
    call: 'hpb_'+ method
}];

testMhpbod.runTests('hpb', method, tests);
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git

