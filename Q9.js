function unoqueCharacterChech(name){
    const SET = new Set()
    for(let i=0 ; i<name.length;i++){
        SET.add(name.charAt(i))
    }
    if(SET.size==name.length){
        console.log("The input string contains unique characters")
    }
    else{
        console.log("The input string contains duplicate")
    }
}
unoqueCharacterChech("mithun")
