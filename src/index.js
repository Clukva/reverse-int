module.exports = function reverse (n) {
    if(n > 0){
    let rev = +n.toString().split("").reverse().join("") 
    
  return rev
}else if ( n < 0){
    let rev2 = Math.abs(n).toString().split("").reverse().join("")
     
    return rev2
}
    

}
