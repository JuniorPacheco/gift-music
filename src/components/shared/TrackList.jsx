import TrackCard from "./TrackCard";

const TrackList = ({ tracks }) => {
  return (
    <section className="grid py-10 gap-2">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </section>
  );
};
export default TrackList;
