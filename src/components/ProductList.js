import { useContext } from "react"

import productData from "../assets/js/data"
import { shoppingCarContext } from "../store"

export default function ProductList() {
  const [ state, dispatch ] = useContext(shoppingCarContext)

  return (
    <div className='row row-cols-3 g-3'>
      {productData.map(product => {
        return (
          <div className='col' key={product.id}>
            <div className="card">
              <img
                src={product.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">
                  {product.title}
                  <span className='float-end'>${product.price}</span>  
                </h6>
                <button
                  type='button'
                  className="btn btn-outline-primary w-100"
                  onClick={() => {
                    dispatch({
                      type: 'ADD-TO-SHOPPING-CAR',
                      payload: {
                        ...product,
                        quantity: 1
                      }
                    })
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}