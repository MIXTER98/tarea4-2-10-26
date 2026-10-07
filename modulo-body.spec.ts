import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloBody } from './modulo-body';

describe('ModuloBody', () => {
  let component: ModuloBody;
  let fixture: ComponentFixture<ModuloBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloBody],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuloBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
