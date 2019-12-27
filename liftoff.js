let t = 60 

while (t >= 0) {
  if (t > 50) {
    console.log(`T-${t} seconds`);
  }
  else if (t === 50) { 
    console.log("Orbiter transfers from ground to internal power");
  }
  else if (t < 50 && t > 31) {
    console.log(`T-${t} seconds`);
  }
  else if (t === 31) {
    console.log("Ground launch sequencer is go for auto sequence start")
  }
  else if (t < 31 && t > 16) {
    console.log(`T-${t} seconds`);
  }
  else if (t === 16) {
    console.log("Activate launch pad sound suppression system")
  }
  else if (t < 16 && t > 10) {
    console.log(`T-${t} seconds`);
  }
  else if (t === 10) {
    console.log("Activate main engine hydrogen burnoff system")
  }
  else if (t < 10 && t > 6) {
    console.log(`T-${t} seconds`);
  }
  else if (t === 6) {
    console.log("Main engine start")
  }
  else if (t < 6 && t > 0) {
    console.log(`T-${t} seconds`);
  }
  else {
    console.log("Solid rocket booster ignition and liftoff! ")
  }
  t = t - 1
}