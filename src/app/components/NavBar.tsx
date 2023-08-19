import menuIcon from '../../../public/bars-solid.svg'
import Image from 'next/image'


export default function  NavBar() {
  return (
    <>
    <div className=''>
    <Image src={menuIcon} alt="Menu Icon" width={20} />
    </div>
    </>
  )
} ; 