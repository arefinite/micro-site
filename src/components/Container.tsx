import SlideOne from './SlideOne'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import SlideTwo from './SlideTwo'

const Container = () => {
  const [slide, setSlide] = useState<number>(0)
  const handleNavigation = (slideNo: number) => {
    setSlide(slideNo)
  }
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setSlide(1)
      }
      if (event.deltaY < 0) {
        setSlide(0)
      }
    }

    window.addEventListener('wheel', handleWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])
  return (
    <section>
      <Header slide={slide} />
      {slide === 0 && <SlideOne />}
      {slide === 1 && <SlideTwo />}
      <Aside handleNavigation={handleNavigation} slide={slide} />
      <Footer handleNavigation={handleNavigation} slide={slide} />
    </section>
  )
}
export default Container
