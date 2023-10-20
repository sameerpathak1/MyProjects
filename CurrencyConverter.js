
function convertCurrency() {
  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const convertedAmountDiv = document.getElementById("convertedAmount");
  
  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  
  // Define exchange rates as per your requirement
  const exchangeRates = {
    USD: {
      EUR: 0.85,
      GBP: 0.82,
      INR: 73.75
    },
    EUR: {
      USD: 1.18,
      GBP: 0.85,
      INR: 86.62
    },
    GBP: {
      USD: 1.39,
      EUR: 1.18,
      INR: 102.36
    },
    INR: {
      USD: 0.014,
      EUR: 0.012,
      GBP: 0.0098
    }
  };
  
  let convertedAmount;
  if (fromCurrency === toCurrency) {
    convertedAmount = amount; // no need to convert if the currencies are the same
  } else if (
    exchangeRates[fromCurrency] &&
    exchangeRates[fromCurrency][toCurrency]
  ) {
    convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
  } else {
    convertedAmount = "Conversion not available"; // handle case when conversion rate is not defined
  }
  
  convertedAmountDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
