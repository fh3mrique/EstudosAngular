import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private _cdRef: ChangeDetectorRef
  ){}

  chargeDetection(){
    this._cdRef.detectChanges()
  }
}
