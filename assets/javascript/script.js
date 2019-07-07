
    // Create an array that list out all of the options (a-z). 

   let characters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

   // Creating variles to hold the number of wins, losses, guesses-left, user-guesses. They start at 0.

   let wins = 0;  
   let losses = 0; 
   let guessesLeft = 9; 
   let guessesAttempted = []; 
   let userGuess = document.onkeyup; 


    // Create variables that hold references to the places in the HTML where we want to display things.
    
    let wins_text = document.getElementById('wins_text'); 
    let losses_text = document.getElementById('losses_text');
    let guessesLeft_text = document.getElementById('guesses_left'); 
    let userGuesses_text = document.getElementById('user_guesses'); 
    let guesses_attempted = document.getElementById('gusses_attempted'); 
 
    // targeting the HTML element and updating guesses left

    document.onkeyup = function(event) {
    
    userGuess = event.key.toLowerCase(); 

    // Generate a random number for computer

    let randPicker = characters[Math.floor(Math.random() * characters.length)];
    
    // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    // # of times the user has guessed the letter correctly)

    if (userGuess == randPicker) {
      wins++; 
      guessesLeft = 9; 
      wins_text.innerHTML = wins;
      guessesAttempted = []
      guesses_attempted.innerHTML = [];
    }
   // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

   // Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)


    else if ( guessesLeft == 0) {
      losses++;
      losses_text.innerHTML = losses; 
      guessesLeft = 9; 
      guessesLeft_text.innerHTML = 9; 
      guessesAttempted = []
      guesses_attempted.innerHTML = []; 
  }

  // Guesses Left: (# of guesses left. This will update)

    else if (userGuess !== randPicker) {
      guessesLeft--; 
      guessesLeft_text.innerHTML = guessesLeft;
      let usersAttemptedGuesses = guessesAttempted.push(userGuess);
      guesses_attempted.innerHTML = guessesAttempted
    }

  

  }; 