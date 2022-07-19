const functionGenerator = (strInput, intInput) => {
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
        console.log(value.strSequence[0]);
        const rest = value.strSequence.slice(1);
        value.strSequence = rest;
      }
      if (value.timetoExpo > 0) {
        newNumbertolog = value.numtolog * 2;
        console.log(newNumbertolog);
        value.numtolog = newNumbertolog;
        value.timetoExpo--;
      }
    }
  }
};
functionGenerator('abcde', 3);
