const world = Globe()
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .backgroundColor("rgba(0,0,0,0)")
    .width(window.innerWidth)
    .height(window.innerHeight * 0.72)
    (document.getElementById("globe-container"));

world.pointOfView({
    lat: 35,
    lng: 115,
    altitude: window.innerWidth <= 600 ? 1.9 : 1.5
});

world
    .showAtmosphere(false)
    .atmosphereColor("#8ed8ff")
    .atmosphereAltitude(0.25);

world.globeMaterial().color.set("#ffffff");

let currentImages = [];
let currentIndex = 0;

function updateCounter() {

    document.getElementById("image-counter").innerText =
        `${currentIndex + 1} / ${currentImages.length}`;
}

const places = [
    {
        name: "北京",
        lat: 39.9042,
        lng: 116.4074,
        story: "北京，美好的家，想念啊",
        color: "#FFD700",

        images: [
                "images/beijing4.JPG",
                "images/beijing.JPG",
                "images/beijing2.JPG",
                "images/beijing3.JPG",
                "images/beijing2017.JPG",
                "images/beijing2021.JPG",
                "images/beijing2022.JPG",
                "images/beijing20222.JPG",
                "images/beijing2024.JPG",
                "images/beijing20242.JPG",
                "images/beijing2025.PNG"
            ],

    subPlaces: [
        {
            name: "天津",
            story: "我记得我们还在天津之眼合照了，可惜找不到了",

            images: [
                "images/tianjin.JPG"
            ]
        },
        {
            name: "张家口",
            story: "我记得公路状态让我一下知道出京了哈哈哈哈哈",

            images: [
                "images/hebei.JPG",
                "images/hebei2.JPG",
                "images/hebei3.JPG"
            ]
        }]
    },
    {
        name: "西宁",
        lat: 36.6232,
        lng: 101.7789,
        story: "一起回了很多次的老家，美丽的地方",
        color: "#FFD700",

        images: [
        "images/qinghai2.JPG",
        "images/qinghai3.JPG",
        "images/qinghai.JPG",
        "images/qinghai2023.JPG",
        "images/qinghai20232.JPG",
        "images/qinghai2025.JPG"]
    },
    {
        name: "三亚",
        lat: 18.2528,
        lng: 109.5119,
        story: "好像是我三四年级？跟你们一起去玩，还记得水世界哈哈哈",
        color: "#ffd900",

        images: [
        "images/sanya.JPG",
        "images/sanya2.JPG",
        "images/sanya3.JPG"]
    },
    {
        name: "上海",
        lat: 31.2304,
        lng: 121.4737,
        story: "是五年级吗？有点记不清了，冬天一起去的上海。黄浦江夜游，我现在还记得",
        color: "#FFD700",

        images: [
            "images/shanghai.JPG"
        ]
    },
    {
        name: "济南",
        lat: 36.6512,
        lng: 117.1201,
        story: "我记得我们去爬泰山了，爷爷帮我找到照片了！",
        color: "#FFD700",

        images: [
            "images/jinan1.JPG",
            "images/jinan2.JPG",
            "images/jinan3.JPG",
            "images/jinan4.JPG"
        ]
    },
    {
        name: "悉尼",
        lat: -33.8688,
        lng: 151.2093,
        story: "我们都去过了！",
        color: "#FFD700",

        images: [
            "images/australia2026.JPG",
            "images/australia20262.JPG",
            "images/australia20263.JPG",
            "images/australia20264.JPG",
            "images/australia1.JPG",
            "images/australia2.JPG"
        ]
    },
    {
    name: "成都",
    lat: 30.5728,
    lng: 104.0668,
    story: "我还记得你们跟我说：问道青城山，拜水都江堰。",
    color: "#FFD700"
    },
    {
    name: "粤港澳",
    lat: 22.4,
    lng: 113.9,

    story: "这里有香港、澳门、深圳和珠海的回忆。",

    color: "#FFD700",

    subPlaces: [
        {
            name: "香港",
            story: "第一次去迪士尼，说实话记忆比较淡了，隐约记得过山车太吓人了。"
        },
        {
            name: "澳门",
            story: "隐约记得港珠澳大桥，好像是。"
        },
        {
            name: "深圳",
            story: "好像记得那里的机场，我们在酒店待了一晚？"
        },
        {
            name: "珠海",
            story: "不记得了，总之小时候一起去过。"
        }]
    },
    {
        name: "东京",
        lat: 35.6762,
        lng: 139.6503,
        story: "终于去了春日部，咱俩一起跟小新合照了哈哈哈",
        color: "#FFD700",

        images: [
            "images/dongjing2.jpg",
            "images/dongjing1.jpg",
            "images/dongjing3.jpg",
            "images/dongjing4.jpg"
        ]
    },
    {
        name: "Cupertino",
        lat: 37.3230,
        lng: -122.0322,
        story: "然后，我就来了美国。一个天气很好，人很少，奶茶很多的地方",
        color: "#FFD700",

        images: [
            "images/cupertino2.jpg",
            "images/cupertino1.jpg",
            "images/cupertino3.jpg",
            "images/cupertino4.jpg"
        ]
    }
];

const arcs = [
    {
        startLat: 39.9042,
        startLng: 116.4074,
        endLat: 36.6232,
        endLng: 101.7789
    },
    {
        startLat: 39.9042,
        startLng: 116.4074,
        endLat: 18.2528,
        endLng: 109.5119
    },
    {
        startLat: 39.9042,
        startLng: 116.4074,
        endLat: 31.2304,
        endLng: 121.4737
    },
    {
        startLat: 39.9042,
        startLng: 116.4074,
        endLat: 35.6762,
        endLng: 139.6503
    },
    {
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: 37.3230,
    endLng: -122.0322,

    color: [
        "#FFD700",
        "#FFD700"
    ]
    },
    {
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: 30.5728,
    endLng: 104.0668
},
{
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: 36.6512,
    endLng: 117.1201
},
{
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: 22.4,
    endLng: 113.9
},
{
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: -33.8688,
    endLng: 151.2093
}];


world
    .htmlElementsData(places)
    .htmlLat(d => d.lat)
    .htmlLng(d => d.lng)
    .htmlAltitude(0.04)
    .htmlElement(d => {
        const el = document.createElement("div");

        el.innerHTML = `
           <div class="city-marker" style="--color:${d.color}">
             <div class="click-area"></div>
             <div class="pulse-ring"></div>
             <span class="${d.name === '济南' ? 'label-right' : ''}">
    ${d.name}
</span>
           </div>
        `;

        el.onclick = () => {
            showStory(d);
        };

        return el;
    });

world
    .arcsData(arcs)
    .arcStartLat(d => d.startLat)
    .arcStartLng(d => d.startLng)
    .arcEndLat(d => d.endLat)
    .arcEndLng(d => d.endLng)
    .arcColor(() => [
    "rgba(255, 255, 255, 0.9)",
    "rgba(255, 230, 120, 1)",
    ])
    .arcColor(d =>
    d.color || [
        "rgba(255,105,180,0.15)",
        "#ff88c3"
    ]
)
    .arcAltitude(0.15)
    .arcStroke(0.6)
    .arcDashLength(0.5)
    .arcDashGap(0.7)
    .arcDashInitialGap(() => Math.random())
    .arcDashAnimateTime(3000)

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.2;
world.controls().minDistance = 80;
world.controls().maxDistance = 1000;

let lastGroupName = null;

function goBackStory() {
    if (lastGroupName) {
        const group = places.find(p => p.name === lastGroupName);
        lastGroupName = null;
        showStory(group);
    } else {
        resetStory();
    }
}

window.goBackStory = goBackStory;

function showStory(d) {
    const storyBox = document.getElementById("story-box");

    if (d.subPlaces) {
        storyBox.innerHTML = `
            <button class="story-back-btn" onclick="goBackStory()">←</button>
            <div class="story-title">${d.name}</div>

            <div class="story-text">
                ${d.story}

                ${
                    d.name === "北京" && d.images
                    ? `<button class="inline-photo-btn" onclick="showPhotos('${d.name}')">查看照片</button>`
                    : ""
                }
            </div>

            <div class="sub-buttons">
                ${d.subPlaces.map((place, index) => `
                    <button onclick="showSubStory('${d.name}', ${index})">
                        ${place.name}
                    </button>
                `).join("")}
            </div>
        `;
    } else {
        storyBox.innerHTML = `
            <button class="story-back-btn" onclick="goBackStory()">←</button>
            <div class="story-title">${d.name}</div>

            <div class="story-text">${d.story}</div>

            <div class="sub-buttons">
                ${
                    d.images
                    ? `<button onclick="showPhotos('${d.name}')">查看照片</button>`
                    : ""
                }
            </div>
        `;
    }

    world.controls().autoRotate = false;
    document.getElementById("pause-btn").innerText = "▶";
}

function resetStory() {
    const storyBox = document.getElementById("story-box");

    storyBox.innerHTML = `
        <div class="default-story">
            <div class="default-story-title">
                提示：点击地点，记忆加载中～
            </div>

            <div class="default-story-subtitle">
                转动地球仪，可手动看位置
            </div>
        </div>
    `;
}

window.resetStory = resetStory;

function showSubStory(groupName, index) {
    lastGroupName = groupName;

    const group = places.find(place => place.name === groupName);
    const sub = group.subPlaces[index];

    document.getElementById("story-box").innerHTML = `
        <button class="story-back-btn" onclick="goBackStory()">←</button>

        <div class="story-title">${sub.name}</div>

        <div class="story-text">
            ${sub.story}

            ${
                sub.images
                ? `<button class="inline-photo-btn"
                    onclick="showSubPhotos('${groupName}', ${index})">
                    查看照片
                  </button>`
                : ""
            }
        </div>

        <div class="sub-buttons">
            ${group.subPlaces.map((place, i) => `
                <button onclick="showSubStory('${groupName}', ${i})">
                    ${place.name}
                </button>
            `).join("")}
        </div>
    `;
}

function backToGroup(groupName) {
    const group = places.find(p => p.name === groupName);
    showStory(group);
}

window.backToGroup = backToGroup;

function showSubPhotos(groupName, index) {
    const group = places.find(place => place.name === groupName);
    const sub = group.subPlaces[index];

    currentImages = sub.images;

    const gallery = document.getElementById("photo-gallery");

    gallery.innerHTML = sub.images
        .map((img, index) => `
            <img
                src="${img}"
                onclick="openImage(${index})"
            >
        `)
        .join("");

    document.getElementById("photo-modal").classList.remove("hidden");
}

window.showSubPhotos = showSubPhotos;
window.showSubStory = showSubStory;

const pauseBtn = document.getElementById("pause-btn");

pauseBtn.addEventListener("click", () => {
    world.controls().autoRotate = !world.controls().autoRotate;

    pauseBtn.innerText = world.controls().autoRotate
    ? "⏸"
    : "▶";
});

const solarBtn = document.getElementById("solar-btn");

solarBtn.addEventListener("click", () => {

    localStorage.setItem(
        "musicTime",
        bgm.currentTime
    );

    window.location.href = "solar.html";
});

function showPhotos(name) {
    const place = places.find(p => p.name === name);

    const gallery = document.getElementById("photo-gallery");

    currentImages = place.images;

gallery.innerHTML = place.images
    .map((img,index) => `
        <img
            src="${img}"
            onclick="openImage(${index})"
        >
    `)
    .join("");

    document.getElementById("photo-modal").classList.remove("hidden");
}

window.showPhotos = showPhotos;

document.getElementById("close-modal").onclick = () => {
    document.getElementById("photo-modal").classList.add("hidden");
};

function openImage(index) {

    currentIndex = index;

    document.getElementById("big-image").src =
        currentImages[currentIndex];

    updateCounter();

    document
        .getElementById("image-modal")
        .classList.remove("hidden");
}

window.openImage = openImage;

document.getElementById("close-image").onclick = () => {

    document
        .getElementById("image-modal")
        .classList.add("hidden");
};

document.getElementById("prev-image").onclick = () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = currentImages.length - 1;
    }

    document.getElementById("big-image").src =
        currentImages[currentIndex];

    updateCounter();
};

document.getElementById("next-image").onclick = () => {

    currentIndex++;

    if(currentIndex >= currentImages.length){
        currentIndex = 0;
    }

    document.getElementById("big-image").src =
        currentImages[currentIndex];
    
    updateCounter();
};

const musicBtn = document.getElementById("music-btn");
const bgm = document.getElementById("bgm");

let isPlaying = false;

// 刷新/返回后恢复音乐时间
const savedTime = localStorage.getItem("musicTime");

if (savedTime) {
    bgm.currentTime = parseFloat(savedTime);
}

// 如果之前音乐是播放状态，就尝试继续播放
if (localStorage.getItem("musicShouldPlay") === "true") {
    document.getElementById("start-screen").style.display = "none";

    bgm.play().then(() => {
        musicBtn.classList.add("playing");
        isPlaying = true;
    }).catch(() => {
        console.log("浏览器拦截了刷新后的自动播放");
    });
}

// 每秒保存音乐进度
setInterval(() => {
    localStorage.setItem("musicTime", bgm.currentTime);
}, 1000);

// 记录播放/暂停状态
bgm.addEventListener("play", () => {
    localStorage.setItem("musicShouldPlay", "true");
});

bgm.addEventListener("pause", () => {
    localStorage.setItem("musicShouldPlay", "false");
});

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {

        bgm.play();

        musicBtn.classList.add("playing");

        isPlaying = true;

    } else {

        bgm.pause();

        musicBtn.classList.remove("playing");

        isPlaying = false;
    }
});

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");

if (sessionStorage.getItem("skipIntro")) {

    document.getElementById("start-screen").style.display = "none";

    sessionStorage.removeItem("skipIntro");

    const savedTime =
        localStorage.getItem("musicTime");

    if (savedTime) {

        bgm.currentTime = parseFloat(savedTime);

        bgm.play();

        localStorage.setItem("musicShouldPlay", "true");

        musicBtn.classList.add("playing");

        isPlaying = true;
    }
}

startBtn.addEventListener("click", () => {

    startScreen.style.display = "none";

    bgm.play();

    localStorage.setItem("musicShouldPlay", "true");

    musicBtn.classList.add("playing");

    isPlaying = true;
});