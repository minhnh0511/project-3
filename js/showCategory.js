import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY, category } from "./constant.js";
import { listenerClickCategory } from "./category.js";

export const showCategory = () => {
    fetchApi(API_CATEGORY)
    .then(data => {
        let htmls = data.map(item => {
            return `
                <div class="category__item" category="${item}">
                    ${item}
                </div>
            `;
        });
        category.innerHTML = htmls.join("");
        listenerClickCategory();
    });
};