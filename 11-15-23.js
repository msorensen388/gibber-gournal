// http://abbernie.github.io/tune/scales.html
Theory.tuning = 'syntonolydian'

v = Reverb('space').bus()
d = Delay('1/3').bus()
d.gain = 0.4
 
const busEverything = (inst) => { inst.connect(d).connect(v) }


b = Monosynth().fx.add(Distortion())
b.cutoff = 0.5

busEverything(b)


// from FaMLE F22 Gibber Ideas
// this doesn't work! 
//create an array of 31 0's
//b_n = new Array(31).fill(0)
//add a -7 to the beginning of the array
//b_n = [-7].concat(b_n)

console.log(b_n)

b_n = []
for (let i = 0; i < 31; i++) {
  
  if (i % 2 === 0) {
    b_n.push(Rndi(12)()) 
  } else {
    b_n.push(0)
  }
} 

//console.log(b_n)
//console.log(b_n.original.values)
b.note.seq(b_n, 1/8)

b.stop()