
const Container = ({children}) => {
    return (
        <div className='w-screen min-h-screen relative bg-gray-900 overflow-x-hidden	'>
            {children}
        </div>  
    );
}

export default Container;
