class Math {
  sum = (n1, n2) => n1 + n2;
  multiply = (n1, n2, callback) => {
    callback(n1 * n2);
  };
}

module.exports = Math;
