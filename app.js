const cityCatalog = {
  成都: {
    province: "四川",
    roman: "CHENGDU",
    tagline: "茶馆、老街和热辣小馆，串成不绕路的几天。",
    hotel: "春熙路附近",
    hotelPoint: { x: 53, y: 49 },
    palette: ["#b9d5b2", "#ff6b3d"],
    weather: ["☀ 28°", "☁ 26°", "🌦 25°", "☀ 29°", "☁ 27°"],
    points: [
      p("cd-1", "人民公园鹤鸣茶社", "青羊区", 38, 47, "景点", 1, "上午先喝一碗盖碗茶", "靠湖边竹椅拍树影", "小红书热议", "linear-gradient(145deg,#6c8b6a,#d1b377)"),
      p("cd-2", "宽窄巷子·井巷子", "青羊区", 34, 39, "拍照", 2, "避开主街，老砖墙更安静", "从拱门向里拍长巷", "城市推荐", "linear-gradient(145deg,#91674d,#d0a16d)"),
      p("cd-3", "东郊记忆", "成华区", 75, 38, "拍照", 3, "工业风与旧厂房很好逛", "火车头旁低机位", "抖音热榜", "linear-gradient(145deg,#4b5961,#d36c46)"),
      p("cd-4", "望平街·香香巷", "成华区", 61, 44, "街区", 4, "傍晚沿锦江慢慢散步", "桥上拍河岸灯光", "小红书热议", "linear-gradient(145deg,#487c78,#e2a65f)"),
      p("cd-5", "文殊院红墙", "青羊区", 48, 31, "景点", 5, "古寺、银杏和素斋都在一起", "红墙竹影侧身构图", "本地口碑", "linear-gradient(145deg,#9f3f36,#d9b46f)"),
      p("cd-6", "玉林路", "武侯区", 48, 68, "街区", 6, "小酒馆和社区小店很密集", "蓝调时刻拍街灯", "城市推荐", "linear-gradient(145deg,#31556b,#da7c5e)"),
      p("cd-7", "成都自然博物馆", "成华区", 70, 26, "室内", 7, "下雨天也能舒服逛", "中庭楼梯对称构图", "亲子推荐", "linear-gradient(145deg,#78969a,#d9ccae)"),
      p("cd-8", "杜甫草堂", "青羊区", 25, 51, "景点", 8, "竹林和茅屋很有成都气质", "水榭倒影与竹径", "经典必去", "linear-gradient(145deg,#486c4b,#c8ad77)"),
      p("cd-f1", "明婷饭店", "金牛区", 43, 24, "餐厅", 1, "脑花豆腐和荷叶酱肉", "门头与圆桌烟火气", "必吃榜", "linear-gradient(145deg,#7c3228,#e8a455)"),
      p("cd-f2", "饕林餐厅", "锦江区", 57, 55, "餐厅", 2, "家常川菜，适合多人点菜", "辣子鸡上桌俯拍", "本地口碑", "linear-gradient(145deg,#ac3f2f,#e8c16c)"),
      p("cd-f3", "洞子口张老二凉粉", "青羊区", 43, 34, "餐厅", 3, "甜水面和黄凉粉", "窗口边拍红油光泽", "必吃小店", "linear-gradient(145deg,#ad4b2e,#e6b45f)"),
      p("cd-f4", "甘记肥肠粉", "金牛区", 51, 22, "餐厅", 4, "现打粉配锅盔", "灶台蒸汽做前景", "本地早餐", "linear-gradient(145deg,#854330,#d9974d)")
    ]
  },
  杭州: {
    province: "浙江",
    roman: "HANGZHOU",
    tagline: "绕开人潮，从湖边、茶山一路走进老杭州。",
    hotel: "龙翔桥附近",
    hotelPoint: { x: 51, y: 49 },
    palette: ["#abcbd6", "#db7655"],
    weather: ["☁ 25°", "🌦 23°", "☀ 27°", "☁ 24°", "☀ 28°"],
    points: [
      p("hz-1", "曲院风荷", "西湖区", 34, 39, "景点", 1, "清晨荷塘最安静", "曲桥做前景拍荷叶", "经典必去", "linear-gradient(145deg,#638b69,#b9c77b)"),
      p("hz-2", "北山街", "西湖区", 43, 37, "拍照", 2, "梧桐、民国建筑和湖景", "临湖长椅拍背影", "小红书热议", "linear-gradient(145deg,#5e7b66,#d3a56e)"),
      p("hz-3", "法喜寺", "西湖区", 20, 62, "景点", 3, "黄墙与山林很出片", "台阶下向上拍屋檐", "抖音热榜", "linear-gradient(145deg,#d49b3a,#8b694b)"),
      p("hz-4", "满觉陇", "西湖区", 28, 60, "街区", 4, "茶园小路适合慢走", "茶田曲线做引导", "城市推荐", "linear-gradient(145deg,#517555,#c5aa69)"),
      p("hz-5", "小河直街", "拱墅区", 55, 25, "街区", 5, "水巷和手作小店", "桥洞框住白墙乌瓦", "小红书热议", "linear-gradient(145deg,#63818b,#c3b9a3)"),
      p("hz-6", "十五奎巷", "上城区", 58, 59, "街区", 6, "老社区连着城隍阁", "坡道尽头拍望仙阁", "本地散步", "linear-gradient(145deg,#a96e53,#d7bc86)"),
      p("hz-7", "中国美术学院象山", "西湖区", 35, 76, "建筑", 7, "王澍建筑与山水校园", "长廊重复框景", "建筑推荐", "linear-gradient(145deg,#6d6256,#bb9e78)"),
      p("hz-8", "浴鹄湾", "西湖区", 35, 51, "景点", 8, "比西湖主线清净许多", "霁虹桥倒影", "本地私藏", "linear-gradient(145deg,#597d75,#d5c89b)"),
      p("hz-f1", "福缘居", "上城区", 55, 54, "餐厅", 1, "脆皮大肠与油淋鸡", "木桌靠窗自然光", "必吃榜", "linear-gradient(145deg,#9b3d2f,#dc965a)"),
      p("hz-f2", "新周记", "上城区", 59, 48, "餐厅", 2, "老底子杭帮菜", "浓油赤酱近景", "本地口碑", "linear-gradient(145deg,#86432d,#d4a05b)"),
      p("hz-f3", "方老大面", "上城区", 61, 60, "餐厅", 3, "腰花番茄汁拌川", "厨房窗口拍锅气", "必吃小店", "linear-gradient(145deg,#a64a31,#e4a95a)"),
      p("hz-f4", "游埠豆浆", "上城区", 55, 64, "餐厅", 4, "咸豆浆配油条烧饼", "清晨摊位烟火感", "早餐推荐", "linear-gradient(145deg,#8c513a,#d7ad69)")
    ]
  },
  泉州: {
    province: "福建",
    roman: "QUANZHOU",
    tagline: "沿着红砖古厝和寺庙香火，吃一圈闽南小味。",
    hotel: "西街附近",
    hotelPoint: { x: 46, y: 43 },
    palette: ["#e8b9b3", "#d45738"],
    weather: ["☀ 30°", "☁ 28°", "🌦 27°", "☀ 29°", "☀ 31°"],
    points: [
      p("qz-1", "开元寺", "鲤城区", 41, 39, "景点", 1, "双塔和古榕是泉州封面", "红墙榕树留白构图", "经典必去", "linear-gradient(145deg,#ad3e34,#d4aa69)"),
      p("qz-2", "西街钟楼", "鲤城区", 48, 43, "街区", 2, "骑楼、小吃与老城日常", "莓超疯天台拍双塔", "小红书热议", "linear-gradient(145deg,#b56c4f,#ddbc79)"),
      p("qz-3", "蟳埔村", "丰泽区", 75, 57, "拍照", 3, "簪花围与蚵壳厝", "选素色衣服拍簪花", "抖音热榜", "linear-gradient(145deg,#6e8b8c,#d15f68)"),
      p("qz-4", "关岳庙", "鲤城区", 54, 52, "景点", 4, "香火旺盛的闽南色彩", "红灯笼与屋脊同框", "城市推荐", "linear-gradient(145deg,#a72f2b,#d99e47)"),
      p("qz-5", "承天寺", "鲤城区", 51, 44, "景点", 5, "安静清幽，白塔很特别", "月台与树影对称拍", "本地私藏", "linear-gradient(145deg,#769177,#d4c59d)"),
      p("qz-6", "觅鲤文创园", "鲤城区", 55, 58, "街区", 6, "旧厂房里的闽南新潮", "红砖拱门做画框", "年轻人推荐", "linear-gradient(145deg,#8d5945,#d88b62)"),
      p("qz-7", "洛伽寺", "石狮市", 89, 76, "景点", 7, "海上寺庙日落很美", "退潮时拍寺庙倒影", "小红书热议", "linear-gradient(145deg,#53849b,#d18c5a)"),
      p("qz-8", "清净寺", "鲤城区", 53, 50, "建筑", 8, "石构拱门见证海丝", "拱券内框景", "世界遗产", "linear-gradient(145deg,#9d8c70,#cdbb91)"),
      p("qz-f1", "斯丹姜母鸭", "鲤城区", 47, 47, "餐厅", 1, "姜香浓郁，鸭肉软烂", "砂锅上桌拍热气", "必吃榜", "linear-gradient(145deg,#7f3927,#d38445)"),
      p("qz-f2", "水门国仔面线糊", "鲤城区", 51, 56, "餐厅", 2, "加醋肉和大肠最地道", "清晨门店生活感", "本地早餐", "linear-gradient(145deg,#9c5638,#d5a25d)"),
      p("qz-f3", "秉正堂石花膏", "鲤城区", 45, 45, "餐厅", 3, "清甜消暑的古早味", "透明杯逆光拍", "必吃小店", "linear-gradient(145deg,#b78358,#dfc78b)"),
      p("qz-f4", "阿姨鸡架", "鲤城区", 49, 42, "餐厅", 4, "甜辣口的西街夜宵", "纸袋街拍最有氛围", "夜宵推荐", "linear-gradient(145deg,#8e392b,#e08c4d)")
    ]
  },
  大理: {
    province: "云南",
    roman: "DALI",
    tagline: "把风、洱海和白族村落，排成留有空白的日子。",
    hotel: "大理古城南门附近",
    hotelPoint: { x: 36, y: 52 },
    palette: ["#b7d7da", "#e17b55"],
    weather: ["☀ 24°", "☁ 22°", "☀ 25°", "🌦 21°", "☀ 24°"],
    points: [
      p("dl-1", "龙龛码头", "大理市", 45, 48, "景点", 1, "日出与水杉很治愈", "栈道尽头拍海鸥", "小红书热议", "linear-gradient(145deg,#5c8ea2,#d0a66d)"),
      p("dl-2", "喜洲古镇", "大理市", 47, 22, "街区", 2, "稻田、白族建筑和喜洲粑粑", "转角楼黄墙前侧拍", "经典必去", "linear-gradient(145deg,#c29954,#7d8870)"),
      p("dl-3", "双廊古镇", "大理市", 78, 35, "景点", 3, "临海客栈与苍山远景", "海边玻璃窗框景", "抖音热榜", "linear-gradient(145deg,#56879e,#d1b48f)"),
      p("dl-4", "磻溪S湾", "大理市", 48, 36, "拍照", 4, "骑行路线中的经典弯道", "长焦压缩人车与海", "小红书热议", "linear-gradient(145deg,#578d99,#b8cfa9)"),
      p("dl-5", "寂照庵", "大理市", 25, 64, "景点", 5, "多肉小院与山寺素斋", "窗边花影静物构图", "本地私藏", "linear-gradient(145deg,#6f8e6e,#ceaa7b)"),
      p("dl-6", "凤阳邑茶马古道", "大理市", 31, 67, "街区", 6, "土墙老屋与石板路", "逆光拍石板路轮廓", "城市推荐", "linear-gradient(145deg,#8e6e4d,#cfb183)"),
      p("dl-7", "者摩山", "大理市", 27, 44, "景点", 7, "俯瞰洱海和整座城市", "傍晚用人做比例", "日落推荐", "linear-gradient(145deg,#707d83,#d8a15a)"),
      p("dl-8", "沙溪古镇", "剑川县", 16, 13, "街区", 8, "保存完好的茶马古镇", "古戏台与老槐树同框", "值得专程", "linear-gradient(145deg,#765b43,#c9a66d)"),
      p("dl-f1", "段公子·天龙八部店", "大理古城", 35, 53, "餐厅", 1, "酸辣鱼和乳扇入门友好", "铜锅与桌面俯拍", "必吃榜", "linear-gradient(145deg,#8f3529,#d99950)"),
      p("dl-f2", "我在大理等你", "大理古城", 38, 50, "餐厅", 2, "野生菌与白族家常菜", "菌菇拼盘拍色彩", "人气餐厅", "linear-gradient(145deg,#875235,#cfad60)"),
      p("dl-f3", "喜洲杨记破酥粑粑", "喜洲", 48, 23, "餐厅", 3, "甜咸各买一个", "刚出炉时掰开拍", "必吃小店", "linear-gradient(145deg,#a2673d,#dfb35f)"),
      p("dl-f4", "再回首凉鸡米线", "大理古城", 36, 55, "餐厅", 4, "酸甜凉辣的古城小吃", "拌匀前拍配料层次", "本地小吃", "linear-gradient(145deg,#a6412e,#e0a04e)")
    ]
  }
};

function p(id, name, area, x, y, kind, rank, reason, photoTip, source, gradient) {
  return { id, name, area, x, y, kind, rank, reason, photoTip, source, gradient: pixelGradient(id, kind), duration: kind === "餐厅" ? 70 : 90 };
}

function pixelGradient(id, kind) {
  const palettes = kind === "餐厅"
    ? [["#5c246f", "#f06bb5"], ["#6a315f", "#ffd166"], ["#44206f", "#e967a6"]]
    : [["#38236c", "#8c63dd"], ["#253a72", "#65e0d5"], ["#5a287f", "#d06fe2"], ["#3c2868", "#f06bb5"]];
  const index = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % palettes.length;
  return `linear-gradient(135deg,${palettes[index][0]},${palettes[index][1]})`;
}

const state = {
  city: "成都",
  cityOrder: ["成都", "杭州", "泉州"],
  days: 3,
  selectedDay: 0,
  plans: [],
  saved: {},
  imported: {},
  filter: "全部",
  sketchVariant: 0,
  discoverOffset: 0,
  automation: true
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const els = {};
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("manyoujian-state") || "null");
    if (saved) Object.assign(state, saved, { plans: [] });
  } catch (_) {}
  Object.keys(cityCatalog).forEach((city) => {
    if (!Array.isArray(state.saved[city])) state.saved[city] = cityCatalog[city].points.filter((item) => item.kind !== "餐厅").slice(0, 5).map((item) => item.id);
    if (!Array.isArray(state.imported[city])) state.imported[city] = [];
  });
  if (!cityCatalog[state.city]) state.city = "成都";
}

function saveState() {
  const keep = { ...state, plans: [] };
  localStorage.setItem("manyoujian-state", JSON.stringify(keep));
}

function cacheElements() {
  ["cityStrip", "cityProvince", "heroCity", "cityTagline", "savedCount", "foodCount", "updateText", "linkForm", "shareLink", "pasteButton", "analyzeButton", "recognitionResult", "daysMinus", "daysPlus", "daysOutput", "hotelInput", "generateButton", "routeCity", "dayTabs", "dayDate", "dayTheme", "weatherChip", "routeMap", "mapNote", "distanceMetric", "stopsMetric", "paceMetric", "timeline", "recommendList", "refreshDiscover", "pocketList", "filterButton", "citySheetBackdrop", "citySheet", "cityOptions", "sketchModal", "closeSketch", "sketchCanvas", "sketchButton", "regenerateSketch", "downloadSketch", "toast", "automationToggle", "sharePlanButton"].forEach((id) => els[id] = document.getElementById(id));
}

function init() {
  loadState();
  cacheElements();
  bindEvents();
  runDailyRefresh();
  renderAll();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

function bindEvents() {
  els.cityStrip.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.city) switchCity(button.dataset.city);
    if (button.dataset.addCity !== undefined) openCitySheet();
  });
  els.cityOptions.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-city]");
    if (!button) return;
    if (!state.cityOrder.includes(button.dataset.city)) state.cityOrder.push(button.dataset.city);
    closeCitySheet();
    switchCity(button.dataset.city);
  });
  els.citySheetBackdrop.addEventListener("click", closeCitySheet);
  $$('[data-close-sheet]').forEach((button) => button.addEventListener("click", closeCitySheet));
  els.daysMinus.addEventListener("click", () => changeDays(-1));
  els.daysPlus.addEventListener("click", () => changeDays(1));
  els.generateButton.addEventListener("click", () => {
    cityCatalog[state.city].hotel = els.hotelInput.value.trim() || cityCatalog[state.city].hotel;
    state.plans = buildPlans();
    state.selectedDay = 0;
    renderPlan();
    saveState();
    showToast("双人任务已重排，顺路值 +20");
    document.getElementById("routeSection").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  els.dayTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-day]");
    if (!button) return;
    state.selectedDay = Number(button.dataset.day);
    renderPlan();
  });
  els.linkForm.addEventListener("submit", handleLinkImport);
  els.pasteButton.addEventListener("click", pasteLink);
  els.refreshDiscover.addEventListener("click", () => {
    state.discoverOffset += 2;
    renderRecommendations();
    showToast("换了一批今天值得去的地方");
  });
  els.recommendList.addEventListener("click", toggleRecommendation);
  els.filterButton.addEventListener("click", rotateFilter);
  els.sketchButton.addEventListener("click", openSketch);
  els.closeSketch.addEventListener("click", closeSketch);
  els.sketchModal.addEventListener("click", (event) => { if (event.target === els.sketchModal) closeSketch(); });
  els.regenerateSketch.addEventListener("click", () => { state.sketchVariant += 1; drawSketch(); });
  els.downloadSketch.addEventListener("click", downloadSketch);
  els.automationToggle.addEventListener("click", toggleAutomation);
  els.sharePlanButton.addEventListener("click", sharePlan);
  $$(".bottom-nav button[data-target]").forEach((button) => button.addEventListener("click", () => {
    $$(".bottom-nav button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.getElementById(button.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  $$('[data-scroll="top"]').forEach((button) => button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })));
  window.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeSketch(); closeCitySheet(); } });
}

function renderAll() {
  const city = cityCatalog[state.city];
  els.cityProvince.textContent = city.province;
  els.heroCity.textContent = state.city;
  els.cityTagline.textContent = city.tagline;
  els.routeCity.textContent = state.city;
  els.hotelInput.value = city.hotel;
  els.daysOutput.innerHTML = `${state.days} <small>天</small>`;
  $(".hero").style.removeProperty("background");
  $(".hero-stamp span").textContent = city.roman;
  renderCityStrip();
  renderCounts();
  renderCityOptions();
  state.plans = buildPlans();
  state.selectedDay = Math.min(state.selectedDay, state.plans.length - 1);
  renderPlan();
  renderRecommendations();
  renderPocket();
  els.automationToggle.classList.toggle("is-on", state.automation);
  els.automationToggle.setAttribute("aria-checked", String(state.automation));
}

function renderCityStrip() {
  els.cityStrip.innerHTML = state.cityOrder.map((city) => `<button class="city-tab ${city === state.city ? "is-active" : ""}" data-city="${city}" type="button">${city}</button>`).join("") + `<button class="city-tab add-city" data-add-city type="button" aria-label="添加城市">＋</button>`;
}

function renderCityOptions() {
  els.cityOptions.innerHTML = Object.keys(cityCatalog).map((city) => `<button class="city-option ${state.cityOrder.includes(city) ? "is-added" : ""}" data-city="${city}" type="button"><b>${city}</b><small>${state.cityOrder.includes(city) ? "已在清单" : cityCatalog[city].province + " · 添加"}</small></button>`).join("");
}

function renderCounts() {
  const city = cityCatalog[state.city];
  const ids = new Set(state.saved[state.city]);
  const imported = state.imported[state.city] || [];
  els.savedCount.textContent = ids.size + imported.length;
  els.foodCount.textContent = city.points.filter((point) => point.kind === "餐厅" && ids.has(point.id)).length || city.points.filter((point) => point.kind === "餐厅").length;
}

function switchCity(city) {
  if (!cityCatalog[city]) return;
  state.city = city;
  state.selectedDay = 0;
  els.recognitionResult.hidden = true;
  saveState();
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeDays(delta) {
  state.days = Math.max(1, Math.min(5, state.days + delta));
  els.daysOutput.innerHTML = `${state.days} <small>天</small>`;
  state.plans = buildPlans();
  state.selectedDay = Math.min(state.selectedDay, state.days - 1);
  renderPlan();
  saveState();
}

function allCityPoints(cityName = state.city) {
  return [...cityCatalog[cityName].points, ...(state.imported[cityName] || [])];
}

function buildPlans() {
  const city = cityCatalog[state.city];
  const all = allCityPoints();
  const savedIds = new Set(state.saved[state.city]);
  const attractions = all.filter((item) => item.kind !== "餐厅").sort((a, b) => (savedIds.has(b.id) - savedIds.has(a.id)) || a.rank - b.rank);
  const restaurants = all.filter((item) => item.kind === "餐厅").sort((a, b) => a.rank - b.rank);
  const target = Math.min(attractions.length, Math.max(state.days * 3, 4));
  const candidates = attractions.slice(0, target);
  const clusters = spatialClusters(candidates, state.days);
  const usedRestaurants = new Set();

  return clusters.map((cluster, dayIndex) => {
    const center = centroid(cluster.length ? cluster : [city.hotelPoint]);
    let meal = restaurants.filter((item) => !usedRestaurants.has(item.id)).sort((a, b) => distance(a, center) - distance(b, center))[0];
    if (!meal) meal = restaurants[dayIndex % restaurants.length];
    if (meal) usedRestaurants.add(meal.id);
    const routePoints = nearestRoute(city.hotelPoint, [...cluster, ...(meal ? [meal] : [])]);
    if (meal && routePoints.length > 2) {
      const mealIndex = routePoints.findIndex((item) => item.id === meal.id);
      const wantedIndex = Math.min(2, routePoints.length - 1);
      routePoints.splice(mealIndex, 1);
      routePoints.splice(wantedIndex, 0, meal);
    }
    const area = dominantArea(cluster);
    const themes = ["烟火慢游线", "文艺散步线", "风景松弛线", "古城寻味线", "在地生活线"];
    const totalDistance = routeDistance(city.hotelPoint, routePoints) * .18;
    return {
      day: dayIndex + 1,
      title: `${area.replace(/区|市|古城/g, "") || state.city}${themes[dayIndex % themes.length]}`,
      points: routePoints,
      distance: Math.max(3.2, totalDistance),
      saving: 23 + ((cluster.length * 7 + dayIndex * 5) % 16),
      weather: city.weather[dayIndex % city.weather.length]
    };
  });
}

function spatialClusters(points, k) {
  if (!points.length) return Array.from({ length: k }, () => []);
  const count = Math.min(k, points.length);
  const sorted = [...points].sort((a, b) => a.x - b.x);
  let centers = Array.from({ length: count }, (_, i) => ({ ...sorted[Math.floor(i * (sorted.length - 1) / Math.max(1, count - 1))] }));
  let groups = [];
  for (let pass = 0; pass < 7; pass++) {
    groups = Array.from({ length: count }, () => []);
    points.forEach((point) => {
      const index = centers.reduce((best, center, i) => distance(point, center) < distance(point, centers[best]) ? i : best, 0);
      groups[index].push(point);
    });
    centers = groups.map((group, index) => group.length ? centroid(group) : centers[index]);
  }
  groups.sort((a, b) => centroid(a.length ? a : [{ x: 0, y: 0 }]).x - centroid(b.length ? b : [{ x: 0, y: 0 }]).x);
  while (groups.length < k) groups.push([]);
  return groups;
}

function nearestRoute(start, points) {
  const rest = [...points];
  const result = [];
  let current = start;
  while (rest.length) {
    rest.sort((a, b) => distance(current, a) - distance(current, b));
    current = rest.shift();
    result.push(current);
  }
  return result;
}

function centroid(points) {
  return points.reduce((sum, item) => ({ x: sum.x + item.x / points.length, y: sum.y + item.y / points.length }), { x: 0, y: 0 });
}
function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function routeDistance(start, points) { return points.reduce((acc, point, i) => acc + distance(i ? points[i - 1] : start, point), 0); }
function dominantArea(points) {
  const counts = points.reduce((map, item) => ({ ...map, [item.area]: (map[item.area] || 0) + 1 }), {});
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] || "城市";
}

function renderPlan() {
  if (!state.plans.length) return;
  els.dayTabs.innerHTML = state.plans.map((plan, index) => `<button class="day-tab ${index === state.selectedDay ? "is-active" : ""}" data-day="${index}" type="button" role="tab" aria-selected="${index === state.selectedDay}"><b>DAY ${index + 1}</b>${getWeekday(index)}</button>`).join("");
  const plan = state.plans[state.selectedDay];
  els.dayDate.textContent = `DAY ${plan.day} · ${getWeekday(state.selectedDay)}`;
  els.dayTheme.textContent = plan.title;
  els.weatherChip.textContent = plan.weather;
  els.distanceMetric.textContent = `${plan.distance.toFixed(1)} km`;
  els.stopsMetric.textContent = `${plan.points.length} 站`;
  els.paceMetric.textContent = plan.points.length <= 4 ? "刚刚好" : "较充实";
  els.mapNote.textContent = `少绕路约 ${plan.saving}%`;
  renderMap(plan);
  renderTimeline(plan);
}

function getWeekday(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toLocaleDateString("zh-CN", { weekday: "short" }).replace("周", "周");
}

function renderMap(plan) {
  const hotel = cityCatalog[state.city].hotelPoint;
  const all = [hotel, ...plan.points];
  const minX = Math.min(...all.map((item) => item.x)) - 7;
  const maxX = Math.max(...all.map((item) => item.x)) + 7;
  const minY = Math.min(...all.map((item) => item.y)) - 7;
  const maxY = Math.max(...all.map((item) => item.y)) + 7;
  const sx = (x) => 32 + ((x - minX) / Math.max(1, maxX - minX)) * 276;
  const sy = (y) => 24 + ((y - minY) / Math.max(1, maxY - minY)) * 170;
  const coords = [{ ...hotel, name: "住宿" }, ...plan.points].map((item) => ({ ...item, px: sx(item.x), py: sy(item.y) }));
  const routePath = coords.map((item, index) => `${index ? "L" : "M"} ${item.px.toFixed(1)} ${item.py.toFixed(1)}`).join(" ");
  const roads = `<path class="road" d="M-10 58 C72 38 100 86 178 62 S276 36 355 62"/><path class="road" d="M48 -10 C65 55 102 87 91 232"/><path class="road" d="M248 -10 C220 55 272 119 236 232"/><path class="water" d="M-15 187 C65 151 125 210 208 176 S286 143 355 163"/>`;
  const stops = coords.map((item, index) => {
    if (!index) return `<circle class="hotel-dot" cx="${item.px}" cy="${item.py}" r="8"/><text class="map-label" x="${item.px + 11}" y="${item.py + 3}">住</text>`;
    const anchor = item.px > 235 ? "end" : "start";
    const labelX = item.px > 235 ? item.px - 13 : item.px + 13;
    return `<circle class="stop-dot" cx="${item.px}" cy="${item.py}" r="10"/><text class="stop-number" x="${item.px}" y="${item.py + .5}">${index}</text><text class="map-label" text-anchor="${anchor}" x="${labelX}" y="${item.py + 3}">${shortName(item.name, 7)}</text>`;
  }).join("");
  els.routeMap.innerHTML = `${roads}<path class="route-under" d="${routePath}"/><path class="route-line" d="${routePath}"/>${stops}`;
}

function renderTimeline(plan) {
  const times = ["09:30", "11:10", "12:40", "15:10", "17:20", "19:00"];
  els.timeline.innerHTML = plan.points.map((point, index) => `<li class="timeline-item"><span class="timeline-time">${point.kind === "餐厅" ? (index > 2 ? "18:00" : "12:30") : times[index]}</span><span class="timeline-dot">${index + 1}</span><div class="timeline-main"><b>${point.name}</b><span>${point.reason} · ${point.photoTip}</span></div><span class="timeline-tag ${point.kind === "餐厅" ? "food" : ""}">${point.kind}</span></li>`).join("");
}

function renderRecommendations() {
  const points = allCityPoints().filter((item) => !state.saved[state.city].includes(item.id));
  const source = points.length ? points : allCityPoints();
  const rotated = [...source.slice(state.discoverOffset % source.length), ...source.slice(0, state.discoverOffset % source.length)].slice(0, 5);
  els.recommendList.innerHTML = rotated.map((point, index) => `<article class="recommend-card"><div class="recommend-image" style="background:${point.gradient}"><span class="recommend-rank">TOP ${point.rank || index + 1}</span><button class="save-button ${state.saved[state.city].includes(point.id) ? "is-saved" : ""}" data-save-id="${point.id}" type="button" aria-label="收藏${point.name}">${state.saved[state.city].includes(point.id) ? "♥" : "♡"}</button><span>${point.area} · ${point.kind}</span></div><div class="recommend-copy"><b>${point.name}</b><p>${point.reason}</p><div class="recommend-meta"><span>${point.source}</span><strong>${point.kind === "餐厅" ? "想吃" : "值得去"}</strong></div></div></article>`).join("");
}

function toggleRecommendation(event) {
  const button = event.target.closest("button[data-save-id]");
  if (!button) return;
  const id = button.dataset.saveId;
  const list = state.saved[state.city];
  const index = list.indexOf(id);
  if (index >= 0) list.splice(index, 1); else list.push(id);
  state.plans = buildPlans();
  saveState();
  renderCounts();
  renderRecommendations();
  renderPocket();
  renderPlan();
  showToast(index >= 0 ? "已从共享背包移除" : "收藏成功！亲密值 +1");
}

function renderPocket() {
  const savedIds = new Set(state.saved[state.city]);
  let items = allCityPoints().filter((item) => savedIds.has(item.id) || item.imported);
  if (state.filter === "景点") items = items.filter((item) => item.kind !== "餐厅");
  if (state.filter === "餐厅") items = items.filter((item) => item.kind === "餐厅");
  if (state.filter === "笔记") items = items.filter((item) => item.imported);
  els.filterButton.textContent = `${state.filter} ⌄`;
  els.pocketList.innerHTML = items.length ? items.map((point) => `<article class="pocket-item"><div class="pocket-image" style="background:${point.gradient}">${point.source}</div><div class="pocket-main"><small>${point.area} · ${point.kind}</small><b>${point.name}</b><span>拍照点：${point.photoTip}</span></div><span class="pocket-state">${point.imported ? "已识别" : "已收藏"}</span></article>`).join("") : `<div class="empty-state">这个分类还没有内容，先去收藏几处吧。</div>`;
}

function rotateFilter() {
  const filters = ["全部", "景点", "餐厅", "笔记"];
  state.filter = filters[(filters.indexOf(state.filter) + 1) % filters.length];
  renderPocket();
}

async function pasteLink() {
  try {
    const text = await navigator.clipboard.readText();
    if (!text) throw new Error("empty");
    els.shareLink.value = text;
    showToast("链接已粘贴");
  } catch (_) {
    els.shareLink.value = "https://www.xiaohongshu.com/explore/旅行收藏示例";
    showToast("没有读取到剪贴板，已放入演示链接");
  }
}

function handleLinkImport(event) {
  event.preventDefault();
  const link = els.shareLink.value.trim();
  if (!link) {
    els.shareLink.focus();
    showToast("先粘贴一个分享链接吧");
    return;
  }
  const platform = /douyin|v\.douyin/.test(link) ? "抖音" : /xiaohongshu|xhslink/.test(link) ? "小红书" : "旅行笔记";
  els.recognitionResult.hidden = false;
  els.recognitionResult.innerHTML = `<div class="recognizing"><span class="loader"></span><span>正在读取${platform}内容，识别地点与拍照机位…</span></div>`;
  els.analyzeButton.disabled = true;
  setTimeout(() => finishRecognition(platform), 1100);
}

function finishRecognition(platform) {
  const city = cityCatalog[state.city];
  const mocks = city.points.filter((item) => item.kind !== "餐厅");
  const base = mocks[(state.imported[state.city].length + 3) % mocks.length];
  const item = {
    ...base,
    id: `import-${state.city}-${Date.now()}`,
    name: base.name,
    source: `${platform}笔记`,
    imported: true,
    rank: 0,
    x: base.x + (Math.random() * 2 - 1),
    y: base.y + (Math.random() * 2 - 1)
  };
  state.imported[state.city].unshift(item);
  state.saved[state.city].push(item.id);
  els.recognitionResult.innerHTML = `<article class="recognized-card"><div class="recognized-cover" style="background:${item.gradient}">封面已保存</div><div class="recognized-copy"><small>${platform} · 识别完成</small><b>${item.name}</b><span>地点：${item.area}<br>机位：${item.photoTip}</span></div><span class="confidence">96%可信</span></article>`;
  els.analyzeButton.disabled = false;
  els.shareLink.value = "";
  state.plans = buildPlans();
  saveState();
  renderCounts();
  renderPlan();
  renderPocket();
  showToast("新地点解锁！已放进共享背包");
}

function openCitySheet() {
  renderCityOptions();
  els.citySheetBackdrop.hidden = false;
  els.citySheet.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeCitySheet() {
  els.citySheetBackdrop.hidden = true;
  els.citySheet.hidden = true;
  if (els.sketchModal.hidden) document.body.style.overflow = "";
}

function openSketch() {
  els.sketchModal.hidden = false;
  document.body.style.overflow = "hidden";
  drawSketch();
}
function closeSketch() {
  els.sketchModal.hidden = true;
  if (els.citySheet.hidden) document.body.style.overflow = "";
}

function drawSketch() {
  const canvas = els.sketchCanvas;
  const ctx = canvas.getContext("2d");
  const plan = state.plans[state.selectedDay];
  const city = cityCatalog[state.city];
  const seed = state.sketchVariant + state.selectedDay * 11 + state.city.length;
  const rnd = mulberry32(seed);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff9eb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = .08;
  ctx.fillStyle = "#213029";
  for (let i = 0; i < 900; i++) ctx.fillRect(rnd() * 1080, rnd() * 1440, rnd() * 2 + .5, rnd() * 2 + .5);
  ctx.globalAlpha = 1;

  ctx.save();
  ctx.translate(72, 70);
  ctx.rotate(-.015);
  ctx.fillStyle = city.palette[0];
  roundRect(ctx, 0, 0, 936, 238, 38);
  ctx.fill();
  roughStroke(ctx, 0, 0, 936, 238, 38, "#213029", 6);
  ctx.fillStyle = "#213029";
  ctx.font = '900 34px "PingFang SC", sans-serif';
  ctx.fillText(`${city.province} · ${city.roman}`, 48, 56);
  ctx.font = '900 86px "PingFang SC", sans-serif';
  ctx.fillText(`${state.city}慢游`, 46, 150);
  ctx.font = '700 26px "PingFang SC", sans-serif';
  ctx.fillText(`DAY ${plan.day}  /  ${plan.title}`, 49, 201);
  ctx.fillStyle = "#ff6b3d";
  ctx.beginPath(); ctx.arc(820, 108, 70, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "#213029"; ctx.lineWidth = 5; ctx.stroke();
  ctx.fillStyle = "#fff9eb"; ctx.textAlign = "center"; ctx.font = '900 33px "PingFang SC", sans-serif'; ctx.fillText("去走", 820, 118);
  ctx.restore();

  const map = { x: 72, y: 348, w: 936, h: 520 };
  ctx.fillStyle = "#dce5d6";
  roundRect(ctx, map.x, map.y, map.w, map.h, 35); ctx.fill();
  roughStroke(ctx, map.x, map.y, map.w, map.h, 35, "#213029", 5);
  ctx.strokeStyle = "rgba(255,249,235,.9)"; ctx.lineWidth = 25; ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(60, 500); ctx.bezierCurveTo(310, 410, 560, 600, 1030, 470); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(260, 330); ctx.bezierCurveTo(220, 510, 360, 690, 300, 880); ctx.stroke();
  ctx.strokeStyle = "rgba(83,145,166,.45)"; ctx.lineWidth = 22;
  ctx.beginPath(); ctx.moveTo(55, 790); ctx.bezierCurveTo(310, 700, 630, 875, 1030, 740); ctx.stroke();

  const raw = [city.hotelPoint, ...plan.points];
  const minX = Math.min(...raw.map((item) => item.x)) - 5;
  const maxX = Math.max(...raw.map((item) => item.x)) + 5;
  const minY = Math.min(...raw.map((item) => item.y)) - 5;
  const maxY = Math.max(...raw.map((item) => item.y)) + 5;
  const coords = raw.map((item) => ({
    ...item,
    px: map.x + 80 + ((item.x - minX) / Math.max(1, maxX - minX)) * (map.w - 160),
    py: map.y + 70 + ((item.y - minY) / Math.max(1, maxY - minY)) * (map.h - 140)
  }));
  ctx.strokeStyle = "#fff9eb"; ctx.lineWidth = 18; ctx.lineCap = "round"; ctx.lineJoin = "round";
  ctx.beginPath(); coords.forEach((item, index) => index ? ctx.lineTo(item.px, item.py) : ctx.moveTo(item.px, item.py)); ctx.stroke();
  ctx.strokeStyle = "#ff6b3d"; ctx.lineWidth = 8; ctx.setLineDash([18, 15]);
  ctx.beginPath(); coords.forEach((item, index) => index ? ctx.lineTo(item.px, item.py) : ctx.moveTo(item.px, item.py)); ctx.stroke(); ctx.setLineDash([]);
  coords.forEach((item, index) => {
    ctx.fillStyle = index ? "#f2d16c" : "#213029";
    ctx.beginPath(); ctx.arc(item.px, item.py, index ? 29 : 25, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#213029"; ctx.lineWidth = 5; ctx.stroke();
    ctx.fillStyle = index ? "#213029" : "#fff9eb"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.font = '900 26px "PingFang SC", sans-serif'; ctx.fillText(index ? index : "住", item.px, item.py + 1);
    const alignRight = item.px > 720;
    ctx.textAlign = alignRight ? "right" : "left"; ctx.textBaseline = "alphabetic"; ctx.font = '900 24px "PingFang SC", sans-serif'; ctx.fillStyle = "#213029";
    ctx.fillText(index ? shortName(item.name, 9) : shortName(city.hotel, 9), item.px + (alignRight ? -38 : 38), item.py + 8);
  });
  ctx.fillStyle = "#fff9eb"; roundRect(ctx, 94, 788, 235, 52, 12); ctx.fill(); ctx.strokeStyle = "#213029"; ctx.lineWidth = 4; ctx.stroke();
  ctx.fillStyle = "#213029"; ctx.textAlign = "left"; ctx.font = '900 23px "PingFang SC", sans-serif'; ctx.fillText(`少绕路约 ${plan.saving}%`, 118, 822);

  ctx.fillStyle = "#213029"; ctx.font = '900 35px "PingFang SC", sans-serif'; ctx.fillText("今天这样走", 76, 936);
  ctx.strokeStyle = "#ff6b3d"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(74, 951); ctx.quadraticCurveTo(176, 938, 286, 951); ctx.stroke();

  const startY = 995;
  const rowH = 92;
  const times = ["09:30", "11:10", "12:30", "15:10", "17:20"];
  plan.points.slice(0, 4).forEach((point, index) => {
    const y = startY + rowH * index;
    ctx.fillStyle = index % 2 ? "#f2ead9" : "#fff9eb";
    roundRect(ctx, 72, y - 42, 936, 76, 18); ctx.fill();
    ctx.fillStyle = point.kind === "餐厅" ? "#ffd4c3" : "#b9d5b2";
    ctx.beginPath(); ctx.arc(118, y - 4, 25, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = "#213029"; ctx.lineWidth = 4; ctx.stroke();
    ctx.fillStyle = "#213029"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.font = '900 22px "PingFang SC", sans-serif'; ctx.fillText(index + 1, 118, y - 3);
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic"; ctx.font = '800 22px "PingFang SC", sans-serif'; ctx.fillStyle = "#657067"; ctx.fillText(point.kind === "餐厅" ? "12:30" : times[index], 165, y + 4);
    ctx.fillStyle = "#213029"; ctx.font = '900 27px "PingFang SC", sans-serif'; ctx.fillText(shortName(point.name, 14), 270, y + 5);
    ctx.fillStyle = "#657067"; ctx.font = '600 18px "PingFang SC", sans-serif'; ctx.textAlign = "right"; ctx.fillText(shortName(point.photoTip, 13), 978, y + 3);
  });

  ctx.fillStyle = "#213029"; ctx.textAlign = "left"; ctx.font = '700 20px "PingFang SC", sans-serif';
  ctx.fillText(`从「${shortName(city.hotel, 10)}」出发 · ${plan.distance.toFixed(1)}km · ${plan.points.length}站`, 76, 1390);
  ctx.textAlign = "right"; ctx.fillStyle = "#ff6b3d"; ctx.font = '900 20px "PingFang SC", sans-serif'; ctx.fillText("漫游笺 · 收藏变路书", 1005, 1390);
}

function roughStroke(ctx, x, y, w, h, r, color, width) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width; roundRect(ctx, x, y, w, h, r); ctx.stroke(); ctx.restore();
}
function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y); ctx.arcTo(x + w, y, x + w, y + h, radius); ctx.arcTo(x + w, y + h, x, y + h, radius); ctx.arcTo(x, y + h, x, y, radius); ctx.arcTo(x, y, x + w, y, radius); ctx.closePath();
}
function mulberry32(seed) { return function() { let t = seed += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

function downloadSketch() {
  const name = `${state.city}-DAY${state.selectedDay + 1}-漫游笺.png`;
  els.sketchCanvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("像素冒险卡已保存到相册");
  }, "image/png");
}

async function sharePlan() {
  const plan = state.plans[state.selectedDay];
  const text = `${state.city} DAY ${plan.day}｜${plan.title}\n${plan.points.map((item, i) => `${i + 1}. ${item.name}`).join(" → ")}`;
  try {
    if (navigator.share) await navigator.share({ title: `${state.city}慢游计划`, text });
    else { await navigator.clipboard.writeText(text); showToast("路线文字已复制"); }
  } catch (_) {}
}

function toggleAutomation() {
  state.automation = !state.automation;
  els.automationToggle.classList.toggle("is-on", state.automation);
  els.automationToggle.setAttribute("aria-checked", String(state.automation));
  saveState();
  showToast(state.automation ? "已开启每天 10:00 自动更新" : "已暂停自动更新");
}

function runDailyRefresh() {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const last = localStorage.getItem("manyoujian-last-refresh");
  const afterTen = now.getHours() >= 10;
  if (state.automation && afterTen && last !== today) {
    localStorage.setItem("manyoujian-last-refresh", today);
    state.discoverOffset = (state.discoverOffset + 1) % 7;
    saveState();
  }
  els.updateText.textContent = afterTen ? "今日 10:00 已更新" : "昨晚收藏已整理";
}

function shortName(text, length) { return text.length > length ? `${text.slice(0, length)}…` : text; }
function showToast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2200);
}

document.addEventListener("DOMContentLoaded", init);
