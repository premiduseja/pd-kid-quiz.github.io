// Global state
let currentQuizType = '';
let currentQuestion = 0;
let answers = new Array(120).fill(null); // Max 120 questions
let quizQuestions = [];
let shuffledOptions = {}; // Cache shuffled options to keep them consistent
let correctAnswerIndices = {}; // Track where correct answer is after shuffling

// Screens
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

// Function to shuffle options for a question
function getShuffledQuestion(question, questionIndex) {
    if (!shuffledOptions[questionIndex]) {
        // Create array of indices [0, 1, 2, 3]
        const indices = [0, 1, 2, 3];
        
        // Fisher-Yates shuffle on indices
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Reorder options based on shuffled indices
        const shuffledOpts = indices.map(i => question.options[i]);
        
        // Find where the correct answer ended up
        const newCorrectIndex = indices.indexOf(question.correct);
        
        shuffledOptions[questionIndex] = shuffledOpts;
        correctAnswerIndices[questionIndex] = newCorrectIndex;
    }
    
    return {
        ...question,
        options: shuffledOptions[questionIndex],
        correct: correctAnswerIndices[questionIndex]
    };
}

// Start quiz
function startQuiz(type) {
    currentQuizType = type;
    currentQuestion = 0;
    answers = new Array(120).fill(null);
    shuffledOptions = {}; // Reset shuffled options
    correctAnswerIndices = {}; // Reset correct answer indices
    
    // Load questions based on type
    if (type === 'quantitative') {
        quizQuestions = [...QUANTITATIVE_QUESTIONS];
    } else {
        quizQuestions = [...NONVERBAL_QUESTIONS];
    }
    
    // Shuffle questions order
    quizQuestions = shuffleQuestions(quizQuestions);
    
    // Update quiz title
    const title = type === 'quantitative' ? '🔢 Quantitative Quiz' : '🎨 Non-Verbal Quiz';
    document.getElementById('quizTitle').textContent = title;
    
    // Show quiz screen
    showScreen('quiz');
    loadQuestion(0);
}

// Function to shuffle questions array
function shuffleQuestions(questionsArray) {
    const shuffled = [...questionsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Show specific screen
function showScreen(screenName) {
    homeScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    if (screenName === 'home') {
        homeScreen.classList.add('active');
    } else if (screenName === 'quiz') {
        quizScreen.classList.add('active');
    } else if (screenName === 'results') {
        resultsScreen.classList.add('active');
    }
}

// Load question
function loadQuestion(index) {
    if (index < 0 || index >= quizQuestions.length) return;
    
    currentQuestion = index;
    const originalQuestion = quizQuestions[index];
    const question = getShuffledQuestion(originalQuestion, index);
    
    // Update progress
    const progress = ((index + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    
    // Load question content
    const questionHTML = `
        <div class="question-number">Question ${index + 1}</div>
        <div class="question-text">${question.question}</div>
        ${question.image ? `<img src="${question.image}" alt="Question image" class="question-image">` : ''}
    `;
    document.getElementById('questionBox').innerHTML = questionHTML;
    
    // Load options
    loadOptions(question, index);
    
    // Update button states
    document.getElementById('prevBtn').disabled = index === 0;
    const isLastQuestion = index === quizQuestions.length - 1;
    document.getElementById('nextBtn').textContent = isLastQuestion ? 'Finish' : 'Next →';
}

// Load answer options
function loadOptions(question, questionIndex) {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    const userAnswer = answers[questionIndex];
    
    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        // Add selected state
        if (userAnswer === optionIndex) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-label">${String.fromCharCode(65 + optionIndex)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionDiv.addEventListener('click', () => {
            selectAnswer(questionIndex, optionIndex);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
}

// Select answer
function selectAnswer(questionIndex, optionIndex) {
    answers[questionIndex] = optionIndex;
    loadQuestion(currentQuestion); // Reload to show selection
}

// Next question
function nextQuestion() {
    if (currentQuestion === quizQuestions.length - 1) {
        // Finish quiz
        finishQuiz();
    } else {
        loadQuestion(currentQuestion + 1);
        window.scrollTo(0, 0);
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
        window.scrollTo(0, 0);
    }
}

// Finish quiz and show results
function finishQuiz() {
    // Calculate score
    let correct = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        const shuffledQuestion = getShuffledQuestion(quizQuestions[i], i);
        if (answers[i] === shuffledQuestion.correct) {
            correct++;
        }
    }
    
    const total = quizQuestions.length;
    const percentage = Math.round((correct / total) * 100);
    
    // Display results
    displayResults(correct, total, percentage);
}

// Display results
function displayResults(correct, total, percentage) {
    // Score circle
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.textContent = percentage;
    scoreCircle.style.background = percentage >= 80 ? 'linear-gradient(135deg, #7ED321, #5CB85C)' : 
                                   percentage >= 60 ? 'linear-gradient(135deg, #F5A623, #E8932F)' : 
                                   'linear-gradient(135deg, #D0021B, #A00116)';
    
    // Score text
    let feedback = '';
    if (percentage >= 90) {
        feedback = "Excellent! You're a star! 🌟";
    } else if (percentage >= 80) {
        feedback = "Great job! Keep practicing! 😊";
    } else if (percentage >= 70) {
        feedback = "Good effort! Study more and try again! 📚";
    } else if (percentage >= 60) {
        feedback = "Nice try! Practice more to improve! 💪";
    } else {
        feedback = "Keep working on it! You'll do better next time! 🚀";
    }
    
    document.getElementById('scoreText').textContent = percentage + '%';
    document.getElementById('scoreFeedback').textContent = feedback;
    
    // Details
    const incorrect = total - correct;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('incorrectCount').textContent = incorrect;
    
    // Review answers
    displayReview(correct, total);
    
    showScreen('results');
}

// Display review of answers
function displayReview(correct, total) {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';
    
    for (let i = 0; i < quizQuestions.length; i++) {
        const shuffledQuestion = getShuffledQuestion(quizQuestions[i], i);
        const userAnswer = answers[i];
        const isCorrect = userAnswer === shuffledQuestion.correct;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const selectedAnswer = userAnswer !== null ? shuffledQuestion.options[userAnswer] : 'Not answered';
        const correctAnswer = shuffledQuestion.options[shuffledQuestion.correct];
        
        reviewItem.innerHTML = `
            <div class="review-question">Question ${i + 1}: ${quizQuestions[i].question}</div>
            <div class="review-answer">
                <strong>Your answer:</strong> ${selectedAnswer}<br>
                ${!isCorrect ? `<strong>Correct answer:</strong> ${correctAnswer}<br>` : ''}
                ${quizQuestions[i].explanation ? `<strong>Explanation:</strong> ${quizQuestions[i].explanation}` : ''}
            </div>
            <div class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
        `;
        
        reviewList.appendChild(reviewItem);
    }
}

// Go home
function goHome() {
    showScreen('home');
}

// Restart quiz
function restartQuiz() {
    startQuiz(currentQuizType);
}
