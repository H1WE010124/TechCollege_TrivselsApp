import { Link } from "react-router-dom"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import style from './BackButton.module.scss'


export const BackButton = ({page}) => {
  return (
    <Link className={style.backButtonStyling} to={`/${page}`}><KeyboardReturnIcon/></Link>
  )
}