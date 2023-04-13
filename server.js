import express from "express";
import banco from "./src/banco.js";
import Categoria from "./src/controllers/Categoria.js";
import Autor from "./src/controllers/Autor.js";
import Editora from "./src/controllers/Editora.js";
import Emprestimo from "./src/controllers/Emprestimo.js";
import Pessoa from "./src/controllers/Pessoa.js";
import Livroautor from "./src/controllers/Livroautor.js";
import Livro from "./src/controllers/Livro.js";
import Funcionario from "./src/controllers/Funcionario.js";

const PORT = 4000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "teste",
  });
});

app.get("/categoria", Categoria.listar);
app.get("/categoria/:idcategoria", Categoria.selecionar);
app.post("/categoria/", Categoria.inserir);
app.put("/categoria/:idcategoria", Categoria.alterar);
app.delete("/categoria/:idcategoria", Categoria.excluir);

app.get("/autor", Autor.listar);
app.get("/autor/:idautor", Autor.selecionar);
app.post("/autor/", Autor.inserir);
app.put("/autor/:idautor", Autor.alterar);
app.delete("/autor/:idautor", Autor.excluir);

app.get("/pessoa", Pessoa.listar);
app.get("/pessoa/:idpessoa", Pessoa.selecionar);
app.post("/pessoa/", Pessoa.inserir);
app.put("/pessoa/:idpessoa", Pessoa.alterar);
app.delete("/pessoa/:idpessoa", Pessoa.excluir);

app.get("/funcionario", Funcionario.listar);
app.get("/funcionario/:idfuncionario", Funcionario.selecionar);
app.post("/funcionario/", Funcionario.inserir);
app.put("/funcionario/:idfuncionario", Funcionario.alterar);
app.delete("/funcionario/:idfuncionario", Funcionario.excluir);

app.get("/editora", Editora.listar);
app.get("/editora/:ideditora", Editora.selecionar);
app.post("/editora/", Editora.inserir);
app.put("/editora/:ideditora", Editora.alterar);
app.delete("/editora/:ideditora", Editora.excluir);

app.get("/emprestimo", Emprestimo.listar);
app.get("/emprestimo/:idemprestimo", Emprestimo.selecionar);
app.post("/emprestimo/", Emprestimo.inserir);
app.put("/emprestimo/:idemprestimo", Emprestimo.alterar);
app.delete("/emprestimo/:idemprestimo", Emprestimo.excluir);

app.get("/livro", Livro.listar);
app.get("/livro/:idlivro", Livro.selecionar);
app.post("/livro/", Livro.inserir);
app.put("/livro/:idlivro", Livro.alterar);
app.delete("/livro/:idlivro", Livro.excluir);

app.get("/livroautor", Livroautor.listar);
app.get("/livroautor/:idlivroautor", Livroautor.selecionar);
app.post("/livroautor/", Livroautor.inserir);
app.put("/livroautor/:idlivroautor", Livroautor.alterar);
app.delete("/livroautor/:idlivroautor", Livroautor.excluir);

banco.authenticate();

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
