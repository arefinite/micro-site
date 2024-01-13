import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { CSSProperties, useEffect, useState } from 'react'
import axios from 'axios'

type TCard = {
  title: string
  description: string
}

const SlideTwo = () => {
  const [data, setData] = useState<TCard[]>([])
  const [image, setImage] = useState<string>('')
  const getImage = async () => {
    const res = await axios.get('data/asset.json')
    setImage(res.data[0].image)
  }

  const getData = async () => {
    const res = await axios.get('data/card.json')
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getImage()
  }, [])


  return (
    <>
      <main className='absolute inset-0 -z-10'>
        <img
          src={image}
          alt='globe'
          className='object-cover object-top w-full h-full'
        />
      </main>

      <section className='fixed top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-center w-full px-16 md:px-0 md:max-w-[800px] md:ml-36 text-white'>
        <>
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={10}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper md:mx-[80px] md:static'
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 7,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 7,
              },
            }}
            style={
              {
                '--swiper-navigation-color': '#fff',
              } as CSSProperties
            }
          >
            {data?.length > 0 &&
              data.map(d => (
                <SwiperSlide
                  key={d.title}
                  className='bg-white text-black opacity-70  text-left p-4 rounded-tl-[2rem] rounded-br-[2rem]'
                >
                  <h1 className='text-xl font-bold'>{d.title}</h1>
                  <p className='mt-4'>{d.description}</p>
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      </section>
    </>
  )
}
export default SlideTwo
