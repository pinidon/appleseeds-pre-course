const capitalize = (word)=>{ 
    if (!(typeof word == "string"))
{
    return "invalid"
}
let word1 = word.split("");
for (let i = 0; i < word.length; i++) {
  switch (word1[i]) {
        case 'a':
            word1[i] = 'A';
          break;
        case 'e':
            word1[i] = 'E';
          break;
        case 'i':
            word1[i] = "I";
          break;
        case 'o':
            word1[i] = "O";
          break;
        case 'u':
            word1[i] = "U";
          break;
        case 'y':
            word1[i] = "Y";
        }
  }
     return word1.join("")
}
