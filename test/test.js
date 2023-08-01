
const assert = require('assert');
const TradeHistory = require('../tradeHistory');

describe('TradeHistory', function () {
  it('should add trades correctly', function () {
    const tradeHistory = new TradeHistory();
    tradeHistory.addTrade({ symbol: 'XRP', volume: 100 });
    tradeHistory.addTrade({ symbol: 'BTC', volume: 200 });
    tradeHistory.addTrade({ symbol: 'LTC', volume: 300 });

    assert.strictEqual(tradeHistory.trades.length, 3);
  });

  it('should calculate total volume correctly', function () {
    const tradeHistory = new TradeHistory();
    tradeHistory.addTrade({ symbol: 'XRP', volume: 100 });
    tradeHistory.addTrade({ symbol: 'BTC', volume: 200 });
    tradeHistory.addTrade({ symbol: 'LTC', volume: 300 });

    assert.strictEqual(tradeHistory.getTotalVolume(), 600);
  });
});

