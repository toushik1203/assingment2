const allLoad = () => {
   fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(data => {
         displayProduct(data)
      })

      .catch(error => {
         console.error('Error:', error);
      })


}

function displayProduct(data) {

   const productContainer = document.getElementById('product-container')

   data.drinks.forEach(element => {
      console.log(element);
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
         <img class = "card-image" src=${element.strDrinkThumb} alt="" />
         <h5>${element.strDrink} </h5>
         <h5>Price: ${element.idDrink}</h5>
         <p> ${element.strInstructions} </p>
         <button onclick="handleToClick('${element.strDrink}','${element.idDrink}')">Add to Cart</button>
         <button>Details</button>
         `
      productContainer.appendChild(div)


   });
}

const handleToClick = (name, price) => {
   const containeer = document.getElementById("card-m")
   const div = document.createElement("div")
   div.classList.add('N-p');
   div.innerHTML = `
         <p>${name}</p>
         <h3 class ="price">${price}</h3>
         `
   containeer.appendChild(div);
   updatePrice();
}

const updatePrice = () => {
   const prices = document.getElementsByClassName("price");

   let count = 0;
   for (const element of prices) {
      count = count + parseFloat(element.innerHTML);
   }

   document.getElementById("total").innerText = count;
}


allLoad();