function ReverseArray(arr) {
    let inde = [];
    for (let i = arr.length - 1; i >= 0; i--){
        inde.push(arr[i]);  
    }
    console.log(inde);
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(ReverseArray(arr));