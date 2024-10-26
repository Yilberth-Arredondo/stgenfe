import NavLink from './Navlink';

const Navbar = () => {
  return (
    <nav className="sticky top-0 mb-5 flex h-20 w-full flex-wrap items-center bg-slate-300">
      <img
        className="ml-5 h-12 object-contain"
        src="https://www.stgen.com/images/STGeneticsLogo_medium.png"
        alt="logo"
      />
      <ul className="mx-auto flex h-full gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
