import { Component, OnInit } from '@angular/core';
import { AddplantService } from './addplant.service';

@Component({
  selector: 'app-addplant',
  templateUrl: './addplant.component.html',
  styleUrls: ['./addplant.component.scss'],
})

export class AddplantComponent implements OnInit {
    public manufacture = {
        name: '',
        model: '',
        color: '',
    }

    constructor (
        private addplantService: AddplantService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addplantService.GpCreate(this.manufacture).subscribe(data => {
            this.manufacture.name = ''
 	 	this.manufacture.model = ''
 	 	this.manufacture.color = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}