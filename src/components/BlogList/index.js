// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {details} = props
  return (
    <ul>
      {details.map(eachItem => (
        <BlogItem userDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
