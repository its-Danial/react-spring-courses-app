package com.todo.todobackend.controller;

import com.todo.todobackend.entity.Todo;
import com.todo.todobackend.repository.TodoRepository;
import com.todo.todobackend.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PostUpdate;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    TodoService todoService;

    @GetMapping
    public List<Todo> getTodos() {
        return todoService.getAllTodos();
    }

    @PostMapping
    public void addTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);
    }

    @DeleteMapping(path = "{id}")
    public void deleteCourse(@PathVariable("id") Long id) {
        todoService.deleteCourseByCourseId(id);
    }

    @PatchMapping(path = "{id}/{ischecked}")
    public void checkCourse(
            @PathVariable("id") Long id,
            @PathVariable("ischecked") boolean ischecked ){
        todoService.checkCourseByCourseId(id, ischecked);
    }

    @DeleteMapping("/delete-all")
    public void deleteAllTodos() {
        todoService.deleteAllTodos();
    }

    @PatchMapping(path ="/check-all/{ischecked}")
    public void checkAllTodos( @PathVariable("ischecked") boolean ischecked ) {
        todoService.checkAllTodos(ischecked);
    }

}
