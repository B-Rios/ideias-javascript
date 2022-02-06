const API_KEY = '4086adb9'
const page = 'page='
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&r=json&`
const input = document.querySelector('#search-title')
const container = document.querySelector('#result-container')

document.querySelectorAll('.search-btn').forEach(element => element.addEventListener('click', e => handleSearch(e))) 

function handleSearch(e) {
    const btnType = e.srcElement.alt
    container.innerHTML = ''
    var searchValue = input.value
    const search = `s=${searchValue}`
    const URL = BASE_URL + search
    return requestAPI(URL, btnType) 
}

function requestAPI(url, btnType) {
    fetch(url)
    .then(res => res.json())
    .then(results => {
        getResults(results, url, btnType)
    })
    
}

function getResults(results, url, btnType) {
    const totalResults = results.totalResults
    const pages = Math.ceil(totalResults/10)
    console.log(pages);
    for (let i = 1; i < pages+1; i++) {
        console.log(url + `&page=${i}`);
        fetch(url + `&page=${i}`)
        .then(res => res.json())
        .then( data => {
            if (btnType == 'json') {
                showJson(data)
            }
            if (btnType == 'result') {
                showResult(data)
            }
        }
        )
    }
}

function showJson(data){
    console.log(data);
    data.Search.forEach(element => {
        const el = document.createElement('div');
        el.innerHTML = JSON.stringify(JSON.stringify(element))
        container.appendChild(el)
    }) 
}

function showResult(data){
    console.log(data);
    data.Search.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');
    
        text.innerHTML = `${element.Title}`;
        image.src = element.Poster;
        el.appendChild(image);
        el.appendChild(text);
        container.appendChild(el);
    });
}