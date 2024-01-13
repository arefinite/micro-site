export type THandleNavigation = {
  handleNavigation: (slideNo: number) => void
  slide: number
}

const Aside = ({ handleNavigation, slide }: THandleNavigation) => {
  return (
    <aside className='fixed top-1/2 transform -translate-y-1/2  right-0 space-y-8'>
      <div
        className={`cursor-pointer h-2 w-8 ${slide === 1 ? 'bg-white' : 'bg-black'} fixed right-0 ${slide === 0 && 'h-3 w-[3rem] md:w-16  bg-blue-600'}`}
        onClick={() => handleNavigation(0)}
      ></div>
      <div
        className={`cursor-pointer h-2 w-8 bg-black fixed right-0 ${slide === 1 && 'h-3 w-[3rem] md:w-16  bg-blue-600'}`}
        onClick={() => handleNavigation(1)}
      ></div>
    </aside>
  )
}
export default Aside
