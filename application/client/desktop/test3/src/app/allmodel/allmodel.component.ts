import { Component, OnInit } from '@angular/core';
import { AllmodelService } from './allmodel.service';

@Component({
  selector: 'app-allmodel',
  templateUrl: './allmodel.component.html',
  styleUrls: ['./allmodel.component.scss'],
})

export class AllmodelComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Model', field: 'model'  },{ headerName: 'Color', field: 'color'  },];
    public manufacture = {
        name: '',
        model: '',
        color: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private allmodelService: AllmodelService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allmodelService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}