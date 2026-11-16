
import AuthButton from './AuthButton';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <div className='flex justify-between py-3 px-3 bg-blue-300'>
            <p>Our Web</p>

            <div className='hidden lg:block'>
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>

            <button className='hidden lg:block'>Login</button>
            <GiHamburgerMenu className='lg:hidden block' />
        </div>
    );
};

export default Header;