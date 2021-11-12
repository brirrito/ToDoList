import Project from './project'
import Task from './task'
import ToDoList from './ToDoList'

export default class Storage {
  static saveToDoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data))
  }

  static getToDoList() {
    const todoList = Object.assign(
      new ToDoList(),
      JSON.parse(localStorage.getItem('todoList'))
    )

    todoList.setProjects(
      todoList
      .getProjects()
      .map((project) => Object.assign(new Project(), project))
    )

    todoList
      .getProjects()
      .forEach((project) =>
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new Task(), task))
      )
      )
      return todoList
  }

  static addProject(project) {
    const todoList = Storage.getToDoList()
    todoList.addProject(project)
    Storage.saveToDoList(todoList)
  }

  static deleteProject(projectName) {
    const todoList = Storage.getToDoList()
    todoList.deleteProject(projectName)
    Storage.saveToDoList(todoList)
  }

  static addTask(projectName, task) {
    const todoList = Storage.getToDoList()
    todoList.getProject(projectName).addTask(task)
    Storage.saveToDoList(todoList)
  }

  static deleteTask(projectName, taskName) {
    const todoList = Storage.getToDoList()
    todoList.getProject(projectName).deleteTask(taskName)
    Storage.saveToDoList(todoList)
  }

  static renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getToDoList()
    todoList.getProject(projectName).getTask(taskName).setName(newTaskName)
    Storage.saveToDoList(todoList)
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const todoList = Storage.getToDoList()
    todoList.getProject(projectName).getTask(taskName).setDAte(newDueDate)
    Storage.saveToDoList(todoList)
  }

  static updateTodayProject() {
    const todoList = Storage.getToDoList()
    todoList.updateTodayProject()
    Storage.saveToDoList(todoList)
  }

  static updateWeekProject() {
    const todoList = Storage.getToDoList()
    todoList.updateWeekProject()
    Storage.saveToDoList(todoList)
  }
}