function gameOf3s(num){
    
    while(num > 1 ){
        if((num % 3) === 0) {
         console.log(num +"  "+  "0");
         num = num / 3 ;
        }
       else if(((num - 1 )% 3) === 0 ){
        console.log(num +"  "+  "-1 ");   
        num = (num - 1) /3;
        }
        else {
            console.log(num +"  "+  "1 ");   
            num = (num + 1) /3;
        }
}
if(num===1){
    return console.log(1);
 }}

gameOf3s(100);
gameOf3s(200);

