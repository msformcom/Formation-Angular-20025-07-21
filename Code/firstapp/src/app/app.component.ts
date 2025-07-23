import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'firstapp-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

 changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'firstapp';

}
