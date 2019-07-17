document.addEventListener("DOMContentLoaded", function(event) {

    const searchInput = document.getElementById('search_input');
    const weatherForm = document.getElementById('weather_form');
    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const location = searchInput.value;

        output1.textContent = 'Loading...';
        output2.textContent = '';

        fetch('/weather?address=' + location)
            .then(( response ) => { response.json()
            .then(( data ) => {
                if ( data.error ) {
                    console.log(data.error);
                }
                else
                {
                    output1.textContent = data.location;
                    output2.textContent = data.forecast;
                };
            });
        });
    });
});