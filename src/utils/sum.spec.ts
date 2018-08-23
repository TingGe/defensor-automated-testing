import sum from './sum';

describe('sum equal ', () => {
  beforeAll(() => {
    console.log('sum before all');
  });

  afterAll(() => {
    console.log('sum after all');
  });

  beforeEach(() => {
    console.log('sum before each');
  });

  afterEach(() => {
    console.log('sum after each');
  });

  it('test 1 + 2 = 3 ', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('test 2 + 3 = 5', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
