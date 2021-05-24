// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------");



const getRoll = () => {
    for (let i = 0; i < 10; i++) {

        let die1 = (Math.floor(Math.random() * 6) + 1);
        let die2 = (Math.floor(Math.random() * 6) + 1);

        let message = (`${die1} + ${die2} == ${die1 + die2}`);

        if (die1 == die2) {

            console.log(message += " DOUBLES!");
        } else {
            
            console.log(message);
        }
    }
}
getRoll();