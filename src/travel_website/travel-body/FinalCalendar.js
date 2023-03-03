import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function FinalCalendar(props) {
  const [date, setDate] = useState(new Date());
  const ref = useRef(null);

  const [lengthOfStay, setLengthOfStay] = useState({
    checkIn: "",
    checkOut: "",
  });

  const [activeCalendar, setActiveCalendar] = useState(false);

  // handle click outside

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveCalendar(false);
      }
    }
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setActiveCalendar]);

  function dayHandler(day) {
    
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const inputDay = day.toLocaleDateString(undefined, options);

    if (lengthOfStay.checkIn === "" || lengthOfStay.checkOut !== "") {
      // If checkIn date is not set or checkOut date is already set, set checkIn date
      setLengthOfStay({ checkIn: inputDay, checkOut: "" });
    } else if (day < new Date(lengthOfStay.checkIn)) {
      // If checkOut date is before checkIn date, swap the values
      setLengthOfStay({ checkIn: inputDay, checkOut: lengthOfStay.checkIn });
    } else {
      // Set checkOut date
      setLengthOfStay({ ...lengthOfStay, checkOut: inputDay });
    }
  }

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 90);
  console.log(date);

  return (
    <><div className="dateHolder">
      <input
        className="datepicker"
        onClick={() => setActiveCalendar(true)}
        value={
          lengthOfStay.checkIn !== ""
            ? lengthOfStay.checkIn + " - " + lengthOfStay.checkOut
            : ""
        }
        readOnly={true}
        placeholder={"Check in - Check out"}
      />
      {activeCalendar && (
        <Calendar
          inputRef={ref}
          value={date.length > 0 ? date : undefined}
          minDate={minDate}
          maxDate={maxDate}
          selectRange={true}
          onClickDay={(day) => dayHandler(day)}
          onChange={setDate}
          minDetail="year"
        />
      )}
      </div>
    </>
  );
}
