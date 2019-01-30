import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import NotFound from '/imports/ui/NotFound.vue';
import sm from '/imports/ui/bloques/Opt_sm.vue';
import pc from '/imports/ui/bloques/Opt_pc.vue';
import au from '/imports/ui/bloques/Opt_au.vue';
import vip from '/imports/ui/bloques/Opt_vip.vue';

RouterFactory.configure(router => {
    router.addRoutes([
        {
            path: '/sm',
            name: 'sm',
            component: sm,
        },
        {
            path: '/pc',
            name: 'pc',
            component: pc,
        },
        {
            path: '/vip',
            name: 'vip',
            component: vip,
        },
        {
            path: '/au',
            name: 'au',
            component: au,
        },
        {
            path: '*',
            component: NotFound,
        }
    ]);
}, -1);

// export default routerFactory;