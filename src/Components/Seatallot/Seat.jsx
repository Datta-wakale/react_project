import "./Seat.scss"
const Seat = ({ seat, selected, onSelect }) => {

  return (
    <button className={ seat.status === "booked"
          ? "seat booked"
          : selected
          ? "seat selected"
          : "seat available"
      }
      disabled={seat.status === "booked"}
      onClick={() => onSelect(seat)}>
      {seat.id}
    </button> );
};

export default Seat;