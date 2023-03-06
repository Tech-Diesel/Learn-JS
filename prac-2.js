const prompt = require("prompt-sync")(); 


const bill="Bill Amount Payable:- "
const unit= Number(prompt("Enter your total Units:-"))
let line = "--------------------------------------------------------------"
const penalty="      /****Please Pay to avoid Penalty Charges****/" 
const due ="Due Date:-31st Mar 2023"

let less_Fifty=0;
let one_Fifty=0;
let less_TwoFifty=0;
let more_TwoFifty=0;


if(unit <= 50){
    less_Fifty = unit*0.50
	console.log(line)
	console.log(bill+less_Fifty+"            "+due)
	console.log(line)
	console.log(penalty)
	console.log(line)
			
}
else if(unit > 50 && unit <= 150){
	one_Fifty = (50*0.50)+(unit-50)*0.75
	console.log(line)
	console.log(bill+one_Fifty+"            "+due) 
  	console.log(line)
	console.log(penalty)
	console.log(line) 
}
else if(unit > 150 && unit <= 250 ){
	less_TwoFifty = (50*0.50)+(100*0.75)+(unit-150)*1.20
	console.log(line)
	console.log(bill+less_TwoFifty+"            "+due)
	console.log(line)
	console.log(penalty)
	console.log(line)
}							
else if(unit > 250){
	more_TwoFifty = (50*0.50)+(100*0.75)+(100*1.20)+(unit-250)*1.50
	console.log(line)
	console.log(bill+more_TwoFifty+"            "+due)
	console.log(line)
	console.log(penalty)
	console.log(line)
}




