//Prediction: The Murderer is Miss Scarlet, this is because we aren't changing the const scenario or any of the informtion within the code.
//

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);