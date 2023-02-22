// Write your JS code here
const BlogItem = props => {
  const {userDetails} = props
  const {id, title, description, publishedDate} = userDetails
  return (
    <li key={id}>
      <div>
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
