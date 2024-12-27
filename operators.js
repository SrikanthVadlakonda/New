let a=50;
let b=10;
//arithematic
document.write(a+b);
document.write(a-b);
document.write(a*b);
document.write(a/b);
document.write("<br>");

//comparision
let c=5;
let d=5;
if(c===d){
    document.write("c is equal to d")
}else
document.write("c is not eql to d")
document.write("<br>");
//call back method using function
function check(e,f){
    if(e==f){
        return ("e is equal to f");
    }
    if(e<f){
        return("e is less than f")
    }
        else
    return ("e is greater than f")
}
document.write(check(8,7))
document.write("<br>")


function calculateTotalMarks(assignment, exam, project) {
    return assignment + exam + project;
}

function calculatePercentage(totalMarks, maxMarks) {
    return (totalMarks / maxMarks) * 100;
}

function checkPassFail(totalMarks, passMarks) {
    return totalMarks >= passMarks ? "Passed" : "Failed";
}



// Main function that puts everything together
function main() {
    let assignmentMarks = 85;
    let examMarks = 90;
    let projectMarks = 80;

    let totalMarks = calculateTotalMarks(assignmentMarks, examMarks, projectMarks);
    
    let percentage = calculatePercentage(totalMarks, 300);
        
    let result = checkPassFail(totalMarks, 200);

    
    document.write("Total Marks: " + totalMarks+ "<br>"); 
    document.write("Percentage: " + percentage + "%" + "<br>");
    document.write("Result: " + result + "<br>"
        
    );
}


main()



function canDrive(age, license) {
    if (age >= 18 && license) {
        return "You are allowed to drive the car.";
    } else {
        return "You are not allowed to drive. Fine will be charged.";
    }
}

let personAge = 20; 
let personHasLicense = false; 
let result = canDrive(personAge, personHasLicense);

document.write(result + "<br>");

let num1=20;
let num2=22;
function number(num1, num2){
    if(num1==20 && num2==22){
return "the value is correct";
    }else{
        return "the value is not corret"
    }
}
document.write(number(num1,num2))


// Function to check if it's safe to cross
const canCross = (signalLight, roadClear) => {
    if (signalLight === "green" && roadClear) {
        document.write("You can cross the road. It's safe!");
    } else if (signalLight === "yellow") {
        document.write("Be cautious! It's better to wait.");
    } else if (signalLight === "red") {
        document.write("Do not cross! Wait for the light to turn green.");
    } else {
        document.write("Invalid input. Please check the signal light and road conditions.");
    }
};

// Test cases
canCross("green", true+"<br>");  // Output: "You can cross the road. It's safe!"
