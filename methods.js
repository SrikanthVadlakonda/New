const str = "hello";
const str1="world";
const reversed = str.split('').reverse().join("");
document.write(reversed);
document.write(str1); 

const str2 = "hello good morning";
const substring = "morning";

if(str2.includes(substring)){
    document.write(`the string contains"${substring}"`);
}
else{
    document.write(`${substring}`);
}
//const result = str2.includes(substring);
//document.write(result); // true

