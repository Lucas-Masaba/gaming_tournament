const speakers = [
  {
    id: '0',
    image: './pics/zlaner.jpg',
    name: 'Zach Laner',
    job: 'Youtuber and back to back tournament champion',
    description: 'Zach Laner a.k.a zlaner is a skilled youtube streamer and has won multiple tournaments',
  },
  {
    id: '1',
    image: './pics/doc.jpg',
    name: 'Dr Disrepect',
    job: 'Youtube streamer',
    description: 'The Doc is a back to back 2x 90s champion.',
  },
  {
    id: '2',
    image: './pics/tim.jpg',
    name: 'Tim',
    job: 'Streamer',
    description: "Tim also know as 'tim the tatman' is an American streamer",
  },
  {
    id: '3',
    image: './pics/jason.jpg',
    name: 'Jason Blundell',
    job: 'Co-Studio Head and Game Director at Treyarch',
    description: 'Blundell started working on the Call of Duty franchise as a Producer for Call of Duty 3. He became Executive Producer on Call of Duty: Black Ops and was one the Campaign Design Directors for Call of Duty: Black Ops II.',
  },
  {
    id: '4',
    image: './pics/matthew.jpg',
    name: 'Matthew Lewis',
    job: 'Vice President of Product & GM, Call of Duty: Mobile · Activision',
    description: 'Lewis has been working for activision for a while now and has been appointed to lead the call of duty mobile team',
  },
  {
    id: '5',
    image: './pics/amos.jpg.crdownload',
    name: 'Amos Hodge',
    job: 'Director of call of duty warzone',
    description: 'One of the best battle royales ever made, Amos directs warzone and is the game to be played at this tournament',
  },

];
const createSpeaker = () => {
  const addSpeaker = document.querySelector('#guests');
  speakers.forEach((speaker) => {
    addSpeaker.insertAdjacentHTML('beforeend',
      `
      <li id="0" class="item">
          <div class="guest_img_div"><img class="guest_img" src="${speaker.image}" alt=""></div>
          <div class="guest_paragraphs">
            <p class="name">${speaker.name}</p>
            <p class="work">${speaker.job}</p>
            <p class="work_description">${speaker.description}</p>
          </div>
        </li>
    `);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  createSpeaker();
});