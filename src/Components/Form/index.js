import React , { useState } from 'react';
import InputMask from 'react-input-mask';
import axios from 'axios'
import Chamada from '../Chamada'
import Thanx from '../Thanx'
import { Container } from './styles';


export default function Form() {
   const [ getLead , setGetLead ] = useState({
     visible : true,  
     
   })
       
     
      const sendFormLead = async (e) => {
        e.preventDefault(); 
        setGetLead(getLead.visible !== true)
        await axios.post(`add your service`, 
        `nome=${getLead.nome}&email=${getLead.email}&cnpj=${getLead.cnpj}&telefone=${getLead.telefone}` )
        console.log(getLead)
      }   

      function inputChange(e) {
        e.persist();      
        setGetLead(getLead => ({...getLead, [e.target.name] : e.target.value }))
      }

  return (
   <Container >
         <Chamada hide={getLead.visible !== true ? 'hide' : 'show'}/>
         <Thanx hide={getLead.visible !== true ? 'show' : 'hide'}/>
         <form className={getLead.visible !== true ? 'hide' : 'show'}>
            <input type="text" placeholder="Nome" name="NomeDaEmpresa" onChange={inputChange} required
            />
            <InputMask mask="99.999.999/9999-99" placeholder="CNPJ" name="cnpj" maskChar={null} onChange={inputChange} />
            <input type="email" name="email" placeholder="E-mail" onChange={inputChange}  required
            />
            <InputMask mask="(99)99999-99999" placeholder="Telefone" name="telefone" maskChar={null} onChange={inputChange} /> 
            <button  onClick={sendFormLead}>Enviar</button> 
            
         </form>  
   </Container>
  );
}
