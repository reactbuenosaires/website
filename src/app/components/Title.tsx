import style from '../../../styles/main.module.css';

export default function Title(props){
    return(
        <h2 className={style.titles}>{props.title}</h2>

    )
}