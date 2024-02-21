var readline=require('readline-sync');
var operations = ['+', '-', '/', '*'];

function question(){
    operator=readline.question('select the operation need to perform'
    +'\nsum (' + operations[0]+')'
    +'\nsubtraction (' + operations[1]+')'
    +'\ndivision (' + operations[2]+')'
    +'\nmultiplication (' + operations[3]+')\n'
    );
    if(!operations.includes(operator)){
        console.log('enter valid operation')
        question();
    }
    num1=readline.questionInt('enter first number');
    num2=readline.questionInt('enter second number');
    switch(operator){
        case '+':
            console.log('result of'+num1+operator+num2+'='+(num1+num2));
            break;
        case '-':
            console.log('result of'+num1+operator+num2+'='+(num1-num2));
            break;
        case '*':
            console.log('result of'+num1+operator+num2+'='+(num1*num2));
            break;
        case '/':
            console.log('result of'+num1+operator+num2+'='+(num1/num2));
            break;
        default :
            console.log('operation failed');
            break;
            
    }
}
question();