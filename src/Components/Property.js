import React, {Component} from 'react';
import base from '../Firestoredb';

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
        return(
            <div>

            </div>
        )
    }
}

export default Property;