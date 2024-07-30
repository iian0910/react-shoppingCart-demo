import { useContext } from "react"
import { shoppingCarContext } from "../store"

export default function Navbar() {
  const [ state ] = useContext(shoppingCarContext)
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Cake Store</span>
        <button className="btn btn-outline-dark position-relative" type="submit">
          購物車
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {state.carList.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </nav>
  )
}

