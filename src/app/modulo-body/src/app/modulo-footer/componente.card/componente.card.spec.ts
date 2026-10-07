import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteCard } from './componente.card';

describe('ComponenteCard', () => {
  let component: ComponenteCard;
  let fixture: ComponentFixture<ComponenteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
});
