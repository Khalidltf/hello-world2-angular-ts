import { CoursesService } from './courses.service';
import {Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <h2>{{getTitle() }}</h2>
    <ol>
      <li *ngFor="let course of courses">
        {{course}}
      </li>
    </ol>

  `
})


export class CoursesComponent {
  title = "List of Courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses()
  }

  getTitle() {
    return this.title
  }
}
