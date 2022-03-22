const primeNumberFromOneToN = (n)=>{
     if(n<=1){
        return 0;
    }
    let count=0;
    for (let i = 2; i <= n; i++) {
        let prime=false;
        for (let j = 2; j < i; j++) {
            if(i%j==0){
                prime=true;
                break;
            }
            
        }
        if(prime==false){
            count++;
        }
        
    }
    return count;
 
}
