let month = parseInt(prompt('nhap vao thang de kiem tra ngay:'));

if ( 0 < month && month <=12) {

    switch (month) {
        case 1:  
        case 3:  
        case 5:  
        case 7:  
        case 8:  
        case 10:  
        case 12:  
            console.log( `tháng ${month} có 31 ngày`);  
            break;
        case 4:  
        case 6:  
        case 9:  
        case 12:  
            console.log (`tháng ${month} có 30 ngày`); 
            break; 
        case 2:  
            console.log ("tháng 2 có 28 hoặc 29 ngày năm nhuận");  
            break;
          
    }
}else{
    console.log ("tháng không hợp lệ"); 
}