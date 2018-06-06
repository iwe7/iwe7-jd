import { ElementRef } from '@angular/core';
import { tap, takeUntil, switchMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';

import { Iwe7IcssService } from 'iwe7-icss';
import {
  Component, Output, EventEmitter,
  OnInit, ViewEncapsulation, Injector,
  Input, Injectable, forwardRef, ViewChild
} from '@angular/core';
import { Iwe7BaseComponent } from 'iwe7-base';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { onFocus, onTap } from 'iwe7-util';
export interface JdSearchInputs {
  height: string;
  heightView: string;
  placeholder: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class JdSearchInputsDefault implements JdSearchInputs {
  height: string = '45px';
  heightView: string = '30px';
  placeholder: string = '居家好物低至5折 领券满199减100';
  value: string;
}

@Component({
  selector: 'jd-search',
  templateUrl: 'jd-search.html',
  styleUrls: ['./jd-search.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [Iwe7IcssService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => JdSearchComponent),
    multi: true
  }]
})
export class JdSearchComponent extends Iwe7BaseComponent implements OnInit, ControlValueAccessor {
  @Input() height: string = '45px';
  _initTop: number = 45;
  @Input()
  set top(val: any) {
    this._initTop = val;
  }
  get top() {
    return this._initTop + 'px';
  }
  @Input() bgColor: string = '#de181b';
  @Input() opacity: number = 0;
  @Input() totalHeight: number = 300;
  @Input() heightView: string = '30px';
  @Input() placeholder: string = '请输入关键字搜索';
  @Input() value: string = '';


  _userIcon: string = 'assets/jd/user.png';
  @Input()
  set userIcon(val: string) {
    this._userIcon = val;
  }
  get userIcon() {
    return `url(${this._userIcon})`;
  }
  _logoIcon: string = 'assets/jd/logo-search.png';
  @Input()
  set logoIcon(val: string) {
    this._logoIcon = val;
  }
  get logoIcon() {
    return `url(${this._logoIcon})`;
  }

  _menuIcon: string = 'assets/jd/menu.png';
  @Input()
  get menuIcon() {
    return `url(${this._menuIcon})`;
  }
  set menuIcon(val: string) {
    this._menuIcon = val;
  }

  _searchIcon: string = 'assets/jd/search.png';
  @Input()
  get searchIcon() {
    return `url(${this._searchIcon})`;
  }
  set searchIcon(val: string) {
    this._searchIcon = val;
  }

  @Output() leftStream: EventEmitter<any> = new EventEmitter();
  @Output() rightStream: EventEmitter<any> = new EventEmitter();
  @Output() focusStream: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') input: ElementRef;
  @ViewChild('logoIcon') logoRef: ElementRef;
  @ViewChild('searchIcon') searchRef: ElementRef;


  constructor(injector: Injector, public _default: JdSearchInputsDefault) {
    super(injector, 'jd-search');
    Object.assign(this, this._default);
    this.runOutsideAngular(() => {
      this.setStyleInputs(['height', 'top', 'bgColor',
        'heightView', 'opacity', 'userIcon',
        'logoIcon', 'menuIcon', 'searchIcon']);
      this.getCyc('ngAfterViewInit').subscribe(res => {
        onFocus(this.input.nativeElement).subscribe(this.focusStream);
        onTap(this.logoRef.nativeElement).pipe(
          tap(res => res.preventDefault()),
          tap(res => this.input.nativeElement.focus())
        ).subscribe();
        onTap(this.searchRef.nativeElement).pipe(
          tap(res => res.preventDefault()),
          tap(res => this.input.nativeElement.focus())
        ).subscribe();
      });
      this.getCyc('ngOnInit').subscribe(res => {
        this.getTop();
        this.listen(document, 'scroll').pipe(
          takeUntil(this.getCyc('ngOnDestroy')),
          switchMap(res => {
            const top = this.getTop();
            return of(Math.abs(top / this.totalHeight));
          }),
          filter(res => res <= 1),
          tap(res => {
            this.styleObj = {
              opacity: res
            };
          })
        ).subscribe();
      });
    });
  }

  getTop() {
    const top = document.documentElement.scrollTop;
    const height = this.ele.nativeElement.clientHeight;
    if (top <= this._initTop) {
      this.styleObj = {
        top: this._initTop - top + 'px'
      };
    } else {
      this.styleObj = {
        top: -1 + 'px',
        opacity: 1
      };
    }
    return top;
  }

  _leftStream(e: any) {
    this.leftStream.emit(e);
  }

  _rightStream(e: any) {
    this.rightStream.emit(e);
  }

  _change(e: any) {
    this._onChange(e);
  }

  _onChange: (_: any) => {};
  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}
