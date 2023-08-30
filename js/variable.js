// API
export let params = {
    q : "",
    sort: "",
    order: "",
    page: 1,
    limit: 9,
    category: ""
};
// End API


//Search
export const inputSearch =  document.querySelector("#search input");
export const buttonSearch =  document.querySelector("#search button");
export const search = () => {
    params.q = inputSearch.value;
    showProducts();
}
// End Search


// Filter
export const filter = document.querySelector("#filter");
// End Filter


// Pagination
export const pagiPrev = document.querySelector("#pagination--prev");
export const pagiNumber = document.querySelector("#pagination--number");
export const pagiNext = document.querySelector("#pagination--next");

// End Pagination