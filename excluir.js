function Excluir() {
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var guiaDados = planilha.getSheetByName("EFETIVO");
    
    var dadosMenu = guiaDados.getRange("B6:F6").getValues(); // Alterado para capturar a linha completa

    if (dadosMenu[0][0] == "") {
        Browser.msgBox("Não tem registros para Excluir!");
        return;
    }

    var resp = Browser.msgBox("EXCLUIR", "Deseja realmente Excluir?", Browser.Buttons.YES_NO);

    if (resp == "no" || resp == "cancel") {
        Browser.msgBox("Exclusão cancelada!");
        return;
    }

    var dados = guiaDados.getRange("B10:F" + guiaDados.getLastRow()).getValues();
    var IdsExcluidos = [];
    var linhasParaExcluir = [];

    for (var i = 0; i < dadosMenu.length; i++) {
        var idMenu = dadosMenu[i][1];

        for (var j = 0; j < dados.length; j++) {
            if (dados[j][1] == idMenu) {
                linhasParaExcluir.push(j + 10); // Salvando linhas para excluir
            }
        }
    }

    // Excluindo de trás para frente para evitar problemas de índice
    for (var k = linhasParaExcluir.length - 1; k >= 0; k--) {
        guiaDados.deleteRow(linhasParaExcluir[k]);
        IdsExcluidos.push(dados[linhasParaExcluir[k] - 10][1]);
    }

    if (IdsExcluidos.length > 0) {
        guiaDados.getRange("B6:F6").clearContent();
        Browser.msgBox("Excluído ID: " + IdsExcluidos.join(", "));
    } else {
        Browser.msgBox("Ids não encontrado para Excluir");
    }
}
