import React, {Component} from 'react';
import base from '../Firestoredb';
import {Table, Button} from 'reactstrap';

class Property extends Component{
    state={
        items:[]
    }
    componentDidMount(){
        base.collection('all').get().then((snapShots) =>{
            this.setState({
                items:snapShots.docs.map((doc) =>{
                    return{
                        id:doc.id,
                        data: doc.data()
                    }
                })
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
    render(){
        const {items} = this.state;
        return(
            <div>
            <Table hover className='text-center'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Domicilio</th>
                        <th>Valor</th>
                        <th>Editar</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {items && items !== undefined ? 
                      
                      items.map((item, key)=>
                      
                        <tr key={key}>
                          <td>{item.data.name}</td>
                          <td>{item.data.address}</td>
                          <td>{item.data.item}</td>
                          <td><Button color='warning'>Editar</Button></td>
                          
                        </tr>
                     ) 
                     : <span>Null</span>}
                </tbody>
            </Table>
            </div>
        )
    }
};

export default Property;