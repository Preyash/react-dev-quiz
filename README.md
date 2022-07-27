# react-dev-quiz

#### Code from task 1:
```sh
function positiveInteger(x: number): number {
    return !(Number.isInteger(x) && Math.sign(x) === 1) ? "Number should be positive integer" : x
}
function print(x: number): number {
    let int = positiveInteger(x); 
    if (int%22 === 0) {
        return 'candybar 
    } else if (int%11 === 0) {
        return 'bar';
    } else if (int%2 === 0) {
        return 'candy';
    } else {
        return int
    }
}
console.log(print(66))
```

#### Code from task 2:
![task2](./src/img/task2.png)]


#### Code from task 3:
```sh
var sugarContent = 2 * bottom(amount) + top(amount) * 1.17;
if (recipe == 'SPANISH') {
   fudge = SPANISH_FUDGE;
   amount = base * SPANISH_FUDGE;
   sugar = sugarContent;
} else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
   fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
   amount = base * fudge;
   sugar = sugarContent;
   if (recipe == 'FRENCH') {
       chocolate = 7;
   }
} else {
   fudge = 1;
   amount = base;
   sugar = sugarContent;
}
```