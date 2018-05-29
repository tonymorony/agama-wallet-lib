const _komodoAssetChains = [
  'SUPERNET',
  'REVS',
  'PANGEA',
  'DEX',
  'JUMBLR',
  'BET',
  'CRYPTO',
  'COQUI',
  'HODL',
  'MSHARK',
  'BOTS',
  'MGW',
  'MVP',
  'KV',
  'CEAL',
  'MESH',
  'WLC',
  'MNZ',
  'AXO',
  'ETOMIC',
  'BTCH',
  'BEER',
  'PIZZA',
  'OOT',
  'NINJA',
  'VOTE2018',
  'GLXT',
  'EQL',
  'BNTN',
  'PRLPAY'
];

const _komodoCoins = _komodoAssetChains.concat([
  'CHIPS',
  'KMD',
  'KOMODO'
]);

const isKomodoCoin = (coin, skipKMD) => {
  return (_komodoCoins.find((element) => {
    if (skipKMD) {
      return element === coin.toUpperCase() && coin.toUpperCase() !== 'KMD' && coin.toUpperCase() !== 'KOMODO';
    } else {
      return element === coin.toUpperCase();
    }
  }));
}

// TODO: add at least 2 explorers per coin
const explorerList = {
  KMD: 'http://www.kmdexplorer.ru',
  KV: 'http://kv.explorer.supernet.org',
  OOT: 'http://explorer.utrum.io',
  BNTN: 'http://chain.blocnation.io',
  CHAIN: 'http://explorer.chainmakers.co',
  GLXT: 'http://glx.info',
  PRLPAY: 'http://explorer.prlpay.com',
  MSHARK: 'http://MSHARK.explorer.supernet.org',
  REVS: 'http://revs.explorer.supernet.org',
  SUPERNET: 'http://SUPERNET.explorer.supernet.org',
  DEX: 'http://DEX.explorer.supernet.org',
  PANGEA: 'http://PANGEA.explorer.supernet.org',
  JUMBLR: 'http://JUMBLR.explorer.supernet.org',
  BET: 'http://BET.explorer.supernet.org',
  CRYPTO: 'http://CRYPTO.explorer.supernet.org',
  HODL: 'http://HODL.explorer.supernet.org',
  SHARK: 'http://SHARK.explorer.supernet.org',
  BOTS: 'http://BOTS.explorer.supernet.org',
  MGW: 'http://MGW.explorer.supernet.org',
  WLC: 'http://WIRELESS.explorer.supernet.org',
  CHIPS: 'http://CHIPS1.explorer.supernet.org',
  COQUI: 'https://explorer.coqui.cash',
  EQL: 'http://178.62.240.191',
  MNZ: 'https://www.mnzexplorer.com',
  BTCH: 'http://www.btch.host',
  BTC: 'https://blockchain.info',
  HUSH: 'https://explorer.myhush.org',
  PIZZA: 'http://pizza.komodochainz.info',
  BEER: 'http://beer.komodochainz.info',
  NINJA: 'https://explorer.fund.ninja',
  VOTE2018: 'http://88.99.226.252',
  QTUM: 'https://explorer.qtum.org',
  DNR: 'http://denarius.name',
  LTC: 'https://live.blockcypher.com/ltc',
  DOGE: 'https://live.blockcypher.com/doge',
  DASH: 'https://live.blockcypher.com/dash',
  MONA: 'https://bchain.info/MONA',
  VIA: 'https://explorer.viacoin.org',
  VTC: 'http://explorer.vertcoin.info',
  NMC: 'https://namecha.in',
  DGB: 'https://digiexplorer.info',
  CRW: 'http://ex.crownlab.eu',
  ABY: 'http://explorer.artbyte.me',
  GAME: 'https://blockexplorer.gamecredits.com/transactions/',
  MAC: 'http://explorer.machinecoin.org',
  IOP: 'http://mainnet.iop.cash',
  BTG: 'https://btgexplorer.com',
  BCH: 'https://bitcoincash.blockexplorer.com',
  ZCL: 'http://explorer.zclmine.pro',
  SNG: 'https://explorer.snowgem.org/',
  ZMY: 'https://myriadexplorer.com',
  BTX: 'http://explorer.bitcore.cc',
  BTCZ: 'https://explorer.bitcoinz.site',
  HODLC: 'http://www.fuzzbawls.pw/explore/HOdlcoin/tx.php?tx=',
  SIB: 'https://chain.sibcoin.net/en/tx/',
  ZEC: 'https://explorer.zcha.in/transactions/',
  BLK: 'https://explorer.coinpayments.net/transaction.php?chain=4&hash=',
  ARG: 'https://prohashing.com/explorer/Argentum/',
  FAIR: 'https://chain.fair.to/transaction?transaction=',
};

const explorerListExt = {
  DEX: 'http://dex.explorer.komodo.services',
  SUPERNET: 'http://supernet.explorer.komodo.services',
};

module.exports = {
  isKomodoCoin,
  explorerList,
  explorerListExt,
  kmdAssetChains: _komodoAssetChains,
  kmdCoins: _komodoCoins, // all coins that share R-addresses
};