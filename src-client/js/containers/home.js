import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image, List, Segment, Card, Item, Input, Button } from 'semantic-ui-react';

class Home extends Component {
  
  componentDidMount() {
    console.log('home mounted');
  }
  
  render() {
    const bookitems = [
      {
        childKey: 0,
        image: '/assets/images/wireframe/image.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
      },
      {
        childKey: 1,
        image: '/assets/images/wireframe/image.png',
        header: 'Header',
        description: 'Description',
        meta: 'Metadata',
        extra: 'Extra',
      },
    ]

    return (
      <Container textAlign='center' className='container'>
      <Divider hidden />
      <Grid columns='equal' padded>  
        <Grid.Row>
          <Grid.Column width={6}>
              <Image src='http://www.freeiconspng.com/uploads/red-square-png-14.png' size='small' floated='right'/>
          </Grid.Column>
          <Grid.Column width={8} textAlign='left' verticalAlign='middle'>
            <Header as='h1'>Welcome to my website!</Header>
            <p>Lorem Ipsum alkdjfla alkjdflak jkl alkja fnjkie nvnaklur asluz ae akle aajviala al s aijn ruy znx ai sahfjda adlkjfa aijn ruy znx ai sahfjda adlkjfa aijn ruy znx ai sahfjda adlkjfa!</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
              logo 1
          </Grid.Column>
          <Grid.Column>
              logo 2
          </Grid.Column>
          <Grid.Column>
              logo 3
          </Grid.Column>
        </Grid.Row>
        
        <Divider hidden />

      </Grid>
    
    <Divider hidden />
    <Divider />
    <Divider hidden />
    <h2>--- Social ---</h2>
    
    <Grid columns='equal' padded> 
      <Grid.Row>
        <Grid.Column>
          social 1
        </Grid.Column>
        <Grid.Column>
          social 2
        </Grid.Column>
        <Grid.Column>
          social 3
        </Grid.Column>
      
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          social 1
        </Grid.Column>
        <Grid.Column>
          social 2
        </Grid.Column>
        <Grid.Column>
          social 3
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider hidden />
    <h2>--- Featured Blog Posts ---</h2>
    <Divider hidden />
    

    <Card.Group stackable textAlign='center'>
    <Card centered>
      <Card.Content>
        <Card.Header>High performing teams</Card.Header>
        <Card.Meta>Chris Bee</Card.Meta>
        <Card.Description>Lorem Ipsum ald usda dafdadfbnuo lkajudl vvr </Card.Description>
      </Card.Content>
    </Card>

     <Card centered>
      <Card.Content>
        <Card.Header>High performing teams</Card.Header>
        <Card.Meta>Chris Bee</Card.Meta>
        <Card.Description>Lorem Ipsum ald usda dafdadfbnuo lkajudl vvr </Card.Description>
      </Card.Content>
    </Card>

    <Card centered>
      <Card.Content>
        <Card.Header>High performing teams</Card.Header>
        <Card.Meta>Chris Bee</Card.Meta>
        <Card.Description>Lorem Ipsum ald usda dafdadfbnuo lkajudl vvr </Card.Description>
      </Card.Content>
    </Card>

    <Card centered>
      <Card.Content>
        <Card.Header>High performing teams</Card.Header>
        <Card.Meta>Chris Bee</Card.Meta>
        <Card.Description>Lorem Ipsum ald usda dafdadfbnuo lkajudl vvr </Card.Description>
      </Card.Content>
    </Card>

    <Card centered>
      <Card.Content>
        <Card.Header>High performing teams</Card.Header>
        <Card.Meta>Chris Bee</Card.Meta>
        <Card.Description>Lorem Ipsum ald usda dafdadfbnuo lkajudl vvr </Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>

    <Divider hidden />
    <h2>--- Press ---</h2>
    <Divider hidden />

     <Card.Group>
     <Card centered>
      <Card.Content>
        <Card.Header>High performing teams</Card.Header>
        <Card.Meta>Chris Bee</Card.Meta>
        <Card.Description>Lorem Ipsum ald usda dafdadfbnuo lkajudl vvr </Card.Description>
      </Card.Content>
    </Card>

    <Card centered>
      <Card.Content>
        <Card.Header>High performing teams</Card.Header>
        <Card.Meta>Chris Bee</Card.Meta>
        <Card.Description>Lorem Ipsum ald usda dafdadfbnuo lkajudl vvr </Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>


    <Divider hidden />
    <h2>--- Work ---</h2>
    <Divider hidden />

    <Container textAlign='left'>
    <Grid>
    <Grid.Row>
    <Grid.Column width={3}>
    </Grid.Column>
    <Grid.Column width={10}>
        <Item.Group>
        <Item>
          <Item.Image src='http://www.freeiconspng.com/uploads/red-square-png-14.png' size='tiny' />
          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              Lorem Ipsum
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='http://www.freeiconspng.com/uploads/red-square-png-14.png' size='tiny' />
          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              Lorem Ipsum
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image src='http://www.freeiconspng.com/uploads/red-square-png-14.png' size='tiny' />
          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              Lorem Ipsum
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>

      </Item.Group>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>

    <Divider hidden />
    <h2>--- Book Recommendations ---</h2>
    <Divider hidden />

    <Item.Group items={bookitems} />

    <Divider hidden />
    <h2>--- Awards, Other Stuff ---</h2>
    <Divider hidden />
    <Grid>
      <Grid.Row>
        <Grid.Column width={6}>
        </Grid.Column>
        <Grid.Column width={10} textAlign='left'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>


    <Divider hidden />
    <h2>--- Say Hello ---</h2>
    <Divider hidden />
    <Input placeholder='Your Name...' />
    <textarea rows="4" cols="50">
   Enter your message here. 
    </textarea>
    <Button>
      Submit
    </Button>


  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
 </Container>


    )
  }
}

export default Home;
