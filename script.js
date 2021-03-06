// Variabler kopplade till klasser i HTML
const quizGameEl = document.querySelector(".quizGame");
const studentImageEl = document.querySelector(".studentImage");
const nameButtonsEl = document.querySelector(".nameButtons");
const showResultButtonEl = document.querySelector(".showResultButton");
const gameResultEl = document.querySelector(".gameResult");
const resultTextEl = document.querySelector(".resultText");
const newGameButtonEl = document.querySelector(".newGameButton");

// Array med alla studenter - bilder samt namn
const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

// Fisher Yates algoritm för att slumpa studenter
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

// Deklarerar variabel utanför nedan funktion för att vi behöver nå den även längre ner
let rightAnswer;

// Funktion för att hämta 4 studenter och en bild
const getStudent = () => {

    // Slumpar studenter
    shuffleArray(students);

    // Tar ut 4 studenter (objekt)
    const fourStudents = students.slice(0, 4);
    // console.log("Fyra utvalda studenter:", fourStudents);

    // Bestämmer att student på index 0 alltid är rätt svar
    rightAnswer = fourStudents[0];
    // console.log("Rätt svar:", rightAnswer);

    // Kopplat det rätta svarets bild till HTML
    studentImageEl.src = rightAnswer.image;

    // Plockat ut de fyra studenternas namn i en variabel
    const fourStudentsNames = fourStudents.map((student) => student.name);

    // Slumpar i vilken ordning de fyra namnen visas
    shuffleArray(fourStudentsNames);
    nameButtonsEl.innerHTML = "";

    // Ger varje namn en knapp
    fourStudentsNames.forEach((studentName) => {
        nameButtonsEl.innerHTML += `<button class="p-3 m-2 btn nameBtn">${studentName}</button>`;
    });
}
// Kallar på funktionen ovan
getStudent();

// Håll koll på antal gissningar
let numberOfGuesses = 0;
let correctGuesses = 0;

// Anger vad som ska hända vid klick på knapp
nameButtonsEl.addEventListener("click", (e) => {

    if (e.target.tagName === "BUTTON") {

        // Öka antal gissningar med 1
        numberOfGuesses++;
        // console.log(numberOfGuesses);

        // Bestämmer händelser vid rätt eller fel gissning
        if (e.target.innerText === rightAnswer.name) {

            correctGuesses++;

            getStudent();
            // console.log("Du gissade rätt");

        } else {

            getStudent();
            // console.log("Du gissade fel");
        }

        // Bestämmer vad som händer när antal gissningar blir 10
        if (numberOfGuesses === 10) {

            // Knapp som visas efter 10 gissningar
            showResultButtonEl.classList.remove("d-none");

            // Döljer spelet så att ny bild och nya namn inte syns
            quizGameEl.classList.add("d-none");

            // Händelse vid klick på knapp
            showResultButtonEl.addEventListener("click", () => {

                // Visar min lightbox
                gameResultEl.classList.remove("d-none");

                // Text med resultat i lightbox
                resultTextEl.innerText = `You guessed correct on ${correctGuesses} student(s) out of ${numberOfGuesses}.`;

                newGameButtonEl.addEventListener("click", () => {

                    getStudent();

                    numberOfGuesses = 0;
                    correctGuesses = 0;

                    gameResultEl.classList.add("d-none");

                    showResultButtonEl.classList.add("d-none");

                    quizGameEl.classList.remove("d-none");  
                }
                )
            })
        }
    }
});
