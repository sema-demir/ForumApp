const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-gray-800 p-5 sm:p-8 rounded-xl flex flex-col">
      <h2 className="font-bold text-2xl">{post.title}</h2>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            className="w-12 h-12 rounded-xl object-cover"
            src={post.author.image}
          />
          <div>
            <p>{post.author.name}</p>
            <p className="text-gray-400">{post.date} </p>
          </div>
        </div>

        <div 
        className="rounded-lg text-sm sm:text-base p-[5px] sm:p-[8px] text-center grid place-items-center">
          <span>{post.category} </span>
        </div>
      </div>
      <p className="line-clamp-4">{post.content}</p>
    </div>
   
  );
};

export default PostCard;
