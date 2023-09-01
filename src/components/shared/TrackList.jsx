import TrackCard from "./TrackCard";

const TrackList = ({ tracks, py = 10 }) => {
  return (
    <section className={"grid gap-2 py-6"}>
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </section>
  );
};
export default TrackList;
