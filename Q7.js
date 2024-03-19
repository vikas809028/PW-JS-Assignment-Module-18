function generateOTP(){
    const num = [Math.ceil(Math.random()*8),Math.ceil(Math.random()*7),Math.ceil(Math.random()*5),
        Math.ceil(Math.random()*3)]
    sum = num[0]
    for(let i=1;i<num.length;i++){
        sum = sum*10+num[i]
    }
    return sum
}
console.log(`Here is your OTP: ${generateOTP()}`)