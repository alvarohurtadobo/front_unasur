import { RouterFactory } from 'meteor/akryum:vue-router2'

// Components
import home from './ui/Home.vue';
import NotFound from './ui/NotFound.vue';
// ************* SALA MULTIPLE ***********
import sm from "./ui/bloques/sala_multiple/Opt_sm.vue";
import accesos_sm_detalle from "./ui/bloques/sala_multiple/Accesos_sm.vue";
import iluminacion_sm_convensiones from "./ui/bloques/sala_multiple/ilum_sm_convensiones.vue";
import iluminacion_sm_hall from "./ui/bloques/sala_multiple/ilum_sm_hall.vue";
import iluminacion_sm_parqueo from "./ui/bloques/sala_multiple/ilum_sm_parqueo.vue";
import energia_sm from './ui/bloques/sala_multiple/energia_sm.vue';
import riego from './ui/bloques/sala_multiple/riego_sm.vue';
import camaras_sm from './ui/bloques/sala_multiple/camaras_sm.vue';
// ************* PLAZA DE COMIDAS ************
import pc from './ui/bloques/plaza_comidas/Opt_pc.vue';
import accesos_pc from "./ui/bloques/plaza_comidas/Accesos_pc.vue";
import iluminacion_pc from './ui/bloques/plaza_comidas/Ilum_pc.vue';
import incendio_pc from './ui/bloques/plaza_comidas/Incendio_pc.vue';
// ************* SALA VIP ********************
import vip from './ui/bloques/sala_vip/Opt_vip.vue';
import iluminacion_vip from './ui/bloques/sala_vip/iluminacion_vip.vue';
import dimmer_vip from './ui/bloques/sala_vip/dimmer_vip.vue';
import rgb_vip from './ui/bloques/sala_vip/rgb_vip.vue';
import aire_vip from './ui/bloques/sala_vip/aire_vip.vue';
import camaras_vip from './ui/bloques/sala_vip/camaras_vip.vue';
// ************* AUDITORIO *******************
import au from './ui/bloques/auditorio/Opt_au.vue';
import accesos_au from "./ui/bloques/auditorio/Accesos_au.vue";
import iluminacion_au from './ui/bloques/auditorio/Ilum_au.vue';
import iluminacion_au_a from "./ui/bloques/auditorio/Ilum_au_a.vue";
import dimmer_auditorios from "./ui/bloques/auditorio/Dim_auditorios.vue";
import iluminacion_au_b from "./ui/bloques/auditorio/Ilum_au_b.vue";
import iluminacion_au_prin from "./ui/bloques/auditorio/Ilum_au_prin.vue";
import aire_au_prin from './ui/bloques/auditorio/Aire_au_prin.vue';
import camaras_au_prin from './ui/bloques/auditorio/Camaras_au_prin.vue'
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
          },
          {
            path: "/camaras_sm",
            component: camaras_sm
          },
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
          },
          {
            path: "/incendio_pc",
            component: incendio_pc
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
          },
          {
            path: "/camaras_vip",
            component: camaras_vip
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
            path: "/dimmer_auditorios",
            component: dimmer_auditorios
          },
          {
            path: "/iluminacion_au_b",
            component: iluminacion_au_b
          },
          {
            path: "/camaras_au_prin",
            component: camaras_au_prin
          },
        ]
      },
      {
        path: "*",
        component: NotFound
      }
    ]);
}, -1);

// export default routerFactory;