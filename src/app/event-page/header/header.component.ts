import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

/**
 * Shared header component, shows header across all pages
 *
 * @param event
 *     The event object
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'event-page-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input()
  event: any;

  scenario = environment.scenario;
}
