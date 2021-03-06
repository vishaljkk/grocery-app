import React, { Component } from 'react'
import { View,Image,StyleSheet } from 'react-native'
import {Container,
  Header,
  Content,
  Body,
  Text,
  H1,
  Button,
  Tab,
  Tabs,
  ScrollableTab,
  Item,
  Icon,
  Input,
  Left,
  Right,
  Title,
  Footer,
  Grid,
  Col,
  Card,
  CardItem,
  Form,
  Label,
  H3,
  ListItem,
  CheckBox
} from 'native-base'
import {CheckoutStep} from '../components'
import theme from '../theme/variables'

export default class CheckoutScreen extends Component {
  state = { 
    delivery_1:false,
    delivery_2:true,
    delivery_3:false,

   }
  
   _selectDelivery(option){
     value=! this.state[option]
     newState={}
     newState[option]=value
     this.setState({
      delivery_1:false,
      delivery_2:false,
      delivery_3:false,
     })
     this.setState(newState)
  }

  render() {
    const {navigate} = this.props.navigation;
    let picture = "http://res.cloudinary.com/oklae/image/upload/c_scale,w_300/v1507300098/grocery-app/promo/apple.jpg"
    return (
      <Container>
        <Header searchBar rounded hasTabs>
          <Left>
            <Button transparent onPress={ () => navigate('DrawerOpen')}>
            <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body>
          <Title>Checkout</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <CheckoutStep currentPosition={0}/>
          <Card style={{borderWidth:0,borderColor:'transparent'}}>
            <CardItem header>
              <H3>Contact Detail</H3>
            </CardItem>
            <Form>
              <Item stackedLabel  style={{marginBottom:20,borderWidth:0}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>FIRST NAME</Label>
                <Input placeholder="First Name" />
              </Item>
              <Item stackedLabel style={{marginBottom:20}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>LAST NAME</Label>
                <Input placeholder="Last Name" />
              </Item>
              <Item stackedLabel style={{marginBottom:20}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>EMAIL</Label>
                <Input placeholder="Email Address" />
              </Item>
              <Item stackedLabel last style={{marginBottom:20,borderBottomColor:'transparent'}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>PHONE</Label>
                <Input placeholder="Phone Number" />
              </Item>
            </Form>
          </Card>

          <Card style={{borderWidth:0,borderColor:'transparent'}}>
            <CardItem header>
              <H3>Shipping Address</H3>
            </CardItem>
            <Form>
              <Item stackedLabel  style={{marginBottom:20,borderWidth:0}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>COUNTRY</Label>
                <Input placeholder="Country" />
              </Item>
              <Item stackedLabel style={{marginBottom:20}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>STATE</Label>
                <Input placeholder="State" />
              </Item>
              <Item stackedLabel style={{marginBottom:20}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>CITY</Label>
                <Input placeholder="City" />
              </Item>
              <Item stackedLabel last style={{marginBottom:20,borderBottomColor:'transparent'}}>
                <Label note style={{fontWeight:'bold',fontSize:12}}>ZIP CODE</Label>
                <Input placeholder="ZIP Code" />
              </Item>
            </Form>
          </Card>

          <Card style={{borderWidth:0,borderColor:'transparent'}}>
            <CardItem header>
              <H3>Delivery Options</H3>
            </CardItem>  
              <ListItem>
                <CheckBox checked={this.state.delivery_1} onPress={() => this._selectDelivery('delivery_1')}/>
                  <Body>
                    <Text>Standar (1 Day )</Text>
                  </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.delivery_2} onPress={() => this._selectDelivery('delivery_2')}/>
                  <Body>
                    <Text>Express ( 6 Hours )</Text>
                  </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={this.state.delivery_3} onPress={() => this._selectDelivery('delivery_3')}/>
                  <Body>
                    <Text>Premium ( 3 Hours )</Text>
                  </Body>
              </ListItem>
            
          </Card>

          <Button onPress={ () => navigate('PaymentScreen')} full style={{marginTop:20,marginBottom:20}}>
            <Text bold>Next</Text>
            <Icon name="ios-arrow-round-forward"/>
          </Button>
        </Content>
        
      </Container>     
    )
  }
}

const styles = StyleSheet.create({
  StepIndicator:{
    backgroundColor:'#F1F1F1',
    padding:10
  }
})
