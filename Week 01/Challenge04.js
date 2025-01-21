function CountLetter(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count += 1;
        }
    }
    console.log(count);
    return count;
}
let text1 = "hello world";
CountLetter(text1, "o");
let text2 = "aaa bbb a";
CountLetter(text2, "a");
let text3 = ("abc");
CountLetter(text3, "d");