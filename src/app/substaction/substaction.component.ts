import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-substaction',
  templateUrl: './substaction.component.html',
  styleUrls: ['./substaction.component.css']
})
export class SubstactionComponent implements OnInit {
  result:number=0
  constructor(private service:CalcService){}
  ngOnInit(): void {
    
  }
  subNumbers(elem1:any,elem2:any){
    let n1=+elem1.value
    let n2=+elem2.value
   
   
    let data={
      "num1":n1,
      "num2":n2
    }
    this.service.performSubstration(data).then(res=>res.json()).then(data=>this.result=data.Result)
  }
}
