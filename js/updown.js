var slider_video = document.querySelector('.slider-video');
var videos = ['vd1.mp4','vd2.mp4','vd3.mp4','vd4.mp4','vd5.mp4','vd6.mp4','vd7.mp4'];
var i= 0;
function prevv(){
    if (i <= 0) i= videos.length;
    i--;
    return setVideo();
} 
function nextt(){
    if(i >= videos.length-1 ) i =-1;
    i++;
    return setVideo();
} 
function setVideo(){
    return slider_video.setAttribute('src','./video/'+ videos[i]);
}