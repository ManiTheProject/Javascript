

var D = class extends React.Component{
  render(){
    return(
      <div>
      <h2>Component</h2>
        <p>Child component</p>
       </div>
    );
  }};

var Movie = class extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.genre}</h3>
        </div>
    );
  } 
};

var Comment = class extends React.Component{
  render (){
    return (
      <div className="CommentContainer">
        <div>Coment blah blah</div>
      </div>
    )
  }
};

ReactDOM.render(
  <div>
  <Movie title = "Avatar" genre = "action"/>
  <Movie title = "Notebook" genre = "romance"/>
  </div>,
  document.getElementById('root')
);
