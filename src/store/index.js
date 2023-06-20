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
                img: '../assets/img/rooms/room1.png',
                items: [
                  {
                    img: "../",
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
                img: '../assets/img/rooms/room2.png',
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
                img: '../assets/img/rooms/room3.png',
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
                img: '../assets/img/rooms/room4.png',
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
            rooms: {
              _1: [
                {
                  img: "",
                  kvM: 36,
                  price: 39000,
                  floor: 2,
                  section: 1,
                  rooms: 1,
                },
                {
                  img: "",
                  kvM: 40,
                  price: 42000,
                  floor: 2,
                  section: 1,
                  rooms: 1,
                },
              ],
              _2: [
                {
                  img: "",
                  kvM: 65,
                  price: 58000,
                  floor: 2,
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
              _3: [
                {
                  img: "",
                  kvM: 91,
                  price: 71000,
                  floor: 2,
                  section: 1,
                  rooms: 3,
                },
                {
                  img: "",
                  kvM: 102,
                  price: 83000,
                  floor: 2,
                  section: 1,
                  rooms: 3,
                },
              ],
              _4: [
                {
                  img: "",
                  kvM: 120,
                  price: 110000,
                  floor: 2,
                  section: 1,
                  rooms: 4,
                },
              ],
            },
          },
          // этаж 3
          {
            img: "src/assets/img/1-3.png",
            floor_id: 3,
            floor: "Этаж 3",
            rooms: {
              _1: [
                {
                  img: "",
                  kvM: 38,
                  price: 41000,
                  floor: 3,
                  section: 1,
                  rooms: 1,
                },
                {
                  img: "",
                  kvM: 19,
                  price: 31000,
                  floor: 3,
                  section: 1,
                  rooms: 1,
                },
              ],
              _2: [
                {
                  img: "",
                  kvM: 60,
                  price: 55000,
                  floor: 3,
                  section: 1,
                  rooms: 2,
                },
                {
                  img: "",
                  kvM: 65,
                  price: 58000,
                  floor: 3,
                  section: 1,
                  rooms: 2,
                },
              ],
              _3: [
                {
                  img: "",
                  kvM: 75,
                  price: 70000,
                  floor: 3,
                  section: 1,
                  rooms: 3,
                },
              ],
              _4: [
                {
                  img: "",
                  kvM: 110,
                  price: 100000,
                  floor: 3,
                  section: 1,
                  rooms: 4,
                },
              ],
            },
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
