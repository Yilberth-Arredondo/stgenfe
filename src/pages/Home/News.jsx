import { Swiper, SwiperSlide } from 'swiper/react';
import newsList from '../../data/FakeNews';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';

const BreakingNews = () => {
  return (
    <div className="mt-8">
      <h1 className="mb-16 text-2xl font-bold text-slate-500">Breaking News</h1>
      <Swiper
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper h-full w-full"
      >
        {newsList.map(news => (
          <SwiperSlide key={news.id} className="rounded-md">
            <div className="rounded-lbg-sky-200 flex h-full flex-col items-center bg-slate-200 p-4 shadow-lg">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h2 className="mb-2 text-2xl font-bold">{news.title}</h2>
              <p className="mb-4 text-sm text-gray-500">{news.date}</p>
              <p className="text-base text-gray-700">{news.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a
        href="/news"
        className="ml-auto mt-16 flex w-36 items-center justify-end gap-2 rounded-md bg-blue-300 p-3 hover:bg-blue-400 hover:text-gray-200"
      >
        Watch more..
        <ArrowRightCircleIcon className="h-4 w-4" />
      </a>
    </div>
  );
};

export default BreakingNews;
