{
    const mainContainer = document.querySelector(".jsMain")
    const btn = document.querySelector(".jsBtn");
    const recipeContainer = document.querySelector(".jsRecipe");

    btn.addEventListener("click", () => {
        const cookBookStringValue = window.localStorage.getItem("cookBook");
        
        const firstTitle = cookBookStringValue.map(({ title }) => title );

        mainContainer.innerHTML = `
        <div class="recipe jsRecipe">
        <div class="recipe__title">${firstTitle}</div>
        <div class="jsRecipe__ingredientList recipe__ingredientList"></div>
        <div class="jsRecipe__instructions recipe__instructions"></div>
        </div>
        `;
        console.log(cookBookStringValue);
    });
}