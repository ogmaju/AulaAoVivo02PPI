import express from "express";

const host = '0.0.0.0';
const porta = 3000;

var listaUsuarios = [];

const server = express();

server.get("/cadastroUsuario", (requisicao, resposta) =>{
    resposta.send(`
        <DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
            <title>Menu do Sistema</title>
        </head>
        <body>
            <div classe="Container">
                <h1 classe="text-center border m-3 p-3 bg-light"> Cadastro de Usuário </h1>
            
                <form method="POST" action="/adicionarUsuario" class="row g-3">
                    <div class="col-md-6">
                        <label for="Email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="Email" name="Email" >
                    </div>
                    <div class="col-md-6">
                        <label for="Senha" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="Senha" name="Senha" >
                    </div>
                    <div class="col-12">
                        <label for="Endereco" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="Endereco" name="Endereco" placeholder="1234 Main St">
                    </div>
                    <div class="col-md-6">
                        <label for="Cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="Cidade" name="Cidade" >
                    </div>
                    <div class="col-md-4">
                        <label for="Estado" class="form-label">Estado</label>
                        <select id="Estado" class="form-select">
                        <option selected>São Paulao</option>
                        <option>Rio de Janeiro</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="CEP" class="form-label">CEP</label>
                        <input type="text" class="form-control" id="CEP">
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Confira-me
                        </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </div>
                    </form>
            </div>

            </body>
             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

        </html>
        `);
});

server.post('/adicionarUsuario', (requisicao, resposta) => {
    console.log("Usuarios cadastrados com sucesso!");
    listaUsuarios.push();
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
});

