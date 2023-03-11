function receivesAFunction (cb) {
    cb () 
}

function returnsANamedFunction () {
    return function namedFunction() {
        return ("my name is ramia")
      }
}

function returnsAnAnonymousFunction() {
    return function () {
    console.log ("hi")
    }
}