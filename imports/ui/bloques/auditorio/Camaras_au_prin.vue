<template>
    <div class="col-md-6 scroll">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación Auditorio Principal</span>
        </div>
         
        <!-- <figure width="320" height="240">
            <img src="http://admin:Welcome1@192.168.2.6/cgi-bin/snapshot.cgi?channel=2" alt="">
        </figure>
        <figure width="320" height="240">
            <img src="http://admin:Welcome1@192.168.2.6/cgi-bin/snapshot.cgi?channel=4" alt="">
        </figure> -->
        <embed type="video/H264"
       src="rtsp://admin:Welcome1@192.168.2.6:554/cam/realmonitor?subtype=00&channel=1"
       width="250"
       height="200">

       <!-- <OBJECT classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921"
            codebase="http://downloads.videolan.org/pub/videolan/vlc/latest/win32/axvlc.cab"
            width="640" height="480" id="vlc" events="True">
        <param name="Src" value="rtsp://admin:Welcome1@192.168.2.6:554/cam/realmonitor?subtype=00&channel=1" />
        <param name="ShowDisplay" value="True" />
        <param name="AutoLoop" value="False" />
        <param name="AutoPlay" value="True" />
        <embed id="vlcEmb"  type="video/H263" version="VideoLAN.VLCPlugin.2" autoplay="yes" loop="no" width="640" height="480"
            target="rtsp://admin:Welcome1@192.168.2.6:554/cam/realmonitor?subtype=00&channel=1">
        </OBJECT> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
