(this.webpackJsonpvector=this.webpackJsonpvector||[]).push([[0],{25:function(e,t,c){e.exports={navLink:"navbar_navLink__2h5eH",nav:"navbar_nav__2rKp1",active:"navbar_active__3uiWp"}},74:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(37),r=c.n(n),i=c(3),l=c(2),o=c(6),j=c(0),b={isLoading:!1,isLoggedIn:null,currentUser:null},u=function(e,t){switch(t.type){case"LOADING":return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case"SET_AUTHORIZED":return Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:!0,isLoading:!1,currentUser:t.payload});case"SET_UNAUTHORIZED":case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:!1});default:return e}},d=Object(s.createContext)(),O=function(e){var t=e.children,c=Object(s.useReducer)(u,b);return Object(j.jsx)(d.Provider,{value:c,children:t})},m=c(38),x=c.n(m),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=Object(s.useState)((function(){return localStorage.getItem(e)||t})),a=Object(l.a)(c,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){localStorage.setItem(e,n)}),[n,e]),[n,r]};var f,p,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t="https://conduit.productionready.io/api",c=Object(s.useState)(!1),a=Object(l.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)(null),j=Object(l.a)(i,2),b=j[0],u=j[1],d=Object(s.useState)(null),O=Object(l.a)(d,2),m=O[0],f=O[1],p=Object(s.useState)({}),g=Object(l.a)(p,2),v=g[0],N=g[1],y=h("token"),S=Object(l.a)(y,1),E=S[0],k=Object(s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N(e),r(!0)}),[]);return Object(s.useEffect)((function(){var c=!1,s=Object(o.a)(Object(o.a)({},v),{headers:{authorization:E?"Token ".concat(E):""}});if(n)return x()(t+e,s).then((function(e){c||(u(e.data),r(!1))})).catch((function(e){c||(f(e.response.data),r(!1))})),function(){c=!0}}),[n,e,v,E]),[{isLoading:n,response:b,error:m,token:E},k]},v=function(e){var t=e.children,c=g("/user"),a=Object(l.a)(c,2),n=a[0].response,r=a[1],i=Object(s.useContext)(d),o=Object(l.a)(i,2)[1],j=h("token"),b=Object(l.a)(j,1)[0];return Object(s.useEffect)((function(){b?(r(),o({type:"LOADING"})):o({type:"SET_UNAUTHORIZED"})}),[o,b,r]),Object(s.useEffect)((function(){n&&o({type:"SET_AUTHORIZED",payload:n.user})}),[n,o]),t},N=function(){return Object(j.jsx)("footer",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(i.c,{to:"/",className:"logo-font",children:"Vector"}),Object(j.jsxs)("span",{className:"attribution",children:["\xa9 2021. Project by elia7777. \xa0",Object(j.jsx)("a",{href:"https://github.com/elia7777",children:"Github"}),". \xa0  Code licensed under MIT."]})]})})},y=c(25),S=c.n(y),E=function(){var e=Object(s.useContext)(d),t=Object(l.a)(e,1)[0];return t.isLoading?Object(j.jsx)("p",{children:"Loading..."}):Object(j.jsx)("nav",{className:"navbar navbat-light ".concat(S.a.nav),children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(i.b,{to:"/",className:"navbar-brand",children:"Vector"}),Object(j.jsxs)("ul",{className:"nav navbar-nav pull-xs-right ".concat(S.a.navLink),children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{to:"/",exact:!0,className:"nav-link",children:"Home"})}),!1===t.isLoggedIn&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{to:"/login",className:"nav-link",children:"Sign in"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{to:"/register",className:"nav-link",children:"Sign up"})})]}),t.isLoggedIn&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(i.c,{to:"/articles/new",className:"nav-link",children:[Object(j.jsx)("i",{className:"ion-compose"}),"\xa0 New Post"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(i.c,{to:"/settings",className:"nav-link",children:[Object(j.jsx)("i",{className:"ion-gear-a"}),"\xa0 Settings"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(i.c,{to:"/profiles/".concat(t.currentUser.username),className:"nav-link",children:[Object(j.jsx)("img",{src:t.currentUser.image,className:"user-pic",alt:""}),"\xa0 ",t.currentUser.username]})})]})]})]})})},k=c(18),L=c(39),C=c.n(L),w=c(13),U=Object(w.css)(f||(f=Object(k.a)(["\n  display: block;\n  margin: 12rem auto;\n  border-color: #506AD4;\n"]))),I=function(e){var t=e.children,c=Object(s.useContext)(d);return Object(l.a)(c,1)[0].isLoading?Object(j.jsx)("div",{children:Object(j.jsx)(C.a,{css:U,size:100,color:"#506AD4"})}):t},A=(c(74),c(4)),P=function(e){var t=e.backendErrors,c=Object.keys(t).map((function(e){var c=t[e].join(" ");return"".concat(e," ").concat(c)}));return Object(j.jsx)("ul",{className:"error-messages",children:c.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})},T=function(e){var t=e.onSubmit,c=e.errors,a=e.initialValues,n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],b=Object(s.useState)(""),u=Object(l.a)(b,2),d=u[0],O=u[1],m=Object(s.useState)(""),x=Object(l.a)(m,2),h=x[0],f=x[1],p=Object(s.useState)(""),g=Object(l.a)(p,2),v=g[0],N=g[1];return Object(s.useEffect)((function(){a&&(o(a.title),O(a.body),f(a.description),N(a.tagList.join(" ")))}),[a]),Object(j.jsx)("div",{className:"editor-page",children:Object(j.jsx)("div",{className:"container page",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:[c&&Object(j.jsx)(P,{backendErrors:c}),Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault();var c={title:i,body:d,description:h,tagList:v.split(" ")};t(c)},children:Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Article title",value:i,onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"What is this article about",value:h,onChange:function(e){return f(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("textarea",{className:"form-control",placeholder:"Write yout article (in markdown)",rows:"8",value:d,onChange:function(e){return O(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter tags",value:v,onChange:function(e){return N(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-lg pull-xs-right btn-primary",children:"Publish Article"})})]})})]})})})})},D=c(40),_=c.n(D),F=Object(w.css)(p||(p=Object(k.a)(["\n  display: block;\n  margin: 3rem auto;\n  border-color: #506AD4;\n"]))),R=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(_.a,{css:F,size:60,color:"#506AD4"})})},H=function(){var e=Object(s.useContext)(d),t=Object(l.a)(e,1)[0],c=g("/articles"),a=Object(l.a)(c,2),n=a[0],r=n.response,i=n.error,o=a[1],b=Object(s.useState)(!1),u=Object(l.a)(b,2),O=u[0],m=u[1],x=Object(s.useState)(!1),h=Object(l.a)(x,2),f=(h[0],h[1]);return Object(s.useEffect)((function(){r&&(f(!1),m(!0))}),[r]),t.isLoggedIn?O?Object(j.jsx)(A.a,{to:"/articles/".concat(r.article.slug)}):Object(j.jsx)("div",{children:Object(j.jsx)(T,{errors:i&&i.errors||{},initialValues:{title:"",body:"",description:"",tagList:[]},onSubmit:function(e){f(!0),o({method:"post",data:{article:e}})}})}):Object(j.jsx)(A.a,{to:"/"})},V=function(e){var t=e.match.params.slug,c="/articles/".concat(t),a=g(c),n=Object(l.a)(a,2),r=n[0].response,i=n[1],o=g(c),b=Object(l.a)(o,2),u=b[0],O=u.response,m=u.error,x=b[1],h=Object(s.useState)(null),f=Object(l.a)(h,2),p=f[0],v=f[1],N=Object(s.useState)(!1),y=Object(l.a)(N,2),S=y[0],E=y[1],k=Object(s.useContext)(d),L=Object(l.a)(k,1)[0];return Object(s.useEffect)((function(){i()}),[i]),Object(s.useEffect)((function(){r&&v({title:r.article.title,body:r.article.body,description:r.article.description,tagList:r.article.tagList})}),[r]),Object(s.useEffect)((function(){O&&E(!0)}),[O]),L.isLoggedIn?S?Object(j.jsx)(A.a,{to:"/articles/".concat(t)}):Object(j.jsx)(T,{onSubmit:function(e){x({method:"put",data:{article:e}})},errors:m&&m.errors,initialValues:p}):Object(j.jsx)(A.a,{to:"/"})},G=function(){var e=Object(s.useContext)(d),t=Object(l.a)(e,2),c=t[0],a=t[1],n=g("/user"),r=Object(l.a)(n,2),i=r[0],b=i.response,u=i.error,O=r[1],m=Object(s.useState)(""),x=Object(l.a)(m,2),f=x[0],p=x[1],v=Object(s.useState)(""),N=Object(l.a)(v,2),y=N[0],S=N[1],E=Object(s.useState)(""),k=Object(l.a)(E,2),L=k[0],C=k[1],w=Object(s.useState)(""),U=Object(l.a)(w,2),I=U[0],T=U[1],D=Object(s.useState)(""),_=Object(l.a)(D,2),F=_[0],R=_[1],H=Object(s.useState)(!1),V=Object(l.a)(H,2),G=V[0],Z=V[1],M=h("token"),z=Object(l.a)(M,2)[1],W=Object(s.useState)(!1),J=Object(l.a)(W,2),B=J[0],K=J[1];return Object(s.useEffect)((function(){c.currentUser&&(c.currentUser.image&&p(c.currentUser.image),c.currentUser.username&&S(c.currentUser.username),c.currentUser.bio&&C(c.currentUser.bio),c.currentUser.email&&T(c.currentUser.email))}),[c.currentUser]),Object(s.useEffect)((function(){b&&(a({type:"SET_AUTHORIZED",payload:b.user}),Z(!0))}),[b,a]),G||B?Object(j.jsx)(A.a,{to:"/"}):Object(j.jsx)("div",{className:"settings-page",children:Object(j.jsx)("div",{className:"container page",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(j.jsx)("h1",{className:"text-xs-center",children:"Your settings"}),u&&Object(j.jsx)(P,{backendErrors:u.errors}),Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),O({method:"put",data:{user:Object(o.a)(Object(o.a)({},c.currentUser),{},{image:f,username:y,bio:L,email:I,password:F})}})},children:Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"URL of profile picture",value:f,onChange:function(e){return p(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",value:y,onChange:function(e){return S(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("textarea",{className:"form-control form-control-lg",rows:"8",placeholder:"Short bio",value:L,onChange:function(e){return C(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",value:I,onChange:function(e){return T(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",value:F,onChange:function(e){return R(e.target.value)}})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-lg btn-primary pull-xs-right",children:"Update settings"})]})}),Object(j.jsx)("hr",{}),Object(j.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){z(""),a({type:"LOGOUT"}),K(!0)},children:"Click here to logout"})]})})})})},Z=c(11),M=c(41),z=10,W=function(e){var t=Object(Z.parse)(e),c=t.page?Number(t.page):1;return{currentPage:c,offset:10*c-z}},J=function(){return Object(j.jsx)("div",{children:"Something went wrong..."})},B=c(19),K=c.n(B),Y=function(e){var t=e.isFavorited,c=e.favoritesCount,s=e.articleSlug,a="/articles/".concat(s,"/favorite"),n=g(a),r=Object(l.a)(n,2),i=r[0].response,o=r[1],b=i?i.article.favoritesCount:c,u=i?i.article.favorited:t,d=K()({"btn-sm":!0,btn:!0,"btn-primary":u,"btn-outline-primary":!u});return Object(j.jsxs)("button",{className:d,onClick:function(e){o({method:u?"delete":"post"})},style:{outline:"none"},children:[Object(j.jsx)("i",{className:"ion-heart"}),Object(j.jsxs)("span",{children:["\xa0 ",b]})]})},q=function(e){var t=e.tags;return Object(j.jsx)("ul",{className:"tag-list",children:t.map((function(e){return Object(j.jsx)("li",{className:"tag-default tag-pill tag-outline",children:e},e)}))})},Q=function(e){var t=e.articles;return Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsxs)("div",{className:"article-preview",children:[Object(j.jsxs)("div",{className:"article-meta",children:[Object(j.jsx)(i.b,{to:"/profiles/".concat(e.author.username),children:Object(j.jsx)("img",{src:e.author.image,alt:""})}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)(i.b,{to:"/profiles/".concat(e.author.username),className:"author",children:e.author.username}),Object(j.jsx)("span",{className:"date",children:e.createdAt})]}),Object(j.jsx)("div",{className:"pull-xs-right",children:Object(j.jsx)(Y,{isFavorited:e.favorited,favoritesCount:e.favoritesCount,articleSlug:e.slug})})]}),Object(j.jsxs)(i.b,{className:"preview-link",to:"/articles/".concat(e.slug),children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("span",{children:"Read more..."}),Object(j.jsx)(q,{tags:e.tagList})]})]},t)}))})},X=function(e){var t=e.page,c=e.currentPage,s=e.url,a=K()({"page-item":!0,active:c===t});return Object(j.jsx)("li",{className:a,style:{display:"inline-block",margin:"-0.01rem"},children:Object(j.jsx)(i.b,{to:"".concat(s,"?page=").concat(t),className:"page-link",style:{display:"inline-block",width:"2.5rem",textAlign:"center"},children:t})})},$=function(e){var t,c,s=e.total,a=e.limit,n=e.url,r=e.currentPage,i=Math.ceil(s/a),l=(t=1,c=i,Object(M.a)(Array(c).keys()).map((function(e){return e+t})));return Object(j.jsx)("ul",{className:"pagination",children:l.map((function(e){return Object(j.jsx)(X,{page:e,currentPage:r,url:n},e)}))})},ee=function(e){var t=e.username,c=e.isFavorites,a=e.location,n=e.url,r=W(a.search),i=r.offset,o=r.currentPage,b=function(e){var t=e.username,c=e.offset,s=e.isFavorites?{limit:z,offset:c,favorited:t}:{limit:z,offset:c,author:t};return"/articles?".concat(Object(Z.stringify)(s))}({username:t,offset:i,isFavorites:c}),u=g(b),d=Object(l.a)(u,2),O=d[0],m=O.response,x=O.isLoading,h=O.error,f=d[1];return Object(s.useEffect)((function(){f()}),[f,c,t]),Object(j.jsxs)("div",{children:[x&&Object(j.jsx)(R,{}),h&&Object(j.jsx)(J,{}),!x&&m&&Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(Q,{articles:m.articles}),Object(j.jsx)($,{total:m.articlesCount,limit:z,url:n,currentPage:o})]})]})},te=function(e){var t=e.location,c=e.match,a=c.params.slug,n=t.pathname.includes("favorites"),r="/profiles/".concat(a),o=g(r),b=Object(l.a)(o,2),u=b[0].response,d=b[1];return Object(s.useEffect)((function(){d()}),[d,a]),u?Object(j.jsxs)("div",{className:"profile-page",children:[Object(j.jsx)("div",{className:"user-info",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(j.jsx)("img",{src:u.profile.image,alt:"",className:"user-img"}),Object(j.jsx)("h4",{children:u.profile.username}),Object(j.jsx)("p",{children:u.profile.bio})]})})})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1 ",children:[Object(j.jsx)("div",{className:"articles-toggle",children:Object(j.jsxs)("ul",{className:"nav nav-pills outline-active",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{to:"/profiles/".concat(u.profile.username),className:"nav-link",exact:!0,children:"My Posts"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{to:"/profiles/".concat(u.profile.username,"/favorites"),className:"nav-link",children:"Favorites Posts"})})]})}),Object(j.jsx)(ee,{username:u.profile.username,location:t,isFavorites:n,url:c.url})]})})})]}):Object(j.jsx)(R,{})},ce=function(e){var t=e.match.params.slug,c="/articles/".concat(t),a=g(c),n=Object(l.a)(a,2),r=n[0],o=r.response,b=r.error,u=r.isLoading,O=n[1],m=g(c),x=Object(l.a)(m,2),h=x[0].response,f=x[1],p=Object(s.useContext)(d),v=Object(l.a)(p,1)[0],N=Object(s.useState)(!1),y=Object(l.a)(N,2),S=y[0],E=y[1];return Object(s.useEffect)((function(){O()}),[O]),Object(s.useEffect)((function(){h&&E(!0)}),[h]),S?Object(j.jsx)(A.a,{to:"/"}):u?Object(j.jsx)(R,{}):Object(j.jsxs)("div",{className:"article-page",children:[Object(j.jsx)("div",{className:"banner",children:!u&&o&&Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:o.article.title}),Object(j.jsxs)("div",{className:"article-meta",children:[Object(j.jsx)(i.b,{to:"/profiles/".concat(o.article.author.username),children:Object(j.jsx)("img",{src:o.article.author.image,alt:""})}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)(i.b,{to:"/profiles/".concat(o.article.author.username),children:o.article.author.username}),Object(j.jsx)("span",{className:"date",children:o.article.createdAt})]}),!(!o||!v.isLoggedIn)&&o.article.author.username===v.currentUser.username&&Object(j.jsxs)("span",{children:[Object(j.jsxs)(i.b,{className:"btn btn-outline-secondary btn-sm",to:"/articles/".concat(o.article.slug,"/edit"),children:[Object(j.jsx)("i",{className:"ion-edit"}),"\xa0 Edit Article"]}),Object(j.jsxs)("button",{className:"btn btn-outline-danger btn-sm",onClick:function(){f({method:"delete"})},children:[Object(j.jsx)("i",{className:"ion-trash-a"}),"\xa0 Delete article"]})]})]})]})}),Object(j.jsxs)("div",{className:"container page",children:[u&&Object(j.jsx)(R,{}),b&&Object(j.jsx)(J,{}),!u&&o&&Object(j.jsx)("div",{className:"row article-content",children:Object(j.jsxs)("div",{className:"col-xs-12",children:[Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:o.article.body})}),Object(j.jsx)(q,{tags:o.article.tagList})]})})]})]})},se=function(e){var t="/login"===e.match.path,c=t?"Sign In":"Sign Up",a=t?"/register":"/login",n=t?"Need an account?":"Have an account?",r=t?"/users/login":"/users",o=Object(s.useState)(""),b=Object(l.a)(o,2),u=b[0],O=b[1],m=Object(s.useState)(""),x=Object(l.a)(m,2),f=x[0],p=x[1],v=Object(s.useState)(""),N=Object(l.a)(v,2),y=N[0],S=N[1],E=Object(s.useState)(!1),k=Object(l.a)(E,2),L=k[0],C=k[1],w=g(r),U=Object(l.a)(w,2),I=U[0],T=I.isLoading,D=I.response,_=I.error,F=U[1],R=h("token"),H=Object(l.a)(R,2)[1],V=Object(s.useContext)(d),G=Object(l.a)(V,2)[1];return Object(s.useEffect)((function(){D&&(H(D.user.token),C(!0),G({type:"SET_AUTHORIZED",payload:D.user}))}),[D,H,G]),L?Object(j.jsx)(A.a,{to:"/"}):Object(j.jsx)("div",{className:"auth-page",children:Object(j.jsx)("div",{className:"container page",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(j.jsx)("h1",{className:"text-xs-center",children:c}),Object(j.jsx)("p",{className:"text-xs-center",children:Object(j.jsx)(i.b,{to:a,children:n})}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F({method:"post",data:{user:t?{email:f,password:y}:{email:f,password:y,username:u}}})},children:[_&&Object(j.jsx)(P,{backendErrors:_.errors}),!t&&Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",value:u,onChange:function(e){return O(e.target.value)}})}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Email",value:f,onChange:function(e){return p(e.target.value)}})}),Object(j.jsx)("fieldset",{className:"form-group",children:Object(j.jsx)("input",{type:"password",className:"form-control form-control-lg",placeholder:"Password",value:y,onChange:function(e){return S(e.target.value)}})}),Object(j.jsx)("button",{disabled:T,className:"btn btn-lg btn-primary pull-xs-right",type:"submit",children:c})]})]})]})})})})},ae=function(){var e=g("/tags"),t=Object(l.a)(e,2),c=t[0],a=c.response,n=c.isLoading,r=c.error,o=t[1];return Object(s.useEffect)((function(){o()}),[o]),n||!a?Object(j.jsx)(R,{}):r?Object(j.jsx)(J,{}):Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("p",{children:"Popular tags"}),Object(j.jsx)("div",{className:"tag-list",children:a.tags.map((function(e){return e?Object(j.jsx)(i.b,{to:"/tags/".concat(e),className:"tag-default tag-pill",children:e},e):null}))})]})},ne=function(e){var t=e.tagName;return Object(j.jsx)("div",{className:"feed-toggle",children:Object(j.jsxs)("ul",{className:"nav nav-pills outline-active",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{to:"/",className:"nav-link",exact:!0,children:"Global Feed"})}),t&&Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(i.c,{to:"/tags/".concat(t),className:"nav-link",exact:!0,children:[Object(j.jsx)("i",{className:"ion-pound"}),t]})})]})})},re=function(e){var t=e.location,c=e.match,a=W(t.search),n=a.currentPage,r=a.offset,i=Object(Z.stringify)({limit:z,offset:r}),o="/articles?".concat(i),b=g(o),u=Object(l.a)(b,2),d=u[0],O=d.response,m=d.isLoading,x=d.error,h=u[1],f=c.url;return Object(s.useEffect)((function(){h()}),[h,n]),Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)("div",{className:"banner",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Vector"}),Object(j.jsx)("p",{children:"Read and share new perspectives on just about any topic. Everyone\u2019s welcome."})]})}),Object(j.jsx)("div",{className:"container page",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-md-9",children:[Object(j.jsx)(ne,{tagName:""}),m&&Object(j.jsx)(R,{}),x&&Object(j.jsx)(J,{}),!m&&O&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Q,{articles:O.articles}),Object(j.jsx)($,{total:O.articlesCount,limit:z,url:f,currentPage:n})]})]}),Object(j.jsx)("div",{className:"col-md-3",style:{marginTop:"38px"},children:Object(j.jsx)(ae,{})})]})})]})},ie=function(e){var t=e.location,c=e.match,a=c.params.slug,n=W(t.search),r=n.currentPage,i=n.offset,o=Object(Z.stringify)({limit:z,offset:i,tag:a}),b="/articles?".concat(o),u=g(b),d=Object(l.a)(u,2),O=d[0],m=O.response,x=O.isLoading,h=O.error,f=d[1],p=c.url;return Object(s.useEffect)((function(){f()}),[f,r,a]),Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)("div",{className:"banner",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Vector"}),Object(j.jsx)("p",{children:"Read and share new perspectives on just about any topic. Everyone\u2019s welcome."})]})}),Object(j.jsx)("div",{className:"container page",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-md-9",children:[Object(j.jsx)(ne,{tagName:a}),x&&Object(j.jsx)(R,{}),h&&Object(j.jsx)(J,{}),!x&&m&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Q,{articles:m.articles}),Object(j.jsx)($,{total:m.articlesCount,limit:z,url:p,currentPage:r})]})]}),Object(j.jsx)("div",{className:"col-md-3",style:{marginTop:"42px"},children:Object(j.jsx)(ae,{})})]})})]})},le=function(){return Object(j.jsxs)(A.d,{children:[Object(j.jsx)(A.b,{exact:!0,path:"/",component:re}),Object(j.jsx)(A.b,{exact:!0,path:"/profiles/:slug",component:te}),Object(j.jsx)(A.b,{exact:!0,path:"/profiles/:slug/favorites",component:te}),Object(j.jsx)(A.b,{path:"/tags/:slug",component:ie}),Object(j.jsx)(A.b,{path:"/articles/new",component:H}),Object(j.jsx)(A.b,{path:"/articles/:slug/edit",component:V}),Object(j.jsx)(A.b,{path:"/articles/:slug",component:ce}),Object(j.jsx)(A.b,{path:"/login",component:se}),Object(j.jsx)(A.b,{path:"/register",component:se}),Object(j.jsx)(A.b,{path:"/settings",component:G})]})},oe=function(){return Object(j.jsx)(O,{children:Object(j.jsx)(v,{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(I,{children:[Object(j.jsx)(E,{}),Object(j.jsx)(le,{}),Object(j.jsx)(N,{})]})})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(oe,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.a21b1cb3.chunk.js.map