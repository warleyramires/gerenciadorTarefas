package com.gerenciatarefas.tarefas.service;

import com.gerenciatarefas.tarefas.entity.Tarefa;
import com.gerenciatarefas.tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    public Tarefa salvarTarefa(Tarefa tarefa){
        return tarefaRepository.save(tarefa);
    }

    public List<Tarefa> buscarTodasTarefas(){
        return tarefaRepository.findAll();
    }

    public Tarefa buscarTarefaPorId(Long id){
        return tarefaRepository.findById(id).orElse(null);
    }

    public void deletarTarefa(Long id){
        tarefaRepository.deleteById(id);
    }

    public Tarefa atualizarTarefa(Long id,Tarefa tarefaAtualizada){
        Tarefa tarefa = tarefaRepository.findById(id).orElse(null);

        if(tarefa != null){
            tarefa.setTitulo(tarefaAtualizada.getTitulo());
            tarefa.setDescricao(tarefaAtualizada.getDescricao());
            tarefa.setConcluida(tarefaAtualizada.getConcluida());
            return tarefaRepository.save(tarefa);
        }
        return null;
    }

    public Tarefa marcarConcluida(Long id){
        Tarefa tarefa = tarefaRepository.findById(id).orElse(null);
        if(tarefa != null){
            tarefa.setConcluida(true);
            tarefaRepository.save(tarefa);
        }
        return  null;
    }


}
