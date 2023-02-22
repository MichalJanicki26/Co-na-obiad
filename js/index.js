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
        <div class="main__recipe recipe">
            <div class="recipe__title">${title}</div>
            <div><ul><li class="recipe__ingredientList">${ingredient}(${amount})</li></ul></div>
            <div><ul><ol class="recipe__instructions">${instructionType}</ol></ul></div>
        </div>
        `;
    });
}