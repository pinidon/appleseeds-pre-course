const numFactorial = (num)=>{ 
 let n=1,i=1;
   while (i<=num) {
       n*=i;
       i++;
   }
  return n;
}
