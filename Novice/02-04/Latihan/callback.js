let students = [
    {name: "jinten", score: 90, school: "east"},
    {name: "paijo", score: 100, school: "east"},
    {name: "jono", score: 40, school: "east"},
    {name: "mino", score: 90, school: "wes"},
    {name: "tarno", score: 85, school: "east"},
    {name: "roro", score: 95, school: "west"},
    {name: "tukiman", score: 75, school: "east"}
];

let processStudents = function(data, callback){
    for(let i = 0; i < data.length; i++){
        if(data[i].school === "east"){
            if(typeof callback === 'function'){
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj){
    if(obj.score > 60){
        console.log(obj.name + " passed");
    }
});

let determineTotal = function(){
    let total = 0,
        count = 0;

    processStudents(students, function(obj){
        total += obj.score;
        count++
    })

    console.log("total score: " + total + "- total count: " + count);
};

determineTotal();