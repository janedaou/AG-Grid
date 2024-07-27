import { Component } from '@angular/core';
import { AgGridAngular} from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AvailabiltyRendererComponent } from '../app/availabilty-renderer/availabilty-renderer.component';
import { ILargeTextEditorParams } from 'ag-grid-community';
import { DeleteButtonRendererComponent } from './delete-button-renderer/delete-button-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  colDefs: ColDef[] = [
    { field: 'Name', filter: 'agTextColumnFilter', flex: 1 },
    { field: 'Description', editable: true, cellEditorPopup: true, 
      cellEditor: "agLargeTextCellEditor",
      cellEditorParams: {
        maxLength: 250,
        rows: 10,
        cols: 50,
      } as ILargeTextEditorParams,
      flex: 2},
    { field: 'Price', valueFormatter: (p) => '£' + p.value, sortable:true, flex: 1 },
    { field: 'Category', filter: 'agSetColumnFilter' , flex: 1 },
    { field: 'isAvailable', filter:'agNumberColumnFilter', cellRenderer: AvailabiltyRendererComponent, flex: 1  },
    {
      headerName: 'Actions',
      cellRenderer: DeleteButtonRendererComponent,
      cellRendererParams: {
        onDelete: this.onDeleteRow.bind(this)
      },
      flex: 1
    }
  ]

  rowData = [
    { Name: 'Smartphone X', Description: 'High-performance smartphone with advanced features', Price: 699.99, Category: 'Electronics', isAvailable: true },
    { Name: 'Laptop Y', Description: 'Thin and lightweight laptop for work and entertainment', Price: 1299.99, Category: 'Electronics', isAvailable: false },
    { Name: 'Fitness Tracker Z', Description: 'Wearable device to track fitness activities and health metrics', Price: 99.95, Category: 'Fitness', isAvailable: true },
    { Name: 'Wireless Earbuds A', Description: 'Bluetooth earbuds with noise-canceling technology', Price: 129.99, Category: 'Electronics', isAvailable: true },
    { Name: 'Exercise Bike B', Description: 'Indoor exercise bike with adjustable resistance levels', Price: 299.99, Category: 'Fitness', isAvailable: false }
  ]


  public paginationPageSize = 6;
  public paginationPageSizeSelector: number[] | boolean = [1, 2, 4, 6, 10];

  onDeleteRow(params: any) {
    const rowIndex = this.rowData.indexOf(params.data);
    if (rowIndex >= 0) {
      this.rowData.splice(rowIndex, 1);
      this.rowData = [...this.rowData]; 
    }
  }
}
