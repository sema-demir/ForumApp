import axios from "axios";
import { createContext, useState } from "react";

 export const PostContext = createContext()
 export function PostProvider ({children}) {
    const [posts, setPosts] = useState([])

    //post gönderme
    const addPost = (newPost) => {
//veritabanına yeni postu ekle
axios
.post("/posts", newPost)
.then((res) => {
    //statein en basına yeni postu ekle
setPosts([newPost, ...posts])
})


    }

    //post silme

    //post güncelleme

    return (
        <PostContext.Provider value={{ posts }}>
            {children}
        </PostContext.Provider>
    )

 }