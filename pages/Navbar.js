import Link from "next/link";

const Navbar = () => {
    const menu =<>
        <li className="font-medium"><Link href='/home'>Home</Link></li>
        <li className="font-medium"><Link href='/program'>Program</Link></li>
        <li className="font-medium"><Link href='/blog'>Blog</Link></li>
        <li className="font-medium"><Link href='/about'>About us</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start  ml-5">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-primary normal-case text-xl">Gym</a><span className="ml-1 text-xl  text-blue-600">baran</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end mr-5 flex-none ">
                <a className="btn w-28 bg-blue-900 shadow-lg">Log In</a>
            </div>
        </div>
    );
};

export default Navbar;