import TrackCardByPlaylist from "./TrackCardByPlaylist";

const TracksListByPlaylist = ({
  tracks,
  playlistId,
  deleteTrackOnPlaylist,
  showPlayButton,
  showDeleteButton,
}) => {
  console.log(tracks)
  return (
    <section className="mt-4 grid gap-2">
      {tracks.map((track) => (
        <TrackCardByPlaylist
          key={track.id}
          track={track}
          playlistId={playlistId}
          deleteTrackOnPlaylist={deleteTrackOnPlaylist}
          showPlayButton={showPlayButton}
          showDeleteButton={showDeleteButton}
        />
      ))}
    </section>
  );
};
export default TracksListByPlaylist;
