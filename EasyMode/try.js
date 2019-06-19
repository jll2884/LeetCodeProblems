function foo(message,index){
    if(message===""){
        return "";
    }
    let newlist = [];
    let newStr = "";
    for(let i = 0;i<message.length;i++){

        if(message[i]==="|"){
            newlist.push(newStr);
            newStr= "";
        }else {
            newStr += message[i];
        }
    }
    for(let i =0;i,newlist.length;i++){
        if(i===index){
            return newlist[index];
        }
    }



}
console.log(foo("WITHDRAWAL|002000|USD062605|135792468013|1234",2));