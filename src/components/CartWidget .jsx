const CartWidget = () => {
      return(
        <button type="button" className="btn btn-primary position-relative  bg-success">
            <i className="fa-solid fa-cart-shopping" ></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>
    )
}
export default CartWidget 