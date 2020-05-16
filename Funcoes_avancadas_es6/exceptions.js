// tratamentos de erro try cath
try {
  const name = 'Daniele';
  const customError = new Error('Mensagem customizada de erro');
  throw customError;
} catch (err) {
  console.log({ error: err });
} finally {
  console.log('tanto faz');
}
