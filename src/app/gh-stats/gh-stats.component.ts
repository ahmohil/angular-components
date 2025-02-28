import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-gh-stats',
  templateUrl: './gh-stats.component.html',
  styleUrls: ['./gh-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GhStatsComponent implements OnInit {

  constructor(private testService: TestService) { }

  @Input()
  github_data: any;

  ngOnInit(): void {
    console.log('Test service', this.testService);
  }

  onKeyDown(value: string) {
    this.github_data.bio = value;
  }
}
