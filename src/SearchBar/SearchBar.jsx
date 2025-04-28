import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ setSearchTerm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.term.value === "") {
      return toast("Enter text to search for images", {
        position: "top-right",

        style: {
          border: "1px solid #713200",
          padding: "13px",
          color: "#713200",
          
        },
      });
    }
    setSearchTerm(e.target.elements.term.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="term"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
