import { NavLink, Link } from "react-router-dom";
import Logo from "../imagen/GiordanoBruno_logo.jpg";
import CartWidget from "./CartWidget ";

const Navbar = () => {
    return (
        <>
        <div className="navbar navbar-expand-sm border border-black-subtle navbar-dark">
                <div className="container-fluid "> 
                    <Link className="navbar-brand align-middle" to="/"><img className="logo" src={Logo} alt="Giordando Bruno"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                   
                    <div className="row">
                        <div className="col">
                            <ul className="nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-decoration-none" to={"/category/Misterio"}>Misterio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-decoration-none" to={"/category/Novela"}>Novela</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-decoration-none" to={"/category/Fantasía"}>Fantasía</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-decoration-none" to={"/category/Ciencia ficción"}>Ciencia ficción</NavLink>
                                </li>
                            </ul>
                        </div>
                     </div>


                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item"> 
                                <Link className="nav-link" to={"/"}>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Multimedia</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Noticias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Contacto </Link> 
                            </li>
                            <li className="nav-item"><Link className="nav-link carrito-compra " to={"/"}><CartWidget /></Link> </li>
                        </ul>
                    </div>
                </div>
     
    </div>
    </>
    )
}

export default Navbar;