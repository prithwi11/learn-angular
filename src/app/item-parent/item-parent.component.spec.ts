import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemParentComponent } from './item-parent.component';

describe('ItemParentComponent', () => {
  let component: ItemParentComponent;
  let fixture: ComponentFixture<ItemParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemParentComponent]
    });
    fixture = TestBed.createComponent(ItemParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
