const questions = [
  {
    category: "Programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Markup Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Leveler",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correctAnswer: 3,
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style System",
          "Colorful Style Syntax",
        ],
        correctAnswer: 0,
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<scripting>"],
        correctAnswer: 2,
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        correctAnswer: 0,
      },
      {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "React", "Laravel", "Flask"],
        correctAnswer: 1,
      },
      {
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Sequential Query Language",
          "Styled Question Language",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "style", "class", "styles"],
        correctAnswer: 1,
      },
      {
        question:
          "Which method is used to add an element at the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct syntax to create a function in JavaScript?",
        options: [
          "function myFunction() {}",
          "def myFunction() {}",
          "create function myFunction() {}",
          "function:myFunction() {}",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which programming language is primarily used for iOS app development?",
        options: ["Swift", "Kotlin", "Java", "Python"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a programming paradigm?",
        options: ["Object-Oriented", "Functional", "Procedural", "Relational"],
        correctAnswer: 3,
      },
      {
        question: "What is the correct way to write a comment in CSS?",
        options: [
          "/* Comment */",
          "// Comment",
          "# Comment",
          "<!-- Comment -->",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "===", "=", "!="],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element is used for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        correctAnswer: 2,
      },
      {
        question:
          "Which built-in method removes the last element from an array in JavaScript?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: 0,
      },
      {
        question: "In Python, which keyword is used for function definition?",
        options: ["function", "def", "fun", "define"],
        correctAnswer: 1,
      },
      {
        question:
          "Which of the following is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which HTML tag is used to create a table?",
        options: ["<table>", "<tab>", "<tr>", "<td>"],
        correctAnswer: 0,
      },
      {
        question: "Which symbol is used for ID selector in CSS?",
        options: ["#", ".", "*", "&"],
        correctAnswer: 0,
      },
      {
        question: "What does JSON stand for?",
        options: [
          "JavaScript Object Notation",
          "JavaScript Oriented Notation",
          "Java Serialized Object Notation",
          "JavaScript Original Name",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which method converts a JSON string to a JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.object()",
          "JSON.convert()",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which keyword is used to handle exceptions in Java?",
        options: ["try", "catch", "throw", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which of the following is a backend programming language?",
        options: ["PHP", "HTML", "CSS", "Bootstrap"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "Geography",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: 0,
      },
      {
        question: "Which continent is Egypt in?",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctAnswer: 2,
      },
      {
        question: "Mount Everest is located in which mountain range?",
        options: ["Andes", "Rockies", "Himalayas", "Alps"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the largest population?",
        options: ["India", "China", "USA", "Russia"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2,
      },
      {
        question: "The river Nile flows into which sea?",
        options: ["Red Sea", "Mediterranean Sea", "Arabian Sea", "Black Sea"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "Thailand", "South Korea"],
        correctAnswer: 0,
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
        correctAnswer: 0,
      },
      {
        question: "Which US state is known as the 'Sunshine State'?",
        options: ["California", "Florida", "Texas", "Arizona"],
        correctAnswer: 1,
      },
      {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "South America", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctAnswer: 1,
      },
      {
        question: "Which country has the most natural lakes?",
        options: ["Canada", "USA", "Russia", "Brazil"],
        correctAnswer: 0,
      },
      {
        question: "Which European country is famous for its fjords?",
        options: ["Norway", "Sweden", "Finland", "Denmark"],
        correctAnswer: 0,
      },
      {
        question: "Which city is known as the 'Big Apple'?",
        options: ["Los Angeles", "New York", "Chicago", "Miami"],
        correctAnswer: 1,
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the most time zones?",
        options: ["USA", "Russia", "China", "Canada"],
        correctAnswer: 1,
      },
      {
        question: "Which African country was formerly known as Abyssinia?",
        options: ["Ethiopia", "Sudan", "Kenya", "Somalia"],
        correctAnswer: 0,
      },
      {
        question: "Which country is home to the city of Timbuktu?",
        options: ["Mali", "Algeria", "Nigeria", "Sudan"],
        correctAnswer: 0,
      },
      {
        question: "Which mountain is the tallest in Africa?",
        options: [
          "Mount Kilimanjaro",
          "Mount Kenya",
          "Atlas Mountains",
          "Drakensberg",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which country is famous for its tulips and windmills?",
        options: ["Belgium", "Netherlands", "Denmark", "Germany"],
        correctAnswer: 1,
      },
      {
        question: "Which river flows through Paris?",
        options: ["Thames", "Seine", "Danube", "Rhine"],
        correctAnswer: 1,
      },
      {
        question: "Which US state is known as the 'Golden State'?",
        options: ["California", "Nevada", "Texas", "Alaska"],
        correctAnswer: 0,
      },
      {
        question: "Which country has the capital city named Oslo?",
        options: ["Sweden", "Norway", "Denmark", "Finland"],
        correctAnswer: 1,
      },
      {
        question: "Which ocean touches the west coast of Africa?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctAnswer: 0,
      },
      {
        question: "Which European capital city is famous for the Eiffel Tower?",
        options: ["London", "Paris", "Rome", "Berlin"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "Mathematics",
    questions: [
      {
        question: "What is 7 + 8?",
        options: ["14", "15", "16", "17"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 * 12?",
        options: ["144", "121", "142", "132"],
        correctAnswer: 0,
      },
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
      },
      {
        question: "What is 15 - 7?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is 9 / 3?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
      },
      {
        question: "What is 5 squared?",
        options: ["10", "20", "25", "30"],
        correctAnswer: 2,
      },
      {
        question: "What is 2 to the power of 5?",
        options: ["8", "16", "32", "64"],
        correctAnswer: 2,
      },
      {
        question: "What is 100 ÷ 25?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 3,
      },
      {
        question: "What is the value of Pi (approx)?",
        options: ["3.12", "3.14", "3.15", "3.16"],
        correctAnswer: 1,
      },
      {
        question: "What is 0 factorial (0!)?",
        options: ["0", "1", "Undefined", "2"],
        correctAnswer: 1,
      },
      {
        question: "What is 7 * 6?",
        options: ["42", "36", "40", "48"],
        correctAnswer: 0,
      },
      {
        question: "What is 49 ÷ 7?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
      },
      {
        question: "What is the cube root of 27?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
      },
      {
        question: "What is 11 + 13?",
        options: ["23", "24", "25", "26"],
        correctAnswer: 3,
      },
      {
        question: "What is 20% of 200?",
        options: ["20", "30", "40", "50"],
        correctAnswer: 2,
      },
      {
        question: "What is 3 + 2 * 2?",
        options: ["7", "10", "8", "5"],
        correctAnswer: 0,
      },
      {
        question: "What is the next prime number after 7?",
        options: ["9", "10", "11", "13"],
        correctAnswer: 2,
      },
      {
        question: "What is the sum of angles in a triangle?",
        options: ["180°", "90°", "360°", "270°"],
        correctAnswer: 0,
      },
      {
        question: "What is 0.5 + 0.25?",
        options: ["0.75", "0.7", "0.8", "0.65"],
        correctAnswer: 0,
      },
      {
        question: "What is the area of a rectangle with length 5 and width 3?",
        options: ["8", "15", "10", "12"],
        correctAnswer: 1,
      },
      {
        question: "What is 2^3?",
        options: ["6", "8", "9", "7"],
        correctAnswer: 1,
      },
      {
        question: "What is 50 ÷ 5?",
        options: ["5", "10", "15", "20"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3π (approx)?",
        options: ["9.42", "9.14", "8.42", "9.24"],
        correctAnswer: 0,
      },
      {
        question: "What is the difference between 1000 and 275?",
        options: ["725", "7250", "72500", "7255"],
        correctAnswer: 0,
      },
      {
        question: "What is the product of 12 and 11?",
        options: ["121", "132", "142", "122"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor of 12 and 18?",
        options: ["2", "3", "6", "9"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "Entertainment",
    questions: [
      {
        question: "Who directed the movie 'Inception'?",
        options: [
          "Steven Spielberg",
          "Christopher Nolan",
          "James Cameron",
          "Quentin Tarantino",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which movie features the character Jack Sparrow?",
        options: [
          "Pirates of the Caribbean",
          "The Avengers",
          "Titanic",
          "Iron Man",
        ],
        correctAnswer: 0,
      },
      {
        question: "Who played Iron Man in Marvel movies?",
        options: [
          "Chris Evans",
          "Robert Downey Jr.",
          "Chris Hemsworth",
          "Mark Ruffalo",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which TV series is set in the fictional town of Hawkins?",
        options: ["Breaking Bad", "Stranger Things", "The Office", "Friends"],
        correctAnswer: 1,
      },
      {
        question: "Who sang 'Shape of You'?",
        options: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Bruno Mars"],
        correctAnswer: 0,
      },
      {
        question: "Which film won the Oscar for Best Picture in 2020?",
        options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
        correctAnswer: 2,
      },
      {
        question: "Who played Jack in Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Johnny Depp"],
        correctAnswer: 0,
      },
      {
        question: "Which singer is known as the 'Queen of Pop'?",
        options: ["Madonna", "Beyoncé", "Lady Gaga", "Taylor Swift"],
        correctAnswer: 0,
      },
      {
        question: "Which movie features the song 'Let It Go'?",
        options: ["Moana", "Frozen", "Tangled", "Coco"],
        correctAnswer: 1,
      },
      {
        question: "Who played Wolverine in X-Men movies?",
        options: [
          "Hugh Jackman",
          "Ryan Reynolds",
          "Chris Pratt",
          "Tom Holland",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which animated movie features a talking snowman named Olaf?",
        options: ["Frozen", "Shrek", "Tangled", "Moana"],
        correctAnswer: 0,
      },
      {
        question: "Which actor played the Joker in 'The Dark Knight'?",
        options: [
          "Joaquin Phoenix",
          "Heath Ledger",
          "Jared Leto",
          "Jack Nicholson",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which superhero is known as the 'Caped Crusader'?",
        options: ["Superman", "Batman", "Iron Man", "Spider-Man"],
        correctAnswer: 1,
      },
      {
        question: "Which singer is known for the album '1989'?",
        options: ["Taylor Swift", "Adele", "Katy Perry", "Rihanna"],
        correctAnswer: 0,
      },
      {
        question: "Which movie series features the character Frodo Baggins?",
        options: [
          "Harry Potter",
          "The Lord of the Rings",
          "The Hobbit",
          "Chronicles of Narnia",
        ],
        correctAnswer: 1,
      },
      {
        question: "Who played the role of Tony Stark?",
        options: [
          "Chris Hemsworth",
          "Robert Downey Jr.",
          "Chris Evans",
          "Mark Ruffalo",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the Stark family?",
        options: ["Game of Thrones", "Vikings", "Breaking Bad", "The Witcher"],
        correctAnswer: 0,
      },
      {
        question: "Who is the creator of the Star Wars franchise?",
        options: [
          "George Lucas",
          "Steven Spielberg",
          "James Cameron",
          "Ridley Scott",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which animated film features the character Simba?",
        options: ["The Lion King", "Aladdin", "Pocahontas", "Hercules"],
        correctAnswer: 0,
      },
      {
        question: "Which singer released the hit song 'Rolling in the Deep'?",
        options: ["Adele", "Beyoncé", "Katy Perry", "Rihanna"],
        correctAnswer: 0,
      },
      {
        question: "Which movie features a giant shark named Bruce?",
        options: ["Jaws", "Finding Nemo", "Shark Tale", "Deep Blue Sea"],
        correctAnswer: 0,
      },
      {
        question:
          "Which actor plays Spider-Man in the Marvel Cinematic Universe?",
        options: [
          "Tom Holland",
          "Andrew Garfield",
          "Tobey Maguire",
          "Chris Evans",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which TV series features the coffee shop Central Perk?",
        options: [
          "Friends",
          "How I Met Your Mother",
          "The Big Bang Theory",
          "Seinfeld",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which singer is known for the hit song 'Bad Romance'?",
        options: ["Lady Gaga", "Ariana Grande", "Katy Perry", "Beyoncé"],
        correctAnswer: 0,
      },
      {
        question: "Which movie features the character Harry Potter?",
        options: ["Percy Jackson", "The Hobbit", "Harry Potter", "Twilight"],
        correctAnswer: 2,
      },
    ],
  },
];
