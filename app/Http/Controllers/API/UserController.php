<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\User;

class UserController extends Controller
{
    public function list_role() {
     
        $data = Role::get();

        $response['data'] = $data;
        $response['success'] = true;

        return $response;
    }

    public function create(Request $request) {

        try {

            $insert['nome'] = $request['name'];
            $insert['email'] = $request['email'];
            $insert['senha'] = $request['password'];
            $insert['cpf'] = $request['cpf'];
            $insert['data_criacao'] = $request['data_criacao'];
            $insert['data_atualizacao'] = $request['data_atualizacao'];
            $insert['telefone'] = $request['telefone'];
            $insert['role'] = $request['role'];
            $insert['cidade'] = $request['city'];
            $insert['endereco'] = $request['address'];

            User::insert($insert);

            $response['message'] = 'Salvo com sucesso!';
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function list() {

      try {
  
          $data = User::with("role")->get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }

      public function get($id){

        try {
  
          $data = User::with("role")->find($id);
  
          if ($data) {
            $response['data'] = $data;
            $response['message'] = "Carregado com sucesso.";
            $response['success'] = true;
          } else {
            $response['message'] = "O usuário $id não foi encontrado.";
            $response['success'] = false;
          }
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
      }

      public function update(Request $request, $id) {
        
        try {
          
          $data['nome'] = $request['name'];
          $data['email'] = $request['email'];
          $data['senha'] = $request['password'];
          $data['cpf'] = $request['cpf'];
          $data['data_criacao'] = $request['data_criacao'];
          $data['data_atualizacao'] = $request['data_atualizacao'];
          $data['telefone'] = $request['telefone'];
          $data['role'] = $request['role'];
          $data['cidade'] = $request['city'];
          $data['endereco'] = $request['address'];

          $res = User::where("id", $id)->update($data);

          $response['res'] = $res;
          $response['message'] = "Atualizado com sucesso";
          $response['success'] = true;
            
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
      }

      public function delete($id) {

        try {

          $res = User::where("id", $id)->delete();
          $response['res'] = $res;
          $response['message'] = "Deletado com sucesso";
          $response['success'] = true;

        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;

      }
}
