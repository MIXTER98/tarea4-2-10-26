import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloHeader } from './modulo-header';

describe('ModuloHeader', () => {
  let component: ModuloHeader;
  let fixture: ComponentFixture<ModuloHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuloHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
