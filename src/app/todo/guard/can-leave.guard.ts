import { CanDeactivateFn } from '@angular/router';
import { TodoComponent } from '../components/todo/todo.component';

export const canLeaveGuard: CanDeactivateFn<TodoComponent> = (component, currentRoute, currentState, nextState) => {
  return component.todo.name.trim() || component.todo.content.trim() ?
  confirm('Are you sure you want to leave') : true ;
};
