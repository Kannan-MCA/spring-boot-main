import './../Style/Card.css';
const Card = ({image,title,content}) => {
    return (
        <div className='top-row'>
            <div className="card-view">
                
                <div className='card-image'> 
                <img className="photo" src={image}/>
                </div>

                <div className='card-body'> 
                <div className='card-title'> {title}</div>
                <div className='card-content'> {content}</div>
                </div>
                
            </div>
        </div>
    )
}
export default Card