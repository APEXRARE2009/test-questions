let attemptNum = document.querySelector(".hero__content-block-before-attempt-span");
let questionTxt = document.querySelector(".hero__content-block-after-question");
let answersBlock = document.querySelector(".hero__content-block-after-answers");
let beforeBlock = document.querySelector(".hero__content-block-before");
let afterBlock = document.querySelector(".hero__content-block-after");
let heroBlock = document.querySelector(".hero__content-block");

let blockCheckDevice = document.querySelector(".checking-device");
let blockCheckDeviceContent = document.querySelector(".checking-device-content");
let blockCheckDeviceBtn = document.querySelector(".checking-device-content-btn");
let blockCheckDeviceTxt = document.querySelector(".checking-device-content-txt");

let agentInfo = navigator.userAgent;

if (agentInfo.includes("Android")) {
    blockCheckDevice.style.display = "flex";
} else if (agentInfo.includes("iPhone")) {
    blockCheckDevice.style.display = "flex"
}

blockCheckDeviceBtn.addEventListener("click", () => {
    setTimeout(() => {
        blockCheckDevice.style.display = "none";
    }, 2300);
    setTimeout(() => {
        blockCheckDevice.classList.add("checking-device-close")
    }, 1200);
    setTimeout(() => {
        blockCheckDeviceContent.classList.add("checking-device-content-close")
    }, 400);
    blockCheckDeviceBtn.classList.add("checking-device-content-btn-close")
    blockCheckDeviceTxt.classList.add("checking-device-content-txt-close")
})

let questions = [
	{
		question: "Какой язык програмирования используеться для написания frontend?",
		options: ["JavaScript", "Python", "PHP", "C++"],
		correctAnswer: "JavaScript"
	},
	{
		question: "Какая функция в css размывает фон?",
		options: ["Toggle", "Blur", "Calc", "Rgba"],
		correctAnswer: "Blur"
	},
	{
		question: "Какое из следующих значений курсора делает его активным?",
		options: ["Pointer", "Move", "Crosshair", "Wait"],
		correctAnswer: "Pointer"
	},
	{
		question: "Какой из следующих тегов не является примером семантической разметки?",
		options: ["Header", "Footer", "Div", "Main"],
		correctAnswer: "Div"
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
		afterBlock.style.display = "none";
	}, 1500);
	setTimeout(() => {
		afterBlock.classList.add("none-height")
		heroBlock.classList.add("none-gap")
	}, 400);
	questionTxt.classList.add("close-block")
	answersBlock.classList.add("close-block")
}