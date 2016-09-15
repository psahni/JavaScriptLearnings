https://www.youtube.com/watch?v=PGUMRVowdv8

React.render(<ReactComponent />,  document.getElementById('container'))

class Profile extends React.Component {

constructor(props){
  super(props){
    this.state = {
      height: 100
    }
  }
 }
  render(){
    return{
      <div className='profile'>
        <h2>Hello 1</h2>
        <h4>Hello 2</h4>
        <h4>{this.props.name}</h4>
      </div>
    }
  }
}


React.render(<Profile name='Prashant' />,  document.getElementById('container'))
