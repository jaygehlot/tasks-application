package com.tasksapp.tasks.service;

import com.tasksapp.tasks.domain.Task;
import com.tasksapp.tasks.repository.TaskRepository;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;

    //using spring 4.3+
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return this.taskRepository.save(task);
    }

}
