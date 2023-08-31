function findElement(element, parent = document) {
    return parent.querySelector(element);
}



const templateProducts = findElement("#template-products");
function renderProducts(products, parent) {
    parent.innerHTML = null;
    const fragment = document.createDocumentFragment();
     products.forEach((element) => {
        const newTemplate = templateProducts.content.cloneNode(true);
        const img = findElement(".card-img-top",newTemplate);
        const title = findElement(".card-title",newTemplate);
        const rate = findElement(".card-rate",newTemplate);
        const count = findElement(".card-count",newTemplate);
        const price = findElement(".card-price",newTemplate);
        const likePath1 = findElement(".like-path1",newTemplate);
        const likePath2 = newTemplate.querySelector(".like-path2");


        img.src = element.image;
        title.textContent = element.title;
        rate.textContent = element.rating.rate;
        count.textContent = element.rating.count;
        price.textContent = element.price + "$";
       
        fragment.appendChild(newTemplate);
    });

    parent.appendChild(fragment)

}
