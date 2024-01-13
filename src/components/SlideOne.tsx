import axios from 'axios'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const SlideOne = () => {
  const [video, setVideo] = useState<string>('')
  const getVideo = async () => {
    const res = await axios.get('data/asset.json')
    setVideo(res.data[0].video)
  }
  useEffect(() => {
    getVideo()
  }, [])

  return (
    <>
      <main className='absolute inset-0 -z-10'>
        <video
          src={video}
          autoPlay
          muted
          loop
          className='object-cover w-full h-full'
        />
      </main>
      <section className='absolute inset-0 bg-white opacity-50'></section>
      <section className='fixed top-1/2 left-1/2 -translate-x-1/2 transform -translate-y-1/2 text-center w-full px-16 md:px-0 md:max-w-[600px]'>
        <h1 className='text-2xl md:text-6xl uppercase'>
          Lorem <span className='border-b-4 border-black'>ipsum</span> dolor
        </h1>
        <p className='mt-8 text-lg'>
          <TypeAnimation
            preRenderFirstString={false}
            sequence={[
              500,
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', // initially rendered starting point
              1000,
              'It is a long established fact that a reader will be distracted by the readable desktop publishing packages and web page editors.',
              1000,
              'It is a long established fact that a reader will be distracted by the readable random words which looks even slightly believable.',
              1000,
              'It is a long established fact that a reader will be distracted by the readable sometimes on purpose (injected humour and the like).',
              500,
            ]}
            speed={20}
            repeat={Infinity}
          />
        </p>
      </section>
    </>
  )
}
export default SlideOne
