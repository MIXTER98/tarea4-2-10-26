import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteBody3 } from './componente-body3';

describe('ComponenteBody3', () => {
  let component: ComponenteBody3;
  let fixture: ComponentFixture<ComponenteBody3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteBody3],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteBody3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
