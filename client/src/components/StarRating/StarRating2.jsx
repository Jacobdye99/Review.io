import { FaStar } from 'react-icons/fa'
import './starRating.css'


export default function StarRating2(props) {
  return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return  <label key={i}>
                            {/* // eslint-disable-next-line react/jsx-no-duplicate-props */}
                            <input type='radio' name="rating" value={ratingValue} id="stars" onClick={props.handleTextInput} />
                            <FaStar className='star2' color={ratingValue <=  props.stars ? "#ffc107" : "#e4e5e9"} size={50} />
                    </label>
        })}
    </div>
  )
      }