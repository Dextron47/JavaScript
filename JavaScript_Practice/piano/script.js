// script.js
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key.dataset.note));
});

function playNote(note) {
  const audio = new Audio(`sounds/${note}.mp3`);
  audio.play();
}


import Soundfont from 'soundfont-player';

Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano')
  .then(piano => {
    document.querySelector('.key').addEventListener('mousedown', () => {
      piano.play('C4');
    });
  });

  import Soundfont from 'soundfont-player';

Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano')
  .then(piano => {
    document.querySelector('.key').addEventListener('mousedown', () => {
      piano.play('C4');
    });
  });