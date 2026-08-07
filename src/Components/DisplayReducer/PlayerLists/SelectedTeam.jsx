import "./SelectedTeam.css";
import Seat from "../../Seatallot/Seat";

const SelectedTeam = ({ state, dispatch }) => {

    return (
        <div className="selected-team-container">
            <h2>  Selected Team </h2>
            {state.selectedPlayers.map(player => (
                    <div key={player.id}>
                        <h3> {player.name} </h3>
                        <button
                            onClick={() => dispatch({
                                type: "REMOVE_PLAYER",
                                payload: player.id
                            })}>
                            Remove
                        </button>
                    </div>
                ))
            }
            <h3>   Total Players:
                {state.selectedPlayers.length}
            </h3>
            <button onClick={() => dispatch({
                    type: "CLEAR_TEAM"
                })} >
                Clear Team
            </button>
        </div>
    )
}

export default SelectedTeam;