// QUANTITATIVE QUESTIONS - 105 questions for 7-8 year olds
const QUANTITATIVE_QUESTIONS = [
    {
        question: "What is 5 + 3?",
        options: ["7", "8", "9", "10"],
        correct: 1,
        explanation: "5 + 3 = 8. Count on your fingers if needed!"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "2 + 2 = 4. This is a basic fact!"
    },
    {
        question: "What is 10 - 3?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "10 - 3 = 7. Count backwards from 10."
    },
    {
        question: "What is 6 + 4?",
        options: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "6 + 4 = 10. These numbers make ten!"
    },
    {
        question: "What is 9 - 2?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "9 - 2 = 7."
    },
    {
        question: "What is 3 + 7?",
        options: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "3 + 7 = 10."
    },
    {
        question: "What is 8 - 5?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "8 - 5 = 3."
    },
    {
        question: "What is 4 + 5?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "4 + 5 = 9."
    },
    {
        question: "What is 12 - 4?",
        options: ["7", "8", "9", "10"],
        correct: 1,
        explanation: "12 - 4 = 8."
    },
    {
        question: "What is 7 + 2?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "7 + 2 = 9."
    },
    {
        question: "What is 15 - 5?",
        options: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "15 - 5 = 10."
    },
    {
        question: "What is 3 + 3 + 3?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "3 + 3 + 3 = 9. Add step by step!"
    },
    {
        question: "If you have 5 apples and get 2 more, how many apples do you have?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "5 + 2 = 7 apples."
    },
    {
        question: "If you have 10 cookies and eat 3, how many are left?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "10 - 3 = 7 cookies."
    },
    {
        question: "What is 2 × 3?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "2 × 3 = 6. This means 2 groups of 3."
    },
    {
        question: "What is 4 × 2?",
        options: ["6", "8", "10", "12"],
        correct: 1,
        explanation: "4 × 2 = 8."
    },
    {
        question: "What is 3 × 3?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "3 × 3 = 9."
    },
    {
        question: "What is 5 × 2?",
        options: ["8", "10", "12", "14"],
        correct: 1,
        explanation: "5 × 2 = 10."
    },
    {
        question: "What number comes after 19?",
        options: ["18", "20", "21", "22"],
        correct: 1,
        explanation: "The number after 19 is 20."
    },
    {
        question: "What number comes before 50?",
        options: ["48", "49", "51", "52"],
        correct: 1,
        explanation: "The number before 50 is 49."
    },
    {
        question: "Which number is the largest?",
        options: ["25", "53", "42", "38"],
        correct: 1,
        explanation: "53 is the largest number."
    },
    {
        question: "Which number is the smallest?",
        options: ["78", "45", "12", "56"],
        correct: 2,
        explanation: "12 is the smallest number."
    },
    {
        question: "Skip counting by 5s: 5, 10, 15, ___",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "When counting by 5s, the next number is 20."
    },
    {
        question: "Skip counting by 2s: 2, 4, 6, ___",
        options: ["7", "8", "9", "10"],
        correct: 1,
        explanation: "When counting by 2s, the next number is 8."
    },
    {
        question: "Skip counting by 10s: 10, 20, 30, ___",
        options: ["35", "40", "45", "50"],
        correct: 1,
        explanation: "When counting by 10s, the next number is 40."
    },
    {
        question: "What is 6 + 6?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "6 + 6 = 12."
    },
    {
        question: "What is 20 - 8?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "20 - 8 = 12."
    },
    {
        question: "What is 3 × 4?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "3 × 4 = 12."
    },
    {
        question: "If one apple costs 3 dollars, how much do 2 apples cost?",
        options: ["3", "5", "6", "9"],
        correct: 2,
        explanation: "2 apples × 3 dollars = 6 dollars."
    },
    {
        question: "How many legs do 3 dogs have? (Each dog has 4 legs)",
        options: ["7", "9", "12", "15"],
        correct: 2,
        explanation: "3 dogs × 4 legs = 12 legs."
    },
    {
        question: "What is 25 + 10?",
        options: ["30", "35", "40", "45"],
        correct: 1,
        explanation: "25 + 10 = 35."
    },
    {
        question: "What is 40 - 15?",
        options: ["20", "25", "30", "35"],
        correct: 1,
        explanation: "40 - 15 = 25."
    },
    {
        question: "What is 5 × 5?",
        options: ["20", "25", "30", "35"],
        correct: 1,
        explanation: "5 × 5 = 25."
    },
    {
        question: "What is 100 - 50?",
        options: ["40", "45", "50", "55"],
        correct: 2,
        explanation: "100 - 50 = 50."
    },
    {
        question: "What is 7 × 2?",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explanation: "7 × 2 = 14."
    },
    {
        question: "How many hours are in a day?",
        options: ["12", "18", "24", "30"],
        correct: 2,
        explanation: "There are 24 hours in a day."
    },
    {
        question: "How many minutes are in an hour?",
        options: ["30", "45", "60", "90"],
        correct: 2,
        explanation: "There are 60 minutes in an hour."
    },
    {
        question: "What is half of 10?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Half of 10 is 5."
    },
    {
        question: "What is half of 20?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "Half of 20 is 10."
    },
    {
        question: "What is half of 14?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "Half of 14 is 7."
    },
    {
        question: "What is double 5?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "Double 5 is 10."
    },
    {
        question: "What is double 8?",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "Double 8 is 16."
    },
    {
        question: "If you share 12 cookies between 2 kids, how many does each get?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "12 ÷ 2 = 6 cookies each."
    },
    {
        question: "If you share 15 marbles between 3 kids, how many does each get?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "15 ÷ 3 = 5 marbles each."
    },
    {
        question: "What is 9 + 9?",
        options: ["16", "17", "18", "19"],
        correct: 2,
        explanation: "9 + 9 = 18."
    },
    {
        question: "What is 30 - 12?",
        options: ["15", "16", "17", "18"],
        correct: 3,
        explanation: "30 - 12 = 18."
    },
    {
        question: "What is 4 × 5?",
        options: ["18", "20", "22", "24"],
        correct: 1,
        explanation: "4 × 5 = 20."
    },
    {
        question: "What is 7 + 8?",
        options: ["13", "14", "15", "16"],
        correct: 1,
        explanation: "7 + 8 = 15."
    },
    {
        question: "What is 16 - 7?",
        options: ["7", "8", "9", "10"],
        correct: 2,
        explanation: "16 - 7 = 9."
    },
    {
        question: "What is 6 × 3?",
        options: ["16", "17", "18", "19"],
        correct: 2,
        explanation: "6 × 3 = 18."
    },
    {
        question: "What is 11 + 7?",
        options: ["16", "17", "18", "19"],
        correct: 1,
        explanation: "11 + 7 = 18."
    },
    {
        question: "What is 25 - 7?",
        options: ["16", "17", "18", "19"],
        correct: 1,
        explanation: "25 - 7 = 18."
    },
    {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "A triangle has 3 sides."
    },
    {
        question: "How many sides does a square have?",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "A square has 4 sides."
    },
    {
        question: "How many sides does a pentagon have?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "A pentagon has 5 sides."
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "A hexagon has 6 sides."
    },
    {
        question: "If it's 3 o'clock, what time will it be in 2 hours?",
        options: ["4 o'clock", "5 o'clock", "6 o'clock", "7 o'clock"],
        correct: 1,
        explanation: "3 + 2 = 5 o'clock."
    },
    {
        question: "If it's 6 o'clock, what time was it 3 hours ago?",
        options: ["1 o'clock", "2 o'clock", "3 o'clock", "4 o'clock"],
        correct: 2,
        explanation: "6 - 3 = 3 o'clock."
    },
    {
        question: "What is 8 + 7?",
        options: ["14", "15", "16", "17"],
        correct: 1,
        explanation: "8 + 7 = 15."
    },
    {
        question: "What is 20 - 5?",
        options: ["13", "14", "15", "16"],
        correct: 2,
        explanation: "20 - 5 = 15."
    },
    {
        question: "What is 5 × 3?",
        options: ["13", "14", "15", "16"],
        correct: 2,
        explanation: "5 × 3 = 15."
    },
    {
        question: "Which is more: 18 or 23?",
        options: ["18", "23", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "23 is more than 18."
    },
    {
        question: "Which is less: 45 or 54?",
        options: ["45", "54", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "45 is less than 54."
    },
    {
        question: "What is 10 + 12?",
        options: ["20", "21", "22", "23"],
        correct: 2,
        explanation: "10 + 12 = 22."
    },
    {
        question: "What is 50 - 30?",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "50 - 30 = 20."
    },
    {
        question: "What is 12 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "12 ÷ 4 = 3."
    },
    {
        question: "What is 16 ÷ 2?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "16 ÷ 2 = 8."
    },
    {
        question: "What is 9 + 6?",
        options: ["13", "14", "15", "16"],
        correct: 1,
        explanation: "9 + 6 = 15."
    },
    {
        question: "What is 24 - 8?",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "24 - 8 = 16."
    },
    {
        question: "What is 8 × 2?",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "8 × 2 = 16."
    },
    {
        question: "What is 7 + 7?",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explanation: "7 + 7 = 14."
    },
    {
        question: "What is 21 - 7?",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explanation: "21 - 7 = 14."
    },
    {
        question: "What is 7 × 2?",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explanation: "7 × 2 = 14."
    },
    {
        question: "What is 17 - 5?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "17 - 5 = 12."
    },
    {
        question: "What is 10 ÷ 5?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "10 ÷ 5 = 2."
    },
    {
        question: "How many fingers do you have on both hands?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "You have 10 fingers total (5 on each hand)."
    },
    {
        question: "How many toes do you have on both feet?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "You have 10 toes total (5 on each foot)."
    },
    {
        question: "What is 13 - 6?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "13 - 6 = 7."
    },
    {
        question: "Count by 3s: 3, 6, 9, ___",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "When counting by 3s, the next number is 12."
    },
    {
        question: "Count by 4s: 4, 8, 12, ___",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "When counting by 4s, the next number is 16."
    },
    {
        question: "What is one more than 29?",
        options: ["28", "29", "30", "31"],
        correct: 2,
        explanation: "One more than 29 is 30."
    },
    {
        question: "What is one less than 50?",
        options: ["48", "49", "51", "52"],
        correct: 1,
        explanation: "One less than 50 is 49."
    },
    {
        question: "What is 2 + 2 + 2?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "2 + 2 + 2 = 6."
    },
    {
        question: "What is 4 + 4?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "4 + 4 = 8."
    },
    {
        question: "What is 5 + 5?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "5 + 5 = 10."
    },
    {
        question: "What is 10 + 10?",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "10 + 10 = 20."
    },
    {
        question: "What is 3 + 4 + 5?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "3 + 4 + 5 = 12."
    },
    {
        question: "What is 11 + 9?",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "11 + 9 = 20."
    },
    {
        question: "What is 14 + 6?",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "14 + 6 = 20."
    },
    {
        question: "What is 100 ÷ 10?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "100 ÷ 10 = 10."
    },
    {
        question: "What is 6 + 5?",
        options: ["10", "11", "12", "13"],
        correct: 1,
        explanation: "6 + 5 = 11."
    },
    {
        question: "What is 18 - 7?",
        options: ["10", "11", "12", "13"],
        correct: 1,
        explanation: "18 - 7 = 11."
    },
    {
        question: "If there are 8 kids and 5 go home, how many are left?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "8 - 5 = 3 kids left."
    },
    {
        question: "If you have 6 pens and your friend gives you 4 more, how many do you have?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "6 + 4 = 10 pens."
    },
    {
        question: "What is 9 ÷ 3?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "9 ÷ 3 = 3."
    },
    {
        question: "What is 20 ÷ 4?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "20 ÷ 4 = 5."
    },
    {
        question: "What is 15 ÷ 5?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "15 ÷ 5 = 3."
    },
    {
        question: "How many weeks are in a month approximately?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        explanation: "There are approximately 4 weeks in a month."
    },
    {
        question: "How many months are in a year?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "There are 12 months in a year."
    },
    {
        question: "What is 3 × 6?",
        options: ["16", "17", "18", "19"],
        correct: 2,
        explanation: "3 × 6 = 18."
    },
    {
        question: "What is 4 × 4?",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "4 × 4 = 16."
    },
    {
        question: "Which is less: 69 or 57?",
        options: ["69", "57", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 57."
    },
    {
        question: "What is 36 - 28?",
        options: ["5", "8", "13", "21"],
        correct: 1,
        explanation: "36 - 28 = 8."
    },
    {
        question: "If you have 12 candies and lose 10, how many are left?",
        options: ["1", "6", "2", "12"],
        correct: 2,
        explanation: "The answer is 2."
    },
    {
        question: "You have 25 candies. If 5 are red, how many are not red?",
        options: ["24", "20", "18", "29"],
        correct: 1,
        explanation: "The answer is 20."
    },
    {
        question: "If you have 48 oranges and lose 11, how many are left?",
        options: ["35", "38", "45", "37"],
        correct: 3,
        explanation: "The answer is 37."
    },
    {
        question: "What is 48 ÷ 4?",
        options: ["9", "6", "15", "12"],
        correct: 3,
        explanation: "48 ÷ 4 = 12."
    },
    {
        question: "What is 1 × 3?",
        options: ["3", "9", "8", "6"],
        correct: 0,
        explanation: "1 × 3 = 3."
    },
    {
        question: "How many minutes are in 1 hours?",
        options: ["66", "56", "60", "90"],
        correct: 2,
        explanation: "The answer is 60."
    },
    {
        question: "What is double 8?",
        options: ["15", "23", "18", "16"],
        correct: 3,
        explanation: "The answer is 16."
    },
    {
        question: "You have 50 toys. If 13 are red, how many are not red?",
        options: ["37", "38", "33", "47"],
        correct: 0,
        explanation: "The answer is 37."
    },
    {
        question: "What is 6 × 1?",
        options: ["9", "3", "6", "14"],
        correct: 2,
        explanation: "6 × 1 = 6."
    },
    {
        question: "What is 6 + 49?",
        options: ["54", "55", "57", "67"],
        correct: 1,
        explanation: "6 + 49 = 55."
    },
    {
        question: "Which is less: 52 or 10?",
        options: ["52", "10", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 10."
    },
    {
        question: "Which is less: 62 or 25?",
        options: ["62", "25", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 25."
    },
    {
        question: "Skip counting by 2s: 4, 6, 8, ___",
        options: ["14", "10", "12", "8"],
        correct: 1,
        explanation: "The next number is 10."
    },
    {
        question: "If you have 32 stickers and lose 16, how many are left?",
        options: ["28", "16", "19", "13"],
        correct: 1,
        explanation: "The answer is 16."
    },
    {
        question: "What is 65 - 47?",
        options: ["18", "30", "16", "22"],
        correct: 0,
        explanation: "65 - 47 = 18."
    },
    {
        question: "If you have 21 oranges and lose 17, how many are left?",
        options: ["4", "13", "9", "2"],
        correct: 0,
        explanation: "The answer is 4."
    },
    {
        question: "What is 12 + 5?",
        options: ["22", "16", "17", "26"],
        correct: 2,
        explanation: "12 + 5 = 17."
    },
    {
        question: "You have 6 books. If 2 are red, how many are not red?",
        options: ["14", "3", "4", "5"],
        correct: 2,
        explanation: "The answer is 4."
    },
    {
        question: "You have 28 oranges. If 15 are red, how many are not red?",
        options: ["11", "13", "24", "18"],
        correct: 1,
        explanation: "The answer is 13."
    },
    {
        question: "What is 76 - 63?",
        options: ["26", "15", "10", "13"],
        correct: 3,
        explanation: "76 - 63 = 13."
    },
    {
        question: "What is 4 ÷ 4?",
        options: ["1", "4", "7", "5"],
        correct: 0,
        explanation: "4 ÷ 4 = 1."
    },
    {
        question: "What is 11 × 5?",
        options: ["66", "52", "59", "55"],
        correct: 3,
        explanation: "11 × 5 = 55."
    },
    {
        question: "Which is less: 67 or 69?",
        options: ["67", "69", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 67."
    },
    {
        question: "Skip counting by 3s: 3, 6, 9, ___",
        options: ["9", "18", "15", "12"],
        correct: 3,
        explanation: "The next number is 12."
    },
    {
        question: "What is 7 × 9?",
        options: ["68", "73", "63", "62"],
        correct: 2,
        explanation: "7 × 9 = 63."
    },
    {
        question: "Which is greater: 35 or 79?",
        options: ["35", "79", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 79."
    },
    {
        question: "What is 7 ÷ 7?",
        options: ["1", "4", "4", "8"],
        correct: 0,
        explanation: "7 ÷ 7 = 1."
    },
    {
        question: "If you have 41 oranges and get 9 more, how many do you have?",
        options: ["60", "55", "47", "50"],
        correct: 3,
        explanation: "The answer is 50."
    },
    {
        question: "What is 110 ÷ 11?",
        options: ["13", "10", "11", "8"],
        correct: 1,
        explanation: "110 ÷ 11 = 10."
    },
    {
        question: "What is 20 ÷ 2?",
        options: ["10", "11", "8", "5"],
        correct: 0,
        explanation: "20 ÷ 2 = 10."
    },
    {
        question: "What is 62 - 32?",
        options: ["28", "30", "35", "43"],
        correct: 1,
        explanation: "62 - 32 = 30."
    },
    {
        question: "What is 51 - 26?",
        options: ["25", "28", "23", "34"],
        correct: 0,
        explanation: "51 - 26 = 25."
    },
    {
        question: "You have 13 toys. If 6 are red, how many are not red?",
        options: ["6", "9", "7", "15"],
        correct: 2,
        explanation: "The answer is 7."
    },
    {
        question: "Skip counting by 4s: 4, 8, 12, ___",
        options: ["20", "16", "12", "24"],
        correct: 1,
        explanation: "The next number is 16."
    },
    {
        question: "How many days are in 7 weeks?",
        options: ["74", "49", "63", "46"],
        correct: 1,
        explanation: "The answer is 49."
    },
    {
        question: "What is 6 × 6?",
        options: ["41", "45", "36", "32"],
        correct: 2,
        explanation: "6 × 6 = 36."
    },
    {
        question: "You have 23 pencils. If 15 are red, how many are not red?",
        options: ["8", "16", "13", "5"],
        correct: 0,
        explanation: "The answer is 8."
    },
    {
        question: "You have 11 candies. If 6 are red, how many are not red?",
        options: ["7", "2", "5", "13"],
        correct: 2,
        explanation: "The answer is 5."
    },
    {
        question: "What is 96 ÷ 12?",
        options: ["14", "12", "6", "8"],
        correct: 3,
        explanation: "96 ÷ 12 = 8."
    },
    {
        question: "What is 6 × 6?",
        options: ["34", "36", "42", "38"],
        correct: 1,
        explanation: "6 × 6 = 36."
    },
    {
        question: "What is 11 × 11?",
        options: ["126", "131", "121", "117"],
        correct: 2,
        explanation: "11 × 11 = 121."
    },
    {
        question: "You have 48 candies. If 18 are red, how many are not red?",
        options: ["28", "30", "34", "37"],
        correct: 1,
        explanation: "The answer is 30."
    },
    {
        question: "What is 44 + 42?",
        options: ["87", "98", "86", "85"],
        correct: 2,
        explanation: "44 + 42 = 86."
    },
    {
        question: "What is 3 + 43?",
        options: ["44", "53", "46", "48"],
        correct: 2,
        explanation: "3 + 43 = 46."
    },
    {
        question: "What is 11 × 7?",
        options: ["89", "80", "77", "73"],
        correct: 2,
        explanation: "11 × 7 = 77."
    },
    {
        question: "If you have 22 candies and get 3 more, how many do you have?",
        options: ["28", "32", "25", "24"],
        correct: 2,
        explanation: "The answer is 25."
    },
    {
        question: "What is 77 ÷ 7?",
        options: ["7", "14", "11", "9"],
        correct: 2,
        explanation: "77 ÷ 7 = 11."
    },
    {
        question: "What is 8 ÷ 4?",
        options: ["5", "2", "5", "6"],
        correct: 1,
        explanation: "8 ÷ 4 = 2."
    },
    {
        question: "What is 5 × 10?",
        options: ["50", "59", "55", "47"],
        correct: 0,
        explanation: "5 × 10 = 50."
    },
    {
        question: "What is half of 24?",
        options: ["10", "21", "12", "13"],
        correct: 2,
        explanation: "Half of 24 is 12."
    },
    {
        question: "What is 5 × 5?",
        options: ["25", "28", "24", "31"],
        correct: 0,
        explanation: "5 × 5 = 25."
    },
    {
        question: "What is 11 × 11?",
        options: ["118", "122", "121", "133"],
        correct: 2,
        explanation: "11 × 11 = 121."
    },
    {
        question: "Skip counting by 2s: 4, 6, 8, ___",
        options: ["12", "8", "10", "14"],
        correct: 2,
        explanation: "The next number is 10."
    },
    {
        question: "What is triple 12?",
        options: ["39", "36", "33", "47"],
        correct: 1,
        explanation: "The answer is 36."
    },
    {
        question: "What is half of 12?",
        options: ["6", "5", "10", "13"],
        correct: 0,
        explanation: "Half of 12 is 6."
    },
    {
        question: "What is 11 × 2?",
        options: ["22", "18", "25", "33"],
        correct: 0,
        explanation: "11 × 2 = 22."
    },
    {
        question: "What is 108 ÷ 12?",
        options: ["6", "15", "14", "9"],
        correct: 3,
        explanation: "108 ÷ 12 = 9."
    },
    {
        question: "What is 1 + 22?",
        options: ["23", "33", "20", "25"],
        correct: 0,
        explanation: "1 + 22 = 23."
    },
    {
        question: "If you have 22 oranges and lose 13, how many are left?",
        options: ["11", "17", "9", "5"],
        correct: 2,
        explanation: "The answer is 9."
    },
    {
        question: "What is 79 - 60?",
        options: ["18", "19", "23", "28"],
        correct: 1,
        explanation: "79 - 60 = 19."
    },
    {
        question: "What is 6 × 9?",
        options: ["55", "51", "54", "63"],
        correct: 2,
        explanation: "6 × 9 = 54."
    },
    {
        question: "What is 54 ÷ 6?",
        options: ["6", "9", "10", "6"],
        correct: 1,
        explanation: "54 ÷ 6 = 9."
    },
    {
        question: "Which is greater: 29 or 23?",
        options: ["29", "23", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 29."
    },
    {
        question: "Which is less: 74 or 27?",
        options: ["74", "27", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 27."
    },
    {
        question: "What is 79 - 5?",
        options: ["72", "86", "74", "77"],
        correct: 2,
        explanation: "79 - 5 = 74."
    },
    {
        question: "What is 8 ÷ 8?",
        options: ["2", "10", "4", "1"],
        correct: 3,
        explanation: "8 ÷ 8 = 1."
    },
    {
        question: "Skip counting by 4s: 8, 12, 16, ___",
        options: ["24", "28", "20", "16"],
        correct: 2,
        explanation: "The next number is 20."
    },
    {
        question: "What is 100 ÷ 10?",
        options: ["12", "9", "12", "10"],
        correct: 3,
        explanation: "100 ÷ 10 = 10."
    },
    {
        question: "What is 13 + 13?",
        options: ["24", "31", "26", "34"],
        correct: 2,
        explanation: "13 + 13 = 26."
    },
    {
        question: "You have 37 toys. If 14 are red, how many are not red?",
        options: ["21", "23", "28", "33"],
        correct: 1,
        explanation: "The answer is 23."
    },
    {
        question: "What is 10 × 8?",
        options: ["84", "80", "87", "79"],
        correct: 1,
        explanation: "10 × 8 = 80."
    },
    {
        question: "What is 34 + 17?",
        options: ["51", "56", "58", "50"],
        correct: 0,
        explanation: "34 + 17 = 51."
    },
    {
        question: "What is 3 × 2?",
        options: ["12", "7", "6", "4"],
        correct: 2,
        explanation: "3 × 2 = 6."
    },
    {
        question: "What is 32 + 2?",
        options: ["44", "32", "34", "35"],
        correct: 2,
        explanation: "32 + 2 = 34."
    },
    {
        question: "What is 14 + 49?",
        options: ["62", "66", "63", "70"],
        correct: 2,
        explanation: "14 + 49 = 63."
    },
    {
        question: "How many seconds are in 7 minutes?",
        options: ["443", "420", "414", "427"],
        correct: 1,
        explanation: "The answer is 420."
    },
    {
        question: "What is 33 + 32?",
        options: ["64", "65", "68", "72"],
        correct: 1,
        explanation: "33 + 32 = 65."
    },
    {
        question: "How many days are in 1 weeks?",
        options: ["1", "21", "36", "7"],
        correct: 3,
        explanation: "The answer is 7."
    },
    {
        question: "What is half of 18?",
        options: ["6", "10", "9", "18"],
        correct: 2,
        explanation: "Half of 18 is 9."
    },
    {
        question: "What is 14 + 4?",
        options: ["32", "23", "15", "18"],
        correct: 3,
        explanation: "14 + 4 = 18."
    },
    {
        question: "What is 9 × 4?",
        options: ["48", "33", "36", "38"],
        correct: 2,
        explanation: "9 × 4 = 36."
    },
    {
        question: "If you have 45 candies and lose 18, how many are left?",
        options: ["23", "35", "27", "29"],
        correct: 2,
        explanation: "The answer is 27."
    },
    {
        question: "Skip counting by 5s: 10, 15, 20, ___",
        options: ["35", "20", "30", "25"],
        correct: 3,
        explanation: "The next number is 25."
    },
    {
        question: "Which is greater: 27 or 84?",
        options: ["27", "84", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 84."
    },
    {
        question: "What is 12 × 9?",
        options: ["114", "110", "105", "108"],
        correct: 3,
        explanation: "12 × 9 = 108."
    },
    {
        question: "Which is less: 36 or 67?",
        options: ["36", "67", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 36."
    },
    {
        question: "How many seconds are in 5 minutes?",
        options: ["297", "325", "300", "307"],
        correct: 2,
        explanation: "The answer is 300."
    },
    {
        question: "What is 48 + 38?",
        options: ["90", "98", "86", "83"],
        correct: 2,
        explanation: "48 + 38 = 86."
    },
    {
        question: "Skip counting by 3s: 9, 12, ___",
        options: ["18", "12", "21", "15"],
        correct: 3,
        explanation: "The next number is 15."
    },
    {
        question: "Which is less: 21 or 30?",
        options: ["21", "30", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 21."
    },
    {
        question: "Which is less: 57 or 35?",
        options: ["57", "35", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 35."
    },
    {
        question: "What is 12 × 1?",
        options: ["21", "11", "16", "12"],
        correct: 3,
        explanation: "12 × 1 = 12."
    },
    {
        question: "What is 9 × 7?",
        options: ["61", "70", "63", "68"],
        correct: 2,
        explanation: "9 × 7 = 63."
    },
    {
        question: "If you share 40 pencils equally among 5 friends, how many does each get?",
        options: ["10", "4", "18", "8"],
        correct: 3,
        explanation: "The answer is 8."
    },
    {
        question: "What is 10 × 11?",
        options: ["114", "109", "117", "110"],
        correct: 3,
        explanation: "10 × 11 = 110."
    },
    {
        question: "If you share 33 stickers equally among 3 friends, how many does each get?",
        options: ["18", "15", "11", "7"],
        correct: 2,
        explanation: "The answer is 11."
    },
    {
        question: "What is 5 × 12?",
        options: ["63", "59", "69", "60"],
        correct: 3,
        explanation: "5 × 12 = 60."
    },
    {
        question: "What is 3 × 3?",
        options: ["6", "15", "9", "14"],
        correct: 2,
        explanation: "3 × 3 = 9."
    },
    {
        question: "How many seconds are in 3 minutes?",
        options: ["180", "187", "209", "176"],
        correct: 0,
        explanation: "The answer is 180."
    },
    {
        question: "You have 15 candies. If 3 are red, how many are not red?",
        options: ["14", "11", "22", "12"],
        correct: 3,
        explanation: "The answer is 12."
    },
    {
        question: "What is double 19?",
        options: ["39", "38", "49", "34"],
        correct: 1,
        explanation: "The answer is 38."
    },
    {
        question: "What is 6 ÷ 6?",
        options: ["4", "1", "4", "9"],
        correct: 1,
        explanation: "6 ÷ 6 = 1."
    },
    {
        question: "You have 37 toys. If 15 are red, how many are not red?",
        options: ["22", "27", "21", "32"],
        correct: 0,
        explanation: "The answer is 22."
    },
    {
        question: "You have 13 oranges. If 1 are red, how many are not red?",
        options: ["23", "10", "12", "15"],
        correct: 2,
        explanation: "The answer is 12."
    },
    {
        question: "How many days are in 4 weeks?",
        options: ["35", "50", "28", "23"],
        correct: 2,
        explanation: "The answer is 28."
    },
    {
        question: "What is double 23?",
        options: ["46", "47", "44", "54"],
        correct: 0,
        explanation: "The answer is 46."
    },
    {
        question: "What is 8 × 2?",
        options: ["13", "24", "19", "16"],
        correct: 3,
        explanation: "8 × 2 = 16."
    },
    {
        question: "What is half of 20?",
        options: ["9", "13", "20", "10"],
        correct: 3,
        explanation: "Half of 20 is 10."
    },
    {
        question: "What is 44 ÷ 4?",
        options: ["4", "11", "14", "9"],
        correct: 1,
        explanation: "44 ÷ 4 = 11."
    },
    {
        question: "Skip counting by 5s: 5, 10, 15, ___",
        options: ["20", "30", "25", "15"],
        correct: 0,
        explanation: "The next number is 20."
    },
    {
        question: "What is 89 - 69?",
        options: ["16", "21", "35", "20"],
        correct: 3,
        explanation: "89 - 69 = 20."
    },
    {
        question: "Which is greater: 20 or 84?",
        options: ["20", "84", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 84."
    },
    {
        question: "What is half of 12?",
        options: ["9", "6", "3", "15"],
        correct: 1,
        explanation: "Half of 12 is 6."
    },
    {
        question: "What is 35 ÷ 7?",
        options: ["7", "9", "5", "3"],
        correct: 2,
        explanation: "35 ÷ 7 = 5."
    },
    {
        question: "What is 7 × 7?",
        options: ["49", "56", "53", "46"],
        correct: 0,
        explanation: "7 × 7 = 49."
    },
    {
        question: "What is 41 + 8?",
        options: ["59", "46", "49", "50"],
        correct: 2,
        explanation: "41 + 8 = 49."
    },
    {
        question: "If you have 17 books and get 2 more, how many do you have?",
        options: ["26", "18", "19", "23"],
        correct: 2,
        explanation: "The answer is 19."
    },
    {
        question: "What is 12 × 5?",
        options: ["61", "68", "56", "60"],
        correct: 3,
        explanation: "12 × 5 = 60."
    },
    {
        question: "If you have 48 erasers and get 3 more, how many do you have?",
        options: ["51", "49", "60", "53"],
        correct: 0,
        explanation: "The answer is 51."
    },
    {
        question: "If you have 26 candies and get 2 more, how many do you have?",
        options: ["24", "29", "34", "28"],
        correct: 3,
        explanation: "The answer is 28."
    },
    {
        question: "If you have 32 oranges and lose 9, how many are left?",
        options: ["19", "31", "26", "23"],
        correct: 3,
        explanation: "The answer is 23."
    },
    {
        question: "What is 4 × 9?",
        options: ["36", "38", "45", "32"],
        correct: 0,
        explanation: "4 × 9 = 36."
    },
    {
        question: "What is half of 12?",
        options: ["14", "6", "3", "9"],
        correct: 1,
        explanation: "Half of 12 is 6."
    },
    {
        question: "What is 93 - 6?",
        options: ["88", "96", "85", "87"],
        correct: 3,
        explanation: "93 - 6 = 87."
    },
    {
        question: "What is 10 ÷ 2?",
        options: ["6", "4", "5", "5"],
        correct: 2,
        explanation: "10 ÷ 2 = 5."
    },
    {
        question: "You have 29 books. If 8 are red, how many are not red?",
        options: ["23", "31", "21", "18"],
        correct: 2,
        explanation: "The answer is 21."
    },
    {
        question: "What is 7 + 7?",
        options: ["12", "14", "18", "26"],
        correct: 1,
        explanation: "7 + 7 = 14."
    },
    {
        question: "What is 11 × 7?",
        options: ["87", "77", "78", "74"],
        correct: 1,
        explanation: "11 × 7 = 77."
    },
    {
        question: "What is triple 8?",
        options: ["21", "24", "32", "29"],
        correct: 1,
        explanation: "The answer is 24."
    },
    {
        question: "Skip counting by 2s: 2, 4, 6, ___",
        options: ["6", "8", "12", "10"],
        correct: 1,
        explanation: "The next number is 8."
    },
    {
        question: "What is 37 + 6?",
        options: ["44", "56", "40", "43"],
        correct: 3,
        explanation: "37 + 6 = 43."
    },
    {
        question: "If you have 39 erasers and get 12 more, how many do you have?",
        options: ["51", "57", "50", "56"],
        correct: 0,
        explanation: "The answer is 51."
    },
    {
        question: "How many days are in 1 weeks?",
        options: ["36", "7", "0", "17"],
        correct: 1,
        explanation: "The answer is 7."
    },
    {
        question: "What is 6 × 7?",
        options: ["39", "45", "53", "42"],
        correct: 3,
        explanation: "6 × 7 = 42."
    },
    {
        question: "If you have 20 stickers and get 17 more, how many do you have?",
        options: ["43", "35", "39", "37"],
        correct: 3,
        explanation: "The answer is 37."
    },
    {
        question: "You have 9 apples. If 1 are red, how many are not red?",
        options: ["8", "15", "4", "11"],
        correct: 0,
        explanation: "The answer is 8."
    },
    {
        question: "You have 16 stickers. If 14 are red, how many are not red?",
        options: ["6", "2", "0", "8"],
        correct: 1,
        explanation: "The answer is 2."
    },
    {
        question: "If you have 7 books and get 1 more, how many do you have?",
        options: ["19", "8", "7", "11"],
        correct: 1,
        explanation: "The answer is 8."
    },
    {
        question: "What is half of 24?",
        options: ["20", "9", "12", "14"],
        correct: 2,
        explanation: "Half of 24 is 12."
    },
    {
        question: "Skip counting by 5s: 15, 20, ___",
        options: ["30", "35", "20", "25"],
        correct: 3,
        explanation: "The next number is 25."
    },
    {
        question: "If you have 35 books and lose 7, how many are left?",
        options: ["33", "38", "28", "25"],
        correct: 2,
        explanation: "The answer is 28."
    },
    {
        question: "What is 30 - 24?",
        options: ["6", "16", "2", "10"],
        correct: 0,
        explanation: "30 - 24 = 6."
    },
    {
        question: "What is 6 ÷ 2?",
        options: ["4", "2", "3", "7"],
        correct: 2,
        explanation: "6 ÷ 2 = 3."
    },
    {
        question: "Which is greater: 39 or 19?",
        options: ["39", "19", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 39."
    },
    {
        question: "If you have 11 candies and lose 1, how many are left?",
        options: ["8", "10", "15", "19"],
        correct: 1,
        explanation: "The answer is 10."
    },
    {
        question: "What is 7 × 8?",
        options: ["54", "56", "65", "60"],
        correct: 1,
        explanation: "7 × 8 = 56."
    },
    {
        question: "Skip counting by 5s: 5, 10, 15, ___",
        options: ["20", "30", "25", "15"],
        correct: 0,
        explanation: "The next number is 20."
    },
    {
        question: "What is 54 ÷ 9?",
        options: ["5", "10", "6", "8"],
        correct: 2,
        explanation: "54 ÷ 9 = 6."
    },
    {
        question: "What is 10 × 9?",
        options: ["90", "89", "92", "98"],
        correct: 0,
        explanation: "10 × 9 = 90."
    },
    {
        question: "Which is less: 13 or 39?",
        options: ["13", "39", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 13."
    },
    {
        question: "If you have 29 pencils and lose 3, how many are left?",
        options: ["23", "32", "31", "26"],
        correct: 3,
        explanation: "The answer is 26."
    },
    {
        question: "What is 8 × 10?",
        options: ["82", "80", "77", "90"],
        correct: 1,
        explanation: "8 × 10 = 80."
    },
    {
        question: "Which is greater: 49 or 23?",
        options: ["49", "23", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 49."
    },
    {
        question: "What is triple 23?",
        options: ["72", "80", "69", "66"],
        correct: 2,
        explanation: "The answer is 69."
    },
    {
        question: "What is half of 20?",
        options: ["10", "12", "18", "9"],
        correct: 0,
        explanation: "Half of 20 is 10."
    },
    {
        question: "What is 8 × 2?",
        options: ["16", "18", "26", "12"],
        correct: 0,
        explanation: "8 × 2 = 16."
    },
    {
        question: "If you share 18 stickers equally among 2 friends, how many does each get?",
        options: ["6", "9", "10", "18"],
        correct: 1,
        explanation: "The answer is 9."
    },
    {
        question: "What is 66 ÷ 11?",
        options: ["6", "14", "11", "4"],
        correct: 0,
        explanation: "66 ÷ 11 = 6."
    },
    {
        question: "What is 94 - 48?",
        options: ["43", "46", "47", "52"],
        correct: 1,
        explanation: "94 - 48 = 46."
    },
    {
        question: "If you have 44 candies and get 12 more, how many do you have?",
        options: ["56", "52", "63", "57"],
        correct: 0,
        explanation: "The answer is 56."
    },
    {
        question: "If you have 39 toys and get 17 more, how many do you have?",
        options: ["55", "57", "68", "56"],
        correct: 3,
        explanation: "The answer is 56."
    },
    {
        question: "What is 2 × 11?",
        options: ["19", "22", "34", "24"],
        correct: 1,
        explanation: "2 × 11 = 22."
    },
    {
        question: "What is 30 ÷ 3?",
        options: ["14", "8", "10", "5"],
        correct: 2,
        explanation: "30 ÷ 3 = 10."
    },
    {
        question: "What is 2 × 11?",
        options: ["19", "22", "25", "28"],
        correct: 1,
        explanation: "2 × 11 = 22."
    },
    {
        question: "How many days are in 7 weeks?",
        options: ["46", "61", "49", "75"],
        correct: 2,
        explanation: "The answer is 49."
    },
    {
        question: "What is half of 16?",
        options: ["14", "11", "6", "8"],
        correct: 3,
        explanation: "Half of 16 is 8."
    },
    {
        question: "Which is greater: 80 or 68?",
        options: ["80", "68", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 80."
    },
    {
        question: "What is 96 - 69?",
        options: ["34", "30", "27", "26"],
        correct: 2,
        explanation: "96 - 69 = 27."
    },
    {
        question: "If you share 30 apples equally among 1 friends, how many does each get?",
        options: ["29", "30", "32", "36"],
        correct: 1,
        explanation: "The answer is 30."
    },
    {
        question: "What is 12 × 3?",
        options: ["37", "33", "36", "44"],
        correct: 2,
        explanation: "12 × 3 = 36."
    },
    {
        question: "If you have 47 apples and get 15 more, how many do you have?",
        options: ["65", "62", "71", "60"],
        correct: 1,
        explanation: "The answer is 62."
    },
    {
        question: "What is 46 + 42?",
        options: ["88", "93", "86", "97"],
        correct: 0,
        explanation: "46 + 42 = 88."
    },
    {
        question: "What is half of 24?",
        options: ["16", "12", "9", "22"],
        correct: 1,
        explanation: "Half of 24 is 12."
    },
    {
        question: "What is 2 × 2?",
        options: ["14", "9", "4", "7"],
        correct: 2,
        explanation: "2 × 2 = 4."
    },
    {
        question: "Skip counting by 3s: 9, 12, ___",
        options: ["18", "12", "15", "21"],
        correct: 2,
        explanation: "The next number is 15."
    },
    {
        question: "What is 44 + 28?",
        options: ["72", "77", "71", "84"],
        correct: 0,
        explanation: "44 + 28 = 72."
    },
    {
        question: "What is 36 ÷ 12?",
        options: ["15", "7", "1", "3"],
        correct: 3,
        explanation: "36 ÷ 12 = 3."
    },
    {
        question: "You have 24 apples. If 12 are red, how many are not red?",
        options: ["11", "15", "19", "12"],
        correct: 3,
        explanation: "The answer is 12."
    },
    {
        question: "If you have 25 candies and lose 13, how many are left?",
        options: ["15", "12", "9", "23"],
        correct: 1,
        explanation: "The answer is 12."
    },
    {
        question: "If you have 27 toys and get 16 more, how many do you have?",
        options: ["44", "40", "52", "43"],
        correct: 3,
        explanation: "The answer is 43."
    },
    {
        question: "What is 2 × 11?",
        options: ["22", "24", "33", "18"],
        correct: 0,
        explanation: "2 × 11 = 22."
    },
    {
        question: "Which is less: 50 or 60?",
        options: ["50", "60", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 50."
    },
    {
        question: "What is 18 ÷ 9?",
        options: ["6", "2", "11", "5"],
        correct: 1,
        explanation: "18 ÷ 9 = 2."
    },
    {
        question: "If you share 18 stickers equally among 3 friends, how many does each get?",
        options: ["6", "5", "18", "11"],
        correct: 0,
        explanation: "The answer is 6."
    },
    {
        question: "Skip counting by 4s: 12, 16, ___",
        options: ["16", "24", "28", "20"],
        correct: 3,
        explanation: "The next number is 20."
    },
    {
        question: "How many minutes are in 3 hours?",
        options: ["207", "175", "180", "189"],
        correct: 2,
        explanation: "The answer is 180."
    },
    {
        question: "What is 70 ÷ 7?",
        options: ["7", "13", "7", "10"],
        correct: 3,
        explanation: "70 ÷ 7 = 10."
    },
    {
        question: "What is triple 6?",
        options: ["20", "16", "28", "18"],
        correct: 3,
        explanation: "The answer is 18."
    },
    {
        question: "You have 20 pencils. If 16 are red, how many are not red?",
        options: ["4", "1", "6", "15"],
        correct: 0,
        explanation: "The answer is 4."
    },
    {
        question: "What is half of 30?",
        options: ["21", "15", "13", "16"],
        correct: 1,
        explanation: "Half of 30 is 15."
    },
    {
        question: "What is 48 ÷ 12?",
        options: ["1", "14", "4", "5"],
        correct: 2,
        explanation: "48 ÷ 12 = 4."
    },
    {
        question: "Skip counting by 3s: 3, 6, 9, ___",
        options: ["18", "9", "15", "12"],
        correct: 3,
        explanation: "The next number is 12."
    },
    {
        question: "What is 4 × 11?",
        options: ["55", "44", "41", "46"],
        correct: 1,
        explanation: "4 × 11 = 44."
    },
    {
        question: "What is 5 × 9?",
        options: ["41", "51", "45", "46"],
        correct: 2,
        explanation: "5 × 9 = 45."
    },
    {
        question: "If you have 42 pencils and get 3 more, how many do you have?",
        options: ["57", "49", "42", "45"],
        correct: 3,
        explanation: "The answer is 45."
    },
    {
        question: "If you have 27 erasers and lose 10, how many are left?",
        options: ["28", "14", "18", "17"],
        correct: 3,
        explanation: "The answer is 17."
    },
    {
        question: "What is 2 + 38?",
        options: ["55", "39", "40", "45"],
        correct: 2,
        explanation: "2 + 38 = 40."
    },
    {
        question: "What is 38 + 39?",
        options: ["77", "78", "74", "84"],
        correct: 0,
        explanation: "38 + 39 = 77."
    },
    {
        question: "What is 33 + 32?",
        options: ["72", "65", "64", "66"],
        correct: 1,
        explanation: "33 + 32 = 65."
    },
    {
        question: "What is 7 × 10?",
        options: ["71", "77", "70", "69"],
        correct: 2,
        explanation: "7 × 10 = 70."
    },
    {
        question: "What is 5 × 12?",
        options: ["63", "57", "68", "60"],
        correct: 3,
        explanation: "5 × 12 = 60."
    },
    {
        question: "What is triple 12?",
        options: ["39", "32", "48", "36"],
        correct: 3,
        explanation: "The answer is 36."
    },
    {
        question: "What is 33 + 16?",
        options: ["62", "49", "46", "52"],
        correct: 1,
        explanation: "33 + 16 = 49."
    },
    {
        question: "What is 30 + 21?",
        options: ["52", "50", "64", "51"],
        correct: 3,
        explanation: "30 + 21 = 51."
    },
    {
        question: "If you share 5 apples equally among 1 friends, how many does each get?",
        options: ["2", "8", "5", "14"],
        correct: 2,
        explanation: "The answer is 5."
    },
    {
        question: "What is 1 × 8?",
        options: ["19", "4", "12", "8"],
        correct: 3,
        explanation: "1 × 8 = 8."
    },
    {
        question: "Skip counting by 4s: 4, 8, 12, ___",
        options: ["20", "24", "16", "12"],
        correct: 2,
        explanation: "The next number is 16."
    },
    {
        question: "What is 12 ÷ 2?",
        options: ["6", "3", "11", "3"],
        correct: 0,
        explanation: "12 ÷ 2 = 6."
    },
    {
        question: "What is 5 × 8?",
        options: ["46", "40", "39", "44"],
        correct: 1,
        explanation: "5 × 8 = 40."
    },
    {
        question: "Skip counting by 5s: 5, 10, 15, ___",
        options: ["25", "15", "20", "30"],
        correct: 2,
        explanation: "The next number is 20."
    },
    {
        question: "What is 78 - 24?",
        options: ["54", "56", "67", "52"],
        correct: 0,
        explanation: "78 - 24 = 54."
    },
    {
        question: "What is 32 - 26?",
        options: ["2", "12", "6", "11"],
        correct: 2,
        explanation: "32 - 26 = 6."
    },
    {
        question: "If you have 46 toys and get 19 more, how many do you have?",
        options: ["69", "62", "65", "77"],
        correct: 2,
        explanation: "The answer is 65."
    },
    {
        question: "What is 6 ÷ 1?",
        options: ["4", "10", "6", "5"],
        correct: 2,
        explanation: "6 ÷ 1 = 6."
    },
    {
        question: "If you have 28 books and lose 8, how many are left?",
        options: ["20", "22", "16", "27"],
        correct: 0,
        explanation: "The answer is 20."
    },
    {
        question: "How many minutes are in 7 hours?",
        options: ["413", "448", "420", "432"],
        correct: 2,
        explanation: "The answer is 420."
    },
    {
        question: "You have 37 erasers. If 18 are red, how many are not red?",
        options: ["26", "18", "22", "19"],
        correct: 3,
        explanation: "The answer is 19."
    },
    {
        question: "What is half of 14?",
        options: ["5", "8", "7", "12"],
        correct: 2,
        explanation: "Half of 14 is 7."
    },
    {
        question: "If you have 14 books and lose 7, how many are left?",
        options: ["7", "13", "4", "10"],
        correct: 0,
        explanation: "The answer is 7."
    },
    {
        question: "What is 21 - 10?",
        options: ["11", "13", "20", "7"],
        correct: 0,
        explanation: "21 - 10 = 11."
    },
    {
        question: "If you have 12 candies and lose 4, how many are left?",
        options: ["13", "5", "8", "20"],
        correct: 2,
        explanation: "The answer is 8."
    },
    {
        question: "If you have 10 erasers and lose 9, how many are left?",
        options: ["1", "0", "8", "3"],
        correct: 0,
        explanation: "The answer is 1."
    },
    {
        question: "If you have 34 stickers and get 9 more, how many do you have?",
        options: ["43", "47", "40", "53"],
        correct: 0,
        explanation: "The answer is 43."
    },
    {
        question: "Skip counting by 2s: 6, 8, ___",
        options: ["12", "14", "8", "10"],
        correct: 3,
        explanation: "The next number is 10."
    },
    {
        question: "What is 3 × 5?",
        options: ["24", "12", "20", "15"],
        correct: 3,
        explanation: "3 × 5 = 15."
    },
    {
        question: "What is 21 - 9?",
        options: ["10", "12", "16", "25"],
        correct: 1,
        explanation: "21 - 9 = 12."
    },
    {
        question: "You have 38 stickers. If 12 are red, how many are not red?",
        options: ["25", "26", "30", "35"],
        correct: 1,
        explanation: "The answer is 26."
    },
    {
        question: "What is 33 + 17?",
        options: ["50", "48", "57", "52"],
        correct: 0,
        explanation: "33 + 17 = 50."
    },
    {
        question: "What is 8 × 9?",
        options: ["83", "72", "74", "71"],
        correct: 1,
        explanation: "8 × 9 = 72."
    },
    {
        question: "If you have 17 candies and lose 9, how many are left?",
        options: ["15", "8", "13", "5"],
        correct: 1,
        explanation: "The answer is 8."
    },
    {
        question: "What is 26 + 4?",
        options: ["30", "28", "32", "36"],
        correct: 0,
        explanation: "26 + 4 = 30."
    },
    {
        question: "What is 70 ÷ 10?",
        options: ["12", "6", "8", "7"],
        correct: 3,
        explanation: "70 ÷ 10 = 7."
    },
    {
        question: "What is triple 9?",
        options: ["27", "29", "23", "38"],
        correct: 0,
        explanation: "The answer is 27."
    },
    {
        question: "What is half of 12?",
        options: ["12", "5", "6", "10"],
        correct: 2,
        explanation: "Half of 12 is 6."
    },
    {
        question: "You have 47 candies. If 1 are red, how many are not red?",
        options: ["52", "47", "42", "46"],
        correct: 3,
        explanation: "The answer is 46."
    },
    {
        question: "If you have 45 toys and lose 3, how many are left?",
        options: ["41", "42", "44", "49"],
        correct: 1,
        explanation: "The answer is 42."
    },
    {
        question: "What is 12 ÷ 6?",
        options: ["6", "4", "2", "5"],
        correct: 2,
        explanation: "12 ÷ 6 = 2."
    },
    {
        question: "You have 10 apples. If 7 are red, how many are not red?",
        options: ["7", "9", "0", "3"],
        correct: 3,
        explanation: "The answer is 3."
    },
    {
        question: "Skip counting by 3s: 6, 9, 12, ___",
        options: ["15", "12", "21", "18"],
        correct: 0,
        explanation: "The next number is 15."
    },
    {
        question: "What is 10 × 7?",
        options: ["67", "74", "70", "76"],
        correct: 2,
        explanation: "10 × 7 = 70."
    },
    {
        question: "What is 5 × 1?",
        options: ["5", "7", "16", "2"],
        correct: 0,
        explanation: "5 × 1 = 5."
    },
    {
        question: "What is 27 - 15?",
        options: ["11", "12", "14", "22"],
        correct: 1,
        explanation: "27 - 15 = 12."
    },
    {
        question: "What is 10 × 9?",
        options: ["101", "87", "95", "90"],
        correct: 3,
        explanation: "10 × 9 = 90."
    },
    {
        question: "What is 30 ÷ 10?",
        options: ["4", "13", "3", "1"],
        correct: 2,
        explanation: "30 ÷ 10 = 3."
    },
    {
        question: "What is half of 30?",
        options: ["18", "23", "14", "15"],
        correct: 3,
        explanation: "Half of 30 is 15."
    },
    {
        question: "What is 39 - 25?",
        options: ["14", "12", "16", "21"],
        correct: 0,
        explanation: "39 - 25 = 14."
    },
    {
        question: "What is 9 ÷ 3?",
        options: ["3", "6", "1", "4"],
        correct: 0,
        explanation: "9 ÷ 3 = 3."
    },
    {
        question: "You have 36 oranges. If 11 are red, how many are not red?",
        options: ["30", "24", "35", "25"],
        correct: 3,
        explanation: "The answer is 25."
    },
    {
        question: "What is 10 ÷ 10?",
        options: ["4", "4", "1", "11"],
        correct: 2,
        explanation: "10 ÷ 10 = 1."
    },
    {
        question: "What is 11 + 29?",
        options: ["50", "45", "37", "40"],
        correct: 3,
        explanation: "11 + 29 = 40."
    },
    {
        question: "What is 10 ÷ 5?",
        options: ["3", "2", "5", "5"],
        correct: 1,
        explanation: "10 ÷ 5 = 2."
    },
    {
        question: "What is 29 + 34?",
        options: ["62", "72", "63", "67"],
        correct: 2,
        explanation: "29 + 34 = 63."
    },
    {
        question: "What is 21 + 26?",
        options: ["56", "50", "47", "46"],
        correct: 2,
        explanation: "21 + 26 = 47."
    },
    {
        question: "What is half of 18?",
        options: ["9", "11", "8", "14"],
        correct: 0,
        explanation: "Half of 18 is 9."
    },
    {
        question: "What is 11 × 12?",
        options: ["133", "139", "132", "128"],
        correct: 2,
        explanation: "11 × 12 = 132."
    },
    {
        question: "If you have 46 oranges and lose 18, how many are left?",
        options: ["26", "37", "28", "29"],
        correct: 2,
        explanation: "The answer is 28."
    },
    {
        question: "If you have 23 stickers and get 9 more, how many do you have?",
        options: ["32", "34", "29", "39"],
        correct: 0,
        explanation: "The answer is 32."
    },
    {
        question: "What is 7 × 12?",
        options: ["88", "84", "81", "95"],
        correct: 1,
        explanation: "7 × 12 = 84."
    },
    {
        question: "What is 2 × 8?",
        options: ["12", "16", "22", "17"],
        correct: 1,
        explanation: "2 × 8 = 16."
    },
    {
        question: "Which is greater: 69 or 43?",
        options: ["69", "43", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 69."
    },
    {
        question: "What is 4 + 4?",
        options: ["22", "6", "8", "13"],
        correct: 2,
        explanation: "4 + 4 = 8."
    },
    {
        question: "Which is less: 77 or 40?",
        options: ["77", "40", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 40."
    },
    {
        question: "What is 18 + 19?",
        options: ["37", "48", "36", "42"],
        correct: 0,
        explanation: "18 + 19 = 37."
    },
    {
        question: "What is 83 - 49?",
        options: ["34", "45", "38", "33"],
        correct: 0,
        explanation: "83 - 49 = 34."
    },
    {
        question: "What is 99 ÷ 9?",
        options: ["14", "11", "10", "11"],
        correct: 1,
        explanation: "99 ÷ 9 = 11."
    },
    {
        question: "What is 61 - 22?",
        options: ["39", "42", "49", "38"],
        correct: 0,
        explanation: "61 - 22 = 39."
    },
    {
        question: "Skip counting by 3s: 6, 9, 12, ___",
        options: ["15", "18", "21", "12"],
        correct: 0,
        explanation: "The next number is 15."
    },
    {
        question: "What is 23 + 39?",
        options: ["61", "75", "65", "62"],
        correct: 3,
        explanation: "23 + 39 = 62."
    },
    {
        question: "What is 48 + 7?",
        options: ["60", "54", "55", "70"],
        correct: 2,
        explanation: "48 + 7 = 55."
    },
    {
        question: "What is 11 × 9?",
        options: ["99", "105", "95", "103"],
        correct: 0,
        explanation: "11 × 9 = 99."
    },
    {
        question: "How many days are in 5 weeks?",
        options: ["47", "29", "35", "63"],
        correct: 2,
        explanation: "The answer is 35."
    },
    {
        question: "What is 6 ÷ 6?",
        options: ["6", "1", "4", "8"],
        correct: 1,
        explanation: "6 ÷ 6 = 1."
    },
    {
        question: "What is 5 × 10?",
        options: ["54", "60", "47", "50"],
        correct: 3,
        explanation: "5 × 10 = 50."
    },
    {
        question: "How many minutes are in 10 hours?",
        options: ["607", "624", "600", "594"],
        correct: 2,
        explanation: "The answer is 600."
    },
    {
        question: "What is 10 + 24?",
        options: ["48", "36", "31", "34"],
        correct: 3,
        explanation: "10 + 24 = 34."
    },
    {
        question: "What is 70 - 3?",
        options: ["78", "67", "66", "72"],
        correct: 1,
        explanation: "70 - 3 = 67."
    },
    {
        question: "What is triple 25?",
        options: ["75", "87", "79", "71"],
        correct: 0,
        explanation: "The answer is 75."
    },
    {
        question: "Which is greater: 72 or 17?",
        options: ["72", "17", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 72."
    },
    {
        question: "How many minutes are in 10 hours?",
        options: ["597", "608", "600", "628"],
        correct: 2,
        explanation: "The answer is 600."
    },
    {
        question: "What is 2 × 2?",
        options: ["8", "13", "9", "4"],
        correct: 3,
        explanation: "2 × 2 = 4."
    },
    {
        question: "You have 37 pencils. If 19 are red, how many are not red?",
        options: ["30", "14", "21", "18"],
        correct: 3,
        explanation: "The answer is 18."
    },
    {
        question: "What is 10 × 2?",
        options: ["17", "27", "22", "20"],
        correct: 3,
        explanation: "10 × 2 = 20."
    },
    {
        question: "Skip counting by 2s: 4, 6, 8, ___",
        options: ["8", "12", "14", "10"],
        correct: 3,
        explanation: "The next number is 10."
    },
    {
        question: "What is 12 × 3?",
        options: ["48", "40", "35", "36"],
        correct: 3,
        explanation: "12 × 3 = 36."
    },
    {
        question: "What is triple 9?",
        options: ["23", "30", "37", "27"],
        correct: 3,
        explanation: "The answer is 27."
    },
    {
        question: "What is 44 - 11?",
        options: ["34", "29", "33", "39"],
        correct: 2,
        explanation: "44 - 11 = 33."
    },
    {
        question: "What is 14 - 2?",
        options: ["23", "12", "17", "8"],
        correct: 1,
        explanation: "14 - 2 = 12."
    },
    {
        question: "What is 10 × 12?",
        options: ["120", "132", "117", "124"],
        correct: 0,
        explanation: "10 × 12 = 120."
    },
    {
        question: "How many minutes are in 3 hours?",
        options: ["200", "177", "180", "186"],
        correct: 2,
        explanation: "The answer is 180."
    },
    {
        question: "You have 37 candies. If 16 are red, how many are not red?",
        options: ["27", "17", "24", "21"],
        correct: 3,
        explanation: "The answer is 21."
    },
    {
        question: "What is 32 - 29?",
        options: ["11", "3", "7", "2"],
        correct: 1,
        explanation: "32 - 29 = 3."
    },
    {
        question: "What is double 12?",
        options: ["31", "23", "24", "28"],
        correct: 2,
        explanation: "The answer is 24."
    },
    {
        question: "Which is less: 99 or 57?",
        options: ["99", "57", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 57."
    },
    {
        question: "What is 10 × 11?",
        options: ["106", "120", "110", "112"],
        correct: 2,
        explanation: "10 × 11 = 110."
    },
    {
        question: "What is half of 30?",
        options: ["18", "14", "22", "15"],
        correct: 3,
        explanation: "Half of 30 is 15."
    },
    {
        question: "What is 56 - 51?",
        options: ["14", "5", "2", "6"],
        correct: 1,
        explanation: "56 - 51 = 5."
    },
    {
        question: "How many seconds are in 6 minutes?",
        options: ["360", "372", "387", "353"],
        correct: 0,
        explanation: "The answer is 360."
    },
    {
        question: "What is 2 × 3?",
        options: ["7", "5", "6", "14"],
        correct: 2,
        explanation: "2 × 3 = 6."
    },
    {
        question: "What is 1 + 49?",
        options: ["62", "50", "52", "47"],
        correct: 1,
        explanation: "1 + 49 = 50."
    },
    {
        question: "What is 10 × 10?",
        options: ["100", "98", "105", "112"],
        correct: 0,
        explanation: "10 × 10 = 100."
    },
    {
        question: "What is 72 - 4?",
        options: ["65", "68", "80", "72"],
        correct: 1,
        explanation: "72 - 4 = 68."
    },
    {
        question: "What is 96 ÷ 8?",
        options: ["14", "9", "12", "10"],
        correct: 2,
        explanation: "96 ÷ 8 = 12."
    },
    {
        question: "What is 10 × 7?",
        options: ["70", "72", "76", "66"],
        correct: 0,
        explanation: "10 × 7 = 70."
    },
    {
        question: "If you have 17 books and get 11 more, how many do you have?",
        options: ["30", "28", "39", "24"],
        correct: 1,
        explanation: "The answer is 28."
    },
    {
        question: "If you have 36 books and lose 3, how many are left?",
        options: ["33", "29", "35", "41"],
        correct: 0,
        explanation: "The answer is 33."
    },
    {
        question: "What is 3 × 10?",
        options: ["30", "29", "32", "37"],
        correct: 0,
        explanation: "3 × 10 = 30."
    },
    {
        question: "What is 54 ÷ 6?",
        options: ["11", "9", "6", "9"],
        correct: 1,
        explanation: "54 ÷ 6 = 9."
    },
    {
        question: "What is 12 ÷ 4?",
        options: ["6", "8", "2", "3"],
        correct: 3,
        explanation: "12 ÷ 4 = 3."
    },
    {
        question: "What is 59 - 58?",
        options: ["11", "6", "0", "1"],
        correct: 3,
        explanation: "59 - 58 = 1."
    },
    {
        question: "How many minutes are in 8 hours?",
        options: ["509", "475", "480", "493"],
        correct: 2,
        explanation: "The answer is 480."
    },
    {
        question: "What is 45 + 44?",
        options: ["86", "97", "89", "90"],
        correct: 2,
        explanation: "45 + 44 = 89."
    },
    {
        question: "What is 68 - 45?",
        options: ["26", "32", "21", "23"],
        correct: 3,
        explanation: "68 - 45 = 23."
    },
    {
        question: "You have 26 oranges. If 11 are red, how many are not red?",
        options: ["12", "15", "16", "27"],
        correct: 1,
        explanation: "The answer is 15."
    },
    {
        question: "If you have 23 erasers and lose 7, how many are left?",
        options: ["16", "14", "25", "19"],
        correct: 0,
        explanation: "The answer is 16."
    },
    {
        question: "What is 14 + 35?",
        options: ["49", "51", "46", "59"],
        correct: 0,
        explanation: "14 + 35 = 49."
    },
    {
        question: "What is half of 16?",
        options: ["9", "8", "14", "6"],
        correct: 1,
        explanation: "Half of 16 is 8."
    },
    {
        question: "What is 12 × 7?",
        options: ["82", "88", "93", "84"],
        correct: 3,
        explanation: "12 × 7 = 84."
    },
    {
        question: "What is 4 × 6?",
        options: ["26", "34", "23", "24"],
        correct: 3,
        explanation: "4 × 6 = 24."
    },
    {
        question: "Skip counting by 5s: 10, 15, 20, ___",
        options: ["35", "30", "25", "20"],
        correct: 2,
        explanation: "The next number is 25."
    },
    {
        question: "What is 3 × 3?",
        options: ["19", "13", "9", "7"],
        correct: 2,
        explanation: "3 × 3 = 9."
    },
    {
        question: "What is 96 - 23?",
        options: ["85", "70", "78", "73"],
        correct: 3,
        explanation: "96 - 23 = 73."
    },
    {
        question: "Skip counting by 4s: 4, 8, 12, ___",
        options: ["20", "16", "12", "24"],
        correct: 1,
        explanation: "The next number is 16."
    },
    {
        question: "What is 72 ÷ 6?",
        options: ["11", "8", "16", "12"],
        correct: 3,
        explanation: "72 ÷ 6 = 12."
    },
    {
        question: "What is half of 18?",
        options: ["14", "6", "12", "9"],
        correct: 3,
        explanation: "Half of 18 is 9."
    },
    {
        question: "What is 25 + 18?",
        options: ["48", "42", "54", "43"],
        correct: 3,
        explanation: "25 + 18 = 43."
    },
    {
        question: "What is 3 × 9?",
        options: ["27", "25", "28", "33"],
        correct: 0,
        explanation: "3 × 9 = 27."
    },
    {
        question: "What is 70 - 10?",
        options: ["60", "75", "56", "64"],
        correct: 0,
        explanation: "70 - 10 = 60."
    },
    {
        question: "How many minutes are in 4 hours?",
        options: ["240", "260", "233", "249"],
        correct: 0,
        explanation: "The answer is 240."
    },
    {
        question: "What is 5 × 3?",
        options: ["11", "20", "15", "26"],
        correct: 2,
        explanation: "5 × 3 = 15."
    },
    {
        question: "Skip counting by 2s: 4, 6, 8, ___",
        options: ["14", "10", "8", "12"],
        correct: 1,
        explanation: "The next number is 10."
    },
    {
        question: "What is double 14?",
        options: ["28", "31", "25", "40"],
        correct: 0,
        explanation: "The answer is 28."
    },
    {
        question: "What is 40 - 9?",
        options: ["31", "30", "46", "35"],
        correct: 0,
        explanation: "40 - 9 = 31."
    },
    {
        question: "What is 70 - 68?",
        options: ["2", "16", "5", "0"],
        correct: 0,
        explanation: "70 - 68 = 2."
    },
    {
        question: "What is half of 24?",
        options: ["20", "11", "15", "12"],
        correct: 3,
        explanation: "Half of 24 is 12."
    },
    {
        question: "Skip counting by 3s: 6, 9, 12, ___",
        options: ["15", "21", "12", "18"],
        correct: 0,
        explanation: "The next number is 15."
    },
    {
        question: "Which is greater: 45 or 21?",
        options: ["45", "21", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 45."
    },
    {
        question: "What is 73 - 52?",
        options: ["19", "27", "23", "21"],
        correct: 3,
        explanation: "73 - 52 = 21."
    },
    {
        question: "Skip counting by 5s: 5, 10, 15, ___",
        options: ["15", "30", "25", "20"],
        correct: 3,
        explanation: "The next number is 20."
    },
    {
        question: "What is 2 × 2?",
        options: ["8", "10", "4", "9"],
        correct: 2,
        explanation: "2 × 2 = 4."
    },
    {
        question: "If you share 31 oranges equally among 1 friends, how many does each get?",
        options: ["39", "31", "27", "36"],
        correct: 1,
        explanation: "The answer is 31."
    },
    {
        question: "You have 36 books. If 15 are red, how many are not red?",
        options: ["21", "28", "18", "23"],
        correct: 0,
        explanation: "The answer is 21."
    },
    {
        question: "If you have 14 candies and lose 6, how many are left?",
        options: ["8", "13", "5", "15"],
        correct: 0,
        explanation: "The answer is 8."
    },
    {
        question: "What is 14 ÷ 7?",
        options: ["8", "2", "7", "5"],
        correct: 1,
        explanation: "14 ÷ 7 = 2."
    },
    {
        question: "What is 3 × 9?",
        options: ["27", "24", "39", "30"],
        correct: 0,
        explanation: "3 × 9 = 27."
    },
    {
        question: "Which is greater: 65 or 94?",
        options: ["65", "94", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 94."
    },
    {
        question: "What is 9 + 43?",
        options: ["52", "56", "60", "49"],
        correct: 0,
        explanation: "9 + 43 = 52."
    },
    {
        question: "What is 30 + 16?",
        options: ["47", "44", "60", "46"],
        correct: 3,
        explanation: "30 + 16 = 46."
    },
    {
        question: "What is 57 - 11?",
        options: ["51", "54", "46", "45"],
        correct: 2,
        explanation: "57 - 11 = 46."
    },
    {
        question: "What is 10 × 12?",
        options: ["131", "116", "122", "120"],
        correct: 3,
        explanation: "10 × 12 = 120."
    },
    {
        question: "If you have 18 apples and lose 4, how many are left?",
        options: ["12", "14", "25", "18"],
        correct: 1,
        explanation: "The answer is 14."
    },
    {
        question: "What is 56 ÷ 8?",
        options: ["7", "6", "10", "11"],
        correct: 0,
        explanation: "56 ÷ 8 = 7."
    },
    {
        question: "Skip counting by 5s: 15, 20, ___",
        options: ["20", "30", "35", "25"],
        correct: 3,
        explanation: "The next number is 25."
    },
    {
        question: "What is 55 - 50?",
        options: ["20", "1", "5", "10"],
        correct: 2,
        explanation: "55 - 50 = 5."
    },
    {
        question: "Skip counting by 5s: 5, 10, 15, ___",
        options: ["30", "20", "15", "25"],
        correct: 1,
        explanation: "The next number is 20."
    },
    {
        question: "What is 2 × 8?",
        options: ["14", "17", "27", "16"],
        correct: 3,
        explanation: "2 × 8 = 16."
    },
    {
        question: "What is 6 × 9?",
        options: ["57", "54", "66", "53"],
        correct: 1,
        explanation: "6 × 9 = 54."
    },
    {
        question: "You have 5 candies. If 2 are red, how many are not red?",
        options: ["10", "5", "3", "0"],
        correct: 2,
        explanation: "The answer is 3."
    },
    {
        question: "What is 11 × 5?",
        options: ["55", "54", "67", "60"],
        correct: 0,
        explanation: "11 × 5 = 55."
    },
    {
        question: "What is 1 × 5?",
        options: ["5", "1", "17", "8"],
        correct: 0,
        explanation: "1 × 5 = 5."
    },
    {
        question: "You have 40 candies. If 4 are red, how many are not red?",
        options: ["44", "37", "35", "36"],
        correct: 3,
        explanation: "The answer is 36."
    },
    {
        question: "Skip counting by 2s: 4, 6, 8, ___",
        options: ["8", "10", "14", "12"],
        correct: 1,
        explanation: "The next number is 10."
    },
    {
        question: "If you have 32 stickers and get 8 more, how many do you have?",
        options: ["49", "40", "43", "39"],
        correct: 1,
        explanation: "The answer is 40."
    },
    {
        question: "What is 18 + 30?",
        options: ["59", "51", "48", "47"],
        correct: 2,
        explanation: "18 + 30 = 48."
    },
    {
        question: "What is double 13?",
        options: ["34", "27", "26", "22"],
        correct: 2,
        explanation: "The answer is 26."
    },
    {
        question: "Which is less: 40 or 47?",
        options: ["40", "47", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 40."
    },
    {
        question: "What is 9 × 2?",
        options: ["19", "18", "27", "14"],
        correct: 1,
        explanation: "9 × 2 = 18."
    },
    {
        question: "What is 36 + 19?",
        options: ["70", "55", "53", "60"],
        correct: 1,
        explanation: "36 + 19 = 55."
    },
    {
        question: "What is 7 × 10?",
        options: ["70", "74", "79", "69"],
        correct: 0,
        explanation: "7 × 10 = 70."
    },
    {
        question: "Which is less: 39 or 76?",
        options: ["39", "76", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 39."
    },
    {
        question: "What is half of 10?",
        options: ["9", "4", "5", "15"],
        correct: 2,
        explanation: "Half of 10 is 5."
    },
    {
        question: "What is 33 + 49?",
        options: ["84", "82", "89", "79"],
        correct: 1,
        explanation: "33 + 49 = 82."
    },
    {
        question: "Skip counting by 3s: 3, 6, 9, ___",
        options: ["18", "15", "9", "12"],
        correct: 3,
        explanation: "The next number is 12."
    },
    {
        question: "What is 2 × 8?",
        options: ["20", "16", "28", "13"],
        correct: 1,
        explanation: "2 × 8 = 16."
    },
    {
        question: "What is 66 ÷ 6?",
        options: ["12", "8", "11", "8"],
        correct: 2,
        explanation: "66 ÷ 6 = 11."
    },
    {
        question: "Skip counting by 3s: 9, 12, ___",
        options: ["21", "15", "18", "12"],
        correct: 1,
        explanation: "The next number is 15."
    },
    {
        question: "What is 121 ÷ 11?",
        options: ["13", "8", "15", "11"],
        correct: 3,
        explanation: "121 ÷ 11 = 11."
    },
    {
        question: "What is 80 ÷ 10?",
        options: ["9", "10", "8", "7"],
        correct: 2,
        explanation: "80 ÷ 10 = 8."
    },
    {
        question: "Skip counting by 4s: 4, 8, 12, ___",
        options: ["20", "24", "16", "12"],
        correct: 2,
        explanation: "The next number is 16."
    },
    {
        question: "What is 80 ÷ 10?",
        options: ["8", "7", "11", "13"],
        correct: 0,
        explanation: "80 ÷ 10 = 8."
    },
    {
        question: "You have 50 toys. If 3 are red, how many are not red?",
        options: ["47", "57", "45", "50"],
        correct: 0,
        explanation: "The answer is 47."
    },
    {
        question: "What is 96 - 40?",
        options: ["58", "54", "64", "56"],
        correct: 3,
        explanation: "96 - 40 = 56."
    },
    {
        question: "How many seconds are in 9 minutes?",
        options: ["549", "536", "567", "540"],
        correct: 3,
        explanation: "The answer is 540."
    },
    {
        question: "What is 18 ÷ 9?",
        options: ["5", "11", "2", "4"],
        correct: 2,
        explanation: "18 ÷ 9 = 2."
    },
    {
        question: "What is 68 - 42?",
        options: ["22", "26", "29", "36"],
        correct: 1,
        explanation: "68 - 42 = 26."
    },
    {
        question: "If you have 33 apples and get 8 more, how many do you have?",
        options: ["50", "41", "37", "42"],
        correct: 1,
        explanation: "The answer is 41."
    },
    {
        question: "What is 49 - 37?",
        options: ["16", "21", "8", "12"],
        correct: 3,
        explanation: "49 - 37 = 12."
    },
    {
        question: "What is 4 × 11?",
        options: ["46", "41", "55", "44"],
        correct: 3,
        explanation: "4 × 11 = 44."
    },
    {
        question: "What is 11 × 9?",
        options: ["99", "101", "108", "98"],
        correct: 0,
        explanation: "11 × 9 = 99."
    },
    {
        question: "What is 42 ÷ 7?",
        options: ["3", "6", "10", "10"],
        correct: 1,
        explanation: "42 ÷ 7 = 6."
    },
    {
        question: "What is 6 + 14?",
        options: ["22", "35", "17", "20"],
        correct: 3,
        explanation: "6 + 14 = 20."
    },
    {
        question: "What is 47 + 37?",
        options: ["82", "84", "89", "93"],
        correct: 1,
        explanation: "47 + 37 = 84."
    },
    {
        question: "How many days are in 10 weeks?",
        options: ["95", "66", "70", "75"],
        correct: 2,
        explanation: "The answer is 70."
    },
    {
        question: "What is 4 × 3?",
        options: ["18", "12", "10", "17"],
        correct: 1,
        explanation: "4 × 3 = 12."
    },
    {
        question: "What is 88 - 69?",
        options: ["31", "19", "23", "15"],
        correct: 1,
        explanation: "88 - 69 = 19."
    },
    {
        question: "If you have 43 candies and lose 15, how many are left?",
        options: ["36", "26", "29", "28"],
        correct: 3,
        explanation: "The answer is 28."
    },
    {
        question: "What is 6 × 8?",
        options: ["59", "44", "52", "48"],
        correct: 3,
        explanation: "6 × 8 = 48."
    },
    {
        question: "What is 99 ÷ 9?",
        options: ["10", "11", "10", "14"],
        correct: 1,
        explanation: "99 ÷ 9 = 11."
    },
    {
        question: "What is 17 + 14?",
        options: ["30", "34", "31", "41"],
        correct: 2,
        explanation: "17 + 14 = 31."
    },
    {
        question: "Which is greater: 82 or 48?",
        options: ["82", "48", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 82."
    },
    {
        question: "What is half of 12?",
        options: ["14", "6", "5", "9"],
        correct: 1,
        explanation: "Half of 12 is 6."
    },
    {
        question: "Skip counting by 5s: 5, 10, 15, ___",
        options: ["30", "25", "15", "20"],
        correct: 3,
        explanation: "The next number is 20."
    },
    {
        question: "What is 4 × 6?",
        options: ["23", "32", "24", "26"],
        correct: 2,
        explanation: "4 × 6 = 24."
    },
    {
        question: "What is 40 - 18?",
        options: ["25", "19", "36", "22"],
        correct: 3,
        explanation: "40 - 18 = 22."
    },
    {
        question: "What is 12 ÷ 6?",
        options: ["2", "5", "5", "8"],
        correct: 0,
        explanation: "12 ÷ 6 = 2."
    },
    {
        question: "You have 29 pencils. If 13 are red, how many are not red?",
        options: ["16", "27", "15", "20"],
        correct: 0,
        explanation: "The answer is 16."
    },
    {
        question: "What is 70 ÷ 7?",
        options: ["10", "8", "9", "12"],
        correct: 0,
        explanation: "70 ÷ 7 = 10."
    },
    {
        question: "What is double 4?",
        options: ["4", "11", "8", "15"],
        correct: 2,
        explanation: "The answer is 8."
    },
    {
        question: "What is 8 × 8?",
        options: ["71", "61", "68", "64"],
        correct: 3,
        explanation: "8 × 8 = 64."
    },
    {
        question: "What is 27 - 26?",
        options: ["1", "5", "0", "14"],
        correct: 0,
        explanation: "27 - 26 = 1."
    },
    {
        question: "What is 78 - 70?",
        options: ["8", "6", "21", "13"],
        correct: 0,
        explanation: "78 - 70 = 8."
    },
    {
        question: "How many seconds are in 7 minutes?",
        options: ["450", "420", "433", "417"],
        correct: 1,
        explanation: "The answer is 420."
    },
    {
        question: "What is 96 ÷ 8?",
        options: ["9", "12", "14", "9"],
        correct: 1,
        explanation: "96 ÷ 8 = 12."
    },
    {
        question: "What is 11 × 6?",
        options: ["75", "67", "64", "66"],
        correct: 3,
        explanation: "11 × 6 = 66."
    },
    {
        question: "If you have 38 toys and lose 18, how many are left?",
        options: ["16", "20", "23", "30"],
        correct: 1,
        explanation: "The answer is 20."
    },
    {
        question: "What is 11 × 10?",
        options: ["122", "115", "110", "107"],
        correct: 2,
        explanation: "11 × 10 = 110."
    },
    {
        question: "How many minutes are in 10 hours?",
        options: ["628", "607", "600", "597"],
        correct: 2,
        explanation: "The answer is 600."
    },
    {
        question: "What is 89 - 41?",
        options: ["48", "49", "62", "45"],
        correct: 0,
        explanation: "89 - 41 = 48."
    },
    {
        question: "What is 77 ÷ 7?",
        options: ["9", "14", "7", "11"],
        correct: 3,
        explanation: "77 ÷ 7 = 11."
    },
    {
        question: "What is 22 - 7?",
        options: ["13", "15", "26", "18"],
        correct: 1,
        explanation: "22 - 7 = 15."
    },
    {
        question: "What is half of 30?",
        options: ["15", "14", "19", "23"],
        correct: 0,
        explanation: "Half of 30 is 15."
    },
    {
        question: "What is 19 + 28?",
        options: ["44", "60", "47", "52"],
        correct: 2,
        explanation: "19 + 28 = 47."
    },
    {
        question: "You have 40 pencils. If 14 are red, how many are not red?",
        options: ["28", "32", "26", "22"],
        correct: 2,
        explanation: "The answer is 26."
    },
    {
        question: "If you share 14 erasers equally among 7 friends, how many does each get?",
        options: ["0", "2", "9", "4"],
        correct: 1,
        explanation: "The answer is 2."
    },
    {
        question: "What is double 4?",
        options: ["9", "5", "8", "19"],
        correct: 2,
        explanation: "The answer is 8."
    },
    {
        question: "You have 26 erasers. If 11 are red, how many are not red?",
        options: ["19", "15", "23", "13"],
        correct: 1,
        explanation: "The answer is 15."
    },
    {
        question: "What is 46 + 41?",
        options: ["86", "94", "88", "87"],
        correct: 3,
        explanation: "46 + 41 = 87."
    },
    {
        question: "What is 54 ÷ 6?",
        options: ["8", "7", "9", "13"],
        correct: 2,
        explanation: "54 ÷ 6 = 9."
    },
    {
        question: "What is 10 - 9?",
        options: ["0", "6", "1", "12"],
        correct: 2,
        explanation: "10 - 9 = 1."
    },
    {
        question: "What is 54 ÷ 9?",
        options: ["8", "5", "6", "10"],
        correct: 2,
        explanation: "54 ÷ 9 = 6."
    },
    {
        question: "What is half of 12?",
        options: ["11", "6", "7", "4"],
        correct: 1,
        explanation: "Half of 12 is 6."
    },
    {
        question: "If you have 46 pencils and get 15 more, how many do you have?",
        options: ["60", "71", "61", "64"],
        correct: 2,
        explanation: "The answer is 61."
    },
    {
        question: "What is 6 × 11?",
        options: ["71", "66", "62", "74"],
        correct: 1,
        explanation: "6 × 11 = 66."
    },
    {
        question: "What is 3 × 10?",
        options: ["34", "27", "30", "36"],
        correct: 2,
        explanation: "3 × 10 = 30."
    },
    {
        question: "What is 2 × 12?",
        options: ["22", "25", "24", "33"],
        correct: 2,
        explanation: "2 × 12 = 24."
    },
    {
        question: "Which is greater: 91 or 98?",
        options: ["91", "98", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 98."
    },
    {
        question: "What is 40 ÷ 8?",
        options: ["4", "10", "11", "5"],
        correct: 3,
        explanation: "40 ÷ 8 = 5."
    },
    {
        question: "What is 5 × 1?",
        options: ["3", "8", "5", "14"],
        correct: 2,
        explanation: "5 × 1 = 5."
    },
    {
        question: "Skip counting by 2s: 6, 8, ___",
        options: ["8", "14", "12", "10"],
        correct: 3,
        explanation: "The next number is 10."
    },
    {
        question: "What is 7 × 12?",
        options: ["87", "81", "90", "84"],
        correct: 3,
        explanation: "7 × 12 = 84."
    },
    {
        question: "What is 10 × 10?",
        options: ["107", "100", "99", "101"],
        correct: 1,
        explanation: "10 × 10 = 100."
    },
    {
        question: "What is half of 20?",
        options: ["18", "13", "7", "10"],
        correct: 3,
        explanation: "Half of 20 is 10."
    },
    {
        question: "What is 43 + 7?",
        options: ["52", "57", "48", "50"],
        correct: 3,
        explanation: "43 + 7 = 50."
    },
    {
        question: "What is triple 20?",
        options: ["69", "59", "63", "60"],
        correct: 3,
        explanation: "The answer is 60."
    },
    {
        question: "What is 6 × 11?",
        options: ["69", "63", "66", "73"],
        correct: 2,
        explanation: "6 × 11 = 66."
    },
    {
        question: "If you have 18 stickers and get 12 more, how many do you have?",
        options: ["30", "27", "40", "35"],
        correct: 0,
        explanation: "The answer is 30."
    },
    {
        question: "What is 45 - 39?",
        options: ["20", "5", "6", "9"],
        correct: 2,
        explanation: "45 - 39 = 6."
    },
    {
        question: "Skip counting by 3s: 3, 6, 9, ___",
        options: ["12", "9", "15", "18"],
        correct: 0,
        explanation: "The next number is 12."
    },
    {
        question: "If you have 9 pencils and get 1 more, how many do you have?",
        options: ["8", "20", "10", "15"],
        correct: 2,
        explanation: "The answer is 10."
    },
    {
        question: "Which is greater: 19 or 85?",
        options: ["19", "85", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 85."
    },
    {
        question: "What is triple 12?",
        options: ["36", "40", "33", "45"],
        correct: 0,
        explanation: "The answer is 36."
    },
    {
        question: "What is double 18?",
        options: ["36", "38", "43", "35"],
        correct: 0,
        explanation: "The answer is 36."
    },
    {
        question: "Skip counting by 4s: 12, 16, ___",
        options: ["24", "20", "16", "28"],
        correct: 1,
        explanation: "The next number is 20."
    },
    {
        question: "What is 75 - 61?",
        options: ["16", "24", "14", "13"],
        correct: 2,
        explanation: "75 - 61 = 14."
    },
    {
        question: "What is 36 ÷ 3?",
        options: ["6", "9", "16", "12"],
        correct: 3,
        explanation: "36 ÷ 3 = 12."
    },
    {
        question: "What is 36 + 46?",
        options: ["86", "79", "88", "82"],
        correct: 3,
        explanation: "36 + 46 = 82."
    },
    {
        question: "What is 11 × 12?",
        options: ["129", "136", "132", "138"],
        correct: 2,
        explanation: "11 × 12 = 132."
    },
    {
        question: "What is 73 - 42?",
        options: ["31", "40", "33", "27"],
        correct: 0,
        explanation: "73 - 42 = 31."
    },
    {
        question: "You have 49 erasers. If 18 are red, how many are not red?",
        options: ["42", "33", "29", "31"],
        correct: 3,
        explanation: "The answer is 31."
    },
    {
        question: "How many minutes are in 7 hours?",
        options: ["450", "435", "420", "414"],
        correct: 2,
        explanation: "The answer is 420."
    },
    {
        question: "You have 45 toys. If 13 are red, how many are not red?",
        options: ["30", "32", "33", "41"],
        correct: 1,
        explanation: "The answer is 32."
    },
    {
        question: "How many seconds are in 6 minutes?",
        options: ["390", "375", "352", "360"],
        correct: 3,
        explanation: "The answer is 360."
    },
    {
        question: "What is 23 - 10?",
        options: ["28", "12", "18", "13"],
        correct: 3,
        explanation: "23 - 10 = 13."
    },
    {
        question: "How many seconds are in 2 minutes?",
        options: ["120", "140", "114", "125"],
        correct: 0,
        explanation: "The answer is 120."
    },
    {
        question: "What is 10 × 4?",
        options: ["40", "41", "51", "36"],
        correct: 0,
        explanation: "10 × 4 = 40."
    },
    {
        question: "What is 16 ÷ 2?",
        options: ["3", "6", "8", "11"],
        correct: 2,
        explanation: "16 ÷ 2 = 8."
    },
    {
        question: "What is 7 × 5?",
        options: ["34", "37", "35", "43"],
        correct: 2,
        explanation: "7 × 5 = 35."
    },
    {
        question: "You have 48 erasers. If 14 are red, how many are not red?",
        options: ["38", "41", "30", "34"],
        correct: 3,
        explanation: "The answer is 34."
    },
    {
        question: "What is double 24?",
        options: ["51", "58", "44", "48"],
        correct: 3,
        explanation: "The answer is 48."
    },
    {
        question: "What is 6 ÷ 2?",
        options: ["5", "7", "2", "3"],
        correct: 3,
        explanation: "6 ÷ 2 = 3."
    },
    {
        question: "Which is less: 29 or 10?",
        options: ["29", "10", "They are equal", "Can't tell"],
        correct: 1,
        explanation: "The answer is 10."
    },
    {
        question: "If you have 12 pencils and lose 10, how many are left?",
        options: ["13", "7", "0", "2"],
        correct: 3,
        explanation: "The answer is 2."
    },
    {
        question: "You have 25 candies. If 12 are red, how many are not red?",
        options: ["21", "18", "10", "13"],
        correct: 3,
        explanation: "The answer is 13."
    },
    {
        question: "If you have 45 oranges and get 13 more, how many do you have?",
        options: ["58", "69", "63", "55"],
        correct: 0,
        explanation: "The answer is 58."
    },
    {
        question: "What is 12 × 7?",
        options: ["87", "93", "80", "84"],
        correct: 3,
        explanation: "12 × 7 = 84."
    },
    {
        question: "Skip counting by 2s: 6, 8, ___",
        options: ["12", "8", "10", "14"],
        correct: 2,
        explanation: "The next number is 10."
    },
    {
        question: "Skip counting by 2s: 2, 4, 6, ___",
        options: ["6", "8", "12", "10"],
        correct: 1,
        explanation: "The next number is 8."
    },
    {
        question: "What is 10 × 9?",
        options: ["92", "88", "90", "101"],
        correct: 2,
        explanation: "10 × 9 = 90."
    },
    {
        question: "What is 44 - 20?",
        options: ["22", "24", "31", "27"],
        correct: 1,
        explanation: "44 - 20 = 24."
    },
    {
        question: "Which is less: 50 or 67?",
        options: ["50", "67", "They are equal", "Can't tell"],
        correct: 0,
        explanation: "The answer is 50."
    },
    {
        question: "You have 16 oranges. If 9 are red, how many are not red?",
        options: ["5", "9", "19", "7"],
        correct: 3,
        explanation: "The answer is 7."
    },
    {
        question: "Skip counting by 3s: 6, 9, 12, ___",
        options: ["21", "15", "12", "18"],
        correct: 1,
        explanation: "The next number is 15."
    },
    {
        question: "You have 8 candies. If 4 are red, how many are not red?",
        options: ["2", "4", "13", "9"],
        correct: 1,
        explanation: "The answer is 4."
    },
    {
        question: "What is 8 + 19?",
        options: ["40", "31", "26", "27"],
        correct: 3,
        explanation: "8 + 19 = 27."
    },
    {
        question: "Skip counting by 4s: 4, 8, 12, ___",
        options: ["20", "24", "16", "12"],
        correct: 2,
        explanation: "The next number is 16."
    },
    {
        question: "What is 6 × 5?",
        options: ["29", "30", "31", "40"],
        correct: 1,
        explanation: "6 × 5 = 30."
    },
    {
        question: "What is 12 ÷ 4?",
        options: ["5", "1", "3", "6"],
        correct: 2,
        explanation: "12 ÷ 4 = 3."
    },
    {
        question: "What is 54 ÷ 9?",
        options: ["7", "9", "6", "3"],
        correct: 2,
        explanation: "54 ÷ 9 = 6."
    },
    {
        question: "What is half of 30?",
        options: ["14", "20", "15", "17"],
        correct: 2,
        explanation: "Half of 30 is 15."
    },
    {
        question: "What is 2 × 8?",
        options: ["19", "16", "13", "26"],
        correct: 1,
        explanation: "2 × 8 = 16."
    },
    {
        question: "What is 9 × 2?",
        options: ["18", "22", "29", "15"],
        correct: 0,
        explanation: "9 × 2 = 18."
    },
    {
        question: "What is 11 ÷ 11?",
        options: ["1", "13", "4", "6"],
        correct: 0,
        explanation: "11 ÷ 11 = 1."
    },
    {
        question: "If you have 40 toys and lose 11, how many are left?",
        options: ["25", "29", "38", "34"],
        correct: 1,
        explanation: "The answer is 29."
    },
    {
        question: "What is 26 + 42?",
        options: ["67", "78", "68", "72"],
        correct: 2,
        explanation: "26 + 42 = 68."
    },
    {
        question: "Skip counting by 5s: 15, 20, ___",
        options: ["30", "35", "25", "20"],
        correct: 2,
        explanation: "The next number is 25."
    },
    {
        question: "What is 99 + 1?",
        options: ["100", "98", "101", "99"],
        correct: 0,
        explanation: "99 + 1 = 100."
    },
    {
        question: "How many corners does a cube have?",
        options: ["6", "8", "12", "4"],
        correct: 1,
        explanation: "A cube has 8 corners."
    },
    {
        question: "If you buy 3 items for $5 each, how much do you spend?",
        options: ["$10", "$15", "$20", "$8"],
        correct: 1,
        explanation: "3 × $5 = $15."
    },
    {
        question: "What is the next prime number after 7?",
        options: ["8", "9", "11", "10"],
        correct: 2,
        explanation: "11 is the next prime number after 7."
    }
];

// NON-VERBAL QUESTIONS - 105 questions for 7-8 year olds  
const NONVERBAL_QUESTIONS = [
    {
        question: "Which shape has 4 equal sides and 4 right angles?",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correct: 1,
        explanation: "A square has 4 equal sides and 4 right angles."
    },
    {
        question: "Which shape is round?",
        options: ["Triangle", "Circle", "Square", "Heart"],
        correct: 1,
        explanation: "A circle is completely round."
    },
    {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "A triangle has 3 sides."
    },
    {
        question: "Which shape has no sides?",
        options: ["Circle", "Square", "Triangle", "Star"],
        correct: 0,
        explanation: "A circle has no straight sides."
    },
    {
        question: "What pattern comes next? ★ ★ ☆ ★ ★ ☆ ___",
        options: ["★", "☆", "◆", "■"],
        correct: 0,
        explanation: "The pattern is two filled stars, then one empty star. So next is a filled star (★)."
    },
    {
        question: "What pattern comes next? ● ○ ● ○ ___",
        options: ["●", "○", "◆", "★"],
        correct: 0,
        explanation: "The pattern alternates between filled and empty circles. Next is filled (●)."
    },
    {
        question: "What pattern comes next? ▲ ▼ ▲ ▼ ___",
        options: ["▲", "▼", "●", "■"],
        correct: 0,
        explanation: "The pattern alternates between up and down triangles. Next is up (▲)."
    },
    {
        question: "Which shape is different? ■ ■ ◆ ■",
        options: ["First ■", "Second ■", "◆", "Fourth ■"],
        correct: 2,
        explanation: "The diamond (◆) is different from the squares (■)."
    },
    {
        question: "Which shape is different? ● ● ○ ● ●",
        options: ["First ●", "Middle ○", "Fourth ●", "Last ●"],
        correct: 1,
        explanation: "The empty circle (○) is different from the filled circles (●)."
    },
    {
        question: "What is bigger? An ant or a dog?",
        options: ["Ant", "Dog", "They're the same", "Can't tell"],
        correct: 1,
        explanation: "A dog is much bigger than an ant."
    },
    {
        question: "What is smaller? A pencil or a building?",
        options: ["Pencil", "Building", "They're the same", "Can't tell"],
        correct: 0,
        explanation: "A pencil is much smaller than a building."
    },
    {
        question: "Which side of the mirror is the person raising their right hand? (Imagine holding a mirror between you and another person)",
        options: ["Left side", "Right side", "Can't tell", "Both sides"],
        correct: 0,
        explanation: "When reflected in a mirror, right becomes left from your view."
    },
    {
        question: "Complete the pattern: ▲ ■ ▲ ■ ▲ ___",
        options: ["▲", "■", "●", "◆"],
        correct: 1,
        explanation: "The pattern alternates between triangle and square. Next is square (■)."
    },
    {
        question: "Complete the pattern: Small ★ Medium ★ Large ★ ___",
        options: ["Small ★", "Medium ★", "Large ★", "Larger ★"],
        correct: 2,
        explanation: "The stars are getting progressively larger."
    },
    {
        question: "Which two shapes are the same? ■ ◆ ■ ▼",
        options: ["First and second", "First and third", "Second and fourth", "Third and fourth"],
        correct: 1,
        explanation: "The first and third shapes are both squares (■)."
    },
    {
        question: "If you rotate this shape ◢ 90 degrees clockwise, what does it look like?",
        options: ["◢", "◣", "◤", "◥"],
        correct: 2,
        explanation: "When rotated 90 degrees clockwise, it becomes ◤."
    },
    {
        question: "What pattern comes next? ■ ■ ■ □ □ □ ___",
        options: ["■", "□", "◆", "●"],
        correct: 0,
        explanation: "The pattern is three filled squares, then three empty squares. Next is filled (■)."
    },
    {
        question: "Complete the pattern: 1 shape, 2 shapes, 3 shapes, ___",
        options: ["2 shapes", "3 shapes", "4 shapes", "5 shapes"],
        correct: 2,
        explanation: "The pattern shows increasing numbers. Next is 4 shapes."
    },
    {
        question: "Which shape belongs in the empty space? ▲ ■ ? ■ ▲",
        options: ["▲", "■", "●", "■"],
        correct: 1,
        explanation: "The pattern is symmetric. The missing shape is ■."
    },
    {
        question: "What pattern comes next? ★★ ☆☆ ★★ ☆☆ ___",
        options: ["★★", "☆☆", "★☆", "☆★"],
        correct: 0,
        explanation: "The pattern alternates between two filled stars and two empty stars. Next is ★★."
    },
    {
        question: "Which shape comes next? ● ● ○ ● ● ○ ___",
        options: ["●", "○", "◆", "■"],
        correct: 0,
        explanation: "The pattern is two filled, one empty, repeating. Next is filled (●)."
    },
    {
        question: "Complete the matrix:\n▲ ■\n■ ?",
        options: ["▲", "■", "●", "◆"],
        correct: 0,
        explanation: "The pattern shows different shapes in each position. The missing shape is ▲."
    },
    {
        question: "What is the opposite direction? If the arrow points → (right), the opposite is?",
        options: ["↑ (up)", "← (left)", "↓ (down)", "↙ (down-left)"],
        correct: 1,
        explanation: "The opposite of right (→) is left (←)."
    },
    {
        question: "Which shape is rotated 180 degrees? Original: ▲",
        options: ["▲", "▼", "◄", "►"],
        correct: 1,
        explanation: "When you rotate a triangle 180 degrees, it points down (▼)."
    },
    {
        question: "Find the shape that doesn't fit: ●●●○●●●",
        options: ["First ●", "Middle ○", "Second ●", "Last ●"],
        correct: 1,
        explanation: "The empty circle (○) doesn't fit with the filled circles (●●●●●)."
    },
    {
        question: "What pattern comes next? ▼ ▼ ▲ ▼ ▼ ▲ ___",
        options: ["▲", "▼", "●", "■"],
        correct: 1,
        explanation: "The pattern is two down, one up, repeating. Next is down (▼ or ▼)."
    },
    {
        question: "Complete the series: ★ ★★ ★★★ ___",
        options: ["★★★★", "★", "★★", "★★★"],
        correct: 0,
        explanation: "Adding one more star each time. Next is ★★★★."
    },
    {
        question: "Which shape matches? Original: □ Match: □ □ ■ □",
        options: ["First □", "Second □", "■", "Fourth □"],
        correct: 2,
        explanation: "We're looking for a square. Actually, the ■ is filled. The □s are the matches."
    },
    {
        question: "What would this look like flipped vertically? ◢",
        options: ["◢", "◣", "◤", "◥"],
        correct: 2,
        explanation: "Flipping ◢ vertically (top to bottom) gives ◤."
    },
    {
        question: "Complete the pattern: Red ● Blue ● Red ● ___",
        options: ["Red ●", "Blue ●", "Green ●", "Purple ●"],
        correct: 1,
        explanation: "The pattern alternates between red and blue. Next is blue (●)."
    },
    {
        question: "What comes next? Small circle, Medium circle, Large circle, ___",
        options: ["Small circle", "Medium circle", "Large circle", "Extra large circle"],
        correct: 3,
        explanation: "The circles are growing larger. Next would be even larger."
    },
    {
        question: "Which shape is in the middle? ▲ ■ ● ◆ ★",
        options: ["▲", "■", "●", "◆"],
        correct: 2,
        explanation: "The middle shape in a row of 5 is the 3rd one: ●"
    },
    {
        question: "What pattern comes next? ■□■□■___",
        options: ["■", "□", "●", "★"],
        correct: 1,
        explanation: "The pattern alternates between filled and empty squares. Next is empty (□)."
    },
    {
        question: "Complete the grid:\n▲ ■ ▲\n■ ● ■\n▲ ■ ?",
        options: ["▲", "■", "●", "◆"],
        correct: 0,
        explanation: "The bottom right should be ▲ to complete the pattern."
    },
    {
        question: "Which shape is different? ▲▲▼▲▲",
        options: ["First ▲", "Second ▲", "Middle ▼", "Fourth ▲"],
        correct: 2,
        explanation: "The down-pointing triangle (▼) is different from the up-pointing triangles (▲)."
    },
    {
        question: "What pattern comes next? ● ○ ● ○ ● ___",
        options: ["●", "○", "◆", "■"],
        correct: 1,
        explanation: "The pattern alternates between filled and empty circles. Next is empty (○)."
    },
    {
        question: "Rotate this shape 90 degrees: □",
        options: ["□", "□", "■", "◆"],
        correct: 0,
        explanation: "A square looks the same when rotated 90 degrees."
    },
    {
        question: "What is twice as big? Original: ●  Twice as big: ",
        options: ["●", "●●", "●●●●", "Cannot compare shapes"],
        correct: 2,
        explanation: "If the original is one unit, twice as big would be double the size."
    },
    {
        question: "What pattern comes next? ★ ★ ★ □ □ □ ★ ★ ★ ___",
        options: ["★", "□", "●", "■"],
        correct: 1,
        explanation: "The pattern is three stars, three squares, three stars, so next is squares (□)."
    },
    {
        question: "Which shape belongs? ▲ ■ ▲ ■ ▲ ___",
        options: ["▲", "■", "●", "◆"],
        correct: 1,
        explanation: "The pattern alternates between triangle and square. Next is square (■)."
    },
    {
        question: "If this is the front view ◆, what is the side view?",
        options: ["◆", "●", "■", "▲"],
        correct: 1,
        explanation: "A diamond from the side would look rounder, like a circle (●)."
    },
    {
        question: "Complete: Same Same Different Same Same ___",
        options: ["Same", "Different", "Repeat", "New"],
        correct: 1,
        explanation: "The pattern is 2 same, 1 different, repeating. Next is different."
    },
    {
        question: "What's the rule? 1 shape, 2 shapes, 3 shapes, then ___",
        options: ["4 shapes", "2 shapes", "1 shape", "5 shapes"],
        correct: 0,
        explanation: "The pattern increases by 1. Next is 4 shapes."
    },
    {
        question: "Find the pattern: Red, Blue, Red, Blue, Red, ___",
        options: ["Red", "Blue", "Green", "Yellow"],
        correct: 1,
        explanation: "The pattern alternates between red and blue. Next is blue."
    },
    {
        question: "What pattern comes next? ▲▼▲▼━▲___",
        options: ["▲", "▼", "━", "●"],
        correct: 1,
        explanation: "Looking at the pattern, next should be ▼."
    },
    {
        question: "Mirror image: If I see ◂, in a mirror I see?",
        options: ["◂", "▸", "●", "■"],
        correct: 1,
        explanation: "The mirror image of ◂ (left-pointing) is ▸ (right-pointing)."
    },
    {
        question: "What's inside and outside? ● is inside ★. ★ is inside?",
        options: ["●", "■", "□", "The answer"],
        correct: 2,
        explanation: "This is about nested patterns and relationships."
    },
    {
        question: "Complete the pattern: ★ ☆ ★ ☆ ★ ___",
        options: ["★", "☆", "●", "■"],
        correct: 1,
        explanation: "The pattern alternates between filled and empty stars. Next is ☆."
    },
    {
        question: "Which came first? ▲▼▲▼▲___",
        options: ["▲ then ▼", "▼ then ▲", "▲ only", "▼ only"],
        correct: 0,
        explanation: "Looking at the sequence, ▲ comes first and then ▼."
    },
    {
        question: "What shape is NOT in this group? ●●●■●●●",
        options: ["First ●", "Fourth ■", "Last ●", "Second ●"],
        correct: 1,
        explanation: "The square (■) is different from all the circles (●)."
    },
    {
        question: "Size order (smallest to biggest): ●●●●● puts them as?",
        options: ["●●●●●", "Can't order circles", "Too small to order", "Need size info"],
        correct: 0,
        explanation: "All same size, so already ordered."
    },
    {
        question: "Count the pattern repeats: ★★☆★★☆★★☆ has how many repeats?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "The pattern (★★☆) repeats 3 times."
    },
    {
        question: "What shape continues? ▲➸■➸▲➸■➸▲➸___",
        options: ["▲", "■", "●", "➸"],
        correct: 1,
        explanation: "The pattern alternates between triangle and square. Next is ■."
    },
    {
        question: "Find the odd one: ★ ★ ★ ☆ ★ ★",
        options: ["First ★", "Fourth ☆", "Fifth ★", "Last ★"],
        correct: 1,
        explanation: "The empty star (☆) is different from the filled stars (★)."
    },
    {
        question: "Visual analogy: ★ is to ☆ as ● is to?",
        options: ["●", "○", "◆", "■"],
        correct: 1,
        explanation: "★ (filled) relates to ☆ (empty) the same way ● (filled) relates to ○ (empty)."
    },
    {
        question: "What's the missing piece? ▲ ■ ▼ ◆ ___",
        options: ["●", "★", "□", "Would need more context"],
        correct: 0,
        explanation: "Based on variety, ● seems like a logical next shape."
    },
    {
        question: "Position pattern: Top-left ▲, Top-right ■, Bottom-left ●, Bottom-right?",
        options: ["●", "■", "★", "◆"],
        correct: 3,
        explanation: "Following the pattern, bottom-right would be ◆."
    },
    {
        question: "What pattern shows growth? ● ●● ●●● ____",
        options: ["●", "●●", "●●●●", "Continue upward"],
        correct: 2,
        explanation: "Each step adds one more circle. Next would be ●●●●."
    },
    {
        question: "Sequence logic: 1st ▲, 2nd ■, 3rd ●, 4th?",
        options: ["★", "◆", "○", "Next unknown"],
        correct: 1,
        explanation: "Following an arbitrary sequence, 4th could be ◆."
    },
    {
        question: "Shape relationships: ▲ has 3 sides, ■ has 4 sides, ★ has?",
        options: ["5 sides", "6 sides", "8 sides", "No sides"],
        correct: 1,
        explanation: "A star typically has 5 points (or interpreted differently, 10 sides)."
    },
    {
        question: "Symmetry: How many lines of symmetry does a circle have?",
        options: ["1", "2", "Many", "None"],
        correct: 2,
        explanation: "A circle has infinite lines of symmetry."
    },
    {
        question: "Symmetry: How many lines of symmetry does a square have?",
        options: ["1", "2", "4", "Infinite"],
        correct: 2,
        explanation: "A square has 4 lines of symmetry."
    },
    {
        question: "Symmetry: How many lines of symmetry does a triangle have?",
        options: ["0", "1", "2", "3"],
        correct: 3,
        explanation: "An equilateral triangle has 3 lines of symmetry."
    },
    {
        question: "Pattern type: ■□■□ is called an _____ pattern",
        options: ["Repeating", "Growing", "Shrinking", "Random"],
        correct: 0,
        explanation: "This is an alternating or repeating pattern."
    },
    {
        question: "What comes next? Purple ▲ Blue ■ Green ● ___",
        options: ["Yellow ◆", "Red ★", "Pink ♡", "Orange ▼"],
        correct: 0,
        explanation: "Following color progression, yellow might be next with a new shape."
    },
    {
        question: "Logic puzzle: ▲ → ● means triangle becomes circle. ■ → ___",
        options: ["○", "○", "●", "■"],
        correct: 1,
        explanation: "If filled becomes empty, then ■ becomes □."
    },
    {
        question: "Orientation: ▲ is pointing up. ▼ is pointing ___",
        options: ["Right", "Down", "Left", "Diagonal"],
        correct: 1,
        explanation: "▼ is pointing down."
    },
    {
        question: "Comparing sizes: If ● is one unit and ●●●●●● is how much?",
        options: ["1 unit", "2 units", "6 units", "36 units"],
        correct: 2,
        explanation: "Six circles = 6 units."
    },
    {
        question: "Pattern completion: ★☆★☆★☆___",
        options: ["★", "☆", "●", "■"],
        correct: 0,
        explanation: "The alternating pattern continues with ★."
    },
    {
        question: "Which doesn't belong? ▲ ▲ ▼ ▲ ▲",
        options: ["First ▲", "Second ▲", "The ▼", "Fourth ▲"],
        correct: 2,
        explanation: "▼ points down while the others (▲) point up."
    },
    {
        question: "Visual progression: Small ● Medium ● Large ● Extra-large ___",
        options: ["●", "●", "●", "Huge ●"],
        correct: 3,
        explanation: "Following the size progression, next would be huge."
    },
    {
        question: "What pattern comes next? ●■▲●■▲___",
        options: ["●", "■", "▲", "●■"],
        correct: 0,
        explanation: "This is a repeating pattern of ●■▲. Next is ●."
    },
    {
        question: "Which shape is the smallest? ★ ★ ★ ★ all shown same size - which appears smallest to you?",
        options: ["First ★", "Second ★", "Third ★", "They're all same size"],
        correct: 3,
        explanation: "If they're all drawn the same size, they're all the same size."
    },
    {
        question: "Which shape is a circle?",
        options: ["Pentagon", "Square", "Triangle", "Circle"],
        correct: 3,
        explanation: "A circle is the correct answer."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["4", "2", "2", "3"],
        correct: 1,
        explanation: "The next element is 2."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Circle", "Pentagon", "Triangle", "Rectangle"],
        correct: 3,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Triangle", "Pentagon", "Circle", "Rectangle"],
        correct: 3,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which group has fewer?",
        options: ["8 books", "3 books", "Same amount", "8 books"],
        correct: 1,
        explanation: "The answer is 3 books."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Yellow", "Red", "Green", "Blue"],
        correct: 3,
        explanation: "The next element is Blue."
    },
    {
        question: "Which shape is a circle?",
        options: ["Pentagon", "Circle", "Triangle", "Square"],
        correct: 1,
        explanation: "A circle is the correct answer."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["B", "A", "C", "D"],
        correct: 0,
        explanation: "The next element is B."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["■", "▲", "▲", "●"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Blue", "Red", "Yellow", "Green"],
        correct: 0,
        explanation: "The next element is Blue."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["19", "16", "18", "17"],
        correct: 3,
        explanation: "There are 17 items."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["11", "13", "14", "12"],
        correct: 3,
        explanation: "There are 12 items."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["18", "19", "21", "20"],
        correct: 1,
        explanation: "There are 19 items."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "Which shape is a square?",
        options: ["Circle", "Pentagon", "Triangle", "Square"],
        correct: 3,
        explanation: "A square is the correct answer."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["20", "21", "19", "22"],
        correct: 0,
        explanation: "There are 20 items."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["■", "●", "▲", "▲"],
        correct: 2,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Red", "Yellow", "Green", "Blue"],
        correct: 3,
        explanation: "The next element is Blue."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Triangle", "Hexagon", "Circle", "Square"],
        correct: 1,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "Which group has more?",
        options: ["5 apples", "Same amount", "2 apples", "2 apples"],
        correct: 0,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["19", "20", "21", "18"],
        correct: 0,
        explanation: "There are 19 items."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "Which shape is a circle?",
        options: ["Triangle", "Square", "Circle", "Pentagon"],
        correct: 2,
        explanation: "A circle is the correct answer."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["12", "14", "15", "13"],
        correct: 3,
        explanation: "There are 13 items."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Red", "Blue", "Yellow", "Green"],
        correct: 1,
        explanation: "The next element is Blue."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Blue", "Yellow", "Green", "Red"],
        correct: 0,
        explanation: "The next element is Blue."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["A", "B", "C", "D"],
        correct: 1,
        explanation: "The next element is B."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ●",
        options: ["10", "7", "9", "8"],
        correct: 3,
        explanation: "There are 8 items."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "How many circles are shown? ● ● ● ●",
        options: ["5", "6", "3", "4"],
        correct: 3,
        explanation: "There are 4 items."
    },
    {
        question: "Which shape is a circle?",
        options: ["Square", "Circle", "Pentagon", "Triangle"],
        correct: 1,
        explanation: "A circle is the correct answer."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["13", "15", "16", "14"],
        correct: 3,
        explanation: "There are 14 items."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "3", "4", "2"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["B", "C", "A", "D"],
        correct: 0,
        explanation: "The next element is B."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ●",
        options: ["11", "9", "10", "8"],
        correct: 1,
        explanation: "There are 9 items."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ●",
        options: ["5", "8", "7", "6"],
        correct: 3,
        explanation: "There are 6 items."
    },
    {
        question: "Which group has fewer?",
        options: ["Same amount", "3 books", "8 books", "3 books"],
        correct: 1,
        explanation: "The answer is 3 books."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Pentagon", "Rectangle", "Circle", "Triangle"],
        correct: 1,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Green", "Red", "Yellow", "Blue"],
        correct: 3,
        explanation: "The next element is Blue."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Blue", "Red", "Yellow", "Green"],
        correct: 0,
        explanation: "The next element is Blue."
    },
    {
        question: "Which group has more?",
        options: ["Same amount", "2 apples", "5 apples", "5 apples"],
        correct: 2,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which group has fewer?",
        options: ["3 books", "3 books", "Same amount", "8 books"],
        correct: 0,
        explanation: "The answer is 3 books."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Triangle", "Hexagon", "Square", "Circle"],
        correct: 1,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which shape is a pentagon?",
        options: ["Circle", "Square", "Triangle", "Pentagon"],
        correct: 3,
        explanation: "A pentagon is the correct answer."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Pentagon", "Triangle", "Circle", "Square"],
        correct: 1,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "4", "3", "2"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ●",
        options: ["10", "9", "12", "11"],
        correct: 0,
        explanation: "There are 10 items."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["4", "2", "3", "2"],
        correct: 1,
        explanation: "The next element is 2."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "Which item is smaller?",
        options: ["Large Circle", "Same amount", "Tiny Circle", "Tiny Circle"],
        correct: 2,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Circle", "Square", "Pentagon", "Triangle"],
        correct: 3,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Square", "Triangle", "Circle", "Hexagon"],
        correct: 3,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["B", "D", "C", "A"],
        correct: 0,
        explanation: "The next element is B."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "4", "2", "2"],
        correct: 2,
        explanation: "The next element is 2."
    },
    {
        question: "Which shape is a pentagon?",
        options: ["Square", "Triangle", "Pentagon", "Circle"],
        correct: 2,
        explanation: "A pentagon is the correct answer."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["■", "●", "▲", "▲"],
        correct: 2,
        explanation: "The next element is ▲."
    },
    {
        question: "Which group has fewer?",
        options: ["3 books", "Same amount", "8 books", "3 books"],
        correct: 0,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["A", "C", "D", "B"],
        correct: 3,
        explanation: "The next element is B."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["20", "17", "19", "18"],
        correct: 3,
        explanation: "There are 18 items."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Square", "Triangle", "Pentagon", "Circle"],
        correct: 1,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Triangle", "Hexagon", "Square", "Circle"],
        correct: 1,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["14", "12", "15", "13"],
        correct: 3,
        explanation: "There are 13 items."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["A", "D", "B", "C"],
        correct: 2,
        explanation: "The next element is B."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Yellow", "Blue", "Red", "Green"],
        correct: 1,
        explanation: "The next element is Blue."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "How many circles are shown? ● ● ●",
        options: ["2", "5", "4", "3"],
        correct: 3,
        explanation: "There are 3 items."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "Which group has fewer?",
        options: ["Same amount", "3 books", "8 books", "8 books"],
        correct: 1,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ●",
        options: ["12", "10", "11", "13"],
        correct: 2,
        explanation: "There are 11 items."
    },
    {
        question: "Which group has more?",
        options: ["Same amount", "5 apples", "2 apples", "2 apples"],
        correct: 1,
        explanation: "The answer is 5 apples."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which item is smaller?",
        options: ["Tiny Circle", "Same amount", "Large Circle", "Tiny Circle"],
        correct: 0,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["15", "14", "16", "13"],
        correct: 1,
        explanation: "There are 14 items."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["D", "A", "C", "B"],
        correct: 3,
        explanation: "The next element is B."
    },
    {
        question: "Which shape is a square?",
        options: ["Circle", "Triangle", "Pentagon", "Square"],
        correct: 3,
        explanation: "A square is the correct answer."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Yellow", "Green", "Blue", "Red"],
        correct: 2,
        explanation: "The next element is Blue."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Rectangle", "Pentagon", "Circle", "Triangle"],
        correct: 0,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "Which group has fewer?",
        options: ["Same amount", "3 books", "3 books", "8 books"],
        correct: 1,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["20", "17", "18", "19"],
        correct: 2,
        explanation: "There are 18 items."
    },
    {
        question: "Which group has more?",
        options: ["Same amount", "2 apples", "5 apples", "5 apples"],
        correct: 2,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which group has more?",
        options: ["5 apples", "Same amount", "5 apples", "2 apples"],
        correct: 0,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["18", "17", "19", "20"],
        correct: 0,
        explanation: "There are 18 items."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["■", "●", "▲", "▲"],
        correct: 2,
        explanation: "The next element is ▲."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Circle", "Triangle", "Pentagon", "Square"],
        correct: 1,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["▲", "●", "■", "▲"],
        correct: 0,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["D", "A", "B", "C"],
        correct: 2,
        explanation: "The next element is B."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which group has more?",
        options: ["5 apples", "Same amount", "2 apples", "2 apples"],
        correct: 0,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Circle", "Pentagon", "Rectangle", "Triangle"],
        correct: 2,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Blue", "Yellow", "Red", "Green"],
        correct: 0,
        explanation: "The next element is Blue."
    },
    {
        question: "Which item is bigger?",
        options: ["Same amount", "Small Star", "Big Star", "Small Star"],
        correct: 2,
        explanation: "The answer is Big Star."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Pentagon", "Square", "Triangle", "Circle"],
        correct: 2,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Triangle", "Circle", "Square", "Hexagon"],
        correct: 3,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Blue", "Green", "Yellow", "Red"],
        correct: 0,
        explanation: "The next element is Blue."
    },
    {
        question: "Which group has fewer?",
        options: ["8 books", "Same amount", "8 books", "3 books"],
        correct: 3,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["C", "D", "A", "B"],
        correct: 3,
        explanation: "The next element is B."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Red", "Yellow", "Blue", "Green"],
        correct: 2,
        explanation: "The next element is Blue."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["20", "22", "19", "21"],
        correct: 0,
        explanation: "There are 20 items."
    },
    {
        question: "Which group has more?",
        options: ["Same amount", "2 apples", "5 apples", "5 apples"],
        correct: 2,
        explanation: "The answer is 5 apples."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["19", "21", "20", "22"],
        correct: 2,
        explanation: "There are 20 items."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["B", "A", "D", "C"],
        correct: 0,
        explanation: "The next element is B."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["22", "21", "19", "20"],
        correct: 3,
        explanation: "There are 20 items."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["14", "13", "15", "16"],
        correct: 0,
        explanation: "There are 14 items."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Pentagon", "Rectangle", "Triangle", "Circle"],
        correct: 1,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which group has fewer?",
        options: ["Same amount", "8 books", "3 books", "3 books"],
        correct: 2,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ●",
        options: ["7", "8", "9", "10"],
        correct: 1,
        explanation: "There are 8 items."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["■", "●", "▲", "▲"],
        correct: 2,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "4", "2", "3"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "Which shape is a circle?",
        options: ["Circle", "Triangle", "Square", "Pentagon"],
        correct: 0,
        explanation: "A circle is the correct answer."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["B", "D", "A", "C"],
        correct: 0,
        explanation: "The next element is B."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Hexagon", "Triangle", "Circle", "Square"],
        correct: 0,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "4", "2", "2"],
        correct: 2,
        explanation: "The next element is 2."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Pentagon", "Triangle", "Square", "Circle"],
        correct: 1,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["15", "14", "13", "16"],
        correct: 1,
        explanation: "There are 14 items."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["●", "▲", "■", "▲"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "4", "2", "3"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["4", "3", "2", "2"],
        correct: 2,
        explanation: "The next element is 2."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["C", "A", "D", "B"],
        correct: 3,
        explanation: "The next element is B."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Circle", "Triangle", "Pentagon", "Rectangle"],
        correct: 3,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Circle", "Pentagon", "Rectangle", "Triangle"],
        correct: 2,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Circle", "Triangle", "Rectangle", "Pentagon"],
        correct: 2,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which item is smaller?",
        options: ["Large Circle", "Tiny Circle", "Large Circle", "Same amount"],
        correct: 1,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ●",
        options: ["9", "10", "12", "11"],
        correct: 1,
        explanation: "There are 10 items."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "4", "2", "2"],
        correct: 2,
        explanation: "The next element is 2."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Triangle", "Circle", "Square", "Hexagon"],
        correct: 3,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ●",
        options: ["10", "11", "8", "9"],
        correct: 3,
        explanation: "There are 9 items."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["C", "D", "B", "A"],
        correct: 2,
        explanation: "The next element is B."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ●",
        options: ["9", "11", "12", "10"],
        correct: 3,
        explanation: "There are 10 items."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["●", "▲", "▲", "■"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["20", "22", "19", "21"],
        correct: 0,
        explanation: "There are 20 items."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "2", "4", "2"],
        correct: 1,
        explanation: "The next element is 2."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ●",
        options: ["8", "9", "10", "7"],
        correct: 0,
        explanation: "There are 8 items."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["D", "A", "C", "B"],
        correct: 3,
        explanation: "The next element is B."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Pentagon", "Triangle", "Circle", "Rectangle"],
        correct: 3,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which item is smaller?",
        options: ["Tiny Circle", "Large Circle", "Large Circle", "Same amount"],
        correct: 0,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["19", "20", "17", "18"],
        correct: 3,
        explanation: "There are 18 items."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["D", "C", "B", "A"],
        correct: 2,
        explanation: "The next element is B."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["A", "B", "C", "D"],
        correct: 1,
        explanation: "The next element is B."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Square", "Triangle", "Circle", "Pentagon"],
        correct: 1,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["A", "B", "D", "C"],
        correct: 1,
        explanation: "The next element is B."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["18", "19", "17", "16"],
        correct: 2,
        explanation: "There are 17 items."
    },
    {
        question: "Which shape is a square?",
        options: ["Square", "Pentagon", "Triangle", "Circle"],
        correct: 0,
        explanation: "A square is the correct answer."
    },
    {
        question: "Which group has more?",
        options: ["5 apples", "2 apples", "Same amount", "2 apples"],
        correct: 0,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["▲", "●", "▲", "■"],
        correct: 0,
        explanation: "The next element is ▲."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which group has more?",
        options: ["2 apples", "2 apples", "Same amount", "5 apples"],
        correct: 3,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["▲", "▲", "■", "●"],
        correct: 0,
        explanation: "The next element is ▲."
    },
    {
        question: "Which shape is a square?",
        options: ["Circle", "Pentagon", "Triangle", "Square"],
        correct: 3,
        explanation: "A square is the correct answer."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["▲", "▲", "■", "●"],
        correct: 0,
        explanation: "The next element is ▲."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ●",
        options: ["6", "8", "7", "5"],
        correct: 0,
        explanation: "There are 6 items."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which shape is a pentagon?",
        options: ["Pentagon", "Triangle", "Circle", "Square"],
        correct: 0,
        explanation: "A pentagon is the correct answer."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ●",
        options: ["13", "12", "11", "10"],
        correct: 2,
        explanation: "There are 11 items."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ●",
        options: ["5", "7", "6", "8"],
        correct: 2,
        explanation: "There are 6 items."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which item is smaller?",
        options: ["Tiny Circle", "Same amount", "Large Circle", "Large Circle"],
        correct: 0,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["13", "12", "14", "15"],
        correct: 0,
        explanation: "There are 13 items."
    },
    {
        question: "Which shape is a triangle?",
        options: ["Pentagon", "Triangle", "Square", "Circle"],
        correct: 1,
        explanation: "A triangle is the correct answer."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which item is bigger?",
        options: ["Big Star", "Same amount", "Big Star", "Small Star"],
        correct: 0,
        explanation: "The answer is Big Star."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["■", "▲", "▲", "●"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Circle", "Triangle", "Hexagon", "Square"],
        correct: 2,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["D", "B", "A", "C"],
        correct: 1,
        explanation: "The next element is B."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "4", "2", "2"],
        correct: 2,
        explanation: "The next element is 2."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "Which group has fewer?",
        options: ["8 books", "Same amount", "8 books", "3 books"],
        correct: 3,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which shape is a square?",
        options: ["Pentagon", "Circle", "Square", "Triangle"],
        correct: 2,
        explanation: "A square is the correct answer."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Rectangle", "Triangle", "Pentagon", "Circle"],
        correct: 0,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["A", "D", "C", "B"],
        correct: 3,
        explanation: "The next element is B."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Blue", "Green", "Red", "Yellow"],
        correct: 0,
        explanation: "The next element is Blue."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["4", "2", "2", "3"],
        correct: 1,
        explanation: "The next element is 2."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Triangle", "Pentagon", "Rectangle", "Circle"],
        correct: 2,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ●",
        options: ["10", "8", "11", "9"],
        correct: 3,
        explanation: "There are 9 items."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["20", "22", "21", "19"],
        correct: 0,
        explanation: "There are 20 items."
    },
    {
        question: "Which item is bigger?",
        options: ["Small Star", "Big Star", "Same amount", "Small Star"],
        correct: 1,
        explanation: "The answer is Big Star."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ●",
        options: ["8", "5", "7", "6"],
        correct: 3,
        explanation: "There are 6 items."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which shape is a pentagon?",
        options: ["Triangle", "Pentagon", "Circle", "Square"],
        correct: 1,
        explanation: "A pentagon is the correct answer."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["▲", "■", "▲", "●"],
        correct: 0,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["A", "C", "B", "D"],
        correct: 2,
        explanation: "The next element is B."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which group has more?",
        options: ["2 apples", "5 apples", "Same amount", "2 apples"],
        correct: 1,
        explanation: "The answer is 5 apples."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ●",
        options: ["7", "8", "6", "5"],
        correct: 2,
        explanation: "There are 6 items."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which group has more?",
        options: ["5 apples", "2 apples", "Same amount", "5 apples"],
        correct: 0,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which shape is on top?",
        options: ["Circle on top of Square", "Square on top of Circle", "Triangle on side", "All at same level"],
        correct: 0,
        explanation: "The answer is Circle on top of Square."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which group has fewer?",
        options: ["Same amount", "3 books", "3 books", "8 books"],
        correct: 1,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "2", "4", "3"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "4", "2", "2"],
        correct: 2,
        explanation: "The next element is 2."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ●",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "There are 9 items."
    },
    {
        question: "Which shape is a hexagon?",
        options: ["Square", "Hexagon", "Triangle", "Circle"],
        correct: 1,
        explanation: "A hexagon is the correct answer."
    },
    {
        question: "Which item is smaller?",
        options: ["Same amount", "Large Circle", "Tiny Circle", "Tiny Circle"],
        correct: 2,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["13", "12", "14", "11"],
        correct: 1,
        explanation: "There are 12 items."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "4", "2", "2"],
        correct: 2,
        explanation: "The next element is 2."
    },
    {
        question: "Which doesn't fit?",
        options: ["Cat", "Dog", "Bird", "Car"],
        correct: 3,
        explanation: "Car is different from the others."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Blue", "Green", "Red", "Yellow"],
        correct: 0,
        explanation: "The next element is Blue."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which item is smaller?",
        options: ["Tiny Circle", "Large Circle", "Same amount", "Large Circle"],
        correct: 0,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["B", "D", "C", "A"],
        correct: 0,
        explanation: "The next element is B."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["21", "19", "22", "20"],
        correct: 3,
        explanation: "There are 20 items."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["C", "B", "A", "D"],
        correct: 1,
        explanation: "The next element is B."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["●", "▲", "▲", "■"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which group has fewer?",
        options: ["3 books", "Same amount", "8 books", "8 books"],
        correct: 0,
        explanation: "The answer is 3 books."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["21", "19", "20", "22"],
        correct: 2,
        explanation: "There are 20 items."
    },
    {
        question: "Which group has more?",
        options: ["2 apples", "5 apples", "Same amount", "5 apples"],
        correct: 1,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["D", "B", "C", "A"],
        correct: 1,
        explanation: "The next element is B."
    },
    {
        question: "How many circles are shown? ● ● ● ●",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "There are 4 items."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["4", "2", "3", "2"],
        correct: 1,
        explanation: "The next element is 2."
    },
    {
        question: "Which shape is inside the box?",
        options: ["Circle inside box", "Circle next to box", "Circle above box", "Circle below box"],
        correct: 0,
        explanation: "The answer is Circle inside box."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "4", "3", "2"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "How many circles are shown? ● ● ● ●",
        options: ["6", "5", "4", "3"],
        correct: 2,
        explanation: "There are 4 items."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "Which doesn't belong?",
        options: ["Circle", "Square", "Triangle", "2"],
        correct: 3,
        explanation: "2 is different from the others."
    },
    {
        question: "Which shape is a circle?",
        options: ["Circle", "Square", "Triangle", "Pentagon"],
        correct: 0,
        explanation: "A circle is the correct answer."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Yellow", "Blue", "Red", "Green"],
        correct: 1,
        explanation: "The next element is Blue."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["■", "▲", "●", "▲"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["●", "▲", "■", "▲"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "Which group has more?",
        options: ["5 apples", "2 apples", "2 apples", "Same amount"],
        correct: 0,
        explanation: "The answer is 5 apples."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["14", "16", "15", "17"],
        correct: 2,
        explanation: "There are 15 items."
    },
    {
        question: "Which shape is a square?",
        options: ["Circle", "Square", "Pentagon", "Triangle"],
        correct: 1,
        explanation: "A square is the correct answer."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which item is smaller?",
        options: ["Large Circle", "Large Circle", "Tiny Circle", "Same amount"],
        correct: 2,
        explanation: "The answer is Tiny Circle."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Triangle", "Pentagon", "Rectangle", "Circle"],
        correct: 2,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which group has fewer?",
        options: ["8 books", "8 books", "3 books", "Same amount"],
        correct: 2,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which set is complete?",
        options: ["Missing one", "Has all four", "Missing two", "Has five"],
        correct: 1,
        explanation: "Has all four is correct."
    },
    {
        question: "What comes next in this pattern? A-B-A-B-A-B-A-___",
        options: ["B", "A", "C", "D"],
        correct: 0,
        explanation: "The next element is B."
    },
    {
        question: "Which item is bigger?",
        options: ["Big Star", "Small Star", "Big Star", "Same amount"],
        correct: 0,
        explanation: "The answer is Big Star."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ●",
        options: ["10", "13", "12", "11"],
        correct: 3,
        explanation: "There are 11 items."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "4", "2", "3"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "Which is different?",
        options: ["Red", "Blue", "Yellow", "5"],
        correct: 3,
        explanation: "5 is different from the others."
    },
    {
        question: "Which is in the middle?",
        options: ["Left item", "Right item", "Middle item", "All same"],
        correct: 2,
        explanation: "The answer is Middle item."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 2,
        explanation: "Correct match found."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "Which group has fewer?",
        options: ["8 books", "8 books", "Same amount", "3 books"],
        correct: 3,
        explanation: "The answer is 3 books."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? Red-Blue-Red-Blue-Red-___",
        options: ["Green", "Red", "Yellow", "Blue"],
        correct: 3,
        explanation: "The next element is Blue."
    },
    {
        question: "Which shape is a square?",
        options: ["Square", "Pentagon", "Triangle", "Circle"],
        correct: 0,
        explanation: "A square is the correct answer."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Triangle", "Circle", "Rectangle", "Pentagon"],
        correct: 2,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["11", "14", "12", "13"],
        correct: 2,
        explanation: "There are 12 items."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["▲", "■", "▲", "●"],
        correct: 0,
        explanation: "The next element is ▲."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["3", "2", "2", "4"],
        correct: 1,
        explanation: "The next element is 2."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Rectangle", "Triangle", "Circle", "Pentagon"],
        correct: 0,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "Which pair matches?",
        options: ["Red-Blue", "Blue-Red", "Red-Red", "Blue-Blue"],
        correct: 0,
        explanation: "Correct match found."
    },
    {
        question: "How many circles are shown? ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ● ●",
        options: ["17", "19", "16", "18"],
        correct: 0,
        explanation: "There are 17 items."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which two are the same?",
        options: ["★", "★", "☆", "✶"],
        correct: 3,
        explanation: "Correct match found."
    },
    {
        question: "Which group has more?",
        options: ["Same amount", "2 apples", "5 apples", "5 apples"],
        correct: 2,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["▲", "▲", "●", "■"],
        correct: 0,
        explanation: "The next element is ▲."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "Which one is different?",
        options: ["Circle", "Circle", "Square", "Circle"],
        correct: 1,
        explanation: "Correct match found."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "What comes next in this pattern? 1-2-3-1-2-3-1-___",
        options: ["2", "4", "2", "3"],
        correct: 0,
        explanation: "The next element is 2."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "If this shape is rotated 90 degrees, which way does it face?",
        options: ["Up", "Down", "Left", "Right"],
        correct: 3,
        explanation: "Answer is Right."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "What comes next? ▲ ● ■ ▲ ● ___",
        options: ["■", "▲", "●", "◆"],
        correct: 0,
        explanation: "Following the pattern, ■ comes next."
    },
    {
        question: "Which group has more?",
        options: ["Same amount", "2 apples", "2 apples", "5 apples"],
        correct: 3,
        explanation: "The answer is 5 apples."
    },
    {
        question: "Which shape is a rectangle?",
        options: ["Circle", "Pentagon", "Rectangle", "Triangle"],
        correct: 2,
        explanation: "A rectangle is the correct answer."
    },
    {
        question: "What comes next in this pattern? ●-■-▲-●-■-▲-●-■-___",
        options: ["●", "▲", "■", "▲"],
        correct: 1,
        explanation: "The next element is ▲."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "Which comes before?",
        options: ["A before B", "B before A", "C before A", "All same"],
        correct: 0,
        explanation: "The answer is A before B."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    },
    {
        question: "Which group is organized correctly?",
        options: ["Random order", "Sorted small to large", "Sorted large to small", "All mixed"],
        correct: 1,
        explanation: "Sorted small to large is correct."
    },
    {
        question: "What completes the sequence? 🔴 🔵 🟢 🔴 🔵 ___",
        options: ["🟢", "🔴", "🟡", "⬛"],
        correct: 0,
        explanation: "Following the pattern, 🟢 comes next."
    },
    {
        question: "What is the mirror image of this?",
        options: ["Original", "Flipped", "Rotated", "Inverted"],
        correct: 1,
        explanation: "Answer is Flipped."
    }
];
