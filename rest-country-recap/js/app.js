const restCountries = async () => {
    const url = `https://restcountries.com/v3.1/all`
    const res = await fetch(url)
    const data = await res.json()
    displayCountries(data)
}
const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ')
}
//original 
/* const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}"> 
            <h4>${country.capital}</h4>
            <h4>${country.population}</h4>
        </div>
    `
} */
//optiona 1 destructuring
const getCountryHTML = country => {
    const { name, capital, population, flags } = country
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}"> 
            <h4>${capital}</h4>
            <h4>${population}</h4>
        </div>
    `
}


restCountries()