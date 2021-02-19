import { Component, ViewEncapsulation, OnDestroy, Renderer2 } from '@angular/core';
import pageSettings from '../../../config/page-settings';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Config } from "ngx-countdown";

@Component({
    selector: 'extra-coming-soon',
    templateUrl: './extra-coming-soon.html',
    styleUrls: [ '../../../../../../assets/plugins/jquery.countdown/jquery.countdown.css' ],
    encapsulation: ViewEncapsulation.None
})

export class ExtraComingSoonPage implements OnDestroy {
  pageSettings = pageSettings;

  constructor(private router: Router, private renderer: Renderer2) {
    this.pageSettings.pageEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.pageSettings.pageEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['dashboard/v2']);
  }
}
