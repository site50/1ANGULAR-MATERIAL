import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnInit {
  data: any = {}
  arr_t: any = []
  constructor(private routers: Router, private route: ActivatedRoute) {
  }
  show() {
    this.data = this.route.snapshot.queryParams
    // console.log(this.data, '', this.data.headline)
  }

  ngOnInit(): void {
    this.show()

  }
}
