import { Component, OnInit } from '@angular/core';
import { GlobalDataSummery } from 'src/app/model/global-data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed:any =0;
  totalActive:any =0;
  totalDeaths:any =0;
  totalRecovery:any =0;
  globalData :any;
  constructor(private dataService :DataServiceService) { }
 
  ngOnInit(): void {
    debugger
    
    this.dataService.getGlobldata().subscribe({
      
      next :(result)=>{
        this.globalData=result;
       result.forEach((cs: { confirmed: any; active: any; deaths: any; recovery: any; }) => {
         if(!isNaN(cs.confirmed)){
         this.totalConfirmed +=cs.confirmed
         this.totalActive +=cs.active
         this.totalDeaths +=cs.deaths
         this.totalRecovery +=cs.recovery
         }
       });
       console.log(result);
     
      }
     
    })
  }

}
