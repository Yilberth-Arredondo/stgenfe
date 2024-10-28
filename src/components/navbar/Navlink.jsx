import { Link } from 'react-router-dom';
import proptypes from 'prop-types';
const NavLink = ({ to, children, classes }) => {
  return (
    <li className={`h-full ${classes}`}>
      <Link
        to={to}
        className="flex h-full flex-wrap content-center gap-2 border-b-2 border-transparent px-11 font-semibold duration-150 hover:border-b-sky-600 hover:bg-slate-400 hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
};
NavLink.propTypes = {
  to: proptypes.string.isRequired,
  children: proptypes.node.isRequired,
  classes: proptypes.string,
};
export default NavLink;
