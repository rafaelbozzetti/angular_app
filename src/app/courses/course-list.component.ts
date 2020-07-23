import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageURL: '/assets/images/forms.png',
        price: 100,
        code: 'ANG8',
        duration: 120,
        rating: 5.4,
        releaseDate: 'December, 1, 2019'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageURL: '/assets/images/http.png',
        price: 100,
        code: 'RCT22',
        duration: 110,
        rating: 2,
        releaseDate: 'December, 2, 2019'
      }
    ]
  }

}
