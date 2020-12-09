// random number which will create difference in coupon
var randomNumber = Math.floor((Math.random() * 10000));


//function to sync number and alphabet code
//A is considered as trivial value that is zero(convention for coupon)
function numToSSColumn(num){
    var s = '', t;
  
    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(66 + t) + s;
      num = (num - t)/26 | 0;
    }
    return s ;
  }

let rem_c = null
let rem_n = null
if(randomNumber < 10)
{
  rem_n = "000"

}
else if(randomNumber < 100)
{
  rem_n = "00"

}
else if(randomNumber < 1000)
{
  rem_n = "0"

}



if(numToSSColumn(randomNumber).length == 1)
{
  rem_c = "AA"
}
else if(numToSSColumn(randomNumber).length == 2)
{
  rem_c = "A"
}


//final coupon code
if(rem_n == null)
{
  console.log( randomNumber + rem_c + numToSSColumn(randomNumber))
}
else if(rem_c == null)
{
  console.log( "C" + rem_n + randomNumber + numToSSColumn(randomNumber))
}
else
{
  console.log( "C" + rem_n + randomNumber + rem_c + numToSSColumn(randomNumber))
}





