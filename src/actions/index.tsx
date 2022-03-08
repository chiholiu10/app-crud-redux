export const types = {
  GET_DATA: "GET_DATA",
  EDIT_DATA: "EDIT_DATA",
  DELETE_DATA: "DELETE_DATA",
  PASS_MODAL_DATA: "PASS_MODAL_DATA",
  MODAL_TOGGLE: "MODAL_TOGGLE"
};

export const getData = (data: unknown) => ({
  type: types.GET_DATA,
  data
});

export const passModalData = (data: unknown) => ({
  type: types.PASS_MODAL_DATA,
  data
});

export const modalToggle = (toggle: boolean) => ({
  type: types.MODAL_TOGGLE,
  toggle
});

export const editText = (
  id: unknown,
  name: unknown,
  username: unknown
) => ({
  type: types.EDIT_DATA,
  id,
  name,
  username
});

export const deleteData = (
  id: number
) => ({
  type: types.DELETE_DATA,
  id
});

