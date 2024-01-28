import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='px-10 py-4 flex items-center justify-between bg-slate-100 shadow-sm'>
            <div id='logo' className=''>
                <img src='/OIG.jpg' alt='logo' className='w-10' />
            </div>
            <div className='flex'>
                <div
                    className='px-3 mx-6  hover:border-b hover:border-black transition-all ease-in-out cursor-pointer'
                    onClick={() => {
                        navigate("/signin");
                    }}
                >
                    Sign In
                </div>
                <div
                    className='px-3 mx-6  hover:border-b hover:border-black transition-all ease-in-out cursor-pointer'
                    onClick={() => {
                        navigate("/signup");
                    }}
                >
                    Sign Up
                </div>
            </div>
        </div>
    );
};

export default Header;
