import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

const empresas =[{"id":1,"tipo":"Centizu","avatar":"https://robohash.org/nonnatusipsa.png?size=100x100&set=set1"},
{"id":2,"tipo":"Linkbuzz","avatar":"https://robohash.org/sitipsumcupiditate.png?size=100x100&set=set1"},
{"id":3,"tipo":"Quatz","avatar":"https://robohash.org/mollitiavelitanimi.png?size=100x100&set=set1"},
{"id":4,"tipo":"Gabtype","avatar":"https://robohash.org/vitaeminimacorrupti.png?size=100x100&set=set1"},
{"id":5,"tipo":"Buzzshare","avatar":"https://robohash.org/nullaautofficia.png?size=100x100&set=set1"},
{"id":6,"tipo":"Meembee","avatar":"https://robohash.org/accusamusquirem.png?size=100x100&set=set1"},
{"id":7,"tipo":"Npath","avatar":"https://robohash.org/asperioresveliure.png?size=100x100&set=set1"},
{"id":8,"tipo":"Devpulse","avatar":"https://robohash.org/mollitiaveniamillum.png?size=100x100&set=set1"},
{"id":9,"tipo":"Skibox","avatar":"https://robohash.org/excepturirerumet.png?size=100x100&set=set1"},
{"id":10,"tipo":"Abatz","avatar":"https://robohash.org/vitaedolorumanimi.png?size=100x100&set=set1"},
{"id":11,"tipo":"Photolist","avatar":"https://robohash.org/magnisuntmolestiae.png?size=100x100&set=set1"},
{"id":12,"tipo":"Skyba","avatar":"https://robohash.org/facilisvoluptatemquia.png?size=100x100&set=set1"},
{"id":13,"tipo":"Fivespan","avatar":"https://robohash.org/rationesaepeat.png?size=100x100&set=set1"},
{"id":14,"tipo":"Blogpad","avatar":"https://robohash.org/repellendussaepemaxime.png?size=100x100&set=set1"},
{"id":15,"tipo":"Riffpath","avatar":"https://robohash.org/voluptatibusconsequaturid.png?size=100x100&set=set1"},
{"id":16,"tipo":"Buzzdog","avatar":"https://robohash.org/omnisaipsum.png?size=100x100&set=set1"},
{"id":17,"tipo":"Shufflester","avatar":"https://robohash.org/totamreiciendisqui.png?size=100x100&set=set1"},
{"id":18,"tipo":"Eabox","avatar":"https://robohash.org/utatqueexcepturi.png?size=100x100&set=set1"},
{"id":19,"tipo":"Feedbug","avatar":"https://robohash.org/quifugiatvoluptates.png?size=100x100&set=set1"},
{"id":20,"tipo":"Yotz","avatar":"https://robohash.org/adipiscinumquamad.png?size=100x100&set=set1"}];

const users = [{"id":1,"firstName":"Alyosha","lastName":"Schwandermann","telefono":"+55 (984) 119-6610","avatar":"https://robohash.org/nullaperspiciatisest.png?size=100x100&set=set1","email":"aschwandermann0@gov.uk","password":"L4EHHXg8j5","logeado":false,"tipo":"supermercado"},
{"id":2,"firstName":"Frannie","lastName":"Augar","telefono":"+351 (477) 891-2069","avatar":"https://robohash.org/nesciuntporroaccusamus.png?size=100x100&set=set1","email":"faugar1@barnesandnoble.com","password":"LgHJ3gmW","logeado":false,"tipo":"supermercado"},
{"id":3,"firstName":"Harli","lastName":"Moorman","telefono":"+62 (788) 513-5510","avatar":"https://robohash.org/atqueullamnihil.png?size=100x100&set=set1","email":"hmoorman2@yellowpages.com","password":"sQ1OOP1yE0w","logeado":false ,"tipo":"restaurante"},
{"id":4,"firstName":"Marylee","lastName":"Garry","telefono":"+63 (591) 752-6436","avatar":"https://robohash.org/estquoseum.png?size=100x100&set=set1","email":"mgarry3@businessweek.com","password":"G2Hf504Ms","logeado":false,"tipo":"supermercado"},
{"id":5,"firstName":"Jimmy","lastName":"Scade","telefono":"+62 (658) 737-9705","avatar":"https://robohash.org/etvoluptatemut.png?size=100x100&set=set1","email":"jscade4@toplist.cz","password":"0bjwS87wbF","logeado":false,"tipo":"supermercado"},
{"id":6,"firstName":"Chrisy","lastName":"Romeo","telefono":"+351 (895) 425-5760","avatar":"https://robohash.org/officiaesseenim.png?size=100x100&set=set1","email":"cromeo5@paypal.com","password":"vT1Vdgyy","logeado":false,"tipo":"supermercado"},
{"id":7,"firstName":"Gleda","lastName":"Harrold","telefono":"+62 (872) 153-2626","avatar":"https://robohash.org/numquamrepudiandaedeleniti.png?size=100x100&set=set1","email":"gharrold6@apache.org","password":"6xazkS","logeado":false,"tipo":"supermercado"},
{"id":8,"firstName":"Chantalle","lastName":"Basillon","telefono":"+351 (761) 358-7755","avatar":"https://robohash.org/sedaccusantiumvelit.png?size=100x100&set=set1","email":"cbasillon7@ox.ac.uk","password":"T61nLwaFAZLb","logeado":false,"tipo":"restaurante"},
{"id":9,"firstName":"Tome","lastName":"Finn","telefono":"+7 (899) 254-5101","avatar":"https://robohash.org/suntcorporismagni.png?size=100x100&set=set1","email":"tfinn8@va.gov","password":"Zcrl2XR","logeado":false},
{"id":10,"firstName":"Anica","lastName":"Crallan","telefono":"+49 (941) 783-2457","avatar":"https://robohash.org/consequaturvoluptateexplicabo.png?size=100x100&set=set1","email":"acrallan9@twitter.com","password":"tb8wA3xK1T9","logeado":false,"tipo":"supermercado"},
{"id":11,"firstName":"Timmi","lastName":"Gotobed","telefono":"+977 (788) 770-1037","avatar":"https://robohash.org/odioipsumcupiditate.png?size=100x100&set=set1","email":"tgotobeda@guardian.co.uk","password":"RDiPxlggm","logeado":false,"tipo":"supermercado"},
{"id":12,"firstName":"Yevette","lastName":"Lavelle","telefono":"+967 (171) 149-3786","avatar":"https://robohash.org/laboriosamaccusamusvero.png?size=100x100&set=set1","email":"ylavelleb@facebook.com","password":"lWJCCptbE","logeado":false,"tipo":"restaurante"},
{"id":13,"firstName":"Isacco","lastName":"Berrill","telefono":"+62 (964) 315-9146","avatar":"https://robohash.org/rerumeumaspernatur.png?size=100x100&set=set1","email":"iberrillc@tripadvisor.com","password":"VXO1syGa1O","logeado":false,"tipo":"supermercado"},
{"id":14,"firstName":"Lorrayne","lastName":"Hussell","telefono":"+48 (781) 728-7114","avatar":"https://robohash.org/magniquosquo.png?size=100x100&set=set1","email":"lhusselld@nytimes.com","password":"QV3Idv3Koz2","logeado":false,"tipo":"supermercado"},
{"id":15,"firstName":"Rabbi","lastName":"Stow","telefono":"+63 (843) 880-4100","avatar":"https://robohash.org/etcumipsa.png?size=100x100&set=set1","email":"rstowe@wikimedia.org","password":"9apz4e","logeado":false,"tipo":"supermercado"},
{"id":16,"firstName":"Milo","lastName":"Lackie","telefono":"+86 (459) 981-9618","avatar":"https://robohash.org/quamquisearum.png?size=100x100&set=set1","email":"mlackief@github.io","password":"gT5d12O","logeado":false,"tipo":"supermercado"},
{"id":17,"firstName":"Josefa","lastName":"Stormes","telefono":"+55 (536) 506-0128","avatar":"https://robohash.org/omnisipsumvoluptatem.png?size=100x100&set=set1","email":"jstormesg@altervista.org","password":"OXRgXT50s","logeado":false,"tipo":"supermercado"},
{"id":18,"firstName":"Adrian","lastName":"Waren","telefono":"+63 (522) 982-2367","avatar":"https://robohash.org/voluptatesminimadeserunt.png?size=100x100&set=set1","email":"awarenh@washingtonpost.com","password":"39hW83b","logeado":false,"tipo":"supermercado"},
{"id":19,"firstName":"Norrie","lastName":"Gregs","telefono":"+63 (504) 696-4715","avatar":"https://robohash.org/etfugaipsum.png?size=100x100&set=set1","email":"ngregsi@purevolume.com","password":"ZL6Rqc8gfiJY","logeado":false,"tipo":"supermercado"},
{"id":20,"firstName":"Annmarie","lastName":"Matthew","telefono":"+51 (854) 553-3056","avatar":"https://robohash.org/excepturiquaset.png?size=100x100&set=set1","email":"amatthewj@businessweek.com","password":"F1Urv4YrG9P","logeado":false,"tipo":"supermercado"}];
const productos= [{
  "id": 1,
  "nombre": "Preston",
  "img": "https://picsum.photos/200",
  "precio": "$5.43"
}, {
  "id": 2,
  "nombre": "Olimpia",
  "img": "https://picsum.photos/200",
  "precio": "$4.87"
}, {
  "id": 3,
  "nombre": "Adrian",
  "img": "https://picsum.photos/200",
  "precio": "$2.99"
}, {
  "id": 4,
  "nombre": "Rea",
  "img": "https://picsum.photos/200",
  "precio": "$9.37"
}, {
  "id": 5,
  "nombre": "Anita",
  "img": "https://picsum.photos/200",
  "precio": "$0.60"
}, {
  "id": 6,
  "nombre": "Shelly",
  "img": "https://picsum.photos/200",
  "precio": "$3.38"
}, {
  "id": 7,
  "nombre": "Cornie",
  "img": "https://picsum.photos/200",
  "precio": "$5.02"
}, {
  "id": 8,
  "nombre": "Rodina",
  "img": "https://picsum.photos/200",
  "precio": "$1.94"
}, {
  "id": 9,
  "nombre": "Trent",
  "img": "https://picsum.photos/200",
  "precio": "$4.32"
}, {
  "id": 10,
  "nombre": "Hillel",
  "img": "https://picsum.photos/200",
  "precio": "$2.57"
}, {
  "id": 11,
  "nombre": "Giana",
  "img": "https://picsum.photos/200",
  "precio": "$4.12"
}, {
  "id": 12,
  "nombre": "Rosemary",
  "img": "https://picsum.photos/200",
  "precio": "$1.52"
}, {
  "id": 13,
  "nombre": "Liana",
  "img": "https://picsum.photos/200",
  "precio": "$0.30"
}]

export default new Vuex.Store({
  state: {
    auth:{},
    modalProducto: true,
    busqueda:{
      query:'',
      tipo:'supermercado'
    },
    users:users,
    empresas:empresas,
    productos:productos,
    items: [
      { title: 'Promociones', icon: 'monetization_on'},
      { title: 'Restaurantes', icon: 'restaurant' },
      { title: 'Tiendas', icon: 'store_mall_directory'},
      { title: 'Mejores Productos', icon: 'star' },
    ],
  },
  mutations: {
    
    mostrar_modal(state){
      state.modalProducto=true
    },
    oculta_modal(state){
      state.modalProducto=false
    },

    Get_Aliado_ID(state,id){
      for (let index = 0; index < state.empresas.length; index++) {
        if (state.empresas[index].id==id){
          return state.empresas[index].tipo
        }else{
          return "Not Found"
        }
        
      }
    },
    CARGAR_AUTH(state){
      const usuario = JSON.parse(window.localStorage.auth);
      state.auth = usuario;
    },

    SET_LOGIN(state,user){
      for (let i = 0; i < state.users.length; i++) {
        if(user.email == state.users[i].email){
          if(user.password == state.users[i].password){
            state.auth = state.users[i];
            state.auth.logeado = true;
          }
        }
      }

      if(state.auth.email == user.email){
        window.localStorage.auth = JSON.stringify(state.auth);
        router.push('/');
      }else{
        router.push('/auth/login');
      }
    },

    LOGOUT(state){
      state.auth={};
      window.localStorage.auth = JSON.stringify({});
    },
    SET_QUERY(state,query){
      state.busqueda.query = query;
    },
    SET_TIPO(state, tipo) {
      state.busqueda.tipo = tipo;
    }

  },
  actions: {
    logout({commit}){
      commit('LOGOUT');
    },
    cargarAuth({commit}){
      var usuario = JSON.parse(window.localStorage.auth);
      commit('CARGAR_AUTH',usuario);
    },
    loginAuth({commit},user){
      commit('SET_LOGIN',user);
    },
    setQuery({commit},val){
      commit('SET_QUERY',val);
    },
    setTipo({commit},val){
      commit('SET_TIPO',val);
    }
  },

  getters:{
    filteredStore(state){
      let stores = state.users.filter(user => user.tipo == state.busqueda.tipo);
      if(state.busqueda.query.length > 2){
        return stores.filter(store => store.firstName.toLowerCase().includes(state.busqueda.query.toLowerCase()));
      }
      return stores;
    }
  }

})
