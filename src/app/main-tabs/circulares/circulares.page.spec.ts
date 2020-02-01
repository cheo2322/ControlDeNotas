import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircularesPage } from './circulares.page';

describe('CircularesPage', () => {
  let component: CircularesPage;
  let fixture: ComponentFixture<CircularesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircularesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
