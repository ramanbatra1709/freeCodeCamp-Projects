const currencyUnits = {
  'ONE HUNDRED': 100,
  'TWENTY': 20,
  'TEN': 10,
  'FIVE': 5,
  'ONE': 1,
  'QUARTER': 0.25,
  'DIME': 0.1,
  'NICKEL': 0.05,
  'PENNY': 0.01
};

const getCashInDrawerObject = (cid) => cid.reduce((object, currency) => {
                                                    object[currency[0]] = currency[1];
                                                    return object;
                                                  }, {});

function checkCashRegister(price, cash, cid) {
  let changeToReturn = cash - price;
  const total = cid.reduce((sum, val) => sum + val[1], 0);
  if (total < changeToReturn) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }
  else if (total == changeToReturn) {
    return {status: 'CLOSED', change: cid};
  }
  const cashInDrawer = getCashInDrawerObject(cid);
  const change = [];
  for (let currencyUnit in currencyUnits) {
    let amountOfThisCurrencyUsed = 0;
    while(cashInDrawer[currencyUnit] > 0 && changeToReturn >= currencyUnits[currencyUnit]) {
      changeToReturn = parseFloat(changeToReturn - currencyUnits[currencyUnit]).toFixed(2);
      cashInDrawer[currencyUnit] -= currencyUnits[currencyUnit];
      amountOfThisCurrencyUsed += currencyUnits[currencyUnit];
    }
    if (amountOfThisCurrencyUsed > 0) {
      change.push([currencyUnit, Math.round(amountOfThisCurrencyUsed*100)/100]);
    }
  }
  if (changeToReturn > 0 || change.length == 0)
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  return {status: 'OPEN', change};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
