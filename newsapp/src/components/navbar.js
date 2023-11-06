import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function navbar() {
    return (
        <div>
            <div className="p-4 rounded bg-black sticky top-0">
                <h3 className="text-white hover:text-yellow-200 pb-2 text-lg"><strong className="text-orange-700 hover:underline">N</strong>ews<strong className="text-orange-700 hover:underline">B</strong>ook</h3>
                <div className='flex flex-row text-white' >
                    <NavLink key="" to='/' className="p-1 mr-4 hover:text-yellow-600 " >Home</NavLink >
                    <NavLink key="business" to='/Business' className="p-1 mr-4  hover:text-yellow-600">Business</NavLink>
                    <NavLink key="Entertainment" to='/Entertainment' className="p-1 mr-4 hover:text-yellow-600">Entertainment</NavLink >
                    <NavLink key="General" to='/General' className="p-1 mr-4 hover:text-yellow-600">General</NavLink >
                    <NavLink key="Health" to='/Health' className="p-1 mr-4 hover:text-yellow-600">Health</NavLink >
                    <NavLink key="Science" to='/Science' className="p-1 mr-4 hover:text-yellow-600">Science</NavLink >
                    <NavLink key="sports" to='/Sports' className="p-1 mr-4 hover:text-yellow-600">Sports</NavLink >
                    <NavLink key="technology" to='/Technology' className="p-1 mr-4 hover:text-yellow-600">Technology</NavLink >
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default navbar;
