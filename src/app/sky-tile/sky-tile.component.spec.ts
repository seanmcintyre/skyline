import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyTileComponent } from './sky-tile.component';

describe('SkyTileComponent', () => {
  let component: SkyTileComponent;
  let fixture: ComponentFixture<SkyTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
