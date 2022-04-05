import { Dispatch } from "redux";
import { API, ProductsDataType } from "../API/Api";
const initialState: ProductsDataType = {
  products: [],
  creators: [],
  sortedProducts: []
}
type ActionsType = ReturnType<typeof getUsersAC> | ReturnType<typeof sortUsers>

export const productsReducer = (state: ProductsDataType = initialState, action: ActionsType) => {
  switch(action.type) {
    case 'GET-TASKS': {
      return {...action.value}
    }
    case 'SORT-TASKS': {
      let sortedProducts = [...state.products.filter(e => e.quantity_available > 0)]
      
      return {...state, sortedProducts}
    }
    default: return state
  }
}

export const getUsersAC = (value: ProductsDataType) => {
  return ({type: 'GET-TASKS', value} as const)
}

export const sortUsers = () => {
  return ({type: 'SORT-TASKS'} as const)
}

export const getUsersTC = () => {
  return (dispatch: Dispatch) => {
    API.getProducts().then(res => {
      dispatch(getUsersAC(res.data.data))
      dispatch(sortUsers())
    })
  }
}