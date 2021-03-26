import { Component, OnInit } from '@angular/core';
import { Properties } from 'src/app/types/properties';
import { MyHomeService } from '../../services/my-home.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public photos: Array<string> = [];
  public id: string;
  public dataSource = [];

  constructor(public myHomeService: MyHomeService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getId();
    this.getData();
  }
  public getData(){
    this.myHomeService.getPhotos(this.id).subscribe(
      (result: Array<Properties>) => {
        this.dataSource = result;
        console.log('display results', this.dataSource);
      },
      error => {
        console.error('Sorry, something went wrong. Error in loading Properties.');
        console.error(error);
      } 
    );
  }

  public getId(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    console.log('display id', this .id);
  }
  
}
