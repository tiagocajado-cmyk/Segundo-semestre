const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

//1. CONFIGURANDO O MODELO DE DADOS
const sequelize = new Sequelize('db_api', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

// 2. DEFININDO O MODELO DE DADOS
// COMO DEVE SER A TABELA NO BANCO DE DADOS
const Clientes = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//3.; configurações do servidor express
const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

//4. ROTAS (ENDPOINTS) DA API
//ROTA GET - LISTAR TODOS OS CLIENTES
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Clientes.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

//ROTA POST - CRIAR UM NOVO CLIENTE
app.post('/clientes', async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const { nome, email, telefone } = req.body;
        const novoCliente = await Clientes.create({ nome, email, telefone });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
});

//5. INICIANDO O SERVIDOR E SINCRONIZANDO O MODELO COM O BANCO DE DADOS
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        console.log('Banco de dados sincronizado com sucesso');
    });
}).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
});