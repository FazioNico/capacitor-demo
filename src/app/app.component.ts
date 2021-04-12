import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { MotionService } from './motion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CapTest';

  alpha$;
  
  constructor(
    private motion: MotionService
  ){
    this.motion.initOrientationEvent();
    this.alpha$ = this.motion.alpha$;
  }
}
