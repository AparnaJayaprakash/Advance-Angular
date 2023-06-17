import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let calculatorElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    calculatorElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should display result after addition', () => {
    const num1Input = calculatorElement.querySelector('#num1');
    const num2Input = calculatorElement.querySelector('#num2');
    const addButton = calculatorElement.querySelector('#add');
    const resultElement = calculatorElement.querySelector('#result');

    num1Input.value = '2';
    num2Input.value = '3';
    addButton.click();

    expect(resultElement).toContainText('5');
  });

  it('should display result after subtraction', () => {
    const num1Input = calculatorElement.querySelector('#num1');
    const num2Input = calculatorElement.querySelector('#num2');
    const subtractButton = calculatorElement.querySelector('#subtract');
    const resultElement = calculatorElement.querySelector('#result');

    num1Input.value = '5';
    num2Input.value = '3';
    subtractButton.click();

    expect(resultElement).toContainText('2');
  });
});
