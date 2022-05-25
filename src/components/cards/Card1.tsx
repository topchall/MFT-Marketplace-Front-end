import { useHistory } from 'react-router-dom';
import './card.scss'

const Card1 = (props) => {
  const { collection } = props;
  const router = useHistory();
	const gotToPage = (url:string)=>{
		props.history.push("/collections/" + collection.name);
	}
  
  return (
    <div className='card' onClick={()=>{gotToPage(collection.address)}}>
      <div className="imgContainer">
      <img src={collection.logo_uri} alt="" className="nft" />
        
      </div>
      <h4> <img src={collection.logo_uri} alt="" />{collection.name}</h4>
      <h3>{collection.description}</h3>
      <div className='stateVals'>
      <p>1030 <span>tokens</span></p>
      <p>124 <span>offers</span></p>
      </div>
    </div>
  )
}

export default Card1;