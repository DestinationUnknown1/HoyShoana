const questions = [
    {
        question: "Д1ачакхдаккха кица:Дукха 1ийха циско_____?",
        optionA: "Шур мена яц",
        optionB: "Дег1а даьккхадац",
        optionC: "Дахка лаьцабац",
        optionD: "Топ теха яц",
        correctOption: "optionC"
    },

    {
        question: "\"Боадонгара\" ях роман хьано язъяй?",
        optionA: "Яндиев Джамалд",
        optionB: "Гагиев Гирихан",
        optionC: "Мальсагов Дошлакъ",
        optionD: "Базоркин Идрис",
        correctOption: "optionD"
    },

    {
        question: "\"Кит\" ях деша таржам де",
        optionA: "Сувсакх",
        optionB: "Борцакх",
        optionC: "Эпп",
        optionD: "Болчакх",
        correctOption: "optionA"
    },

    {
        question: "Д1ачакхдаккха кица:\"Дайна сий_____\"?",
        optionA: "Корадаьдац",
        optionB: "Меттаденадац",
        optionC: "Дайна ираз",
        optionD: "Ураг1дахадац",
        correctOption: "optionB"
    },

    {
        question: "Ц1ерага маьре яхар \"-ях произведени язъяр малув?",
        optionA: "Чахкиев Саид",
        optionB: "Полонкоев Мухьаммад",
        optionC: "Боков Ахьмад",
        optionD: "Чахкиев Капитон",
        correctOption: "optionA"
    },

    {
        question: "\"Носорог \"-ях деша таржам де",
        optionA: "Ц1алкх",
        optionB: "Гамаж",
        optionC: "Бирнал",
        optionD: "Т1оаргац",
        correctOption: "optionC"
    },

    {
        question: "Г1алг1ай къам сибарег1а малаг1ча шера 1одахийтад?",
        optionA: "1948 шера",
        optionB: "1956 шера",
        optionC: "1939 шера",
        optionD: "1944 шера",
        correctOption: "optionD"
    },

    {
        question: "Г1алг1ай паччахьалкхе малаг1ча шера хьакхеллай?",
        optionA: "1987 шера",
        optionB: "1995 шера",
        optionC: "1992 шера",
        optionD: "1887 шера",
        correctOption: "optionC"
    },

    {
        question: "Д1ачакхдаккха кица:\"Т1емо во1 ваьвац...\"?",
        optionA: "Т1емо пха лийхаб",
        optionB: "Т1емо во1 вийнув",
        optionC: "Къаракха пайд хиннабац",
        optionD: "Т1емо во1 воаваьв",
        correctOption: "optionB"
    },

    {
        question: "\"Мулл\"-ях деша таржам де" ,
        optionA: "Вирб1арз",
        optionB: "Къайг",
        optionC: "Наж",
        optionD: "Нач1ал",
        correctOption: "optionA"
    },

    {
        question: "Г1алг1ай Республика хьалхара президент мал хиннав?",
        optionA: "Хашагульгов Бахьаудин",
        optionB: "Евкуров Юнус-Бек",
        optionC: "Аушев Руслан",
        optionD: "Мальсагов Ахьмад",
        correctOption: "optionC"
    },

    {
        question: "Г1алг1ай къамо им маца диллад?",
        optionA: "1887 шера",
        optionB: "1847 шера",
        optionC: "1700 шера",
        optionD: "1930 шера",
        correctOption: "optionB"
    },


    {
        question: "Пригородни районера г1алг1ай  малаг1ча шера арабаьхаб?",
        optionA: "1920 шера",
        optionB: "1890 шера",
        optionC: "1970 шера",
        optionD: "1992 шера",
        correctOption: "optionD"
    },

    {
        question: "Г1алг1ай алаппат хьано кхелад?",
        optionA: "Боков Ахьмад",
        optionB: "Г1оандлой Хьасан",
        optionC: "Мальсагов Зоврбик",
        optionD: "Гомкартиев Сараждин",
        correctOption: "optionC"
    },

    {
        question: "Г1алг1ай алаппат  масса алапаг1 латт?",
        optionA: "46 алап",
        optionB: "40 алап",
        optionC: "26 алап",
        optionD: "32 алап",
        correctOption: "optionA"
    },

    {
        question: "Г1алг1ай мехка эггара лакхаг1а лоам малаг1а ба?",
        optionA: "Маьтт-лоам",
        optionB: "Шан-лоам",
        optionC: "Цей-лоам",
        optionD: "Баш-лоам",
        correctOption: "optionB"
    },

    {
        question: "Г1алг1ай мехка керттера г1ала?",
        optionA: "Назрань",
        optionB: "Эбарг-Юрт",
        optionC: "Маг1албик",
        optionD: "Магас",
        correctOption: "optionD"
    },

    {
        question: "Г1алг1ай эггара хьалхара элгац малаг1а хиннай?",
        optionA: "Маьт-Сели",
        optionB: "Т1ой-Ерда",
        optionC: "Ткъоаба-Ерда",
        optionD: "Ийс Г1ала",
        correctOption: "optionC"
    },

    {
        question: "Г1алг1ай байракха т1а латтар фуй?",
        optionA: "Тхьамаг1а",
        optionB: "Зялмаха",
        optionC: "Солярный-Хьарак",
        optionD: "Толмач",
        correctOption: "optionA"
    },

    {
        question: "\"Бульон\"-яха деша таржам де:",
        optionA: "Хьонк",
        optionB: "Ч1ондарг",
        optionC: "Дилл",
        optionD: "П1енд",
        correctOption: "optionC"
    },

    {
        question: "Мехк-кхеле юкъе масса саг водаш хиннав?",
        optionA: "22 саг",
        optionB: "12 саг",
        optionC: "21 саг",
        optionD: "19 саг",
        correctOption: "optionB"
    },

    {
        question: "Г1алг1ай масса аьла хиннав?",
        optionA: "3",
        optionB: "В1ала хиннавац",
        optionC: "9",
        optionD: "6",
        correctOption: "optionB"
    },

    {
        question: "К1илбаседа-Кавказе эггара хьалхаг1а \"Дунен яхьаш\" котале яккхар малув?",
        optionA: "Садулаев Абдул-Рашид",
        optionB: "Мальсагов Хьусен",
        optionC: "Котиев Ахьмад",
        optionD: "Кураев Сергей",
        correctOption: "optionC"
    },

    {
        question: "Г1алг1аша шоалаг1а бувца мотт малаг1а ба?",
        optionA: "Гуржий мотт",
        optionB: "Эрсий мотт",
        optionC: "Г1умкий мотт",
        optionD: "Черсий мотт",
        correctOption: "optionB"
    },

    {
        question: "Д1ачакхдаккха кица: \"Лакха лоам хоарцабаьбац...\" ",
        optionA: "Бакъдола дош а къардаьдац",
        optionB: "Нийс дош тулл даьдац",
        optionC: "Лакха гаьн хоадаяъяц",
        optionD: "Бошабаьб",
        correctOption: "optionA"
    },

       {
        question: "Г1алг1ай къам Россе пачахьалкхен юкъе малаг1ча шера дахад?",
        optionA: "1730 шера",
        optionB: "1770 шера",
        optionC: "1880 шера",
        optionD: "1856 шера",
        correctOption: "optionB"
    },


       {
        question: "Г1алг1ай метта масса падеж да?",
        optionA: "Кхоъ",
        optionB: "Ворх",
        optionC: "Пхиъ",
        optionD: "Барх",
        correctOption: "optionD"
    },


       {
        question: "Малаг1ча дешагара хьахиннад \"Г1алг1айче\" яха дош?",
        optionA: "Г1ала",
        optionB: "Г1алг1ай",
        optionC: "Г1алг1а",
        optionD: "Кхы долча дешаг1",
        correctOption: "optionA"
    },

    {
        question: "Хьано язъяй \"Наьна илли\" яха байт?",
        optionA: "Боков Ахьмад",
        optionB: "Яндиев Джамалд",
        optionC: "Хашагульгов 1аьла",
        optionD: "Осмиев Хьамзат",
        correctOption: "optionB"
    },

    {
       question:"Ворх1 б1аь:",
       optionA: "300",
       optionB: "7000",    
       optionC: "007",
       optionD: "700",
       correctOption: "optionD"

    },

     {
       question:"\"Хьа дог\" яхача дешахоатама таржам де",
       optionA: "Твоё сердце",
       optionB: "Близкий друг",    
       optionC: "Твой друг",
       optionD: "Снежный лес",
       correctOption: "optionA"

    },
  

]


let shuffledQuestions = [] 

function handleQuestions() { 
    
    while (shuffledQuestions.length <= 14) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}





let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
 
    setTimeout(() => {
        if (indexNumber <= 14) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

 
    if (playerScore <= 3) {
        remark = "Мо лайзар хьо"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Мо  лайзнцар хьо"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Чоаг1а дика лайзар хьо"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100


    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

