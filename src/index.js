module.exports = function reverse (n) {
    n=Math.abs(n);
    let result = n % 10;
    n = Math.floor(n / 10);
    while (n >= 1) {
      result = result*10 + n % 10;
      n = Math.floor(n / 10);
    }
    return result;
}
