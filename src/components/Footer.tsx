import { FaAngleDown } from 'react-icons/fa6'
import { FaAngleUp } from 'react-icons/fa6'
import { THandleNavigation } from './Aside'

const Footer = ({ slide, handleNavigation }: THandleNavigation) => {
  return (
    <footer className='fixed bottom-4 left-1/2 transform z-30 -translate-x-1/2'>
      {slide === 0 && (
        <FaAngleDown
          onClick={() => handleNavigation(1)}
          className='cursor-pointer text-6xl text-blue-600'
        />
      )}
      {slide === 1 && (
        <FaAngleUp
          onClick={() => handleNavigation(0)}
          className='cursor-pointer text-6xl text-blue-600'
        />
      )}
    </footer>
  )
}
export default Footer
