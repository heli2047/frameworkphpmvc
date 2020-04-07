<?php

namespace App\Controllers;

//Os Recursos do Miniframework
use MF\Controller\Action;
use MF\Model\Container;


// Os Models
use App\Models\Produto;
use App\Models\Info;





class IndexController extends Action {

    public function index() {



        $produto = Container::getModel('Produto');

        $produtos = $produto->getProdutos();

        $this->view->dados = $produtos;

       // $this->view->dados = array('Sofa', 'Cadeira', 'Cama');
        $this->render('index', 'layout');
    }

    public function sobreNos(){
      //  $this->view->dados  = array('Nootebook', 'Smartphone');

        $info = Container::getModel('Info');

        $informacoes = $info -> getInfo();

        $this->view->dados = $informacoes;

        $this->render('SobreNos', 'layout');
    }

    
}


?>