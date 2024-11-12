import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../models/Departamento';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;
  public departamento!: Departamento;

  constructor(
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((param: Params) => {
      let id = param["id"];

      this._service.findDepartamento(id).subscribe(response => {
        this.departamento = response;
      })
    })
  }

  updateDepartamento(): void {
    let num = parseInt(this.cajaId.nativeElement.value);
    let nom = this.cajaNombre.nativeElement.value;
    let loc = this.cajaLocalidad.nativeElement.value;

    let editDepartamento = new Departamento(num, nom, loc);

    this._service.updateDepartamento(editDepartamento).subscribe(resopnse => {
      this._router.navigate(["/"]);
    })
  }
}
