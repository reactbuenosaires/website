import menuIcon from '../../../../public/bars-solid.svg'
import style from './MainHeader.module.css'
import Image from 'next/image'


export default function MainHeader() {
  return (
    <>
      <div className={style.nav}>
        <Image src={menuIcon} alt="Menu Icon" width={20} />
      </div>
    </>
  )
}; 