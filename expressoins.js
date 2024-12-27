let str="Today's date is 20 dec 20024";
//document.write(str)
document.write(str.match(/Today/));
document.write("<br>");
document.write(str.match(/[a-z0-9]/g));
document.write("<br>");
const str2 = "my gmail id is srikanth369@gmail.com";
const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
document.write(str2.match(emailRegex)); 
document.write("<br>");
document.write(str2)   
document.write("<br>");

const phone = "+91 9876543210";
const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
document.write(phone.match(phoneRegex));  

