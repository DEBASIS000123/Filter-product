(async()=>{
const url="https://fakestoreapi.com/products";

const productcontainerel=document.getElementById("product-container");
const searchinputele=document.getElementById("searchinput");
const fetchproduct= async()=>{
    try{
        const res= await fetch(url);
        return await res.json();
    }
    catch(error){
        return error;
    }
};
const products= await fetchproduct();
const generateproduct=(product)=>{
    return `
    <div class="product-box">
        <div class="product-image">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-detils">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <button class="pricebtn">${product.price}$</button>
        </div>
    </div>`;
}
const renderproducts=(products)=>{
    productcontainerel.innerHTML="";
    products.forEach((product)=>{
        productcontainerel.innerHTML += generateproduct(product);
    });
};


const filterHandler=(event)=>{
    const searchtext=event.target.value.toLowerCase();

    const filteproducts=products.filter((product)=>{
        return product.title.toLowerCase().includes(searchtext);

    });
    renderproducts(filteproducts);
}
searchinputele.addEventListener("keyup",filterHandler);

renderproducts(products);

})();
