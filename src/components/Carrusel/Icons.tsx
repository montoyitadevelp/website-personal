import { Swiper, SwiperSlide } from "swiper/react";
import { SlideInfo, SlideState } from "../../interfaces";
import { Fragment, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { IconArrowBigLeft, IconArrowBigRight } from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import { Database, Front, Info, Tool } from "./InfoIcons/Info";

export const Icons = () => {
  const [items, setItems] = useState<SlideState>();

  const Languages: SlideInfo[] = [
    {
      languages: {
        ts: <Icon width={70} height={70} icon="skill-icons:typescript" />,
        js: <Icon width={70} height={70} icon="skill-icons:javascript" />,
      },
      frontend: {
        react: <Icon width={70} height={70} icon="skill-icons:react-light" />,
        tailwind: (
          <Icon width={70} height={70} icon="skill-icons:tailwindcss-light" />
        ),
        daisy: <Icon width={70} height={70} icon="logos:daisyui" />,
      },
      databases: {
        postgresql: (
          <Icon width={70} height={70} icon="skill-icons:postgresql-light" />
        ),
        supabase: (
          <Icon width={70} height={70} icon="skill-icons:supabase-light" />
        ),
        vercel: (
          <Icon width={70} height={70} icon="vscode-icons:file-type-vercel" />
        ),
      },
      tools: {
        express: (
          <Icon width={70} height={70} icon="skill-icons:expressjs-light" />
        ),
        node: (
          <Icon width={70} height={70} icon="vscode-icons:file-type-node" />
        ),
        git: <Icon width={70} height={70} icon="devicon:git" />,
        pnpm: <Icon width={70} height={70} icon="devicon:pnpm" />,
        biome: <Icon width={70} height={70} icon="logos:rome" />,
      },
    },
  ];
  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={"auto"}
        onSwiper={(swiper) => setItems(swiper)}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 200,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 300,
          },
        }}
      >
        {Languages.map((icons, iconsIndex) => (
          <Fragment key={`iconsIndex-${iconsIndex}`}>
            <SwiperSlide>
              <Info languages={icons.languages} />
            </SwiperSlide>
            <SwiperSlide>
              <Front frontend={icons.frontend} />
            </SwiperSlide>
            <SwiperSlide>
              <Database databases={icons.databases} />
            </SwiperSlide>
            <SwiperSlide>
              <Tool tools={icons.tools} />
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
      <div className="flex justify-center gap-[2rem] pt-[2rem] pb-[1rem] text-danger-50 ">
        <button
          className="hover:text-primary-50  "
          onClick={() => items?.slidePrev()}
        >
          <IconArrowBigLeft />
        </button>
        <button
          className="hover:text-white  "
          onClick={() => items?.slideNext()}
        >
          <IconArrowBigRight />
        </button>
      </div>
    </>
  );
};
