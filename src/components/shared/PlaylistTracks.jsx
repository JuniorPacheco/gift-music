import PlaylistTrackCard from "./PlaylistTrackCard";

const PlaylistTracks = ({ tracks }) => {
  return (
    <section className="mt-4 max-h-[290px] overflow-y-auto scrollMusic">
      {tracks.map((track) => (
        <PlaylistTrackCard key={track.id} track={track} />
      ))}
    </section>
  );
};
export default PlaylistTracks;
