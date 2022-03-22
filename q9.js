const longestWord = (sentence)=>{
    let temp=null,tcount=0,tempword=null,tempcount=0,s1=sentence.split(" ");
    for (let i = 0; i < s1.length; i++) {
        temp=s1[i];
         tcount=0;
        for ( let j = 0; j < temp.length; j++) {
            if ((temp.charCodeAt(j)>=65 && temp.charCodeAt(j)<=90) || (temp.charCodeAt(j)>=97 && temp.charCodeAt(j)<=122)){
               tcount++;
             } 
             }
         if(tcount>tempcount){
             tempcount=tcount;
             tempword=s1[i];
         }
         }
    return tempword
 }
 
