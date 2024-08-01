
const ModalContainer = ({children,action,display}) => {
    return (
        <div
        className={`w-screen h-dvh z-[1000] animate__fadeIn animate__animated animate__fast  ${display ? 'flex' : 'hidden'} bg-gray-800 bg-opacity-80 fixed`}
        onClick={e=> action(e)}
        >
            {children}
        </div>
    );
}

export default ModalContainer;
