package com.gerenciatarefas.tarefas.repository;

import com.gerenciatarefas.tarefas.entity.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}
