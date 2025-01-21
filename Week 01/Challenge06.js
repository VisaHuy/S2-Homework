function vote(list) {
    if (list.length === 0) {
        console.log("No votes were cast.");
        return;
    }

    let voteA = 'A';
    let voteB = 'B';
    let voteC = 'C';
    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] === voteA) {
            countA += 1;
        } else if (list[i] === voteB) {
            countB += 1;
        } else if (list[i] === voteC) {
            countC += 1;
        }
    }

    if (countA > countB && countA > countC) {
        console.log("A is the winner");
    } else if (countB > countA && countB > countC) {
        console.log("B is the winner");
    } else if (countC > countA && countC > countB) {
        console.log("C is the winner");
    } else if (countA === countB && countA > countC) {
        console.log("A and B are the winners");
    } else if (countA === countC && countA > countB) {
        console.log("A and C are the winners");
    } else if (countB === countC && countB > countA) {
        console.log("B and C are the winners");
    } else if (countA === countB && countB === countC) {
        console.log("All A, B, and C are tied");
    }
}

const list1 = ['A', 'B', 'A', 'C', 'A'];
const list2 = ['A', 'B', 'B', 'C', 'A'];
const list3 = [];
const list4 = ['A', 'B', 'C', 'A', 'B', 'C'];
vote(list1);
vote(list2);
vote(list3);
vote(list4);
