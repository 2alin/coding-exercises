const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'challenges');
const challObj = { challenges: [] };

fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    throw Error(`${directoryPath} doesn't exist`);
  }
  // push only directory names to the list
  files.forEach(file => {
    if (file.isDirectory()) {
      challObj.challenges.push(file.name);
    }
  });
  // creating a json index qith a names list of all challenges
  const json = JSON.stringify(challObj);
  fs.writeFile(path.join(__dirname, 'challenges.json'), json, err => {
    if (err) {
      throw Error('There was a problem writing the json index');
    }
  });
});
