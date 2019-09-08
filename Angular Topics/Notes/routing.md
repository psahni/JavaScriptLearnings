#--
app-routing.ts

const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full'
    },
    {
        path: 'todo-list',
        loadChildren: './components/todo-list/todo-list.module#TodoListModule'
    },
    {
        path: 'todo-detail',
        loadChildren: './components/todo-detail/todo-detail.module#TodoDetailModule'
    }
];

#--

import { AppRouting } from './app-routing';

app.module.ts

...
 imports: [
    BrowserModule,
    AppRouting
  ],
....

#--

todo-list.module.ts

imports: [
    CommonModule,
    TodoListRoutingModule
 ],
	
declarations: [TodoListComponent],
providers: [ TodoService ]

#--

todo-list-routing.module.ts

const routes: Routes = [
    {
        path: '', component: TodoListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


https://github.com/sanjay-patel/angular-5-todo-app/blob/master/src/app/app-routing.ts
http://www.teclogiq.com/blog/angular-5-todo-application/