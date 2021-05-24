// Put your code here

const placeNames = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

    console.log('All Place Names');

    for (let eachPlace of placeNames) {
        console.log(eachPlace);
    }

    console.log(' ')

const TheNames = placeNames.filter((n) => n.startsWith("The"));

console.log("'The' Place Names");
 for (let eachTheName of TheNames) {
     console.log(eachTheName);
 }