let x =  99

while ( x >= 1) {

if (x > 2) { 
  console.log(`${x} bottles of juice on the wall! ${x} bottles of juice! Take one down, pass it around... ${x-1} bottles of juice on the wall!`)
  x = x-1
}

else if (x === 2) { 
  console.log(`${x} bottles of juice on the wall! ${x} bottles of juice! Take one down, pass it around... ${x-1} bottle of juice on the wall!`)
  x = x-1
  
}

else { 
  console.log(`${x} bottle of juice on the wall! ${x} bottle of juice! Take one down, pass it around... ${x-1} bottle of juice on the wall!`)
  x = x-1
}

}
