import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { MaterialModule } from '../../material/material.module';
import { SidebarService } from '../../services/sidebar.service';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AddBookComponent } from '../books/add-book.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LibraryComponent } from '../books/library.component';
import { KeysPipe } from '../../pipes/keys.pipe';
import { BookComponent } from '../books/book.component';
import {ChartsModule } from 'ng2-charts';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { UpdateProgressComponent } from '../books/update-progress/update-progress.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule ,
    SweetAlert2Module.forRoot(),

    
  ],
  exports:[HomeComponent,MaterialModule],
  declarations: [HomeComponent, AddBookComponent, LibraryComponent,KeysPipe, BookComponent, UpdateProgressComponent],
  entryComponents:[UpdateProgressComponent],
  providers:[SidebarService,KeysPipe]
})
export class PagesModule { }
