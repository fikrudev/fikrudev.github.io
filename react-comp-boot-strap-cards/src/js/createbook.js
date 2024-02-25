import { jpaylod } from "./payload";
function CreateBook () {
  const data = jpaylod.books;
  let Books = [];
  for(let i=0; i<data.length; i++){
    Books[i] = Mybook(data[i], i);
  }
  return Books;
  return(
     <div className="container">
      <h1>List of Books</h1>
       <Books/> 
     </div>
    );
  }

function Mybook (props, i){
  return(
    <div className="card" key={i}>
    <h5 className="card-header">{props.title}</h5>
    <div className="card-body">
        <table className="card-text">
        <tbody>
          <tr>
            <td className="text-success font-weight-bold">Title:</td>
            <td>{props.title}</td>
          </tr>
          <tr>
            <td className="text-success font-weight-bold">SubTitle:</td>
            <td>{props.subtitle}</td>
          </tr>
          <tr>
            <td className="text-success font-weight-bold">Author:</td>
            <td>{props.author}</td>
          </tr>
          <tr>
            <td className="text-success font-weight-bold">Description:</td>
            <td>{props.description}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>);
}

export default CreateBook;