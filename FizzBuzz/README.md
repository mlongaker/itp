# FizzBuzz
## Malcolm Longaker
### Intro To Programming
#### 02/28/2025
For this assignment, I wrote lines of code that outputted a list of every integer from 1-100 in order with every number divisible by 3 outputting as "Fizz" and every number divisible by 5 outputting as "Buzz". Every number divisible by both outputted as "FizzBuzz".
I tried assigning the phrase integerlist to the initial  value of 1 by creating the binding `let integerlist = 1` and then using `console.log (integerlist++) to see if I could get it to count up by one. This did not work so I tried using a counter througha while statement. I kept `let integerlist = 1 and then used used a while statement followed code to keep adding one while integerlist was less than or equal to 1 using this code
`let integerlist = 1
while (integerlist <= 100) {
  Integerlist++`
I then had no idea how to output not only the initial value of one, but also the following values up to 100. I typed in `console.log (integerlist) which I did not think would work, I assumed it would only output the 1 I assigned it to. But it actually got me pretty close. It listed all the numbers from 2-101 after I typed this in.
`let integerlist = 1
while (integerlist <= 100) {
  Integerlist++`
I wasn’t sure exactly how it knew to console log the entirety of the counter but it did make sense to me that because it did do that it actually would add 1 to everything to give me 2,101, so I changed my code by subtracting 1 from both the integers I added to this:
`let integerlist = 0
while (integerlist <= 99) {
  integerlist++
  console.log (integerlist)
  }`
This output the correct values from 1-100. 
I then added this line of code to see if I could get just the integers divisible by both 3 and 5 to show up as FizzBuzz:
`let integerlist = 0
while (integerlist <= 99) {
  integerlist++
  console.log (integerlist)
}
if (integerlist % 5 === 0 && integerlist % 3 === 0){
  console.log ("FizzBuzz");
  }`
When this code ran, it still only output numbers 1-100 without any change to the integers, so I gave up on this strategy and tried a *for* loop.
When I initially tried the *for* loop, I still kept the starting value at 0 and the ending value at 99, and then added a console.log of integerlist, so I accidentally got a list of 0-99. I then replaced 0 with 1 and 99 with 100 and ran this code to make sure I was at least getting my list of numbers 1-100:
`for (let integerlist = 1; integerlist <= 100; integerlist++){
  console.log (integerlist)
  }`



After this worked I tried to use if, else if, and else statements to make certain integers change to words. I copied the formatting from the github codealong:
`for (let integerlist = 1; integerlist <= 100; integerlist++){
  if (integerlist % 5 === 0){
    console.log("Buzz")
    } else if (integerlist % 3 === 0){
    console.log ("Fizz")
    } else if (integerlist % 5 === 0  && integerlist % 3 === 0){
    console.log ("FizzBuzz")
    } else { 
    console.log (integerlist)
        }
  }`
This made the numbers divisible by 5 change to “Buzz” in the list and numbers divisible by 3 change to “Fizz,” but the last else if statement did not make the numbers divisible by both change to “FizzBuzz.” I guessed that the “FizzBuzz” condition had to be first since if it wasn’t all of those integers would have already been told to change to “Fizz” or “Buzz.” I reordered my lines of code and ran this code:
`for (let integerlist = 1; integerlist <= 100; integerlist++){
  if (integerlist % 5 === 0 && integerlist % 3 === 0){
    console.log("FizzBuzz")
    } else if (integerlist % 3 === 0){
    console.log ("Fizz")
    } else if (integerlist % 5 === 0){
    console.log ("Buzz")
    } else { 
    console.log (integerlist)
        }
  }`
This code outputs the integers and string in the desired order.
