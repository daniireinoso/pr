import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from 'src/app/model/mensaje';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  @Input('mensaje') mensaje!: Mensaje;

  constructor(public dataService: DataService ) { }

  ngOnInit() {
  }

}
