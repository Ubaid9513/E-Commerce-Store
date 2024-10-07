async function getProducts() {
  const productUrl = await fetch("https://dummyjson.com/products");
  console.log(productUrl);
  const productData = await productUrl.json();
  console.log(productData);
  return productData.products;
}
getProducts()
  .then((productData) => {
    console.log(productData);
    productData.forEach((pro) => {
      // console.log(pro.id);
      let main = document.getElementById("main");
      main.innerHTML += `
      <div class="col-12 col-sm-12 col-md-6 col-lg-3 cards ">
      <img src="${pro.images}" alt="img">
      <h3>Brand : ${pro.brand}</h3>
      <h5>Title : ${pro.title}</h5>
      <span>Price : ${pro.price} ,</span>
      <span>Rating : ${pro.rating} ,</span>
      <span>Stocks : ${pro.stock}</span>
      <p>Description : ${pro.description}</p>
    </div>
      `;
    });
  })
  .catch((error) => {
    console.log(error);
  });

