async function fetchData () {
    // const response = await axios.get('https://api.api-ninjas.com/v1/quotes');
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {method: 'GET', headers: {'X-Api-Key':'vht0DblAtVbb/R5Hh8r2hQ==NbfTKI3hVjuqjWKG'}})
    console.log(response);
    let response2 = await response.json();
    console.log(response2[0].quote);
    console.log(response2[0].author);
    console.log(response2[0].category);
    console.log(response2[0]);
    return response2[0];
}

const res = fetchData();
// console.log(res);