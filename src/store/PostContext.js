import { useState } from "react";
import { createContext } from "react";

export const PostContext = createContext(null);

const Post = ({ children }) => {
  const [postDetails, setPostDetails] = useState([]);
  return (
    <PostContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostContext.Provider>
  );
};

export default Post;
