const dataQuiz = [
    {
      question: "What is the most popupar Sport in the world?",
      a: "Cricket",
      b: "Football / Soccer",
      c: "Basketball",
      d: "Table Tennis",
      correct: 'b',
    },
    {
      question: "Who is the founder and Chief Executive Officer of Sportradar?",
      a: "Michael Jordan",
      b: "Kobe Bryant",
      c: "Carsten Koerl",
      d: "Allen Iverson",
      correct: 'c',
    },
    {
      question: "How many employees in the Sportradar company?",
      a: "3520",
      b: "2950",
      c: "1760",
      d: "1940",
      correct: 'a',
    },
    {  
      question: "Where is the main office of Sportradar located?",
      a: "Philippines",
      b: "Singapore",
      c: "Australia",
      d: "Switzerland",
      correct: 'd',
    },
    { 
      question: "What is the first-ever organization in SR-Manila?",
      a: "Women in Tech ERG",
      b: "Football organisation",
      c: "Basketball Group",
      d: "Tennis Club",
      correct: 'a',
    }];
    
    const answerEls = document.querySelectorAll(".answer");
    const quiz = document.getElementById('quiz');
    const elementQ = document.getElementById('question');
    const aText = document.getElementById('titleA');
    const bText = document.getElementById('titleB');
    const cText = document.getElementById('titleC');
    const dText = document.getElementById('titleD');
    const submitBtn = document.getElementById('submit');
    
    let currentQuiz = 0;
    let score = 0;
    
    loadQuiz();
    
    
    function loadQuiz(){
      deSelectAnswers();
      
      const currentDataQuiz = dataQuiz[currentQuiz];
      
      elementQ.innerText = currentDataQuiz.question;
      aText.innerText = currentDataQuiz.a;
      bText.innerText = currentDataQuiz.b;
      cText.innerText = currentDataQuiz.c;
      dText.innerText = currentDataQuiz.d;
  
    }
    
    
    /*submitBtn.addEventListener("click", () => {
       
        currentQuiz++;
         
        if (currentQuiz < dataQuiz.length){
        loadQuiz();
      } else{
        alert("Well done! Get yourself a lemonade");
       }
      }
    );*/
    
    submitBtn.addEventListener('click', () => {
      const selectedAnswer = getSelectedAnswer();
  
      if(selectedAnswer === dataQuiz[currentQuiz].correct) {
          score++;
      }
  
      currentQuiz++;
  
      if(currentQuiz < dataQuiz.length) {
          loadQuiz();
      } else {
          // Display final score
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${dataQuiz.length} questions.</h2> <button onClick="location.reload()" id="reload">Reload</button>`;
      }
  });
  
  function getSelectedAnswer() {
      let answer = undefined;
  
      answerEls.forEach(answerEl => {
          if(answerEl.checked) {
              answer = answerEl.id;
          }
      });
  
      return answer;
  }
  
  function deSelectAnswers(){
    answerEls.forEach(answerEl => {
      answerEl.checked = false;
    });
  }