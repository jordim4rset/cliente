let num;
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;
let num10 = 0;


for(let i = 0; i < 10000; i++){
    num = Math.floor(Math.random() * 10)+1;

    switch(num)
    {
        case 1: 
            num1++;
            break;
        case 2: 
            num2++;
            break;
        case 3: 
            num3++;
            break;
        case 4: 
            num4++;
            break;
        case 5: 
            num5++;
            break;
        case 6: 
            num6++;
            break;
        case 7: 
            num7++;
            break;
        case 8: 
            num8++;
            break;
        case 9: 
            num9++;
            break;
        case 10: 
            num10++;
            break;
    }
}

console.log('1: '+num1);
console.log('2: '+num2);
console.log('3: '+num3);
console.log('4: '+num4);
console.log('5: '+num5);
console.log('6: '+num6);
console.log('7: '+num7);
console.log('8: '+num8);
console.log('9: '+num9);
console.log('10: '+num10);



