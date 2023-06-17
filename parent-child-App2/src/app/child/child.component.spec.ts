// child.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit message when sendMessage is called', () => {
    spyOn(component.recieveMessage, 'emit');
    component.sendMessage();
    expect(component.recieveMessage.emit).toHaveBeenCalledWith('Hello from child!');
  });
});
