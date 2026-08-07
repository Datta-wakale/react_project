import { useState, useMemo } from "react";
import { seatData } from "../../data/seatData";
import Seat from "../Seatallot/Seat"
import "./seatSelection.css";

const SeatSelection = () => {

    const [seats] = useState(seatData);
    const [selectedSeats, setSelectedSeats] = useState([]);
   
    const isSeatSelected = (seatId) => {
        return selectedSeats.some(
            (seat) => seat.id === seatId);
    };

    const handleSeatSelect = (seat) => {
        const alreadySelected = isSeatSelected(seat.id);
        if (alreadySelected) {
            setSelectedSeats(  selectedSeats.filter(
                    (item) => item.id !== seat.id )
            );
        }

        else {
            setSelectedSeats([
                ...selectedSeats,
                seat
            ]);
        }
    };
    /*
     Calculate Total Amount
    */
    const totalAmount = useMemo(() => {
        return selectedSeats.reduce((total, seat) => total + seat.price, 0);
    }, [selectedSeats]);


    return (

        <div className="seat-page">
            <h2>Select Your Seats</h2>
            <div className="screen">
                SCREEN
            </div>

            <div className="seat-container">
                {seats.map((seat) => (
                        <Seat key={seat.id}
                            seat={seat}
                            selected={ isSeatSelected(seat.id) }
                            onSelect={ handleSeatSelect } /> ))
                }
            </div>
            <div className="booking-details">
                <h3>
                    Selected Seats:
                </h3>
                { selectedSeats.map((seat) => (
                        <span key={seat.id}>
                            {seat.id}
                        </span>
                    ))
                }
                <h3>
                    Total Amount : ₹{totalAmount}
                </h3>
                <button> Proceed </button>
            </div>
        </div>
    );
};

export default SeatSelection;