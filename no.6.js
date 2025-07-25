let testScores = [91, 92, 89, 85, 88];

function AverageCalculation(Tscores) {
  
  if (Tscores.length > 3) {
    let lowest = Math.min(...Tscores);
    Tscores.splice(Tscores.indexOf(lowest), 1);
  }

  let total = 0;
  for (let score of Tscores) {
    total += score;
  }
  let Average = total / Tscores.length;

  
  let Grade = '';
  if (Average >= 90) {
    Grade = 'A';
  } else if (Average >= 80) {
    Grade = 'B';
  } else if (Average >= 70) {
    Grade = 'C';
  } else if (Average >= 60) {
    Grade = 'D';
  } else {
    Grade = 'F';
  }


  return {
    Average: Average.toFixed(2),
    Grade: Grade
  };
}


let result = AverageCalculation(testScores);
console.log("Average:", result.Average);
console.log("Letter Grade:", result.Grade);
