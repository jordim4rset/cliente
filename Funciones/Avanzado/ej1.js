const nums = [1,2,3,4,5,68];

//ITERATIVA
let suma = 0;
for(let i = 0; i < nums.length; i++){
    suma += nums[i];
}

console.log(suma);


//RECURSIVA

function sumaR(nums, i = 0) {
  if (i === nums.length) {
    return 0;
  }
  return nums[i] + sumaR(nums, i + 1);
}

console.log(sumaR(nums));