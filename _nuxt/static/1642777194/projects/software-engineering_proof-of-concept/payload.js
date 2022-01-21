__NUXT_JSONP__("/projects/software-engineering_proof-of-concept", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){G.slug=H;G.description="Prototypes";G.id=v;G.title=I;G.duration="1 day";G.image="\u002Fimages\u002Fprojects\u002Fminor\u002Frecaptcha.png";G.tech=[{name:"prototype"}];G.category=[{name:"body of knowledge"},{name:"software-engineering"},{name:"cyber"},{name:"minor"}];G.author={name:"Rik Peeters",image:"\u002Fimages\u002Fme.jpg",social:{twitter:"rikp777"}};G.createdAt="2021-11-22T00:00:00.000Z";G.toc=[{id:J,depth:w,text:K},{id:L,depth:w,text:M},{id:N,depth:w,text:O}];G.body={type:"root",children:[{type:b,tag:"h1",props:{id:"proof-of-concept"},children:[{type:b,tag:h,props:{href:"#proof-of-concept",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:x,props:{id:J},children:[{type:b,tag:h,props:{href:"#use-cases",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For my prototype I made two services in a microservice architecture.\nThe fist service will serve as an auth service were the user can register and login  where he then gets back a bearer token.\nThe second service will serve as a database acces service where I can ask for a given article id."}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"As a user I want to be able to lookup an article by the id, given authenticated."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"As a user I want to be able to register and get a verification"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"As a user I want to be able to login given I'm verified"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Both services use their own database"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"An article is bases on various connections to other tables."}]},{type:a,value:c},{type:b,tag:P,props:{},children:[{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Article service"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Auth service"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Archtecture"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:k},{type:b,tag:y,props:{target:i,rel:[z,a],to:R},children:[{type:a,value:A},{type:b,tag:B,props:{width:C,src:R,alt:D},children:[]},{type:a,value:k}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:k},{type:b,tag:y,props:{target:i,rel:[z,a],to:S},children:[{type:a,value:A},{type:b,tag:B,props:{width:C,src:S,alt:D},children:[]},{type:a,value:k}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:k},{type:b,tag:y,props:{target:i,rel:[z,a],to:T},children:[{type:a,value:A},{type:b,tag:B,props:{width:C,src:T,alt:D},children:[]},{type:a,value:k}]},{type:a,value:d}]},{type:a,value:f}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"both services will be running on a nginx server with the two services not knowing about each other.\nHowever, they will both have an implementation for checking the jwt bearer token. Here, the two services share the same validation password."}]},{type:a,value:c},{type:b,tag:x,props:{id:L},children:[{type:b,tag:h,props:{href:"#vulnerabilities",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fblog.pentesteracademy.com\u002Fhacking-jwt-tokens-bruteforcing-weak-signing-key-jwt-cracker-5d49d34c44",rel:[s,t,u],target:i},children:[{type:a,value:"JWT cracking"}]},{type:a,value:" and brute forcing a password are popular methods to break into a system:"}]},{type:a,value:c},{type:b,tag:P,props:{},children:[{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Vulnerability"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Solution"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Brute force login when verified"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Debounce \u002F save the number of incorrectly logins block on 3 for given ip \u002F CAPTCHA "}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Modification of bearer token and extension of rights \u002F JWT-Cracking"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"encrypted password"}]},{type:a,value:f}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:x,props:{id:N},children:[{type:b,tag:h,props:{href:"#links",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"I produced a couple proof of concepts based on project I had to develop.\nMultiple learning exercises have been added to the application for this idea.\nBecause it's simply a proof of concept, a lot of features haven't been added yet.\nMy application may be seen here:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Authentication & Authorization:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:h,props:{href:U,rel:[s,t,u],target:i},children:[{type:a,value:U}]},{type:a,value:E},{type:b,tag:F,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Api with hateoas hal:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:h,props:{href:V,rel:[s,t,u],target:i},children:[{type:a,value:V}]},{type:a,value:E},{type:b,tag:F,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Client app in Vue.js and state management:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:h,props:{href:W,rel:[s,t,u],target:i},children:[{type:a,value:W}]},{type:a,value:E},{type:b,tag:F,props:{},children:[]}]},{type:a,value:c}]}]};G.dir="\u002Fprojects\u002Fsoftware-engineering";G.path="\u002Fprojects\u002Fsoftware-engineering\u002Fproof-of-concept";G.extension=".md";G.updatedAt="2022-01-21T14:57:29.933Z";G.bodyPlainText="# Proof of concept \n\n## Use cases \n\nFor my prototype I made two services in a microservice architecture.\nThe fist service will serve as an auth service were the user can register and login  where he then gets back a bearer token.\nThe second service will serve as a database acces service where I can ask for a given article id. \n\n- As a user I want to be able to lookup an article by the id, given authenticated.\n- As a user I want to be able to register and get a verification \n- As a user I want to be able to login given I'm verified \n\n\nBoth services use their own database \n\nAn article is bases on various connections to other tables.\n\n\n\u003Ctable\u003E\n  \u003Ctr\u003E\n    \u003Ctd\u003EArticle service\u003C\u002Ftd\u003E\n    \u003Ctd\u003EAuth service\u003C\u002Ftd\u003E\n    \u003Ctd\u003EArchtecture\u003C\u002Ftd\u003E\n  \u003C\u002Ftr\u003E\n  \u003Ctr\u003E\n    \u003Ctd\u003E\n      \u003Ca href=\"\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Farticle.png\" target=\"_blank\" rel=\"some text\"\u003E\n        \u003Cimg width=\"100%\" src=\"\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Farticle.png\" alt=\"nmap\"\u002F\u003E\n      \u003C\u002Fa\u003E\n    \u003C\u002Ftd\u003E\n    \u003Ctd\u003E\n      \u003Ca href=\"\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Fauthservice.png\" target=\"_blank\" rel=\"some text\"\u003E\n        \u003Cimg width=\"100%\" src=\"\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Fauthservice.png\" alt=\"nmap\"\u002F\u003E\n      \u003C\u002Fa\u003E\n    \u003C\u002Ftd\u003E\n    \u003Ctd\u003E\n      \u003Ca href=\"\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Fstructure.png\" target=\"_blank\" rel=\"some text\"\u003E\n        \u003Cimg width=\"100%\" src=\"\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Fstructure.png\" alt=\"nmap\"\u002F\u003E\n      \u003C\u002Fa\u003E\n    \u003C\u002Ftd\u003E\n  \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\n\nboth services will be running on a nginx server with the two services not knowing about each other.\nHowever, they will both have an implementation for checking the jwt bearer token. Here, the two services share the same validation password.\n\n## Vulnerabilities\n[JWT cracking](https:\u002F\u002Fblog.pentesteracademy.com\u002Fhacking-jwt-tokens-bruteforcing-weak-signing-key-jwt-cracker-5d49d34c44) and brute forcing a password are popular methods to break into a system:\n\n\n\n\u003Ctable\u003E\n  \u003Ctr\u003E\n    \u003Ctd\u003EVulnerability\u003C\u002Ftd\u003E\n    \u003Ctd\u003ESolution\u003C\u002Ftd\u003E\n  \u003C\u002Ftr\u003E\n  \u003Ctr\u003E\n    \u003Ctd\u003EBrute force login when verified\u003C\u002Ftd\u003E\n    \u003Ctd\u003EDebounce \u002F save the number of incorrectly logins block on 3 for given ip \u002F CAPTCHA \u003C\u002Ftd\u003E\n  \u003C\u002Ftr\u003E\n  \u003Ctr\u003E\n    \u003Ctd\u003EModification of bearer token and extension of rights \u002F JWT-Cracking\u003C\u002Ftd\u003E\n    \u003Ctd\u003Eencrypted password\u003C\u002Ftd\u003E\n  \u003C\u002Ftr\u003E\n\u003C\u002Ftable\u003E\n\n## Links\n\nI produced a couple proof of concepts based on project I had to develop. \nMultiple learning exercises have been added to the application for this idea. \nBecause it's simply a proof of concept, a lot of features haven't been added yet. \nMy application may be seen here:\n\nAuthentication & Authorization: \n- https:\u002F\u002Fgithub.com\u002Frikp777\u002FRP-Flowcontrol\u002Ftree\u002Fmaster\u002Fauthservice \u003Cbr\u003E\nApi with hateoas hal: \n- https:\u002F\u002Fgithub.com\u002Frikp777\u002FRP-Flowcontrol\u002Ftree\u002Fmaster\u002Farticle \u003Cbr\u003E\nClient app in Vue.js and state management: \n- https:\u002F\u002Fgithub.com\u002Frikp777\u002FRP-Flowcontrol\u002Ftree\u002Fmaster\u002Fclient \u003Cbr\u003E\n";G.readingTime="2 min read";G.twitterShareUrl="https:\u002F\u002Ftwitter.com\u002Fintent\u002Ftweet";return {data:[{project:G,_img:X}],fetch:{"data-v-312258fc:0":{toastOptions:{duration:2000,theme:"bubble"},currentlyActiveToc:"",observer:v,observerOptions:{root:void 0,threshold:0},project:G,_img:X}},mutations:[["setItem",{item:v,id:H,resource:"comments"}]]}}("text","element","\n","\n    ","td","\n  ","p","a","_blank","li","\n      ","tr","true",-1,"span","icon","icon-link","ul","nofollow","noopener","noreferrer",null,2,"h2","nuxt-link","some","\n        ","img","100%","nmap"," ","br",{},"software-engineering_proof-of-concept","Proof of concept","use-cases","Use cases","vulnerabilities","Vulnerabilities","links","Links","table","tbody","\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Farticle.png","\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Fauthservice.png","\u002Fimages\u002Fprojects\u002Fsoftware-engineering\u002Fstructure.png","https:\u002F\u002Fgithub.com\u002Frikp777\u002FRP-Flowcontrol\u002Ftree\u002Fmaster\u002Fauthservice","https:\u002F\u002Fgithub.com\u002Frikp777\u002FRP-Flowcontrol\u002Ftree\u002Fmaster\u002Farticle","https:\u002F\u002Fgithub.com\u002Frikp777\u002FRP-Flowcontrol\u002Ftree\u002Fmaster\u002Fclient",{})));