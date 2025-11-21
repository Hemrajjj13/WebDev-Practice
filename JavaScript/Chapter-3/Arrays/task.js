//Q1. convert given array let months = ['january', 'july', 'march', 'august'] to ['july', 'june', 'march', 'august']

let months = ['january', 'july', 'march', 'august'];
months.shift();
months.shift();
months.unshift('june');
months.unshift('july');
console.log(months);

//Q2. Q1. convert given array let months = ['january', 'july', 'march', 'august'] to ['july', 'june', 'march', 'august'] using splice method

let monthsTwo = ['january', 'july', 'march', 'august'];
monthsTwo.splice(0, 2, 'july', 'june');
console.log(monthsTwo);

//Q3. Return the index of the "javascript" from the given array, it it was reversed

let progLangs = ['c', 'c++', 'html', 'javscript', 'python', 'java', 'c#', 'sql'];
console.log(progLangs.reverse().indexOf('javscript'));
console.log(progLangs[4]);

//Q4. Create a Nested array to show the follwing tic toe game state

let ticTacToe = [['X', 'null', 'O'], ['null', 'X', 'null'], ['O', 'null', 'X']];
console.log(ticTacToe);
ticTacToe[0][1] = '0';
ticTacToe[1][0] = ticTacToe[1][2] = '0';
ticTacToe[2][1] = '0';
console.log(ticTacToe);
