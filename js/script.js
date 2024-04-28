let attemptNum = document.querySelector(".hero__content-block-before-attempt-span");
let questionTxt = document.querySelector(".hero__content-block-after-question");
let answersBlock = document.querySelector(".hero__content-block-after-answers");

let questions = [
	{
		question: "Какой язык програмирования используеться для написания frontend?",
		options: ["JavaScript", "Python", "PHP", "C++"],
		correctAnswer: "JavaScript"
	},
	{
		question: "Что за функция в css размывает фон?",
		options: ["Toggle", "Blur", "Calc", "Rgba"],
		correctAnswer: "Blur"
	},
	{
		question: "Какое из следующих значений курсора делает его активным?",
		options: ["Pointer", "Move", "Crosshair", "Wait"],
		correctAnswer: "Pointer"
	},
	{
		question: "4Какой язык програмирования используеться для написания frontend?",
		options: ["JavaScript", "Python", "PHP", "C++"],
		correctAnswer: "JavaScript"
	}
]

let currentQuestion = 0; // текущий вопрос
let currentAnswers = 0; // правильные ответы

function displayQuestion() {
	questionTxt.textContent = questions[currentQuestion].question;
	answersBlock.innerHTML = "";
	let optionsMassiv = questions[currentQuestion].options;
	optionsMassiv.map((questionItem) => {
		let btn = document.createElement("button");
		btn.classList.add("hero__content-block-after-answers-btn");
		btn.textContent = questionItem;
		answersBlock.appendChild(btn);
	})
	let answersBtns = Array.from(document.querySelectorAll(".hero__content-block-after-answers-btn"));
	return answersBtns
}

answersBlock.addEventListener("click", (event) => {
	let targetBtn = event.target;
	if (targetBtn.classList.contains("hero__content-block-after-answers-btn")) {
		targetBtnTxt = event.target.textContent;
		if (targetBtnTxt == questions[currentQuestion].correctAnswer) {
			currentAnswers++;
			attemptNum.textContent = currentAnswers;
		}
		currentQuestion++;
		if (currentQuestion < questions.length) {
			displayQuestion();
		} else {
			dislpaResult();
		}
	}
})

function dislpaResult() {
	setTimeout(() => {
		questionTxt.style.display = "none";
		answersBlock.style.display = "none";
	}, 1000);
	questionTxt.classList.add("close-block")
	answersBlock.classList.add("close-block")
}