import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteBody1 } from './componente-body1';

describe('ComponenteBody1', () => {
  let component: ComponenteBody1;
  let fixture: ComponentFixture<ComponenteBody1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteBody1],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteBody1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
