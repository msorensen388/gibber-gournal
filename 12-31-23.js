Clock.bpm = 180

r = Reverb().bus()
r.roomSize = 0.75


k = Kick('tight').trigger.seq(1, [1/8, 1/16, 1/16, 1/8])
k.gain = 1.25
k.connect(r)

h = Hat().trigger.seq(1, 1/2)
h.gain = 0.1
h.connect(d)
h.connect(r)

s = Snare('snappy').trigger.seq([0, 0, 1, 0], 1/2)
s.gain = 0.4
s.connect(d)
s.connect(r)

m = Monosynth('dirty').seq(Rndi(-12,0,24)(), 1/4)
m.gain = 0.5
m.attack = 0.01
m.connect(r)

d = Delay()
d.feedback = 0.85
d.time = 1/4

m2 = Monosynth('arpy').seq(Rndi(12,24,48)(), 1/8)
m2.gain = 0.15
m2.connect(d)
m2.connect(r)

fm = FM('fun').seq(Rndi(0,12,12)(), 1)
fm.decay = 1
fm.sustain = 1
fm.gain = 0.07
fm.connect(d)
fm.connect(r)

j = Julia()
j.render()
j.fold.seq([0.01, 0.3, 0.5])

k.stop()
h.stop()
s.stop()
m.stop()
m2.stop()
fm.stop()``