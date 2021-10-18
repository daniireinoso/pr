import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  public showForm$ = this.utilsSvc.showAction$

  constructor(private utilsSvc: UtilsService ) { }

  onShowForm(): void {
    this.utilsSvc.showForm(true);
  }
}
