// تهيئة مكتبة Telegram Web App
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand(); // توسيع التطبيق لملء الشاشة

// قائمة القنوات (سيتم ملؤها من ملف M3U)
let channels = [];

// محتوى ملف M3U الذي تم تحليله مسبقاً
// سنستخدم محتوى الملف الذي أرسلته أنت
const m3uContent = `
#EXTM3U
#EXTINF:-1,beINSports-fr1
http://iptv.am000.tv:8000/live/add17/add17/16.ts
#EXTINF:-1,beINSports-fr2
http://iptv.am000.tv:8000/live/add17/add17/17.ts
#EXTINF:-1,BEINSPORTS-FR3
http://iptv.am000.tv:8000/live/add17/add17/566.ts
#EXTINF:-1,Alkas-1
http://iptv.am000.tv:8000/live/add17/add17/73.ts
#EXTINF:-1,Alkas-2
http://iptv.am000.tv:8000/live/add17/add17/405.ts
#EXTINF:-1,Alkas-3
http://iptv.am000.tv:8000/live/add17/add17/104.ts
#EXTINF:-1,Alkas-4
http://iptv.am000.tv:8000/live/add17/add17/315.ts
#EXTINF:-1,AD-Sports1
http://iptv.am000.tv:8000/live/add17/add17/89.ts
#EXTINF:-1,AD-SPORTS2
http://iptv.am000.tv:8000/live/add17/add17/114.ts
#EXTINF:-1,AD-Sports3
http://iptv.am000.tv:8000/live/add17/add17/90.ts
#EXTINF:-1,DUBAISPORT1
http://iptv.am000.tv:8000/live/add17/add17/648.ts
#EXTINF:-1,DubaiSport-3
http://iptv.am000.tv:8000/live/add17/add17/646.ts
#EXTINF:-1,DUBAISPORT-4
http://iptv.am000.tv:8000/live/add17/add17/647.ts
#EXTINF:-1,EUROSPORT-eng
http://iptv.am000.tv:8000/live/add17/add17/357.ts
#EXTINF:-1,MBCProSports1
http://iptv.am000.tv:8000/live/add17/add17/40.ts
#EXTINF:-1,MBCProSports2
http://iptv.am000.tv:8000/live/add17/add17/39.ts
#EXTINF:-1,osn-yahala-hd
http://iptv.am000.tv:8000/live/add17/add17/383.ts
#EXTINF:-1,OSN-MBC+DRAMA
http://iptv.am000.tv:8000/live/add17/add17/21.ts
#EXTINF:-1,OSN-Yahala-Shabab
http://iptv.am000.tv:8000/live/add17/add17/24.ts
#EXTINF:-1,OSN-AlYoum
http://iptv.am000.tv:8000/live/add17/add17/384.ts
#EXTINF:-1,OSN-CINEMA1
http://iptv.am000.tv:8000/live/add17/add17/153.ts
#EXTINF:-1,OSN_Cinma_2
http://iptv.am000.tv:8000/live/add17/add17/403.ts
#EXTINF:-1,OSN-MOVIES-ACTION
http://iptv.am000.tv:8000/live/add17/add17/26.ts
#EXTINF:-1,OSN-MOVIES-ACTION+2
http://iptv.am000.tv:8000/live/add17/add17/18.ts
#EXTINF:-1,OSN-MOVIES-HD
http://iptv.am000.tv:8000/live/add17/add17/25.ts
#EXTINF:-1,OSN-MOVIES-DRAMA
http://iptv.am000.tv:8000/live/add17/add17/19.ts
#EXTINF:-1,OSN-MOVIES-premier
http://iptv.am000.tv:8000/live/add17/add17/323.ts
#EXTINF:-1,OSN-MOVIES-premier2
http://iptv.am000.tv:8000/live/add17/add17/412.ts
#EXTINF:-1,OSN-Movie-FESTIVAL
http://iptv.am000.tv:8000/live/add17/add17/27.ts
#EXTINF:-1,OSN-MOVIES-Comedy
http://iptv.am000.tv:8000/live/add17/add17/292.ts
#EXTINF:-1,OSN-StarMovie
http://iptv.am000.tv:8000/live/add17/add17/454.ts
#EXTINF:-1,OSN_Starworld
http://iptv.am000.tv:8000/live/add17/add17/151.ts
#EXTINF:-1,OSN-BoxOffice
http://iptv.am000.tv:8000/live/add17/add17/399.ts
#EXTINF:-1,OSN-BoxOffice1
http://iptv.am000.tv:8000/live/add17/add17/109.ts
#EXTINF:-1,OSN-FIGHT-HD
http://iptv.am000.tv:8000/live/add17/add17/625.ts
#EXTINF:-1,Bein-Movies1
http://iptv.am000.tv:8000/live/add17/add17/387.ts
#EXTINF:-1,Bein-Movies2
http://iptv.am000.tv:8000/live/add17/add17/343.ts
#EXTINF:-1,Bein-Movies3
http://iptv.am000.tv:8000/live/add17/add17/534.ts
#EXTINF:-1,OSN-Disney
http://iptv.am000.tv:8000/live/add17/add17/404.ts
#EXTINF:-1,OSN-movie-kids
http://iptv.am000.tv:8000/live/add17/add17/624.ts
#EXTINF:-1,OSN-NATGEOWILD
http://iptv.am000.tv:8000/live/add17/add17/626.ts
#EXTINF:-1,Nat-Geo-AD
http://iptv.am000.tv:8000/live/add17/add17/82.ts
#EXTINF:-1,Animal-Planet
http://iptv.am000.tv:8000/live/add17/add17/91.ts
#EXTINF:-1,DISCOVERY-CH
http://iptv.am000.tv:8000/live/add17/add17/124.ts
#EXTINF:-1,ART-AFLAM1
http://iptv.am000.tv:8000/live/add17/add17/33.ts
#EXTINF:-1,ART-AFLAM2
http://iptv.am000.tv:8000/live/add17/add17/32.ts
#EXTINF:-1,ART-CINEMA
http://iptv.am000.tv:8000/live/add17/add17/76.ts
#EXTINF:-1,ART-Hekayat1
http://iptv.am000.tv:8000/live/add17/add17/35.ts
#EXTINF:-1,ART-Hekayat2
http://iptv.am000.tv:8000/live/add17/add17/34.ts
#EXTINF:-1,EUROSPORT-1
http://iptv.am000.tv:8000/live/add17/add17/149.ts
#EXTINF:-1,EUROSPORT-FR
http://iptv.am000.tv:8000/live/add17/add17/150.ts
#EXTINF:-1,Sharjah-Sport
http://iptv.am000.tv:8000/live/add17/add17/127.ts
#EXTINF:-1,Sharjah
http://iptv.am000.tv:8000/live/add17/add17/126.ts
#EXTINF:-1,Palestine
http://iptv.am000.tv:8000/live/add17/add17/141.ts
#EXTINF:-1,PalestineToday
http://iptv.am000.tv:8000/live/add17/add17/459.ts
#EXTINF:-1,AL-NASS
http://iptv.am000.tv:8000/live/add17/add17/147.ts
#EXTINF:-1,Abu_Dhabi
http://iptv.am000.tv:8000/live/add17/add17/145.ts
#EXTINF:-1,TRT-arabic
http://iptv.am000.tv:8000/live/add17/add17/390.ts
#EXTINF:-1,Zaytoona
http://iptv.am000.tv:8000/live/add17/add17/393.ts
#EXTINF:-1,MTV-Libanon
http://iptv.am000.tv:8000/live/add17/add17/117.ts
#EXTINF:-1,Qatar
http://iptv.am000.tv:8000/live/add17/add17/439.ts
#EXTINF:-1,CBC-tv
http://iptv.am000.tv:8000/live/add17/add17/106.ts
#EXTINF:-1,TNNTunisia
http://iptv.am000.tv:8000/live/add17/add17/112.ts
#EXTINF:-1,Cima
http://iptv.am000.tv:8000/live/add17/add17/118.ts
#EXTINF:-1,Future
http://iptv.am000.tv:8000/live/add17/add17/120.ts
#EXTINF:-1,OTV-Lebanon
http://iptv.am000.tv:8000/live/add17/add17/92.ts
#EXTINF:-1,Syria-ikhbaria
http://iptv.am000.tv:8000/live/add17/add17/102.ts
#EXTINF:-1,Syria-Aloula
http://iptv.am000.tv:8000/live/add17/add17/101.ts
#EXTINF:-1,Syria
http://iptv.am000.tv:8000/live/add17/add17/99.ts
#EXTINF:-1,Nile-Comedy
http://iptv.am000.tv:8000/live/add17/add17/94.ts
#EXTINF:-1,Nile-cinema
http://iptv.am000.tv:8000/live/add17/add17/95.ts
#EXTINF:-1,NILE-DRAMA
http://iptv.am000.tv:8000/live/add17/add17/410.ts
#EXTINF:-1,Syria-Education
http://iptv.am000.tv:8000/live/add17/add17/65.ts
#EXTINF:-1,ZEE-Aflam
http://iptv.am000.tv:8000/live/add17/add17/49.ts
#EXTINF:-1,Zee-Alwan
http://iptv.am000.tv:8000/live/add17/add17/50.ts
#EXTINF:-1,SyrianDrama
http://iptv.am000.tv:8000/live/add17/add17/51.ts
#EXTINF:-1,Baraem
http://iptv.am000.tv:8000/live/add17/add17/54.ts
#EXTINF:-1,Rotana-Classic
http://iptv.am000.tv:8000/live/add17/add17/56.ts
#EXTINF:-1,Rotana-Cinema
http://iptv.am000.tv:8000/live/add17/add17/57.ts
#EXTINF:-1,Rotana
http://iptv.am000.tv:8000/live/add17/add17/58.ts
#EXTINF:-1,OOD
http://iptv.am000.tv:8000/live/add17/add17/42.ts
#EXTINF:-1,MBC-1
http://iptv.am000.tv:8000/live/add17/add17/48.ts
#EXTINF:-1,MBC-2
http://iptv.am000.tv:8000/live/add17/add17/47.ts
#EXTINF:-1,MBC-3
http://iptv.am000.tv:8000/live/add17/add17/46.ts
#EXTINF:-1,MBC-4
http://iptv.am000.tv:8000/live/add17/add17/45.ts
#EXTINF:-1,MBC-MAX
http://iptv.am000.tv:8000/live/add17/add17/43.ts
#EXTINF:-1,MBC-DRAMA
http://iptv.am000.tv:8000/live/add17/add17/44.ts
#EXTINF:-1,MBC-ACTION
http://iptv.am000.tv:8000/live/add17/add17/241.ts
#EXTINF:-1,LBC
http://iptv.am000.tv:8000/live/add17/add17/61.ts
#EXTINF:-1,Iraqiya
http://iptv.am000.tv:8000/live/add17/add17/111.ts
#EXTINF:-1,Baghdad
http://iptv.am000.tv:8000/live/add17/add17/435.ts
#EXTINF:-1,Iraqia-Sport
http://iptv.am000.tv:8000/live/add17/add17/148.ts
#EXTINF:-1,AlSharqiya
http://iptv.am000.tv:8000/live/add17/add17/612.ts
#EXTINF:-1,Sharqiya-News
http://iptv.am000.tv:8000/live/add17/add17/396.ts
#EXTINF:-1,Dubai-One
http://iptv.am000.tv:8000/live/add17/add17/63.ts
#EXTINF:-1,DUBAI
http://iptv.am000.tv:8000/live/add17/add17/64.ts
#EXTINF:-1,Cbc-drama
http://iptv.am000.tv:8000/live/add17/add17/67.ts
#EXTINF:-1,alarabiya
http://iptv.am000.tv:8000/live/add17/add17/71.ts
#EXTINF:-1,AL-MANAR
http://iptv.am000.tv:8000/live/add17/add17/74.ts
#EXTINF:-1,ROYA
http://iptv.am000.tv:8000/live/add17/add17/81.ts
#EXTINF:-1,Jordan-tv
http://iptv.am000.tv:8000/live/add17/add17/83.ts
#EXTINF:-1,Sama-Jordan
http://iptv.am000.tv:8000/live/add17/add17/445.ts
#EXTINF:-1,Jordan-Sport
http://iptv.am000.tv:8000/live/add17/add17/346.ts
#EXTINF:-1,ANN-news
http://iptv.am000.tv:8000/live/add17/add17/155.ts
#EXTINF:-1,AL-JAZEERA
http://iptv.am000.tv:8000/live/add17/add17/87.ts
#EXTINF:-1,aljazeera_mubasher
http://iptv.am000.tv:8000/live/add17/add17/88.ts
#EXTINF:-1,NBN
http://iptv.am000.tv:8000/live/add17/add17/140.ts
#EXTINF:-1,BBC-Arabia
http://iptv.am000.tv:8000/live/add17/add17/100.ts
#EXTINF:-1,Saudi-Quran
http://iptv.am000.tv:8000/live/add17/add17/446.ts
#EXTINF:-1,Al-Hadath
http://iptv.am000.tv:8000/live/add17/add17/72.ts
#EXTINF:-1,Oman
http://iptv.am000.tv:8000/live/add17/add17/488.ts
#EXTINF:-1,MTV
http://iptv.am000.tv:8000/live/add17/add17/486.ts
#EXTINF:-1,Quran-TV
http://iptv.am000.tv:8000/live/add17/add17/628.ts
#EXTINF:-1,Quran-Alfateh
http://iptv.am000.tv:8000/live/add17/add17/629.ts
#EXTINF:-1,Mecca
http://iptv.am000.tv:8000/live/add17/add17/107.ts
#EXTINF:-1,IQRAA-TV
http://iptv.am000.tv:8000/live/add17/add17/115.ts
#EXTINF:-1,Al-Majd
http://iptv.am000.tv:8000/live/add17/add17/444.ts
#EXTINF:-1,Almajd-Quran
http://iptv.am000.tv:8000/live/add17/add17/425.ts
#EXTINF:-1,MAJD-KIDS
http://iptv.am000.tv:8000/live/add17/add17/421.ts
#EXTINF:-1,Fatafeat
http://iptv.am000.tv:8000/live/add17/add17/483.ts
#EXTINF:-1,Toyor-AlJanah
http://iptv.am000.tv:8000/live/add17/add17/437.ts
#EXTINF:-1,Jeem
http://iptv.am000.tv:8000/live/add17/add17/119.ts
#EXTINF:-1,Spacetoon
http://iptv.am000.tv:8000/live/add17/add17/80.ts
#EXTINF:-1,CN-ARABIA
http://iptv.am000.tv:8000/live/add17/add17/68.ts
#EXTINF:-1,AJYAL
http://iptv.am000.tv:8000/live/add17/add17/146.ts
#EXTINF:-1,LCD-Aflam
http://iptv.am000.tv:8000/live/add17/add17/440.ts
#EXTINF:-1,Russia-Al-Yaum
http://iptv.am000.tv:8000/live/add17/add17/450.ts
#EXTINF:-1,ADTV
http://iptv.am000.tv:8000/live/add17/add17/419.ts
#EXTINF:-1,Russia-Today
http://iptv.am000.tv:8000/live/add17/add17/442.ts
#EXTINF:-1,BeinSport-Sd1
http://iptv.am000.tv:8000/live/add17/add17/293.ts
#EXTINF:-1,BeinSport-Sd2
http://iptv.am000.tv:8000/live/add17/add17/294.ts
#EXTINF:-1,BeinSport-Sd3
http://iptv.am000.tv:8000/live/add17/add17/295.ts
#EXTINF:-1,BeinSport-Sd4
http://iptv.am000.tv:8000/live/add17/add17/296.ts
#EXTINF:-1,BeinSport-Sd5
http://iptv.am000.tv:8000/live/add17/add17/297.ts
#EXTINF:-1,BeinSport-Sd6
http://iptv.am000.tv:8000/live/add17/add17/298.ts
#EXTINF:-1,BeinSport-Sd7
http://iptv.am000.tv:8000/live/add17/add17/299.ts
#EXTINF:-1,BeinSport-Sd8
http://iptv.am000.tv:8000/live/add17/add17/300.ts
#EXTINF:-1,BeinSport-Sd9
http://iptv.am000.tv:8000/live/add17/add17/301.ts
#EXTINF:-1,BeinSport-Sd10
http://iptv.am000.tv:8000/live/add17/add17/302.ts
#EXTINF:-1,EN:BeinSport-11
http://iptv.am000.tv:8000/live/add17/add17/575.ts
#EXTINF:-1,EN:BeinSport-12
http://iptv.am000.tv:8000/live/add17/add17/577.ts
#EXTINF:-1,FR:BEINSPORT-13
http://iptv.am000.tv:8000/live/add17/add17/632.ts
#EXTINF:-1,FR:BEINSPORT-14
http://iptv.am000.tv:8000/live/add17/add17/633.ts
#EXTINF:-1,FR:BEINSPORT-15
http://iptv.am000.tv:8000/live/add17/add17/634.ts
#EXTINF:-1,FR:BEINSPORT-16
http://iptv.am000.tv:8000/live/add17/add17/635.ts
#EXTINF:-1,Sky-Atlantic
http://iptv.am000.tv:8000/live/add17/add17/441.ts
#EXTINF:-1,SkySport-1
http://iptv.am000.tv:8000/live/add17/add17/443.ts
#EXTINF:-1,KANAL7-HD
http://iptv.am000.tv:8000/live/add17/add17/422.ts
#EXTINF:-1,KIDS-MOVIE1
http://iptv.am000.tv:8000/live/add17/add17/627.ts
#EXTINF:-1,KIDS-MOVIE2
http://iptv.am000.tv:8000/live/add17/add17/639.ts
#EXTINF:-1,KIDS-MOVIE3
http://iptv.am000.tv:8000/live/add17/add17/640.ts
#EXTINF:-1,KIDS-MOVIE4
http://iptv.am000.tv:8000/live/add17/add17/641.ts
#EXTINF:-1,-1
http://iptv.am000.tv:8000/live/add17/add17/592.ts
#EXTINF:-1,-2
http://iptv.am000.tv:8000/live/add17/add17/424.ts
#EXTINF:-1,-3
http://iptv.am000.tv:8000/live/add17/add17/423.ts
#EXTINF:-1,-4
http://iptv.am000.tv:8000/live/add17/add17/608.ts
#EXTINF:-1,-5
http://iptv.am000.tv:8000/live/add17/add17/609.ts
#EXTINF:-1,-6
http://iptv.am000.tv:8000/live/add17/add17/610.ts
#EXTINF:-1,-7
http://iptv.am000.tv:8000/live/add17/add17/611.ts
`;

/**
 * دالة لتحليل محتوى M3U واستخراج القنوات
 * @param {string} content - محتوى ملف M3U
 * @returns {Array<Object>} قائمة بالكائنات {name, url}
 */
function parseM3U(content) {
    const lines = content.split('\n');
    const parsedChannels = [];
    let currentChannel = {};

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.startsWith('#EXTINF:')) {
            // استخراج اسم القناة
            const match = line.match(/,(.*)/);
            if (match && match[1]) {
                currentChannel.name = match[1].trim();
            }
        } else if (line.startsWith('http')) {
            // استخراج رابط البث
            currentChannel.url = line;
            if (currentChannel.name && currentChannel.url) {
                parsedChannels.push(currentChannel);
            }
            currentChannel = {}; // إعادة تعيين للكائن التالي
        }
    }
    return parsedChannels;
}

/**
 * دالة لعرض قائمة القنوات في الواجهة
 * @param {Array<Object>} channelList - قائمة القنوات
 */
function displayChannels(channelList) {
    const listElement = document.getElementById('channel-list');
    listElement.innerHTML = ''; // مسح القائمة القديمة

    channelList.forEach(channel => {
        const listItem = document.createElement('li');
        listItem.textContent = channel.name;
        listItem.dataset.url = channel.url;
        listItem.addEventListener('click', () => playChannel(channel.name, channel.url));
        listElement.appendChild(listItem);
    });
}

/**
 * دالة لتشغيل القناة المختارة
 * @param {string} name - اسم القناة
 * @param {string} url - رابط البث
 */
function playChannel(name, url) {
    const videoContainer = document.getElementById('video-container');
    const videoElement = document.getElementById('video-player');
    const channelNameElement = document.getElementById('current-channel-name');
    const listItems = document.querySelectorAll('#channel-list li');

    // إظهار مشغل الفيديو
    videoContainer.style.display = 'block';
    channelNameElement.textContent = name;

    // إزالة التحديد من القنوات الأخرى وتحديد القناة الحالية
    listItems.forEach(item => item.classList.remove('active'));
    document.querySelector(`li[data-url="${url}"]`).classList.add('active');

    // إيقاف أي تشغيل سابق
    videoElement.pause();
    videoElement.removeAttribute('src');
    videoElement.load();

    // محاولة تشغيل الرابط باستخدام HLS.js إذا كان الرابط HLS
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            videoElement.play().catch(e => {
                console.error('HLS Playback Error:', e);
                channelNameElement.textContent = `فشل تشغيل القناة: ${name}. (خطأ في التشغيل التلقائي أو الرابط)`;
            });
        });
        hls.on(Hls.Events.ERROR, function (event, data) {
            if (data.fatal) {
                console.error('HLS Fatal Error:', data.details);
                // محاولة التشغيل المباشر إذا فشل HLS
                videoElement.src = url;
                videoElement.play().catch(e => {
                    console.error('Direct Playback Error:', e);
                    channelNameElement.textContent = `فشل تشغيل القناة: ${name}. (الرابط غير صالح أو غير مدعوم)`;
                });
            }
        });
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        // دعم أصلي لـ HLS (مثل Safari)
        videoElement.src = url;
        videoElement.addEventListener('loadedmetadata', function() {
            videoElement.play().catch(e => {
                console.error('Native Playback Error:', e);
                channelNameElement.textContent = `فشل تشغيل القناة: ${name}. (خطأ في التشغيل التلقائي أو الرابط)`;
            });
        });
    } else {
        // محاولة التشغيل المباشر
        videoElement.src = url;
        videoElement.play().catch(e => {
            console.error('Direct Playback Error:', e);
            channelNameElement.textContent = `فشل تشغيل القناة: ${name}. (الرابط غير صالح أو غير مدعوم)`;
        });
    }

    // إرسال إشارة لتيليجرام لتغيير حجم الواجهة
    tg.postEvent('iframe_resize');
}

/**
 * دالة البحث
 */
function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredChannels = channels.filter(channel =>
            channel.name.toLowerCase().includes(searchTerm)
        );
        displayChannels(filteredChannels);
    });
}

// نقطة البداية
document.addEventListener('DOMContentLoaded', () => {
    channels = parseM3U(m3uContent);
    displayChannels(channels);
    setupSearch();
});
