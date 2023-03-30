import { INavbarData } from "./helper";

export const navbarData:INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fas fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'my-station',
        icon: 'fas fa-charging-station',
        label: 'My Station',
    },
    {
        routeLink: 'earnings',
        icon: 'fas fa-money-check-alt',
        label: 'Earnings'
    },
    {
        routeLink: 'booking',
        icon: 'fas fa-book',
        label: 'Bookings'
    },
    {
        routeLink: 'payments',
        icon: 'fas fa-credit-card',
        label: 'Payments'
    },
    {
        routeLink: 'settlements',
        icon: 'fas fa-wallet',
        label: 'Settlements'
    },
    {
        routeLink: 'downloads',
        icon: 'fas fa-download',
        label: 'Downloads'
    },
    {
        routeLink: 'settings',
        icon: 'fas fa-cog',
        label: 'Settings',
        expanded:true,
        items:[
            {
                routeLink:'settings/accountSetting',
                label: 'Account Setting'
            },
            {
                routeLink:'settings/securitySetting',
                label: 'Security Setting'
            },
            // {
            //     routeLink:'settings/control-access',
            //     label: 'Control Access'
            // },
            {
                routeLink:'settings/paymentSetting',
                label: 'Payment Setting'
            },
            {
                routeLink:'settings/notificationSetting',
                label: 'Notification Setting'
            }
        ]
    },
    {
        routeLink: 'support-status',
        icon: 'fas  fa-users',
        label: 'Help & Support'
    }
];