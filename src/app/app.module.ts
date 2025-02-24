import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlitedDirective } from './directives/highlited.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    HighlitedDirective,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
