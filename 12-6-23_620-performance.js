
Clock.bpm = 70


d = Delay({'feedback': 0.75, 'wetdry': 0.7, 'time': 1/2}).bus()
d2 = Delay({'feedback': 0.5, 'wetdry': 0.5, 'time': 1/9}).bus()

m = Monosynth('wander').seq(Rndi(-6,12,32)(), 2)
m.gain = 0.35
m.connect(d)

m.stop()

bc = BitCrusher(0.9, 0.95)

k = Kick('long').trigger.seq(1,2)
k.fx.add(bc)
k.connect(d)

k.stop()


sn = Snare('dull').trigger.seq(Rndi(0,1,31)(), 1/2)
sn.gain = 0.3
sn.connect(d2)

sn.stop()

v = Vibrato()

s = Synth('bleep.echo').seq(Rndi(6,18, 30)(), 1)
s.gain = 0.4
s.fx.add(v)
s.connect(d)
s.connect(d2)

s.stop()


s2 = Synth('rhodes').seq(Rndi(-6, 6, 29)(), 1/2)
s2.gain = 0.3
s2.connect(d)
s2.connect(d2)

s2.stop()