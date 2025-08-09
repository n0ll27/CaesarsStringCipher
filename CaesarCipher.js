const alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z"];

const reservedArr = [alphabetLower[23],alphabetLower[24],alphabetLower[25]];

const reservedObj = {
    x: "u",
    y: "v",
    z: "w"
};

const caesarStrCipher = (string) => {
    // we can count how many times our reserve characters appear in the input as an argument, defined as max:
    let countX = 0;
    let maxX = 0;

    let countY = 0;
    let maxY = 0;

    let countZ = 0;
    let maxZ = 0;

    for (let c of string) {
        let cLowerCase = String(c).toLowerCase();
        // check x:
        if (cLowerCase === reservedArr[0]) {
            maxX+=1;
        }
        // check y:
        else if (cLowerCase === reservedArr[1]) {
            maxY+=1;
        }
        // check z:
        else if (cLowerCase === reservedArr[2]) {
            maxZ+=1;
        }
    }

    // console.log(`maxX: ${maxX}\nmaxY: ${maxY}\nmaxZ: ${maxZ}`); // for some reason the maximums are all 0...
            
    let doneX = false;
    let doneY = false;
    let doneZ = false;

    const newStrArr = [];
    // 1. break the string into characters
    for (let i = 0; i < string.length; ++i) {
        // find the character then move it 3 spaces if and only if possible (x,y,z):
        let inputStrChar = String(string[i]).toLowerCase();
        for (let j = 0; j < alphabetLower.length; ++j) {

            let char = alphabetLower[j];

            const stringedChar = String(char);

            if (stringedChar === inputStrChar 
                && stringedChar !== reservedArr[0]
                && stringedChar !== reservedArr[1]
                && stringedChar !== reservedArr[2]) {
                // now we need to move 3 spaces:
                char = alphabetLower[j+3];
                // I need to push the char into the new str arr:
                newStrArr.push(char);
                break;
            }

            if (stringedChar === reservedArr[0] && !doneX) {
                char = String(reservedObj.x);
                newStrArr.push(char);
                countX += 1;

                if (countX === maxX) doneX = true;
                break;
            }
            if (stringedChar === reservedArr[1] && !doneY) {
                char = String(reservedObj.y);
                newStrArr.push(char);
                countY += 1;

                if (countY === maxY) doneY = true;
                break;
            }
            if (stringedChar === reservedArr[2] && !doneZ) {
                char = String(reservedObj.z);
                newStrArr.push(char);
                countZ += 1;

                if (countZ === maxZ) doneZ = true;
                break;
            }

            }
        }
    // now we need to transform the newStrArr into a string:
    // .join() language API transforms your array into a string && includes an optional separator!
    const cipheredStr = newStrArr.join("");
    return cipheredStr;
};

console.log(caesarStrCipher("TEST"));