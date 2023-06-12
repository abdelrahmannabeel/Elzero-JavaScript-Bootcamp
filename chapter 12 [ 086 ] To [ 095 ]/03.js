let inputDollar = document.querySelector('input[type=number]');
let result = document.querySelector(".result");

inputDollar.oninput = () => {
  result.innerHTML = `${inputDollar.value} USD Dollar = ${(
  inputDollar.value * 15.6
).toFixed(2)} Egyptian Pound`;
}