import { Component } from '@angular/core';
import { VehicleService } from './vehicle/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './vehicle/vehicle.component.html',
  styleUrls: ['./vehicle/vehicle.component.css'],
  providers: [VehicleService]
})
export class AppComponent {
  pageTitle: string = 'Vehicle Management System';
    public vehicle = {
        make: 'default'
    };
    public disableModel:boolean = true;
    public errorMessage: string;
    public makes:Array<any> = [];
    public models:Array<any> = [];
    public vehicleImageUrl: any;
    constructor(private _vehicleService: VehicleService) {
        
    }
    ngOnInit(): void {
        this._vehicleService.getMakes()
                .subscribe(makes => this.makes = makes,
                        error => this.errorMessage = <any>error);
    }
    
    makeChanged(make) {
        if(!make.makeId){
          this.disableModel = true;
          this.models = [];
          this.vehicleImageUrl = null;
          return;
        }
        this._vehicleService.getModelsForMake(make.makeId)
            .subscribe(modelData => {
                this.disableModel = false;
                this.models = modelData.models;
                this.updateVehicleImage(this.models[0]['modelName']);
            },
            error => this.errorMessage = <any>error);
        }
    
    modelChanged(modelName) {
        this.updateVehicleImage(modelName);
    }
    
    updateVehicleImage(modelName) {
        for(var i = 0; i < this.models.length; i++){
            if(this.models[i]['modelName'] == modelName){
                this.vehicleImageUrl = this.models[i]['modelImageUrl'];
                break;
            }
        }
    }
}
 