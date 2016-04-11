const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      let obj = {
        ...state,
        completed: !state.completed
      };
      return obj;
    case CLEAR_COMPLETED_TODOS:
      return !state.completed;
    default:
      return state;
  }
};

// todo list actions

const initalState = [];

const todos = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoReducer(null, action)
      ];
    case TOGGLE_TODO:
      let todos = state.map(todo => {
        return todoReducer(todo, action);
      });

      // sort todos by completed property
      // todos.sort((todoA, todoB) => {
      //   if(todoA.completed && !todoB.completed) {
      //     return 1;
      //   } else if (!todoA.completed && todoB.completed) {
      //     return -1;
      //   } else {
      //     return 0;
      //   }
      // });

      return todos;
    case CLEAR_COMPLETED_TODOS:
      return state.filter((todo) => {
        return todoReducer(todo, action);
      });
    default:
      return state;
  }
};

export default todos;
