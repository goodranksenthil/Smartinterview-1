import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-resumeupload',
  imports: [CommonModule, IonicModule],
  templateUrl: './resumeupload.component.html',
  styleUrl: './resumeupload.component.scss'
})
export class ResumeuploadComponent {
  uploadSuccess = false;
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      // Implement your file upload logic here
      console.log('File selected:', this.selectedFile.name);
      this.uploadSuccess = true;
    }
  }

}
