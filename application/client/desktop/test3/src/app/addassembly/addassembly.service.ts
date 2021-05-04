import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class AddassemblyService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(assembly): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/assembly', assembly);
    }
    manufactureGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/manufacture');
    }
}