import {Server} from 'miragejs';

export function makeServer({environment = 'development'} = {}) {
  let server = new Server({
    environment,

    routes() {
      this.get(
        'api/home/',
        () => {
          return [
            {
              type: 'Video',
              header: "Editor's choice",
              assets: [
                {
                  duration: '18:00',
                  image:
                    'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg',
                  videoUrl: '',
                  title: 'Fresh Fruits',
                },
                {
                  duration: '25:55',
                  image: 'https://images4.alphacoders.com/271/271158.jpg',
                  videoUrl: '',
                  title: 'Orange and banana are great fruits',
                },

                {
                  duration: '25:55',
                  image:
                    'https://www.teahub.io/photos/full/172-1720426_high-resolution-fruits-hd.jpg',
                  videoUrl: '',
                  title: 'Eat these foods with milk',
                },
              ],
            },
            {
              type: 'Meals',
              header: 'Breakfast',
              assets: [
                {
                  image:
                    'https://freedesignfile.com/upload/2017/07/sumptuous-breakfast-HD-picture.jpg',
                  title: 'Yammy breakfast',
                },
                {
                  image:
                    'https://c4.wallpaperflare.com/wallpaper/668/319/828/food-breakfast-coffee-croissant-wallpaper-preview.jpg',
                  title: 'Never eat these foods with water',
                },
                {
                  image:
                    'https://img.freepik.com/free-photo/side-view-traditional-turkish-breakfast-with-olives-feta-cheese-honey-vegetables-tea_140725-10330.jpg?w=1060&t=st=1662028626~exp=1662029226~hmac=ed4099b9acb6cf1c874bc72c8b0800e891b2123b3059c531a3c6a55294f0c36e',
                  title: 'Iranian breakfast',
                },
              ],
            },
            {
              type: 'Meals',
              header: 'Lunch',
              assets: [
                {
                  image: 'https://images7.alphacoders.com/376/376598.jpg',
                  title: 'What is this?',
                },
                {
                  image: 'https://images7.alphacoders.com/598/598722.jpg',
                  title: 'Roast Chicken',
                },
                {
                  image: 'https://images5.alphacoders.com/661/661076.jpg',
                  title: 'Salade Lyonnaise',
                },
                {
                  image: 'https://images2.alphacoders.com/657/657760.jpg',
                  title: 'Zucchini Salad',
                },
                {
                  image: 'https://images8.alphacoders.com/817/817136.jpg',
                  title: 'Delicious Bagel with Salmon and Cream Cheese',
                },
              ],
            },
            {
              type: 'Meals',
              header: 'Dinner',
              assets: [
                {
                  image: 'https://images2.alphacoders.com/891/891665.jpg',
                  title: 'Hamburger with Salad',
                },
              ],
            },
            {
              type: 'Meals',
              header: 'Snack',
              assets: [
                {
                  image:
                    'https://c1.wallpaperflare.com/preview/471/539/826/bread-delicious-edible-food.jpg',
                  title: 'Snacks for you',
                },
              ],
            },
            {
              type: 'People',
              header: 'Real People, real \n results',
              assets: [
                {
                  image:
                    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  title: 'This is a long blah blah blha in 2 linessssss',
                },
                {
                  image:
                    'https://images.unsplash.com/photo-1528900403525-dc523d4f18d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
                  title: 'This is a long blah blah blha in 2 linessssss',
                },
              ],
            },
          ];
        },
        {timing: 5000},
      );
    },
  });

  return server;
}

if (global.server) {
  global.server.shutdown();
}
global.server = makeServer();
