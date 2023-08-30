import { fetchApi } from "./fetchApi.js";
import { API_PRODUCTS } from "./constant.js";
import { params } from "./variable.js";

const products = document.querySelector("#products");

export const showProducts = () => {
    let category = "";
    if(params.category != "") {
        category = `&category=${params.category}`;
    }

    const api = `${API_PRODUCTS}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;
    fetchApi(api)
    .then(data => {
        let htmls = data.map(item => {
            return `
            <div class="product__item">
                <div class="product__image">
                    <img src="${item.thumbnail}" alt="${item.title}"/>
                    <div class="product__discount">
                        -${item.discountPercentage}%
                    </div>
                </div>
                <div class="product__content">
                    <h3 class="product__title">
                        ${item.title}
                    </h3>
                    <div class="product__meta">
                        <div class="product__price">
                            ${item.price}$
                        </div>
                        <div class="product__stock">
                           Remain: ${item.stock}
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        products.innerHTML = htmls.join("");
    })
}