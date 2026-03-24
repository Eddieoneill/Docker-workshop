import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [backCardImage, setBackCardImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/cards")
      .then((data) => data.json())
      .then(([cards]) => {
        setBackCardImage(cards.image);
      });
  }, []);

  if (!backCardImage) return <h1>Loading...</h1>;
  console.log(backCardImage);
  return (
    <>
      <img src={backCardImage} alt="backCard" />
    </>
  );
}

export default App;
