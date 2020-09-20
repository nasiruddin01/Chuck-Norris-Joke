const getBtn = document.getElementById('getBtn');
const getText = document.getElementById('getText');

getBtn.addEventListener('click', function(event) { 
    fetch('https://api.chucknorris.io/jokes/random').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
    
        getText.innerText = data.value;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
 });


