function soma (num1, num2) {
return num1+num2;  
}
console.log (soma (6,4));
function areaQuadrado (lado) {
    return lado **2;
}
console.log (areaQuadrado(6));
let media= function (num1, num2, num3, num4) {
   return (num1+num2+num3)/num4;
}
console.log (media(1,2,3,3));
let num1 = parseInt (prompt('Qual n?'));
let num2 = parseInt (prompt('Qual n?'));
let num3 = parseInt (prompt('Qual n?'));
let media2 = function (x,y,z){
    return (x+y+z)/3;
};
document.write(media2(num1, num2, num3));