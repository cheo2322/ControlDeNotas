import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildrenPage } from './children.page';

describe('ChildrenPage', () => {
  let component: ChildrenPage;
  let fixture: ComponentFixture<ChildrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
