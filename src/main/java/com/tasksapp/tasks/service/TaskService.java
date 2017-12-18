package com.tasksapp.tasks.service;

import com.tasksapp.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
