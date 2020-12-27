import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { GlobalDataSummery } from '../model/global-data';
@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
    
   private globalDataUrl ='https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-03-2020.csv';
  constructor(private http : HttpClient) {}
    getGlobldata(){

      debugger
       return this.http.get(this.globalDataUrl ,{responseType :'text'}).pipe(
         map(result=>{
          let data:GlobalDataSummery[]=[];
          let raw :any=[];
          
          let rows =result.split('\n');
          rows.splice(0 , 1);
       rows.forEach(row=>{
         let cols=row.split(/,(?=\S)/)
             let cs={
               country : cols[3],
               confirmed : + cols[7],
               deaths : +cols[8],
               recovery :+cols[9],
               active : +cols[10]  
             };
             let temp :GlobalDataSummery  =raw[cs.country];
             if(temp){
               temp.active =cs.active + temp.active
               temp.recovery =cs.recovery +temp.recovery
               temp.deaths =cs.deaths +temp.deaths
               temp.confirmed =cs.confirmed +temp.confirmed

               raw[cs.country]=temp;
             }else{
               raw[cs.country]=cs;
             }

       })
    //  console.log(raw);
     return <any>Object.values(raw);  
         })
         

       )
   }
}
