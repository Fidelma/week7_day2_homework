import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      currencyData: {},
      euroValue: null,
      selectedToCurrency: null,
      currencyResult: null,
      selectedFromCurrency: null,
      currencyValue: null,
      euroResult: null,
      firstCurrency: null,
      firstCurrencyValue: null,
      secondCurrency: null,
      secondCurrencyResult: null

    },
    mounted() {
      this.getCurrencyData();

    },
    computed: {


    },
    methods: {
      getCurrencyData: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencyData = data.rates)
      },
      convertFromEuro: function () {
        this.currencyResult = (this.euroValue * this.selectedToCurrency).toFixed(2);
      },
      convertToEuro: function () {
        this.euroResult = (this.currencyValue / this.selectedFromCurrency).toFixed(2);
      },

      convertSelectedCurrencies: function () {
        this.secondCurrencyResult = ((this.firstCurrencyValue/ this.firstCurrency) * this.secondCurrency).toFixed(2);
      }

      }

  })
})
