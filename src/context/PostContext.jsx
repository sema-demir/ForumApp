import axios from "axios";
import { createContext, useEffect, useState } from "react";

 export const PostContext = createContext()
 export function PostProvider ({ children }) {
    const [posts, setPosts] = useState([])
    //kullanıcı sayfaya girince verileri al
    useEffect(() => {
        axios.get('/posts')
        .then((res) => setPosts(res.data))
    }, [])



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
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    )

 }