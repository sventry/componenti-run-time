import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponenteRuntimeComponent } from '../componente-runtime/componente-runtime.component';

@Component({
  selector: 'app-caricamento-componente-runtime-div-specifico',
  templateUrl: './caricamento-componente-runtime-div-specifico.component.html',
  styleUrls: ['./caricamento-componente-runtime-div-specifico.component.css'],
})
export class CaricamentoComponenteRuntimeDivSpecificoComponent
  implements OnInit
{
  oggetto = {
    nome: 'mirko',
    cognome: 'surricchio',
  };

  @ViewChild('item', { static: false, read: ViewContainerRef })
  item: ViewContainerRef;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {

      const componente = this.componentFactoryResolver.resolveComponentFactory(
        ComponenteRuntimeComponent
      );

      const componentRef = this.item.createComponent(componente);

      componentRef.instance.oggetto = this.oggetto;

      componentRef.instance.inviaDati.subscribe(res => console.log(res))

  }
}
