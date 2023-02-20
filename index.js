

let studentGroup = "arts"; //declaring the exact calss group of the student
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";
if (studentGroup === "arts") //check if student group is arts
{
    console.log('welcome Bolatito, you are studying ' + artsSubjects + generalSubjects)
}
else if (studentGroup === "science"){
    console.log("Bolatito will be taking" + scienceSubjects)
}
else if (studentGroup === "science"){
    console.log("Bolatito will be taking" + socialScienceSubjects)
}
else{
    console.log(generalSubjects)
}