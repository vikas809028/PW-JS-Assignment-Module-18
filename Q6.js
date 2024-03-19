const productdetails = {
    name : "Apple 2020 Macbook Air Laptop",
    price : 82000,
    color : "Grey",
    hardDisk: "256 GB"
}
console.log("Below are the product details.")
for(const key in productdetails){
    console.log(`${key} : ${productdetails[key]}`)
}