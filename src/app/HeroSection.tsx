import style from '../../styles/heroSection.module.css'

export default function HeroSection() {
  return (
    <div className={style.hero_bg}>
    <div className={style.outerHeading}>
        <h1 className={style.title}>
          Comunidad de React BA 
          <div className={style.innerHeading}>
          <span className={style.span1}>
            por
          </span>
          <span className={style.span2}>
            para
          </span>
          </div>
          Desarrolladores
          </h1>
    </div>
    </div>
  )
}
