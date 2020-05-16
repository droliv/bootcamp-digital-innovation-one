class MathWithChai {
  sum = (n1, n2) => n1 + n2;
  printSum = (req, res, n1, n2) => {
    res.load('index', n1 + n2);
  };
}

module.exports = MathWithChai;
