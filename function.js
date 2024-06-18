window.function = function (p1) {

p1 = p1.value;
  
function parseCart() {
  let initialObject = JSON.parse(p1);
  let outputObjects = [];
  for (let i = 0; i < initialObject.quantity; i++) {
    outputObjects.push({
      id: initialObject.id,
      item: initialObject.item,
      quantity: 1
    });
  }
  return outputObjects;
}
return runParseCart();
