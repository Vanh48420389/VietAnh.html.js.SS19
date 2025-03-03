let character = prompt(`Nhập vào 1 kí tự:`);

if (character.length === 1) {
    if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')) {
        console.log(`ký tự ${character} là chữ cái`);
    } else {
        console.log(`không phải chữ cái`);
    }
}else{
    console.log(`vui long nhap 1 ki tu`);
}


