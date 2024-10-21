// This file contains two functions: writeCards and countDown

// Function to generate thank you messages for gifts
function writeCards(names, event) {
    // Initialize an empty array to store the thank you messages
    let messages = [];
    
    // Loop through each name in the names array
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message for each person and add it to the messages array
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    // Return the array of thank you messages
    return messages;
}
  
// Function to count down from a given number to zero
function countDown(number){
    // Continue looping while the number is greater than or equal to zero
    while (number >= 0){
        // Print the current number to the console
        console.log(number);
        // Decrease the number by 1
        number--;
    }
}
