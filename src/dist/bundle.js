!function(){"use strict";function e(e){return document.getElementById(e)}const t=new class{constructor(){this.crosses=document.querySelectorAll("span.cross"),this.modal=e("modal"),this.title=e("modal__body__title"),this.img=e("img"),this.desc=e("modal__body__description"),this.tech=e("modal__body__technologies"),this.repositoryPage=e("modal__body__repository-page"),this.demoPage=e("modal__body__demo-page"),window.document.addEventListener("keyup",(({key:e})=>{"Escape"==e&&this.close()})),document.createElement("span"),console.log(typeof this.crosses);for(const e of this.crosses)e.onclick=()=>this.close()}update(e){this.title.innerText=e.name,this.desc.innerText=e.description,this.tech.innerText=e.technologies.map((e=>"#"+e)).join(" "),this.repositoryPage.innerText="Repository",this.repositoryPage.href=e.githubRepoUrl,this.demoPage.style.display="none",e.githubPageUrl&&(this.demoPage.innerText="DemoPage",this.demoPage.href=e.githubPageUrl,this.demoPage.style.display="inline"),this.setImage(e.images[0]),this.open()}setImage(e){this.img.style.backgroundImage=`url('${e}')`}open(){this.modal.classList.remove("fade-out"),this.modal.classList.add("fade-in")}close(){this.modal.classList.add("fade-out")}};function i(e,t){const i=document.getElementById("folder"),a=Object.assign(document.createElement("div"),{className:"project",innerHTML:e.name,onclick:()=>t(e)});console.log(e.images[0]),a.style.setProperty("background-image",`url('${e.images[0]}')`),i.appendChild(a)}const a=["InstaClon","Replace px for rem","Chat Server","Dog team"],s=[{name:"ClickArt",githubRepoUrl:"https://github.com/Soni295/ClickArt",images:["ClickArt01.jpg","ClickArt02.jpg","ClickArt03.jpg"],githubPageUrl:"https://soni295.github.io/ClickArt/",technologies:["JavaScript","Css","Html","React","Axios","Bootstrap","React-Router-Dom","Socket.io","Express","MySql","Nodejs","Bcrypt","Jest"],description:"It is a rest full api art gallery style page where you can post images and search by artist title and drawing."},{name:"Snake Game",githubRepoUrl:"https://github.com/Soni295/Snake-Game",images:["SnakeGame01.jpg","SnakeGame02.jpg"],githubPageUrl:"https://soni295.github.io/Snake-Game",technologies:["JavaScript","TypeScript","Css","Html","Node","Express"],description:"It's the snake game works by listening to browser events"},{name:"InstaClon",githubRepoUrl:"https://github.com/Soni295/InstaClon",images:["example.jpg"],githubPageUrl:null,technologies:["JavaScript"],description:"it is an instagram clone web with backend"},{name:"Replace px for rem",githubRepoUrl:"https://github.com/Soni295/ReplacePxForRem",images:["example.jpg"],githubPageUrl:null,technologies:["JavaScript"],description:"It is a tool that you create to change all the values of a px repository for their equivalence in rem"},{name:"Chat Server",githubRepoUrl:"https://github.com/Soni295/Chat-ts",images:["example.jpg"],githubPageUrl:null,technologies:["JavaScript"],description:"It is a group chat room. testing typescript"},{name:"Dog team",githubRepoUrl:"https://github.com/Soni295/dog-team",images:["example.jpg"],githubPageUrl:null,technologies:["JavaScript"],description:"It is a page with can search breed of dog and save some in a storage"},{name:"Princing Toggle",githubRepoUrl:"https://github.com/Soni295/Princing-Toggle",images:["PricingToggle01.jpg","PricingToggle02.jpg","PricingToggle03.jpg"],githubPageUrl:null,technologies:["JavaScript","Css","Html","React"],description:"Sort practice with react"},{name:"Easybank landing page",githubRepoUrl:"https://github.com/Soni295/Easybank-landing-page",images:["EasyBank01.jpg","EasyBank02.jpg","EasyBank03.jpg","EasyBank04.jpg","EasyBank05.jpg","EasyBank06.jpg","EasyBank07.jpg"],githubPageUrl:null,technologies:["JavaScript","Sass","Css","Html"],description:"It is a landing page for practice sass"}].map((e=>(e.images=e.images.map((e=>`./src/img/${e}`)),e))).filter((e=>!a.includes(e.name)));for(const e of s)i(e,t.update.bind(t));e("copyright").innerHTML=`Sion Ramos de los Santos © ${(new Date).getFullYear()}`}();
