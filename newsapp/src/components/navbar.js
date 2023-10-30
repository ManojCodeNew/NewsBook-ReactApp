import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function navbar() {
    return (
        <div>
        <div className="p-6 rounded bg-black">
            <h3 className="text-white hover:text-blue-200">NewsBook</h3>
            </div>
            <div className='flex flex-row text-black' >
                    <NavLink key="" to='/' className="p-1 mr-4 hover:text-yellow-600 " >Home</NavLink >
                    <NavLink key="business" to='/Business' className="p-1 mr-4  hover:text-yellow-600">Business</NavLink>
                    <NavLink key="Entertainment" to='/Entertainment' className="p-1 mr-4 hover:text-yellow-600">Entertainment</NavLink >
                    <NavLink key="General" to='/General' className="p-1 mr-4 hover:text-yellow-600">General</NavLink >
                    <NavLink key="Health" to='/Health' className="p-1 mr-4 hover:text-yellow-600">Health</NavLink >
                    <NavLink key="Science" to='/Science' className="p-1 mr-4 hover:text-yellow-600">Science</NavLink >
                    <NavLink key="sports" to='/Sports' className="p-1 mr-4 hover:text-yellow-600">Sports</NavLink >
                    <NavLink key="technology" to='/Technology' className="p-1 mr-4 hover:text-yellow-600">Technology</NavLink >
                </div>
                <div>
                    <Outlet />
                </div>
        </div>
    )
}
export default navbar;
