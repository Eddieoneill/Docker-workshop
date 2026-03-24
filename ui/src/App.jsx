import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [backCardImage, setBackCardImage] = useState(null);
  const [cards, setCards] = useState(null);
  const elementRef = useRef(null);
  const imageElement = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8000/cards")
      .then((data) => data.json())
      .then((cards) => {
        let tempArr = [];
        setBackCardImage(cards[0].image);
        cards.forEach((card, i) => {
          if (i !== 0) {
            tempArr.push(card.image);
          }
        });
        setCards(shuffleArray(tempArr));
      });
  }, []);

  useEffect(() => {
    if (elementRef && cards) {
      animateFlip(0);
    }
  }, [cards]);

  const animateFlip = (i) => {
    if (cards.length <= i) {
      setCards(shuffleArray(cards));
      animateFlip(0);
      return;
    }

    console.log(cards.length, i);

    if (elementRef.current.className === "card-sleeve flipped") {
      elementRef.current.className = "card-sleeve";
      setTimeout(() => animateFlip(i), 2000);
    } else {
      elementRef.current.className = "card-sleeve flipped";
      imageElement.current.src = cards[i];
      setTimeout(() => animateFlip(i + 1), 2000);
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  if (!backCardImage) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Welcome to my Docker Workshop App!</h1>
      <div ref={elementRef} className="card-sleeve">
        <div className="card-sleeve-inner">
          <div className="front">
            <img id="1" className="card" src={backCardImage} alt="backCard" />
          </div>
          <div className="back">
            <img
              ref={imageElement}
              id="2"
              className="card"
              src={backCardImage}
              alt="backCard"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
