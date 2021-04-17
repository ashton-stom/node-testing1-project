const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    expect(input.bar).toEqual('bar ')
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    let input = [{ integer: 3 }, { integer: 2 }, { integer: 1 }]
    let largest = utils.findLargestInteger(input)
    expect(largest).toEqual(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    let count = counter.countDown()
    expect(count).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    let count = counter.countDown()
    expect(count).toEqual(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    let count = counter.countDown()
    expect(count).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let current = seasons.next()
    expect(current).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    let current = seasons.next()
    expect(current).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    let current = seasons.next()
    expect(current).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    let current = seasons.next()
    expect(current).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    let current = seasons.next()
    expect(current).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    let current = seasons.next()
    expect(current).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100)
    expect(focus.odometer).toEqual(100)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(10000)
    expect(focus.tank).toEqual(0)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.tank = 0;
    let miles = focus.refuel(0)
    expect(miles).toEqual(0)
    let refueledMiles = focus.refuel(5)
    expect(refueledMiles).toEqual(5 * focus.mpg)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    let miles = focus.refuel(100)
    expect(miles).toEqual(focus.tank * focus.mpg)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    let result = false;
    try {
      result = await utils.isEvenNumberAsync(2)
    } catch (err) {
      result = err
    }
    expect(result).toEqual(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    let result = false;
    try {
      result = await utils.isEvenNumberAsync(1)
    } catch (err) {
      result = err
    }
    expect(result).toEqual(false)
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    let result = false;
    try {
      result = await utils.isEvenNumberAsync('2')
    } catch (err) {
      result = err
    }
    expect(result.message).toEqual('number must be a number')
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    let result = false;
    try {
      result = await utils.isEvenNumberAsync(NaN)
    } catch (err) {
      result = err
    }
    expect(result.message).toEqual('number must be a number')
  })
})
