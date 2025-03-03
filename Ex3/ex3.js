let input = prompt('cách chuyển đổi tiền');

if(input === "VND->USD"){
    let price = prompt('nhập số tiền muốn chuyển đổi');
    let result = price/23000;
    console.log(`${result} USD`);
}else if(input === "USD->VND"){
    let price = prompt('nhập số tiền muốn chuyển đổi');
    let result = price*23000;
    console.log(`${result} VND`);
}else{
    console.log(`vui long nhap lai`)
}