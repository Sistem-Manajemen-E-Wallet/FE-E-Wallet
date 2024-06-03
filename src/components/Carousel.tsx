import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div className="mt-10 py-10 bg-secondary-first px-10 mobile:px-0 mobile:p-0 w-full h-auto">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          loop
        >
          <SwiperSlide>
            <img
              src="https://www.europeanbusinessreview.com/wp-content/uploads/2021/09/Mobile-eWallet-Application-Types.png"
              className="w-full h-80"
              alt="image1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-web.ewhallet.com%2Fblogposts%2F1619414638849_what-is-touch-n-go-ewallet-go%2B-an-in-depth-look.jpg&f=1&nofb=1&ipt=6743b6d9fac1f82a3b1c2f4ec42e2bb149db93dc81e766e73e50da5f20b7c845&ipo=images"
              className="w-full h-80"
              alt="image2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cmarix.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F02%2FEverything-about-eWallet-Mobile-App-Development.png&f=1&nofb=1&ipt=4b7bda0ac04ac0cda3441b7fd4f3a72db5f9d238fa5c4b0c8ba1964c40491b70&ipo=images"
              className="w-full h-80"
              alt="image3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
