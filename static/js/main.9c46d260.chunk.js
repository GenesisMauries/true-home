(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(29),r=a.n(c),i=(a(81),a(82),a(30)),o=a(31),s=a(35),m=a(32),u=a(36),d=a(151),p=a(144),h=a(145),E=a(146),f=function(){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(h.a,{xs:"12"},l.a.createElement(E.a,{className:"text-center"},l.a.createElement("h1",{className:"display-5"},"INMUEBLES RECIENTES"),l.a.createElement("p",{className:"lead"},"Nosotros logramos que comprar sea un proceso \xe1gil y profesional. ")))))},g=a(33),b=a(52),v=a.n(b);a(131);v.a.initializeApp({apiKey:"AIzaSyDbnB68clKiG9Zec7f-jEqXrOPU5_5-g20",authDomain:"true-home-4dcfb.firebaseapp.com",databaseURL:"https://true-home-4dcfb.firebaseio.com",projectId:"true-home-4dcfb",storageBucket:"true-home-4dcfb.appspot.com",messagingSenderId:"115760310833"});var N=v.a.firestore(),y=a(147),I=a(148),w=a(149),A=a(152),j=a(150),x=a(23),k=a(53),O=a(54);a(69);x.b.add(O.b,O.a);var S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={items:[],inputName:"",inputAddress:"",inputItem:"",edit:!1,id:"",fadeIn:!1,message:""},a.changeValue=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.action=function(){var e=a.state,t=e.inputAddress,n=e.inputName,l=e.edit,c=e.inputItem;!1===l?N.collection("all").add({name:n,address:t,item:c}).then(function(){a.message("Agregado")}).catch(function(e){a.message(e)}):a.update()},a.getData=function(e){N.collection("all").doc(e).get().then(function(e){e.exists?a.setState({inputName:e.data().name,inputAddress:e.data().address,inputItem:e.data().item,edit:!0,id:e.id}):alert("El documento no existe")}).catch(function(e){console.log(e)})},a.update=function(){var e=a.state,t=e.id,n=e.inputName,l=e.inputAddress,c=e.inputItem;N.collection("all").doc(t).update({name:n,address:l,item:c}).then(function(){a.message("Actualizado"),a.setState({edit:!1})}).catch(function(e){a.message(e)})},a.deleteData=function(e){N.collection("all").doc(e).delete(),a.message("Propiedad eliminada")},a.message=function(e){a.setState({fadeIn:!0,message:e,inputName:"",inputAddress:"",inputItem:""}),setTimeout(function(){a.setState({fadeIn:!1,message:""})},2e3)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.collection("all").onSnapshot(function(t){e.setState({items:t.docs.map(function(e){return{id:e.id,data:e.data()}})})})}},{key:"render",value:function(){var e=this,t=this.state.items;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(h.a,{xs:"10"},l.a.createElement(y.a,null,l.a.createElement(I.a,{placeholder:"Propietari@",type:"text",name:"inputName",value:this.state.inputName,onChange:this.changeValue,className:"address",required:!0}),l.a.createElement(I.a,{placeholder:"Domicilio",type:"text",name:"inputAddress",value:this.state.inputAddress,onChange:this.changeValue,className:"address",required:!0}),l.a.createElement(I.a,{placeholder:"Valor",type:"number",name:"inputItem",value:this.state.inputItem,onChange:this.changeValue,required:!0}))),l.a.createElement(h.a,{xs:"2"},l.a.createElement("div",{className:"text-right"},l.a.createElement(w.a,{color:"info",onClick:this.action},this.state.edit?"Editar":"Agregar")))),l.a.createElement(A.a,{in:this.state.fadeIn,tag:"h6",className:"mt-3 text-center text-success"},this.state.message),l.a.createElement(j.a,{hover:!0,className:"text-center mt-5"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nombre"),l.a.createElement("th",null,"Domicilio"),l.a.createElement("th",null,"Valor"),l.a.createElement("th",null,"Editar"),l.a.createElement("th",null,"Eliminar"))),l.a.createElement("tbody",null,t&&void 0!==t?t.map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.data.name),l.a.createElement("td",null,t.data.address),l.a.createElement("td",null,"$"+t.data.item),l.a.createElement("td",null,l.a.createElement(w.a,{color:"warning",onClick:function(){return e.getData(t.id)}},l.a.createElement(k.a,{icon:"edit"}))),l.a.createElement("td",null,l.a.createElement(w.a,{color:"danger",onClick:function(){return e.deleteData(t.id)}},l.a.createElement(k.a,{icon:"trash"}))))}):l.a.createElement("span",null,"Null"))))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(f,null),l.a.createElement(S,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){},76:function(e,t,a){e.exports=a(143)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.9c46d260.chunk.js.map