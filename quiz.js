var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionContainer');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var app = {
    questions: [
        { q:'Inside which HTML elements do we put the JavaScript?', options: ['script','javascript', 
        'scripting','js'], answer:1},

        //{ q:'What is the correct JavaScript syntax to change the content of the HTML element below.<p id="demo">This is a demonstration.</p>', 
        //options: ['document.getElementById("demo").innerHTML="HelloWorld";','#demo.innerHTML="HelloWorld";', 'document.getElemen("p").innerHTML="HelloWorld";',
        //'document.getElementByName("p").innerHTML="HelloWorld";'], answer:1},

        { q:'Where is the correct place to insert a javascript?', options: ['The "head" section','The "body" section', 
        'Both the "head" and the "body" section is correct','All of the above'], answer:4},

        { q:'What is the correct syntax for referring to an external script called "xxx.js"?', options: ['script src="xxx.js"','script href="xxx.js"', 
        'script name="xxx.js"','All of the above'], answer:1},

        { q:'How do you write "Hello World" in an alert box?', options: ['msgBox("Hello World");','alert("Hello World");', 
        'msg("Hello World");','alertBox("Hello World");'], answer:2},

        { q:'How do you create a function in JavaScript?', options: ['function = myFunction()','function myFunction()', 
        'function:myFunction()','myFunction = function()'], answer:2},

        { q:'In javascript, elements can be gotten by .........', options: ['Id','className', 
        'name','all of the above'], answer:4},

        { q:'Errors in javascript include all but .........', options: ['syntax error','....', 
        '....','....'], answer:2},

        { q:'How do you create a function in JavaScript?', options: ['function = myFunction()','function myFunction()', 
        'function:myFunction()','myFunction = function()'], answer:2},

        { q:'How do you create a function in JavaScript?', options: ['function = myFunction()','function myFunction()', 
        'function:myFunction()','myFunction = function()'], answer:2},

        { q:'How do you create a function in JavaScript?', options: ['function = myFunction()','function myFunction()', 
        'function:myFunction()','myFunction = function()'], answer:2},
    ],
    index: 0,

    //options
    load:function() {
        if(this.index<=this.questions.length-1){
        quizBox.innerHTML = this.index+1 +". "+ this.questions[this.index].q;
        opt1.innerHTML = this.questions[this.index].options[0];
        opt2.innerHTML = this.questions[this.index].options[1];
        opt3.innerHTML = this.questions[this.index].options[2];
        opt4.innerHTML = this.questions[this.index].options[3];
                this.scoreCard();
        }
        else{
        quizBox.innerHTML = "Quiz is Over !!!";
        opt1.style.display="none";
        opt2.style.display="none";
        opt3.style.display="none";
        opt4.style.display="none";
        btn.style.display="none";
        }
    },

    //loads next question
    next:function() {
        this.index++;
        this.load();
    },

    //check if an answer is correct.
    check:function(e){
        var id=e.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            e.className="correct";
            e.innerHTML="Correct";
            this.scoreCard();
        }else {
            e.className="wrong";
            e.innerHTML="Wrong";
        }
        
    },

    //prevent other option from been clickable after u have clicked one option.
    notClickAble:function() {
        for (let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="none";
        }
    },

    clickAble:function() {
        for (let i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },


    score:0,
    scoreCard:function() {
        scoreCard.innerHTML=this.score+"/"+this.questions.length;
    }
}


window.onload=app.load();

function button(e) {
    app.check(e);
    app.notClickAble();
}
function next() {
    app.next();
    app.clickAble();
}
