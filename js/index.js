{
    const btn = document.querySelector(".jsBtn");
    const recipe = document.querySelector(".jsRecipe");

    btn.addEventListener("click", () => {
        recipe.classList.toggle("main__recipeShow");
    })
}
