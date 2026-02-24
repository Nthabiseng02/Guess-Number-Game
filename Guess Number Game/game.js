
let randomNumber = Math.floor(Math.random()* 30)+1;
console.log("The correct number is"+ randomNumber);
function CheckNumber(){
    
    let result = document.getElementById('Display');
    let num = document.getElementById('number').value;

        let number = parseFloat(num);
        let Display = parseFloat(result);
    


    if(num == randomNumber){
        result.textContent ="You guessed RIGHT";
        document.body.style.backgroundColor='limegreen';
    }
    else{
        result.textContent ="You guessed WRONG";
        document.body.style.backgroundColor='red';

    }
}