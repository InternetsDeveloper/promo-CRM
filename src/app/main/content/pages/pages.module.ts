import { NgModule } from '@angular/core';


import { Login2Module } from './authentication/login-2/login-2.module';
import { RegisterModule } from './authentication/register/register.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { ResetPasswordModule } from './authentication/reset-password/reset-password.module';
import { LockModule } from './authentication/lock/lock.module';
import { MailConfirmModule } from './authentication/mail-confirm/mail-confirm.module';
import { ComingSoonModule } from './coming-soon/coming-soon.module';
import { Error404Module } from './errors/404/error-404.module';
import { Error500Module } from './errors/500/error-500.module';
import { MaintenanceModule } from './maintenance/maintenence.module';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';
import { FaqModule } from './faq/faq.module';

@NgModule({
    imports: [
        // Auth
        Login2Module,
        RegisterModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        LockModule,
        MailConfirmModule,

        // Coming-soon
        ComingSoonModule,

        // Errors
        Error404Module,
        Error500Module,

        // Maintenance
        MaintenanceModule,

        // Profile
        ProfileModule,

        // Search
        SearchModule,

        // Faq
        FaqModule
    ]
})
export class AsPagesModule
{

}
