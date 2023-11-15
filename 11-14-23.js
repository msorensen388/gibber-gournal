

v = Reverb('space').bus()
d = Delay('1/3').bus()
d.gain = 0.4

e = EDrums()
e.tidal('[ch, kd] ~ kd [oh] kd [ch, sd] kd [cp*2]')
e_dly = Delay({'feedback': 0.5, 'wetdry': 0.5, 'time': 0.001})
e.fx.add(e_dly)
 
e_dly.time.seq([1/999, 1/4, 1/999, 3/8], 1/2)

e.stop()



b = Synth('acidBass2').connect(d).connect(v)
b.seq(Rndi(-8,0), 1/8)
b.gain = 0.4


s = Synth('square.perc').connect(d, 0.2).connect(v)
s.note.tidal('0 3 ≥2 3 [5 4 1 3] 4 ~ ~ <[2 1] 7*6>')
s.gain = 0.3
s.stop()

s2 = Synth('chirp').connect(d, 0.2).connect(v , 0.2) 
// sine: freq, amplitude, center point (bias): 
s2.note.seq(sine(3, 6, 3), e=Euclid(7,16))