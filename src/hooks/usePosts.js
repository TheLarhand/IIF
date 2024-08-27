import { useMemo } from "react";

export const useSortedPosts = (posts, sort, sortInvert) => {
    const sortedPosts = useMemo(() => {
        console.log("sorted posts");
        let postsCopy = [...posts];
        
        if(sort === "title"){
          if(sortInvert){
              return [...postsCopy].sort((a, b) => {
                  const aValue = a[sort] || '';
                  const bValue = b[sort] || '';
                  return aValue.localeCompare(bValue);
              });
          } 
          else {
              return [...postsCopy].sort((a, b) => {
                  const aValue = a[sort] || '';
                  const bValue = b[sort] || '';
                  return bValue.localeCompare(aValue);
              });
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
          const nameMatches = post.title.toLowerCase().includes(query.toLowerCase());
    
          return nameMatches;
        });
      }, [query, sortedPosts]);

      return sortedAndSearchedPosts;
}

// Сделай фильтры