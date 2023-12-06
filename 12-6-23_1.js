
Clock.bpm = 85

BC = BitCrusher(0.5, 0.5).bus()


k = Kick('long').note.seq(-16, 1/2)
k.gain = 0.5
k.fx.add(Delay(1/2, 1/8))


b = Monosynth('bassPad').seq(Rndi(0,12, 64)(), 1/2)
b.gain = 0.25
b.attack = 1/32
//b.waveform = 'sine'


s = Snare('dull').seq(8, [1/2])
s.gain = 0.025
s_delay = Delay()
s_delay.time = 1/9
s_delay.feedback = 0.4
s.fx.add(s_delay)
s.connect(BC)


m = Monosynth('wander').seq(Rndi(0, 12, 64)(),[1/4, 1/8, 1/4, 1/Rndi(8)()])
m.gain = 0.2
m.fx.add(Delay([1/2,1/4,1/3]))
m.connect(BC)

p = Synth('stringPad').tidal('[0,7,12]')
