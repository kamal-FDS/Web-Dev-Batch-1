const new1= function(a,b){
  if(a<=b){
    console.log("a greater than b")
  }
  else{
    console.log("a is less than b")
  }
  console.log(++b)
}

const new2=(b)=>{
    console.log(b)
}
new1(2,3)
new2(30)