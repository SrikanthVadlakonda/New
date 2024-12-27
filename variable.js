let i=1;

for (i = 1; i <= 100; i++) {
   // console.log(i)
   if(i%2 !==0){
    document.write(i)
   }
}

const myAge = 27; 
const numbers = [3, 5, 2, 20, 43, 37, 94, 34];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; 
}, myAge); 

document.write("  result  ", sum);


//4)Find the positive even num and positive odd num
