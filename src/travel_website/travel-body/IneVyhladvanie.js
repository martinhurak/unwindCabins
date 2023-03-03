import { useEffect, useState } from "react";
import city from "../city-data/sk.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function IneVyhladvanie(props) {
  // State
  // city array
  const [searchCityArray, setSearchCityArray] = useState([]);
  const [allcityArray, setAllCityArray] = useState();

  const [dropdownIsOpen, setDropDownIsOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState({ value: "", index: -1 });

  const dropdownResultsLength = 5;

  //get allCityArray
  useEffect(() => {
    setAllCityArray(city.map((a) => a.city));
  }, []);
  //

  function inputSearch(event) {
    props.setSearchState((oldVal) => {
      return { ...oldVal, location: event.target.value };
    });
    setDropDownIsOpen(true);
    const input = event.target.value;
    if (input.length > 0) {
      const normalizedInput = input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      setSearchCityArray(
        allcityArray
          .filter(
            (word) =>
              word.toLowerCase().includes(input.toLowerCase()) ||
              word
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(normalizedInput.toLowerCase())
          )
          .slice(0, dropdownResultsLength)
      );
    } else {
      setSearchCityArray([]);
    }
  }

  function blurHandler() {
    setTimeout(() => {
      setDropDownIsOpen(false);
    }, 200);
  }

  //key handler
  function getKey(key) {
    const arrowDown = key === "ArrowDown" ? true : false;
    const arrowUp = key === "ArrowUp" ? true : false;
    const enter = key === "Enter" ? true : false;

    if (enter === true && selectedCity.index !== -1) {
      setDropDownIsOpen(false);
      props.setSearchState((oldval) => {
        return { ...oldval, location: searchCityArray[selectedCity.index] };
      });
    }

    if (arrowDown === true && selectedCity.index < searchCityArray.length - 1) {
      setSelectedCity({
        value: searchCityArray[selectedCity.index + 1],
        index: selectedCity.index + 1,
      });
    }

    if (arrowUp === true && selectedCity.index > 0) {
      setSelectedCity({
        value: searchCityArray[selectedCity.index - 1],
        index: selectedCity.index - 1,
      });
    }
  }

  return (
    <>
      <div className="inputHolder">
        {props.location.length > 0 && (
          <div
            className="clearButton"
            onClick={() =>
              props.setSearchState((oldVal) => {
                return { ...oldVal, location: "" };
              })
            }
          ></div>
        )}
        <input
          type="text"
          className="search-input"
          placeholder="I want to go"
          value={props.location}
          onFocus={() => setDropDownIsOpen(true)}
          onBlur={blurHandler}
          onChange={(event) => {
            return (
              inputSearch(event), setSelectedCity({ value: "", index: -1 })
            );
          }}
          onKeyDown={(keyboard) => getKey(keyboard.key)}
        />
      </div>
      {dropdownIsOpen && props.location.length > 0 && (
        <ul className="locations-active">
          {searchCityArray.map((value) => (
            <li
              onClick={() => {
                return (
                  props.setSearchState((oldVal) => {
                    return { ...oldVal, location: value };
                  }),
                  setSelectedCity({ value: "", index: -1 })
                );
              }}
              style={
                value === selectedCity.value
                  ? { backgroundColor: "#808080" }
                  : { backgroundColor: "" }
              }
              key={value}
            >
              <FontAwesomeIcon icon={faLocationPin} /> {value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
