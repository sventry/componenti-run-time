import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-runtime',
  templateUrl: './componente-runtime.component.html',
  styleUrls: ['./componente-runtime.component.css'],
})
export class ComponenteRuntimeComponent implements OnInit {
  @Input() oggetto: Dati = null;
  @Output() inviaDati: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  invia(dato: string): void {
    this.inviaDati.emit(dato)
  }
}

export interface Dati {
  nome: string;
  cognome: string;
}
