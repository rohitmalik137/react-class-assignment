const INITIAL_STATE = {
  movies: [
    {
      id: 1,
      name: 'Cocktail',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82034.jpg',
      price: 250,
      Timings: '12:00PM-2:00PM',
      rating: 8.3,
    },
    {
      id: 2,
      name: 'Ek tha tiger',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82035.jpg',
      price: 200,
      Timings: '2:00PM-4:00PM',
      rating: 6,
    },
    {
      id: 3,
      name: 'Yeh Jawaani hai Deewani',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82037.jpg',
      price: 120,
      Timings: '5:00PM-7:00PM',
      rating: 10,
    },
    {
      id: 4,
      name: 'Jai ho',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82040.jpg',
      price: 160,
      Timings: '12:00PM-2:00PM',
      rating: 6,
    },
    {
      id: 5,
      name: 'Dhoom 2',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82044.jpg',
      price: 170,
      Timings: '8:00AM-10:00AM',
      rating: 8,
    },
    {
      id: 6,
      name: 'Saturday saturday',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82038.jpg',
      price: 150,
      Timings: '12:00PM-2:00PM',
      rating: 3.4,
    },
    {
      id: 7,
      name: 'Ek Villain',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82053.jpg',
      price: 250,
      Timings: '12:00PM-2:00PM',
      rating: 7,
    },
    {
      id: 8,
      name: 'IshqZaade',
      imageUrl:
        'https://wallpaper-house.com/data/out/6/wallpaper2you_82048.jpg',
      price: 125,
      Timings: '12:00PM-2:00PM',
      rating: 7.3,
    },
  ],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default moviesReducer;
