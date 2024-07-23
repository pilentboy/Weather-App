import { Outlet } from "react-router-dom";
import Select from 'react-select'


const Nav = () => {

       
    const options = [
        { value: 'en', label: 'EN' },
        { value: 'fa', label: 'FA' }
    ]

    return (
        <>
        <nav className="w-screen container fixed top-0 left-[50%] translate-x-[-50%] px-2 my-4  flex bg-transparent z-[999]">

         <Select 
                onChange={e=> console.log(e.value)}
                options={options} 
                defaultValue={options[0]}
                styles={{
                    container: (provided) => ({
                        ...provided
                    })
                }}
            />
       
        </nav>
        <Outlet/>
        </>
  
    );
}

export default Nav;
