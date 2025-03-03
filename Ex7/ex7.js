let num1 = parseFloat(prompt(`Nhap so thu nhat`));
let num2 = parseFloat(prompt(`Nhap so thu hai`));
let num3 = parseFloat(prompt(`Nhap so thu ba`));

let maxNum = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);  

alert(`So lon nhat trong ba so la ${maxNum}`);