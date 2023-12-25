// this was an attempt at screenrecording my MUSI-620 final performance but some things are changed from that one

Clock.bpm = 90


d = Delay ({'feedback': 0.7, 'wetdry': 0.75, 'time': 1/2 }).bus()
d2 = Delay({'feedback': 0.6, 'wetdry': 0.45, 'time': 3/7}).bus()

m = Monosynth('wander').seq(Rndi(-12,0,31)(), 1)
m.gain = 0.35
m.connect(d)


bc = BitCrusher(0.9, 0.95)

k = Kick('boom').trigger.seq(1, 1)
k.fx.add(bc)
k.connect(d)


sn = Snare('dull').trigger.seq(Rndi(0,1,32)(), 1/2)
sn.gain = 0.3
sn.connect(d2)

v = Vibrato()

s = Synth('bleep').seq(Rndi(0,12,33)(), 2)
s.gain = 0.4
s.fx.add(v)
s.connect(d)
s.connect(d2)


s2 = Synth('rhodes').seq(Rndi(-6, 6, 29)(), 2/3)
s2.gain = 0.3
s2.connect(d)
s2.connect(d2)


m.stop()
k.stop()
sn.stop()
s.stop()
s2.stop()