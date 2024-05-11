var productNameInput = document.getElementById("productNameInput")
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productDescInput = document.getElementById("productDescInput")

var products = []

if(localStorage.getItem("products") != null){
    products = JSON.parse(localStorage.getItem("products"))

    displayProducts(products)
}

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    products.push(product)

    localStorage.setItem("products",JSON.stringify(products))
    displayProducts(products)
}


function displayProducts(anyArray){
    var cartoona = ""
    for (var i = 0; i < anyArray.length; i++) {
        cartoona +=  ` <tr>
        <td>${i}</td>
        <td>${anyArray[i].name}</td>
        <td>${anyArray[i].price}</td>
        <td>${anyArray[i].category}</td>
        <td>${anyArray[i].desc}</td>
        <td><button class="btn btn-outline-warning">Update</button></td>
        <td><button onclick= "deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
    </tr>`
    }

    document.getElementById("tableBody").innerHTML = cartoona;
}


function deleteProduct(index){
    products.splice(index,1)
    displayProducts(products)
    localStorage.setItem("products",JSON.stringify(products))
}


