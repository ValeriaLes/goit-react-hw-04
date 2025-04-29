import {MoonLoader} from "react-spinners";
import s from "./Loader.module.css"

export default function Loader() {
    return (
        <div className={s.loaderWrapper}>
        <MoonLoader/>
        </div>
    )
}