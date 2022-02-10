//You are going to be given a word. Your job is to return the middle character 
//of the word. If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.
let Chatacters = ''
let middleChatacters = ''
let Chatacters1 = ''
function getMiddle(s){
    for (i=0;i< s.length;i++){
        //console.log(s[i])    
    }   if(s.length % 2 ==0){
        Chatacters += i/2
        Chatacters1 += i/2 -1 
        //console.log(s[middleChatacters])
        let firstIndex = s[Chatacters1]
        let secondIndex = s[Chatacters]
        //console.log(firstIndex)
       // console.log(secondIndex)
        let middleChatacters=  firstIndex.concat(secondIndex)
      //console.log(middleChatacters)
      
        }
        else if (s.length % 2 == 1){
            //console.log([i])
            Chatacters += i/2 +.5
            //console.log(Chatacters)
            middleChatacters += s[Chatacters]
           // return middleChatacters
        }
       return middleChatacters  
    }

   getMiddle("abcd")



  /*if (s.length % 2== 0){
          
    //console.log(middleChatacters)

   // return s + " even"
}
else if( s.length % 2 ==1){
    return s + " odd"
} */