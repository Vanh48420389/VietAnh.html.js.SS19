let a =parseFloat(prompt(`Nhap a`));
let b = parseFloat(prompt(`Nhap b`));
let c = parseFloat(prompt(`Nhap c`));

let delta = b*b -4*a*c;

if(delta<0){
    alert('Phương tình vô nghiệm');

}else if(delta===0){
    let x1 = -b/(2*a);
    alert(`Phương tình có nghiệm kép 
        x1= ${x1}`);

}else if(delta>0){
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    alert(`Phương trình có 2 nghiệm phân biệt 
        x1=${x1};
        x2=${x2}`);
}else{
    alert(`delta khong hop le`);
}