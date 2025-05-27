import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsFromSupabase } from "../../Redux/store/Comments";

export default function CustomerComments() {
  const dispath = useDispatch();

  const comments = useSelector((state) => state.Comments);

  useEffect(() => {
    dispath(getCommentsFromSupabase());
  }, []);

  return (
    <div className="relative mx-auto mt-20 md:mt-32 max-w-96 md:max-w-xl lg:max-w-[62rem]">
      {/* top */}
      <div>
        <img
          src="https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/other/Branch.png"
          alt=""
          className="absolute -top-20 right-0 md:-right-14 -z-10"
        />
        <img
          src="https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/other/Branch-l.png"
          alt=""
          className="absolute -top-20 left-0 md:-left-14 -z-10"
        />

        <h3 className="text-3xl md:text-5xl text-center">
          آنچه مشتریان ما می گویند
        </h3>
      </div>

      {/* bottom */}
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {comments.map((comment) => {
            return (
              <SwiperSlide key={comment.id}>
                <div className="flex flex-wrap items-center justify-evenly gap-16 mt-24 mb-20">
                  {/* right */}
                  <div className="flex flex-col justify-center items-center sm:m-10">
                    <img
                      src="https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/Home/home_4.png"
                      alt=""
                      className="absolute -z-10 md:max-w-md "
                    />
                    <p className="text-xs md:text-2xl max-w-96 ">
                      {comment.description}
                    </p>
                    <img
                      src={comment.img}
                      alt=""
                      className="w-10 h-10 md:w-20 md:h-20 rounded-full"
                    />
                    <p className="text-xs md:text-xl"> {comment.name}</p>
                  </div>

                  {/* left */}
                  <div>
                    <img
                      src="https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/Home/homeVideo2.png"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
