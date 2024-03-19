const students = [
    {
        name :"Mithun",
        marks:95
    },
    {
        name :"Alka",
        marks:75
    },
    {
        name :"Jubin",
        marks:92
    },
    {
        name :"Salman",
        marks:70
    },
    {
        name :"Govinda",
        marks:99
    }
]
function checkResults(name){
    let cleared = false;
    for(let i =0;i<students.length;i++){
        if(students[i].name==name && students[i].marks > 90){
            console.log(`Congratulations ${students[i].name}! You have cleared the exam`)
            cleared = true
            break;
        }
    }
    if(!cleared){
        console.log(`Sorry You have not cleared the exam`)
    }

    
}
checkResults("Salman")