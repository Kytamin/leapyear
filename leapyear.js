let year = +prompt("điền vào năm bạn muốn kiểm tra")

if(year%4===0 && year%100!==0){
    alert("năm nhuận")
}else if(year%100===0 && year%4!==0){
    alert("không phải năm nhuận")
}else if(year%100===0 && year%400===0){
    alert("năm nhuận")
}

