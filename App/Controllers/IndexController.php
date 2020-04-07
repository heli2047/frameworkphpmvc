<?php

namespace App\Controllers;

use MF\Controller\Action;

class IndexController extends Action {

    public function index() {

        $this->view->dados = array('Sofa', 'Cadeira', 'Cama');
        $this->render('index');
    }

    public function sobreNos(){
        $this->view->dados  = array('Nootebook', 'Smartphone');
        $this->render('SobreNos');
    }

    
}


?>