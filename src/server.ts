import express from 'express';

import "./database";

const app = express();

app.listen('3333', () => console.log("Server is running on port 3333"));

app.get("/", (request, response) => {
    return response.json({
        status: 200,
        message: "Começando o NLW 5"
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuário criado com sucesso"})
})