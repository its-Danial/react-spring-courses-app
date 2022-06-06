package com.todo.todobackend.service;

import com.todo.todobackend.entity.Todo;
import com.todo.todobackend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public void deleteCourseByCourseId(Long id) {
        todoRepository.deleteById(id);
    }

    @Transactional
    public void checkCourseByCourseId(Long id,boolean isChecked) {
        Todo todo = todoRepository.findById(id).orElseThrow(()-> new IllegalStateException("no course by id "+id));

        todo.setChecked(isChecked);


    }

    public void deleteAllTodos() {
        todoRepository.deleteAll();
    }

    @Transactional
    public void checkAllTodos(boolean ischecked) {
        List<Todo> todos = todoRepository.findAll();

        todos.forEach(todo -> todo.setChecked(ischecked));
    }
}
