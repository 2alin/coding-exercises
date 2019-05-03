import challObj from './challenges.json';

const root = document.getElementById('root');
const ChallList = document.createElement('ul');

challObj.challenges.forEach( chall => {
  const ListItem = document.createElement('li');
  ListItem.textContent = chall;
  ChallList.appendChild(ListItem);
})

root.appendChild(ChallList);


