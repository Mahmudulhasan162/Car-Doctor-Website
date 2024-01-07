import logo from "../../../assets/icons/logo.svg"
const Footer = () => {
    return (
        <div>
            <footer className="footer pl-16 bg-[#151515] text-white h-[400px] items-center">
  <aside>
    <img className="text-white" src={logo} alt="" />
    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br />trainer who is also a serial .</p>
  </aside> 
  <nav>
    <header className="footer-title text-xl">About</header> 
    <a className="link link-hover text-sm">Home</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Contact</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl">Company</header> 
    <a className="link link-hover text-sm">Why Car Doctor</a>
    <a className="link link-hover">About</a>
  </nav> 
  <nav>
    <header className="footer-title text-xl">Supports</header> 
    <a className="link link-hover">Support Center</a>
    <a className="link link-hover">Feedback</a>
    <a className="link link-hover">Accessability</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;