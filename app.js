const getRecipe = () => {

    //Get user data

    const query = document.getElementById('ingredients').value;


    //Establish API Request

    const config = {

        key: "YIJuEEwHTrMZSd9KmAxdhA==pC6H6UCRTpwohOQ3",
        destination: `https://api.api-ninjas.com/v1/recipe?query=${query}`
    
    }

    const getRecipeData = async () => {

        const headers = new Headers({
            'X-Api-Key': config.key
        });

        const requestOptions = {
            method: 'GET',
            headers: headers
        }

        try {
            let response = await fetch(config.destination, requestOptions);

            if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
            }

            let results = await response.json();
            console.log(results);
            return results;
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle the error here, e.g., display an error message to the user
        }


    }

    //getRecipeData();

    const displayRecipeData = async () => {
        const recipes = await getRecipeData();
        const recipeList = [];
    
        const resultsContainer = document.getElementById('recipeDisplay');
        resultsContainer.innerHTML = ''; // Clear existing results
    
        const recipeCard = (recipe) => {
            // Create new card components
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            const title = document.createElement('h1');
            const servings = document.createElement('p');
            const ingredients = document.createElement('p');
            const instructions = document.createElement('p');
    
            // Populate card components
            title.textContent = recipe.title;
            servings.textContent = `Servings: ${recipe.servings}`;
            ingredients.textContent = `Ingredients: ${recipe.ingredients}`;
            instructions.textContent = `Instructions: ${recipe.instructions}`;
    
            // Append card components to card
            card.appendChild(title);
            card.appendChild(servings);
            card.appendChild(ingredients);
            card.appendChild(instructions);
    
            // Append card to recipe list
            recipeList.push(card);
        }
    
        recipes.forEach(recipeCard);
    
        // Append the recipeList to the results container
        recipeList.forEach((card) => resultsContainer.appendChild(card));
    }
    

    displayRecipeData();

}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    getRecipe();
})