import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between px-12 py-6 bg-amber-600 text-white'>
            <Link to={'/'}><button>Our website</button></Link>
            <Link to={'/login'}><button>Login</button></Link>
        </div>
    );
};

export default Navbar;