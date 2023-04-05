import express from "express";
import banco from "./src/banco.js";
import Categoria from "./src/controllers/Categoria.js";
import Autor from "./src/controllers/Autor.js";
import Editora from "./src/controllers/Editora.js";

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
app.put("/categoria", Categoria.alterar);
app.delete("/categoria/:idcategoria", Categoria.excluir);

app.get("/autor", Autor.listar);
app.get("/autor/:idautor", Autor.selecionar);
app.post("/autor/", Autor.inserir);
app.put("/autor/:idautor", Autor.alterar);
app.delete("/autor/:idautor", Autor.excluir);

app.get("/editora", Editora.listar);
app.get("/editora/:ideditora", Editora.selecionar);
app.post("/editora/", Editora.inserir);
app.put("/editora/:ideditora", Editora.alterar);
app.delete("/editora/:ideditora", Editora.excluir);

app.get("/editora", Editora.listar);
app.get("/editora/:ideditora", Editora.selecionar);
app.post("/editora/", Editora.inserir);
app.put("/editora/:ideditora", Editora.alterar);
app.delete("/editora/:ideditora", Editora.excluir);

banco.authenticate();

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
