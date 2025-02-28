for (let integerlist = 1; integerlist <= 100; integerlist++){
  if (integerlist % 5 === 0 && integerlist % 3 === 0){
    console.log("FizzBuzz")
    } else if (integerlist % 3 === 0){
    console.log ("Fizz")
    } else if (integerlist % 5 === 0){
    console.log ("Buzz")
    } else { 
    console.log (integerlist)
        }
  }