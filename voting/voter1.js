
let votes = {
    "Party A": 0,
    "Party B": 0,
    "Party C": 0,
    "Party D": 0
};


function handleVote(selectedParty) {
   
    votes[selectedParty]++;
    
    
    document.getElementById('selection').innerText = `You have selected: ${selectedParty}`;
    document.getElementById('selection').classList.remove('hidden'); 
    
    showResults();
}


function showResults() {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Clear any previous results

    // Loop through each party and display the vote count
    for (const party in votes) {
        // Create a new list item for each party
        const li = document.createElement('li');
        li.innerText = `${party}: ${votes[party]} votes`; 
        resultsList.appendChild(li); 
    }

   
    document.getElementById('results').classList.remove('hidden');
}


document.querySelectorAll('.party').forEach(button => {
    button.addEventListener('click', () => {
        const selectedParty = button.getAttribute('data-party'); 
        handleVote(selectedParty); // Call the function to handle the vote
    });
});