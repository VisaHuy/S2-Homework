function CountWord(string) {
    count = 0;
    bool = false;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            if (!bool) {
                count ++;
                bool = true;
            } 
        } else {
            bool = false;
        }
    }
    return count; 

}

console.log(CountWord("hello world"));