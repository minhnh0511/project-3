import { showProducts } from "./showProducts.js";
import { params, inputSearch, buttonSearch, filter, pagiPrev, pagiNumber, pagiNext} from "./variable.js";

showProducts();

//Search
buttonSearch.addEventListener("click", function() {
    search();
});

inputSearch.addEventListener("keydown", function(e) {
    if(e.key === "Enter"){
        search();
    }
})
//End Search

// Filter
filter.addEventListener("change", function(e) {
    switch (e.target.value) {
        case "default":
            params.sort= "";
            params.order= "";
            break;
        case "ascPrice":
            params.sort= "price";
            params.order= "asc";
            break;
        case "descPrice":
            params.sort= "price";
            params.order= "desc";
            break;
        case "descDiscount":
            params.sort= "discountPercentage";
            params.order= "desc";
            break;
    }
    showProducts();
});
// End Filter

//Pagination
pagiPrev.addEventListener("click", function() {
    if(params.page > 1) {
        params.page--;
        pagiNumber.innerHTML = params.page;
        showProducts();
    }
});

pagiNext.addEventListener("click", function() {
    params.page++;
    pagiNumber.innerHTML = params.page;
    showProducts();
});

//End Pagination