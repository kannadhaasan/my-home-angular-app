import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss']
})
export class BrochureComponent implements OnInit {

  public dataSource;
  constructor(private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getData()
  }

  public getData() {
    this.dataSource = JSON.parse(this.route.snapshot.paramMap.get('my_object'));
    console.log('datasource from brochure', this.dataSource);
  }

}
