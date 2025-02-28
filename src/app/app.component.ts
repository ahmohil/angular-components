
import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HighlitedDirective } from './directives/highlited.directive';
import { Observable } from 'rxjs';
import { TestService } from './services/test.service';
@Component({
  selector: 'app-rooot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = {
    'title' : 'angular-components',
    'customInput': 'This is custom input'
  }

  gh_data$ : Observable<any>;
  github_data: any;
  constructor( private testService: TestService, private http: HttpClient) {}

  ngOnInit(){
    const params = new HttpParams().set('page', '1')
    .set('pageSize', '10');
    console.log('Test service', this.testService);

    this.http.get('https://api.github.com/users/ahmohil').subscribe((response) => {
      console.log('Response', response);
      this.github_data = response;
    });

    // this.gh_data$ = this.testService.loadStats();

  }


  @ViewChild(HighlitedDirective)
  highlighted: HighlitedDirective;

  currentDate = new Date();
  price = 1234.56;


  courses = [
    undefined,
    {
      title: 'Angular Core Deepdive',
      description: 'A comprehensive course on Angular core concepts and advanced topics.',
      category: 'ADVANCED'
    },
    {
      title: 'Angular Forms',
      description: 'Learn how to build and manage forms in Angular applications.',
      category: 'INTERMEDIATE'
    },
    {
      title: 'Angular Routing',
      description: 'Master the Angular Router and learn how to navigate between views.',
      category: 'INTERMEDIATE'
    },
    {
      title: 'Angular Testing',
      description: 'Understand how to write unit and integration tests for Angular applications.',
      category: 'ADVANCED'
    },
    {
      title: 'Introduction to Angular',
      description: 'A beginner-friendly introduction to Angular framework.',
      category: 'BEGINNER'
    }
  ];
  onCardClick(event: any) {
    console.log('Card clicked', event);
    console.log('Card clicked', event.target);
  }

  onKeyUp(value: string) {
    this.github_data.bio = value;
  }

  courseCardClicked() {
    console.log('Course card clicked');
  }

  onCourseSelected(course: any) {
    console.log('Course selected', course);
  }

  onToggleHighlight(highlight: boolean) {
    console.log('Toggle highlight', highlight);
  }

  ngAfterViewInit() {
    console.log('Highlighted directive', this.highlighted);
  }


}
