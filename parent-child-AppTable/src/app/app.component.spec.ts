import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ChildComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should have an empty tableData array on initialization', () => {
    expect(component.tableData).toEqual([]);
  });
  it('should add data to tableData when receiving data from child', () => {
    const row = { id: 1, name: 'John', age: 25, gender: 'Male' };
  
    component.recievedDataFromChild(row);
  
    expect(component.tableData.length).toBe(1);
    expect(component.tableData[0]).toEqual(row);
  });
    
  // Write additional test cases here
});
