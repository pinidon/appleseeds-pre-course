const countOddFromZeroToNum = (num)=>{ 
 let n=0,i=0;
   while (i<=num) {
       if (i%2==1){
           n++;
         }
         i++;
   }
  return n;
}
