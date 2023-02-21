{
    const btn = document.querySelector(".jsBtn");
    const recipeContainer = document.querySelector(".jsRecipe");
    
    btn.addEventListener("click", () => {
        const cookBookStringValue = window.localStorage.getItem("cookBook");
        console.log(cookBookStringValue);
    });
}