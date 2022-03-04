import React, { useEffect, useState } from 'react';
import userService from "../../services/User";
import { Link } from 'react-router-dom';

function List(){

  const [ listUser, setListUser ] = useState([]);

  useEffect(() => {
    async function fetchDataUser() {
      const res = await userService.listUser();
      setListUser(res.data);
    }

    fetchDataUser();

  }, [])

  const onClickDelete = async (i, id) => {

    var yes = confirm("Tem certeza que deseja deletar este usuário?");
    if (yes === true){

      const res = await userService.delete(id)

      if (res.success) {
        alert(res.message) 
        const newList = listUser
        newList.splice(i, 1)
        setListUser(newList);
      } else {
        alert(res.message);
      }
      window.location.reload(true);
    } 
  }

  return (
    <section>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">CPF</th>
            <th scope="col">Criação</th>
            <th scope="col">Atualização</th>
            <th scope="col">Telefone</th>
            <th scope="col">Endereço</th>
            <th scope="col">Cargo</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {
            listUser.map((item, i) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{i}</th>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.cpf}</td>
                  <td>{item.data_criacao}</td>
                  <td>{item.data_atualizacao}</td>
                  <td>{item.telefone}</td>
                  <td>{item.endereco}</td>
                  <td>{item.role.role_name}</td>
                  <td>
                    <Link to={"/user/edit/"+item.id} className="btn btn-light"> Editar </Link>
                    <a href="#" className="btn btn-danger" onClick={() => onClickDelete(i, item.id)}> Deletar usuário </a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default List;