import { useContext } from "react"
import PostCard from "./PostCard"
import { PostContext } from "../../context/PostContext"

const Listposts = () => {
  const { posts } = useContext(PostContext)
  return (
<div className="flex flex-col my-5 gap-5">
  {posts?.map((post) => (
      <PostCard key={post.id} post={post}/>
    ))
  }
</div>

   
  )
}

export default Listposts