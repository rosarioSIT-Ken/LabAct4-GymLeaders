import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderInfo } from './leader-info';

describe('LeaderInfo', () => {
  let component: LeaderInfo;
  let fixture: ComponentFixture<LeaderInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderInfo);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('leader', {
      name: 'Brock',
      age: 15,
      location: 'Pewter City',
      team: 'Geodude, Onix',
      badge: 'Boulder Badge',
      monologue: 'Test',
      themeColor: '#7f6a4e'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
