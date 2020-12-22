const a=[2,3,5,4,6];

function f(val){
  for(let i=2;val>i;i++){
    if(val%i===0){
      return false;
    }
  }
 return val>1;
}

const b=a.filter(f);
console.log("ans is:"+b);
