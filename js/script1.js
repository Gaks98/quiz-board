function check(){
    var q1=document.test.q1.value;
    var q2=document.test.q2.value;
    var q3=document.test.q3.value;
    var q4=document.test.q4.value;
    var q5=document.test.q5.value;

    var score = 0;


    if (q1== "c"){
        score++;
    }
    if (q2== "a"){
        score++;
    }
    if (q3== "d"){
        score++;
    }
    if (q4== "a"){
        score++;
    }
    if (q5== "c"){
        score++;
    }
    //alert("your score " + score + " points");
    var conversion = score/5 * 100;
    score = conversion;

    var message = ["Great job!","aim higher","fairly done","poorly done","Get serious"];
    var messageArray;
    var picture =["img/great-job.gif","img/keep-up.gif","img/fairly-done.gif","img/poorly-done.gif","img/get-serious.gif"];

    if(score < 40 ){
        messageArray =4;
    }
    if(score >= 40 && score < 60){
        messageArray =3;
    }
    if(score >= 60 && score < 80){
        messageArray =2;
    }
    if( score >= 80 && score <100){
        messageArray =1;
    }
    if(score === 100 ){
        messageArray =0;
    }


    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML= message[messageArray];
    document.getElementById("number_correct").innerHTML = "You got " + score + "% correct.";
    document.getElementById("picture").src = picture[messageArray];
}
