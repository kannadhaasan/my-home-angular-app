import { ChangeDetectorRef, Component, OnInit, Optional } from '@angular/core';
import { MyHomeService } from '../../services/my-home.service';
import { Properties } from '../../types/properties';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
public dataSource: Array<Properties> = [];
  constructor(public myHomeService: MyHomeService,
              @Optional() public cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData(){
    this.myHomeService.getProperties().subscribe(
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

}
