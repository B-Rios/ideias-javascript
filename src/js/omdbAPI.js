const API_KEY = '4086adb9'
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`

const input = document.querySelector('#search-title')
const container = document.querySelector('#result-container')

function handleSearch() {
    var searchValue = input.value
    const search = `s=${searchValue}`
    const URL = BASE_URL + search
    return showResult(URL) 
}
document.querySelector('#search-btn').addEventListener('click', handleSearch)

function showResult(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.Search);
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
});
}