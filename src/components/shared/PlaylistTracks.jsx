import PlaylistTrackCard from "./PlaylistTrackCard"

const PlaylistTracks = ({tracks}) => {
  return (
    <section className="mt-4">
      {
        tracks.map(() => <PlaylistTrackCard />)
      }
    </section>
  )
}
export default PlaylistTracks