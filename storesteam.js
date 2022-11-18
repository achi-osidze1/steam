console.log("Welcome To Steam!");

var menu = document.querySelector(".hamburger")
var ul1 = document.querySelector(".ul1")
var link = document.querySelectorAll("#link")

menu.addEventListener("click", () =>{
    menu.classList.toggle("active")
    ul1.classList.toggle("active")
})

link.forEach(l => l.addEventListener("click", function(){
    menu.classList.remove("active")
    ul1.classList.remove("active")
}))

var gta = document.querySelector("#gta")
var gtaimg1 = document.querySelector(".gtaimg1")
var gtaimg2 = document.querySelector(".gtaimg2")
var gtaimg3 = document.querySelector(".gtaimg3")
var gtaimg4 = document.querySelector(".gtaimg4")

gtaimg1.addEventListener("mousemove",function(){
    gta.src = "https://cdn.wallpapersafari.com/92/33/Kru0Co.jpg"
})

gtaimg1.addEventListener("mouseleave",function(){
    gta.src = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
})

gtaimg2.addEventListener("mousemove",function(){
    gta.src = "https://wallpaper.dog/large/17185210.jpg" 
})

gtaimg2.addEventListener("mouseleave",function(){
    gta.src = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
})

gtaimg3.addEventListener("mousemove",function(){
    gta.src = "https://cdn.wallpapersafari.com/77/41/QfnpT5.jpg"
})

gtaimg3.addEventListener("mouseleave",function(){
    gta.src = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
})

gtaimg4.addEventListener("mousemove",function(){
    gta.src = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/9/91/GTAV.PS4.1080P.804.jpg?width=640" 
})

gtaimg4.addEventListener("mouseleave",function(){
    gta.src = "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
})


var cod = document.querySelector("#cod")
var codimg1 = document.querySelector(".codimg1")
var codimg2 = document.querySelector(".codimg2")
var codimg3 = document.querySelector(".codimg3")
var codimg4 = document.querySelector(".codimg4")

codimg1.addEventListener("mousemove",function(){
    cod.src = "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/home/reveal/new-era/new_era-mw2.jpg"
})

codimg1.addEventListener("mouseleave",function(){
    cod.src = "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg"   
})

codimg2.addEventListener("mousemove",function(){
    cod.src = "https://cdn.mos.cms.futurecdn.net/HamjfpRN4CfNUE3AKBMFVP.jpg"
})

codimg2.addEventListener("mouseleave",function(){
    cod.src = "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg"   
})

codimg3.addEventListener("mousemove",function(){
    cod.src = "https://www.nme.com/wp-content/uploads/2022/06/Modern-Warfare-2-preview-2000x1270-1.jpg"
})

codimg3.addEventListener("mouseleave",function(){
    cod.src = "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg"   
})

codimg4.addEventListener("mousemove",function(){
    cod.src = "https://progameguides.com/wp-content/uploads/2022/06/featured-Call-of-Duty-Modern-Warfare-2-all-pre-order-bonuses.jpg"
})

codimg4.addEventListener("mouseleave",function(){
    cod.src = "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg"   
})


var spd = document.querySelector("#spd")
var spdimg1 = document.querySelector(".spdimg1")
var spdimg2 = document.querySelector(".spdimg2")
var spdimg3 = document.querySelector(".spdimg3")
var spdimg4 = document.querySelector(".spdimg4")

spdimg1.addEventListener("mousemove",function(){
    spd.src = "https://cdn.akamai.steamstatic.com/steam/apps/1817070/ss_e425f5f97ece3ab8cfa09747dafeac2dd44a9b29.1920x1080.jpg?t=1660316394"
})

spdimg1.addEventListener("mouseleave",function(){
    spd.src = "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808"   
})

spdimg2.addEventListener("mousemove",function(){
    spd.src = "https://cdn.akamai.steamstatic.com/steam/apps/1817070/ss_ad14a7daa190cb150fbb070afc70bc64d66a5e2e.1920x1080.jpg?t=1660316394"
})

spdimg2.addEventListener("mouseleave",function(){
    spd.src = "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808"   
})

spdimg3.addEventListener("mousemove",function(){
    spd.src = "https://cdn.akamai.steamstatic.com/steam/apps/1817070/ss_dfe778bf6d66e952e4acd4e1f926f7615b609ddf.1920x1080.jpg?t=1660316394"
})

spdimg3.addEventListener("mouseleave",function(){
    spd.src = "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808"   
})

spdimg4.addEventListener("mousemove",function(){
    spd.src = "https://img.game8.co/3556246/b5314f73cd3dc42dfc45e854aba456d1.png/show"
})

spdimg4.addEventListener("mouseleave",function(){
    spd.src = "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808"   
})

var game1 = document.querySelector(".game1")
var game2 = document.querySelector(".game2")
var game3 = document.querySelector(".game3")
var game4 = document.querySelector(".game4")
var game5 = document.querySelector(".game5")
var h3 = document.querySelector(".h3")
var img1 = document.querySelector("#img1")
var img2 = document.querySelector("#img2")
var img3 = document.querySelector("#img3")


game1.addEventListener("mousemove",function(){
    img1.src = "http://www.co-optimus.com/images/upload/image/reviews/Payday2/Payday2_04.jpg"
    img2.src = "https://www.allkeyshop.com/blog/wp-content/uploads/payday-2-game-image-02.jpg"
    img3.src = "https://fpschampion.com/wp-content/uploads/2022/08/Best-Melee-Build-in-Payday-2-768x432.png"
    h3.innerHTML = "Payday 2"
})

game2.addEventListener("mousemove",function(){
    img1.src = "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/home/reveal/new-era/new_era-features.jpg"
    img2.src = "https://i.computer-bild.de/imgs/1/4/3/8/9/8/0/3/cod-mw2-kampagne-1-1f0684bad805859a.jpg"
    img3.src = "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/mwii/MWII-002-REVEAL-001.jpg"
    h3.innerHTML = "Call Of Duty: Modern Warfare II"
})

game3.addEventListener("mousemove",function(){
    img1.src = "https://gmedia.playstation.com/is/image/SIEPDC/fifa-23-hypermotion-2-screen-01-ps4-ps5-en-12jul22?$native$"
    img2.src = "https://bilder.pcwelt.de/4352609_original.jpg"
    img3.src = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltcc619f9a812d71e7/62e00ceb38254f3cb093e3cb/Kylian_Mbapp%C3%A9_FIFA_23_(1).jpg"
    h3.innerHTML = "EA SPORTS FIFA 23"
})

game4.addEventListener("mousemove",function(){
    img1.src = "https://unrealitymag.com/wp-content/uploads/2019/11/Need-for-Speed-Heat.jpg"
    img2.src = "https://assets.reedpopcdn.com/need-for-speed-heat-review-a-slight-return-to-form-for-the-series-1573199910704.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/need-for-speed-heat-review-a-slight-return-to-form-for-the-series-1573199910704.jpg"
    img3.src = "https://images.pushsquare.com/a47b0fdad637f/need-for-speed-heat.large.jpg"
    h3.innerHTML = "Need For Speed Heat"
})

game5.addEventListener("mousemove",function(){
    img1.src = "https://sm.ign.com/t/ign_es/photo/default/grand-theft-auto-v-3-4-2022-image-2-1646403160485_da53.1280.jpg"
    img2.src = "https://bi.im-g.pl/im/a8/e7/10/z17725864V,Grand-Theft-Auto-V.jpg"
    img3.src = "https://images.g2a.com/1024x576/1x1x0/grand-theft-auto-v-rockstar-key-global/59e5f05c5bafe304c4426c49"
    h3.innerHTML = "Grand Theft Auto V"  
})