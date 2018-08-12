import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { UserLoginGuard } from './guards/user-login.guard';
import { AddBookComponent } from './pages/books/add-book.component';

const AppRoutes:Routes = [
{
    path:'books',
    canActivate:[UserLoginGuard]
    ,
    component:HomeComponent,
    children:[{
        path:'main',
        component:MainComponent
    },
    {
        path:'add',
        component:AddBookComponent
    }
]
    
},
{
    path:'login',
    component:LoginComponent
}
];

export const APPR = RouterModule.forRoot(AppRoutes);