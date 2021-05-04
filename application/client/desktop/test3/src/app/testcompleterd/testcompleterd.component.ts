import { Component, OnInit } from '@angular/core';
import { TestcompleterdService } from './testcompleterd.service';

@Component({
  selector: 'app-testcompleterd',
  templateUrl: './testcompleterd.component.html',
  styleUrls: ['./testcompleterd.component.scss'],
})

export class TestcompleterdComponent implements OnInit {
    public testing = {
        test: '',
        fullchecking: '',
    }

    constructor (
        private testcompleterdService: TestcompleterdService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.testcompleterdService.GpCreate(this.testing).subscribe(data => {
            this.testing.test = ''
 	 	this.testing.fullchecking = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}