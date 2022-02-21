"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81491],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88565:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",slug:"how-to-access-control-with-nestjs",authors:"yildiray",tags:["nestjs","authorization","accesscontrol","refine"],image:"https://refine.dev/img/refine_social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/how-to-access-control-with-nestjs",source:"@site/blog/2022-02-21-build-low-code-customizable-and-authorization-ready-accesscontrol-admin-panel-with-nestjs.md",title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"authorization",permalink:"/blog/tags/authorization"},{label:"accesscontrol",permalink:"/blog/tags/accesscontrol"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:3.04,truncated:!1,authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],nextItem:{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui"}},p={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",children:[],level:2},{value:"Scenario",id:"scenario",children:[],level:2},{value:"Authorization",id:"authorization",children:[],level:2},{value:"Using AccessControl in API",id:"using-accesscontrol-in-api",children:[],level:2},{value:"Using AccessControl in refine (dashboard)",id:"using-accesscontrol-in-refine-dashboard",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"All the steps described are in this ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/pankod/refine-hackathon/tree/main/job-posting-app"},"repo"),".")),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/pankod/build-fast-and-customizable-admin-panel-with-nestjs-291"},"previous blog post"),", we used ",(0,a.kt)("a",{parentName:"p",href:"https://nestjs.com"},"nestjs")," with an api and ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine")," in the admin panel. In this blog, let's add ",(0,a.kt)("strong",{parentName:"p"},"authorization")," to both api and admin panel."),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,"Let's have two roles in this system, they are ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"editor"),". In the API we prepared, we had two crud processes that we categorized as ",(0,a.kt)("inlineCode",{parentName:"p"},"companies")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"jobs"),"."),(0,a.kt)("p",null,"In this scenario; ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," can only list companies, not any deletion or additions. Have the authority to list and create job postings. Let ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," have authorization for all transactions."),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"I used ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"nestjsx-crud")," in the api we prepared. This library makes ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUD")," operations very easy. However, there is no support on the authorization side. That's why I made use of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onury/accesscontrol"},"accesscontrol")," library, which can be easily integrated with both ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"refine"),". "),(0,a.kt)("h2",{id:"using-accesscontrol-in-api"},"Using AccessControl in API"),(0,a.kt)("p",null,"In the first step, let's install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/nest-access-control"},"nestjs-access-control")," in our project for ",(0,a.kt)("inlineCode",{parentName:"p"},"accesscontrol")," integration to the api."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install nest-access-control\n")),(0,a.kt)("p",null,"I'm specifying a role as the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControl")," supports. According to our scenario, this should be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// app.roles.ts\n\nimport { RolesBuilder } from 'nest-access-control';\n\nexport enum AppRoles {\n  ADMIN = 'ADMIN',\n  EDITOR = 'EDITOR',\n}\n\nexport const roles: RolesBuilder = new RolesBuilder();\n\nroles\n  // editor\n  .grant(AppRoles.EDITOR)\n  .create('jobs')\n  .update('jobs')\n  // admin\n  .grant(AppRoles.ADMIN)\n  .extend(AppRoles.EDITOR)\n  .create(['companies'])\n  .update(['companies'])\n  .delete(['companies', 'jobs']);\n")),(0,a.kt)("p",null,"Now I import ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessControlModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  // app.module.ts\n\n  import { roles } from './app.roles';\n\n    @Module({\n      imports: [\n        ...\n        AccessControlModule.forRoles(roles)\n      ],\n      controllers: [...],\n      providers: [...],\n    })\n    export class AppModule {}\n")),(0,a.kt)("p",null,"After determining the roles and privileges, we add the ",(0,a.kt)("inlineCode",{parentName:"p"},"ACGuard")," class to the controller ",(0,a.kt)("inlineCode",{parentName:"p"},"UseGuards"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ACGuard } from 'nest-access-control';\n\n...\n@UseGuards(JwtAuthGuard, ACGuard)\n@Controller('companies')\nexport class CompanyController implements CrudController<CompanyEntity> {}\n...\n")),(0,a.kt)("p",null,"Now we define resource and action for methods using ",(0,a.kt)("inlineCode",{parentName:"p"},"UseRoles")," decorator. For example, we ",(0,a.kt)("strong",{parentName:"p"},"override")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"companies")," resource and the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ACGuard, UseRoles } from 'nest-access-control';\n\n...\n@UseGuards(JwtAuthGuard, ACGuard)\n@Controller('companies')\nexport class CompanyController implements CrudController<CompanyEntity> {\n  constructor(public service: CompanyService) {}\n\n  get base(): CrudController<CompanyEntity> {\n    return this;\n  }\n\n  @Override()\n  @UseRoles({\n    resource: 'companies',\n    action: 'create',\n  })\n  createOne(\n    @ParsedRequest() req: CrudRequest,\n    @ParsedBody() dto: CompanyCreateDto,\n  ) {\n    return this.base.createOneBase(req, <CompanyEntity>dto);\n  }\n...\n")),(0,a.kt)("p",null,"Similarly, we add this decorator for other methods."),(0,a.kt)("p",null,"After these operations, we complete the authorization process on the API side. Now we will do the authorization to the admin panel that we created with ",(0,a.kt)("inlineCode",{parentName:"p"},"refine"),"."),(0,a.kt)("h2",{id:"using-accesscontrol-in-refine-dashboard"},"Using AccessControl in refine (dashboard)"),(0,a.kt)("p",null,"refine; It supports many authorization tools, very flexible. What we need to do; Defining an ",(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),' is implemented only one asynchronous method named "can" to be used to control whether the requested access is granted. This method takes ',(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," with parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\n\n<Refine\n  ...\n  accessControlProvider={{\n    can: async ({ resource, action }) => {\n      let can: boolean = false;\n      const stringifyUser = localStorage.getItem('refine-user');\n      if (stringifyUser) {\n        const { roles } = JSON.parse(stringifyUser);\n\n        roles.forEach((role: string) => {\n          switch (action) {\n            case 'list':\n            case 'show':\n              can = ac.can(role).read(resource).granted;\n              break;\n            case 'create':\n              can = ac.can(role).create(resource).granted;\n              break;\n            case 'edit':\n              can = ac.can(role).update(resource).granted;\n              break;\n            case 'delete':\n              can = ac.can(role).delete(resource).granted;\n              break;\n          }\n        });\n      }\n      return Promise.resolve({ can });\n    },\n  }}\n/>****\n")),(0,a.kt)("p",null,"Now let me explain a little bit of this code I wrote. First we need the role of the logged in user. We saved it to local storage during login.\nThen we match the refine ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," with the accessControl's actions and check its authorization with the ",(0,a.kt)("inlineCode",{parentName:"p"},"granted")," method. I also resolve the returned result."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As a result, we have done the authorization on both the ui (dashboard) side and the api side."))}m.isMDXComponent=!0}}]);