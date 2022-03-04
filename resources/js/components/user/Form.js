import React, { useEffect, useState } from 'react';
import userService from "../../services/User";

function Form(){

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ telefone, setTelefone ] = useState("");
  const [ role, setRole ] = useState("");
  const [ city, setCity ] = useState("");
  const [ address, setAddress ] = useState("");

  const [ listRole, setListRole ] = useState([]);

  useEffect(()=>{

    async function fetchDataRole() {
      const res = await userService.list();
      setListRole(res.data);
    }

    fetchDataRole();

  }, [])

  const saveUser = async() => {
    const data = {
      name, 
      email, 
      password, 
      cpf, 
      telefone, 
      role, 
      city, 
      address
    }
    const res = await userService.save(data);

    if (res.success) {
      alert(res.message)
    } else {
      alert(res.message)
    }
  }

  return(
    <div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Nome</label>
          <input type="text" className="form-control" placeholder="Nome" 
          onChange={(event)=>setName(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" className="form-control" placeholder="Email" 
          onChange={(event)=>setEmail(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="pass">Senha</label>
          <input type="password" className="form-control" placeholder="Senha" 
          onChange={(event)=>setPassword(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">CPF</label>
          <input type="email" className="form-control" placeholder="Ex: 000.000.000-00" 
          onChange={(event)=>setCpf(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">Telefone</label>
          <input type="text" className="form-control" placeholder="(00) 00000-0000" 
          onChange={(event)=>setTelefone(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
					<label for="phone">Perfil</label>
					<select id="inputState" className="form-control" onChange={(event)=> setRole(event.target.value)}>
             <option selected>Selecione</option>
             {
               listRole.map((item)=>{
                 return(
                   <option value={item.role_id}>{item.role_name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">Cidade</label>
          <select id="inputState" className="form-control" onChange={(event)=> setCity(event.target.value)}>
             <option selected>Selecione</option>
             <option value="Salvador">Salvador</option>
             <option value="Feira de Santana">Feira de Santana</option>
             <option value="Vitoria da Conquista">Vitória da Conquista</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="address">Endereço</label>
          <input type="text" className="form-control" placeholder="Endereço completo"
            onChange={(event)=>setAddress(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <button className="btn btn-primary btn-block" type="submit"
          onClick={()=>saveUser()}>Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default Form;