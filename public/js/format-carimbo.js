function exportStamp() {

    var form = $("#form")

    if (form[0].checkValidity() !== false) {
        event.preventDefault()
        event.stopPropagation()

        stamp = 'TRIADO -\n';
        path = '//div[(input or select or textarea) and not(contains(@style,"display:none"))]';
        //alert("teste");
        pathInsideLabel = './/h6';
        pathInsideInput = './/input';
        pathInsideSelect = './/select';
        pathInsideTextArea = './/textarea';

        nodes = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        //alert ('qtd de divs com inputs : ' + nodes.snapshotLength);
        for (i = 0; i < nodes.snapshotLength; i++) {

            labelNode = document.evaluate(pathInsideLabel, nodes.snapshotItem(i), null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            // alert ('qtd de labels dentro da div : ' + labelNode.snapshotLength);
            label = labelNode.snapshotItem(0).innerText;
            // alert(label);

            // é input ou é select?
            htmlCru = nodes.snapshotItem(i).innerHTML;
            if (htmlCru.indexOf('select') == -1 && htmlCru.indexOf('textarea') == -1) {
                value = document.evaluate(pathInsideInput, nodes.snapshotItem(i), null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0).value;
            } else if (htmlCru.indexOf('input') == -1 && htmlCru.indexOf('textarea') == -1) {
                value = document.evaluate(pathInsideSelect, nodes.snapshotItem(i), null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0).value;
            } else {
                value = document.evaluate(pathInsideTextArea, nodes.snapshotItem(i), null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0).value;
            }
            stamp += '| ' + label + ":\t" + value + "\n";
        }

        alert(stamp);
        // Levar o resultado para clipboard
        // CUIDADO, se usuário tinha algo selecionado, deixará de estar selecionado.. isto pode ser solucionado, mas não acho relevante
        const el = document.createElement('textarea');

        el.value = replaceAll(stamp, '?', '');

        //el.value = stamp;


        //el.value = stamp.replaceAll("?", "");
        //alert(autoOuManual);
        /* if(autoOuManual == "manual"){
              el.value += "WIZAGE MANUAL 1.0";
         }else{
              el.value += "WIZAGE AUTOMÁTICO 1.0";
         }
        */


        el.value += "WIZAGE AUTOMÁTICO 1.0";
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        var n = el.value.length;
        var limiteStar21 = "2000";

        if (n < limiteStar21) {
            alert(n + " Caracteres Copiados.");
        } else {
            alert("Cuidado! Foram Copiados " + n + " Caracteres.");
        }
    }

    form.addClass('Campo Obrigatório, favor preencher.');

}

function formatarCarimbo() {
    var form = $("#form")

    if (form[0].checkValidity() !== false) {
        event.preventDefault()
        event.stopPropagation()


        stamp = 'TRIADO -\n';
        $('.carimbo').each(
            function (index) {
                var input = $(this);
               
                if (input.is(":visible")) {
                    //alert('Type: ' + input.attr('type') + 'Name: ' + input.attr('name') + 'Value: ' + input.val());
                    stamp += '| ' + input.attr('data-carimbo') + ":\t" + input.val() + "\n";
                }
                
            }
        );

        const el = document.createElement('textarea');

        el.value = replaceAll(stamp, '?', '');

        el.value += "WIZAGE AUTOMÁTICO 1.0";
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        var n = el.value.length;
        var limiteStar21 = "2000";

        if (n < limiteStar21) {
            alert(n + " Caracteres Copiados.");
        } else {
            alert("Cuidado! Foram Copiados " + n + " Caracteres.");
        }
    }

    form.addClass('Campo Obrigatório, favor preencher.');
}




function replaceAll(str, needle, replacement) {
    return str.split(needle).join(replacement);
}