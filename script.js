fetch('https://whatyearisit-backend-ecru.vercel.app/year')
.then(response => response.json())
.then(data => {
    const yearString = data.year.toString();
    document.querySelector('#year').innerHTML += `
        <p id="year">${yearString}</p>`
})