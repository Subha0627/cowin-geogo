(this.webpackJsonpconcepts=this.webpackJsonpconcepts||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(13),r=c.n(s),i=(c(42),c(43),c(2)),l=c(0),o=a.a.createContext(),d=function(e){var t=e.children,c=Object(n.useState)("light"),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(l.jsx)(o.Provider,{value:{mode:s,setTheme:function(){return r("dark"===s?"light":"dark")}},children:t})},j=(o.Consumer,o),u=c(36),b=c.n(u);c(46);var h=function(){var e=Object(n.useContext)(j),t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(l.jsxs)("form",{className:"darkThemeSelector-form",children:[Object(l.jsx)("label",{htmlFor:"themeSelector",children:"Theme"}),Object(l.jsx)(b.a,{onChange:function(){e.setTheme(a),s(!a)},onColor:"#ffa500",offColor:"#000",checked:a,className:"darkThemeSelector-switch"})]})};var O=function(){var e=Object(n.useContext)(j);return Object(l.jsx)("header",{className:e.mode,children:Object(l.jsx)(h,{})})};var v=function(){return Object(l.jsx)("footer",{})},f=Object.freeze({searchByMap:1,searchByPin:2,searchByDistrict:3}),x=[{id:"age18",value:"Age 18+"},{id:"age45",value:"Age 45+"},{id:"covishield",value:"Covishield"},{id:"covaxin",value:"Covaxin"},{id:"sputnik",value:"Sputnik V"},{id:"free",value:"Free"},{id:"paid",value:"Paid"}],p=28,m=7,D="https://cdn-api.co-vin.in/api",N="/v2/admin/location/states",g="/v2/admin/location/districts",y="/v2/appointment/sessions/public/calendarByPin",S="/v2/appointment/sessions/public/calendarByDistrict";c(47);var C=function(e){var t=e.tabClickHandler,c=Object(n.useState)(f.searchByPin),a=Object(i.a)(c,2),s=a[0],r=a[1],o=function(e){r(e),t(e)},d=Object(n.useContext)(j);return Object(l.jsx)("div",{className:"".concat(d.mode," searchTabs"),children:Object(l.jsxs)("div",{className:"searchButtons",children:[Object(l.jsx)("button",{className:s===f.searchByPin?"searchButtons-active button":"button",onClick:function(){return o(f.searchByPin)},children:"Search by PIN"}),Object(l.jsx)("button",{className:s===f.searchByDistrict?"searchButtons-active button":"button",onClick:function(){return o(f.searchByDistrict)},children:"Search by District"}),Object(l.jsx)("button",{className:s===f.searchByMap?"searchButtons-active button":"button",onClick:function(){return o(f.searchByMap)},children:"Search by MAP"})]})})};c(48);var w=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"searchByMap",children:Object(l.jsx)("span",{children:"Coming Soon..."})})})},_=c(3),E=c(5),k=c.n(E),I=c(11);c(52);var M=function(e){return Object(l.jsx)("div",{className:"searchFilter",children:Object(l.jsx)("form",{children:x.map((function(t){return Object(l.jsxs)("div",{className:"searchFilter-item",children:[Object(l.jsx)("input",{type:"checkbox",name:t.id,id:t.id,onClick:function(c){return function(t,c){e.onSelectingFilter(c,t.target.checked)}(c,t.id)}}),Object(l.jsx)("label",{htmlFor:t.id,children:t.value})]},t.id)}))})})},T=c(10),F=function(e){for(var t=[],c=0;c<e;){var n=new Date;n.setDate(n.getDate()+c),t.push(n),c++}return t};var Y=function(e){return Object(l.jsx)("div",{className:"calenderDateItem",children:k()(e.day).format("DD MMMM YY")})},B=(c(53),p),P=m,A=F(B);var R=function(e){var t=e.changeDateHandler,c=Math.ceil(B/P),a=Object(n.useState)(0),s=Object(i.a)(a,2),r=s[0],o=s[1],d=Object(_.c)((function(e){return e.search.searchDate}));Object(n.useEffect)((function(){var e=k()(A[r*P]).format("DD-MM-YYYY");t(e)}),[r,t]),Object(n.useEffect)((function(){d===k()(A[0]).format("DD-MM-YYYY")&&o(0)}),[d]);var j=A.slice(P*r,P*(r+1)),u="calenderSliderDesktop-next-btn";u=r===c-1?"".concat(u," --disable"):u;var b="calenderSliderDesktop-prev-btn";return b=0===r?"".concat(b," --disable"):b,Object(l.jsx)("div",{className:"calenderSliderDesktop",children:Object(l.jsxs)("div",{className:"calenderSliderDesktop-items-container",children:[Object(l.jsx)("div",{className:"calenderSliderDesktop-prev",children:Object(l.jsx)("button",{className:b,onClick:function(){o((function(e){return e-1}))},disabled:0===r,children:Object(l.jsx)(T.b,{color:"#ffffff",size:"35"})})}),Object(l.jsx)("div",{className:"calenderSliderDesktop-datesList",children:j.map((function(e){return Object(l.jsx)(Y,{day:e},e)}))}),Object(l.jsx)("div",{className:"calenderSliderDesktop-next",children:Object(l.jsx)("button",{className:u,onClick:function(){o((function(e){return e+1}))},disabled:r===c-1,children:Object(l.jsx)(T.c,{color:"#ffffff",size:"35"})})})]})})};var U=function(e){var t=e.day,c=e.changeDateHandler,a=k()(t).format("DD MMMM"),s=k()(t).format("DD-MM-YYYY"),r=Object(_.c)((function(e){return e.search.searchDate})),i=Object(n.useRef)(null);Object(n.useEffect)((function(){i.current&&r===k()(new Date).format("DD-MM-YYYY")&&i.current.scrollIntoView({behavior:"smooth"})}),[r]);var o="calenderSliderMobile-button";return o=r===s?"".concat(o," --active"):"".concat(o),Object(l.jsx)("div",{className:"calenderSliderMobile-button-wrapper",children:Object(l.jsx)("button",{className:o,onClick:function(){return c(s)},ref:r===s?i:null,children:a})})},H=(c(54),F(p));var L=function(e){var t=e.changeDateHandler;return Object(l.jsx)("div",{className:"calenderSliderMobile",children:H.map((function(e){return Object(l.jsx)(U,{day:e,changeDateHandler:t},k()(e).format("DD MMMM YY"))}))})},V="ADD_SEARCH_DATE",z=function(e){return{type:V,payload:e}};c(55);var X=function(){var e=Object(_.b)(),t=function(t){e(z(t))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(R,{changeDateHandler:t}),Object(l.jsx)(L,{changeDateHandler:t})]})},J=c(4),Q=c.n(J),q=c(9),K=c(6),G=c(23),W=c.n(G),Z=(c(67),function(e){var t=e.slotInfo,c=t.dose1,n=t.availableDose,a=t.dose2,s=t.vaccineName,r=t.ageCategory,i=t.date,o=t.slots;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"slotDetail",children:[Object(l.jsx)("h3",{children:"Slot Detail"}),Object(l.jsxs)("div",{className:"slotDetail-row",children:[Object(l.jsx)("div",{className:"slotDetail-row-heading",children:Object(l.jsx)("span",{children:"Available Doses"})}),Object(l.jsx)("div",{className:"slotDetail-row-data",children:Object(l.jsx)("span",{children:n})})]}),Object(l.jsxs)("div",{className:"slotDetail-row",children:[Object(l.jsx)("div",{className:"slotDetail-row-heading",children:Object(l.jsx)("span",{children:"Available Dose 1"})}),Object(l.jsx)("div",{className:"slotDetail-row-data",children:Object(l.jsx)("span",{children:c})})]}),Object(l.jsxs)("div",{className:"slotDetail-row",children:[Object(l.jsx)("div",{className:"slotDetail-row-heading",children:Object(l.jsx)("span",{children:"Available Dose 2 "})}),Object(l.jsx)("div",{className:"slotDetail-row-data",children:Object(l.jsx)("span",{children:a})})]}),Object(l.jsxs)("div",{className:"slotDetail-row",children:[Object(l.jsx)("div",{className:"slotDetail-row-heading",children:Object(l.jsx)("span",{children:"Vaccine"})}),Object(l.jsx)("div",{className:"slotDetail-row-data",children:Object(l.jsx)("span",{children:s})})]}),Object(l.jsxs)("div",{className:"slotDetail-row",children:[Object(l.jsx)("div",{className:"slotDetail-row-heading",children:Object(l.jsx)("span",{children:"Age Category"})}),Object(l.jsx)("div",{className:"slotDetail-row-data",children:Object(l.jsxs)("span",{children:[r,"+"]})})]}),Object(l.jsxs)("div",{className:"slotDetail-row",children:[Object(l.jsx)("div",{className:"slotDetail-row-heading",children:Object(l.jsx)("span",{children:"Date"})}),Object(l.jsx)("div",{className:"slotDetail-row-data",children:Object(l.jsx)("span",{children:i})})]}),o.length>0&&Object(l.jsxs)("div",{className:"slotDetail-row",children:[Object(l.jsx)("div",{className:"slotDetail-row-heading",children:Object(l.jsx)("span",{children:"Slotes"})}),Object(l.jsx)("div",{className:"slotDetail-row-data slot-timing",children:o.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:e})},e)}))})]})]})})});c(68);var $=function(e){var t=e.dose1,c=e.availableDose,a=e.dose2,s=e.vaccineName,r=e.ageCategory,o=Object(n.useState)(!1),d=Object(i.a)(o,2),j=d[0],u=d[1];Object(n.useEffect)((function(){W.a.setAppElement("body")}),[]);var b=function(){u(!1)};return Object(l.jsxs)("div",{className:"slotUI",children:[c>0&&Object(l.jsxs)("div",{className:"slotUI-availableDoses hand-pointer",onClick:function(){u(!0)},children:[Object(l.jsxs)("div",{className:"slotUI-dose1",children:[Object(l.jsx)("span",{children:"D1"}),Object(l.jsx)("span",{children:t})]}),Object(l.jsx)("div",{className:"slotUI-total-available-dose",children:Object(l.jsx)("span",{children:c})}),Object(l.jsxs)("div",{className:"slotUI-dose2",children:[Object(l.jsx)("span",{children:"D2"}),Object(l.jsx)("span",{children:a})]})]}),0===c&&Object(l.jsx)("div",{className:"slotUI-notAvailable",children:Object(l.jsx)("span",{children:"Booked"})}),Object(l.jsx)("div",{className:"slotUI-vaccineName",children:Object(l.jsx)("span",{children:s})}),Object(l.jsx)("div",{className:"slotUI-ageCategory",children:Object(l.jsxs)("span",{children:["Age ",r,"+"]})}),Object(l.jsxs)(W.a,{isOpen:j,contentLabel:"Slot Detail",onRequestClose:b,className:"cowinModal",overlayClassName:"cowinModalOverlay",children:[Object(l.jsx)("span",{role:"button",className:"cowinModal-closeButton",onClick:b,children:Object(l.jsx)(T.a,{color:"red",size:"2em"})}),Object(l.jsx)(Z,{slotInfo:{dose1:t,availableDose:c,dose2:a,vaccineName:s,ageCategory:r,date:e.date,slots:e.slots}})]})]})};c(69);var ee=function(e){var t=e.session;return Object(l.jsxs)("li",{className:"sessionItems",children:[t.length>0&&t.map((function(e){return Object(l.jsx)($,{dose1:e.available_capacity_dose1,availableDose:e.available_capacity,dose2:e.available_capacity_dose2,vaccineName:e.vaccine,ageCategory:e.min_age_limit,date:e.date,slots:e.slots},e.session_id)})),Object(K.isEmpty)(t)&&Object(l.jsx)("div",{className:"slotUI-empty",children:Object(l.jsx)("span",{children:"NA"})})]})},te=(c(70),function(e){var t=e.vaccine,c=e.fee;return Object(l.jsxs)("span",{children:[t," ",c]})});var ce=function(e){var t=e.name,c=e.feeType,n=e.address,a=e.vaccineFee;return Object(l.jsxs)("div",{className:"centerInfo",children:[Object(l.jsxs)("div",{className:"centerInfo-heading",children:[Object(l.jsx)("h5",{children:t}),"Paid"===c&&Object(l.jsx)("span",{children:c})]}),Object(l.jsx)("p",{className:"centerInfo-address",children:n}),!Object(K.isEmpty)(a)&&Object(l.jsx)("div",{className:"centerInfo-footer",children:a.map((function(e){return Object(l.jsx)(te,{vaccine:e.vaccine,fee:e.fee},e.vaccine)}))})]})},ne=(c(71),c(72),function(e){return 0===e?Object(l.jsx)(T.a,{color:"#cd275f",size:"25"}):Object(l.jsxs)("span",{className:"--green",children:[e," slots"]})});var ae=function(e){var t=e.name,c=e.address,n=e.ageCategory,a=e.dose1,s=e.dose2,r=e.feeType,i=e.vaccine,o=ne(a),d=ne(s);return Object(l.jsxs)("div",{className:"resultCard",children:[Object(l.jsxs)("div",{className:"resultCard-center-vaccine",children:[Object(l.jsxs)("div",{className:"resultCard-centerInfo",children:[Object(l.jsx)("h5",{className:"resultCard-center",children:t}),Object(l.jsx)("p",{className:"resultCard-address",children:c})]}),Object(l.jsxs)("div",{className:"resultCard-vaccineInfo",children:[Object(l.jsx)("h3",{children:i}),Object(l.jsx)("div",{className:"resultCard-vaccineInfo-feeType",children:Object(l.jsx)("span",{children:r})})]})]}),Object(l.jsxs)("div",{className:"resultCard-doseInfo",children:[Object(l.jsx)("div",{className:"resultCard-age",children:Object(l.jsxs)("span",{children:["Age ",n,"+"]})}),Object(l.jsx)("div",{className:"resultCard-dose1",children:Object(l.jsxs)("span",{children:["Dose 1 ",o]})}),Object(l.jsx)("div",{className:"resultCard-dose2",children:Object(l.jsxs)("span",{children:["Dose 2 ",d]})})]})]})};var se=function(e){var t=e.name,c=e.address,n=e.feeType,a=e.sessionInfo;return Object(l.jsx)(l.Fragment,{children:!Object(K.isEmpty)(a)&&a.map((function(e){return Object(l.jsx)(ae,{name:t,address:c,feeType:n,ageCategory:e.min_age_limit,dose1:e.available_capacity_dose1,dose2:e.available_capacity_dose2,vaccine:e.vaccine},e.session_id)}))})};var re=function(e){for(var t=e.centerData.sessions,c=Object(_.c)((function(e){return e.search.searchDate})),n={},a=0;a<7;a++){var s=k()(c,"DD-MM-YYYY").add(a,"days").format("DD-MM-YYYY");n[s]={}}var r=function(e){return e.length>0&&e.forEach((function(e){n[e.date]=Object(K.isEmpty)(n[e.date])?[e]:[].concat(Object(I.a)(n[e.date]),[e])})),n}(t);return Object(l.jsxs)("div",{className:"resultRow",children:[Object(l.jsxs)("div",{className:"resultRow-desktop",children:[Object(l.jsx)(ce,{name:e.centerData.name,address:e.centerData.address,vaccineFee:e.centerData.vaccine_fees,feeType:e.centerData.fee_type}),Object(l.jsx)("div",{className:"sessionList-wrapper",children:Object(l.jsx)("ul",{className:"sessionList",children:Object.keys(r).map((function(t){var c=e.centerData.center_id+t;return Object(l.jsx)(ee,{session:r[t]},c)}))})})]}),Object(l.jsx)("div",{className:"resultRow-mobile",children:Object(l.jsx)(se,{name:e.centerData.name,address:e.centerData.address,vaccineFee:e.centerData.vaccine_fees,feeType:e.centerData.fee_type,sessionInfo:r[c]})})]})},ie={pinError:"Please enter correct Pin",pinFieldPlaceholder:"Enter your Pin",stateFieldError:"Please enter correct state",districtFieldError:"Please enter correct district",vaccineNotAvailable:"No Vaccination center is available for booking."};var le=function(e){var t=e.responseData,c=e.activeFilters,n=function(e,t){var c=e;return t.length>0&&((t.includes("paid")||t.includes("free"))&&(c=c.filter((function(e){return function(e,t){var c=!1;return t.includes("paid")&&"Paid"===e.fee_type&&(c=!0),t.includes("free")&&"Free"===e.fee_type&&(c=!0),c}(e,t)}))),(t.includes("age18")||t.includes("age45")||t.includes("covishield")||t.includes("covaxin")||t.includes("sputnik"))&&(c=function(e,t){return e.forEach((function(e){if(e.sessions.length>0){var c=e.sessions;(t.includes("age18")||t.includes("age45"))&&(c=e.sessions.filter((function(e){return function(e,t){return e.includes("age18")&&18===t.min_age_limit||e.includes("age45")&&45===t.min_age_limit}(t,e)}))),(t.includes("covishield")||t.includes("covaxin")||t.includes("sputnik"))&&(c=c.filter((function(e){return function(e,t){var c=!1;return((e.includes("covishield")||e.includes("covaxin")||e.includes("sputnik"))&&e.includes("covishield")&&"COVISHIELD"===t.vaccine||e.includes("covaxin")&&"COVAXIN"===t.vaccine||e.includes("sputnik")&&"SPUTNIKV"===t.vaccine)&&(c=!0),c}(t,e)}))),e.sessions=c}})),e}(c,t)),c=c.filter((function(e){return e.sessions.length>0}))),c}(Object(K.cloneDeep)(t),Object(I.a)(c));return Object(l.jsxs)(l.Fragment,{children:[n.length>0&&n.map((function(e){return Object(l.jsx)(re,{centerData:e},e.center_id)})),0===n.length&&Object(l.jsx)("p",{className:"--bold --align-center",children:ie.vaccineNotAvailable})]})},oe=c(15),de=c.n(oe),je=function(){var e=Object(q.a)(Q.a.mark((function e(t,c){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("".concat(D).concat(y,"?pincode=").concat(t,"&date=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),ue=function(){var e=Object(q.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("".concat(D).concat(N));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(q.a)(Q.a.mark((function e(t){var c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("".concat(D).concat(g,"/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(q.a)(Q.a.mark((function e(t,c){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("".concat(D).concat(S,"?district_id=").concat(t,"&date=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();var Oe=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1],r=e.pin,o=e.district,d=e.activeFilters,j=Object(_.c)((function(e){return e.search.searchDate})),u=Object(n.useCallback)(Object(q.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}return e.next=3,je(r,j);case 3:t=e.sent;case 4:if(!o){e.next=8;break}return e.next=7,he(o,j);case 7:t=e.sent;case 8:s(t.centers);case 9:case"end":return e.stop()}}),e)}))),[r,j,o]);return Object(n.useEffect)((function(){u()}),[r,j,u,o]),Object(l.jsxs)("div",{className:"resultDataList",children:[a.length>0&&Object(l.jsx)(le,{responseData:a,activeFilters:d}),0===a.length&&Object(l.jsx)("p",{className:"--bold resultDataList-no-vaccine",children:ie.vaccineNotAvailable})]})};var ve=function(e){var t=e.pin,c=e.district,a=Object(n.useState)([]),s=Object(i.a)(a,2),r=s[0],o=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(M,{onSelectingFilter:function(e,t){var c=t?[].concat(Object(I.a)(r),[e]):r.filter((function(t){return t!==e}));o(c)}}),Object(l.jsx)(X,{}),Object(l.jsx)(Oe,{pin:t,district:c,activeFilters:r})]})},fe="FETCH_STATES_REQUEST",xe="FETCH_STATES_SUCCESS",pe="FETCH_STATES_FAILURE",me=function(){return{type:fe}},De=function(e){return{type:xe,payload:e}},Ne=function(e){return{type:pe,payload:e}},ge="FETCH_DISTRICTS_REQUEST",ye="FETCH_DISTRICTS_SUCCESS",Se="FETCH_DISTRICTS_FAILURE",Ce=function(){return{type:ge}},we=function(e,t){return{type:ye,payload:{stateId:e,districts:t}}},_e=function(e){return{type:Se,payload:e}};c(91);var Ee=function(){var e=Object(_.c)((function(e){return e.states.states})),t=Object(_.c)((function(e){return e.districts.districts})),c=Object(n.useState)(null),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(null),d=Object(i.a)(o,2),j=d[0],u=d[1],b=Object(_.b)(),h=Object(n.useState)(),O=Object(i.a)(h,2),v=O[0],f=O[1],x=Object(n.useState)(),p=Object(i.a)(x,2),m=p[0],D=p[1],N=Object(n.useRef)(),g=Object(n.useRef)(),y=Object(n.useCallback)((function(){0===e.length&&b(function(){var e=Object(q.a)(Q.a.mark((function e(t){var c,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(me()),e.next=4,ue();case 4:c=e.sent,n=c.states,t(De(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(Ne(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[b,e]);return Object(n.useEffect)((function(){y()}),[y]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"searchByDistrict",children:Object(l.jsxs)("form",{className:"searchByDistrict-form",onSubmit:function(e){if(e.preventDefault(),""===N.current.value||""===g.current.value)""===N.current.value&&u(ie.districtFieldError),""===g.current.value&&r(ie.stateFieldError);else{D(N.current.value);var t=k()(new Date).format("DD-MM-YYYY");b(z(t))}},children:[Object(l.jsxs)("div",{className:"seachByDistrict-formControl",children:[Object(l.jsxs)("select",{name:"state",id:"state",onChange:function(e){var c=e.target.value;""!==c&&r(null),f(c),t[c]||b(function(e){return function(){var t=Object(q.a)(Q.a.mark((function t(c){var n,a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(Ce()),t.next=4,be(e);case 4:n=t.sent,a=n.districts,c(we(e,a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c(_e(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(c))},ref:g,"data-testid":"state-selector",children:[Object(l.jsx)("option",{value:"",children:"Select State"}),e.length>0&&e.map((function(e){return Object(l.jsx)("option",{value:e.state_id,children:e.state_name},e.state_id)}))]}),s&&Object(l.jsx)("p",{className:"cowin-field-error",children:s})]}),Object(l.jsxs)("div",{className:"seachByDistrict-formControl",children:[Object(l.jsxs)("select",{name:"district",id:"district",ref:N,onChange:function(e){""!==e.target.value&&u(null)},"data-testid":"district-selector",children:[Object(l.jsx)("option",{value:"",children:"Select District"}),!Object(K.isEmpty)(t)&&t[v]&&t[v].map((function(e){return Object(l.jsx)("option",{value:e.district_id,children:e.district_name},e.district_id)}))]}),j&&Object(l.jsx)("p",{className:"cowin-field-error",children:j})]}),Object(l.jsx)("div",{className:"seachByDistrict-form-button",children:Object(l.jsx)("button",{className:"cowin-btn",type:"submit",children:"Search"})})]})}),m&&Object(l.jsx)(ve,{district:m})]})};c(92);var ke=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(i.a)(s,2),o=r[0],d=r[1],j=Object(n.useRef)(),u=Object(_.b)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("form",{className:"searchByPin-form",onSubmit:function(e){e.preventDefault();var t=parseInt(j.current.value);if(Object(K.isNumber)(t)&&6===String(t).length){a(t);var c=k()(new Date).format("DD-MM-YYYY");u(z(c))}else d(ie.pinError)},children:[Object(l.jsxs)("div",{className:"searchByPin-formControl",children:[Object(l.jsx)("input",{className:"cowin-field",type:"tel",name:"pincode",id:"pincode",placeholder:"Enter you Pin",ref:j,onChange:function(e){var t=parseInt(e.target.value);!Object(K.isNumber)(t)||String(t).length>6?d(ie.pinError):d(null)}}),o&&Object(l.jsx)("p",{className:"cowin-field-error",children:o})]}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"cowin-btn",type:"submit",value:"Search"})})]})}),c&&Object(l.jsx)(ve,{pin:c})]})};c(93);var Ie=function(){var e=Object(n.useState)(f.searchByPin),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(j);return Object(l.jsxs)("main",{className:s.mode,children:[Object(l.jsx)("h2",{className:"main-heading",children:"Check your nearest vaccination center and slots availability"}),Object(l.jsx)(C,{tabClickHandler:function(e){a(e)}}),c===f.searchByMap&&Object(l.jsx)(w,{}),c===f.searchByPin&&Object(l.jsx)(ke,{}),c===f.searchByDistrict&&Object(l.jsx)(Ee,{})]})},Me=c(12),Te=c(37),Fe=c(17),Ye=c(8),Be={loading:!1,districts:{},error:""},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(Ye.a)(Object(Ye.a)({},e),{},{loading:!0});case ye:return{loading:!1,error:"",districts:Object(Ye.a)(Object(Ye.a)({},e.districts),{},Object(Fe.a)({},t.payload.stateId,t.payload.districts))};case Se:return{loading:!1,districts:Object(Ye.a)({},e.districts),error:t.payload};default:return e}},Ae={loading:!1,states:[],error:""},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(Ye.a)(Object(Ye.a)({},e),{},{loading:!0});case xe:return{loading:!1,states:t.payload,error:""};case pe:return{loading:!1,states:[],error:t.payload};default:return e}},Ue={searchDate:null},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(Ye.a)(Object(Ye.a)({},e),{},{searchDate:t.payload});default:return e}},Le=Object(Me.b)({states:Re,districts:Pe,search:He}),Ve=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0}):Me.c)(Object(Me.a)(Te.a)),ze=Object(Me.d)(Le,Ve);c(94),c(95),c(96);var Xe=function(){return Object(l.jsx)(_.a,{store:ze,children:Object(l.jsxs)(d,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(Ie,{}),Object(l.jsx)(v,{})]})})},Je=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,98)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Xe,{})}),document.getElementById("root")),Je()}},[[97,1,2]]]);
//# sourceMappingURL=main.f8436551.chunk.js.map