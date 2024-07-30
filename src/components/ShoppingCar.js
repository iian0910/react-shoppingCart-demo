import { useContext } from "react"
import { shoppingCarContext } from "../store"
import { Value } from "sass"

export default function ShoppingCar() {
  const [state, dispatch] = useContext(shoppingCarContext)

  return (
    <div className='bg-light p-3'>
      <table className='table align-middle'>
        <tbody>
          {state.carList.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => {
                      dispatch({
                        type: 'REMOVE_CAR_ITEM',
                        payload: {
                          ...item
                        }
                      })
                    }}
                  >X</button>
                </td>
                <td>
                  <img
                    src={item.img}
                    className='table-image'
                    alt=""
                  />
                </td>
                <td>
                  {item.title}
                  <br/>
                  <small className='text-muted'>${item.price}</small>
                </td>
                <td>
                  <select
                    className='form-select'
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault()
                      const quantity = parseInt(e.target.value)
                      dispatch({
                        type: 'ADD_CAR_QUANTITY',
                        payload: {
                          ...item,
                          quantity
                        }
                      })
                    }}
                  >
                    {[...Array(20)].map((option, index) => {
                      return (
                        <option value={index + 1} key={index}>{index + 1}</option>
                      )
                    })}
                  </select>
                </td>
                <td className='text-end'>
                  $NT {item.price*item.quantity}
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className='text-end' colSpan={5}>
              總金額 $NT {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}