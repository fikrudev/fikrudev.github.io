function AddItemsToDoList({addToDoNew}){
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
     e.preventDefault();
     if(!value) return;
     addToDoNew(value);
     setValue('');
    }
    return (
     //on submit triggers when user presses "enter" key from his/her computer keyboard
     <form onSubmit={handleSubmit}>
       <input type="text" className="addToDoItems" value={value} placeholder="add items..." onChange={e =>setValue(e.target.value)}/>
     </form>
    );
}
