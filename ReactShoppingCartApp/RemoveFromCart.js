
function RemoveTodos({item,index,removeTodoItem}){
 function removeHandle(){
    removeTodoItem(index);
 }
return (<div className="addItems" onClick={removeHandle}>{item.text}(-)</div>);
}