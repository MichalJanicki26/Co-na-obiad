{
    const btn = document.querySelector(".jsBtn");
    const recipe = document.querySelector(".jsRecipe");
    const ImgBtn  = document.querySelector(".jsRecipeImgBtn");
    const img = document.querySelector(".jsImg");
    const noneBtn = document.querySelector(".jsRecipeNoneBtn");
    const none = document.querySelector(".jsNone");
    const GównoBtn = document.querySelector(".jsRecipeGównoBtn");
    const hidden = document.querySelectorAll(".jsBtnHidden");

    btn.addEventListener("click", () => {
        recipe.classList.toggle("main__recipeShow");
    })

    GównoBtn.addEventListener("click", () => {
        for (const jsBtnHidden of hidden) {
            jsBtnHidden.classList.toggle("main__btnShow");
        }
    })

    ImgBtn.addEventListener("click", () => {
        img.classList.toggle("main__imgShow");
    })

    noneBtn.addEventListener("click", () => {
        none.classList.toggle("main__noneShow");
    })
}