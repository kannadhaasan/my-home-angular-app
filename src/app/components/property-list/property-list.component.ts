import { ChangeDetectorRef, Component, OnInit, Optional } from '@angular/core';
import { MyHomeService } from '../../services/my-home.service';
import { Properties } from '../../types/properties';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  public dataSource: Array<Properties> = new Array<Properties>();
  public originalDatasource: Array<Properties> = new Array<Properties>();
  public cardDistribution = 100 / 3 + '%';
  public filterInput: any;

  constructor(public myHomeService: MyHomeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.myHomeService.getProperties().subscribe(
      (result: Array<Properties>) => {
        this.dataSource = result;
        this.originalDatasource = result;
      },
      error => {
        console.error('Sorry, something went wrong. Error in loading Properties.');
        console.error(error);
      }
    );
  }

  public sortProperties(event: any) {

    switch (event.value) {
      case "low": {
        this.dataSource = this.dataSource.sort((low, high) => low.price - high.price);
        break;
      }
      case "high": {
        this.dataSource = this.dataSource.sort((low, high) => high.price - low.price);
        break;
      }
      default: {
        this.dataSource = this.dataSource.sort((low, high) => low.price - high.price);
        break;
      }
    }

    return this.dataSource;
  }

  public applyFilter(event) {
    this.dataSource = this.originalDatasource;
    this.filterInput = event.target.value;

    if (this.filterInput) {
      let filteredData = this.dataSource.filter(data => data.price <= this.filterInput);
      this.dataSource = filteredData;
    } else if (!this.filterInput) {
      this.dataSource = this.originalDatasource;
    }
  }

  public navigateToBrochure(datasource) {
    let brochureUrl = this.router.createUrlTree(['/property-brochure', { my_object: JSON.stringify(datasource) }]);
    this.router.navigateByUrl(brochureUrl, { skipLocationChange: true,  });
  }

  public navigateToGallery(propertyId){
    let galleryUrl = this.router.createUrlTree(['./property-gallery',{id: propertyId} ]);
    this.router.navigateByUrl(galleryUrl, {skipLocationChange: true} );
  }


}
