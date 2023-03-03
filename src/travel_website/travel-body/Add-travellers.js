import { useEffect, useRef, useState } from "react";

export default function AddTravellers(props) {
  const [travelersOptionsValues, setTravelersOptionsValues] = useState([
    { name: "Adults", quantity: 1, id: 0 },
    { name: "Childrens", quantity: 0, id: 1 },
    { name: "Rooms", quantity: 1, id: 2 },
  ]);

  const ref = useRef(null);

  const [travelerOptionsActive, setTravelerOptionsActive] = useState(false);

  const [inputValueIsEmpty, setInputValueIsEmpty] = useState(true);

  //handle dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTravelerOptionsActive(false);
      }
    }
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setTravelerOptionsActive]);
  //update quantity

  function updateQuantity(index, value, sign, name, event) {
    event.preventDefault();
    setTravelersOptionsValues((prevValues) => {
      const newArr = [...prevValues];
      let newValue = sign === "+" ? value + 1 : value - 1;
      if (name === "Childrens" && newValue < 0) {
        newValue = 0;
      }
      //there must be at least one adult and one room
      else if (name !== "Childrens" && newValue < 1) {
        newValue = 1;
      }
      newArr[index] = { ...newArr[index], quantity: newValue };
      return newArr;
    });
  }

  //inputValue

  const numberOfAdults = travelersOptionsValues[0].quantity;
  const numberOfChildrens = travelersOptionsValues[1].quantity;
  const numberOfRooms = travelersOptionsValues[2].quantity;

  const inputValue = ` ${
    numberOfAdults > 1 ? `Adults ` : `Adult `
  } ${numberOfAdults} ${
    numberOfChildrens > 0
      ? numberOfChildrens > 1
        ? `Children ` + numberOfChildrens
        : `Child ` + numberOfChildrens
      : ""
  }
  ${numberOfRooms > 1 ? `Rooms ` : `Room `}${numberOfRooms} `;

  //dropdown

  const travelersOptions = travelersOptionsValues.map((value) => (
    <div key={value.id} className="travelersOptions-container">
      {value.name === "Childrens" ? (
        <div>
          <span>{value.name}</span>
          <span className="children-age">Ages 0 - 17</span>
        </div>
      ) : (
        <span>{value.name}</span>
      )}

      <div className="numberOfguest-container">
        <button
          onClick={(event) =>
            updateQuantity(value.id, value.quantity, "+", value.name, event)
          }
        >
          +
        </button>
        <span>{value.quantity}</span>
        <button
          style={
            (value.quantity === 1 && value.name !== "Childrens") ||
            value.quantity === 0
              ? { color: "#00000060", cursor: "not-allowed" }
              : {}
          }
          onClick={(event) =>
            updateQuantity(value.id, value.quantity, "-", value.name, event)
          }
        >
          -
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="travelersHolder">
        <input
          className="set-people-input"
          placeholder="Travellers"
          value={inputValueIsEmpty ? "" : inputValue}
          readOnly={true}
          onClick={() =>
            setTravelerOptionsActive(true) + setInputValueIsEmpty(false)
          }
        />
        {travelerOptionsActive && (
          <div ref={ref} className="travelersOptions-active">
            {travelersOptions}
          </div>
        )}
      </div>
    </>
  );
}
// stefana nahalku 8 


// fazulova konzervva v paradjkovom naleve 
// saučkova držkova polievky 
// uvarim zemiaky , na konci konzervu , konzervu naraz zo zemiakmi 