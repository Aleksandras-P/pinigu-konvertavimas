const currencyInput = document.getElementById("currencyInput");
const firstCurrencySelect = document.getElementById("currencySelect");
const secondCurrencySelect = document.getElementById("secondCurrencySelect");
const submitBtn = document.getElementById("submitBtn");
const convertedResult = document.getElementById("convertedResult");
const resetBtn = document.getElementById("resetBtn");
const converterForm = document.getElementById("currencyConverterForm");

const currencies = {
  eur: 1,
  usd: 0.84,
  gbp: 1.15,
  rub: 0.011,
  cad: 0.62,
  pln: 0.24,
  cny: 0.12,
  sek: 0.094,
};

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  currencyConversion();
  resetBtn.style.display = "inline";
  submitBtn.disabled = true;
  submitBtn.style.opacity = 0.8;
  submitBtn.style.cursor = "default";
  submitBtn.style.backgroundColor = "rgba(255, 255, 255, 1)";
});

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  resetBtn.style.display = "none";
  submitBtn.disabled = false;
  submitBtn.style.opacity = 1;
  submitBtn.style.cursor = "pointer";
  converterForm.reset();
  convertedResult.innerHTML = ``;
  submitBtn.style.backgroundColor = "";
});

function currencyConversion() {
  const firstCurrencyValue = firstCurrencySelect.value;
  const secondCurrencyValue = secondCurrencySelect.value;
  const inputValue = currencyInput.value;

  if (firstCurrencyValue === secondCurrencyValue) {
    convertedResult.innerHTML = `
    <h3 class="uppercase">${Number(inputValue).toFixed(2)} ${firstCurrencyValue} yra ${Number(inputValue).toFixed(2)} ${secondCurrencyValue}</h3>
    <p class="uppercase"><b>Santykis:</b> 1.00 ${firstCurrencyValue} = 1.00 ${secondCurrencyValue}</p>
    `;
  } else if (firstCurrencyValue === "eur") {
    let result = 0;

    if (currencies[secondCurrencyValue] < 1) {
      result = Number(inputValue) / currencies[secondCurrencyValue];
    } else {
      result = Number(inputValue) * currencies[secondCurrencyValue];
    }

    let secondResult = 0;

    if (currencies[secondCurrencyValue] < 1) {
      secondResult = 1 / currencies[secondCurrencyValue];
    } else {
      secondResult = 1 * currencies[secondCurrencyValue];
    }

    convertedResult.innerHTML = `
    <h3 class="uppercase">${Number(inputValue).toFixed(2)} ${firstCurrencyValue} yra ${result.toFixed(2)} ${secondCurrencyValue}</h3>
    <p class="uppercase"><b>Santykis:</b> 1 ${firstCurrencyValue} = ${secondResult.toFixed(2)} ${secondCurrencyValue}</p>
    `;
  } else if (firstCurrencyValue != "eur") {
    let resultInEur = 0;

    if (currencies[firstCurrencyValue] < 1) {
      resultInEur = Number(inputValue) * currencies[firstCurrencyValue];
    } else {
      resultInEur = Number(inputValue) / currencies[firstCurrencyValue];
    }

    let result = 0;

    if (currencies[secondCurrencyValue] < 1) {
      result = resultInEur / currencies[secondCurrencyValue];
    } else {
      result = resultInEur * currencies[secondCurrencyValue];
    }

    let secondResultInEur = 0;

    if (currencies[firstCurrencyValue] < 1) {
      secondResultInEur = 1 * currencies[firstCurrencyValue];
    } else {
      secondResultInEur = 1 / currencies[firstCurrencyValue];
    }

    let secondResult = 0;

    if (currencies[secondCurrencyValue] < 1) {
      secondResult = secondResultInEur / currencies[secondCurrencyValue];
    } else {
      secondResult = secondResultInEur * currencies[secondCurrencyValue];
    }

    convertedResult.innerHTML = `
    <h3 class="uppercase">${Number(inputValue).toFixed(2)} ${firstCurrencyValue} yra ${result.toFixed(2)} ${secondCurrencyValue}</h3>
    <p class="uppercase"><b>Santykis:</b> 1 ${firstCurrencyValue} = ${secondResult.toFixed(2)} ${secondCurrencyValue}</p>
    `;
  }
}
