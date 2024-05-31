import Logo from "../imagen/GiordanoBruno_logo.jpg";

const Footer = () => {
    return (
            <footer className="footer">
                <img className="logo" src={Logo} alt="Giordando Bruno"/>
                <div className="redes">
                    <a href="https://web.facebook.com/cgiordanobruno"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/GioBruno1600"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/p/CIiyD5_B3Op/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://cl.linkedin.com/in/giordano-bruno-705042168"><i className="fa-brands fa-linkedin"></i></a>
                    <p>Copyright© Todos los Derechos Reservados.</p>
                </div>
            </footer> 
    )
}


export default Footer;
