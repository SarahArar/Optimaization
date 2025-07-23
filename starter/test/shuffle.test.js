import { shuffle } from '../src/shuffle.js';
import { expect } from 'chai';

describe('test shuffle function', () => {
  const originalArray = [5, 7, 8, 9];
  it('should return an array of same length', () => {
    expect(shuffle(originalArray).length).to.equal(originalArray.length);
  });
});
