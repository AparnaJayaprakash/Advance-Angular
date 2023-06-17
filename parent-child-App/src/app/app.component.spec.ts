// app.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, AboutComponent, HomeComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transfer data from enterName to parentData', () => {
    component.enterName = 'John';
    component.transferData();
    expect(component.parentData).toBe('John');
  });

  it('should transfer data from enterAge to parentData2', () => {
    component.enterAge = '30';
    component.transferData2();
    expect(component.parentData2).toBe('30');
  });

  it('should transfer data from enterOccupation to parentData3', () => {
    component.enterOccupation = 'Teacher';
    component.transferData3();
    expect(component.parentData3).toBe('Teacher');
  });

  it('should update value when receiving data from child', () => {
    const value = 'This is Child Data';
    component.sendData(value);
    expect(component.value).toBe(value);
  });
});
