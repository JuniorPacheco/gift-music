const PlaySong = ({ trackId }) => {
  return (
    <section className="py-2 pt-4">
      <iframe
        style={{ borderRadius: "12px" }}
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
};
export default PlaySong;
