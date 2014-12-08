window.AudioContext = window.AudioContext || window.webkitAudioContext;

function SoundManager() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  // this.context = new AudioContext();
  this.context = new AudioContext();
  this.oscillator = this.context.createOscillator();
  this.gain = this.context.createGain();

  this.oscillator.type = 'sine';
  this.oscillator.start(0);
  this.gain.gain.value = 0;
  this.oscillator.connect(this.gain);
  this.gain.connect(this.context.destination);

  this.o = this.context.createOscillator();
  this.g = this.context.createGain();
  this.song = 0;

  this.o.type = 'triangle';
  this.g.gain.value = 0;
  this.o.connect(this.g);
  this.g.connect(this.context.destination);
  this.o.start(0);

  this.lastStep = SoundManager.step;

  this.beep = this.context.createOscillator();
  this.beepGain = this.context.createGain();
  this.beep.connect(this.beepGain);
  this.beepGain.connect(this.context.destination);
  this.beepGain.gain.value = 0;
  this.beep.frequency.value = 1000;
  this.beep.start(0);

  this.start = function() {
    this.returnValue = setInterval(function() {
      SoundManager.step++;
      if (SoundManager.step >= 8) {
        SoundManager.step = 0;
      }
    }, 1000/8);
  }

  this.background = function() {
    this.o.frequency.value = SoundManager.album[this.song].freq[SoundManager.step];
    if (SoundManager.album[this.song].dur[SoundManager.step]) {
      this.g.gain.value = 0.3;
    }
    else {
      this.g.gain.value = 0;
    }
    if (this.lastStep != SoundManager.step) {
      if (this.beepGain.gain.value > 0) {
        this.beepGain.gain.value *= 0.1;
      }
      this.lastStep = SoundManager.step;
    }
  }

  this.stop = function() {
    clearInterval(this.returnValue);
  }

  this.play = function() {
    this.gain.gain.value = 0.5;
  }

  this.pause = function() {
    this.gain.gain.value = 0;
  }

  this.setFrequency = function(frequency) {
    this.oscillator.frequency.value = SoundManager.freqs[frequency];
  }

  this.alert = function(kind) {
    console.log(kind);
    this.beep.type='sine';
    this.beep.frequency.value = 1000;
    if (kind == 'dead') {
      this.beep.frequency.value = 55;
      this.beep.type='square';
    }
    this.beepGain.gain.value = 0.3;
  }
};

SoundManager.freqs = [82.407, 97.999, 110.000, 130.813, 146.832, 164.814,
                      195.998, 220.000, 261.626, 293.665, 329.628, 391.995,
                      440.000];

SoundManager.step = 0;
SoundManager.album = [
  {
    freq : [110, 110, 220, 110,  55, 440, 440, 220],
    dur :  [1/8,   0,   0,   0, 1/8,   0,   0,   0]
  },
  {
    freq : [110, 110, 110, 110,  55, 440,  55, 220],
    dur :  [1/8,   0, 1/8,   0, 1/8,   0, 1/8,   0]
  },
  {
    freq : [ 55, 110,  55, 110,  55, 440,  55, 220],
    dur :  [1/8,   0, 1/8,   0, 1/8,   0, 1/8, 1/4]
  }
];
