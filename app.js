const getRecipe = () => {

    //Get user data

    const query = document.getElementById('ingredients');


    //Establish API Request

    const config = {

        key: "YIJuEEwHTrMZSd9KmAxdhA==pC6H6UCRTpwohOQ3",
        destination: "https://api.api-ninjas.com/v1/recipe?query="
    
    }

    const getRecipeData = async () => {

        const headers = new Headers({
            'X-Api-Key': config.key
        });

        const requestOptions = {
            method: 'GET',
            headers: headers
        }

        let response = await fetch(config.destination, requestOptions);
        let results = await response.json();
        console.log(results);
        return results;


    }

    getRecipeData();

}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    getRecipe();
})