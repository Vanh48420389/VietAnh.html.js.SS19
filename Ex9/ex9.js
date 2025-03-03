// Phép nối chuỗi và số  
let result1 = "javascript" + 5; // "javascript5"  
// Giải thích: Phép cộng với chuỗi, số 5 được chuyển đổi thành chuỗi và nối với "javascript", kết quả là "javascript5".  

// Phép trừ giữa chuỗi và số  
let result2 = "javascript" - 1; // NaN  
// Giải thích: Phép trừ không thể thực hiện với chuỗi và số. nên kết quả là NaN .  

// Phép nối chuỗi với số  
let result3 = "3" + 2; // "32"  
// Giải thích: Tương tự như phép cộng trong kết quả đầu tiên, chuỗi "3" được chuyển đổi thành chuỗi, và khi nối với 2, kết quả là "32".  

// Phép trừ giữa chuỗi và số  
let result4 = "5" - 4; // 1  
// Giải thích: Chuỗi "5" được JavaScript chuyển đổi thành số trước khi thực hiện phép trừ. Kết quả là 5 - 4 = 1.  

// Kiểm tra NaN với chuỗi số hợp lệ  
let result5 = isNaN("123"); // false  
// Giải thích: Hàm `isNaN` kiểm tra xem giá trị có phải là NaN không. Chuỗi "123" có thể được chuyển đổi thành số hợp lệ (123), nên kết quả là false.  

// Kiểm tra NaN với chuỗi không hợp lệ  
let result6 = isNaN("hello"); // true  
// Giải thích: Chuỗi "hello" không thể chuyển thành số, do đó `isNaN` trả về true.  

// Sử dụng Number.isNaN để kiểm tra giá trị  
let result7 = Number.isNaN("123"); // false  
// Giải thích: Hàm `Number.isNaN` chỉ trả về true khi giá trị là NaN. "123" không phải là NaN, nên kết quả là false.  

// Kiểm tra giá trị NaN  
let result8 = Number.isNaN(NaN); // true  
// Giải thích: Hàm `Number.isNaN` xác nhận giá trị NaN. Kết quả là true vì giá trị là NaN.  

// In các kết quả ra console  
console.log(result1); // Output: "javascript5"  
console.log(result2); // Output: NaN  
console.log(result3); // Output: "32"  
console.log(result4); // Output: 1  
console.log(result5); // Output: false  
console.log(result6); // Output: true  
console.log(result7); // Output: false  
console.log(result8); // Output: true  