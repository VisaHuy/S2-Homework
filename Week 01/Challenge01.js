function challenge1(width, height) { 

    let rectangleString = ''; 

    // Your code 
    if (width < 0 || height < 0) {
        console.log("Width and Height have to be possitive");
    }
    for (let i = 0; i < height; i++) {
        let row = "";
        for (let j = 0; j < width; j++) {
            row += "*";
        }
        console.log(row);
    }

    return rectangleString; 

} 
console.log(challenge1(3,4));
console.log(challenge1(5,2));
console.log(challenge1(5,-2));