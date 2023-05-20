let price1 = +document.getElementById("itemprice1").innerHTML;
let price2 = +document.getElementById("itemprice2").innerHTML;
let price3 = +document.getElementById("itemprice3").innerHTML;
let price4 = +document.getElementById("itemprice4").innerHTML;
console.log(price1);
console.log(price2);
console.log(price3);
console.log(price4);

    let sum = (price1 + price2 + price3 + price4);
    console.log(sum);

    document.getElementById("result").innerHTML = sum;

function calcSale () {
    calcSale = sum - ( sum * 0.2 )
    return calcSale

}
console.log(calcSale());

let element = document.querySelector('button')

element.addEventListener('click', function () {
  console.log(calcSale);
  document.getElementById("result").innerHTML = calcSale;
})






