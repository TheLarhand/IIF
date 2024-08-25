import { useMemo } from "react";

export const useSortedPosts = (posts, sort, sortInvert) => {
    const sortedPosts = useMemo(() => {
        console.log("sorted posts");
        let postsCopy = [...posts];
        
        if(sort === "name"){
          if(sortInvert){
            return [...postsCopy].sort((a, b) => b[sort].localeCompare(a[sort]))
          } 
          else {
            return [...postsCopy].sort((a, b) => a[sort].localeCompare(b[sort]))
          }
        }
    
          return postsCopy;
    
      }, [sort, sortInvert, posts])

      return sortedPosts
}

export const usePosts = (posts, sort, sortInvert, query) => {
    const sortedPosts = useSortedPosts(posts, sort, sortInvert);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => {
          const nameMatches = post.name.toLowerCase().includes(query.toLowerCase());
    
          return nameMatches;
        });
      }, [query, sortedPosts]);

      return sortedAndSearchedPosts;
}

// Сделай фильтры