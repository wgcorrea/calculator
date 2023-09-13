export type Fraction = {
  plus: (other: Fraction) => Fraction;
  toInteger: () => number;
};

export const fraction = (numerator: number, denominator = 1): Fraction => {
  return {
    plus: (other: Fraction) => {
      if (numerator === 0) return other;
      return fraction(numerator + other.toInteger(), denominator);
    },
    toInteger: () => numerator,
  };
};
