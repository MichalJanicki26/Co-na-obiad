{
    const jsRecipeForm = document.querySelector(".jsRecipeForm");
    const newTitle = document.querySelector(".jsRecipeForm__title");
    const ingredient = document.querySelector(".jsRecipeForm__ingredient");
    const ingredientAmount = document.querySelector(".jsRecipeForm__ingredientAmount");
    const addIngredientAmount = document.querySelector(".jsRecipeForm__addIngredient");
    const howItsDone = document.querySelector(".jsRecipeForm__howItsDone");
    const addHowItsDone = document.querySelector(".jsRecipeForm__addHowItsDone");
    const ingredientsContainer = document.querySelector(".jsIngredientList");
    const instructionsContainer = document.querySelector(".jsInstructions");

    const title = []
    const ingredientsList = [];
    const instructions = [];

    const addTitle = () => {
        const newTitleValue = newTitle.value.trim();

        if (!newTitleValue) {
            console.log("podaj tytuł");
            return;
        }

        title.push(newTitle);
    }

    const createIngredient = (ingredient, amount) => ({
        ingredient, amount
    });

    const addIngredient = () => {
        const ingredientValue = ingredient.value.trim();
        const ingredientAmountValue = ingredientAmount.value.trim();
        const record = createIngredient(ingredientValue, ingredientAmountValue);

        if (!ingredientValue) {
            console.log("podaj nazwę składnika");
            return;
        }

        if (!ingredientAmountValue) {
            console.log("podaj ilość składnika");
            return;
        }

        ingredientsList.push(record);
        const ingredientsHtml = ingredientsList.map((ingredient) => {
            return `<li>${ingredient.ingredient} (${ingredient.amount})</li>`;
        });
        const ingredientsString = ingredientsHtml.join("");
        ingredientsContainer.innerHTML = `<ul>${ingredientsString}</ul>`;
        ingredient.value = "";
        ingredientAmount.value = "";
        console.log(ingredientsList);
    }

    const addInstruction = () => {
        const howItsDoneValue = howItsDone.value.trim();

        if (!howItsDoneValue) {
            console.log("podaj instrukcję");
            return;
        }

        instructions.push(howItsDoneValue);
        howItsDone.value = "";
        console.log(instructions);
    }

    const createRecipe = (title, ingredientsList, instructions) => ({
        title, ingredients: ingredientsList, instructions
    });

    addIngredientAmount.addEventListener("click", () => {
        addIngredient();
    });

    addHowItsDone.addEventListener("click", () => {
        addInstruction();
    });

    const submitHandler = () => {
        const recipe = createRecipe(title, ingredientsList, instructions);
        console.log(JSON.stringify(recipe));
    }

    jsRecipeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        submitHandler();
    });
}