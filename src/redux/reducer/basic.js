export const config = (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      return {...state};
    default:
      return state;
  }
}
