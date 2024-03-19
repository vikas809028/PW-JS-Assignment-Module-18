let userList = ["Mithun","Pw","SanketSir","SahilSir"]

function isUserPresent(username){
    let ispresent=false;
    for(let i=0;i<userList.length;i++){
        if(username==userList[i]){
            console.log(`Yes, ${userList[i]} is a valid user`)
            ispresent = true
        }
    }
    if(!ispresent){
        console.log(`No, ${username} is not a valid user`)
    }
    
    
    
}
//user input is case sensitive
isUserPresent("someone")