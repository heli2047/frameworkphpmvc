<?php

namespace App\Controllers;

//Os Recursos do Miniframework
use MF\Controller\Action;
use MF\Model\Container;



class IndexController extends Action {


    //Exemplo de Criação de ligação associação de ligação com Index.
    public function index() {

    //    $produto = Container::getModel('Produto');

    //    $produtos = $produto->getProdutos();

    //    $this->view->dados = $produtos;

    $this->render('index');
  }
      
}

    //public function sobreNos(){
      //  $this->view->dados  = array('Nootebook', 'Smartphone');

     //   $info = Container::getModel('Info');

     //   $informacoes = $info -> getInfo();

     //   $this->view->dados = $informacoes;

     //   $this->render('SobreNos', 'layout');
  //  }




?>