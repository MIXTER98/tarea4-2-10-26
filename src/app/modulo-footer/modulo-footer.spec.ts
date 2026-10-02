import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloFooter } from './modulo-footer';

describe('ModuloFooter', () => {
  let component: ModuloFooter;
  let fixture: ComponentFixture<ModuloFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuloFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
