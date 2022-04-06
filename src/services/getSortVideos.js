export const sortVideos = (videos, sortBy) => {
  if (sortBy && sortBy !== "All") {
    return sortBy === "Sort by Latest"
      ? [...videos].sort((a, b) => {
          return new Date(b.uploaded) - new Date(a.uploaded);
        })
      : [...videos].filter((video) => video.category === sortBy);
  }
  return [...videos];
};
export function searchVideos(videos, search) {
  return search
    ? [...videos].filter((video) => video.title.toLowerCase().includes(search.toLowerCase()))
    : [...videos];
}
