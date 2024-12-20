import {MdFavorite,MdFavoriteBorder} from 'react-icons/md'
import { useState } from 'react';
function FavoriteButton(){

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickButton = ()=>{
    setIsFavorite(!isFavorite)
  }


    return (
        <div className='favorite'>
        <span className='favorite__text' >Favorite</span>
        <button className='favorite__button' onClick={handleClickButton} > {isFavorite?<MdFavorite className='favorite__button__icon' />:<MdFavoriteBorder className='favorite__button__icon' />}  
      </button> 
      </div>
    )
}

export default FavoriteButton