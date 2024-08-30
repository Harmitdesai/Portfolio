import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <p className="Name">Harmit Desai</p>
            <p className="NavOpt" id="Active">About</p>
            <p className="NavOpt">Projects</p>
            <p className="NavOpt">Contacts</p>
            <p className="LinkdIn"><a href='https://www.linkedin.com/in/harmitdesai/'>LinkdIn</a></p>
        </div>
     );
}
 
export default Navbar;