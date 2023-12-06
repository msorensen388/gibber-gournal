
d = Delay(0.4, 1/4).bus()

w = Wavefolder()
w.gain = 10

k = Kick()
k.trigger.seq(1, 1/2)
k.connect(d)


s = Snare()
s.trigger.seq([0, 1], 1/1.5)
s.connect(d)


h = Hat();
h.trigger.seq(1, 1/4)
h.gain = 0.25
h.connect(d)


m = Monosynth('dirty').seq(Rndi(-6,6,32)(), 2)
m.gain = 0.1
m.sustain = 2
m.decay = 1.5
m.attack = 1/2
m.connect(d)

m2 = Monosynth('lead').seq(Rndi(12,24,32)(), 3)
m2.sustain = 1
m2.decay = 2
m2.fx.add(Delay(0.9, [1/4, 1/3, 1/2]))
m2.connect(d)

v = RingMod()

m3 = Synth('pwm.squeak').seq([1, 2, 0, 1], 1/6)
m3.gain = 0.4
m3.decay = 1/3
m3.fx.add(v)
m3.fx.add(Delay([1/4, 1/3, 1/2]))
m3.connect(d)