// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "1.The NOR gate output will be high if the two inputs are ____",
        answer: "00",
        options: [
            "00",
            "01",
            "10",
            "11"
        ]
    },
    {
        numb: 2,
        question: "A universal logic gate is one which can be used to generate any logic function. which of the following is a universal logic gate?",
        answer: "NAND",
        options: [
            "OR",
            "AND",
            "XOR",
            "NAND"
        ]
    },
    {
        numb: 3,
        question: "Which of the following are known as universal gates?",
        answer: "NAND & NOR",
        options: [
            "NAND & NOR",
            "AND & OR",
            "XOR & OR",
            "EX-NOR & XOR"
        ]
    },
    {
        numb: 4,
        question: "Which input values will cause an AND logic gate to produce a HIGH output?",
        answer: "All inputs are HIGH",
        options: [
            "At least one input is HIGH",
            "At least one input is LOW",
            "All inputs are HIGH",
            "All inputs are LOW"
        ]
    },
    {
        numb: 5,
        question: "Identify gates from which Exclusive-OR gate can be formed.",
        answer: "AND gates, OR gates, and NOT gates",
        options: [
            "AND gates and NOT gates",
            "AND gates, OR gates, and NOT gates",
            "OR gates and NOT gates",
            "OR gates only"
        ]
    },
    {
    numb: 6,
    question: "Define NAND gate:.",
    answer: "AND gates followed by an inverter",
    options: [
        "Only if both the inputs are high",
        "Only if both the inputs are low",
        "Only if one input is high and the other is low",
        "If at least one input is high"
    ]
},
{
    numb: 7,
    question: "Select when the output of two-input NOR gate is high:",
    answer: "Only if both the inputs are low",
    options: [
        "Only if both the inputs are high",
        "Only if both the inputs are low",
        "Only if one input is high and the other is low",
        "If at least one input is high"
    ]
},
{
    numb: 8,
    question: "(A+B)+C=A+(B+C) is which law?",
    answer: "Associative Law",
    options: [
        "Associative Law",
        "Distributive Law",
        "Commutative Law",
        "De Morgan's Law"
    ]
},    {
    numb: 9,
    question: "A NOT gate means",
    answer: "OR gate followed by an inverter",
    options: [
        "Inversion followed by an OR gate",
        "OR gate followed by an inverter",
        "NOT gate followed by an OR gate",
        "NAND gate followed by an OR gate"
        
    ]
},    {
    numb: 10,
    question: "Recognize the gate used in Inverter.",
    answer: "NOT gate",
    options: [
        "NOT gate",
        "OR gate",
        "AND gate",
        "None of the above"
    ]
},
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const result_box1 = document.querySelector(".result_box1");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
shoot = document.querySelector('.weapon');
s = document.querySelector('.ship');
s.classList.remove('ship1ani');
earth = document.querySelector('.earth');
voice = document.querySelector('.sound');
b = document.querySelector('.exp');
e = document.querySelector('.explode');
b.style.display = "none";
audio = new Audio('gamebg.mpeg');
let level = 1;

// if startQuiz button clicked
start_btn.onclick = () => {
    audio.play();
    audio.loop = "true";

    info_box.classList.add("activeInfo"); //show info box
    start_btn.style.display = "none";
    s.style.display = "block";
    s.classList.add('ship1ani');
    setTimeout(() => {
        s.classList.remove('ship1ani');
    }, 3000);
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    start_btn.style.display = "block";
}

// if continueQuiz button clicked
continue_btn.onclick = () => {

    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(30); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let eh = 100;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    earth.style.display = "block";
    earth.classList.add('earthani');
    s.classList.add('ship1ani');
    e.style.display = "none";
    setTimeout(() => {
        s.classList.remove('ship1ani');
    }, 3000);
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 30;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    eh = 100;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = () => {
    earth.style.dispay = "block";
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        next_btn.classList.add("show"); //show the next button if user selected any option

    } else {
        shoot.style.display = "block";
        shoot.classList.add('weaponani');
        setTimeout(() => {
            shoot.classList.remove('weaponani');

            shoot.style.display = "none";
        }, 1000);

        setTimeout(() => {
            voice.play();
            voice.volume = 1.0;
            b.style.display = "block";
            b.classList.add('explosionani');
        }, 1000);
        setTimeout(() => {
            audio.volume = 1.0;
        }, 4000);
        setTimeout(() => {
            b.style.display = "none";
            b.classList.remove('explosionani');
        }, 2100);
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        eh = eh - 20;

        console.log("eh = ", eh);
        if (eh == 0) {
            s.style.display = "block";
            setTimeout(() => {
                e.style.display = "block";
                e.classList.add('explodeani');

            }, 1500);
            setTimeout(() => {

                setInterval(() => {

                }, 3000);
            }, 500);
            setTimeout(() => {
                showResult();
            }, 1500);
            

        }
        setTimeout(() => {
            next_btn.classList.add("show"); //show the next button if user selected any option
        }, 1500);


        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
                
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }



}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore == 10) { // if user scored 10
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (userScore > 5) { // if user scored more than 5
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span> <p> but with with some damage to earth.</p> ';
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 1
        let scoreTag = '<span>and , You got  <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span> <p> but earth is destroyed.😐</p>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            eh = eh -20;
            shoot.style.display = "block";
            shoot.classList.add('weaponani');
            setTimeout(() => {
                shoot.classList.remove('weaponani');
    
                shoot.style.display = "none";
            }, 1000);
    
            setTimeout(() => {
                voice.play();
                voice.volume = 1.0;
                b.style.display = "block";
                b.classList.add('explosionani');
            }, 1000);
            setTimeout(() => {
                audio.volume = 1.0;
            }, 4000);
            setTimeout(() => {
                b.style.display = "none";
                b.classList.remove('explosionani');
            }, 2100);
            if (eh == 0) {
                s.style.display = "block";
                setTimeout(() => {
                    e.style.display = "block";
                    e.classList.add('explodeani');
    
                }, 1500);
                setTimeout(() => {
    
                    setInterval(() => {
    
                    }, 3000);
                }, 500);
                setTimeout(() => {
                    showResult();
                }, 1500);
                
    
            }
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 58);
    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
