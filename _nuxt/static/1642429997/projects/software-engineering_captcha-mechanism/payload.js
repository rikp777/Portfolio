__NUXT_JSONP__("/projects/software-engineering_captcha-mechanism", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){X.slug=Y;X.description="What are they and how are they used";X.id=Q;X.title=Z;X.duration="1 day";X.image="\u002Fimages\u002Fprojects\u002Fminor\u002Frecaptcha.png";X.tech=[{name:"captcha"}];X.category=[{name:"body of knowledge"},{name:"software-engineering"},{name:"cyber"},{name:"minor"}];X.author={name:"Rik Peeters",image:"\u002Fimages\u002Fme.jpg",social:{twitter:"rikp777"}};X.createdAt="2021-11-04T00:00:00.000Z";X.toc=[{id:_,depth:$,text:aa},{id:ab,depth:R,text:ac},{id:ad,depth:R,text:ae},{id:af,depth:R,text:ag},{id:ah,depth:$,text:ai}];X.body={type:"root",children:[{type:b,tag:aj,props:{id:"captcha-mechanism"},children:[{type:b,tag:i,props:{href:"#captcha-mechanism",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:Z}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"What exactly is a captcha? Why does the owner of the site want you to fill in such a captcha? The answer is actually quite simple: you have to prove that you are a human being!"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Scripts, which we also call bots or robots, are constantly scouring the Internet. Some of them provide information about a website to a search engine. But there are also bots that look for forms and fill them automatically with all kinds of garbage."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"To prevent this robot\u002Fbot from simply clicking the submit button, a captcha is placed in the middle. This must first be completed correctly before the form can be submitted."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Some examples of when to use a Captcha:"}]},{type:a,value:e},{type:b,tag:ak,props:{},children:[{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:v,props:{},children:[{type:a,value:"Maintaining poll accuracy"}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:v,props:{},children:[{type:a,value:"Limiting registration for services"}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:v,props:{},children:[{type:a,value:"Preventing ticket inflation"}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:v,props:{},children:[{type:a,value:"Preventing false comments"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"CAPTCHA stands for:"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"\"Completely Automated Public Turing test to tell Computers and Humans Apart.\""}]},{type:a,value:e},{type:b,tag:al,props:{id:_},children:[{type:b,tag:i,props:{href:"#types",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"There are several captchas that can be implemented now a day such as:"}]},{type:a,value:e},{type:b,tag:S,props:{id:ab},children:[{type:b,tag:i,props:{href:"#recaptcha-v3",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ac}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"reCAPTCHA v3 allows you to verify if an interaction is legitimate without any user interaction. It is a pure JavaScript API returning a score, giving you the ability to take action in the context of your site: for instance requiring additional factors of authentication, sending a post to moderation, or throttling bots that may be scraping content."}]},{type:a,value:e},{type:b,tag:S,props:{id:ad},children:[{type:b,tag:i,props:{href:"#recaptcha-v2",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ae}]},{type:a,value:e},{type:b,tag:T,props:{id:"visible"},children:[{type:b,tag:i,props:{href:"#visible",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"Visible"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The \"I'm not a robot\" Checkbox requires the user to click a checkbox indicating the user is not a robot. This will either pass the user immediately (with No CAPTCHA) or challenge them to validate whether or not they are human. This is the simplest option to integrate with and only requires two lines of HTML to render the checkbox."}]},{type:a,value:e},{type:b,tag:T,props:{id:"invisible"},children:[{type:b,tag:i,props:{href:"#invisible",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"Invisible"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The invisible reCAPTCHA badge does not require the user to click on a checkbox, instead it is invoked directly when the user clicks on an existing button on your site or can be invoked via a JavaScript API call. The integration requires a JavaScript callback when reCAPTCHA verification is complete. By default only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit your site security preference under advanced settings."}]},{type:a,value:e},{type:b,tag:S,props:{id:af},children:[{type:b,tag:i,props:{href:"#visual-captchas-v1",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ag}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In many cases the captchas are based on text, number combinations and characters that are difficult to recognize. A capcha is build a way that one user will never get the same captcha twice. There are also captchas that ask the user questions there are multiple types of question but most of them are based on image recognition. For example click all taxi's in the box below. Some characteristics are:"}]},{type:a,value:e},{type:b,tag:ak,props:{},children:[{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Letters and numbers are usually not nicely juxtaposed, but scattered across the screen."}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"The characters are not nicely straight, but rotated."}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Different fonts (typefaces) are used."}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"A background image or different colors are used; almost never 1 color."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"v1 is not supported anymore since 2018 despite that many site still have this implementation. This implementation of captchas also ranked as most irritating among people. That's why there are new versions today that thoroughly address this problem."}]},{type:a,value:e},{type:b,tag:al,props:{id:ah},children:[{type:b,tag:i,props:{href:"#implementation",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ai}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The first step is the simplest. Go to the "},{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.google.com\u002Frecaptcha\u002Fintro\u002Findex.html",rel:[G,H,I],target:J},children:[{type:a,value:"reCAPTCHA homepage "}]},{type:a,value:"and click on the "},{type:b,tag:B,props:{},children:[{type:a,value:"Get reCAPTCHA"}]},{type:a,value:" button at the top of the screen. On the next screen, you’ll find a prompt to enter a label and domain for your site, so you can identify it among your reCAPTCHA properties."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Populate both fields, click on "},{type:b,tag:B,props:{},children:[{type:a,value:"Register"}]},{type:a,value:", and you’re done. On the next screen, you’ll receive both a "},{type:b,tag:B,props:{},children:[{type:a,value:"Site Key"}]},{type:a,value:" and a "},{type:b,tag:B,props:{},children:[{type:a,value:"Secret Key"}]},{type:a,value:C}]},{type:a,value:e},{type:b,tag:T,props:{id:"front-end"},children:[{type:b,tag:i,props:{href:"#front-end",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"Front-end"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"To use reCaptcha I followed the documentation steps, but with the help of a package from yarn to vue, "},{type:b,tag:v,props:{},children:[{type:a,value:"vue-recaptcha"}]},{type:a,value:", which provides me with a basically ready component, just implement it and capture the event from validation you can see more about it"}]},{type:a,value:e},{type:b,tag:U,props:{id:"instalation"},children:[{type:b,tag:i,props:{href:"#instalation",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"Instalation"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"yarn add vue-recaptcha-v3\nyarn add axios"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In my "},{type:b,tag:v,props:{},children:[{type:a,value:"app.js"}]},{type:a,value:" where I store my environment variables I will set the site key and url of my api, which in this case will be running on localhost"}]},{type:a,value:e},{type:b,tag:am,props:{className:[an]},children:[{type:b,tag:ao,props:{className:[ap,"language-javascript"]},children:[{type:b,tag:aq,props:{},children:[{type:b,tag:c,props:{className:[d,n,K]},children:[{type:a,value:ar}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,as]},children:[{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:V}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,K]},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'vue'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,n,K]},children:[{type:a,value:ar}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,as]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:au}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,K]},children:[{type:a,value:at}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'vue-recaptcha-v3'"}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,M,E,N]},children:[{type:a,value:"use"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,W,r]},children:[{type:a,value:"siteKey"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'\u003Csite key\u003E'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"new"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,W,r]},children:[{type:a,value:"methods"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"async"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"recaptcha"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F (optional) Wait until recaptcha has been loaded."}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,n,ay]},children:[{type:a,value:az}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,M,E,N]},children:[{type:a,value:"$recaptchaLoaded"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Execute reCAPTCHA with action \"login\"."}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"const"}]},{type:a,value:" token "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,ay]},children:[{type:a,value:az}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,M,E,N]},children:[{type:a,value:"$recaptcha"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'login'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Do stuff with the received token."}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,aC,aw]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,M,E,N]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:d},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F Will print the token"}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,W,r]},children:[{type:a,value:"template"}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"'\u003Cbutton @click=\"recaptcha\"\u003EExecute recaptcha\u003C\u002Fbutton\u003E'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Each reCAPTCHA user response token is valid for two minutes, and can only be verified "},{type:b,tag:B,props:{},children:[{type:a,value:"once"}]},{type:a,value:" to prevent replay attacks. If you need a new token, you can re-run the reCAPTCHA verification."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"After you get the response token, you need to verify it within two minutes with reCAPTCHA using the following API to ensure the token is valid."}]},{type:a,value:e},{type:b,tag:U,props:{id:"api-request"},children:[{type:b,tag:i,props:{href:"#api-request",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"API Request"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"URL: "},{type:b,tag:i,props:{href:aD,rel:[G,H,I],target:J},children:[{type:a,value:aD}]},{type:a,value:" \t\t\t\tMETHOD: POST"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:P,props:{},children:[{type:b,tag:aE,props:{align:q},children:[{type:a,value:"OST Parameter"}]},{type:b,tag:aE,props:{align:q},children:[{type:a,value:"Description"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:P,props:{},children:[{type:b,tag:A,props:{align:q},children:[{type:a,value:"secret"}]},{type:b,tag:A,props:{align:q},children:[{type:a,value:"Required. The shared key between your site and reCAPTCHA."}]}]},{type:b,tag:P,props:{},children:[{type:b,tag:A,props:{align:q},children:[{type:a,value:"response"}]},{type:b,tag:A,props:{align:q},children:[{type:a,value:"Required. The user response token provided by the reCAPTCHA client-side integration on your site."}]}]},{type:b,tag:P,props:{},children:[{type:b,tag:A,props:{align:q},children:[{type:a,value:"remoteip"}]},{type:b,tag:A,props:{align:q},children:[{type:a,value:"Optional. The user's IP address."}]}]}]}]},{type:a,value:e},{type:b,tag:U,props:{id:"api-response"},children:[{type:b,tag:i,props:{href:"#api-response",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"API Response"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The response is a JSON object:"}]},{type:a,value:e},{type:b,tag:am,props:{className:[an]},children:[{type:b,tag:ao,props:{className:[ap,"language-json"]},children:[{type:b,tag:aq,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\"success\""}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:j}]},{type:a,value:"|"},{type:b,tag:c,props:{className:[d,aF]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\"challenge_ts\""}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:" timestamp"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\"hostname\""}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:" string"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:"         "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F the hostname of the site where the reCAPTCHA was solved"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\"error-codes\""}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:"..."},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:a,value:"        "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\u002F\u002F optional"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Despite being under constant attack, CAPTCHAs remain a "},{type:b,tag:i,props:{href:"https:\u002F\u002Ftrends.builtwith.com\u002Fwidgets\u002Fcaptcha",rel:[G,H,I],target:J},children:[{type:a,value:"wildly popular"}]},{type:a,value:" method of protection for websites. They’re definitely not the "},{type:b,tag:i,props:{href:"http:\u002F\u002Fwww.creativebloq.com\u002Fweb-design\u002Fwebsite-security-tips-protect-your-site-7122853",rel:[G,H,I],target:J},children:[{type:a,value:"only defense"}]},{type:a,value:" you can implement, but they are one of the simplest and most efficient."}]},{type:a,value:e},{type:b,tag:aj,props:{id:"evaluation"},children:[{type:b,tag:i,props:{href:"#evaluation",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"Evaluation"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"I have come to know a lot about captcha for example i did not know that there were already newer versions available that eliminates the need to manually enter characters. This makes it much easier for the user and prevents Irritations especially with me personally. Overall I found it a very interesting topic."}]}]};X.dir="\u002Fprojects\u002Fsoftware-engineering";X.path="\u002Fprojects\u002Fsoftware-engineering\u002Fcaptcha-mechanism";X.extension=".md";X.updatedAt="2022-01-17T14:31:12.968Z";X.bodyPlainText="\n# Captcha Mechanism \n\nWhat exactly is a captcha? Why does the owner of the site want you to fill in such a captcha? The answer is actually quite simple: you have to prove that you are a human being!\n\nScripts, which we also call bots or robots, are constantly scouring the Internet. Some of them provide information about a website to a search engine. But there are also bots that look for forms and fill them automatically with all kinds of garbage.\n\nTo prevent this robot\u002Fbot from simply clicking the submit button, a captcha is placed in the middle. This must first be completed correctly before the form can be submitted.\n\nSome examples of when to use a Captcha:\n\n- **Maintaining poll accuracy**\n- **Limiting registration for services**\n- **Preventing ticket inflation**\n- **Preventing false comments**\n\nCAPTCHA stands for: \n\n\"Completely Automated Public Turing test to tell Computers and Humans Apart.\"\n\n## Types\n\nThere are several captchas that can be implemented now a day such as:\n\n### reCAPTCHA v3\n\nreCAPTCHA v3 allows you to verify if an interaction is legitimate without any user interaction. It is a pure JavaScript API returning a score, giving you the ability to take action in the context of your site: for instance requiring additional factors of authentication, sending a post to moderation, or throttling bots that may be scraping content.\n\n### reCAPTCHA (v2)\n\n#### Visible \n\nThe \"I'm not a robot\" Checkbox requires the user to click a checkbox indicating the user is not a robot. This will either pass the user immediately (with No CAPTCHA) or challenge them to validate whether or not they are human. This is the simplest option to integrate with and only requires two lines of HTML to render the checkbox.\n\n#### Invisible \n\nThe invisible reCAPTCHA badge does not require the user to click on a checkbox, instead it is invoked directly when the user clicks on an existing button on your site or can be invoked via a JavaScript API call. The integration requires a JavaScript callback when reCAPTCHA verification is complete. By default only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit your site security preference under advanced settings.\n\n### Visual captchas (v1)\n\nIn many cases the captchas are based on text, number combinations and characters that are difficult to recognize. A capcha is build a way that one user will never get the same captcha twice. There are also captchas that ask the user questions there are multiple types of question but most of them are based on image recognition. For example click all taxi's in the box below. Some characteristics are:\n\n- Letters and numbers are usually not nicely juxtaposed, but scattered across the screen.\n- The characters are not nicely straight, but rotated.\n- Different fonts (typefaces) are used.\n- A background image or different colors are used; almost never 1 color.\n\nv1 is not supported anymore since 2018 despite that many site still have this implementation. This implementation of captchas also ranked as most irritating among people. That's why there are new versions today that thoroughly address this problem.\n\n## Implementation \n\nThe first step is the simplest. Go to the [reCAPTCHA homepage ](https:\u002F\u002Fwww.google.com\u002Frecaptcha\u002Fintro\u002Findex.html)and click on the *Get reCAPTCHA* button at the top of the screen. On the next screen, you’ll find a prompt to enter a label and domain for your site, so you can identify it among your reCAPTCHA properties.\n\nPopulate both fields, click on *Register*, and you’re done. On the next screen, you’ll receive both a *Site Key* and a *Secret Key*.\n\n\n\n#### Front-end\n\nTo use reCaptcha I followed the documentation steps, but with the help of a package from yarn to vue, **vue-recaptcha**, which provides me with a basically ready component, just implement it and capture the event from validation you can see more about it\n\n##### Instalation\n\nyarn add vue-recaptcha-v3\nyarn add axios\n\nIn my **app.js** where I store my environment variables I will set the site key and url of my api, which in this case will be running on localhost\n\n```javascript\nimport Vue from 'vue'\nimport { VueReCaptcha } from 'vue-recaptcha-v3'\n\nVue.use(VueReCaptcha, { siteKey: '\u003Csite key\u003E' })\n\nnew Vue({\n  methods: {\n    async recaptcha() {\n      \u002F\u002F (optional) Wait until recaptcha has been loaded.\n      await this.$recaptchaLoaded()\n\n      \u002F\u002F Execute reCAPTCHA with action \"login\".\n      const token = await this.$recaptcha('login')\n\n      \u002F\u002F Do stuff with the received token.\n      console.log(token) \u002F\u002F Will print the token\n    }\n  },\n  template: '\u003Cbutton @click=\"recaptcha\"\u003EExecute recaptcha\u003C\u002Fbutton\u003E'\n})\n```\n\nEach reCAPTCHA user response token is valid for two minutes, and can only be verified *once* to prevent replay attacks. If you need a new token, you can re-run the reCAPTCHA verification.\n\nAfter you get the response token, you need to verify it within two minutes with reCAPTCHA using the following API to ensure the token is valid.\n\n##### API Request\n\nURL: https:\u002F\u002Fwww.google.com\u002Frecaptcha\u002Fapi\u002Fsiteverify \t\t\t\tMETHOD: POST\n\n| OST Parameter | Description                                                  |\n| :------------ | :----------------------------------------------------------- |\n| secret        | Required. The shared key between your site and reCAPTCHA.    |\n| response      | Required. The user response token provided by the reCAPTCHA client-side integration on your site. |\n| remoteip      | Optional. The user's IP address.                             |\n\n##### API Response \n\nThe response is a JSON object:\n\n```json\n{\n  \"success\": true|false,\n  \"challenge_ts\": timestamp,  \u002F\u002F timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)\n  \"hostname\": string,         \u002F\u002F the hostname of the site where the reCAPTCHA was solved\n  \"error-codes\": [...]        \u002F\u002F optional\n}\n```\n\n\n\nDespite being under constant attack, CAPTCHAs remain a [wildly popular](https:\u002F\u002Ftrends.builtwith.com\u002Fwidgets\u002Fcaptcha) method of protection for websites. They’re definitely not the [only defense](http:\u002F\u002Fwww.creativebloq.com\u002Fweb-design\u002Fwebsite-security-tips-protect-your-site-7122853) you can implement, but they are one of the simplest and most efficient.\n\n# Evaluation \n\nI have come to know a lot about captcha for example i did not know that there were already newer versions available that eliminates the need to manually enter characters. This makes it much easier for the user and prevents Irritations especially with me personally. Overall I found it a very interesting topic.\n";X.readingTime="5 min read";X.twitterShareUrl="https:\u002F\u002Ftwitter.com\u002Fintent\u002Ftweet";return {data:[{project:X,_img:aG}],fetch:{"data-v-7551e893:0":{toastOptions:{duration:2000,theme:"bubble"},currentlyActiveToc:"",observer:Q,observerOptions:{root:void 0,threshold:0},project:X,_img:aG}},mutations:[["setItem",{item:Q,id:Y,resource:"comments"}]]}}("text","element","span","token","\n","punctuation","p"," ","a","true",-1,"icon","icon-link","keyword","li","operator","left","property",":","\n  ","comment","strong","{","}","(",")","td","em",".","string","function",",","nofollow","noopener","noreferrer","_blank","module","maybe-class-name","method","property-access","\n      ","tr",null,3,"h3","h4","h5","Vue","literal-property",{},"software-engineering_captcha-mechanism","Captcha Mechanism","types",2,"Types","recaptcha-v3","reCAPTCHA v3","recaptcha-v2","reCAPTCHA (v2)","visual-captchas-v1","Visual captchas (v1)","implementation","Implementation","h1","ul","h2","div","nuxt-content-highlight","pre","line-numbers","code","import","imports","from","VueReCaptcha","\n\n","class-name","\n    ","control-flow","await","this","\n\n      ","console","https:\u002F\u002Fwww.google.com\u002Frecaptcha\u002Fapi\u002Fsiteverify","th","boolean",{})));