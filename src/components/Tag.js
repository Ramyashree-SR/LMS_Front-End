import React from 'react'

function Tag() {
  return (
    <div>Tag</div>
  )
}

export default Tag

let arr=[5,7,6,5,2,5,3,5,9,,4,5]
let unique=arr.filter(function(val,idx){
    return val===5
})
let arr1=arr.filter((value,index)=>{
    return arr.indexOf(value)===index;
})
arr1.shift()
console.log(unique);
console.log(arr1.concat(unique));