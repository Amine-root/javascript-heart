const form = document.querySelector('.form-quizz');

let arrayResult = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (i = 1; i < 6; i++) {
        arrayResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }

    console.log(arrayResult);
    arrayResult = [];
 
});