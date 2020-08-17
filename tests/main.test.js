const index = require("../src/index");

test('oh, a failed test?', () => {
  const ticket = new CinemaBooking('Adult', 2);
  expect(index.price).toBe(20);
});
