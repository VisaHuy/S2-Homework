function ScoreAverage(arr) {
    let TotalScore = 0;
    for (let i = 0; i < arr.length; i++) {
        TotalScore += arr[i];
    }
    let Average = TotalScore / arr.length;
    console.log(Average);
}

const score1 = [85, 90, 78, 92];
const score2 = [10, 20, 30];
const score3 = [ ];
ScoreAverage(score1);
ScoreAverage(score2);
ScoreAverage(score3);