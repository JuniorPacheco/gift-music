import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderAlbums = ({ albums }) => {
  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      className="mySwiper mt-4"
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <article>
            <div>
              <img
                src={album.images[0].url}
                className="w-full h-auto rounded-xl"
                alt="Album song image"
              />
            </div>
            <h3 className="text-sm mt-3 truncate">{album.name}</h3>
            <h4 className="text-sm text-gray-400 mt-1 truncate">
              {album.artists[0].name}
            </h4>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SliderAlbums;
