export const sortVideos = (videos, sortBy) => {
  if (sortBy && sortBy !== "All") {
    return [...videos].filter((video) => video.category === sortBy);
  }
  return [...videos];
};
export const sortVideosByDate = (videos, sortByDate) => {
  if (sortByDate) {
    return [...videos].sort((a, b) => {
      return new Date(b.uploaded) - new Date(a.uploaded);
    });
  }
  return [...videos];
};
export function searchVideos(videos, search) {
  return search
    ? [...videos].filter((video) => video.title.toLowerCase().includes(search.toLowerCase()))
    : [...videos];
}
