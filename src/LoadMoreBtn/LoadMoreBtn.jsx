import s from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({handleBtn}) {
    return (
        <div className={s.buttonWrapper}>
        <button onClick={handleBtn} className={s.loadMoreBtn}>Load more </button>
        </div>
    )
}