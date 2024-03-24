var revenue =true
var cibilscore= false
console.log('agentlevel')
// And operator &&
console.log(revenue&&cibilscore)
if(revenue&&cibilscore)
{
    consolse.log("your are eligible for loan")
} else{
console.log("your are not eligible")   
}

var asset =false 
var assurance = true
console.log(" manager level==============")
 //|| or operator
 console.log(" rgional level==============")

if ( asset || assurance)
{
    console.log("your eligible for loan")
} else{
    console.log(" not eligible")
}
var statusof= asset||assurance
  // ! not operator
if(!statusof){                                        
    console.log(" loan approved")
} else{
    console.log("rejected")
}