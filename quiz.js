var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionContainer');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var app = {
    questions: [
        { q:'What is 2 * 2?', options: ['4','8', '6','2'], answer:1},

        { q:'What is 10 * 20?', options: ['30','200', '10','100'], answer:2},

        { q:'What is 10% of 200?', options: ['10','300', '20','2000'], answer:3}
    ],
    index: 0,
    load:function() {
        quizBox.innerHTML = this.questions[this.index].q;
        opt1.innerHTML = this.questions[this.index].options[0];
        opt2.innerHTML = this.questions[this.index].options[1];
        opt3.innerHTML = this.questions[this.index].options[2];
        opt4.innerHTML = this.questions[this.index].options[3];
        scoreCard.innerHTML=this.questions.length+ "/" +this.score;

    },

    check:function(e){

        var id=e.id.split('');
        if(id[id.length - 1]==this.questions[this.index].answer){
            console.log('correct')
        }else {
            console.log('wrong')
        }
        
    },
    score: 0
}


window.onload=app.load();

function button(e) {
    app.check(e);
}
