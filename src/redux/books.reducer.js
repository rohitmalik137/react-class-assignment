const INITIAL_STATE = {
  books: [
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl:
        'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80',
      price: 25,
      description: 'A book',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Blue Beanie',
      imageUrl:
        'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      price: 18,
      description: 'A book',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Brown Cowboy',
      imageUrl:
        'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      price: 35,
      description: 'A book',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Grey Brim',
      imageUrl:
        'https://images.unsplash.com/photo-1495640452828-3df6795cf69b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
      price: 25,
      description: 'A book',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Green Beanie',
      imageUrl:
        'https://images.unsplash.com/photo-1569360457068-0e24f0d88117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
      price: 18,
      description: 'A book',
      quantity: 1,
    },
    {
      id: 6,
      name: 'Palm Tree Cap',
      imageUrl:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80',
      price: 14,
      description: 'A book',
      quantity: 1,
    },
    {
      id: 7,
      name: 'Red Beanie',
      imageUrl:
        'https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      price: 18,
      description: 'A book',
      quantity: 1,
    },
  ],
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default booksReducer;
