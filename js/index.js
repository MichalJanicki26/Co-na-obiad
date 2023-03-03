{
    const mainContainer = document.querySelector(".jsMain")
    const btn = document.querySelector(".jsBtn");

    const randomizeArrayValue = (array) => {
        const arrayLength = array.length;
        const randomIndexNumber = Math.random()*arrayLength;
        const roundedRandomIndexNumber = Math.floor(randomIndexNumber);
        return array[roundedRandomIndexNumber];
    };

    const createIngredientsList = (ingredientsArray) => {
        const ingredientsList = ingredientsArray.map(({ingredient, amount}) => `<li class="recipe__ingredientItem">${ingredient}(${amount})</li>`).join("");
        return `<ul>${ingredientsList}</ul>`
    };

    const createInstructionsList = (instructionsArray) => {
        const instructionsList = instructionsArray.map(({instructionType}) => `<li class="recipe__instructions">${instructionType}</li>`).join("");
        return `<ol>${instructionsList}</ol>`
    };

    btn.addEventListener("click", () => {
        const cookBook = JSON.parse(window.localStorage.getItem("cookBook"));

        const recipeObject = randomizeArrayValue(cookBook);

        const {title} = recipeObject;

        const {ingredients, instructions} = recipeObject;

        mainContainer.innerHTML = `
        <div class="main__recipe recipe">
            <div class="recipe__title">${title}</div>

            <div>${createIngredientsList(ingredients)}</div>

            <div>${createInstructionsList(instructions)}</div>

        </div>
        `;
    });
};