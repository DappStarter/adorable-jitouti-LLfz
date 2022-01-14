require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember essay inner knife fringe square'; 
let testAccounts = [
"0x5607751cef3ff56569bbbfbd8fe72c4ecd2cf4ec0ef5349a8048765e9059c7f1",
"0xae9168d5022a2f8ad8c06b34492d037bf5809b54a151e1b28cd1b8ceae2c875a",
"0xfee6814d8ed598f5d61c64430746bc1475ab45e70ae996c764aae3e58f9416c5",
"0xe7d57393b090dcb48eae091a94d4a707984addbea674ee4c9077cc68b08f0b15",
"0x318c275b47d0f9c59cda3c90a986b61fd9cf46f4642b9a90ceda4016eff01571",
"0xb3d32a48df2261e0130594d120357802488861b35c190d29b395bf31b27c0391",
"0x5d2c4f75a209b25e51f67fb6420a58a5530dbbdf1cb107205caf2b9181e6b3bc",
"0xcedae5a069fcce40987c110cd86788f52e03e12f064b22d2aaddf88e13d888fc",
"0xe72f283dd10a170fc8bcdc64c8e2bedbde378d3fbaa9e59efe234c6fac31bdbe",
"0xc55561791e11b048860fa0fb606e008265849fdecec5eebb7bb59a07a5250d65"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


