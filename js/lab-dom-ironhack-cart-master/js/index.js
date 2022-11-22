// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = parseInt(price) * quantity;
  const subtotalTd = product.querySelector('.subtotal span');
  subtotalTd.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  console.log(allProducts);

  let total = 0;

  allProducts.forEach((item) => (total += updateSubtotal(item)));

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; // donde sucedio
  console.log('The target in remove is:', target);
  //... your code goes here

  console.log(target.parentNode.parentNode);
  const node = target.parentNode.parentNode;
  target.parentNode.parentNode.parentNode.removeChild(node);
}

// const removeButtons = document.querySelectorAll('.btn-remove');
// removeButtons.addEventListener('click', removeProduct);
// ITERATION 5

function createProduct() {
  //... your code goes here

  addProduct.addEventListener('click', createProduct);
}






// realiza una consulta de remove buttons
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // loop, a todos los elementos que tengan el tag btn-remove les añade un addeventlistener de tipo click que llama a la funcion removeProduct
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) =>
    button.addEventListener('click', removeProduct)
  );
});
