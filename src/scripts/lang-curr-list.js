const url = 'https://restcountries.eu/rest/v2';

let currencies = [];
let languages = [];

function getLangs () {
  const xhttp = new XMLHttpRequest(); // eslint-disable-line
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      languages = JSON.parse(this.response);
      languages = languages
        .sort((a, b) => b.population - a.population)
        .slice(0, 70)
        .map(x => x.languages[0].name);
      languages = [...new Set(languages)];
      languages.forEach(lang => {
        document.getElementById('languages').insertAdjacentHTML(
          'beforeend',
          `
            <option value="${lang}">${lang}</option>
            `
        );
      });
    }
  };
  xhttp.open('GET', `${url}/all`, true);
  xhttp.send();
}

function getCurrencies () {
  const xhttp = new XMLHttpRequest(); // eslint-disable-line
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      currencies = JSON.parse(this.response);
      currencies = currencies
        .sort((a, b) => b.population - a.population)
        .slice(0, 70)
        .map(x => x.currencies[0].code);
      currencies = [...new Set(currencies)];
      currencies.forEach(curr => {
        document.getElementById('currency').insertAdjacentHTML(
          'beforeend',
          `
              <option value="${curr}">${curr}</option>
              `
        );
      });
    }
  };
  xhttp.open('GET', `${url}/all`, true);
  xhttp.send();
}

getLangs();
getCurrencies();
