import { Fraction, fraction } from './fraction';

describe('mathextra: fractions`', () => {
  it('should add 0 to 0 and return 0', () => {
    const sum: Fraction = fraction(0).plus(fraction(0));
    expect(sum.toInteger()).toEqual(0);
  });

  it('should add some number to zero', () => {
    const sum: Fraction = fraction(3).plus(fraction(0));
    expect(sum.toInteger()).toEqual(3);
  });

  it('should add zero to some number', () => {
    const sum: Fraction = fraction(0).plus(fraction(5));
    expect(sum.toInteger()).toEqual(5);
  });

  it('should add two non zero and positive numbers', () => {
    const sum: Fraction = fraction(3).plus(fraction(4));
    expect(sum.toInteger()).toEqual(7);
  });
});
