var rect = require('./rectangle')

solveRect = (l,b) =>{
    console.log(`Finding the area of with ${l} amd ${b}`)
    if(l<=0 || b<=0) console.log(`No rectangle with values ${l} and ${b}`)
    else{
        console.log(`The area of a rectangle with ${l} and ${b} is ${rect.area(l,b)}`)
        console.log(`The Perimenter of a rectangle with ${l} and ${b} is ${rect.perimeter(l,b)}`)
    }

}

solveRect(3,4)
solveRect(0,7)
solveRect(-5,8)