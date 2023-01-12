import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-addition-component',
  templateUrl: './addition-component.component.html',
  styleUrls: ['./addition-component.component.css']
})
export class AdditionComponentComponent implements OnInit{
  result:number=0
  constructor(private service:CalcService){}
  ngOnInit(): void {
    
  }
  addNumbers(elem1:any,elem2:any){
    let n1=+elem1.value
    let n2=+elem2.value
    // this.result=n1+n2
   
    let data={
      "num1":n1,
      "num2":n2
    }
    this.service.performAddition(data).then(res=>res.json()).then(data=>this.result=data.Result)
    
  }

}
