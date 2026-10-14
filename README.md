
# IT313 Laboratory 4: Components and JSX

## Problem

The Student Roster Card Renderer displays enrolled IT313 students using reusable React Native components.

Each card displays the student's name, course, and units. Students with a full load also display a Full Load label.

## Component Structure

- `StudentRoster`: Stores the student data, calculates the student count, and renders the list using `map()`.
- `StudentCard`: Receives student information through props and displays it using JSX.
- `StudentCardProps`: Defines the properties accepted by each card.
- `Student`: Defines the structure of each student object.

## Concepts Demonstrated

- Functional components
- Props and destructuring
- JSX expressions and template literals
- Conditional rendering using `&&`
- Rendering lists using `map()`
- Stable keys using student IDs
- State using `useState`
- Reversing a roster and comparing key behavior

## How to Run

1. Install dependencies:

   `npm install`

2. Start Expo:

   `npx expo start`

3. Open the app using Expo Go or an emulator.
