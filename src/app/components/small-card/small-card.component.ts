import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  sphoto:string="";
  @Input()
  sautor:string="";
  @Input()
  sTitle:string="";
constructor(){}
  ngOnInit() {
   ;
  }
}
