<template>
    <div>

         <!--Bootstrap-->
       <div class="container-fluid" style="background:rgba(0,0,0,0.96)">
        <div class="row text-center">
            <div class="col-12 col-md-8 bg-primary p-0">

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="/src/assets/iphone4.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item active">
                            <img src="/src/assets/iphone.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="/src/assets/iphone2.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-12 col-md-4">
                <div class="row">AA</div>
                <div class="row">AA</div>
            </div>
        </div>
        </div>
       

    </div>
</template>
<style>
body{
    margin:0;
    padding:0;
}
::-webkit-scrollbar {
   width: 10px !important;
}
::-webkit-scrollbar-track {
   background-color:white;
}
::-webkit-scrollbar-thumb {
  background: #2f3542 !important;
}
::-webkit-scrollbar-thumb:active {
  background: #57606f !important; 
}
.blackBox{
    width:100%;
    height:750px;
    align-items:center !important;
    background-color:transparent;
    margin:5% 1%;
    overflow:hidden;
}
.blackBox2{
    width:100%;
    height:375px;
    background:transparent;
}
@media (max-width:1024px)
{
    .blackBox{
        margin:0;
    }
}

</style>