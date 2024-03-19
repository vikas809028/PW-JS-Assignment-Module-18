const products = [
    {
        name :"Laptop",
        price:120000
    },
    {
        name :"Mobile",
        price:70000
    },
    {
        name :"Laptop Bag",
        price:20000
    },
    {
        name :"Watch",
        price:220000
    },
    {
        name :"Mobile Charger",
        price:1500
    }
]
function checkMaxAndMIn(){
    let min = products[0].price;
    let max = products[0].price;
    for(let i =1;i<products.length;i++){
       if(products[i].price>max){
        max = products[i].price
       }
       if(products[i].price<min){
        min = products[i].price
       }
    } 
    for(let i = 0;i<products.length;i++){
        if(products[i].price==max){
            console.log(`The product with maximun ammount is ${products[i].name} which is priced at Rs. ${max}`)
        }
        if(products[i].price==min){
            console.log(`The product with minimun ammount is ${products[i].name} which is priced at Rs. ${min}`)
        }
    }      
}
checkMaxAndMIn()