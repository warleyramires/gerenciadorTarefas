import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from 'react-bootstrap';

export default function AdicionaTarefa({ onTarefaAdicionada }){

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/tarefas', {titulo, descricao, concluida: false})
            .then(response => {
                console.log("Tarefa Adicionada com Sucesso", response.data);
                setTitulo("");
                setDescricao("");
                onTarefaAdicionada(response.data);
            }).catch(error => console.error(error))
    
    }

    return(
        <Container className="mt-5">
            <h2>Adicionar Tarefa</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite o título da tarefa"
                    />
                </Form.Group>
                <Form.Group controlId="formDescricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Digite a descrição da tarefa"
                    />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                    Criar
                </Button>
            </Form>
        </Container>
    );
}