const { TestScheduler } = require('jest');
const Streamer = require ('./modules/elevator_media');

test('HHHHHHHHHEEEEEEEEELLLLLLLLLOOOOOOOOOOOO', () => {

  let nametest = new Streamer('Alexandre Leblanc', 'alexandreleblanc@rockeelevator.com', '123-456-7890')

  expect(nametest.name).toBe('Alexandre Leblanc');

});

// beforeEach(() => {
//   cont media = new Streamer()
// });

// test('TEST API !!!!!!!', async () => {
//   fetch.mockResponseOnce(JSON.stringify({"categories": [], "weather": Cloudy, "temp": Cold, "sunset": late}));
//   let testweather = new Streamer()
//   await expect(testweather.getContent()).toInclude('div')
// });
