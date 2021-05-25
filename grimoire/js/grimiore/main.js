// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false
    }
]

const goodSpells = () => {
    console.log("Good Book");
    for (let eachSpell of allSpells) {
        if (eachSpell.isEvil == false) {
            console.log(`${eachSpell.name}`)
        }
    }
}

const evilSpells = () => {
    console.log("Evil Book");
    for (let eachSpell of allSpells) {
        if (eachSpell.isEvil == true) {
            console.log(`${eachSpell.name}`)
        }
    }
}

goodSpells();
console.log(" ")
evilSpells();