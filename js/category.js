import { showCategory} from "./showCategory.js";
import { showProducts } from "./showProducts.js";
import { params } from "./variable.js";
import { category } from "./constant.js";

showCategory();

export const listenerClickCategory = () => {
    const listCategory = category.querySelectorAll(".category__item");
    listCategory.forEach(item => {
        item.addEventListener("click", function() {
            params.category = item.getAttribute("category");
            showProducts();
        });
    });
}




