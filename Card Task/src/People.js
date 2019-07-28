import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

function searchingFor(searchTerm) {
     return function(x) {
          return x.name.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm;
     }
}

class People extends Component {
   constructor(props) {
        super(props)
   
        this.state = {
              peoplelist: [],
              errorMsg: '',
              searchTerm: ''
        }
        this.searchHandler = this.searchHandler.bind(this);
   }

   searchHandler(event) {
        this.setState({searchTerm: event.target.value})
   }

   componentDidMount() {
        axios.get('https://swapi.co/api/people/.')
           .then(response => {
                console.log(response)
                this.setState({peoplelist: response.data.results})
           })
           .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
           })
   }
     
   render() {
        const { peoplelist, errorMsg, searchTerm } = this.state;
        console.log(this.state.peoplelist);
        return (
             <div>
                 <form style={{textAlign: 'center'}}>
                     <TextField style={{width:'328px'}} label="Filter..." type="search" onChange={this.searchHandler} value={searchTerm} margin="normal"/>
                 </form>
                  {
                       peoplelist.length ? 
                       peoplelist.filter(searchingFor(searchTerm)).map(people => 
                          <div style={{marginLeft: '28.5%', marginBottom: '6px'}} key={people.name}>
                             <Card border="success" style={{ width: '33rem' }}>
                                <Card.Body>
                                   <ListGroup variant="flush">
                                      <ListGroup.Item><strong style={{marginRight: '18.5%'}}>Name :- </strong>{people.name}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '17%'}}>Height :- </strong>{people.height}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '20.5%'}}>Mass :- </strong>{people.mass}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '10%'}}>Hair Colour :- </strong>{people.hair_color}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '10.5%'}}>Skin Colour :- </strong>{people.skin_color}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '11.5%'}}>Eye Colour :- </strong>{people.eye_color}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '12.5%'}}>Birth Year :- </strong>{people.birth_year}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '17.5%'}}>Gender :- </strong>{people.gender}</ListGroup.Item>
                                      <ListGroup.Item><strong style={{marginRight: '10%'}}>Homeworld :- </strong>
                                          <Card.Link href="">{people.homeworld}</Card.Link>
                                      </ListGroup.Item>
                                      <ListGroup.Item><strong>Films :- </strong>
                                          <Card.Link href="">{people.films[0]}</Card.Link>
                                          <Card.Link href="">{people.films[1]}</Card.Link>
                                          <Card.Link href="">{people.films[2]}</Card.Link>
                                          <Card.Link href="">{people.films[3]}</Card.Link>
                                          <Card.Link href="">{people.films[4]}</Card.Link>
                                          <Card.Link href="">{people.films[5]}</Card.Link>
                                          <Card.Link href="">{people.films[6]}</Card.Link>
                                      </ListGroup.Item>                    
                                      <ListGroup.Item><strong>Species :- </strong>
                                          <Card.Link href="">{people.species}</Card.Link>
                                      </ListGroup.Item>
                                      <ListGroup.Item><strong>Vehicles :- </strong>
                                          <Card.Link href="">{people.vehicles[0]}</Card.Link>
                                          <Card.Link href="">{people.vehicles[1]}</Card.Link>
                                      </ListGroup.Item>
                                      <ListGroup.Item><strong>Starships :- </strong>
                                          <Card.Link href="">{people.starships[0]}</Card.Link>
                                          <Card.Link href="">{people.starships[1]}</Card.Link>
                                          <Card.Link href="">{people.starships[2]}</Card.Link>
                                          <Card.Link href="">{people.starships[3]}</Card.Link>
                                          <Card.Link href="">{people.starships[4]}</Card.Link>
                                      </ListGroup.Item>
                                      <ListGroup.Item><strong>Created :- </strong>{people.created}</ListGroup.Item>
                                      <ListGroup.Item><strong>Edited :- </strong>{people.edited}</ListGroup.Item>
                                      <ListGroup.Item><strong>Url :- </strong>
                                          <Card.Link href="">{people.url}</Card.Link>
                                      </ListGroup.Item>
                                   </ListGroup>
                                </Card.Body>
                              </Card>
                          </div>) :
                       null
                  }
                  { errorMsg ? [ 'danger' ].map((idx) => ( 
                                  <Alert style={{textAlign: 'center'}} key={idx} variant='danger'> <strong>{errorMsg}!</strong> </Alert>
                           ))
                 : null}
             </div>
        )
   }
}

export default People;