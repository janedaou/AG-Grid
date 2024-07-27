import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-availabilty-renderer',
  templateUrl: './availabilty-renderer.component.html',
  styleUrl: './availabilty-renderer.component.scss'
})
export class AvailabiltyRendererComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  get availabilityStatus(): string {
    return this.params.value ? 'Available' : 'Not Available';
  }

  get availabilityClass(): string {
    return this.params.value ? 'available' : 'not-available';
  }
}