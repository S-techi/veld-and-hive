const priceText = document.querySelector("#price");

const sizeButtons = document.querySelectorAll(".size-btn");

for (const button of sizeButtons) {
   
  button.addEventListener("click", function () {
    for (const other of sizeButtons) {
      other.classList.remove("selected");
    }
 
    button.classList.add("selected");
 
    const newPrice = button.dataset.price;
    priceText.textContent = Number(newPrice).toFixed(2);
  });
}


const addBtn = document.querySelector("#add-btn");
const bagCount = document.querySelector("#bag-count");
let itemsInBag = 0;

addBtn.addEventListener("click", function () {
  itemsInBag = itemsInBag + 1;
  bagCount.textContent = itemsInBag; 
  bagCount.classList.add("show"); 

  addBtn.textContent = "Added!"; 
 
  setTimeout(function () {
    addBtn.textContent = "Add to Bag";
  }, 1500);
});
 
