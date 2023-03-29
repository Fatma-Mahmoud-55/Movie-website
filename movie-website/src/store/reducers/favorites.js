const Initial_state = {

    favorites: []
}

export default function favoriteReducer(state = Initial_state, action) {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
          return {
            ...state,
            favorites: [...state.favorites, action.payload]
          }
          case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload.id)
      }
    default:
      return state

        }

}