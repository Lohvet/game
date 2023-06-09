var select = document.getElementById('sel');

for (var i =1; i <= 100; i++){
    var option = document.createElement('option');
    option.value = i;
    option.text = i;
    select.appendChild(option);
}

function Game(){
    var random = Math.floor(Math.random() * 100) + 1;
    var select = document.getElementById('sel').value;


    if (select == ''){
        alert("Please select a number")
        return false;
    }
    if (select == random){
        alert("You selected the number " +select+ " and it matches the draw in our system which is also " +random+
        ". You have won the sum of NGN 500,000. A big Congratulations to You. 🎉"
        );
    }
    if (select != random){
        alert("You selected the number " +select+ " and our system drew the number " +random+ ". You have lost your bet. Try Again!"
        );
    }
}