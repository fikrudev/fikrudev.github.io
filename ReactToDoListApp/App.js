        
        function App(){
             const [todos, setToDos] = React.useState([
              {text:'Walkup', isComplete:false},
              {text:'Drink Water', isComplete:false},
              {text:'Clean House',  isComplete:false},
              {text:'Make Coffee',  isComplete:false}
             ]);
            const addToDoNew = text => {
                const newItems = [...todos, {text:text, isComplete:false}];
                setToDos(newItems);
               }
            const removeTodoItem = index => {
                //const idx = Number(e.target.id);
                let tmp = [...todos];
                tmp.splice(index,1);
                setToDos(tmp); 
             }
            return (
                <>
                  {todos.map((itm, i) => 
                  <RemoveTodos  removeTodoItem={removeTodoItem} index={i} key={i} item={itm}/>)}  
                  <AddItemsToDoList addToDoNew={addToDoNew}/>
                </>);
        }
          ReactDOM.render(<App/>, document.getElementById("root"));
