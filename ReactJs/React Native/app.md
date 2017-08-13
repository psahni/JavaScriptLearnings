----------------------
VIDEOS TO BE SEEN - 52
----------------------
* 'class' based components have life cycle methods. When to do what.
* componentWillMount() - when component is about to render.

  class AlbumList extends Component {
    componentWillMount() {
      console.log('componentWillMount in Albums')
    }
  }

* Debugger
  - ctrl + D


* axios
  - axios.get('rallycoding.herokuapp.com/api/music_albums')
  .then(response => console.log(response));

* Set the default state for the component

class AlbumList {
  state = { albums: [] };

  render() {
    return (
      <View>
        <Text>{this.state.albums}</Text>
      </View>
    )
  }
}


- axios.get('rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({albums: response.data}));

  *

  renderAlbumns() {
    return this.state.map(album => <Text key={album.title}>{album.title}</Text>)
  }

  render() {
    return(
      <View>
        {this.renderAlbums()}
      </View>
    )
  }

AlbumDetail.js

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}


const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}


----


* To make view scrollable (47)

<ScrollView>
..
</ScrollView>>

const App = () => {
  <View style={{flex: 1}}>
    <Header headerText={"Albums"}>
    <AlbumList />
  </View>
}



--------

* Button Component


<TouchableOpacity onPress={() => console.log("Hey!")}>
  <Text>Click Me!<Text>
<TouchableOpacity>

flex: 1
alignSelf: 'center'
color: '#007aff'

<Button>
</Button>
