<template>
    <div>
        <header id="menu2">
           <input type="text" placeholder="Search" v-if="closeSearch"/>
           <button class="closeBtn" @click="closeSearchMethods()" v-if="closeSearch"><img src="./assets/cancel.png"/></button>

           <span class="logo" v-if="openSearch" style="flex:5;"><img src="./assets/logo.png" width="50" height="50"/></span>
           <button class="openSearch" @click="openSearchMethods()" v-if="openSearch" style="flex:1;"><img src="./assets/search.png"/></button>
           <button class="openSearch"  @click="menu_ac = !menu_ac" v-if="openSearch" style="flex:1;"><img src="./assets/menu.png"/></button>
            <transition
                enter-class=""
                enter-active-class="animated shake"
                leave-class=""
                leave-active-class="animated fade">
            <header id="menu3" v-show="menu_ac">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> 
                </nav>
            </header>
            </transition>
        </header>

        

        <header id="menu1">
           <input type="text" placeholder="Search" v-if="closeSearch"/>
           <button class="closeBtn" @click="closeSearchMethods()" v-if="closeSearch"><img src="./assets/cancel.png"/></button>
           
           <span class="logo" v-if="openSearch"><img src="./assets/logo.png" width="50" height="50"/></span>
   
            <nav v-if="openSearch">
                <ul style="padding-top:15px !important;">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li class="contactX"><a href="#">Contact</a>
                      <ul class="menuX">
                          <li><a href="#">DENEME1</a></li>
                          <li><a href="#">DENEME2</a></li>
                          <li><a href="#">DENEME3</a></li>
                      </ul>
                    </li>
                </ul>
            </nav>

           <button class="openSearch" @click="openSearchMethods()" v-if="openSearch"><img src="./assets/search.png"/></button>
        </header>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
          closeSearch:false,
          openSearch:true,
          menu_ac:false,
        }
    },
    methods:{
        closeSearchMethods(){
           this.closeSearch=false,
           this.openSearch=true;
        },
        openSearchMethods(){
           this.closeSearch=true,
           this.openSearch=false;
        }

    }
}
</script>
<style>
body{
    margin:0;
    padding:0;
}
header{
    width:100%;
    height:70px;
    display:flex;
    position:sticky;
    z-index:999;
    top:0;
    justify-content: space-evenly;
    align-items: center;
    background-color:black;
    box-shadow: 2px 5px 15px rgba(0,0,0,1);
}
header > .logo{
    color:white;
    font-family:"montserrat",sans-serif;
    font-size:22px;
    text-indent:10%;
    
}
.openSearch{
    outline:none !important;
    border:none;
    background:none;
    color:white;   
}
header > nav > ul > li
{
    display:inline-block;
    margin-right:10px;
}
header > nav > ul > li > a{
    color:White;
    text-decoration:none;
    font-family: "montserrat",sans-serif;
    font-size:20px;
    transition:200ms ease-in-out;
}
header > nav > ul > li > a:hover{
    color:rgba(255,255,255,0.5) !important;
    transition: 200ms ease-in-out;
    text-decoration:none !important;
    font-family: "montserrat",sans-serif;
    font-size:20px;
}
::placeholder{
    font-size:30px;
    font-family:"montserrat",sans-serif;
}
input[type="text"]
{
    position:relative;
    width:100%;
    height:100%;
    outline:none !important;
    font-size:30px;
    font-family:"montserrat",sans-serif;
    text-indent:20px;
    color:grey; 
}
.closeBtn{
    position:absolute;
    z-index:999 !important;
    right:0%;
    outline:none !important;
    border:none;
    background:white;
    margin-right:1px;
    padding-right:20px;
}
#menu3 > nav > ul > li{
    display:block;
    margin-top:20px;
}
#menu2{position:relative;}
#menu3{
    height:300px;
    position:absolute;
    z-index:999;
    top:70px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
   transition: opacity 1s;
}
.fade-leave-active{
  transition: opacity 200ms;
  opacity:0;
}
.menuX{
    background-color: white;
    width:200px;
    border-radius:6px;
    box-shadow:2px 2px 5px rgba(0,0,0,1);
    padding: 0px;
}
.menuX > li {
    list-style: none;
    padding:5px 7.5px;
    transition:0.5s ease-out;
}
.menuX > li:hover {
    list-style: none;
    padding:5px 7.5px;
    background-color: rgba(0,0,0,0.05);
    transition:0.5s ease-out;
}
.menuX > li:hover > a  {
    transition:0.5s ease-out;
    margin-left:15px;
}
.menuX > li >a {
    color:black;
    font-size:10px;
    font-family:"montserrat",sans-serif;
    margin-left: 5px;
    text-decoration: none;
    transition:0.5s ease-out;
}
.menuX{
  position:absolute;
  display:none;
  top:35px;
  transition:1s;
}.contactX{
    position:relative;
    transition:1s;
}
.contactX:hover > .menuX{
    display:block;
}

@media (max-width:1024px)
{
  #menu1{
      display:none;
  }
}
@media (min-width:1025px)
{
  #menu2,#menu3{
      display:none;
  }
}
</style>