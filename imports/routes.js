import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import home from '/imports/ui/Home.vue';
import NotFound from '/imports/ui/NotFound.vue';
// ************* SALA MULTIPLE ***********
import sm from "/imports/ui/bloques/sala_multiple/Opt_sm.vue";
import accesos_sm_detalle from "/imports/ui/bloques/sala_multiple/Accesos_sm.vue";
import iluminacion_sm_convensiones from "/imports/ui/bloques/sala_multiple/ilum_sm_convensiones.vue";
import iluminacion_sm_hall from "/imports/ui/bloques/sala_multiple/ilum_sm_hall.vue";
import iluminacion_sm_parqueo from "/imports/ui/bloques/sala_multiple/ilum_sm_parqueo.vue";
import energia_sm from '/imports/ui/bloques/sala_multiple/energia_sm.vue';
import riego from '/imports/ui/bloques/sala_multiple/riego_sm.vue';
// ************* PLAZA DE COMIDAS ************
import pc from '/imports/ui/bloques/plaza_comidas/Opt_pc.vue';
import accesos_pc from "/imports/ui/bloques/plaza_comidas/Accesos_pc.vue";
import iluminacion_pc from '/imports/ui/bloques/plaza_comidas/Ilum_pc.vue';
// ************* SALA VIP ********************
import vip from '/imports/ui/bloques/sala_vip/Opt_vip.vue';
import iluminacion_vip from '/imports/ui/bloques/sala_vip/iluminacion_vip.vue';
import dimmer_vip from '/imports/ui/bloques/sala_vip/dimmer_vip.vue';
import rgb_vip from '/imports/ui/bloques/sala_vip/rgb_vip.vue';
import aire_vip from '/imports/ui/bloques/sala_vip/aire_vip.vue';
// ************* AUDITORIO *******************
import au from '/imports/ui/bloques/auditorio/Opt_au.vue';
import accesos_au from "/imports/ui/bloques/auditorio/Accesos_au.vue";
import iluminacion_au from '/imports/ui/bloques/auditorio/Ilum_au.vue';
import iluminacion_au_a from "/imports/ui/bloques/auditorio/Ilum_au_a.vue";
import iluminacion_au_b from "/imports/ui/bloques/auditorio/Ilum_au_b.vue";
import iluminacion_au_prin from "/imports/ui/bloques/auditorio/Ilum_au_prin.vue";
import aire_au_prin from '/imports/ui/bloques/auditorio/Aire_au_prin.vue';
RouterFactory.configure(router => {
    router.addRoutes([
      {
        path: "/",
        name: "home",
        component: home
      },
      {
        path: "/sm",
        name: "sm",
        component: sm,
        children: [
          {
            path: "/accesos_sm_detalle",
            component: accesos_sm_detalle
          },
          {
            path: "/iluminacion_sm_convensiones",
            component: iluminacion_sm_convensiones
          },
          {
            path: "/iluminacion_sm_hall",
            component: iluminacion_sm_hall
          },
          {
            path: "/iluminacion_sm_parqueo",
            component: iluminacion_sm_parqueo
          },
          {
            path: "/energia_sm",
            component: energia_sm
          },
          {
            path: "/riego",
            component: riego
          }
        ]
      },
      {
        path: "/pc",
        name: "pc",
        component: pc,
        children: [
          {
            path: "/accesos_pc",
            component: accesos_pc
          },
          {
            path: "/iluminacion_pc",
            component: iluminacion_pc
          }
        ]
      },
      {
        path: "/vip",
        name: "vip",
        component: vip,
        children: [
          {
            path: "/iluminacion_vip",
            component: iluminacion_vip
          },
          {
            path: "/dimmer_vip",
            component: dimmer_vip
          },
          {
            path: "/rgb_vip",
            component: rgb_vip
          },
          {
            path: "/aire_vip",
            component: aire_vip
          }
        ]
      },
      {
        path: "/au",
        name: "au",
        component: au,
        children: [
          {
            path: "/accesos_au",
            component: accesos_au
          },
          {
            path: "/iluminacion_au",
            component: iluminacion_au
          },
          {
            path: "/iluminacion_au_prin",
            component: iluminacion_au_prin
          },
          {
            path: "/aire_au_prin",
            component: aire_au_prin
          },
          {
            path: "/iluminacion_au_a",
            component: iluminacion_au_a
          },
          {
            path: "/iluminacion_au_b",
            component: iluminacion_au_b
          }
        ]
      },
      {
        path: "*",
        component: NotFound
      }
    ]);
}, -1);

// export default routerFactory;