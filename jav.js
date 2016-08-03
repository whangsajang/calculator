var numbArray = ['',''];
var result = null;
var operator = '';
var index = 0;
$(document).ready(function(){
 var val;
    $('.button').click(function(){
        val = $(this).text();
       buttonClicked(val);
    });

    $('.operators').click(function(){
        operator = ($(this).text());
    })

})
/**************** Display Function ****************/
function displayText(numb){
    $('.display').html(numb);
}
/**************Function to determine what value was clicked ***************/
function buttonClicked(val){
    switch(val){
        case "+":
        case "-":
        case "x":
        case "/":
            operatorClicked(val);
            break;
        case "=":
            calculate();
            operator = '';
            break;
        case ".":
            decimalClicked(val);
            break;
        case "AC":
            allClear();
            break;
        case "CE":
            clear();
            break;
        default:
            numberClicked(val);

    }
}
/********************** Function to calculate numbers in array *************/
function calculate(){
    switch(operator){
        case '+':
            result = parseFloat(numbArray[0]) + parseFloat(numbArray[1]);
            break;
        case '-':
            result = parseFloat(numbArray[0]) - parseFloat(numbArray[1]);
            break;
        case 'x':
            result = parseFloat(numbArray[0]) * parseFloat(numbArray[1]);
            break;
        case '/':
            if(numbArray[1] == '0'){
                result = 'Error';
            }
            else {
                result = parseFloat(numbArray[0]) / parseFloat(numbArray[1]);
            }
            break;
    }

    numbArray[0] = result;
    index = 0;
    numbArray[1] = '';
    displayText(result);
    return result;
}

/********** Function to add all values into Array ************/
function numberClicked(val){
    numbArray[index] += val;
    displayText(numbArray[index]);
}
/***************Function for Decimal Clicked *****************/
function decimalClicked(val){
    if(numbArray[index].indexOf('.') != '-1'){
        return
    }else if(numbArray[index] == ''){
        numbArray[index] += 0;
    }
    numbArray[index] += val;
    displayText(numbArray[index]);
}
/**************Function for operator clicked *****************/
function operatorClicked(val){

    if(numbArray[0] === ""){
        return;
    }

    if(numbArray[1] !== ''){
        calculate();
    }
    displayText(val);
    index++;
    console.log(numbArray[0]);

}
/******************Function to Clear all variables **************/
function allClear(){
    numbArray = ['',''];
    result = null;
    operator = '';
    index = 0;
    displayText('');
}

function clear(){
    $('.display').html('');
}











// var tempArray = [];
// var isCompounding = false;
//
// function array_calc(display) {
//     $('.display').html(display);
// }
//
// $(document).ready(function(){
//     var val;
//     $('.button').css('cursor', 'pointer'); //when a button is selected changes in the css to the pointer
//
//     $('.button').click(function(){
//         val = $(this).text();
//         if (val != "=") {
//             tempArray.push(val);
//             var display = tempArray.join('');
//             array_calc(display);
//         }
//
//     });
//
//     $('.mathcalc').click(function(){
//         initialCalc();
//     });
//
//     // $('.equal').click(function() {
//      //   $(this).text();
//    //  });
//
//
//     $('.allclear').click(function() {
//         val = $(this).text();
//         all_clear();
//     });
//
//     $('.clear').click(function() {
//         $(this).text();
//         clear();
//     });
//
// });
//
// function initialCalc (){
//
//     if ( parseFloat( tempArray[0]) ){
//
//         for (var i=0; i < tempArray.length; i++){
//             if (tempArray[i] == "+"){
//                 add();
//             } else if (tempArray[i] == "-"){
//                 subtract();
//             } else if (tempArray[i] == "/"){
//                 divide();
//             } else if (tempArray[i] == "x"){
//                 multiply();
//             }
//         }
//
//     }
//
// };
//
// //this array is integers only
// //can only return an array containing 2 elements
// function createNewArr(){
//     // debugger;
//     var newArr = [];
//     for(var i = 0; i < tempArray.length; i++){
//         if ( parseInt(tempArray[i]) ){
//             newArr.push(parseInt(tempArray[i]))
//         }
//     }
//     //if the new array has more then 2 elements
//     //then the calculation is compounding
//     if(newArr.length > 2) {
//         isCompounding = true;
//     } else {
//         isCompounding = false;
//     }
//
//     return newArr;
//
// };
//
// function add (){
//
//     var arr = createNewArr();
//     var sum = arr[0] + arr[1];
//     show();
//
//     if(isCompounding){
//         //remove first 3 elements of tempArrray
//         tempArray.shift();
//         tempArray.shift();
//         tempArray.shift();
//         //add sum to the front of temp array
//         tempArray.unshift(sum);
//         // call initial calc again
//         initialCalc();
//     } else {
//         console.log(sum);
//         return sum;
//         tempArray = [];
//     }
//
// };
//
// function subtract(){
//     var arr = createNewArr();
//     var diff = arr[0] - arr[1];
//     show();
//
//     if(isCompounding){
//         //remove first 3 elements of tempArrray
//         tempArray.shift();
//         tempArray.shift();
//         tempArray.shift();
//         //add sum to the front of temp array
//         tempArray.unshift(diff);
//         // call initial calc again
//         initialCalc();
//     } else {
//         console.log(diff);
//         return diff;
//         tempArray = [];
//     }
//
// };
//
// function multiply(){
//     var arr = createNewArr();
//     var prod = arr[0] * arr[1];
//     show();
//
//     if(isCompounding){
//         //remove first 3 elements of tempArrray
//         tempArray.shift();
//         tempArray.shift();
//         tempArray.shift();
//         //add sum to the front of temp array
//         tempArray.unshift(prod);
//         // call initial calc again
//         initialCalc();
//     } else {
//         console.log(prod);
//         return prod;
//         tempArray = [];
//     }
// };
//
// function divide(){
//     var arr = createNewArr();
//     var quotient = arr[0] / arr[1];
//     show();
//
//     if(isCompounding){
//         //remove first 3 elements of tempArrray
//         tempArray.shift();
//         tempArray.shift();
//         tempArray.shift();
//         //add sum to the front of temp array
//         tempArray.unshift(quotient);
//         // call initial calc again
//         initialCalc();
//     } else {
//         console.log(quotient);
//         return quotient;
//         tempArray = [];
//     }
// };
//
// function show() {
//     $('.display').html('');
// }
//
// function all_clear() {
//     tempArray = [];
//     $('.display').html("");
// };
//
// function clear() {
//     tempArray.pop();
//     $('.display').html();
// };
//
// function decimal(){
//     if(tempArray[x] == '.'){
//
//     }
//
// }
