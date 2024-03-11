import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FilterTaskComponent } from './filter-task/filter-task.component';

export const appRoutes: Routes = [
  { path: '*', component: AppComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'filter-task', component: FilterTaskComponent },
  { path: 'descr/:id', component: DescriptionComponent },
  { path: 'descr/:id', component: DescriptionComponent },

];
