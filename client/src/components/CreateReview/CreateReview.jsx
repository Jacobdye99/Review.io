import { useState } from 'react'
import { createReview } from '../../services/reviews'
import { useNavigate } from 'react-router-dom'
import StarRating from '../StarRating/StarRating'


export default function CreateReview(props) {
  const review = {
    review: "",
    likes: 0,
    stars: 0,
    movie_id: props.movieId,
    poster: props.poster,
    movie_name: props.movieName
  }
  
  const [data, setData] = useState(review)
  const navigate = useNavigate()
  const handleCreate = async (e, data) => {
    e.preventDefault()
    await createReview(data)
    navigate('/reviews')
    
    // setToggle(prevToggle => !prevToggle)
}
const handleTextInput = (e) => {
  e.preventDefault()
  const {id, value} = e.target;
  setData((prevData) => ({
      ...prevData,
      [id]: value
  }))
  // console.log(data)
}
  // console.log(props.reviews)

  return (
    <form onSubmit={(e) => handleCreate(e, data)}>
      <textarea type='text' id='review' onChange={handleTextInput} className="Inputs"  />
      <StarRating handleTextInput={handleTextInput} stars={data.stars}/>
      <button type='submit' className='buttons'>Post</button>
    </form>
  )
}
