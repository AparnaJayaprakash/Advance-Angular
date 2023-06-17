import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let calculator: AppComponent;

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent]
    });
    calculator = TestBed.inject(AppComponent);
  });

  it('should add two numbers', () => {
    const result = calculator.sum(2, 3);
    expect(result).toEqual(5);
  });

  it('should subtract two numbers', () => {
    const result = calculator.diff(5, 3);
    expect(result).toEqual(2);
  });

  it('should multiply two numbers', () => {
    const result = calculator.prod(2, 3);
    expect(result).toEqual(6);
  });

  it('should divide two numbers', () => {
    const result = calculator.division(10, 2);
    expect(result).toEqual(5);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => calculator.division(10, 0)).toThrowError('Division by zero is not allowed.');
  });





  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'calculatorTesting'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('calculatorTesting');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('calculatorTesting app is running!');
  // });
});
