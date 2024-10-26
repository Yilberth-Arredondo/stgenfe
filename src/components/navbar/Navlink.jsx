import { Link } from 'react-router-dom';
import proptypes from 'prop-types';
const NavLink = ({ to, children }) => {
  return (
    <li className="h-full">
      <Link
        to={to}
        className="h-full flex content-center flex-wrap border-b-2 border-transparent hover:border-b-sky-600 hover:bg-slate-400 duration-150 px-11 hover:text-white font-semibold"
      >
        {children}
      </Link>
    </li>
  );
};
NavLink.propTypes = {
  to: proptypes.string.isRequired,
  children: proptypes.node.isRequired,
};
export default NavLink;
