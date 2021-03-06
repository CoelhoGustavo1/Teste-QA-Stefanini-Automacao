describe("Validação Tela de Login", () => {
  beforeEach(() => {
    cy.visit("http://prova.stefanini-jgr.com.br/teste/qa/");
  });

  it("Teste tela inicial de login", () => {
    /* Ao acessar a página do sistema, eu devo visualizar os seguintes elementos:
    O campo Nome, para a inserção do texto referente ao nome do usuário a ser adicionado, com o valor inicial 
    vazio.
    O campo E-mail, para a inserção do e-mail do usuário a ser adicionado, com o valor inicial vazio.
    O campo Senha, para a inserção do texto referente à senha do usuário a ser adicionado, devendo exibir os 
    caracteres inseridos de forma mascarada, ocultando seus valores. Valor inicial vazio.
    O botão Cadastrar, que ao ser clicado deve realizar o envio dos dados inseridos do usuário para a tabela de 
    resultados.
    A tabela de usuários NÃO deve ser exibida enquanto não houver usuários cadastrados. */

    cy.contains("Cadastro de usuários").should("exist");
    cy.get("#name").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#password").should("have.value", "");
    cy.get("#register").should("exist");

    //COLOCAR VALIDAÇÃO QUE NÃO EXIBE A TABELA DE USUARIO
  });

  it("Validando Mensagem de erro para os campos", () => {
    /*     Quando eu acionar a opção Cadastrar sem ter preenchido algum dos campos, o sistema deve exibir uma 
    mensagem de erro para cada um dos campos não preenchidos. A tabela de usuários não deve ser alterada. */
  });

  it("Cadastro com apenas o primeiro nome", () => {
    /*     Quando eu acionar a opção Cadastrar tendo preenchido o campo Nome com apenas o primeiro nome, o sistema 
    deve exibir a mensagem "Por favor, insira um nome completo." para o campo Nome. A tabela de usuários não 
    deve ser alterada. */
  });

  it("Cadastro com Email Invalido", () => {
    /*     Quando eu acionar a opção Cadastrar tendo preenchido o campo E-mail com um e-mail inválido, o sistema deve 
    exibir a mensagem "Por favor, insira um e-mail válido." Para o campo E-mail. A tabela de usuários não deve ser 
    alterada */
  });

  it("Cadastro com senha com menos de 8 caracteres", () => {
    /*     Quando eu acionar a opção Cadastrar tendo preenchido o campo Senha com um menos de 8 caracteres, o sistema 
    deve exibir a mensagem "A senha deve conter ao menos 8 caracteres." Para o campo Senha. A tabela de 
    usuários não deve ser alterada. */
  });

  it("Cadastro com dados validos", () => {
    /*     Quando eu acionar a opção Cadastrar tendo preenchido os campos Nome, E-mail e Senha com dados válidos, o 
    sistema deve exibir abaixo do formulário uma tabela com os dados do usuário informados anteriormente e a opção 
    Excluir para cada um dos mesmos. A tabela deve exibir os usuários ordenando-os pelo id, do menor ao maior */
  });

  it("Excluindo um elemento", () => {
    /*     Quando eu acionar a opção Excluir de um elemento da tabela de usuários, o sistema deve excluir a linha em 
    questão, exibindo a tabela sem interferir nos ids dos demais itens e em sua ordenação. */
  });
});
