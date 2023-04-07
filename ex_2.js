function isPrime(num) {
  if (num <= 1 || num > 1000)
    return "данные неверны";
  if (num == 2)
    return "простое число";
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return "составное число";
    }
  }
  return "простое число";
}

console.log(isPrime(9));
console.log(isPrime(7));
console.log(isPrime(1));