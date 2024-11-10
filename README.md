### **Name:-** TIRUMALA RATNAKAR

### **COMPANY:-** CODTECH IT SOLUTION

### **ID:-** CT12DS2478

### **DOMAIN:-** FRONTEND

### **DURATION:-** SEPTEMBER 20th,2024 to NOVEMBER 20th,2024

### **Mentor:-** Neel Santhosh Kumaar

# Project Name : Interactive Quiz Application

This code is for a simple interactive quiz application using HTML, CSS, and JavaScript. Here’s an overview of its structure and functionality:

1. **HTML Structure**:
   - The main container includes:
     - A **title** ("Quiz App") displayed at the top.
     - A **quiz area** (`div` with `id="quiz"`) where questions and options are dynamically populated by JavaScript.
     - A **result area** (`div` with `id="result"`) where the user’s score is shown after submitting answers.
   - **Buttons**: 
     - **Submit** button to submit answers and calculate the score.
     - **Retry** button (initially hidden) to reset the quiz for another attempt.
     - **Show Answer** button (initially hidden) to display correct answers after submission.

2. **CSS and JavaScript Integration**:
   - External **CSS file** (`styles.css`) is linked in the `<head>` for styling.
   - The JavaScript file (`script.js`) is linked at the end of the body, responsible for generating questions, handling user interactions, calculating scores, and controlling the visibility of buttons.

3. **Functionality**:
   - JavaScript controls the quiz flow:
     - **Generating Questions**: Displays questions and options within the `quiz` div.
     - **Score Calculation**: On clicking **Submit**, JavaScript evaluates the selected answers and displays the score in the `result` div.
     - **Retry and Show Answer** buttons**: After submitting, these buttons allow users to either retry the quiz or view the correct answers.

This setup provides a basic, user-friendly quiz interface that allows users to answer questions, see their score, and retry or review correct answers.



### This JavaScript code achieves the intended interactive quiz behavior:

Questions and Options are displayed and shuffled.
Score Calculation and Result Display are managed after all questions.
Retry and Show Answers functions allow the user to review the quiz after completing it.
This will work seamlessly with the HTML structure provided.
