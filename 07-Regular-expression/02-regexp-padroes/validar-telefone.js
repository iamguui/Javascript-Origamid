const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888',
];
for (telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE));
}
