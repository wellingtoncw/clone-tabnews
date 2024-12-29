test("nome do teste", callbackFunction);

function callbackFunction() {
  console.log("esta função está sendo chamada?");
}

test("nome do teste", function () {
  console.log("a assim, funciona?");
});

test("nome do teste", () => {
  console.log("e agora?");
});

test("espero que 1 seja 1", () => {
  expect(2).toBe(2);
});
