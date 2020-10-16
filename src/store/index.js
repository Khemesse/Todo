import { createStore } from 'vuex';

export const store = createStore({
    state() {
      return {
        lists: [
          {
            id: 1,
            todos: [
              {
                id: 1,
                name: "todo11",
              },
              {
                id: 2,
                name: "todo12",
              },
            ],
          },
          {
            id: 2,
            todos: [
              {
                id: 1,
                name: "todo21",
              },
              {
                id: 2,
                name: "todo22",
              },
            ],
          },
        ],
      };
    },
  });
