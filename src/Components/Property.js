import React, {Component} from 'react';
import base from '../Firestoredb';
import {Alert, Table, Button, Row, Col, InputGroup, Input} from 'reactstrap';

class Property extends Component{
    state={
        items:[],
        inputName:'',
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

    changeValue= (e) =>{
        this.setState({
            inputName:e.target.value
        })
    }
    //Agrega 
    action= ()=>{
        const{inputName, edit} = this.state;

        if(edit === false){
            base.collection('all').add({
                name: inputName
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
        const {id,inputName} = this.state;
        base.collection('all').doc(id).update({
            name: inputName
        }).then(()=>{
            this.message('Actualizado')
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
            inputName:''
        })
    }

    

    render(){
        const {items} = this.state;
        return(
            <div>
            <Row>
                <Col xs='10'>
                    <InputGroup>
                        <Input
                            placeholder='Nombre del propietario'
                            value={this.state.inputName}
                            onChange={this.changeValue}
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
            <Alert in={this.state.fadeIn} tag='h6' className='mt-3 text-center text-success'>
                {this.state.message}
            </Alert>
            <Table hover className='text-center mt-5'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        {/* <th>Domicilio</th>
                        <th>Valor</th> */}
                        <th>Editar</th>
                        <th>Eliminar</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {items && items !== undefined ? 
                      
                      items.map((item, key)=>
                      
                        <tr key={key}>
                          <td>{item.data.name}</td>
                          {/* <td>{item.data.address}</td>
                          <td>{item.data.item}</td> */}
                          <td><Button color='warning' onClick={()=>this.getData(item.id)}>Editar</Button></td>
                          <td><Button color='danger' onClick={()=>this.deleteData(item.id)}>Eliminar</Button></td>
                          
                        </tr>
                     ) 
                     : <span>Null</span>}
                </tbody>
            </Table>
            </div>
        )
    }
}

export default Property;