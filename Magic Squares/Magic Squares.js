
function magic_Squares(array){
        let index =0;
       for(let i= 0 ;i<3;i++){
            if(array[index]+array[index+1]+array[index+2] != 15){
                    return false
            }
            index =index+3;
            if(array[i]+array[i+3]+array[i+6] != 15){
                return false
            }
       }
           
            if(array[0]+array[4]+array[8] != 15 ||array[2]+array[4]+array[8] != 15){
                return false
            }
            return true;

       }



console.log(magic_Squares([8, 1, 6, 3, 5, 7, 4, 9, 2]));
console.log(magic_Squares([2, 7, 6, 9, 5, 1, 4, 3, 8]));
console.log(magic_Squares([3, 5, 7, 8, 1, 6, 4, 9, 2]));
console.log(magic_Squares([8, 1, 6, 7, 5, 3, 4, 9, 2]));
8 1 6
3 5 7
4 9 2