import CassetteCard from "./CassetteCard";

const CassetteList = ({ playlists }) => {
  const heightContainer =
    playlists.length === 0 ? 0 : (playlists.length - 1) * 55 + 192.359;

  return (
    <section
      className="flex flex-col items-center mt-12 relative"
      style={{ height: `${heightContainer}px` }}
    >
      {playlists.map((playlist, index) => (
        <CassetteCard key={playlist.id} playlist={playlist} index={index} />
      ))}
    </section>
  );
};
export default CassetteList;
