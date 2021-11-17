// Należy stosować it albo test do tworzenia nowych testów

const add = (a, b) => a + b;
it('add two values?', () => {
  expect(add(2 + 4)).toBe(6);
});
it('add two values false?', () => {
  expect(add(2 + 4)).not.toBe(7);
});
