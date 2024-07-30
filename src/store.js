import { createContext } from "react";

function reducePrice(carList) {
  return carList.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);
}

export const carInit = {
  carList: [],
}

export const cartReducer = (state, action) => {
  const carList = [...state.carList]
  // step1. 查詢列表內是否有相同的物件, 並取出 index 值
  const index = carList.findIndex(item => item.id === action.payload.id)
  switch(action.type) {
    case 'ADD-TO-SHOPPING-CAR':
      // step2. 找不到才推, 反之, 將既有數量 +1
      if(index === -1) {
        carList.push(action.payload)
      } else {
        carList[index].quantity += action.payload.quantity
      }
      return {
        ...state,
        carList,
        total: reducePrice(carList)
      }
    case 'ADD_CAR_QUANTITY':
      carList[index].quantity = action.payload.quantity
      return {
        ...state,
        carList,
        total: reducePrice(carList)
      }
    case 'REMOVE_CAR_ITEM':
      carList.splice(index, 1)
      return {
        ...state,
        carList,
        total: reducePrice(carList)
      }
    default:
      return state
  }
}

export const shoppingCarContext = createContext({})