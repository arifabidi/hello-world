import { Component } from '@angular/core';
import { Breadcrumb } from '../breadcrumb.model';
import { Observable } from 'rxjs';
import { BreadCrumbService } from '../bread-crumb.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent {

  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadCrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
}
