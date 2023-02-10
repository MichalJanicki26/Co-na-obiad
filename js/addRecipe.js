{
    const form = document.querySelector(".jsForm");
    const title = document.querySelector(".jsForm__title");
    const addTitleBtn = document.querySelector(".jsForm__addTitleBtn");
    const ingredient = document.querySelector(".jsForm__ingredient");
    const ingredientAmount = document.querySelector(".jsForm__ingredientAmount");
    const addIngredientAmountBtn = document.querySelector(".jsForm__addIngredientBtn");
    const instruction = document.querySelector(".jsForm__instruction");
    const addInstructionBtn = document.querySelector(".jsForm__addInstructionBtn");
    const newTitleContainer = document.querySelector(".jsRecipe__title");
    const ingredientsListContainer = document.querySelector(".jsRecipe__ingredientList");
    const instructionsContainer = document.querySelector(".jsRecipe__instructions");

    const newTitle = [];
    const ingredientsList = [];
    const newInstructions = [];

    const createNewTitle = (name) => ({
        name
    })

    const addNewTitle = () => {
        const newTitleValue = title.value.trim();
        const newName = createNewTitle(newTitleValue);

        if (!newTitleValue) {
            console.log("podaj tytuł");
            return;
        }

        newTitle.push(newName);
        const titleHtml = newTitle.map((name) => {
            return `${name.name}`
        });
        const titleString = titleHtml.join("");
        newTitleContainer.innerHtml = `<h1>${titleString}</h1>`;
        newTitle.value = "";
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
        ingredientsListContainer.innerHTML = `<ul>${ingredientsString}</ul>`;
        ingredient.value = "";
        ingredientAmount.value = "";
    }

    const addInstruction = () => {
        const instructionsValue = instruction.value.trim();

        if (!instructionsValue) {
            console.log("podaj instrukcję");
            return;
        }

        newInstructions.push(instructionsValue);
        newInstructions.value = "";
    }

    const createRecipe = (newTitle, ingredientsList, newInstructions) => ({
        title: newTitle, ingredients: ingredientsList, instructions: newInstructions
    });

    addTitleBtn.addEventListener("click", () => {
        addNewTitle();
    })

    addIngredientAmountBtn.addEventListener("click", () => {
        addIngredient();
    });

    addInstructionBtn.addEventListener("click", () => {
        addInstruction();
    });

    const submitHandler = () => {
        const recipe = createRecipe(newTitle, ingredientsList, newInstructions);
        console.log(JSON.stringify(recipe));
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitHandler();
    });
}