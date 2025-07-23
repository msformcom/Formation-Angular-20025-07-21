import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ControlsModule } from "./controls/controls.module";

@Component({
  selector: 'firstapp-root',
  imports: [RouterModule, ControlsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

 //changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'firstapp';

}
