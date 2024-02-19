            const Square = ({ takeTurn, id, reset}) => {
            const mark = ['O', 'X', '+'];
            const [filled, setFilled] = React.useState(false);
            const [tik, setTik] = React.useState(2); 
            const [mounted, setMounted] = React.useState(true);
            const toggle= () =>setMounted(!mounted);
            
            if(mounted==false) {
                return null;
                
            }
            return (
              <button className="toggle-btn" type="button" 
                id={`square-button-${id}`}
                onClick={(ev) => {
                    setTik(takeTurn(id));
                    setFilled(true);
                    // Step 3: Trigger toggle() when button is clicked
                    toggle();
                }}>
                {mark[tik]}
                </button>
               
            );
            
            };

            const Board = () => {        
            const [player, setPlayer] = React.useState(1);
            const [gameState, setGameState] = React.useState([]);
            const [reset, setReset] = React.useState(false); 

            const toggle = () =>setReset(!reset);

            const takeTurn = (id) => {
                setGameState([...gameState, { id: id, player: player }]);
                setPlayer((player + 1) % 2); // get next player
                return player;
            };
            function renderSquare(i) {
                console.log("render square fucntion triggered");      
                return (
                    <Square takeTurn={takeTurn} id={i}></Square>
                    );
            }
            
            return (
                <div className="game-board">
                <div className="grid-row">
                    <Square id={1} takeTurn={takeTurn}></Square>
                    <Square id={2} takeTurn={takeTurn}></Square>
                    <Square id={3} takeTurn={takeTurn}></Square>
                </div>
                {reset && 
                      <div className="grid-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                   } 
                <div className="board-btn">
                    <button type="button" onClick={(ev)=>{
                        toggle();
                        console.log("reset button clicked");
                    }}>Reset</button>
                </div>
                </div>
            );
            };

            const Game = () => {
            return (
                <div className="game">
                <Board></Board>
                </div>
            );
            };

            // ========================================

            ReactDOM.render(<Game />, document.getElementById('root'));
