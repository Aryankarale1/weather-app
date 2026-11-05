
let Newscontainer = document.getElementById("Newscontainer");

function display(data) {
    Newscontainer.innerHTML = "";

    for (let i of data) {
        Newscontainer.innerHTML += `
            <div class="card">
                <img src="${i.urlToImage}" alt="News image">
                <h2>${i.title}</h2>
                <a href="${i.url}" target="_blank">Read More</a>
            </div>
        `;
    }
}

async function getData() {
    let res = await fetch(
       "https://newsapi.org/v2/everything?q=tesla&from=2026-09-17&sortBy=publishedAt&apiKey=51ee4009796b42e589c553d68c4fa1fd"
    );

    let data = await res.json();

    display(data.articles);
}

getData();
