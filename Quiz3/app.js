const functionGenerator = (strInput, intInput) => {
  try {
    if (typeof strInput != 'string') {
      return console.log(strInput + ' not a String');
    }
    if (!Number.isInteger(intInput)) {
      return console.log(intInput + ' not an Integer');
    } else {
      const strSequence = strInput.slice();
      const timetoExpo = intInput;
      const numtolog = 2;
      for (
        let value = { strSequence, timetoExpo, numtolog };
        value.strSequence.length > 0 || value.timetoExpo > 0;

      ) {
        if (value.strSequence.length > 0) {
          console.log('gen1: ' + value.strSequence[0]);
          const rest = value.strSequence.slice(1);
          value.strSequence = rest;
        }
        if (value.timetoExpo > 0) {
          newNumbertolog = value.numtolog * 2;
          console.log('gen2: ' + newNumbertolog);
          value.numtolog = newNumbertolog;
          value.timetoExpo--;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// functionGenerator('abcde', 3);
functionGenerator('mareianda', 15);
// functionGenerator('abcde', 3);
// functionGenerator('abcde', 3);
