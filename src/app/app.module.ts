import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlitedDirective } from './directives/highlited.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GhStatsComponent } from './gh-stats/gh-stats.component';
import { TestService } from './services/test.service';
@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    HighlitedDirective,
    NgxUnlessDirective,
    GhStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
