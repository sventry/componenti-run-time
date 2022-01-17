import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ComponenteRuntimeComponent } from '../componente-runtime/componente-runtime.component';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css'],
})
export class ComponentePadreComponent implements OnInit {
  oggetto = {
    nome: 'mirko',
    cognome: 'surricchio',
  };
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const createComponent =
      this.componentFactoryResolver.resolveComponentFactory(
        ComponenteRuntimeComponent
      );

    const componentRef = this.viewContainerRef.createComponent(createComponent);

    componentRef.instance.oggetto = this.oggetto;
  }
}
