// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ChildComponent } from './child.component';

// describe('ChildComponent', () => {
//   let component: ChildComponent;
//   let fixture: ComponentFixture<ChildComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ChildComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ChildComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   it('should create the child component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should emit dataAdded event when addRow is called', () => {
//     const dataAddedSpy = spyOn(component.dataAdded, 'emit');
//     const mockRow = {
//       id: 1,
//       name: 'John Doe',
//       age: 25,
//       gender: 'Male'
//     };
//     component.newRow = mockRow;
//     component.addRow();
//     expect(dataAddedSpy).toHaveBeenCalledWith(mockRow);
//   });

//   it('should reset newRow object after addRow is called', () => {
//     const mockRow = {
//       id: 1,
//       name: 'John Doe',
//       age: 25,
//       gender: 'Male'
//     };
//     component.newRow = mockRow;
//     component.addRow();
//     expect(component.newRow).toEqual({
//       id: 0,
//       name: '',
//       age: 0,
//       gender: ''
//     });
//   });
// });
