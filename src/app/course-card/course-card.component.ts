import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  isEditing = false;

  ngOnInit(): void {
  }

  viewCourseClicked(event: Event) {
    console.log('View course clicked');
    this.courseSelected.emit(this.course);
  }

  editTitleClicked() {
    this.isEditing = true;
  }

  saveTitleClicked() {
    this.isEditing = false;
    console.log('Course title saved:', this.course.title);
    // You can add additional logic here to save the title to a server or perform other actions
  }
}
