// async function fetchData() {
//     let response = await fetch('https://fakeapi.example.com/data');
//     let data = await response.json();
//     console.log(data);
// }
// fetchData();

// fetc product from fakestore api
async function fetchProducts(){
   
   try {
     let response = await fetch('https://fakestoreapi.com/products');
     let products = await response.json();
 
     console.log(products);

 
     let container = document.getElementById('productContainer');
     products.forEach((product)=>{
         let productBox = document.createElement('div');
 
         // let h4 = document.createElement('h4');
         // h4.innerText = product.title;
 
         // productBox.append(h4);
 
         productBox.innerHTML =`
         <h4>${product.title}</h4>
         <img src= "${product.image}"/>
         <p>price : ${product.price} </p>
         `
 
         container.appendChild(productBox)
 
     })
   } catch (error) {
    alert("some erreo to fetch data")
   }
   
};

// filtered by category

async function filterByCategory (){
    let res = await fetch("https://fakestoreapi.com/products")
    let products = await res.json();
    // console.log(products);

    let selectedCategory = document.getElementById("categoryFilter").value; 

    let filterdProducts = selectedCategory =="all" 
              ? products : products.filter((product) => product.category == selectedCategory);

      
     console.log(filterdProducts) 

     let containerfilter = document.getElementById("filteredProductContainer");
     containerfilter.innerHTML= ""

     filterdProducts.forEach((product)=>{
        let productbox = document.createElement('div');

        productbox.innerHTML = `
              
        <h1>${product.title}</h1>
        <img src="${product.image}" alt="">
        <p>${product.price}</p>
        `

        containerfilter.appendChild(productbox)
     })        

}

;

