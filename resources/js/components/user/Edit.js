import React, { useEffect, useState } from 'react';
import userService from "../../services/User";

function Edit(props){

  const [ id, setId ] = useState("");
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ telefone, setTelefone ] = useState("");
  const [ role, setRole ] = useState("");
  const [ city, setCity ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ selectedRole, setSelectedRole ] = useState("");

  const [ listRole, setListRole ] = useState([]);

  useEffect(() => {
    
    async function fetchDataUser() {

      let id = props.match.params.id;
      const res = await userService.get(id);

      if (res.success) {
        console.log(res.data);
        const data = res.data
        setId(data.id)
        setName(data.nome)
        setEmail(data.email)
        setPassword(data.senha)
        setCpf(data.cpf)
        setTelefone(data.telefone)
        setRole(data.role)
        setCity(data.cidade)
        setAddress(data.endereco)
        setSelectedRole(data.role.role_name)
      } else {
        alert(res.message)
      }
    }

    fetchDataUser();

    async function fetchDataRole() {
      const res = await userService.list();
      setListRole(res.data);
    }

    fetchDataRole();

  }, [])

  const updateUser = async () => {
    const data = {
      id, 
      name, 
      email,
      password, 
      cpf, 
      telefone, 
      role, 
      city, 
      address
    }

    const res = await userService.update(data);

    if (res.success) {
      alert(res.message)
    } else {
      alert(res.message)
    }

  }
  
  return (
    <div>
      <h4>Editar usuário</h4>
      <hr/>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Nome</label>
          <input type="text" className="form-control" value={name} onChange={(event)=> setName(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" className="form-control" placeholder="Email" value={email} 
          onChange={(event)=> setEmail(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="pass">Senha</label>
          <input type="password" className="form-control" value={password} placeholder="Senha" 
          onChange={(event)=>setPassword(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">CPF</label>
          <input type="email" className="form-control" placeholder="Ex: 000.000.000-00" 
          value={cpf} onChange={(event)=> setCpf(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">Telefone</label>
          <input type="text" className="form-control" placeholder="(00) 00000-0000" 
          value={telefone} onChange={(event)=> setTelefone(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">Perfil</label>
          <select id="inputState" className="form-control" onChange={(event)=> setRole(event.target.value)} value={role?.role_id}>
             {
               listRole.map((itemselect)=>{
                 return(
                   <option key={itemselect.role_id} value={itemselect.role_id}>{itemselect.role_name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">Cidade</label>
          <select id="inputState" className="form-control" value={city} onChange={(event)=> setCity(event.target.value)}>
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
            value={address} onChange={(event)=> setAddress(event.target.value)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <button onClick={() => updateUser()}
          className="btn btn-primary btn-block" type="submit">Salvar</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;