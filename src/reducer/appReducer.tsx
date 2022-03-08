import { types } from "../actions";

const initialState: any = {

};

export interface State {
  result: Array<any>;
}

export const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case types.GET_DATA: {
      const newData = action.data;
      return {
        ...state,
        result: newData.map((item: any) => Object.assign(item, { like: false }))
      };
    }

    case types.PASS_MODAL_DATA: {
      console.log(action);
      return {
        ...state,
        inputValue: action.data
      };
    }

    case types.EDIT_DATA: {
      return {
        ...state,
        result: state.result.map((item: { id: number; }) => item.id === action.id ? {
          ...item,
          name: action.name,
          username: action.username
        } : item
        )
      };
    }

    case types.MODAL_TOGGLE: {
      return {
        ...state,
        modalToggle: action.toggle
      };
    }

    case types.DELETE_DATA: {
      return {
        ...state,
        result: state.result.filter((item: { id: number; }) => item.id !== action.id)
      };
    }

    default:
      return state;
  }
};