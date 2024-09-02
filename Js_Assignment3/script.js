// Q1. Find Grades
let marks = 30;

  switch(true){
  case marks >=10:
      console.log("E")
      break;
  case marks>=11 && marks <= 20:
       console.log("D")
      break;
  case marks>= 21 && marks <= 30:
      console.log("C")
      break; 
  case marks>= 31 && marks <= 40:
          console.log("B")
          break;
  case marks>=41 && marks <= 50:
      console.log("A")
      break; 
  default:
      console.log("Invalid number")
      break;
      
 }

// Q2. Get Value
 function getValue(v){
    switch(true){
        case v == 'P' || v == 'p':
             console.log("PrepBytes");
             break;
        case v == 'Z' || v == 'z':
                console.log("Zenith");
                break;
        case v == 'E' || v == 'e':
                    console.log("Expert Coder");
                    break;       
        case v == 'D' || v == 'd':
                        console.log("Data Structure");
                        break;             
    }
 }
 getValue('d');

// //Q3 . Find the maximum out of three numbers.
 
 let num1 = 65;
 let num2 = 95;
 let num3 = 15;

 if(num1 >= num2 && num1 >= num3){
    console.log("greatest Number "+ num1);
 }
 else if(num2 >= num1 && num2 >= num3){
    console.log("greatest Number  " + num2);
 }else{
    console.log("greatest Number " + num3);
 }

  // Q4. Second Smallest
  function secondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}
const numbers = [2,9,23];
console.log("Second smallest element:", secondSmallest(numbers)); 


// 5.check whether the triangle is acute or obtuse

function checkTriangle(a, b, c) {
      let sides = [a, b, c].sort((x, y) => x - y);
    
    let [x, y, z] = sides;
    if (x ** 2 + y ** 2 > z ** 2) {
        return "The triangle is acute.";
    } else if (x ** 2 + y ** 2 < z ** 2) {
        return "The triangle is obtuse.";
    } else {
        return "The triangle is right-angled.";
    }
}

console.log(checkTriangle(60,100,20)); 
  