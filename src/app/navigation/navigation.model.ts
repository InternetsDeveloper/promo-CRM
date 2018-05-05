import { AsNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class AsNavigationModel implements AsNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'       : 'applications',
                'title'    : 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type'     : 'group',
                'icon'     : 'apps',
                'children' : [
                    {
                        'id'       : 'dashboards',
                        'title'    : 'Home',
                        'translate': 'NAV.DASHBOARDS',
                        'type'     : 'collapse',
                        'icon'     : 'home',
                        'children' : [
                            {
                                'id'   : 'project',
                                'title': 'Dashboard',
                                'type' : 'item',
                                'url'  : '/apps/dashboards/project'
                            },
                        ]
                    },
                    {
                        'id'       : 'login-v2',
                        'title'    : 'Login',
                        'type'     : 'item',
                        'icon'     : 'work',
                        'url'      : '/pages/auth/login-2'
                    },
                    {
                        'id'       : 'e-commerce',
                        'title'    : 'Leads',
                        'translate': 'NAV.ECOMMERCE',
                        'type'     : 'item',
                        'icon'     : 'face',
                        'url' :     '/apps/e-commerce/dashboard'
                    },
                    {
                        'id'       : 'academy',
                        'title'    : 'Tasks',
                        'translate': 'NAV.ACADEMY',
                        'type'     : 'item',
                        'icon'     : 'list',
                        'url'      : '/apps/academy'
                    },
                    {
                        'id'       : 'mail',
                        'title'    : 'Files',
                        'translate': 'NAV.MAIL.TITLE',
                        'type'     : 'item',
                        'icon'     : 'content_copy',
                        'url'      : '/apps/mail',
                    },
                    {
                        'id'       : 'mail-ngrx',
                        'title'    : 'Notes',
                        'translate': 'NAV.MAIL_NGRX.TITLE',
                        'type'     : 'item',
                        'icon'     : 'note_text',
                        'url'      : '/apps/mail-ngrx',
                    },
                    {
                        'id'       : 'chat',
                        'title'    : 'Accounts',
                        'translate': 'NAV.CHAT',
                        'type'     : 'item',
                        'icon'     : 'chat',
                        'url'      : '/apps/chat',
                    },
                    {
                        'id'       : 'contacts',
                        'title'    : 'Contacts',
                        'translate': 'NAV.CONTACTS',
                        'type'     : 'item',
                        'icon'     : 'account_box',
                        'url'      : '/apps/contacts'
                    },
                    {
                        'id'       : 'to-do',
                        'title'    : 'Dashboard',
                        'translate': 'NAV.TODO',
                        'type'     : 'item',
                        'icon'     : 'dashboard',
                        'url'      : '/apps/todo',
                    },
                    {
                        'id'       : 'scrumboard',
                        'title'    : 'Reports',
                        'translate': 'NAV.SCRUMBOARD',
                        'type'     : 'item',
                        'icon'     : 'assessment',
                        'url'      : '/apps/scrumboard'
                    },
                    {
                        'id'       : 'scrumboard',
                        'title'    : 'Feed',
                        'translate': 'NAV.SCRUMBOARD',
                        'type'     : 'item',
                        'icon'     : 'compare_arrows',
                        'url'      : '/apps/scrumboard'
                    },
                    {
                        'id'       : 'scrumboard',
                        'title'    : 'Groups',
                        'translate': 'NAV.SCRUMBOARD',
                        'type'     : 'item',
                        'icon'     : 'people',
                        'url'      : '/apps/scrumboard'
                    },
                    {
                        'id'       : 'calendar',
                        'title'    : 'Calendar',
                        'translate': 'NAV.CALENDAR',
                        'type'     : 'item',
                        'icon'     : 'date_range',
                        'url'      : '/apps/calendar'
                    },
                    {
                        'id'       : 'contacts',
                        'title'    : 'Cases',
                        'translate': 'NAV.CONTACTS',
                        'type'     : 'item',
                        'icon'     : 'apps',
                        'url'      : '/apps/contacts'
                    }
                ]
            },
            
        ];
    }
}

