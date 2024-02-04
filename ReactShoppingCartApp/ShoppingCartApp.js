        
    const menuitems = [
          {name:"apple", instock:2},
          {name:"pineapple", instock:3},
          {name:"pear", instock:0},
          {name:"peach", instock:5},
          {name:"organge", instock:4},
          {name:"banana", instock:5}
      ]
        
    function NavBar({menuitems, minstock}){
             const updatedList = menuitems.map((item, index)=>{
              return (<li key={index}>{item.name}</li>);
             });
          return <ul style={{listStyleType:"none"}}>{updatedList}</ul>
        }
  ReactDOM.render(<NavBar menuitems={menuitems} minstock={2}/>, document.getElementById("root"));
