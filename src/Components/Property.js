import React, {Component} from 'react';
import base from '../Firestoredb';
import {Fade, Table, Button, Row, Col, InputGroup, Input} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
library.add(faTrash, faEdit)

class Property extends Component{
    state={
        items:[],
        inputName:'',
        inputAddress:'',
        inputItem:'',
        edit:false,
        id:'',
        fadeIn:false,
        message:''
    }
    componentDidMount(){
        base.collection('all').onSnapshot((snapShots) =>{
            this.setState({
                items:snapShots.docs.map((doc) =>{
                    return{
                        id:doc.id,
                        data: doc.data()
                    }
                })
            })
        })
        
    }

    changeValue= (event ) =>{
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
            
        })
    }
    //Agrega 
    action= ()=>{
        const{ inputAddress, inputName, edit, inputItem} = this.state;
        if(edit === false){
            base.collection('all').add({
                name: inputName,
                address: inputAddress,
                item: inputItem
            }).then(()=>{
                this.message('Agregado');
            }).catch((error)=>{
                this.message(error);
            })
        }else{
            this.update();
        }
    }

    //Edita
    getData= (id)=>{
      let ref= base.collection('all').doc(id);
      ref.get().then((doc)=>{
          if(doc.exists){
              this.setState({
                inputName: doc.data().name,
                inputAddress: doc.data().address,
                inputItem: doc.data().item,
                edit:true,
                id:doc.id
                })
            }else{
                alert('El documento no existe');
            }
      }).catch((e)=>{
          console.log(e);
      })
    }
    update= ()=>{
        const {id,inputName, inputAddress, inputItem} = this.state;
        base.collection('all').doc(id).update({
            name: inputName,
            address: inputAddress,
            item: inputItem
        }).then(()=>{
            this.message('Actualizado')
            this.setState({
                edit:false
            })
        }).catch((error)=>{
            this.message(error)
        })  
    }

    //Borra
    deleteData= (id)=>{
        base.collection('all').doc(id).delete()
        this.message('Propiedad eliminada')
    }

    //Mensaje
    message= (message)=>{
        this.setState({
            fadeIn: true,
            message: message,
            inputName:'',
            inputAddress:'',
            inputItem:''
        })
        setTimeout(()=> {
            this.setState({
                fadeIn: false,
                message: ''
            })
            
        },2000) 
    }
    
    render(){
        const {items} = this.state;
        return(
            <React.Fragment>
                <Row>
                    <Col xs='10'>
                        <InputGroup>
                            <Input 
                            placeholder='Propietari@'
                            type='text'
                            name='inputName'
                            value={this.state.inputName}
                            onChange={this.changeValue}
                            className='address'
                            required
                            />
                            <Input 
                            placeholder='Domicilio'
                            type='text'
                            name='inputAddress'
                            value={this.state.inputAddress}
                            onChange={this.changeValue}
                            className='address'
                            required
                            />
                            <Input 
                            placeholder='Valor'
                            type='number'
                            name='inputItem'
                            value={this.state.inputItem}
                            onChange={this.changeValue}
                            required
                            />
                        </InputGroup>
                    </Col>
                    <Col xs='2'>
                        <div className='text-right'>
                            <Button color='info' onClick={this.action}>
                                {this.state.edit ? 'Editar': 'Agregar'}
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Fade in={this.state.fadeIn} tag='h6' className='mt-3 text-center text-success'>
                    {this.state.message}
                </Fade>
                <Table hover className='text-center mt-5'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Domicilio</th>
                            <th>Valor</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items !== undefined ? items.map((item, key)=>
                        <tr key={key}>
                            <td>{item.data.name}</td>
                             <td>{item.data.address}</td>
                            <td>{'$'+item.data.item}</td>
                            <td>
                                <Button color='warning' onClick={()=>this.getData(item.id)}> 
                                    <FontAwesomeIcon icon="edit" />
                                </Button>
                            </td>
                            <td>
                                <Button color='danger' onClick={()=>this.deleteData(item.id)}>
                                    <FontAwesomeIcon icon="trash" />
                                </Button>
                            </td>
                        </tr>
                        ) 
                        : <span>Null</span>}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default Property;