import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log("Directiva llamada");
    //el.nativeElement.style.backgroundColor = "yellow";
  }

@Input("appResaltado") nuevoColor: string;

@HostListener('mouseenter') mouseentro(){
    this.resaltar(this.nuevoColor || 'yellow');
    //this.el.nativeElement.style.backgroundColor = "yellow";

}
@HostListener('mouseleave') mousesalio(){
  this.resaltar(null);
  //this.el.nativeElement.style.backgroundColor = null;

}

private resaltar(color:string){

  this.el.nativeElement.style.backgroundColor = color;


}
}
