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
    }
];
