// Factoriel d'un nombre
// Méthode itérative
const computeFactorialIt = (n) => {
  if (n === 0) return 1;
  var result = 1;
  for (var i = 1; i <= n; i++)
    result = result * i;
  return result;
}

// Maintenant, même exercice, mais en utilisant la récursivité !

const computefactorialRec = (n) => {
  if (n === 0) return 1;
  else return n * computefactorialRec(n - 1);
}

// Puissance d'un nombre
// Méthode itérative

const computePowerIt = (n, p) => {
  if (n === 0) return 1;
  else return n**p;

}

// Méthode récursive

const computerPowerRec = (n, p) => {
   if (p === 0) return 1;
  else return n * computerPowerRec(n, p-1);
};


// Racine carrée d'un nombre

// const attempt = (n) => {
//   return n**(1/2)
// }
// console.log(attempt(9))


  function squareRec(n, i) {
    if (!g) {
        // Take an initial guess at the square root
        g = n / 2.0;
    }
    const d = n / g;              // Divide our guess into the number
    const ng = (d + g) / 2.0;     // Use average of g and d as our new guess
    if (g == ng) {
        // The new guess is the same as the old guess; further guesses
        // can get no more accurate so we return this guess
        return g;
    }
    // Recursively solve for closer and closer approximations of the square root
    return squareRec(n, ng);
}


// est-ce un nombre premier ?

const isPrimeNumber = (n, i) => {
  if (!i) {
    i = 0;
  }
  if (n <= 1) return false;
  else if (n === 2) return true;
  else if (n === i) return true;
  else if (n % i === 0) return false;
  i+=2;
  return isPrimeNumber(n, i);
};