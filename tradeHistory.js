
class TradeHistory {
  constructor() {
    this.trades = [];
  }

  addTrade(trade) {
    this.trades.push(trade);
  }

  getTotalVolume() {
    return this.trades.reduce((total, trade) => total + trade.volume, 0);
  }
}

module.exports = TradeHistory;

