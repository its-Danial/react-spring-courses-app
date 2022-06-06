package com.todo.todobackend;

import com.todo.todobackend.entity.Todo;
import com.todo.todobackend.repository.TodoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class TodoBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner CommandLineRunner(TodoRepository todoRepository){
        return args -> {

            Todo first = Todo.builder()
                    .courseName("Vue")
                    .isChecked(true)
                    .build();
            Todo second = Todo.builder()
                    .courseName("React")
                    .isChecked(false)
                    .build();
            Todo third = Todo.builder()
                    .courseName("Angular")
                    .isChecked(false)
                    .build();

            todoRepository.saveAll(List.of(first,second,third));

        };
    }
}
