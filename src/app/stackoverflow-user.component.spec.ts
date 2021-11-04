import { TestBed } from '@angular/core/testing';
import { StackoverflowUserComponent } from './stackoverflow-user.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StackoverflowUserComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StackoverflowUserComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SOAD'`, () => {
    const fixture = TestBed.createComponent(StackoverflowUserComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SOAD');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StackoverflowUserComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('SOAD app is running!');
  });
});
