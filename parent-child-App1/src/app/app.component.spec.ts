import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the child component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial count as undefined', () => {
    expect(component.count).toBeUndefined();
  });

  it('should emit updated count to parent component', () => {
    const updateSpy = spyOn(component.updateFromChild, 'emit');
    component.count = 0;
    component.updateCount();
    expect(updateSpy).toHaveBeenCalledWith(1);
  });

});
