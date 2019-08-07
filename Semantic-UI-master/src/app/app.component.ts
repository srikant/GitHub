import { Component , OnInit} from '@angular/core';
declare var $:any;
declare var jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';

  ngOnInit() 
  {
    $('.ui.accordion').accordion();
    $('.left.demo.sidebar').first().sidebar('attach events', '.toggle.button');
  }
}
