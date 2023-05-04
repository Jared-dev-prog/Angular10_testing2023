import { Subject } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UtilService } from './services/util.service';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: '<span>Login</span>',
})
class MockLoginComponent {}

let utilServiceSpy = jasmine.createSpyObj<UtilService>('UtilService', [
  'getToken',
  'deleteToken',
  'isLogged',
]);

utilServiceSpy.isLogged = new Subject<boolean>();

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: MockLoginComponent,
          },
        ]),
        MatToolbarModule,
        MatIconModule,
      ],
      declarations: [AppComponent],
      providers: [
        {
          provide: UtilService,
          useValue: utilServiceSpy,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular_2023'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_2023');
  });

  it(`should create app with user logged in'`, () => {
    utilServiceSpy.getToken.and.returnValue('token');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isLogged).toBe(true);
  });

  it(`should create app with user logged in'`, () => {
    utilServiceSpy.getToken.and.returnValue('token');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isLogged).toBe(true);
  });

  it(`should create app with user is not logged in'`, () => {
    utilServiceSpy.getToken.and.returnValue(null);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isLogged).toBe(false);
  });

  it(`should receive isLogged from UtilService true'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    utilServiceSpy.isLogged.next(true);
    expect(app.isLogged).toBe(true);
  });

  it(`should receive isLogged from UtilService false'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    utilServiceSpy.isLogged.next(false);
    expect(app.isLogged).toBe(false);
  });

  it(`should logut'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.logout();
    expect(utilServiceSpy.deleteToken).toHaveBeenCalled();
  });
});
