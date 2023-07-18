this.arrProduct = [];

// Render product
this.renderProduct = function (arr) {
  arr = this.arrProduct;

  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var product = new Product();
    var productItem = arr[i];
    Object.assign(product, productItem);
    content += `
        <div class="product_item">
              <img src="${productItem.image}" alt="" />
              <div class="item_text">
                <h3>${productItem.name}</h3>
                <p>${productItem.shortDescription}</p>
              </div>
              <div class="item_buy">
                <a href="../detail/detail.html?productid=${
                  i + 1
                }"><button class="btn-buyNow">Buy now</button></a>
                <span>${productItem.price}$</span>
              </div>
            </div>
        `;
  }
  document.querySelector(".product_content").innerHTML = content;
};

// Call API products
this.getProduct = function () {
  var promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
    // responseType: JSON,
  });
  promise.then((result) => {
    console.log(result);
    var ketQua = result.data.content;
    this.arrProduct = ketQua;
    console.log(this.arrProduct);
    this.renderProduct(this.arrProduct);
  });
  promise.catch((error) => {
    console.log(error);
  });
};
this.getProduct();
