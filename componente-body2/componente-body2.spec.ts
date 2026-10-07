import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteBody2 } from './componente-body2';

describe('ComponenteBody2', () => {
  let component: ComponenteBody2;
  let fixture: ComponentFixture<ComponenteBody2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteBody2],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteBody2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
