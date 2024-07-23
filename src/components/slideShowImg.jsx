
const SlideShowImg = ({src}) => {
    return (
        <img 
        src={process.env.PUBLIC_URL + `/assets/gif/${src}`}
        className="mx-auto h-14 " alt='weather image'/>
    );
}

export default SlideShowImg;
