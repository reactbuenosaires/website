import menuIcon from '../../../public/bars-solid.svg'
import style from '../../../styles/navBar.module.css'
import Image from 'next/image'


export default function  NavBar() {
  return (
    <>
    <div className={style.nav}>
    <Image src={menuIcon} alt="Menu Icon" width={20} />
    </div>
    </>
  )
} ; 