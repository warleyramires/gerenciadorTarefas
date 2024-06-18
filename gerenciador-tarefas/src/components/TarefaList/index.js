import React, { useEffect, useState } from "react";
import axios from "axios";
import AdicionaTarefa from "../AdicionarTarefa";
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default function TarefaList(){

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/tarefas')
            .then(response => setTarefas(response.data))
            .catch(error => console.error(error));

    
    }, []);

    const marcarComoConcluida = (id) => {
        axios.put(`http://localhost:8080/api/tarefas/${id}/complete`)
            .then(response => {
                setTarefas(tarefas.map(tarefa =>
                    tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
                ));
            })
            .catch(error => console.error(error));
    };

    const excluirTarefa = (id) => {
        axios.delete(`http://localhost:8080/api/tarefas/${id}`)
            .then(response => {
                setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
            })
            .catch(error => console.error(error));
    };
    

    const handleTarefaAdicionada = (novaTarefa) => {
        setTarefas([...tarefas, novaTarefa]);
    };

    return(
        <div className="container mt-5">
            <AdicionaTarefa onTarefaAdicionada={handleTarefaAdicionada} />
            <h2 className="mb-4">Lista de Tarefas</h2>
            <ListGroup>
                {tarefas.map(tarefa => (
                    <ListGroupItem key={tarefa.id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4>{tarefa.titulo}</h4>
                            <p>{tarefa.descricao}</p>
                            <p>{tarefa.concluida ? 'Concluída' : 'Pendente'}</p>
                        </div>
                       <div className="ml-5">
                       {!tarefa.concluida && (
                            <Button 
                                variant="success" 
                                className="ml-3"
                                onClick={() => marcarComoConcluida(tarefa.id)}
                            >
                                Marcar como Concluída
                            </Button>
                        )}
                        <Button 
                            variant="danger" 
                            className="ml-3"
                            onClick={() => excluirTarefa(tarefa.id)}
                        >
                            Excluir
                        </Button>
                       </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}