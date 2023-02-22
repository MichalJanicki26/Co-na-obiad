{
    const mainContainer = document.querySelector(".jsMain")
    const btn = document.querySelector(".jsBtn");

    btn.addEventListener("click", () => {
        const cookBookString = JSON.parse(window.localStorage.getItem("cookBook"));
        recipeArray = cookBookString.slice(3);

        const [recipeObject] = recipeArray;

        const {title} = recipeObject;

        const {ingredients: ingredientsArray} = recipeObject;
        const [ingredientsObject] = ingredientsArray;
        const {ingredient, amount} = ingredientsObject;

        const {instructions: instructionsArray} = recipeObject;
        const [instructions] = instructionsArray;
        const {instructionType} = instructions;
   
        console.log(instructionType);

        mainContainer.innerHTML = `
        <div class="recipe jsRecipe">
        <div class="recipe__title">${title}</div>
        <div class="jsRecipe__ingredientList recipe__ingredientList"><ul><li>${ingredient}(${amount})</li></ul></div>
        <div class="jsRecipe__instructions recipe__instructions"><ul><ol>${instructionType}</ol></ul></div>
        </div>
        `;
    });
}