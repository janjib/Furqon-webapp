(this["webpackJsonpquran-app"]=this["webpackJsonpquran-app"]||[]).push([[0],{91:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(23),s=a.n(n),r=a(12),i=a(6),l=a(24),j=a.n(l),o=a(25),b=a(15),u=a(95),m=a(99),d=a(96),h=a(98),x=a(1),O=function(e){var t=e.text,a=e.translation,c=e.ayahNo;return Object(x.jsxs)("div",{children:[Object(x.jsx)(h.a,{className:"p-2",children:Object(x.jsxs)(h.a.Body,{children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(x.jsxs)(h.a.Title,{children:[c,"."]}),Object(x.jsx)(h.a.Title,{className:"arabic-ayah m-2 text-center",children:t.arab})]}),Object(x.jsx)(h.a.Text,{className:"m-2 ayah-meaning",children:a.en})]})},c),Object(x.jsx)("hr",{})]})},f=a(27),p=a.n(f),g=function(){return Object(x.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center m-5",children:[Object(x.jsx)("h1",{className:"quote-loading",children:"\u0627\u0644\u0635\u0628\u0631 \u0645\u0646 \u0627\u0644\u0625\u064a\u0645\u0627\u0646"}),Object(x.jsx)("p",{className:"text-loading",children:"-Patience is Half of Iman-"})]})},N=function(){var e=Object(i.h)(),t=e.number,a=e.surahName,n=e.revelation,s=Object(i.f)(),r=Object(c.useState)([]),l=Object(b.a)(r,2),h=l[0],f=l[1],N=Object(c.useState)([]),v=Object(b.a)(N,2),y=v[0],w=v[1],k=Object(c.useState)([]),S=Object(b.a)(k,2),q=S[0],F=S[1],A=Object(c.useState)(!0),C=Object(b.a)(A,2),T=C[0],G=C[1],E=function(){var e=Object(o.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.quran.sutanlab.id/surah/".concat(t)).catch((function(e){return console.log(e)}));case 2:return a=e.sent,console.log("ayahList",a.data.data),e.next=6,f(a.data.data);case 6:w(a.data.data.verses),F(a.data.data.tafsir.id),console.log(a.data.data.verses),G(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){E()}),[]),Object(x.jsx)(u.a,{children:Object(x.jsxs)("div",{className:"margin-mega",children:[Object(x.jsxs)("button",{className:"mx-auto d-block third-main-button mt-5 send-upward",onClick:function(){return s.push("/Second-page")},children:[Object(x.jsx)("i",{className:"fas fa-arrow-left m-1"}),"Go back"]}),Object(x.jsxs)("h1",{className:"text-center third-page-title mb-2 mt-4",children:["Surah ",a]}),Object(x.jsxs)("p",{className:"mt-3 mb-5 text-center surah-desc",children:[h.numberOfVerses," Ayah | ",n," "]}),Object(x.jsxs)(m.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example",children:[Object(x.jsx)(d.a,{eventKey:"home",title:"Tafsir",children:Object(x.jsx)("h3",{className:"my-5 tafsir-surah mx-1",children:q})}),Object(x.jsxs)(d.a,{eventKey:"profile",title:"Ayah",className:"mt-3 mb-5",children:[Object(x.jsx)("h1",{className:"basmalah text-center my-5",children:"\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0631\u062d\u064a\u0645"}),Object(x.jsx)("h1",{className:"basmalah-meaning text-center mb-5",children:"In the name of God, most Gracious, most Compassionate"}),Object(x.jsx)("hr",{}),T?Object(x.jsx)(g,{}):y.map((function(e){var t=e.text,a=e.translation,c=e.number;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(O,{text:t,translation:a,ayahNo:c.inSurah},c.inSurah)})}))]})]})]})})},v=(a(90),a(97)),y=a(56),w=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{fluid:!0,children:Object(x.jsxs)(v.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",fixed:"top",children:[Object(x.jsx)(v.a.Brand,{href:"/Furqon-webapp",className:"brand-title send-upward",children:"Furq\xf6n"}),Object(x.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsxs)(v.a.Collapse,{id:"responsive-navbar-nav",children:[Object(x.jsx)(y.a,{className:"mr-auto send-backward"}),Object(x.jsx)(y.a,{children:Object(x.jsxs)(y.a.Link,{eventKey:2,href:"/About-page",className:"nav-link send-upward",children:[Object(x.jsx)("i",{className:"far fa-address-card m-1"}),"About"]})})]})]})})})},k=(a(91),a(54)),S=a.n(k),q=function(){var e=Object(i.f)();return Object(x.jsx)("div",{children:Object(x.jsx)(u.a,{children:Object(x.jsxs)("div",{className:"main-div my-5",children:[Object(x.jsx)("h1",{className:"hero-title",children:Object(x.jsx)(S.a,{onInit:function(e){e.typeString("\u0627\u0644\u0641\u0631\u0642\u0627\u0646").pauseFor(2500).deleteAll().typeString("Furq\xf6n").pauseFor(2500).deleteAll().typeString("\u0627\u0644\u0641\u0631\u0642\u0627\u0646").pauseFor(2500).start()}})}),Object(x.jsx)("div",{className:"div-title mt-5 mb-3",children:Object(x.jsx)("h1",{className:"main-title text-center",children:" Read Al-Quran anytime,anywhere"})}),Object(x.jsxs)("button",{className:"mx-auto -d-block main-button",onClick:function(){return e.push("/Second-page")},children:["Lets Go ",Object(x.jsx)("i",{className:"fas fa-arrow-right m-1"})]})]})})})},F=Object(c.createContext)(),A=function(e){var t=Object(c.useState)([]),a=Object(b.a)(t,2),n=a[0],s=a[1],r=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://api.quran.sutanlab.id/surah");case 3:t=e.sent,s(t.data.data),console.log(t.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0,"There is an error !");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(x.jsx)(F.Provider,{value:[n,s],children:e.children})},C=a(55),T=a.n(C),G=(a(92),function(){var e=Object(c.useContext)(F),t=Object(b.a)(e,1)[0],a=Object(i.f)();return Object(c.useEffect)((function(){T.a.init({duration:1e3})}),[]),Object(x.jsx)(x.Fragment,{children:t.map((function(e){var t=e.name,c=e.numberOfVerses,n=e.number,s=e.revelation;return Object(x.jsx)(h.a,{body:!0,"data-aos":"zoom-in-up",className:"list-surah-container mx-auto my-3 send-upward",onClick:function(){a.push("/Third-page/".concat(n,"/").concat(t.transliteration.en,"/").concat(s.id))},children:Object(x.jsxs)("div",{className:"content-list d-flex  justify-content-between",children:[Object(x.jsxs)("p",{className:" surah-name my-auto mx-1",children:[n,". Surah  ",t.transliteration.en]}),Object(x.jsx)("p",{className:"surah-name-arabic my-auto py-1 mx-1",children:t.long}),Object(x.jsxs)("p",{className:" number-verse my-auto mx-1",children:[c," Verses"]})]})},n)}))})}),E=function(){var e=Object(i.f)();return Object(x.jsx)(u.a,{children:Object(x.jsxs)("div",{className:"margin-mega",children:[Object(x.jsxs)("button",{className:"mx-auto d-block main-button mt-5 send-upward",onClick:function(){return e.push("/")},children:[Object(x.jsx)("i",{className:"fas fa-arrow-left m-1"}),"Go back"]}),Object(x.jsx)("h1",{className:"text-center second-page-title my-5",children:"Pick A Surah"}),Object(x.jsx)(G,{})]})})},I=function(){var e=Object(i.f)();return Object(x.jsx)(u.a,{children:Object(x.jsxs)("div",{className:"margin-mega ",children:[Object(x.jsxs)("button",{className:"mx-auto d-block about-main-button mt-5 send-upward",onClick:function(){return e.push("/Furqon-webapp")},children:[Object(x.jsx)("i",{className:"fas fa-arrow-left m-3"}),"Go back"]}),Object(x.jsx)("h1",{className:"about-title my-5 text-center",children:"About"}),Object(x.jsx)("img",{className:"img-fluid img-about d-block mx-auto",src:"my_picture.jpeg",alt:"me doing archery"}),Object(x.jsxs)("p",{className:"about-detail my-5 text-center",children:["My name is Rujhan and I am from Malaysia.Still studying.Nice to meet you and thanks for using ",Object(x.jsx)("span",{className:"furqan-about",children:"Furq\xf6n"})]}),Object(x.jsx)("p",{className:"about-detail my-3 text-center",children:"Follow me :"}),Object(x.jsx)("div",{className:" d-flex justify-content-center",children:Object(x.jsxs)("ul",{className:" d-flex justify-content-center list-unstyled",children:[Object(x.jsx)("a",{href:"https://www.instagram.com/harjan_04/",rel:"noreferrer",target:"_blank",children:Object(x.jsx)("li",{className:"m-2 socmed-icon ",children:Object(x.jsx)("i",{className:"fab fa-instagram"})})}),Object(x.jsx)("a",{href:"https://t.me/RujhanNajib",rel:"noreferrer",target:"_blank",children:Object(x.jsx)("li",{className:"m-2 socmed-icon",children:Object(x.jsx)("i",{className:"fab fa-telegram-plane"})})}),Object(x.jsx)("a",{href:"https://github.com/janjib",rel:"noreferrer",target:"_blank",children:Object(x.jsx)("li",{className:"m-2 socmed-icon",children:Object(x.jsx)("i",{className:"fab fa-github"})})})]})})]})})};function _(){var e=Object(i.g)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var K=function(){var e=Object(i.f)();return Object(x.jsx)(u.a,{children:Object(x.jsxs)("div",{className:"error-page d-flex justify-content-center flex-column align-items-center margin-mega",children:[Object(x.jsxs)("h1",{className:"error-title",children:["4",Object(x.jsx)("i",{className:"fas fa-angry emoji-bg"}),"4"]}),Object(x.jsx)("p",{className:"error-text",children:"Wrong page,sorry "}),Object(x.jsxs)("button",{className:"mx-auto d-block third-main-button mt-5 ",onClick:function(){return e.push("/Furqon-webapp")},children:[Object(x.jsx)("i",{className:"fas fa-arrow-left m-1"}),"Go back"]})]})})};var B=function(){return Object(x.jsx)(A,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(w,{}),Object(x.jsxs)(r.a,{children:[Object(x.jsx)(_,{}),Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{path:"/Furqon-webapp",exact:!0,component:q}),Object(x.jsx)(i.a,{path:"/Second-page",exact:!0,component:E}),Object(x.jsx)(i.a,{path:"/Third-page/:number/:surahName/:revelation",exact:!0,component:N}),Object(x.jsx)(i.a,{path:"/About-page",exact:!0,component:I}),Object(x.jsx)(i.a,{path:"*",component:K})]})]})]})})};s.a.render(Object(x.jsx)(r.b,{children:Object(x.jsx)(B,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.aef29dfe.chunk.js.map