import style from '@/app/components/hero/heroSection.module.css'

export default function HeroSection() {
  return (
    <div className={style.hero_Main}>
      <div className={style.hero_bg}>
      </div>
      <div className={style.outer_Heading}>
        <h1 className={style.h1_Title}>
          COMUNIDAD REACT BA
          <div className={style.inner_Heading}>
            <span className={style.span1}>
              POR
            </span>
            <span className={style.span2}>
              PARA
            </span>
          </div>
          DESARROLLADORES
        </h1>
      </div>
    </div>
  )
}
