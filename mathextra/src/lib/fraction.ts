export type Fraction = {
  plus: (other: Fraction) => Fraction;
  toInteger: () => number;
};

export const fraction = (numerator: number, denominator = 1): Fraction => {
  return {
    plus: (other: Fraction) => fraction(numerator, denominator),
    toInteger: () => 0,
  };
};
