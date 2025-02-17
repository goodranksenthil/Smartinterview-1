import { Component } from '@angular/core';
import { ResumeuploadComponent } from "./components/resumeupload/resumeupload.component";

@Component({
  selector: 'app-root',
  imports: [ResumeuploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SmartInterviewNew';
}
