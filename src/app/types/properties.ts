
export class Properties {
    public propertyId: number;
    public groupLogoUrl: string;
    public bedsString: string;
    public price: number;
    public sizeStringMeters: number;
    public displayAddress: string ;
    public propertyType: string;
    public bathString: string;
    public berRating: string;
    public mainPhoto:  string;
    public photos: Array<string>;

    constructor (item?: Properties | any ){
        if(item){
            this.propertyId = item.propertyId;
            this.groupLogoUrl = item.groupLogoUrl;
            this.bedsString = item.bedsString;
            this.price = item.price;
            this.sizeStringMeters = item.sizeStringMeters;
            this.displayAddress = item.displayAddress;
            this.propertyType = item.propertyType;
            this.bathString = item.bathString;
            this.berRating = item.berRating;
            this.mainPhoto = item.mainPhoto;
            this.photos = item.photos;
        }
    }    
}
