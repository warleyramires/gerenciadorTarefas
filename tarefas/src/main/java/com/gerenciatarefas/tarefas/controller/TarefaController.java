package com.gerenciatarefas.tarefas.controller;

import com.gerenciatarefas.tarefas.entity.Tarefa;
import com.gerenciatarefas.tarefas.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/tarefas")
public class TarefaController {

    @Autowired
    private TarefaService tarefaService;

    @GetMapping
   public List<Tarefa> findAll(){
       return tarefaService.buscarTodasTarefas();
   }
   @GetMapping("/{id}")
   public  Tarefa findById(@PathVariable Long id){
        return tarefaService.buscarTarefaPorId(id);
   }

   @PostMapping
   public Tarefa create(@RequestBody Tarefa tarefa){
        return tarefaService.salvarTarefa(tarefa);
   }

    @PutMapping("/{id}")
    public Tarefa update(@PathVariable Long id, @RequestBody Tarefa tarefa){
        return tarefaService.atualizarTarefa(id, tarefa);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
         tarefaService.deletarTarefa(id);
    }

    @PutMapping("/{id}/complete")
    public Tarefa markAsCompleted(@PathVariable Long id) {
        return tarefaService.marcarConcluida(id);
    }
}
