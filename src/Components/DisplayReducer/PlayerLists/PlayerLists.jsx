import "./PlayerLists.css";
import { players } from "../../../data/player";
import { toast } from "react-toastify";

const PlayerList = ({ dispatch }) => {

    const handleSelectPlayer = (player) => {

        // const exists = state.selectedPlayers.some(
        //     p => p.id === player.id
        // );

        // if (exists) {
        //     toast.warning(`${player.name} is already in the team! `, {
        //         position: "top-center",
        //     });
        //     return;
        // }

        dispatch({
            type: "ADD_PLAYER",
            payload: player,
        });

        toast.success(`${player.name} has been selected for the team! 🇮🇳`, {
            position: "top-center",

        });

    };

    return (

        <div className="player-container">
            <h2>Available Players</h2>
            {players.map(player => (
                <div className="player-card"
                    key={player.id}>

                    <div>
                        <h3>{player.name}</h3>
                        <p>Role: {player.role}</p>
                        <p>Country: {player.country}</p>
                        {player.runs && (<p>Runs: {player.runs}</p>)}
                        {player.wickets && (<p>Wickets: {player.wickets}</p>)}
                        {player.matches && (<p>Matches: {player.matches}</p>)}
                        {player.innings && (<p>Innings : {player.innings}</p>)}
                    </div>

                    <button onClick={() => handleSelectPlayer(player)}>
                        Select Player
                    </button>

                </div>
            ))}

        </div>
    )
}


export default PlayerList;