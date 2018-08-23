import sum from './sum';

describe('test1', () => {
  beforeAll(() => {
    console.log('test1 before all');
  });

  afterAll(() => {
    console.log('test1 after all');
  });

  beforeEach(() => {
    console.log('test1 before each');
  });

  afterEach(() => {
    console.log('test1 after each');
  });

  it('test sum', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('test mutil', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
