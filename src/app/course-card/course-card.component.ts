import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Course } from './types';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  constructor() { }


  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {
  }

  viewCourseClicked(event :Event) {
    console.log('View course clicked');
    this.courseSelected.emit(this.course);
  }

}
