## Script de Exclusão de Dados no Google Sheets

<div align="center">
    <img src="https://github.com/alexandrefreitass/salvar-googlesheets/assets/109884524/282d50eb-9a94-463d-8dc3-3b778e1a669d" />
</div>

### Descrição

Este script foi desenvolvido para auxiliar na gestão de dados de pessoas na planilha "EFETIVO" de um Google Sheets. Ele permite excluir registros específicos com base no ID fornecido, garantindo que a planilha permaneça organizada e sem registros duplicados ou desnecessários.

### Funcionalidades

O script `Excluir()` executa as seguintes operações principais:

1. **Verificação de Dados**: Antes de qualquer ação, o script verifica se existem dados na linha específica (B6:F6) que contém o ID a ser excluído. Se a linha estiver vazia, uma mensagem é exibida e o processo é encerrado.

2. **Confirmação de Exclusão**: Uma mensagem de confirmação é mostrada ao usuário para evitar exclusões acidentais. O usuário pode escolher continuar ou cancelar a operação.

3. **Identificação e Exclusão de Linhas**: O script identifica todas as linhas que contêm o ID especificado na faixa de dados efetiva da planilha (B10:F até a última linha com dados) e as exclui de forma segura, começando pela última linha para evitar problemas de reindexação durante o processo de exclusão.

4. **Feedback ao Usuário**: Após a exclusão, uma mensagem informa quais IDs foram excluídos ou se nenhum ID correspondente foi encontrado.

### Instalação

Para instalar e configurar o script no seu ambiente Google Sheets:

1. Abra a planilha do Google Sheets.
2. Vá em `Extensões > Apps Script`.
3. Cole o código do script na janela do editor.
4. Salve e feche o editor de Apps Script.

### Código

**Acesso ao Dashboard**: O dashboard pode ser acessado através de [este link](https://docs.google.com/spreadsheets/d/1qChrsd-dUhRezcwZs-RdQPsvATv3PRDALiynNxV1Xts/edit#gid=712832960).

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/alexandrefreitass/salvar/blob/master/LICENSE) para mais detalhes.
