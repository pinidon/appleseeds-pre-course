const divideOrHasSeven = (start,end)=>{ 
      let count=0;
    for (let i = start; i <=end; i++) {
        if(i%7==0){
            count++;
             }
         else{
             let digits = i.toString().split("");
            for (let j = 0; j < digits.length; j++) {
                if(digits[j]==7){
                    count++;
                }
                }
}
}
    return count;
}
