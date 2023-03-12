const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit-208format=json&origin=&srsearch=';

//querySelector Decuelve el primer elemento del documento que concida con el grupo especificado de selectores. Referencias: https://developer.mozilla,org/es/docs/web/API/Document/querySelector
const formDOM= document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results')

//boton del form

formDOM.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = inputDOM.value;
    if (!value){
        resultsFOM.innerHTML= '<div class="error"> Please enter valid search term</div>';
        return;
    }
    fetchPages(value);
})

const fetchPages = async(searchValue) => {
    resultsDOM.innerHTML = '<div class="loading"></div>';
    try{
        const response =await fetch(`${url}${searchValue}`);
        const data = await response.json();
        const results = data.query.search;
        if (results.length < 1){
            resultsDOM.innerHTML = '<div class="error">no matching results. Please try again </div>';
            return;
        }
        renderResults(results);
    }catch (error){
        resultsDOM,innerHTML='<div class="error"> there was an error... </div>';
    }

}

//url del sitio web
const renderResults = (list) => {
    const cardsList = list
      .map((item) => {
        const { title, snippet, pageid } = item;
        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
              <h4>${title}</h4>
              <p>
                ${snippet}
              </p>
            </a>`;
      })
      .join('');
    resultsDOM.innerHTML = `<div class="articles">
            ${cardsList}
          </div>`;
};