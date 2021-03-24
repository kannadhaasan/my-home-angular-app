export class Properties {
    public PropertyId: number;
    public GroupLogoUrl: string;
    public BedsString: string;
    public Price: number;
    public SizeStringMeters: number;
    public DisplayAddress: string ;
    public PropertyType: string;
    public BathString: string;
    public BerRating: string;
    public MainPhoto: string;
    public Photos: Array<string>;

    constructor (item?: Properties | any ){
        if(item){
            this.PropertyId = item.PropertyId;
            this.GroupLogoUrl = item.GroupLogoUrl;
            this.BedsString = item.BedsString;
            this.Price = item.Price;
            this.SizeStringMeters = item.SizeStringMeters;
            this.DisplayAddress = item.DisplayAddress;
            this.PropertyType = item.PropertyType;
            this.BathString = item.BathString;
            this.BerRating = item.BerRating;
            this.MainPhoto = item.MainPhoto;
            this.Photos = item.Photos;

        }
    }


    
}
