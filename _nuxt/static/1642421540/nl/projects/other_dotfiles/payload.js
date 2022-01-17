__NUXT_JSONP__("/nl/projects/other_dotfiles", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){o.slug=p;o.description="Why it is important to keep your .dotfiles safe.";o.id=m;o.title="Dotfiles";o.duration="1 whole day in total";o.image="\u002Fimages\u002Fprojects\u002Fother\u002Fdotfiles.png";o.tech=[{name:"linux"},{name:q}];o.category=[{name:"body of knowledge"},{name:"minor"}];o.author={name:"Rik Peeters",image:"\u002Fimages\u002Fme.jpg",social:{twitter:"rikp777"}};o.github="https:\u002F\u002Fgithub.com\u002Frikp777\u002F.dotfiles";o.createdAt="2021-12-07T00:00:00.000Z";o.toc=[{id:r,depth:2,text:s},{id:t,depth:3,text:u}];o.body={type:"root",children:[{type:b,tag:v,props:{id:"dotfiles"},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#dotfiles",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dotfiles are plain text configuration files on Unix-y systems for things like our shell, "},{type:b,tag:e,props:{},children:[{type:a,value:"~\u002F.zshrc"}]},{type:a,value:", our editor in "},{type:b,tag:e,props:{},children:[{type:a,value:"~\u002F.vimrc"}]},{type:a,value:", and many others. They are called \"dotfiles\" as they typically are named with a leading "},{type:b,tag:e,props:{},children:[{type:a,value:"."}]},{type:a,value:" making them hidden files on your system, although this is not a strict requirement."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since these files are all plain text, we can gather them together in a git repository and use that to track the changes you make over time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ideally, you store your personal files not on your machine only. If you have your files on either local drives (e.g. USB drive, NAS) or in the cloud (Dropbox, Google Docs, iCloud, etc., etc.), you save yourself from the risks of machine theft, damage, or hardware failure."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now your documents, photos, etc. are kind of safe. Still, if you ever have to setup a system, you need to install every single application again. I can’t count the times I needed to find the application’s download page, download, install. Next. Next. Again. You forgot one. One more."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So, how awesome is it that we can automate all this? You may not realize it, but most system tools, applications and settings can be installed in an automated fashion. I don’t know about you, but this is like music to my ears!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Today, I could literally throw my laptop out of the window, buy a new one, and be up and running in a matter of minutes."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It’s pretty simple to get started. You need to organize your dotfiles in some directory. You could do this practically anywhere, like a USB drive or something. Since version control is great, a hosted git repository like GitHub is a great option to store your dotfiles."}]},{type:a,value:c},{type:b,tag:v,props:{id:"github--"},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#github--",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"GitHub ❤ "},{type:b,tag:e,props:{},children:[{type:a,value:"~\u002F"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Why would I want my dotfiles on GitHub?"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Backup"}]},{type:a,value:" "},{type:b,tag:f,props:{},children:[{type:a,value:"restore"}]},{type:a,value:", and "},{type:b,tag:f,props:{},children:[{type:a,value:"sync"}]},{type:a,value:" the prefs and settings for your toolbox. Your dotfiles might be the most important files on your machine."}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Learn"}]},{type:a,value:" from the community. Discover new tools for your toolbox and new tricks for the ones you already use."}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Share"}]},{type:a,value:" what you’ve learned with the rest of us."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h2",props:{id:r},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#structure",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Below is the structure of my dotfiles repo. It’s also what we’ll use in our walk-through below."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"📂 .\n\n├── 📁 git\n|  ├── 🌑 .gitconfig\n│  └── 🌑 .gitignore_gobal\n├── 📂 nvim\n│  └── 📂 .config\n└── 🌑 install.sh\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"by default no such directory exist within your system so you will have to create one your own in you root directory. "},{type:b,tag:e,props:{},children:[{type:a,value:"mkdir .dotfiles"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"when created you can move your configuration files to the folder you just created but be warned you need to follow the folder struture above so for every configuration you want to store you need to make a directory with its name. But because you now moved your files your settings will not be in the right directory anymore so all programs that use those settings are broken. But now we are going to restore those links. This we are going to do by GNU Stow."}]},{type:a,value:c},{type:b,tag:"h3",props:{id:t},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#about-gnu-stow",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GNU Stow describes itself as a \"symlink farm manager\", but in practical terms it's just a prgram that can mirror the structure of one directory into another by creating symbolic links back to the original files"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is extremely useful when you have a directory full of configuration files that is managed by Git and you want to send all of those configuration files to where they belong in you home directory."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GNU Stow walks the file and directory hiearch of the directory passes as the first aparameter to the stow command and creates symbolic links to those files in the equivalent location in the target directory."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The important thing to be ware of here is that our dotfiles directory must have the same layout as where the files would be placed under the home directory. This means you will need to have quivalent subdirectory structure in you dotfiles folder so that all symoblic lniks get created in the right place."}]}]};o.dir="\u002Fprojects\u002Fother";o.path="\u002Fprojects\u002Fother\u002Fdotfiles";o.extension=".md";o.updatedAt="2022-01-17T12:10:17.678Z";o.bodyPlainText="\n# .dotfiles\n\nDotfiles are plain text configuration files on Unix-y systems for things like our shell, `~\u002F.zshrc`, our editor in `~\u002F.vimrc`, and many others. They are called \"dotfiles\" as they typically are named with a leading `.` making them hidden files on your system, although this is not a strict requirement.\n\nSince these files are all plain text, we can gather them together in a git repository and use that to track the changes you make over time.\n\nIdeally, you store your personal files not on your machine only. If you have your files on either local drives (e.g. USB drive, NAS) or in the cloud (Dropbox, Google Docs, iCloud, etc., etc.), you save yourself from the risks of machine theft, damage, or hardware failure.\n\nNow your documents, photos, etc. are kind of safe. Still, if you ever have to setup a system, you need to install every single application again. I can’t count the times I needed to find the application’s download page, download, install. Next. Next. Again. You forgot one. One more.\n\nSo, how awesome is it that we can automate all this? You may not realize it, but most system tools, applications and settings can be installed in an automated fashion. I don’t know about you, but this is like music to my ears!\n\nToday, I could literally throw my laptop out of the window, buy a new one, and be up and running in a matter of minutes.\n\nIt’s pretty simple to get started. You need to organize your dotfiles in some directory. You could do this practically anywhere, like a USB drive or something. Since version control is great, a hosted git repository like GitHub is a great option to store your dotfiles.\n\n# GitHub ❤ `~\u002F`\n\nWhy would I want my dotfiles on GitHub?\n\n- **Backup** **restore**, and **sync** the prefs and settings for your toolbox. Your dotfiles might be the most important files on your machine.\n- **Learn** from the community. Discover new tools for your toolbox and new tricks for the ones you already use.\n- **Share** what you’ve learned with the rest of us.\n\n## Structure\n\nBelow is the structure of my dotfiles repo. It’s also what we’ll use in our walk-through below.\n\n```\n📂 .\n\n├── 📁 git\n|  ├── 🌑 .gitconfig\n│  └── 🌑 .gitignore_gobal\n├── 📂 nvim\n│  └── 📂 .config\n└── 🌑 install.sh\n```\n\nby default no such directory exist within your system so you will have to create one your own in you root directory. ```mkdir .dotfiles```\n\nwhen created you can move your configuration files to the folder you just created but be warned you need to follow the folder struture above so for every configuration you want to store you need to make a directory with its name. But because you now moved your files your settings will not be in the right directory anymore so all programs that use those settings are broken. But now we are going to restore those links. This we are going to do by GNU Stow.\n\n### About GNU Stow\n\nGNU Stow describes itself as a \"symlink farm manager\", but in practical terms it's just a prgram that can mirror the structure of one directory into another by creating symbolic links back to the original files \n\nThis is extremely useful when you have a directory full of configuration files that is managed by Git and you want to send all of those configuration files to where they belong in you home directory. \n\nGNU Stow walks the file and directory hiearch of the directory passes as the first aparameter to the stow command and creates symbolic links to those files in the equivalent location in the target directory. \n\nThe important thing to be ware of here is that our dotfiles directory must have the same layout as where the files would be placed under the home directory. This means you will need to have quivalent subdirectory structure in you dotfiles folder so that all symoblic lniks get created in the right place. \n";o.readingTime="4 min read";o.twitterShareUrl="https:\u002F\u002Ftwitter.com\u002Fintent\u002Ftweet";return {data:[{project:o,_img:w}],fetch:{"data-v-7551e893:0":{toastOptions:{duration:2000,theme:"bubble"},currentlyActiveToc:"",observer:m,observerOptions:{root:void 0,threshold:0},project:o,_img:w}},mutations:[["setItem",{item:m,id:p,resource:"comments"}]]}}("text","element","\n","p","code","strong","a","true",-1,"span","icon","icon-link",null,"li",{},"other_dotfiles",".dotfiles","structure","Structure","about-gnu-stow","About GNU Stow","h1",{})));