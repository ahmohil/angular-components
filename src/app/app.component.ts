import { Component, ViewChild } from '@angular/core';
import { HighlitedDirective } from './directives/highlited.directive';

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
    console.log('Key up event', value);
    this.data.customInput = value
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
