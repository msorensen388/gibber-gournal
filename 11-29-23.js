sine3 = sine(6, 10, 10.5);

sine2 = sine(1, 1, 0);

s1 = Synth("stringPad");
s1.note.seq([1, 2, 4, 3, Rndi(7)], [1 / 4, 1 / 2, 1 / 8, 1 / 8]);
s1.pan.seq(sine2);
s1.gain = 0.1;
s1.attack = 1.5;
s1.saturation.seq(sine3);

s2 = Monosynth("arpy");
s2.note.seq([1, Rndi(3)(), Rndi(2)() + 1, Rndi(5)() - 2, 7, 7], 1 / 8);
s2.gain = 0.1;
s2.attack = 0.15;

s1.stop();

// error: A sequence targeting Monosynth_148.note contains an improper value and will be stopped.
