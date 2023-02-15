{
    const btn = document.querySelector(".jsBtn");
    const recipeContainer = document.querySelector(".jsRecipe");

    btn.addEventListener("click", () => {
        recipeContainer.innerHTML = `<h1 class="main__recipe">Dodałeś Przepis?</h1>`;
    })
}