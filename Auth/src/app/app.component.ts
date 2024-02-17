import { Component } from '@angular/core';
import { DesignUtilityService } from './services/design-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Auth';
  dataList : any = []

  constructor(private utility : DesignUtilityService){
    // this.getData();
  }


  // getData(){
  //   this.utility.fetchData().subscribe(res => {
  //     this.dataList = res
  //     console.log(res)
  //   })
  // }
}
