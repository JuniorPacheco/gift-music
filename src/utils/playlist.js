const filterPlaylistByTitle = (playlists = [], title) => {
  return playlists.filter(playlist => playlist.title.toLowerCase().includes(title.toLowerCase()))
}

export {
  filterPlaylistByTitle
}