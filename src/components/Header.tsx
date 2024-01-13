type TSlide = {
  slide: number
}
const Header = ({ slide }: TSlide) => {
  return (
    <header className='flex justify-between p-4 relative z-10'>
      <div
        className={`border ${
          slide === 1 ? 'border-white text-white' : 'border-black text-black'
        } px-8 py-1`}
      >
        Logo
      </div>
      <div
        className={`${
          slide === 1 ? 'block text-gray-400 uppercase' : 'hidden'
        }`}
      >
        Discover More
      </div>
    </header>
  )
}
export default Header
