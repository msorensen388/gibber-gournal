


delay = Delay('1/6').bus()
delay2 = Delay('1/2').bus()

r = RingMod(435).bus()

k = Kick().note.seq([-25, -24, -23, -24], [1/2, 1/2, 1/4, 1/4,  1/2])

s = Snare().trigger.seq(-24, [1/1, 2/3, 1/3])
s.gain = 0.001
s.connect(r)
s.connect(delay2)


m = Monosynth('lead2').note.seq([1,2,Rndi(10)(),4,Rndi(20)(),2,Rndi(3)(), Rndi(5)()], [1/4.1])
m.decay = 0.1
m.connect(delay)


fm = FM('deepbass').note.seq([2, 1, 3, 1, 4, 1, 5, 1], [1/2, 1/2, 1/4, 1/4, 1/8, 1/8, 1/3.9])
fm.connect(delay2)
fm.gain = 0.1



m2 = Monosynth('edgy').note.seq(sine(0.73, 1, 2)          , 1/2)
m2.connect(delay)
m2.connect(delay2)
m2.connect(r)
m2.gain = 0.2