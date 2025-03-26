function solve() {
  let correctAnswers = { 0: 'onclick', 1: 'JSON.stringify()', 2: 'A programming API for HTML and XML documents' };

  let answers = [];
  let result = document.getElementById('results');
  let questions = Array.from(document.querySelectorAll('.question'));

  for (let i = 0; i < questions.length; i++) {

    Array.from(questions[i].getElementsByClassName('quiz-answer')).forEach((el) => el.addEventListener('click', (e) => {

      answers.push(e.target.textContent);
      questions[i].classList.add('hidden');

      if (i != 2) {
        questions[i + 1].classList.remove('hidden');

      } else {
        answers = answers.map((x, i) => correctAnswers[i] == x ? x : null).filter(Boolean);

        answers.length == questions.length ? result.textContent = 'You are recognized as top JavaScript fan!'
          : answers.length == 1 ? result.textContent = 'You have 1 right answer'
            : result.textContent = `You have ${answers.length} right answers`;
      }
    }))
  }
}