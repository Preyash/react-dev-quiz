import { useState } from "react";

export default function SearchBar() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const changeHandle = (e) => {
    setText(e.target.value);
    setError(false);
  };

  const clickHandle = () => {
    setLoading(true);
    fetch(`https://api.datamuse.com/words?rel_rhy=${text}`)
      .then((res) => res.json())
      .then((data) => {
        data.length === 0 ? setError(true) : setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search your rhyme"
            value={text}
            onChange={changeHandle}
          />
          <button onClick={clickHandle}>
            <img src="https://img.icons8.com/fluency/48/000000/search.png" />
          </button>
        </div>
      </div>
      <>
        {loading ? (
          "Loading..."
        ) : error ? (
          "Result not found"
        ) : (
          <div className="boxes">
            {data.map((i, j) => (
              <div key={i.word} className="box">
                {i.word}
              </div>
            ))}
          </div>
        )}
      </>
    </>
  );
}
