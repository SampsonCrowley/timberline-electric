import {Clock} from './clock';

describe('Clock', () => {
  it('should create an instance', () => {
    expect(new Clock()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    var inTime = new Date().toString();
    var outTime = new Date().toString();
    let clock = new Clock({
      user_id: 1,
      in: inTime,
      out: outTime
    });

    expect(clock.user_id).toEqual(1);
    expect(clock.in).toEqual(inTime);
    expect(clock.out).toEqual(outTime);
  });
});
