function runParseCart() {
  if (!p2) {
    return;
  }
  return parseCart();
}

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
