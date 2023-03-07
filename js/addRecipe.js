{
    const form = document.querySelector(".jsForm");
    const error = document.querySelector(".jsForm__error");
    const title = document.querySelector(".jsForm__title");
    const ingredient = document.querySelector(".jsForm__ingredient");
    const ingredientAmount = document.querySelector(".jsForm__ingredientAmount");
    const addIngredientAmountBtn = document.querySelector(".jsForm__addIngredientBtn");
    const instruction = document.querySelector(".jsForm__instruction");
    const addInstructionBtn = document.querySelector(".jsForm__addInstructionBtn");
    const newTitleContainer = document.querySelector(".jsRecipe__title");
    const ingredientsListContainer = document.querySelector(".jsRecipe__ingredientList");
    const instructionsContainer = document.querySelector(".jsRecipe__instructions");

    let recipeTitle = ``;
    const ingredientsList = [];
    const instructionsList = [];

    title.addEventListener("change",() => {
        recipeTitle = title.value.trim();
        newTitleContainer.innerHTML = title.value.trim();
    }); 

    const createIngredient = (ingredient, amount) => ({
        ingredient, amount
    });

    const addIngredient = () => {
        const ingredientValue = ingredient.value.trim();
        const ingredientAmountValue = ingredientAmount.value.trim();
        const record = createIngredient(ingredientValue, ingredientAmountValue);

        if (!ingredientValue) {
            error.innerHTML = "podaj nazwę składnika";
            return;
        }

        if (!ingredientAmountValue) {
            error.innerHTML = "podaj ilość składnika";
            return;
        }

        ingredientsList.push(record);
        error.innerHTML = "";
        const ingredientsHtml = ingredientsList.map((ingredient) => {
            return `<li>${ingredient.ingredient} (${ingredient.amount})</li>`;
        });
        const ingredientsString = ingredientsHtml.join("");
        ingredientsListContainer.innerHTML = `<ul>${ingredientsString}</ul>`;
        ingredient.value = "";
        ingredientAmount.value = "";
    }

    const createInstructions = (instructionType) => ({
        instructionType
    });

    const addInstruction = () => {
        const instructionsValue = instruction.value.trim();
        const instructionStep = createInstructions(instructionsValue);

        if (!instructionsValue) {
            error.innerHTML = "podaj instrukcję";
            return;
        }

        instructionsList.push(instructionStep);
        error.innerHTML = "";
        const instructionsHtml = instructionsList.map((instructionType) => {
            return `<li>${instructionType.instructionType}</li>`;
        });
        const newInstructionsString = instructionsHtml.join("");
        instructionsContainer.innerHTML = `<ol>${newInstructionsString}</ol>`;
        instruction.value = "";
    }

    const createRecipe = (newTitle, ingredientsList, instructionsList) => ({
        title: newTitle, ingredients: ingredientsList, instructions: instructionsList
    });

    addIngredientAmountBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addIngredient();
    });

    addInstructionBtn.addEventListener("click", (event) => {
        event.preventDefault();
        addInstruction();
    });

    const submitHandler = () => {

        if (!recipeTitle) {
            error.innerHTML = "podaj tytuł";
            return;
        }

        if (ingredientsList.length === 0) {
            error.innerHTML = "podaj nazwę i ilość składników";
            return;
        };

        if (instructionsList.length === 0) {
            error.innerHTML = "podaj instrukcje";
            return;
        };

        const recipe = createRecipe(recipeTitle, ingredientsList, instructionsList);
        const storageCookBook = window.localStorage.getItem("cookBook");

        try {

        const cookBook = JSON.parse(storageCookBook||"[]");
        const newCookBook = [...cookBook, recipe];
        const stringifiedNewCookBook = JSON.stringify(newCookBook);
        
        window.localStorage.setItem("cookBook", stringifiedNewCookBook);

        error.innerHTML = "";
        recipeTitle = "";
        ingredientsList.length = 0;
        instructionsList.length = 0;

        newTitleContainer.innerHTML = "";
        title.value = "";

        const ingredientsHtml = ingredientsList.map((ingredient) => {
            return `<li>${ingredient.ingredient} (${ingredient.amount})</li>`;
        });
        const ingredientsString = ingredientsHtml.join("");
        ingredientsListContainer.innerHTML = `<ul>${ingredientsString}</ul>`;
        ingredient.value = "";
        ingredientAmount.value = "";

        const instructionsHtml = instructionsList.map((instructionType) => {
            return `<li>${instructionType.instructionType}</li>`;
        });
        const newInstructionsString = instructionsHtml.join("");
        instructionsContainer.innerHTML = `<ol>${newInstructionsString}</ol>`;
        instruction.value = "";

    } catch {
            window.localStorage.setItem("cookBook", "[]")
        };
 };

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitHandler();
    });
}