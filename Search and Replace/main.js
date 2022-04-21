function myReplace(str, before, after) {
    let newArray =[];
    newArray = str.split(" ");
    console.log(newArray);
    let theFirstletter=null;
    let newWord =null;
    let theRestOftheword = null;
    for(let i= 0; i<newArray.length ;i++){
        if(newArray[i].toUpperCase() == before.toUpperCase()){
            console.log (newArray[i]);
        if (before[0]==before[0].toUpperCase()) {
              theFirstletter =after[0].toUpperCase();
               theRestOftheword =after.substring(1);
               newWord = theFirstletter +theRestOftheword;
               newArray[i]= newWord;
               console.log( newArray[i]);
         }
         else {
            newArray[i]= after;
         }
    }
}
    str=newArray.toString();;
    return str;
  }
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));