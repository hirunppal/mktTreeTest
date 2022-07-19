const geomaticGenerator = (size) => {
  try {
    if (!Number.isInteger(size)) {
      return console.log('size must be int' + size + ' not an Integer');
    } else {
      const dash = '_';
      const Owo = 'O';
      const dashOrO = (param) => {
        if (param / 2 === size / 2) {
          return '0';
        }
      };

      for (let i = 0; i < size / 2; i++) {
        let line = '';

        // const dash = i / 2;

        for (let j = size / 2; j > i; j--) {
          const dashline = dash.repeat(j);
          line = line + dashline;
        }

        // console.log(i);
        const oline = Owo.repeat(i);
        console.log(line + oline);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
// geomaticGenerator(9);

function drawTree(height) {
  for (var i = 0; i < height / 2; i++) {
    var star = 'O';
    var space = '-';

    for (var j = 1; j <= i; j++) {
      star = star + 'O';
    }
    for (var k = height / 4; k > 0; k--) {
      spacesBefore = space.repeat(k);
      spacesafter = space.repeat(k);
      star = spacesBefore + star + spacesafter;
    }

    console.log(star);
  }
  for (var i = height / 2; i > 0; i--) {
    var star = 'O';
    var space = '-';

    for (var j = 1; j <= i; j++) {
      star = star + 'O';
    }

    for (var k = height / 4; k > 0; k--) {
      spacesBefore = space.repeat(k);
      spacesafter = space.repeat(k);
      star = spacesBefore + star + spacesafter;
    }
    console.log(star);
  }
}

// var levels = prompt('How many levels high should be the tree?');

// drawTree(9);

const geomaticGenerator2 = (size) => {
  try {
    if (!Number.isInteger(size)) {
      return console.log('size must be int' + size + ' not an Integer');
    } else {
      const dash = '_';
      const Owo = 'O';
      //for the hoe table
      for (let i = size; i > 0; i--) {
        let line = '';
        for (let lab = i / 2; lab >= 1; lab--) {
          const lineBefore = dash;
          // console.log(lineBefore);
          line = line + lineBefore;
        }
        for (let Omid = 1; Omid < size - i; Omid++) {
          const Oline = Owo;
          // console.log(Oline);
          line = line + Oline;
        }
        for (let laf = i / 2; laf >= 1; laf--) {
          const lineAfter = dash;
          // const lineAfter = dash.repeat(laf);
          line = line + lineAfter;
        }
        console.log(line);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
geomaticGenerator2(9);
