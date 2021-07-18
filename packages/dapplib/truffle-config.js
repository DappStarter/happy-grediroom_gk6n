require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stool rice night minor include kiwi swap gauge'; 
let testAccounts = [
"0x288e935ebb71f6f2e3126085894d1c950e88e4da767077f21e994524692dd87f",
"0x4b89064c1b7e3300e28833b016d3bb7835995df8695cf524d45b34d7a4d51938",
"0x7d5475bb37e8e4980afd83e83019b7f3b3164c3e9b01592a413dde3cd65fef18",
"0x6a60553999f7cec32a8a2e9ca81dadb5c4809d9efa50441696a3cda13d2388a0",
"0x057deea6867b7dee62e2b2b62bc66295d3c34d29ed4532c4209cd7c1a2a9c859",
"0x6437091d3593e927877544342ba64d5d4d494556227e8bd3669995d7e84b2f06",
"0x34d7b8550df8c92c9f03c2c8229cc00353e360bd4bb5acfdf2e0b4156ac7b637",
"0x38517dcf77233aafd6b9733b0572f3e925d5bedd773d4fc94caf9507f10d6685",
"0x4746b4af969d38bb693e0fb1c15652c7d2fbde11b53fe129c3d990605e9ca936",
"0x56460556d167a006d3938414dee33669cbbba541e54b996f7d86acd54cc65e70"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

