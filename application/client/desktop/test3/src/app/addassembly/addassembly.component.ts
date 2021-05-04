import { Component, OnInit } from '@angular/core';
import { AddassemblyService } from './addassembly.service';

@Component({
  selector: 'app-addassembly',
  templateUrl: './addassembly.component.html',
  styleUrls: ['./addassembly.component.scss'],
})

export class AddassemblyComponent implements OnInit {
    manufactureitemArray: any = [];
    public assembly = {
        name: '',
        description: '',
    }

    constructor (
        private addassemblyService: AddassemblyService,
    ) { }

    ngOnInit() {
    }
    manufactureGpGetAllValues() {
        this.addassemblyService.manufactureGpGetAllValues().subscribe(data => {
            this.manufactureitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.addassemblyService.GpCreate(this.assembly).subscribe(data => {
            this.assembly.name = ''
 	 	this.assembly.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}