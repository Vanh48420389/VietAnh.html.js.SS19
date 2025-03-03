let month = parseInt(prompt('nhap vao thang de kiem tra ngay:'));

if ( 0 < month && month <=12) {

    switch (month) {
        case 1:  
        case 2:  
        case 3:   
            console.log( `mùa xuân`);  
            break;
        case 4:  
        case 5:  
        case 6:   
            console.log (`mùa hạ`); 
            break; 
        case 7:  
        case 8:
        case 9:
            console.log ("mùa thu");  
            break;
        case 7:  
        case 8:
        case 9:
            console.log ("mùa đông");  
            break;
          
    }
}else{
    console.log ("tháng không hợp lệ"); 
}