import { createStore } from "vuex";

export default createStore({
  state: {
    arr: "asdasd",
    sections: [
      // первая секция
      {
        section_id: 1,
        img: "src/assets/img/1.png",
        floors: [
          // этаж 1
          {
            img: "src/assets/img/1-1.png", 
            floor_id: 1,
            floor: "Этаж 1",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "src/assets/img/Rectangle 37.png",
                    kvM: 37,
                    price: 40000,
                    floor: 1,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 60,
                    price: 55000,
                    floor: 1,
                    section: 1,
                    rooms: 2,
                  },
                  {
                    img: "",
                    kvM: 68,
                    price: 58000,
                    floor: 1,
                    section: 1,
                    rooms: 2,
                  },
                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 95,
                    price: 75000,
                    floor: 1,
                    section: 1,
                    rooms: 3,
                  },
                  {
                    img: "",
                    kvM: 100,
                    price: 82000,
                    floor: 1,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 130,
                    price: 120000,
                    floor: 1,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },
          // этаж 2
          {
            img: "src/assets/img/1-2.png",
            floor_id: 2,
            floor: "Этаж 2",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
                    kvM: 30,
                    price: 35000,
                    floor: 2,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 55,
                    price: 52000,
                    floor: 2,
                    section: 1,
                    rooms: 2,
                  },
                  {
                    img: "",
                    kvM: 69,
                    price: 58500,
                    floor: 2,
                    section: 1,
                    rooms: 2,
                  },
                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 95,
                    price: 77000,
                    floor: 3,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 115,
                    price: 100000,
                    floor: 4,
                    section: 1,
                    rooms: 4,
                  },
                  {
                    img: "",
                    kvM: 140,
                    price: 130000,
                    floor: 4,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },
          // этаж 3

          {
            img: "src/assets/img/1-3.png",
            floor_id: 3,
            floor: "Этаж 3",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
                    kvM: 35,
                    price: 38500,
                    floor: 3,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 50,
                    price: 49000,
                    floor: 3,
                    section: 1,
                    rooms: 2,
                  },
                  {
                    img: "",
                    kvM: 65,
                    price: 56500,
                    floor: 3,
                    section: 1,
                    rooms: 2,
                  },
                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 85,
                    price: 72000,
                    floor: 3,
                    section: 1,
                    rooms: 3,
                  },
                  {
                    img: "",
                    kvM: 90,
                    price: 74000,
                    floor: 3,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 105,
                    price: 95000,
                    floor: 4,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },
          // этаж 4

          {
            img: "src/assets/img/1-4.png",
            floor_id: 4,
            floor: "Этаж 4",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
                    kvM: 35,
                    price: 38500,
                    floor: 4,
                    section: 1,
                    rooms: 1,
                  },
                  {
                    img: "../",
                    kvM: 25,
                    price: 30500,
                    floor: 4,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 58,
                    price: 55000,
                    floor: 4,
                    section: 1,
                    rooms: 2,
                  },

                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 80,
                    price: 70000,
                    floor: 5,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 95,
                    price: 90000,
                    floor: 4,
                    section: 1,
                    rooms: 4,
                  },
                  {
                    img: "",
                    kvM: 110,
                    price: 104000,
                    floor: 4,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },
          // этаж 5

          {
            img: "src/assets/img/1-5.png",
            floor_id: 5,
            floor: "Этаж 5",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
                    kvM: 30,
                    price: 33500,
                    floor: 5,
                    section: 1,
                    rooms: 1,
                  },
                  {
                    img: "../",
                    kvM: 29,
                    price: 32500,
                    floor: 5,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 57,
                    price: 54000,
                    floor: 5,
                    section: 1,
                    rooms: 2,
                  },

                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 75,
                    price: 67000,
                    floor: 5,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 90,
                    price: 87500,
                    floor: 5,
                    section: 1,
                    rooms: 4,
                  },
                  {
                    img: "",
                    kvM: 112,
                    price: 110000,
                    floor: 5,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },
          // этаж 6

          {
            img: "src/assets/img/1-6.png",
            floor_id: 6,
            floor: "Этаж 6",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
                    kvM: 34,
                    price: 40500,
                    floor: 6,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 67,
                    price: 65000,
                    floor: 6,
                    section: 1,
                    rooms: 2,
                  },
                  {
                    img: "",
                    kvM: 60,
                    price: 58000,
                    floor: 6,
                    section: 1,
                    rooms: 2,
                  },

                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 73,
                    price: 65000,
                    floor: 6,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 95,
                    price: 90500,
                    floor: 6,
                    section: 1,
                    rooms: 4,
                  },
                  {
                    img: "",
                    kvM: 117,
                    price: 120000,
                    floor: 6,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },
          // этаж 7

          {
            img: "src/assets/img/1-7.png",
            floor_id: 7,
            floor: "Этаж 7",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
                    kvM: 38,
                    price: 42000,
                    floor: 7,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 64,
                    price: 62000,
                    floor: 7,
                    section: 1,
                    rooms: 2,
                  },

                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 77,
                    price: 68000,
                    floor: 7,
                    section: 1,
                    rooms: 3,
                  },
                  {
                    img: "",
                    kvM: 80,
                    price: 70000,
                    floor: 7,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 105,
                    price: 95000,
                    floor: 7,
                    section: 1,
                    rooms: 4,
                  },
                  {
                    img: "",
                    kvM: 120,
                    price: 122000,
                    floor: 7,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },
          // этаж 8

          {
            img: "src/assets/img/1-8.png",
            floor_id: 8,
            floor: "Этаж 8",
            rooms: [

              // однушка 
              {
                room_id: 1,
                room: "1 комната",
                img: 'src/assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
                    kvM: 35,
                    price: 40000,
                    floor: 8,
                    section: 1,
                    rooms: 1,
                  },
                ],
              },

              // двушка
              {
                room_id: 2,
                room: "2 комната",
                img: 'src/assets/img/rooms/room2.png',
                items: [
                  {
                    img: "",
                    kvM: 60,
                    price: 59000,
                    floor: 8,
                    section: 1,
                    rooms: 2,
                  },
                  {
                    img: "",
                    kvM: 62,
                    price: 60500,
                    floor: 8,
                    section: 1,
                    rooms: 2,
                  },

                ],
              },

              // трёшка
              {
                room_id: 3,
                room: "3 комната",
                img: 'src/assets/img/rooms/room3.png',
                items: [
                  {
                    img: "",
                    kvM: 75,
                    price: 65000,
                    floor: 8,
                    section: 1,
                    rooms: 3,
                  },
                  {
                    img: "",
                    kvM: 78,
                    price: 68500,
                    floor: 8,
                    section: 1,
                    rooms: 3,
                  },
                ],
              },

              // четырёшка
              {
                room_id: 4,
                room: "4 комната",
                img: 'src/assets/img/rooms/room4.png',
                items: [
                  {
                    img: "",
                    kvM: 114,
                    price: 118000,
                    floor: 8,
                    section: 1,
                    rooms: 4,
                  },
                ],
              },
            ],
          },


        ],
      },

      // вторая секция
      {
        section_id: 2,
        img: "src/assets/img/2.png",
      },

      // третья секция
      {
        section_id: 3,
        img: "src/assets/img/3.png",
      },

      // четвертая секция
      {
        section_id: 4,
        img: "src/assets/img/4.png",
      },
    ],
  },
  getters: {
    sections: (state) => state.sections,
  },
  mutations: {},
  actions: {},
  modules: {},
});
