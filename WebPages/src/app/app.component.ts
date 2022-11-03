import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  
  mobileQuery: MediaQueryList;
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef:ChangeDetectorRef, media:MediaMatcher, public util:UtilsService){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  navegar(path:string){
    this.util.navegar(path);
  }

}
