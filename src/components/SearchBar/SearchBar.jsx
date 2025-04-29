import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

export default function SearchBar({ handleSearch }) {
  const toastStyle = {
    position: "top-right",
    style: {
      border: "1px solid #713200",
      padding: "13px",
      color: "#713200",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.term.value === "") {
      return toast("Enter text to search for images", toastStyle);
    }
    handleSearch(e.target.elements.term.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="term"
          className={s.searchField}
        />
        <button type="submit" className={s.submitBtn}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
