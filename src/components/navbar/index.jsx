import {
  HomeIcon,
  NewspaperIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import NavLink from './Navlink';
import { useCart } from '../../hooks/useCart';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-slate-300">
      <img
        src="https://stgen.com/images/logo_stgenetics_200.png"
        alt="logo"
        className="ml-5 h-12 object-contain"
      />
      <ul className="flex h-full w-3/5 items-center gap-5">
        <NavLink to="/">
          <HomeIcon className="h-6 w-6" /> Home
        </NavLink>
        <NavLink to="/news">
          <NewspaperIcon className="h-6 w-6" /> News
        </NavLink>
        <NavLink to="/cart" classes="relative ml-auto">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="absolute left-1/2 top-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {totalItems}
          </span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
