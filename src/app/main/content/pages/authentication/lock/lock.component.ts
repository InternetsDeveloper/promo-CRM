import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsConfigService } from '../../../../../core/services/config.service';
import { asAnimations } from '../../../../../core/animations';

@Component({
    selector   : 'as-lock',
    templateUrl: './lock.component.html',
    styleUrls  : ['./lock.component.scss'],
    animations : asAnimations
})
export class AsLockComponent implements OnInit
{
    lockForm: FormGroup;
    lockFormErrors: any;

    constructor(
        private asConfig: AsConfigService,
        private formBuilder: FormBuilder
    )
    {
        this.asConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });

        this.lockFormErrors = {
            username: {},
            password: {}
        };
    }

    ngOnInit()
    {
        this.lockForm = this.formBuilder.group({
            username: [
                {
                    value   : 'Katherine',
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });

        this.lockForm.valueChanges.subscribe(() => {
            this.onLockFormValuesChanged();
        });
    }

    onLockFormValuesChanged()
    {
        for ( const field in this.lockFormErrors )
        {
            if ( !this.lockFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.lockFormErrors[field] = {};

            // Get the control
            const control = this.lockForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.lockFormErrors[field] = control.errors;
            }
        }
    }
}
