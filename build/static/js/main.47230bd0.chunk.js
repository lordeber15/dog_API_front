(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,a,t){e.exports={nft:"DogCard_nft__2ShlT",name:"DogCard_name__20Bm2",description:"DogCard_description__2ZbBE",main:"DogCard_main__2wE8s",tokenImage:"DogCard_tokenImage__19Grk",tokenInfo:"DogCard_tokenInfo__1yTw7",price:"DogCard_price__10wKx",duration:"DogCard_duration__1p0Tf",creator:"DogCard_creator__Ipci5",wrapper:"DogCard_wrapper__qX7W_"}},24:function(e,a,t){e.exports={logo:"NavBar_logo__2d7_L",nav:"NavBar_nav__3GB3k",logoAndTitle:"NavBar_logoAndTitle__17LGq",TitleAndSearchBar:"NavBar_TitleAndSearchBar__2f0Fh",aboutNavButton:"NavBar_aboutNavButton__118oT"}},29:function(e,a,t){e.exports={hero:"LandingPage_hero__3YqCX",title:"LandingPage_title__3WP99",logodog:"LandingPage_logodog__279br",video_bg:"LandingPage_video_bg__2poac",bubblyButton:"LandingPage_bubblyButton__odNzl",animate:"LandingPage_animate__1WApf",topBubbles:"LandingPage_topBubbles__261xi"}},3:function(e,a,t){e.exports={mainContainerCreation:"DogCreation_mainContainerCreation__3c0YL",formContainer:"DogCreation_formContainer__2-hyi",button:"DogCreation_button__wmpgc",buttonCancel:"DogCreation_buttonCancel__2syfM",Section:"DogCreation_Section__1H0eA",sidebar_box:"DogCreation_sidebar_box__3_kWN",selectedItems:"DogCreation_selectedItems__Pp_GF",error:"DogCreation_error__3cELX",buttonSection:"DogCreation_buttonSection__51aub",styled_select:"DogCreation_styled_select__1jxQS",form__group:"DogCreation_form__group__21o6p",form__field:"DogCreation_form__field__D3q-I",form__label:"DogCreation_form__label__2X-Lt"}},30:function(e,a,t){e.exports={crumbs:"Pagination_crumbs__1dNKN",crumb:"Pagination_crumb__2bbTz",crumb__active:"Pagination_crumb__active__2TVK1",nav:"Pagination_nav__3vrhk"}},38:function(e,a,t){e.exports={searchBox:"SearchBar_searchBox__c5cHk",searchInput:"SearchBar_searchInput__K-KPO",searchButton:"SearchBar_searchButton__1xlKn"}},42:function(e,a,t){e.exports={dogsArea:"DogArea_dogsArea__1Zb3X",pagination:"DogArea_pagination__jSUNe"}},47:function(e,a,t){e.exports={mainContainer:"Home_mainContainer__2d7OF",Sidebar:"Home_Sidebar__2ohY6"}},55:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),r=t(32),i=t.n(r),s=t(13),o=t(33),l=t(45),j=t(46),d=t(19),m=t(4),b={dogs:[],allDogs:[],temperaments:[],breeds:[],details:[]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_DOGS":return Object(m.a)(Object(m.a)({},e),{},{dogs:a.payload,allDogs:a.payload});case"GET_DOGS_BY_NAME":case"GET_DOGS_BY_TEMP":return Object(m.a)(Object(m.a)({},e),{},{allDogs:a.payload});case"GET_BREEDS":return Object(m.a)(Object(m.a)({},e),{},{breeds:a.payload});case"GET_TEMPERAMENTS_LIST":return Object(m.a)(Object(m.a)({},e),{},{temperaments:a.payload});case"GET_DOGS_BY_BREED":var t=e.dogs;return"all"===a.payload?t:Object(m.a)(Object(m.a)({},e),{},{allDogs:a.payload,dogs:t});case"FILTER_CREATED":var n="created"===a.payload?e.dogs.filter((function(e){return!0===e.createdInDB})):e.dogs.filter((function(e){return!e.createdInDB}));return Object(m.a)(Object(m.a)({},e),{},{allDogs:n});case"ORDER_BY_NAME":var c="asc"===a.payload?Object(d.a)(e.dogs).sort((function(e,a){return e.name>a.name?1:a.name>e.name?-1:0})):Object(d.a)(e.dogs).sort((function(e,a){return e.name>a.name?-1:a.name>e.name?1:0}));return Object(m.a)(Object(m.a)({},e),{},{allDogs:c});case"ORDER_BY_WEIGHT":var r="asc"===a.payload?Object(d.a)(e.dogs).sort((function(e,a){return null===e.weight_min?0:e.weight_min<a.weight_min?1:a.weight_min<e.weight_min?-1:0})):Object(d.a)(e.dogs).sort((function(e,a){return null===e.weight_min?0:e.weight_min<a.weight_min?-1:a.weight_min<e.weight_min?1:0}));return Object(m.a)(Object(m.a)({},e),{},{allDogs:r});case"FILTER_BY_MAX_WEIGHT":var i=e.allDogs,s="all"===a.payload?i:i.filter((function(e){return e.weight_max<=a.payload}));return Object(m.a)(Object(m.a)({},e),{},{allDogs:s});case"FILTER_BY_MIN_WEIGHT":var o=e.allDogs,l="all"===a.payload?o:o.filter((function(e){return e.weight_min>=a.payload}));return Object(m.a)(Object(m.a)({},e),{},{allDogs:l});case"POST_DOG":return Object(m.a)({},e);case"GET_DETAILS":return Object(m.a)(Object(m.a)({},e),{},{details:a.payload});case"DELETE_DETAILS":return Object(m.a)(Object(m.a)({},e),{},{details:[]});default:return e}},h=Object(o.createStore)(u,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(j.a))),g=(t(55),t(12)),p=t(10),O=t(29),x=t.n(O),_=t.p+"static/media/logo.6dacc7a8.svg",f=t(0);function v(){return Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:x.a.hero,children:[Object(f.jsx)("img",{className:x.a.logodog,src:_,alt:"logodogs"}),Object(f.jsx)("h1",{className:x.a.title,children:"Bienvenido a la API de DOG'S"}),Object(f.jsx)(g.b,{to:"/home",children:Object(f.jsx)("button",{className:x.a.bubblyButton,children:"Ingresar Ahora"})})]})})}var N=t(17),D=t(20),A=t.n(D);function E(e){var a=e.id,t=e.name,c=e.image,r=e.temperament,i=e.temperaments;return i?Object(f.jsx)(n.Fragment,{children:Object(f.jsx)(g.b,{to:"/dogs/"+a,children:Object(f.jsx)("div",{className:A.a.nft,children:Object(f.jsxs)("div",{className:A.a.main,children:[Object(f.jsx)("img",{className:A.a.tokenImage,src:c,alt:"NFT"}),Object(f.jsx)("h2",{children:t}),i?Object(f.jsx)("p",{className:A.a.description,children:i.map((function(e){return"".concat(e.name," ")})).join(", ")}):Object(f.jsx)("br",{})]})})})}):Object(f.jsx)(n.Fragment,{children:Object(f.jsx)(g.b,{to:"/dogs/"+a,children:Object(f.jsx)("div",{className:A.a.nft,children:Object(f.jsxs)("div",{className:A.a.main,children:[Object(f.jsx)("img",{className:A.a.tokenImage,src:c,alt:"NFT"}),Object(f.jsx)("h2",{className:A.a.name,children:t}),r?Object(f.jsx)("p",{className:A.a.description,children:r}):Object(f.jsx)("br",{})]})})})})}var C=t(30),w=t.n(C);function S(e){for(var a=e.dogsPerPage,t=e.allDogs,n=e.pagination,c=e.currentPage,r=[],i=1;i<=Math.ceil(t/a);i++)r.push(i);return Object(f.jsx)("nav",{children:Object(f.jsx)("ul",{className:w.a.crumbs,children:r&&r.map((function(e){return Object(f.jsx)("li",{className:w.a.number,children:Object(f.jsx)("div",{className:c===e?w.a.crumb__active:w.a.crumb,onClick:function(){return n(e)},children:e})},e)}))})})}var y=t(11),B=t(21),T=t(68);function I(){return function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){var t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://localhost:3001/dogs");case 2:return t=e.sent,e.abrupt("return",a({type:"GET_DOGS",payload:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}function G(){return function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){var t,n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://localhost:3001/temperament");case 2:return t=e.sent,n=t.data.map((function(e){return e.name})),e.abrupt("return",a({type:"GET_TEMPERAMENTS_LIST",payload:n}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}var k=t(42),M=t.n(k),Y=t(7),H=t.n(Y),P=t.p+"static/media/loop.4d460318.png";function R(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.temperaments})).sort((function(e,a){return e<a?-1:1})),t=Object(s.c)((function(e){return e.allDogs})),c=Object(s.c)((function(e){return e.breeds})),r=t.map((function(e){return e.weight_min})).sort((function(e,a){return e-a})),i=Object(d.a)(new Set(r)),o=t.map((function(e){return e.weight_max})).sort((function(e,a){return e-a})),l=Object(d.a)(new Set(o));function j(a){var t;a.preventDefault(),e((t=a.target.value,function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("http://localhost:3001/dog/?temperament=".concat(t));case 3:return n=e.sent,e.abrupt("return",a({type:"GET_DOGS_BY_TEMP",payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"Error on the filters in actions file");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()))}function m(a){var t;a.preventDefault(),e((t=a.target.value,function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("http://localhost:3001/breedGroup?breedGroup=".concat(t));case 3:return n=e.sent,e.abrupt("return",a({type:"GET_DOGS_BY_BREED",payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"Error on the filters in actions file");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()))}return Object(n.useEffect)((function(){e(I()),e(G()),e(function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){var t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://localhost:3001/breedGroups");case 2:return t=e.sent,e.abrupt("return",a({type:"GET_BREEDS",payload:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[e]),Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:H.a.side,children:[Object(f.jsxs)("div",{className:H.a.sideBarHeader,children:[Object(f.jsx)("h4",{className:H.a.header,children:"Buscar por filtros:"}),Object(f.jsx)("div",{className:H.a.tooltip,onClick:function(a){!function(a){a.preventDefault(),e(I())}(a)},children:Object(f.jsx)("img",{className:H.a.loop,src:P,alt:"loop"})})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Ordenar por nombre"}),Object(f.jsxs)("select",{onChange:function(a){!function(a){a.preventDefault(),e({type:"ORDER_BY_NAME",payload:a.target.value})}(a)},children:[Object(f.jsx)("option",{defaultValue:!0,value:"all",hidden:!0,children:"Ordenar por Nombre"}),Object(f.jsx)("option",{value:"asc",children:"A - Z"}),Object(f.jsx)("option",{value:"desc",children:"Z - A"})]})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Ordenar por peso"}),Object(f.jsxs)("select",{onChange:function(a){!function(a){a.preventDefault(),e({type:"ORDER_BY_WEIGHT",payload:a.target.value})}(a)},children:[Object(f.jsx)("option",{defaultValue:!0,value:"all",hidden:!0,children:"Ordenar por Peso"}),Object(f.jsx)("option",{value:"asc",children:"M\xe1s pesado 1\xba"}),Object(f.jsx)("option",{value:"desc",children:"M\xe1s ligero 1\xba"})]})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Filtrar por Origen"}),Object(f.jsxs)("select",{onChange:function(a){!function(a){e({type:"FILTER_CREATED",payload:a.target.value})}(a)},children:[Object(f.jsx)("option",{defaultValue:!0,value:"all",children:"Todos los Origenes"}),Object(f.jsx)("option",{value:"created",children:"BASE DE DATOS"}),Object(f.jsx)("option",{value:"inDB",children:"API \ud83d\udc36"})]})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Filtrar por Temperamento"}),Object(f.jsxs)("select",{onChange:function(e){return j(e)},children:[Object(f.jsx)("option",{value:"all",children:"Todos los Temparamentos"}),a.map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))]})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Filtrar por raza"}),Object(f.jsxs)("select",{onChange:function(e){return m(e)},children:[Object(f.jsx)("option",{value:"all",children:"Todas las razas"}),c.map((function(e){return e?Object(f.jsx)("option",{value:e,children:e},e):""}))]})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Filtrar por peso m\xe1ximo"}),Object(f.jsxs)("select",{onChange:function(a){return function(a){a.preventDefault(),e({type:"FILTER_BY_MAX_WEIGHT",payload:a.target.value})}(a)},children:[Object(f.jsx)("option",{value:"all",children:"Todos los pesos maximos"}),l.map((function(e){return e?Object(f.jsxs)("option",{value:e,children:[e," kg"]},e):""}))]})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Filtrar por peso m\xednimo"}),Object(f.jsxs)("select",{onChange:function(a){return function(a){a.preventDefault(),e({type:"FILTER_BY_MIN_WEIGHT",payload:a.target.value})}(a)},children:[Object(f.jsx)("option",{value:"all",children:"Todos los pesos minimos"}),i.map((function(e){return e?Object(f.jsxs)("option",{value:e,children:[e," kg"]},e):""}))]})]}),Object(f.jsxs)("div",{className:H.a.filterSection,children:[Object(f.jsx)("h5",{className:H.a.filterHeader,children:"Agregar Nueva Mascota"}),Object(f.jsx)("div",{className:H.a.addDog,children:Object(f.jsx)(g.b,{to:"/newDog/",className:H.a.tooltip,children:Object(f.jsx)("span",{className:H.a.agregardog,children:"Agregar"})})})]})]})})}function F(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.allDogs})),t=Object(n.useState)(1),c=Object(N.a)(t,2),r=c[0],i=c[1],o=Object(n.useState)(8),l=Object(N.a)(o,1)[0],j=r*l,d=j-l,m=a.slice(d,j);return Object(n.useEffect)((function(){e(I())}),[e]),Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)(R,{}),Object(f.jsxs)("div",{className:M.a.dogsArea,children:[Object(f.jsx)(S,{dogsPerPage:l,allDogs:a.length,pagination:function(e){i(e)},currentPage:r}),Object(f.jsx)("div",{className:M.a.pagination}),m.map((function(e){return Object(f.jsx)(E,{id:e.id,name:e.name,image:e.image,temperament:e.temperament,temperaments:e.temperaments},e.id)}))]})]})}var z=t(24),K=t.n(z),L=t(38),J=t.n(L);function Z(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],c=a[1],r=Object(s.b)();return Object(f.jsxs)("div",{className:J.a.searchBox,children:[Object(f.jsx)("input",{type:"text",placeholder:"Buscar",className:J.a.searchInput,value:t,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("button",{type:"submit",className:J.a.searchButton,onClick:function(e){if(e.preventDefault(),0===t.length)return alert("Please input a name to start the search");var a;r((a=t,function(){var e=Object(B.a)(Object(y.a)().mark((function e(t){var n,c;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://localhost:3001/dogs?name=".concat(a));case 2:return n=e.sent,c=n.data,e.abrupt("return",t({type:"GET_DOGS_BY_NAME",payload:c}));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())),c("")}})]})}function V(){return Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:K.a.nav,children:[Object(f.jsxs)("div",{className:K.a.TitleAndSearchBar,children:[Object(f.jsxs)("div",{className:K.a.logoAndTitle,children:[Object(f.jsx)(g.b,{to:"/home",children:Object(f.jsx)("img",{id:"logoHenry",src:_,alt:"icono alternativo",className:K.a.logo})}),Object(f.jsx)("div",{children:Object(f.jsx)("h1",{children:"API Dog's"})})]}),Object(f.jsx)("div",{children:Object(f.jsx)(Z,{})})]}),Object(f.jsx)("div",{className:K.a.aboutNavButton,children:Object(f.jsx)(g.b,{to:"/about",children:"Acerca de mi"})})]})})}var X=t(47),Q=t.n(X);function W(){return Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:Q.a.mainContainer,children:[Object(f.jsx)(V,{}),Object(f.jsx)(F,{})]})})}var U=t(8),q=t.n(U),$=t.p+"static/media/raza.da673bc3.svg",ee=t.p+"static/media/salud.5fc153ae.svg",ae=t.p+"static/media/peso.cdc3f2fa.svg",te=t.p+"static/media/altura.f0777d61.svg";function ne(e){var a=Object(s.b)();Object(n.useEffect)((function(){var t;return a((t=e.match.params.id,function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("http://localhost:3001/dogs/".concat(t));case 3:return n=e.sent,e.abrupt("return",a({type:"GET_DETAILS",payload:n.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}())),function(){return a(function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a({type:"DELETE_DETAILS"}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}}),[a,e.match.params.id]);var t=Object(s.c)((function(e){return e.details}));return Object(f.jsx)(n.Fragment,{children:t?Object(f.jsx)("div",{className:q.a.bodix,children:Object(f.jsxs)("div",{className:q.a.mainContainer,children:[Object(f.jsx)("h2",{className:q.a.mainTitle,children:t.name}),Object(f.jsx)("img",{src:t.image,alt:t.name,className:q.a.image}),Object(f.jsxs)("div",{className:q.a.detailsContainer,children:[t.breed_group?Object(f.jsxs)("div",{className:q.a.breed_group,children:[Object(f.jsx)("div",{className:q.a.imageSection,children:Object(f.jsx)("img",{src:$,alt:"a tiny svg dog",className:q.a.detailsSVG})}),Object(f.jsxs)("div",{className:q.a.infoSection,children:[Object(f.jsx)("h3",{children:"Razas: "}),Object(f.jsx)("p",{children:t.breed_group})]})]}):"",Object(f.jsxs)("div",{className:q.a.life_span,children:[Object(f.jsx)("div",{className:q.a.imageSection,children:Object(f.jsx)("img",{src:ee,alt:"a tiny svg dog",className:q.a.detailsSVG})}),Object(f.jsxs)("div",{className:q.a.infoSection,children:[Object(f.jsx)("h3",{children:"Esperanza de Vida: "}),Object(f.jsx)("p",{children:t.life_span})]})]}),Object(f.jsxs)("div",{className:q.a.weights,children:[Object(f.jsx)("div",{className:q.a.imageSection,children:Object(f.jsx)("img",{src:ae,alt:"a tiny svg dog",className:q.a.detailsSVG})}),Object(f.jsxs)("div",{className:q.a.infoSection,children:[Object(f.jsx)("h3",{children:"Peso: "}),Object(f.jsxs)("p",{children:["Min: ",t.weight_min]}),Object(f.jsxs)("p",{children:["Max: ",t.weight_max]})]})]}),Object(f.jsxs)("div",{className:q.a.heights,children:[Object(f.jsx)("div",{className:q.a.imageSection,children:Object(f.jsx)("img",{src:te,alt:"a tiny svg bone",className:q.a.detailsSVG})}),Object(f.jsxs)("div",{className:q.a.infoSection,children:[Object(f.jsx)("h3",{children:"Altura: "}),Object(f.jsxs)("p",{children:["Min: ",t.height_min]}),Object(f.jsxs)("p",{children:["Max: ",t.height_max]})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:q.a.temperament,children:Object(f.jsx)("div",{className:q.a.infoSection,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Temperamentos: "}),Object(f.jsx)("p",{children:t.createdInDB?t.temperaments.map((function(e){return e.name})).join(", "):t.temperament})]})})})]}),Object(f.jsx)(g.b,{to:"/home",children:Object(f.jsx)("button",{className:q.a.button,children:"Regresar"})})]})},t.id):Object(f.jsx)("h2",{children:"Loading..."})})}var ce=t(27),re=t(3),ie=t.n(re);function se(){var e=Object(s.b)(),a=Object(p.e)(),t=Object(s.c)((function(e){return e.temperaments})).sort((function(e,a){return e<a?-1:1})),c=Object(n.useState)({}),r=Object(N.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)({name:"",image:"",height_min:"",height_max:"",weight_min:"",weight_max:"",life_span:"",temperament:[]}),j=Object(N.a)(l,2),b=j[0],u=j[1];function h(e){u(Object(m.a)(Object(m.a)({},b),{},Object(ce.a)({},e.target.name,e.target.value))),o(function(e){var a={};return e.name?a.name="":a.name="You must type a name",e.weight_min?/\d{1,2}/gi.test(e.weight_min)?a.weight_min="":a.weight_min="Weight must have min values. Example: '25'":a.weight_min="Type a valid minimal weight number",e.weight_max?/\d{1,2}/gi.test(e.weight_max)?a.weight_max="":a.weight_max="Weight must have max values. Example: '25'":a.weight_max="Type a valid maxim weight number",e.height_min?/\d{1,2}/gi.test(e.height_min)?a.height_min="":a.height_min="Height must have min values. Example: '25'":a.height_min="Type a valid minimal height number",e.height_max?/\d{1,2}/gi.test(e.height_max)?a.height_max="":a.height_max="Height must have max values. Example: '25'":a.height_max="Type a valid maxim height number",a}(Object(m.a)(Object(m.a)({},b),{},Object(ce.a)({},e.target.name,e.target.value))))}function O(t){if(t.preventDefault(),i.name||i.image||i.weight_min||i.height_min||i.weight_max||i.height_max)return alert("Something went wrong. Please try again.");var n;alert("Your dog has been created successfully"),e((n=b,function(){var e=Object(B.a)(Object(y.a)().mark((function e(a){var t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("http://localhost:3001/dogs",n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())),u({name:"",image:"",height_min:"",weight_min:"",height_max:"",weight_max:"",life_span:"",temperament:[]}),a.push("/home")}return Object(n.useEffect)((function(){e(G())}),[e]),Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:ie.a.mainContainerCreation,children:[Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"Crear Nuevo Dog"})}),Object(f.jsx)("div",{className:ie.a.formContainer,children:Object(f.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(f.jsx)("div",{className:ie.a.Section,children:Object(f.jsxs)("div",{className:ie.a.form__group,children:[Object(f.jsx)("input",{type:"text",value:b.name,name:"name",className:ie.a.form__field,placeholder:"Grand Canadian Bulldog",onChange:function(e){return h(e)},required:!0}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:ie.a.error,children:i.name})}),Object(f.jsx)("label",{className:ie.a.form__label,children:"Nombre"})]})}),Object(f.jsx)("div",{className:ie.a.Section,children:Object(f.jsxs)("div",{className:ie.a.form__group,children:[Object(f.jsx)("input",{type:"url",value:b.image,className:ie.a.form__field,name:"image",placeholder:"http://miimgenenlaweb.com",onChange:function(e){return h(e)}}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:ie.a.error,children:i.image})}),Object(f.jsx)("label",{className:ie.a.form__label,children:"URL de imagen"})]})}),Object(f.jsxs)("div",{className:ie.a.Section,children:[Object(f.jsx)("h4",{children:"Altura"}),Object(f.jsxs)("div",{className:ie.a.form__group,children:[Object(f.jsx)("input",{type:"number",value:b.height_min,className:ie.a.form__field,name:"height_min",placeholder:"20",onChange:function(e){return h(e)},required:!0}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:ie.a.error,children:i.height_min})}),Object(f.jsx)("label",{className:ie.a.form__label,children:"Min 20"})]}),Object(f.jsxs)("div",{className:ie.a.form__group,children:[Object(f.jsx)("input",{type:"number",value:b.height_max,name:"height_max",className:ie.a.form__field,placeholder:"50",onChange:function(e){return h(e)},required:!0}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:ie.a.error,children:i.height_max})}),Object(f.jsx)("label",{className:ie.a.form__label,children:"Max 50"})]})]}),Object(f.jsxs)("div",{className:ie.a.Section,children:[Object(f.jsx)("h4",{children:"Peso"}),Object(f.jsxs)("div",{className:ie.a.form__group,children:[Object(f.jsx)("input",{type:"number",value:b.weight_min,className:ie.a.form__field,name:"weight_min",placeholder:"15",onChange:function(e){return h(e)},required:!0}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:ie.a.error,children:i.weight_min})}),Object(f.jsx)("label",{className:ie.a.form__label,children:"Min 15"})]}),Object(f.jsxs)("div",{className:ie.a.form__group,children:[Object(f.jsx)("input",{type:"number",value:b.weight_max,className:ie.a.form__field,name:"weight_max",placeholder:"32",onChange:function(e){return h(e)},required:!0}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:ie.a.error,children:i.weight_max})}),Object(f.jsx)("label",{className:ie.a.form__label,children:"Max 32"})]})]}),Object(f.jsx)("div",{className:ie.a.Section,children:Object(f.jsxs)("div",{className:ie.a.form__group,children:[Object(f.jsx)("input",{type:"text",value:b.life_span,className:ie.a.form__field,name:"life_span",placeholder:"12 - 15 years",onChange:function(e){return h(e)}}),Object(f.jsx)("label",{className:ie.a.form__label,children:"Esperanza de Vida"})]})}),Object(f.jsxs)("div",{className:ie.a.Section,children:[Object(f.jsx)("label",{children:"Temperamentos"}),Object(f.jsx)("select",{onChange:function(e){return function(e){u(Object(m.a)(Object(m.a)({},b),{},{temperament:[].concat(Object(d.a)(b.temperament),[e.target.value])}))}(e)},className:ie.a.styled_select,children:t.map((function(e){return Object(f.jsx)("option",{name:e,children:e},e)}))}),Object(f.jsxs)("div",{className:ie.a.sidebar_box,children:[Object(f.jsx)("h4",{children:"Seleccionaste los temperamentos:"}),b.temperament.map((function(e){return Object(f.jsx)("div",{onClick:function(){return function(e){u(Object(m.a)(Object(m.a)({},b),{},{temperament:b.temperament.filter((function(a){return a!==e}))}))}(e)},className:ie.a.selectedItems,children:Object(f.jsx)("p",{children:e})},e)}))]})]}),Object(f.jsxs)("div",{className:ie.a.buttonSection,children:[Object(f.jsx)(g.b,{to:"/home",children:Object(f.jsx)("button",{className:ie.a.buttonCancel,children:"Cancelar"})}),Object(f.jsx)("button",{className:ie.a.button,type:"submit",children:"Guardar"})]})]})})]})})}var oe=t(9),le=t.n(oe),je=t.p+"static/media/eber.738d2f65.jpg",de=t.p+"static/media/Ljavascript.38a3a603.png",me=t.p+"static/media/Lcss.78276823.png",be=t.p+"static/media/Lhtml.c4d9c8dc.png",ue=t.p+"static/media/Ljava.7688e421.png",he=t.p+"static/media/Ljquery.dad493ca.png",ge=t.p+"static/media/Lreact.bf700b97.png",pe=t.p+"static/media/Lredux.35fbb2f2.png",Oe=t.p+"static/media/postgres.e186ea25.png",xe=t.p+"static/media/sequelize-logo.9b4e349b.png",_e=t.p+"static/media/nodejs.b4dc7c4f.png",fe="data:image/png;base64,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",ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIUlEQVR4nO2dz28bRRTHh1TtBYkjB4S4ckb8E3ACAaUSokII6IHEqeM22Q1CVFygBW6UCxJqRd0ARUICVaKXxk7rxqmTJiG7jhPyg0pAm6jQ1k2i/LL9RW/GQFU5ya7j3Znuvo/0JMvr3Xjed+d9Z2bXWSEYhmEYhmEYhmEYhmEYxg/H3H3Cdg4Iy+kTtjslbHdZ2C4iFsuybdTGnolXZZuNwHJeFrY7Z0CCEHLMil7nJX2J339uj7CdzwxIBLSG5X4qjqEtfAE4+bhPhBM6yo7+s882KHqLL4ZouO6s9gbbhoXlzodjzDTa0d1Y29Qo7g9BAPcb/Q11zQzLSYcggPOr9obaxsZU8AJYzpIBDYWRQbkJnKa+2ARE9yjEkRGII8MQqYJ63T2qtulOXCvDOAF6xiFSVyE6cxAdGYj2iyrodWdObaPP6E5cJAWgxHYN4ZGOfrx5ZhL5+TKW1ytYWa+gcL2Mt9MluY0+ExkRjBGASkvqqkxwunATW5Eu3FQiUE+IQjkyRgCq7505eebvxMHTRVWOusf0JzAyApDJdmQw9Ft5RwEuzdyB6MiqfXQnMDoCDEuzpXq/E/dWK8qYaR/dCYyaAGS6LIDGEjQ4f3dHAXJzd9WwlEuQHhN+/T8THtVfQqI4DD1bWNgy+afyN3gYGogAsheMyUlWW0dGTrpo8kWmvLRWkWXn4OkiT8QC6wH3iyCXIi4/sBSR5aWIptjtYpxciBv+fzHOdvTX7Uh6ACW6mbBbtL8UfQzi6LUHVmHr4tP7tL3Vyx9GCfDuRX+RKux+f0ooJZfK3uEcRCIL0d6vyh59hl5TKaT3aTstBJIorVoMNE0Ar4gtBPC9v/SbS3gsNYB3zpbw7cgCphZWcHtlE9VaDYv31lG8sYzvRxdxqK+EJ9+jZfIsRDKvesZue0SsBegawp5EBkd/mEF5ddPTfhuVGr7M/Ymn3r8ihZN/t+cXFkA0IcCjXVlcmPwbzUCCPf/FuOoNu1kaj2sPaGvvx8/Fv7AbKtUa3vh6EiIxUF8YbGKEFlcBen+cRStY26zimY8LEIevKDNnAeC5lrcKMu29nU1epYtrD2g1r51y1TDV7wIhC9Aaxv9YUnMGvxeJWADI5H104ToS56bxwfl5/DRxC6sbVd8iPP1hXk3U/JShOAuwtllV1xbozKXFPyoh8n6krBzn+x2ivpUuqWP4mSXHVYBaDTjwlauGkGSeVLspcbTeQzPcZF4a63nH+1CVrlXI4/kZDcVVgO+uLdYvaw43LhkkRDKPx63LnmfJdEeHnJixADvz7PECRHJw+3JBiUwM4PPs7x6OCEwvrtSN2MftMnHtAfs6M6r0bDd7pTWe5CCeOznu6Zi3ljb83y4TRwFqtQb7NwxHjmqe6M15Ou5mtebxuCwAPCcqVZC9pbXCxlwAwo8Are9ZLABYAO4B4BKU4hLEHhA4bMJgE24AmzCbMNiEU2zCbMKBwyYMNuEGsAmzCYNNOMUmzCYcOGzCYBNuAJtwBE2YeOgvyIT+EyU74O/1UAmg80d6dkDfS7sA/E/7sGXyLacchgDTns+GuIXllsIQoM+IxtpGxpngBaCHF+hvKIyMXveV4AU4NLJXWM6M9sbaxsVceE/VoCdH6G8wjAqr+IIIFXpyhO5G26aEc1yEDj22w3Y/0d94V/OZ757Q8wiTf6EnR8TREyxnJvyys50x08ML6P/n01g4ipM1y1mqty0tRzvUZoZhGIZhGIZhGIZhGIYR3vkHXi1Jisqz6ZMAAAAASUVORK5CYII=";function Ne(){return Object(f.jsx)("div",{children:Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:le.a.mainConteinerAbout,children:[Object(f.jsx)("div",{className:le.a.home,children:Object(f.jsx)(g.b,{to:"/home",children:"Regresar"})}),Object(f.jsx)("div",{className:le.a.imageDiv,children:Object(f.jsx)("img",{src:je,alt:"Eberson Palomino"})}),Object(f.jsxs)("h3",{className:le.a.nombredev,children:[Object(f.jsxs)("div",{className:le.a.dev,children:["Developed <",Object(f.jsx)("i",{className:le.a.diag,children:"/"}),">"]}),Object(f.jsx)("br",{}),"Eberson Palomino Aguilar"]}),Object(f.jsx)("h4",{className:le.a.titlestack,children:"Full Stack Developer"}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{className:le.a.tituloconocimientos,children:[" ","Mis conocimientos"," "]}),Object(f.jsx)("div",{className:le.a.boxlenguajes,children:Object(f.jsxs)("div",{className:le.a.scrollbarh,children:[Object(f.jsx)("img",{className:le.a.lenguajes,src:be,alt:"html"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:me,alt:"css"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:de,alt:"javascript"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:ue,alt:"java"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:he,alt:"jquery"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:ge,alt:"reactredux"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:pe,alt:"redux"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:Oe,alt:"postgres"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:xe,alt:"sequelize"}),Object(f.jsx)("img",{className:le.a.lenguajes,src:_e,alt:"nodejs"})]})}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:le.a.links,children:[Object(f.jsx)("h3",{children:"Mi Contacto:"}),Object(f.jsxs)("div",{className:le.a.linksItems,children:[Object(f.jsx)("a",{href:"https://github.com/lordeber15",target:"_blank",rel:"noreferrer",children:Object(f.jsxs)("p",{children:[Object(f.jsx)("img",{src:fe,alt:"Github"}),Object(f.jsx)("a",{href:"https://github.com/lordeber15",target:"_blank",rel:"noreferrer",children:"GitHub"})]})}),Object(f.jsx)("a",{href:"https://www.linkedin.com/in/eberpalomino/",target:"_blank",rel:"noreferrer",children:Object(f.jsxs)("p",{children:[Object(f.jsx)("img",{src:ve,alt:"LinkedIn"}),Object(f.jsx)("a",{href:"https://www.linkedin.com/in/eberpalomino/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})]})})]})]})]})})})}var De=function(){return Object(f.jsx)(g.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(p.a,{exact:!0,path:"/",component:v}),Object(f.jsx)(p.a,{path:"/home",component:W}),Object(f.jsx)(p.a,{path:"/dogs/:id",component:ne}),Object(f.jsx)(p.a,{path:"/newDog/",component:se}),Object(f.jsx)(p.a,{path:"/about",component:Ne})]})})},Ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(s.a,{store:h,children:Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(De,{})})}),document.getElementById("root")),Ae()},7:function(e,a,t){e.exports={side:"SideBar_side__ABJkH",sideBarHeader:"SideBar_sideBarHeader__3Y520",header:"SideBar_header__2cT8l",refresh:"SideBar_refresh__10a-T",tooltip:"SideBar_tooltip__3aSoL",filterSection:"SideBar_filterSection__3_MOB",filterHeader:"SideBar_filterHeader__1C-L8",addDog:"SideBar_addDog__3-FAt",loop:"SideBar_loop__2PUvR"}},8:function(e,a,t){e.exports={bodix:"DogDetail_bodix__1GjOq",mainContainer:"DogDetail_mainContainer__27lT9",mainTitle:"DogDetail_mainTitle__TsfyR",image:"DogDetail_image__2g2iJ",detailsContainer:"DogDetail_detailsContainer__2A5K0",breed_group:"DogDetail_breed_group__281Nz",temperament:"DogDetail_temperament__38E33",life_span:"DogDetail_life_span__13Kn6",weights:"DogDetail_weights__1MRd6",heights:"DogDetail_heights__3HI_p",detailsSVG:"DogDetail_detailsSVG__1Mj1F",button:"DogDetail_button__1sta5",imageSection:"DogDetail_imageSection__3DrTp",infoSection:"DogDetail_infoSection__1611Q",xBone:"DogDetail_xBone__2bO2q"}},9:function(e,a,t){e.exports={mainConteinerAbout:"About_mainConteinerAbout__1E8g0",imageDiv:"About_imageDiv__2Yo8j",linksItems:"About_linksItems__33az-",links:"About_links__797_D",diag:"About_diag__3kt09",boxlenguajes:"About_boxlenguajes__2wgF4",scrollbarh:"About_scrollbarh__2YHGE",lenguajes:"About_lenguajes__252X6",tituloconocimientos:"About_tituloconocimientos__3MCX0",porcentaje:"About_porcentaje__yo9mO",barraprogress:"About_barraprogress__2dMBl",dev:"About_dev__3ujWR",nombredev:"About_nombredev__1mHUT",titlestack:"About_titlestack__225Gs",navbar:"About_navbar__3Lnfh",home:"About_home__3lyiP"}}},[[66,1,2]]]);
//# sourceMappingURL=main.47230bd0.chunk.js.map