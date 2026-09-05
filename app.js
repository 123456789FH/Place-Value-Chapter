const DIGITS = "٠١٢٣٤٥٦٧٨٩";
const arNum = (v) => String(v).replace(/\d/g,d=>DIGITS[d]);
const rand = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
const pick = (a) => a[Math.floor(Math.random()*a.length)];
const shuffle = (arr) => [...arr].sort(()=>Math.random()-.5);
const formatN = (n) => arNum(n.toLocaleString("en-US").replaceAll(",","٬"));

const skills = [
  {
    id:"patterns", icon:"🚂", place:"قطار الأنماط", title:"الأنماط العددية",
    subtitle:"أكتشف القاعدة ثم أستخدمها لإكمال النمط.",
    rule:"أقارن بين كل عدد والذي يليه لأعرف: هل يزيد النمط أم ينقص؟ وبكم؟",
    example:"٥، ١٠، ١٥، ٢٠، …  القاعدة: أزيد ٥",
    objective:"أن يكتشف الطالب قاعدة النمط العددي ويكمل النمط بصورة صحيحة.",
    teacher:{
      idea:"ابدأ بعددين متتاليين، واسأل: ما التغير بينهما؟ كرر الفحص قبل إعلان القاعدة.",
      model:"اعرض: ٢٠، ٣٠، ٤٠، ٥٠. ظلّل الفرق بين كل عددين، ثم استنتج «أزيد ١٠».",
      activity:"بطاقات بشرية: وزّع أعداد النمط على الطلاب، ثم اطلب منهم الوقوف بالترتيب وذكر القاعدة.",
      challenge:"اعرض نمطًا فيه خانة مفقودة في المنتصف، لا في النهاية، واطلب تبرير الإجابة.",
      error:"الخطأ الشائع: الاعتماد على شكل الأعداد دون فحص الفرق الثابت بين الحدود.",
      exit:["أكمل: ١٢، ١٧، ٢٢، __","ما قاعدة النمط: ٤٠، ٣٥، ٣٠، ٢٥؟","كوّن نمطًا قاعدته: أزيد ١٠."]
    }
  },
  {
    id:"solve", icon:"🕵️", place:"مركز المحقق الرياضي", title:"مهارة حل المسألة",
    subtitle:"أفهم • أخطط • أحل • أتحقق.",
    rule:"أحدد المعطيات والمطلوب أولًا، ثم أختار خطة، وأنفذها، وأتأكد أن الإجابة معقولة.",
    example:"أفهم المسألة ← أحدد المطلوب ← أختار خطة ← أحل ← أتحقق",
    objective:"أن يستخدم الطالب الخطوات الأربع لتنظيم حل المسألة والتحقق من معقولية الإجابة.",
    teacher:{
      idea:"لا تبدأ بالعملية الحسابية. اطلب أولًا: ماذا نعرف؟ ماذا نريد أن نعرف؟",
      model:"اكتب مسألة قصيرة ثم لوّن المعطيات بلون والمطلوب بلون آخر، وبعدها اختر الخطة.",
      activity:"أربع زوايا في الفصل: أفهم، أخطط، أحل، أتحقق. ينتقل الطلاب بينها مع المسألة.",
      challenge:"أعط الطلاب حلًا جاهزًا واطلب منهم تحديد الخطوة التي لم تُنفذ بصورة صحيحة.",
      error:"الخطأ الشائع: اختيار العملية قبل فهم المطلوب أو إهمال خطوة التحقق.",
      exit:["ما أول خطوة عند حل المسألة؟","متى أتحقق من الحل؟","اذكر معلومة واحدة يجب تحديدها قبل اختيار الخطة."]
    }
  },
  {
    id:"place", icon:"🏗️", place:"برج القيمة المنزلية", title:"القيمة المنزلية",
    subtitle:"أحدد منزلة الرقم وأعرف قيمته داخل العدد.",
    rule:"قيمة الرقم تتغير بتغير منزله: آحاد، عشرات، مئات، ألوف، عشرات ألوف.",
    example:"في العدد ٣٥٢: الرقم ٥ في منزلة العشرات وقيمته ٥٠.",
    objective:"أن يميز الطالب بين الرقم والمنزلة والقيمة المنزلية باستخدام جدول المنازل.",
    teacher:{
      idea:"فرّق لفظيًا وبصريًا بين «الرقم»، و«اسم المنزلة»، و«قيمة الرقم».",
      model:"اكتب ٣٥٢ ثم انقل الرقم ٥ بين المنازل، وناقش كيف تتغير قيمته.",
      activity:"بطاقات منازل على الطاولة، وبطاقات أرقام يضعها الطلاب في الموضع المطلوب.",
      challenge:"كوّن عددًا تكون فيه قيمة الرقم ٦ هي ٦٠٠ دون تغيير بقية الشروط.",
      error:"الخطأ الشائع: القول إن قيمة ٥ في منزلة العشرات هي ٥ بدل ٥٠.",
      exit:["ما قيمة ٤ في العدد ٤٧٢؟","ما منزلة ٦ في العدد ٢٦٥؟","اكتب عددًا تكون فيه قيمة ٣ هي ٣٠."]
    }
  },
  {
    id:"thousands", icon:"🏙️", place:"حي الألوف", title:"القيمة المنزلية ضمن الألوف",
    subtitle:"أقرأ وأكتب وأحلل الأعداد حتى منزلة الألوف.",
    rule:"العدد المكوّن من أربعة أرقام يتوزع على: آحاد، عشرات، مئات، ألوف.",
    example:"٤٣٢٥ = ٤٠٠٠ + ٣٠٠ + ٢٠ + ٥",
    objective:"أن يكتب الطالب العدد ضمن الألوف بالصور القياسية والتحليلية واللفظية ويحدد قيمة أرقامه.",
    teacher:{
      idea:"اربط بين جدول المنازل والصيغة التحليلية؛ كل رقم يأخذ قيمة منزله.",
      model:"كوّن ٤٣٢٥ في الجدول ثم حوّله خطوة خطوة إلى الصيغة التحليلية.",
      activity:"مظاريف المنازل: يسحب الطالب أربعة أرقام ويكوّن منها عددًا ثم يكتبه بثلاث صور.",
      challenge:"أعط صيغة تحليلية ناقصة واطلب اكتشاف الحد المفقود.",
      error:"الخطأ الشائع: إسقاط المنازل التي تحتوي صفرًا أو وضع الرقم في منزلة غير صحيحة.",
      exit:["حلّل العدد ٣٤٢١.","ما قيمة ٧ في ٧٢٥٤؟","اكتب بالصيغة القياسية: ٥٠٠٠ + ٢٠٠ + ٣٠ + ٨."]
    }
  },
  {
    id:"tenThousands", icon:"🌆", place:"مدينة عشرات الألوف", title:"القيمة المنزلية ضمن عشرات الألوف",
    subtitle:"أتعامل مع أعداد مكوّنة من خمسة أرقام.",
    rule:"في العدد ذي خمسة أرقام تكون أكبر منزلة هي عشرات الألوف.",
    example:"٢٥٣٠٤ = ٢٠٠٠٠ + ٥٠٠٠ + ٣٠٠ + ٤",
    objective:"أن يقرأ الطالب الأعداد ضمن عشرات الألوف ويكتبها ويحللها ويحدد القيمة المنزلية لكل رقم.",
    teacher:{
      idea:"ابدأ من أكبر منزلة يمينًا/يسارًا بحسب الجدول المرئي، وسمِّ كل منزلة بوضوح.",
      model:"حلّل ٢٥٣٠٤، ثم أبرز منزلة الصفر وناقش لماذا لا نكتب حدًا لها في التحليل.",
      activity:"بنك الأعداد: يعطي المعلم شروطًا مثل «عشرات الألوف ٣، المئات ٧» ليكوّن الطلاب العدد.",
      challenge:"كوّن أكبر عدد وأصغر عدد من مجموعة أرقام مع الالتزام بكل رقم مرة واحدة.",
      error:"الخطأ الشائع: الخلط بين الألوف وعشرات الألوف عند قراءة العدد أو تحديد القيمة.",
      exit:["ما قيمة ٥ في ٥٢٣٤١؟","حلّل ٤٠٧٠٢.","ما منزلة ٨ في ٢٨٣١٥؟"]
    }
  },
  {
    id:"compare", icon:"⚖️", place:"جسر المقارنة", title:"مقارنة الأعداد",
    subtitle:"أستخدم > أو < أو = بعد المقارنة من أكبر منزلة.",
    rule:"أبدأ من أكبر منزلة. إذا تساوت الأرقام أنتقل إلى المنزلة التالية حتى أجد أول اختلاف.",
    example:"٤٣٢٥ < ٤٣٥٢ لأن الألوف والمئات متساوية، و٢ عشرات أصغر من ٥ عشرات.",
    objective:"أن يقارن الطالب بين عددين باستخدام رموز المقارنة مع تفسير سبب اختياره.",
    teacher:{
      idea:"لا تعتمد على عدد الأرقام فقط عندما يكون العددان من الطول نفسه؛ قارن منزلة بمنزلة.",
      model:"استخدم جدولين متجاورين وحرّك مؤشرًا من أكبر منزلة حتى أول اختلاف.",
      activity:"ميزان الأعداد: فريق يمسك العدد الأول وآخر الثاني، وطالب ثالث يرفع رمز المقارنة الصحيح.",
      challenge:"اختر عددًا يقع بين عددين معطيين ثم برر أنه يحقق الشرط.",
      error:"الخطأ الشائع: النظر إلى رقم منفرد داخل العدد بدل مقارنة القيم المنزلية بالترتيب.",
      exit:["ضع الرمز: ٤٣٢٥ __ ٤٣٥٢","أيهما أكبر: ١٩٩٩ أم ٢٠٠١؟","متى أستخدم الرمز = ؟"]
    }
  },
  {
    id:"order", icon:"🏁", place:"مضمار الترتيب", title:"ترتيب الأعداد",
    subtitle:"أرتب مجموعة أعداد تصاعديًا أو تنازليًا.",
    rule:"أقارن الأعداد أولًا، ثم أرتبها من الأصغر إلى الأكبر أو من الأكبر إلى الأصغر.",
    example:"٢١٠٥، ٢٣٠١، ٢٣١٠، ٢٥٠٠  ترتيب تصاعدي.",
    objective:"أن يرتب الطالب مجموعة من الأعداد تصاعديًا أو تنازليًا باستخدام القيمة المنزلية.",
    teacher:{
      idea:"حوّل الترتيب إلى سلسلة مقارنات قصيرة، وابدأ بأكبر منزلة.",
      model:"اعرض أربعة أعداد واطلب أولًا تحديد الأصغر فقط، ثم أكمل بنفس الاستراتيجية.",
      activity:"سباق البطاقات: يحمل أربعة طلاب أعدادًا ويقفون حسب الترتيب المطلوب.",
      challenge:"أعط ترتيبًا خاطئًا فيه تبديل واحد فقط واطلب تحديد موضع الخطأ.",
      error:"الخطأ الشائع: ترتيب الأرقام داخل العدد بدل ترتيب الأعداد نفسها.",
      exit:["رتب تصاعديًا: ٣٢٠١، ٣١٩٩، ٣٢١٠.","ماذا يعني تنازليًا؟","ما أول خطوة لترتيب أربعة أعداد؟"]
    }
  },
  {
    id:"round10_100", icon:"🎯", place:"ساحة التقريب", title:"التقريب إلى أقرب عشرة ومئة",
    subtitle:"أحدد منزلة التقريب ثم أنظر إلى الرقم الذي على يمينها.",
    rule:"إذا كان الرقم على يمين منزلة التقريب ٥ أو أكثر أزيد واحدًا، وإذا كان أقل من ٥ أبقي رقم المنزلة كما هو.",
    example:"٣٤٧ ≈ ٣٥٠ إلى أقرب عشرة، و٣٤٧ ≈ ٣٠٠ إلى أقرب مئة.",
    objective:"أن يقرب الطالب الأعداد إلى أقرب عشرة وأقرب مئة باستخدام خط الأعداد أو قاعدة التقريب.",
    teacher:{
      idea:"ابدأ بخط الأعداد قبل القاعدة المختصرة؛ اسأل: إلى أي عدد أقرب؟",
      model:"ضع ٣٤٧ بين ٣٤٠ و٣٥٠، ثم بين ٣٠٠ و٤٠٠، وناقش المسافة.",
      activity:"خط أعداد أرضي: يقف الطالب عند العدد ثم يتحرك نحو الأقرب.",
      challenge:"اعرض عددًا ينتهي بـ٥ في منزلة الفحص واطلب تفسير سبب الرفع.",
      error:"الخطأ الشائع: النظر إلى رقم غير مجاور لمنزلة التقريب أو تغيير أكثر من منزلة بصورة خاطئة.",
      exit:["قرّب ٦٤ إلى أقرب عشرة.","قرّب ٢٦٢ إلى أقرب مئة.","ما الرقم الذي أنظر إليه عند التقريب لأقرب عشرة؟"]
    }
  },
  {
    id:"round1000", icon:"🏰", place:"برج الألف", title:"التقريب إلى أقرب ألف",
    subtitle:"أحدد الألف الأقرب للعدد.",
    rule:"عند التقريب إلى أقرب ألف أنظر إلى منزلة المئات: ٥ أو أكثر أزيد الألوف واحدًا، وأقل من ٥ أبقيها.",
    example:"٢٦٧٤ ≈ ٣٠٠٠ إلى أقرب ألف.",
    objective:"أن يقرب الطالب عددًا إلى أقرب ألف ويبرر اختياره باستخدام المئات أو خط الأعداد.",
    teacher:{
      idea:"اربط العدد بألفين متتاليين، ثم اسأل أيهما أقرب قبل تقديم القاعدة.",
      model:"ضع ٢٦٧٤ بين ٢٠٠٠ و٣٠٠٠ وأظهر أنه تجاوز المنتصف ٢٥٠٠.",
      activity:"بطاقات آلاف: يختار الطالب البطاقة الأقرب لعدد يعلنه المعلم.",
      challenge:"أعط نتيجة تقريب واطلب اقتراح ثلاثة أعداد مختلفة يمكن أن تقرّب إليها.",
      error:"الخطأ الشائع: التقريب إلى المئة بدل الألف أو النظر إلى منزلة العشرات.",
      exit:["قرّب ٤٣٢١ إلى أقرب ألف.","ما منزلة الفحص عند التقريب إلى الألف؟","هل ٦٤٩٩ أقرب إلى ٦٠٠٠ أم ٧٠٠٠؟"]
    }
  }
];

const state = {
  screen:"homeScreen", prev:"homeScreen", skill:skills[0], mode:"learn", tab:"learn",
  quiz:null, orderPick:[], challenge:{i:0,score:0,questions:[]}
};

const mascotMessages = [
  "ابدأ من الفهم أولًا، ثم انتقل إلى التدريب خطوة خطوة.",
  "إذا أخطأت فلا تقلق، الخطأ يساعدك على التعلّم 🌟",
  "في القيمة المنزلية: انظر إلى منزلة الرقم قبل أن تحدد قيمته.",
  "في المقارنة: ابدأ من أكبر منزلة، ثم انتقل إلى التالية.",
  "في التقريب: انظر إلى الرقم الذي على يمين منزلة التقريب.",
  "في الأنماط العددية: اكتشف الفرق بين كل عدد والذي يليه.",
  "يمكنك العودة لأي مهارة في أي وقت ومراجعتها من جديد."
];

const modeLines = {
  learn: "رائع! ابدأ بالفهم، ثم جرّب المهارة بيدك حتى تتضح الفكرة.",
  practice: "أحسنت! التدريب المتدرج يساعدك على الوصول إلى الإتقان.",
  challenge: "ممتاز! الآن اختبر نفسك، وأظهر مدى إتقانك للمهارة."
};

const homeGameAccents = [
  "rgba(255,210,100,.45)",
  "rgba(139,231,183,.42)",
  "rgba(145,228,255,.42)",
  "rgba(255,181,210,.40)",
  "rgba(213,203,255,.40)",
  "rgba(255,224,143,.42)",
  "rgba(170,231,255,.42)",
  "rgba(255,197,120,.38)",
  "rgba(188,168,255,.38)"
];
const homeGameTags = {
  patterns:["اكتشف","أكمل"],
  solve:["افهم","خطط"],
  place:["ابنِ","حدّد"],
  thousands:["اكتب","حلّل"],
  tenThousands:["كوّن","اقرأ"],
  compare:["قارن","اختر"],
  order:["رتّب","اسحب"],
  round10_100:["قرّب","خط أعداد"],
  round1000:["ألف","فسّر"]
};

const featuredSkillIds = ["patterns","place","compare"];
const skillShortDesc = {
  patterns: "أكمل عربات القطار بعد اكتشاف القاعدة العددية.",
  place: "ابنِ العدد داخل البرج وحدد قيمة كل رقم.",
  compare: "ضع رمز المقارنة الصحيح على جسر الأعداد.",
  solve: "نظم خطوات الحل مثل محقق صغير.",
  thousands: "اكتب وحلل الأعداد ضمن الألوف.",
  tenThousands: "كوّن أعدادًا أكبر واقرأها بثقة.",
  order: "رتّب الأعداد على المضمار من الأصغر أو الأكبر.",
  round10_100: "قرّب العدد باستخدام خط الأعداد.",
  round1000: "اختر الألف الأقرب للوصول إلى البرج."
};

const skillThemes = {
  patterns:{scene:"🚂", badge:"لعبة الأنماط", accent:"#ffd264", a:"#1f4164", b:"#50679f", glow:"rgba(255,210,100,.18)", msg:"راقب الفرق بين الأعداد داخل عربات القطار، ثم أكمل النمط."},
  solve:{scene:"🕵️", badge:"مكتب التحقيق", accent:"#cdc2ff", a:"#22345b", b:"#4b4e89", glow:"rgba(205,194,255,.18)", msg:"نحل المسألة مثل المحقق الصغير: أفهم، أخطط، أحل، ثم أتحقق."},
  place:{scene:"🏗️", badge:"برج المنازل", accent:"#79e7c6", a:"#1f3f52", b:"#476d80", glow:"rgba(121,231,198,.20)", msg:"ضع كل رقم في منزله الصحيح، ثم اكتشف قيمة كل رقم داخل العدد."},
  thousands:{scene:"🏙️", badge:"حي الألوف", accent:"#9ce3ff", a:"#1e4060", b:"#4d7394", glow:"rgba(156,227,255,.20)", msg:"في هذه المحطة ستقرأ الأعداد ضمن الألوف وتكتبها وتحللها."},
  tenThousands:{scene:"🌆", badge:"مدينة كبيرة", accent:"#cdbfff", a:"#2d3f69", b:"#5d6ab1", glow:"rgba(205,191,255,.20)", msg:"ابدأ من أكبر منزلة، وسمِّ كل منزلة بوضوح حتى عشرات الألوف."},
  compare:{scene:"⚖️", badge:"جسر الأعداد", accent:"#91e4ff", a:"#1d4260", b:"#496b95", glow:"rgba(145,228,255,.20)", msg:"قارن من أكبر منزلة، ثم ضع الرمز الصحيح على جسر المقارنة."},
  order:{scene:"🏁", badge:"سباق الأعداد", accent:"#ffbfd7", a:"#3c335d", b:"#7a5887", glow:"rgba(255,191,215,.18)", msg:"اكتشف العدد الأصغر أو الأكبر، ثم رتب الأعداد على المضمار."},
  round10_100:{scene:"🎯", badge:"ساحة التقريب", accent:"#f3c96b", a:"#4a3a22", b:"#7a6135", glow:"rgba(243,201,107,.20)", msg:"انظر إلى الرقم الذي على يمين منزلة التقريب قبل أن تقرر."},
  round1000:{scene:"🏰", badge:"برج الألف", accent:"#ffe28e", a:"#504020", b:"#8b7036", glow:"rgba(255,226,142,.20)", msg:"ابحث عن الألف الأقرب، ثم قرر إلى أي ألف سيذهب العدد."}
};

function themeFor(id){
  return skillThemes[id] || skillThemes.place;
}
function masteryStars(value){
  const n = value>=90 ? 5 : value>=80 ? 4 : value>=60 ? 3 : value>=40 ? 2 : value>0 ? 1 : 0;
  return Array.from({length:5}, (_,i)=>`<span>${i<n?"⭐":"☆"}</span>`).join("");
}
function nextSkillRec(){
  const entries = skills.map(s=>({skill:s, score:mastery[s.id]||0}));
  const unfinished = entries.filter(x=>x.score<80).sort((a,b)=>a.score-b.score);
  return unfinished[0]?.skill || skills[0];
}




const $ = s=>document.querySelector(s);
const $$ = s=>[...document.querySelectorAll(s)];
const mastery = JSON.parse(localStorage.getItem("cityMastery")||"{}");
const saveMastery = () => localStorage.setItem("cityMastery",JSON.stringify(mastery));
const toast = (msg)=>{ const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1600); };

function go(id){
  state.prev = state.screen;
  state.screen = id;
  $$(".screen").forEach(s=>s.classList.toggle("active",s.id===id));
  $("#backBtn").classList.toggle("hidden",id==="homeScreen");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="homeScreen"){ renderFeaturedGames(); renderHomeGames(); }
  if(id==="studentScreen") renderFeaturedGames();
renderHomeGames();
renderStudent();
$$(".mode-card").forEach(x=>x.classList.toggle("selected",x.dataset.mode===state.mode));
  if(id==="teacherScreen") renderTeacher();
  if(id==="clinicScreen") renderClinic();
  if(id==="challengeScreen") startChallenge();
}
function goHome(){go("homeScreen")}
$("#homeBrand").onclick=goHome;
$("#homeBrand").onkeydown=e=>{if(e.key==="Enter")goHome()};
$("#backBtn").onclick=()=>go(state.screen==="skillScreen"?"studentScreen":"homeScreen");
$("#soundlessInfo").onclick=()=>toast("التطبيق يعمل دون موسيقى أو مؤثرات صوتية.");

$$("[data-go]").forEach(b=>b.onclick=()=>{
  go(b.dataset.go);
  if(b.dataset.focusMap) setTimeout(()=>$("#skillsMap")?.scrollIntoView({behavior:"smooth"}),120);
});

function overall(){
  const vals=skills.map(s=>mastery[s.id]||0);
  return Math.round(vals.reduce((a,b)=>a+b,0)/skills.length);
}


function renderFeaturedGames(){
  const box=$("#homeFeatureBoard");
  if(!box) return;
  const accentMap={
    patterns:"rgba(255,210,100,.55)",
    place:"rgba(139,231,183,.55)",
    compare:"rgba(145,228,255,.55)"
  };
  box.innerHTML = featuredSkillIds.map((id,idx)=>{
    const s=skills.find(x=>x.id===id);
    const m=mastery[s.id]||0;
    const label = idx===0 ? "لعبة متحركة" : idx===1 ? "مختبر تفاعلي" : "تحدٍّ بصري";
    return `<button class="feature-game" data-home-skill="${s.id}" style="--featureAccent:${accentMap[s.id]}">
      <span class="feature-badge">${label}</span>
      <div class="feature-icon">${s.icon}</div>
      <h3>${s.place}</h3>
      <p>${skillShortDesc[s.id] || s.title}</p>
      <div class="feature-actions">
        <small>${m?`إتقانك: ${arNum(m)}٪`:"ابدأ من هنا"}</small>
        <span class="feature-play">العب الآن</span>
      </div>
    </button>`;
  }).join("");
  $$("[data-home-skill]").forEach(btn => btn.onclick = () => openSkill(btn.dataset.homeSkill, "learn"));
}

function renderHomeGames(){
  const box=$("#homeGameWorld");
  if(!box) return;
  box.innerHTML = skills.map((s,i)=>{
    const m = mastery[s.id]||0;
    const tags = (homeGameTags[s.id]||["تعلّم","العب"]).map(t=>`<span>${t}</span>`).join("");
    return `<button class="game-island" data-home-skill="${s.id}" style="--accent:${homeGameAccents[i % homeGameAccents.length]}">
      <div class="game-no">${arNum(i+1)}</div>
      <div class="game-icon">${s.icon}</div>
      <h3>${s.place}</h3>
      <p>${s.title}</p>
      <div class="game-tags">${tags}</div>
      <div class="game-footer"><small>إتقانك: ${arNum(m)}٪</small><span class="play-btn">ابدأ اللعبة</span></div>
    </button>`;
  }).join("");
  $$("[data-home-skill]").forEach(btn => btn.onclick = () => openSkill(btn.dataset.homeSkill, "learn"));
}

function renderStudent(){
  const ov=overall(), deg=Math.round(ov*3.6);
  const finished=skills.filter(s=>(mastery[s.id]||0)>=80).length;
  const next=nextSkillRec();
  $("#overallRing").style.background=`conic-gradient(var(--gold) ${deg}deg,rgba(255,255,255,.08) 0)`;
  $("#overallRing b").textContent=arNum(ov)+"٪";
  if($("#mascotLine")) $("#mascotLine").textContent = modeLines[state.mode] || modeLines.learn;
  if($("#studentProgressText")) $("#studentProgressText").textContent = state.mode==="learn" ? "أنت الآن في طريق الفهم. اختر محطة وابدأ من الفكرة الأساسية." : state.mode==="practice" ? "أنت الآن في طريق التدريب. اختر محطة وابدأ بأسئلة متدرجة." : "أنت الآن في طريق التحدي. اختر محطة واختبر نفسك.";
  if($("#studentSummaryChips")) $("#studentSummaryChips").innerHTML = `
    <span class="chip">🏁 محطات منجزة: ${arNum(finished)} / ${arNum(skills.length)}</span>
    <span class="chip">⭐ مستوى الإتقان العام: ${arNum(ov)}٪</span>
    <span class="chip">🎯 طريقك الحالي: ${state.mode==="learn"?"الفهم":state.mode==="practice"?"التدريب":"التحدي"}</span>
  `;
  if($("#studentNextSkillTitle")) $("#studentNextSkillTitle").textContent = next.place;
  if($("#studentNextSkillDesc")) $("#studentNextSkillDesc").textContent = next.subtitle;
  $("#goNextSkillBtn").onclick=()=>openSkill(next.id,state.mode);

  renderFeaturedGames();
  renderHomeGames();
  $("#skillMap").innerHTML=skills.map((s,i)=>{
    const m=mastery[s.id]||0;
    const tags = homeGameTags[s.id] || ["تعلّم","العب"];
    return `<button class="skill-card theme-${s.id} ${m>=80?"done":""}" data-skill="${s.id}">
      <span class="num">${arNum(i+1)}</span><span class="icon">${s.icon}</span>
      <b>${s.place}</b><small>${s.title}</small>
      <div class="progress"><i style="width:${m}%"></i></div>
      <div class="skill-stars">${masteryStars(m)}</div>
      <div class="skill-bubble">${s.icon} ${tags[0]} • ${tags[1]}</div>
      <div class="game-footer"><small>${m?`إتقانك: ${arNum(m)}٪`:"ابدأ من هنا"}</small><span class="play-btn">العب الآن</span></div>
    </button>`;
  }).join("");
  $$("#skillMap [data-skill]").forEach(b=>b.onclick=()=>openSkill(b.dataset.skill,state.mode));
}
$$(".mode-card").forEach(b=>b.onclick=()=>{
  state.mode=b.dataset.mode;
  $$(".mode-card").forEach(x=>x.classList.toggle("selected",x===b));
  if($("#mascotLine")) $("#mascotLine").textContent = modeLines[state.mode] || modeLines.learn;
  renderStudent();
  toast(state.mode==="learn"?"اختر مهارة لتبدأ بالفهم":state.mode==="practice"?"اختر مهارة لبدء التدريب":"اختر مهارة لبدء التحدي");
});

function setMascotMessage(msg){
  if($("#mascotLine")) $("#mascotLine").textContent = msg;
  if($("#mascotPanelText")) $("#mascotPanelText").textContent = msg;
}


function openSkill(id,mode="learn"){
  state.skill=skills.find(s=>s.id===id)||skills[0];
  state.mode=mode;
  state.tab = mode==="practice"?"practice":mode==="challenge"?"challenge":"learn";
  const t = themeFor(state.skill.id);
  $("#skillKicker").textContent=state.skill.place;
  $("#skillTitle").textContent=state.skill.title;
  $("#skillSubtitle").textContent=state.skill.subtitle;
  $("#skillBadge").textContent=state.skill.icon;
  $("#skillSceneIcon").textContent=t.scene;
  $("#skillSceneBadge").textContent=t.badge;
  $("#skillMascotText").textContent=t.msg;
  $("#skillMiniScore").textContent=arNum(mastery[state.skill.id]||0)+"٪";
  const world=$("#skillWorld");
  world.style.setProperty("--themeA", t.a);
  world.style.setProperty("--themeB", t.b);
  world.style.setProperty("--themeGlow", t.glow);
  go("skillScreen");
  setTab(state.tab);
}
$("#skillTabs").onclick=e=>{
  const b=e.target.closest("button[data-tab]"); if(!b)return;
  setTab(b.dataset.tab);
};
function setTab(tab){
  state.tab=tab;
  $$("#skillTabs button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  $("#skillMiniScore").textContent=arNum(mastery[state.skill.id]||0)+"٪";
  const p=$("#skillPanel");
  if(tab==="learn") p.innerHTML=renderLearn(state.skill);
  if(tab==="try"){p.innerHTML=renderTry(state.skill); bindTry();}
  if(tab==="practice"){startQuiz("practice");}
  if(tab==="challenge"){startQuiz("challenge");}
  if(tab==="error") p.innerHTML=renderError(state.skill);
  if(tab==="mastery") p.innerHTML=renderMastery(state.skill);
  bindPanel();
}
function renderLearn(s){
  const t=themeFor(s.id);
  return `<article class="lesson-card">
    <span class="eyebrow">${s.icon} الفكرة الأساسية</span>
    <h3>${s.title}</h3>
    <p>${s.subtitle}</p>
    <div class="rule-box"><b>قاعدة سهلة:</b><br>${s.rule}</div>
    <div class="example-box"><b>مثال:</b><div class="example-big">${s.example}</div></div>
    <div class="student-achievement">${t.scene} ${t.msg}</div>
    ${["place","thousands","tenThousands"].includes(s.id)?`<div class="place-hero-tip">🏗️ في هذه المحطة ستبني العدد داخل برج المنازل، ثم تكتشف قيمة كل رقم.</div>`:""}
    <div class="cta-row">
      <button class="btn mint" data-tab-jump="try">🧪 جرّبها بيدك</button>
      <button class="btn secondary" data-tab-jump="practice">🎯 ابدأ التدريب</button>
    </div>
  </article>`;
}
function bindPanel(){
  $$("[data-tab-jump]").forEach(b=>b.onclick=()=>setTab(b.dataset.tabJump));
  $$("[data-reveal]").forEach(b=>b.onclick=()=>{ const x=document.getElementById(b.dataset.reveal);x.hidden=false;b.disabled=true;});
  $$("[data-pattern-error-pick]").forEach(b=>b.onclick=()=>{
    const idx=+b.dataset.patternErrorPick;
    const g=state.patternError;
    if(!g) return;
    $$("[data-pattern-error-pick]").forEach(x=>x.classList.remove("picked"));
    b.classList.add("picked");
    const fb=$("#patternErrorFeedback");
    if(idx===g.wrongIndex){
      b.classList.add("correct-fault");
      fb.innerHTML=`<strong>أحسنت 🌟</strong> هذه هي العربة الخاطئة، لأن القطار يسير بقاعدة أزيد ${formatN(g.step)}.`;
    }else{
      fb.innerHTML=`ليست هذه العربة. جرّب عربة أخرى، وراقب الفرق بين الحدود.`;
    }
  });
  if($("#revealPatternFix")) $("#revealPatternFix").onclick=()=>{
    const g=state.patternError;
    if(!g) return;
    const btns=$$("[data-pattern-error-pick]");
    const target=btns[g.wrongIndex];
    if(target){
      target.textContent=formatN(g.correct[g.wrongIndex]);
      target.classList.add("fixed","picked");
    }
    const fix=$("#patternErrorFix");
    fix.hidden=false;
    fix.innerHTML=`القاعدة الصحيحة: <b>أزيد ${formatN(g.step)}</b> في كل مرة.<br>العربة الخاطئة كانت <b>${formatN(g.shown[g.wrongIndex])}</b>، والصحيح هو <b>${formatN(g.correct[g.wrongIndex])}</b>.`;
  };
  if($("#newPatternError")) $("#newPatternError").onclick=()=>setTab("error");

  $$("[data-solve-error-pick]").forEach(b=>b.onclick=()=>{
    const choice=b.dataset.solveErrorPick, g=state.solveError;
    if(!g) return;
    $$("[data-solve-error-pick]").forEach(x=>x.classList.remove("picked"));
    b.classList.add("picked");
    const fb=$("#solveErrorFeedback");
    if(choice===g.answer){
      b.classList.add("correct-choice");
      fb.innerHTML=`<strong>أحسنت 🌟</strong> الإجابة الصحيحة هي <b>${g.answer}</b>.`;
    }else{
      fb.innerHTML=`ليست هذه الخطوة. فكّر في الترتيب الصحيح لخطوات حل المسألة.`;
    }
  });
  if($("#revealSolveFix")) $("#revealSolveFix").onclick=()=>{
    const g=state.solveError;
    if(!g) return;
    const fix=$("#solveErrorFix");
    fix.hidden=false;
    fix.innerHTML=`التصحيح: <b>${g.explain}</b><br>الترتيب الصحيح دائمًا: أفهم ← أخطط ← أحل ← أتحقق.`;
  };
  if($("#newSolveError")) $("#newSolveError").onclick=()=>setTab("error");

  $$("[data-place-error-pick]").forEach(b=>b.onclick=()=>{
    const val=+b.dataset.placeErrorPick, g=state.placeError;
    if(!g) return;
    const fb=$("#placeErrorFeedback");
    if(val===+g.correct){
      b.classList.add("correct");
      fb.innerHTML=`<strong>أحسنت 🌟</strong> القيمة الصحيحة هي <b>${formatN(g.correct)}</b>.`;
    }else{
      b.classList.add("wrong");
      fb.innerHTML=`جرّب مرة أخرى. راقب منزلة الرقم ثم اضربه في قيمة تلك المنزلة.`;
    }
  });
  if($("#revealPlaceFix")) $("#revealPlaceFix").onclick=()=>{
    const g=state.placeError;
    if(!g) return;
    const fix=$("#placeErrorFix");
    fix.hidden=false;
    fix.innerHTML=`الرقم <b>${arNum(g.digit)}</b> في منزلة <b>${g.placeName}</b>، لذلك قيمته <b>${formatN(g.correct)}</b>، وليس <b>${formatN(g.wrong)}</b>.`;
  };
  if($("#newPlaceError")) $("#newPlaceError").onclick=()=>setTab("error");
}

function renderTry(s){
  if(["place","thousands","tenThousands"].includes(s.id)) return tryPlaceTower(s);
  if(s.id==="patterns") return tryPattern();
  if(s.id==="compare") return tryCompare();
  if(s.id==="order") return tryOrder();
  if(["round10_100","round1000"].includes(s.id)) return tryRound(s);
  return `<article class="try-card"><span class="eyebrow">🧪 تجربة قصيرة</span><h3>رتّب خطوات التفكير</h3>
    <p>اضغط الخطوات بالترتيب الصحيح لحل المسألة.</p>
    <div class="tap-order" id="stepPick">
      ${shuffle(["أفهم","أخطط","أحل","أتحقق"]).map(x=>`<button data-step="${x}">${x}</button>`).join("")}
    </div><div class="order-result" id="stepResult"></div>
    <div class="cta-row"><button class="btn" id="checkSteps">تحقق</button><button class="btn secondary" id="resetSteps">إعادة</button></div>
  </article>`;
}
function placeNamesFor(len){
  const all=["آحاد","عشرات","مئات","ألوف","عشرات الألوف"];
  return all.slice(0,len);
}
function expandedParts(n){
  const s=String(n), len=s.length;
  return s.split("").map((d,i)=>Number(d)*(10**(len-1-i))).filter(v=>v!==0);
}
function makePlaceLabNumber(len){
  let digits=[];
  for(let i=0;i<len;i++){
    if(i===0) digits.push(rand(1,9));
    else digits.push(rand(0,9));
  }
  // تقليل تكرار الأرقام قدر الإمكان حتى يكون السحب أوضح
  if(new Set(digits).size<Math.min(len,3)){
    digits = Array.from({length:len},(_,i)=> i===0?rand(2,9):(i+2)%10);
  }
  return Number(digits.join(""));
}
function tryPlaceTower(s){
  const len=s.id==="tenThousands"?5:s.id==="thousands"?4:3;
  const n=makePlaceLabNumber(len);
  const digits=String(n).split("").map(Number);
  const powers=Array.from({length:len},(_,i)=>len-1-i);
  state.tower={
    number:n,len,digits,
    cards:shuffle(digits.map((d,i)=>({digit:d,key:`d${i}`}))),
    placements:{},selected:null,mission:1,
    targetPos:null,completed:false
  };
  const names=placeNamesFor(len);
  return `<article class="try-card tower-lab" data-number="${n}">
    <div class="lab-top">
      <div>
        <span class="lab-mission">المهمة <b id="towerMissionNum">١</b> من ٣</span>
        <h3>🏗️ برج القيمة المنزلية</h3>
        <p id="towerMissionText">ابنِ العدد بوضع كل رقم في طابقه الصحيح.</p>
      </div>
      <div class="lab-progress" aria-label="تقدم المهمة">
        <i class="active"></i><i></i><i></i>
      </div>
    </div>

    <div class="tower-target">
      <small>العدد المطلوب بناؤه</small>
      <strong>${formatN(n)}</strong>
    </div>

    <div class="tower-workspace">
      <div class="place-tower" id="placeTower">
        ${powers.map(power=>{
          const label=names[power];
          return `<div class="tower-floor" data-power="${power}">
            <div class="floor-name">${label}<small>قيمته × ${formatN(10**power)}</small></div>
            <div class="floor-slot" data-power="${power}"></div>
          </div>`;
        }).join("")}
      </div>

      <div class="tower-side">
        <div class="digit-tray">
          <h4>بطاقات الأرقام</h4>
          <div class="digit-cards" id="digitCards">
            ${state.tower.cards.map(c=>`<button class="digit-card" draggable="true" data-key="${c.key}" data-digit="${c.digit}">${arNum(c.digit)}</button>`).join("")}
          </div>
        </div>

        <div class="lab-help" id="towerHelp">
          <b>طريقة اللعب:</b> اسحب الرقم إلى الطابق، أو المس بطاقة الرقم ثم المس الطابق المناسب.
        </div>
        <div class="lab-feedback" id="towerFeedback">ابدأ من أكبر منزلة في العدد.</div>
        <div class="cta-row">
          <button class="btn" id="checkTower">تحقق من البناء</button>
          <button class="btn secondary" id="towerHint">💡 ساعدني</button>
          <button class="btn secondary" id="resetTower">إعادة</button>
        </div>
        <div id="towerExtra"></div>
      </div>
    </div>
  </article>`;
}
function towerCorrectDigit(power){
  const t=state.tower;
  const pos=t.len-1-power;
  return t.digits[pos];
}
function placeTowerCard(key,power){
  const t=state.tower;
  if(t.mission!==1) return;
  const card=document.querySelector(`.digit-card[data-key="${key}"]`);
  const slot=document.querySelector(`.floor-slot[data-power="${power}"]`);
  if(!card||!slot)return;

  // إذا كان الطابق يحتوي بطاقة، أعدها للصينية أولاً
  const oldKey=slot.dataset.key;
  if(oldKey){
    const oldCard=document.querySelector(`.digit-card[data-key="${oldKey}"]`);
    if(oldCard) oldCard.classList.remove("used");
    delete t.placements[power];
  }
  // إذا كانت البطاقة مستخدمة في طابق آخر، حرر الطابق القديم
  Object.entries(t.placements).forEach(([p,k])=>{
    if(k===key){
      const oldSlot=document.querySelector(`.floor-slot[data-power="${p}"]`);
      if(oldSlot){oldSlot.textContent="";oldSlot.removeAttribute("data-key")}
      delete t.placements[p];
    }
  });

  slot.textContent=card.textContent;
  slot.dataset.key=key;
  t.placements[power]=key;
  card.classList.add("used");
  $$(".digit-card").forEach(x=>x.classList.remove("selected"));
  t.selected=null;
}
function bindPlaceTower(){
  const t=state.tower;
  $$(".digit-card").forEach(card=>{
    card.onclick=()=>{
      if(t.mission!==1||card.classList.contains("used"))return;
      $$(".digit-card").forEach(x=>x.classList.remove("selected"));
      card.classList.add("selected");t.selected=card.dataset.key;
      $("#towerFeedback").textContent="الآن المس الطابق الذي تريد وضع الرقم فيه.";
    };
    card.ondragstart=e=>{
      if(t.mission!==1||card.classList.contains("used")){e.preventDefault();return}
      e.dataTransfer.setData("text/plain",card.dataset.key);
    };
  });
  $$(".tower-floor").forEach(floor=>{
    floor.ondragover=e=>{if(t.mission===1){e.preventDefault();floor.classList.add("drag-over")}};
    floor.ondragleave=()=>floor.classList.remove("drag-over");
    floor.ondrop=e=>{
      if(t.mission!==1)return;
      e.preventDefault();floor.classList.remove("drag-over");
      const key=e.dataTransfer.getData("text/plain");
      placeTowerCard(key,+floor.dataset.power);
    };
    floor.onclick=()=>{
      if(t.mission===1 && t.selected){
        placeTowerCard(t.selected,+floor.dataset.power);return;
      }
      if(t.mission===2){
        checkTowerFloor(+floor.dataset.power);
      }
    };
  });

  $("#checkTower").onclick=checkTowerBuild;
  $("#towerHint").onclick=towerHint;
  $("#resetTower").onclick=()=>setTab("try");
}
function checkTowerBuild(){
  const t=state.tower;
  if(t.mission!==1)return;
  if(Object.keys(t.placements).length<t.len){
    $("#towerFeedback").className="lab-feedback warn";
    $("#towerFeedback").innerHTML="<strong>البرج لم يكتمل بعد.</strong> ضع جميع الأرقام في الطوابق.";
    return;
  }
  let ok=true;
  Object.entries(t.placements).forEach(([power,key])=>{
    const card=document.querySelector(`.digit-card[data-key="${key}"]`);
    const digit=+card.dataset.digit;
    const floor=document.querySelector(`.tower-floor[data-power="${power}"]`);
    const good=digit===towerCorrectDigit(+power);
    floor.classList.toggle("correct-floor",good);
    if(!good)ok=false;
  });
  if(!ok){
    $("#towerFeedback").className="lab-feedback warn";
    $("#towerFeedback").innerHTML="<strong>قريب جدًا.</strong> راجع موضع الأرقام. ابدأ من أكبر منزلة.";
    return;
  }

  $("#placeTower").classList.add("tower-celebrate");
  $("#towerFeedback").className="lab-feedback success";
  $("#towerFeedback").innerHTML="<strong>أحسنت 🌟</strong> بنيت العدد في منازله الصحيحة.";
  const parts=expandedParts(t.number);
  const names=placeNamesFor(t.len);
  const chips=t.digits.map((d,pos)=>{
    const power=t.len-1-pos,val=d*(10**power);
    return `<div class="value-chip"><small>${names[power]}</small><b>${formatN(val)}</b></div>`;
  }).join("");
  $("#towerExtra").innerHTML=`
    <div class="value-strip">${chips}</div>
    <div class="feedback"><b>الصيغة التحليلية:</b><br>${parts.map(formatN).join(" + ")}</div>
    <div class="cta-row"><button class="btn mint" id="nextTowerMission">انتقل للمهمة ٢</button></div>`;
  $("#checkTower").disabled=true;
  $("#nextTowerMission").onclick=startTowerMission2;
  updateTowerProgress(1);
}
function startTowerMission2(){
  const t=state.tower;t.mission=2;
  const nonZeroPositions=t.digits.map((d,i)=>d!==0?i:null).filter(v=>v!==null);
  t.targetPos=pick(nonZeroPositions);
  const digit=t.digits[t.targetPos];
  $("#towerMissionNum").textContent="٢";
  $("#towerMissionText").innerHTML=`اكتشف منزلة الرقم <b>${arNum(digit)}</b> وقيمته: المس طابقه الصحيح.`;
  $("#towerExtra").innerHTML="";
  $("#checkTower").style.display="none";
  $("#towerHelp").innerHTML="<b>المهمة ٢:</b> المس الطابق الذي يحتوي الرقم المطلوب.";
  $("#towerFeedback").className="lab-feedback";
  $("#towerFeedback").textContent="تذكر: اسم الطابق هو اسم المنزلة.";
  $$(".tower-floor").forEach(f=>f.classList.remove("hint-floor"));
  updateTowerProgress(2);
}
function checkTowerFloor(power){
  const t=state.tower;
  const correctPower=t.len-1-t.targetPos;
  const floor=document.querySelector(`.tower-floor[data-power="${power}"]`);
  if(power!==correctPower){
    floor.classList.add("hint-floor");
    setTimeout(()=>floor.classList.remove("hint-floor"),1200);
    $("#towerFeedback").className="lab-feedback warn";
    $("#towerFeedback").innerHTML="ليست هذه المنزلة. تتبع الرقم داخل البرج مرة أخرى.";
    return;
  }
  const names=placeNamesFor(t.len),digit=t.digits[t.targetPos],value=digit*(10**correctPower);
  floor.classList.add("correct-floor");
  $("#towerFeedback").className="lab-feedback success";
  $("#towerFeedback").innerHTML=`<strong>صحيح 🌟</strong> الرقم ${arNum(digit)} في منزلة <b>${names[correctPower]}</b> وقيمته <b>${formatN(value)}</b>.`;
  $("#towerExtra").innerHTML=`<div class="cta-row"><button class="btn mint" id="nextTowerMission3">انتقل للمهمة ٣</button></div>`;
  $("#nextTowerMission3").onclick=startTowerMission3;
}
function startTowerMission3(){
  const t=state.tower;t.mission=3;
  $("#towerMissionNum").textContent="٣";
  $("#towerMissionText").textContent="اختر الصيغة التحليلية الصحيحة للعدد.";
  $("#towerHelp").innerHTML="<b>المهمة ٣:</b> اجمع قيم الأرقام غير الصفرية.";
  $("#towerFeedback").className="lab-feedback";
  $("#towerFeedback").textContent="اختر الإجابة التي تمثل قيمة كل رقم بحسب منزلته.";
  updateTowerProgress(3);

  const correct=expandedParts(t.number).map(formatN).join(" + ");
  const n=t.number,len=t.len;
  const wrong1=String(n).split("").map(Number).filter(x=>x!==0).map(formatN).join(" + ");
  const wrong2=expandedParts(n).map((v,i)=>i===0?Math.max(1,Math.floor(v/10)):v).map(formatN).join(" + ");
  const wrong3=expandedParts(n).slice().reverse().map(formatN).join(" + ");
  const opts=shuffle([...new Set([correct,wrong1,wrong2,wrong3])]);
  $("#towerExtra").innerHTML=`<div class="expanded-choice" id="expandedChoices">
    ${opts.map(o=>`<button class="option" data-value="${o}">${o}</button>`).join("")}
  </div>`;
  $$("#expandedChoices .option").forEach(b=>b.onclick=()=>{
    const ok=b.dataset.value===correct;
    b.classList.add(ok?"correct":"wrong");
    if(!ok){
      $("#towerFeedback").className="lab-feedback warn";
      $("#towerFeedback").textContent="راجع قيمة كل رقم داخل البرج ثم حاول مرة أخرى.";
      return;
    }
    $$("#expandedChoices .option").forEach(x=>x.disabled=true);
    $("#towerFeedback").className="lab-feedback success";
    $("#towerFeedback").innerHTML=`<strong>اكتملت مهام البرج ✨</strong><br>${formatN(t.number)} = ${correct}`;
    $("#placeTower").classList.add("tower-celebrate");
    $("#towerExtra").insertAdjacentHTML("beforeend",`<div class="cta-row"><button class="btn mint" id="newTowerRound">ابدأ عددًا جديدًا</button><button class="btn secondary" data-tab-jump="practice">انتقل للتدريب</button></div>`);
    $("#newTowerRound").onclick=()=>setTab("try");
    bindPanel();
    updateTowerProgress(4);
    const old=mastery[state.skill.id]||0;
    if(old<40){mastery[state.skill.id]=40;saveMastery();}
  });
}
function towerHint(){
  const t=state.tower;
  if(t.mission===1){
    const missingPower=Array.from({length:t.len},(_,i)=>i).find(power=>{
      const key=t.placements[power];
      if(!key)return true;
      const card=document.querySelector(`.digit-card[data-key="${key}"]`);
      return +card.dataset.digit!==towerCorrectDigit(power);
    });
    const floor=document.querySelector(`.tower-floor[data-power="${missingPower}"]`);
    if(floor){floor.classList.add("hint-floor");setTimeout(()=>floor.classList.remove("hint-floor"),1800)}
    $("#towerFeedback").innerHTML=`ابدأ بالطابق <strong>${placeNamesFor(t.len)[missingPower]}</strong>. الرقم الصحيح فيه هو <strong>${arNum(towerCorrectDigit(missingPower))}</strong>.`;
  }else if(t.mission===2){
    const p=t.len-1-t.targetPos;
    const floor=document.querySelector(`.tower-floor[data-power="${p}"]`);
    floor?.classList.add("hint-floor");setTimeout(()=>floor?.classList.remove("hint-floor"),1800);
    $("#towerFeedback").textContent="الطابق المضيء هو المنزل الصحيح.";
  }else{
    $("#towerFeedback").textContent="اكتب قيمة كل رقم حسب منزله، ولا تكتب حدًا للرقم صفر.";
  }
}
function updateTowerProgress(stage){
  $$(".lab-progress i").forEach((dot,i)=>{
    dot.classList.toggle("done",i<stage-1 || stage===4);
    dot.classList.toggle("active",stage!==4 && i===stage-1);
  });
}
function tryPattern(){
  const step=pick([2,5,10,-2,-5,-10]), start=rand(step<0?40:2,step<0?80:20);
  const seq=[start,start+step,start+2*step,start+3*step];
  const ans=start+4*step;
  const opts=shuffle([ans,ans+(step>0?5:-5),ans+(step>0?10:-10)]);
  return `<article class="try-card" data-answer="${ans}">
    <span class="eyebrow">🚂 قطار الأنماط</span><h3>أكمل عربة القطار الأخيرة</h3>
    <div class="pattern-scene">
      <p>اكتشف القاعدة أولًا، ثم اختر العدد الذي يجب أن تحمله العربة الأخيرة.</p>
      <div class="pattern-track">
        <div class="train-row">
          <div class="engine">🚂</div>
          ${seq.map(n=>`<div class="wagon">${formatN(n)}</div>`).join("")}
          <div class="wagon question-wagon">؟</div>
        </div>
      </div>
      <div class="pattern-options" id="tryPatternOpts">
        ${opts.map(o=>`<button class="option" data-value="${o}">${formatN(o)}</button>`).join("")}
      </div>
    </div>
    <div class="feedback" id="tryPatternFeedback">انظر إلى الفرق بين كل عربة والتي بعدها.</div>
  </article>`;
}
function tryCompare(){
  const a=rand(1200,9999), b=Math.random()<.2?a:rand(1200,9999);
  const ans=a===b?"=":a>b?">":"<";
  return `<article class="try-card" data-a="${a}" data-b="${b}" data-answer="${ans}">
    <span class="eyebrow">⚖️ جسر المقارنة</span><h3>ضع الرمز الصحيح بين العددين</h3>
    <div class="compare-scene">
      <p>ابدأ من أكبر منزلة، ثم انتقل حتى أول اختلاف بين العددين.</p>
      <div class="compare-board">
        <div class="compare-tower"><b>العدد الأول</b><strong>${formatN(a)}</strong></div>
        <div class="compare-bridge">
          <div class="big-symbol" id="symbolSlot">؟</div>
          <small>رمز المقارنة</small>
        </div>
        <div class="compare-tower"><b>العدد الثاني</b><strong>${formatN(b)}</strong></div>
      </div>
      <div class="symbols" id="compareSymbols"><button>&gt;</button><button>&lt;</button><button>=</button></div>
    </div>
    <div class="feedback" id="compareFeedback">تذكر: إذا تساوت الأرقام في منزلة، انتقل إلى المنزلة التالية.</div>
  </article>`;
}
function tryOrder(){
  const nums=shuffle([rand(1200,2500),rand(2501,4300),rand(4301,6700),rand(6701,9500)]);
  return `<article class="try-card" data-answer="${[...nums].sort((a,b)=>a-b).join(",")}">
    <span class="eyebrow">🏁 مضمار الترتيب</span><h3>رتّب من الأصغر إلى الأكبر</h3>
    <p>المس البطاقات بالترتيب. ستنتقل إلى المسار السفلي.</p>
    <div class="tap-order" id="orderPick">${nums.map(n=>`<button data-n="${n}">${formatN(n)}</button>`).join("")}</div>
    <div class="order-result" id="orderResult"></div>
    <div class="cta-row"><button class="btn" id="checkOrder">تحقق</button><button class="btn secondary" id="resetOrder">إعادة</button></div>
  </article>`;
}
function tryRound(s){
  const to=s.id==="round1000"?1000:pick([10,100]);
  const n=s.id==="round1000"?rand(1100,8900):rand(120,980);
  const low=Math.floor(n/to)*to, high=low+to;
  const pct=((n-low)/(high-low))*92+4;
  const ans=Math.round(n/to)*to;
  return `<article class="try-card" data-answer="${ans}">
    <span class="eyebrow">🎯 خط الأعداد</span><h3>إلى أي عدد هو أقرب؟</h3>
    <p>قرّب ${formatN(n)} إلى أقرب ${formatN(to)}.</p>
    <div class="number-line"><div class="line"></div><span class="point" style="left:${pct}%"></span>
      <span class="target" style="left:${pct}%">${formatN(n)}</span>
      <span class="label" style="left:4%">${formatN(low)}</span><span class="label" style="left:96%">${formatN(high)}</span>
    </div>
    <div class="options" id="roundOpts"><button class="option" data-value="${low}">${formatN(low)}</button><button class="option" data-value="${high}">${formatN(high)}</button></div>
    <div class="feedback" id="roundFeedback">قارن المسافة إلى الطرفين.</div>
  </article>`;
}
function bindTry(){
  const s=state.skill;
  if(["place","thousands","tenThousands"].includes(s.id)){
    bindPlaceTower();
  }else if(s.id==="patterns"){
    $$("#tryPatternOpts .option").forEach(b=>b.onclick=()=>{
      const card=b.closest(".try-card"),ok=+b.dataset.value===+card.dataset.answer;
      b.classList.add(ok?"correct":"wrong");$("#tryPatternFeedback").innerHTML=ok?"<strong>أحسنت!</strong> اكتشفت القاعدة.":"جرّب مرة أخرى، واحسب الفرق بين عددين متتاليين.";
    });
  }else if(s.id==="compare"){
    $$("#compareSymbols button").forEach(b=>b.onclick=()=>{
      const card=b.closest(".try-card"),ok=b.textContent===card.dataset.answer;
      $("#symbolSlot").textContent=b.textContent;$("#compareFeedback").innerHTML=ok?"<strong>صحيح.</strong> المقارنة تمت من أكبر منزلة.":"راجع أول منزلة يختلف عندها العددان.";
    });
  }else if(s.id==="order"){
    state.orderPick=[];
    $$("#orderPick button").forEach(b=>b.onclick=()=>{if(b.classList.contains("used"))return;b.classList.add("used");state.orderPick.push(+b.dataset.n);$("#orderResult").innerHTML=state.orderPick.map(formatN).map(x=>`<span>${x}</span>`).join(" ← ");});
    $("#checkOrder").onclick=()=>{const ans=$(".try-card").dataset.answer,ok=state.orderPick.join(",")===ans;toast(ok?"ترتيب صحيح 🌟":"راجع ترتيب الأعداد");};
    $("#resetOrder").onclick=()=>setTab("try");
  }else if(["round10_100","round1000"].includes(s.id)){
    $$("#roundOpts .option").forEach(b=>b.onclick=()=>{const ok=+b.dataset.value===+b.closest(".try-card").dataset.answer;b.classList.add(ok?"correct":"wrong");$("#roundFeedback").innerHTML=ok?"<strong>أحسنت.</strong> اخترت العدد الأقرب.":"قارن المسافة على خط الأعداد مرة أخرى.";});
  }else{
    state.orderPick=[];
    $$("#stepPick button").forEach(b=>b.onclick=()=>{if(b.classList.contains("used"))return;b.classList.add("used");state.orderPick.push(b.dataset.step);$("#stepResult").textContent=state.orderPick.join(" ← ");});
    $("#checkSteps").onclick=()=>toast(state.orderPick.join("|")==="أفهم|أخطط|أحل|أتحقق"?"الترتيب صحيح 🌟":"راجع الخطوات الأربع");
    $("#resetSteps").onclick=()=>setTab("try");
  }
}


function makeQuestion(skill, hard=false){
  const id=skill.id;
  if(id==="patterns"){
    const step=pick([2,5,10,-2,-5,-10]), start=rand(step<0?50:2,step<0?90:25), seq=[start,start+step,start+2*step,start+3*step], ans=start+4*step;
    const candidates=[ans, ans+step, ans-step, ans+(step>0?5:-5), ans+(step>0?10:-10), ans-(step>0?5:-5)];
    const options=[...new Set(candidates)].filter(x=>x!==seq[3]).slice(0,4);
    while(options.length<4) options.push(ans + rand(-3,3)*Math.max(2,Math.abs(step)));
    if(!options.includes(ans)) options[0]=ans;
    return {
      prompt:`أكمل النمط: ${seq.map(formatN).join(" ، ")} ، ؟`,
      options:shuffle([...new Set(options)]).slice(0,4),
      answer:ans,
      hint:"احسب الفرق بين كل عددين متتاليين.",
      explain:`القاعدة هي ${step>0?"أزيد":"أنقص"} ${formatN(Math.abs(step))}.`,
      seq, stepVal:step, engine:"🚂",
      diffLabels:Array(4).fill(`${step>0?"+":"−"} ${formatN(Math.abs(step))}`)
    };
  }
  if(id==="solve"){
    const opts=["أفهم","أخطط","أحل","أتحقق"];
    const q=pick([
      {title:"ملف المحقق: سلال الحلوى", clue:"قرأ الطالب المسألة وحدد الأعداد المطلوبة قبل أن يختار العملية.", p:"في أي خطوة يوجد الطالب الآن؟", a:"أفهم", h:"هذه الخطوة تعني تحديد المعطيات والمطلوب.", e:"عندما أحدد المعطيات والمطلوب فأنا في خطوة أفهم."},
      {title:"ملف المحقق: أقلام الصف", clue:"بعد أن عرف الطالب المطلوب، بدأ يفكر: هل أجمع أم أطرح؟", p:"ما الخطوة المناسبة هنا؟", a:"أخطط", h:"هذه الخطوة تأتي بعد الفهم وقبل تنفيذ العملية.", e:"اختيار العملية أو الاستراتيجية المناسبة يكون في خطوة أخطط."},
      {title:"ملف المحقق: كرات الملعب", clue:"اختار الطالب العملية وبدأ ينفذ الحساب.", p:"ما الخطوة التي ينفذها الآن؟", a:"أحل", h:"في هذه الخطوة أطبق الخطة وأحسب.", e:"تنفيذ العملية الفعلية هو خطوة أحل."},
      {title:"ملف المحقق: صناديق الكتب", clue:"انتهى الطالب من الحساب وسأل نفسه: هل الإجابة منطقية؟", p:"في أي خطوة هو الآن؟", a:"أتحقق", h:"هذه الخطوة تأتي في النهاية لأتأكد من معقولية الإجابة.", e:"فحص الحل ومعقوليته هو خطوة أتحقق."}
    ]);
    return {prompt:q.p,options:opts,answer:q.a,hint:q.h,explain:q.e,title:q.title,clue:q.clue};
  }
  if(["place","thousands","tenThousands"].includes(id)){
    const len=id==="tenThousands"?5:id==="thousands"?4:3, min=10**(len-1), n=rand(min,10**len-1), pos=rand(0,len-1), digit=+String(n)[pos], power=len-1-pos, ans=digit*(10**power);
    const vals=shuffle([...new Set([ans,digit, digit*10, digit*100, digit*1000, digit*10000].filter(v=>v<10**(len+1)))]);
    while(vals.length<4) vals.push(ans + rand(1,3)*(10**Math.max(0,power-1)));
    const placeLabels=placeNamesFor(len);
    return {
      prompt:`ما قيمة الرقم ${arNum(digit)} في العدد ${formatN(n)}؟`,
      options:shuffle([...new Set(vals)]).slice(0,4),
      answer:ans,
      hint:"حدد منزلة الرقم أولًا، ثم اضربه في قيمة المنزلة.",
      explain:`الرقم ${arNum(digit)} في منزلة ${placeLabels[power]}، لذلك قيمته ${formatN(ans)}.`,
      number:n,digit,power,len,placeName:placeLabels[power], placeLabels
    };
  }
  if(id==="compare"){
    const a=rand(1100,9999), b=hard?rand(1100,9999):(Math.random()<.15?a:rand(1100,9999)), ans=a===b?"=":a>b?">":"<";
    return {prompt:`اختر الرمز الصحيح: ${formatN(a)} __ ${formatN(b)}`,options:[">","<","="],answer:ans,hint:"ابدأ من أكبر منزلة وانتقل حتى أول اختلاف.",explain:`الرمز الصحيح هو ${ans}.`};
  }
  if(id==="order"){
    const nums=shuffle([rand(1100,2800),rand(2801,4700),rand(4701,6800),rand(6801,9400)]), asc=[...nums].sort((a,b)=>a-b), desc=[...asc].reverse(), askAsc=Math.random()<.5, ans=(askAsc?asc:desc).join("-");
    const opt1=shuffle(nums).join("-"), opt2=[...asc].reverse().join("-"), opt3=[...asc].sort(()=>Math.random()-.5).join("-");
    const options=[ans,opt1,opt2,opt3].filter((v,i,a)=>a.indexOf(v)===i);
    while(options.length<4) options.push(shuffle(nums).join("-"));
    return {prompt:`اختر الترتيب ${askAsc?"من الأصغر إلى الأكبر":"من الأكبر إلى الأصغر"}:`,options:shuffle(options).map(x=>x.split("-").map(n=>formatN(+n)).join(" ، ")),answer:ans.split("-").map(n=>formatN(+n)).join(" ، "),hint:"قارن أكبر منزلة أولًا.",explain:"حوّل الترتيب إلى سلسلة من المقارنات القصيرة."};
  }
  if(id==="round10_100"){
    const to=pick([10,100]), n=rand(120,980), ans=Math.round(n/to)*to;
    return {prompt:`قرّب ${formatN(n)} إلى أقرب ${formatN(to)}.`,options:shuffle([...new Set([ans,ans+to,Math.max(0,ans-to),Math.floor(n/to)*to])]).slice(0,4),answer:ans,hint:`انظر إلى الرقم الموجود على يمين منزلة ${to===10?"العشرات":"المئات"}.`,explain:`الناتج الأقرب هو ${formatN(ans)}.`};
  }
  if(id==="round1000"){
    const n=rand(1100,8900), ans=Math.round(n/1000)*1000;
    return {prompt:`قرّب ${formatN(n)} إلى أقرب ألف.`,options:shuffle([...new Set([ans,Math.max(1000,ans-1000),ans+1000,Math.floor(n/1000)*1000])]).slice(0,4),answer:ans,hint:"انظر إلى منزلة المئات.",explain:`الألف الأقرب هو ${formatN(ans)}.`};
  }
}

function patternTrainTitle(type){
  return type==="challenge" ? "🏆 تحدّي القطار الذهبي" : "🎯 تدريب القطار";
}
function renderPatternQuiz(qz,q){
  const sceneClass = qz.type==="challenge" ? "pattern-quiz-scene challenge-scene" : "pattern-quiz-scene";
  const engineClass = qz.type==="challenge" ? "engine-v16 challenge-engine" : "engine-v16";
  $("#skillPanel").innerHTML=`<article class="pattern-game-card">
    <div class="pattern-game-head">
      <div>
        <span class="eyebrow">🚂 ${qz.type==="challenge"?"قطار التحدي":"قطار التدريب"}</span>
        <h3>${qz.type==="challenge"?"تحدّي القطار الذهبي":"أكمل عربة القطار"}</h3>
        <p>${qz.type==="challenge"?"أكمل النمط بسرعة ودقة، واجمع أكبر عدد من النجوم.":"اكتشف القاعدة أولًا، ثم اختر العدد الذي يجب أن تحمله العربة الأخيرة."}</p>
      </div>
      <div class="pattern-meta">
        <span>${qz.type==="challenge"?"🏆 تحدّي":"🎯 تدريب"} ${arNum(qz.index+1)} / ${arNum(qz.count)}</span>
        <span>⭐ النقاط: ${arNum(qz.score)}</span>
      </div>
    </div>

    <div class="${sceneClass}">
      <div class="train-rails"></div>
      <div class="pattern-train-row">
        ${q.seq.map(n=>`<div class="train-wagon-v16">${formatN(n)}</div>`).join("")}
        <div class="train-wagon-v16 question" id="patternQuestionWagon">؟</div>
        <div class="${engineClass}">🚂</div>
      </div>
    </div>

    <div class="train-diff-row" id="patternDiffRow" hidden>${q.diffLabels.map(x=>`<span>${x}</span>`).join("")}</div>

    <div class="pattern-option-grid" id="quizOptions">
      ${q.options.map(o=>`<button class="option" data-answer="${o}">${formatN(o)}</button>`).join("")}
    </div>

    <div class="cta-row">
      <button class="btn secondary" id="hintBtn">💡 ساعدني</button>
      <button class="btn hidden" id="nextQ">التالي</button>
    </div>
    <div id="quizHint" class="hint-box" hidden></div>
    <div id="quizFeedback" class="pattern-feedback-line" hidden></div>
  </article>`;
  $$("#quizOptions .option").forEach(b=>b.onclick=()=>answerQuiz(b,q));
  $("#hintBtn").onclick=()=>{
    const h=$("#quizHint");
    h.hidden=false;
    h.textContent=q.hint;
    const d=$("#patternDiffRow");
    if(d) d.hidden=false;
  };
  $("#nextQ").onclick=()=>{qz.index++;qz.answered=false;renderQuiz()};
}
function answerPatternQuiz(btn,q){
  if(state.quiz.answered)return;
  state.quiz.answered=true;
  const chosen = +btn.dataset.answer;
  const ok = chosen===+q.answer;
  if(ok) state.quiz.score++;
  const wagon=$("#patternQuestionWagon");
  wagon.textContent=formatN(chosen);
  wagon.classList.add(ok?"correct-fill":"wrong-fill");
  btn.classList.add(ok?"correct":"wrong");
  $$("#quizOptions .option").forEach(b=>{
    if(+b.dataset.answer===+q.answer) b.classList.add("correct");
  });
  const d=$("#patternDiffRow");
  if(d) d.hidden=false;
  const f=$("#quizFeedback");
  f.hidden=false;
  f.innerHTML = ok
    ? `<strong>أحسنت 🌟</strong> <span class="burst">✨</span> أكملت القطار بصورة صحيحة.<br>${q.explain}<div class="train-choice-tag">🚂 تحرّك القطار خطوة للأمام!</div>`
    : `<strong>حاول مرة أخرى من القاعدة</strong><br>${q.explain}<div class="train-choice-tag">🔍 انظر إلى الفرق بين كل عربة والتي بعدها.</div>`;
  $("#nextQ").classList.remove("hidden");
}
function makePatternErrorCase(){
  const step=pick([2,5,10]);
  const start=rand(5,25);
  const correct=[start,start+step,start+2*step,start+3*step,start+4*step];
  const wrongIndex=rand(1,3);
  const shown=[...correct];
  shown[wrongIndex]=shown[wrongIndex]+step;
  return {step,start,shown,correct,wrongIndex};
}
function renderPatternErrorGame(){
  state.patternError = makePatternErrorCase();
  const g=state.patternError;
  return `<article class="pattern-error-board">
    <span class="eyebrow">🩺 عيادة الأنماط</span>
    <h3>ابحث عن العربة الخاطئة</h3>
    <p>في هذا القطار توجد عربة واحدة لا تتبع القاعدة. اضغط عليها أولًا، ثم شاهد التصحيح.</p>
    <div class="pattern-error-train">
      <div class="pattern-error-rails"></div>
      <div class="pattern-error-row">
        ${g.shown.map((n,i)=>`<button class="fault-wagon" data-pattern-error-pick="${i}">${formatN(n)}</button>`).join("")}
        <div class="engine-v16">🚂</div>
      </div>
    </div>
    <div class="error-actions">
      <button class="btn secondary" id="revealPatternFix">أظهر التصحيح</button>
      <button class="btn" id="newPatternError">جولة جديدة</button>
    </div>
    <div class="error-fix-box" id="patternErrorFeedback">💡 راقب الفرق بين كل عددين متتاليين، ثم حدّد العربة التي كسرت القاعدة.</div>
    <div class="error-fix-box" id="patternErrorFix" hidden></div>
  </article>`;
}


function solveStepCaption(step){
  return ({'أفهم':'أحدد المعطيات','أخطط':'أختار الخطة','أحل':'أنفذ العملية','أتحقق':'أراجع الحل'})[step] || '';
}
function renderSolveQuiz(qz,q){
  $("#skillPanel").innerHTML=`<article class="solve-game-card">
    <div class="solve-head">
      <div>
        <span class="eyebrow">🕵️ ${qz.type==="challenge"?"تحدّي المحقق الرياضي":"تدريب المحقق الرياضي"}</span>
        <h3>${qz.type==="challenge"?"القضية الذهبية":"مكتب المحقق الرياضي"}</h3>
        <p>${qz.type==="challenge"?"اختر الخطوة الصحيحة بسرعة، ثم اجمع نجوم المحقق الصغير.":"اقرأ التلميح داخل ملف القضية، ثم اختر الخطوة المناسبة من خطوات حل المسألة."}</p>
      </div>
      <div class="solve-meta">
        <span>${qz.type==="challenge"?"🏆 تحدّي":"🎯 تدريب"} ${arNum(qz.index+1)} / ${arNum(qz.count)}</span>
        <span>⭐ النقاط: ${arNum(qz.score)}</span>
      </div>
    </div>

    <div class="detective-scene">
      <div class="detective-board">
        <div class="case-paper">
          <h4>${q.title || "ملف القضية"}</h4>
          <div class="case-prompt">${q.prompt}</div>
          <div class="detective-note">${q.clue}</div>
        </div>
        <div class="tower-note">
          <b>خطوات المحقق:</b>
          <div class="detective-step-preview">
            ${q.options.map(step=>`<span>${step}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>

    <div class="step-option-grid" id="quizOptions">
      ${q.options.map(step=>`<button class="step-option" data-answer="${step}"><span>${step}</span><small>${solveStepCaption(step)}</small></button>`).join("")}
    </div>
    <div class="cta-row"><button class="btn secondary" id="hintBtn">💡 ساعدني</button><button class="btn hidden" id="nextQ">التالي</button></div>
    <div id="quizHint" class="hint-box" hidden></div>
    <div id="quizFeedback" class="solve-feedback" hidden></div>
  </article>`;
  $$("#quizOptions .step-option").forEach(b=>b.onclick=()=>answerSolveQuiz(b,q));
  $("#hintBtn").onclick=()=>{const h=$("#quizHint");h.hidden=false;h.textContent=q.hint;};
  $("#nextQ").onclick=()=>{state.quiz.index++;state.quiz.answered=false;renderQuiz();};
}
function answerSolveQuiz(btn,q){
  if(state.quiz.answered)return;
  state.quiz.answered=true;
  const ok = btn.dataset.answer===q.answer;
  if(ok) state.quiz.score++;
  btn.classList.add(ok?"correct":"wrong");
  $$("#quizOptions .step-option").forEach(b=>{ if(b.dataset.answer===q.answer) b.classList.add("correct"); });
  const f=$("#quizFeedback");
  f.hidden=false;
  f.innerHTML = ok
    ? `<strong>أحسنت أيها المحقق 🌟</strong><br>${q.explain}`
    : `<strong>راجع الملف مرة أخرى</strong><br>${q.explain}`;
  $("#nextQ").classList.remove("hidden");
}
function renderPlaceQuiz(qz,q){
  const labels=[...q.placeLabels].reverse();
  $("#skillPanel").innerHTML=`<article class="place-game-card">
    <div class="place-head">
      <div>
        <span class="eyebrow">🏗️ ${qz.type==="challenge"?"تحدّي برج القيمة":"تدريب برج القيمة"}</span>
        <h3>${qz.type==="challenge"?"البرج الذهبي":"برج القيمة المنزلية"}</h3>
        <p>${qz.type==="challenge"?"حدّد القيمة الصحيحة بسرعة، واجمع نجوم البناء والإتقان.":"انظر إلى العدد داخل البرج، وحدد قيمة الرقم المطلوبة من بين النوافذ."}</p>
      </div>
      <div class="place-meta">
        <span>${qz.type==="challenge"?"🏆 تحدّي":"🎯 تدريب"} ${arNum(qz.index+1)} / ${arNum(qz.count)}</span>
        <span>⭐ النقاط: ${arNum(qz.score)}</span>
      </div>
    </div>

    <div class="tower-quiz-scene">
      <div class="tower-layout">
        <div class="tower-building">
          ${labels.map((label,idx)=>{
            const originalPower=q.len-1-idx;
            return `<div class="tower-level">
              <div class="tower-label">${label}</div>
              <div class="tower-core"></div>
              <div class="tower-window">${arNum(String(q.number)[idx])}</div>
            </div>`;
          }).join("")}
        </div>
        <div class="tower-number-badge">
          <h4>${qz.type==="challenge"?"🎯 مهمة البرج":"📌 بطاقة العدد"}</h4>
          <div class="tower-big-number">${formatN(q.number)}</div>
          <div class="detective-note">ابحث عن الرقم <b>${arNum(q.digit)}</b> داخل العدد، ثم حدّد قيمته المنزلية الصحيحة.</div>
          <div class="case-prompt" style="font-size:28px;margin-top:12px">${q.prompt}</div>
        </div>
      </div>
    </div>

    <div class="place-option-grid" id="quizOptions">
      ${q.options.map(v=>`<button class="option place-option" data-answer="${v}">${formatN(v)}</button>`).join("")}
    </div>
    <div class="cta-row"><button class="btn secondary" id="hintBtn">💡 ساعدني</button><button class="btn hidden" id="nextQ">التالي</button></div>
    <div id="quizHint" class="hint-box" hidden></div>
    <div id="quizFeedback" class="place-feedback" hidden></div>
  </article>`;
  $$("#quizOptions .place-option").forEach(b=>b.onclick=()=>answerPlaceQuiz(b,q));
  $("#hintBtn").onclick=()=>{const h=$("#quizHint");h.hidden=false;h.textContent=q.hint;};
  $("#nextQ").onclick=()=>{state.quiz.index++;state.quiz.answered=false;renderQuiz();};
}
function answerPlaceQuiz(btn,q){
  if(state.quiz.answered)return;
  state.quiz.answered=true;
  const chosen=+btn.dataset.answer;
  const ok = chosen===+q.answer;
  if(ok) state.quiz.score++;
  btn.classList.add(ok?"correct":"wrong");
  $$("#quizOptions .place-option").forEach(b=>{ if(+b.dataset.answer===+q.answer) b.classList.add("correct"); });
  const f=$("#quizFeedback");
  f.hidden=false;
  f.innerHTML = ok
    ? `<strong>أحسنت 🌟</strong> بنيت القيمة الصحيحة لهذا الرقم.<br>${q.explain}`
    : `<strong>حاول من جديد</strong><br>${q.explain}`;
  $("#nextQ").classList.remove("hidden");
}
function makeSolveErrorCase(){
  return pick([
    {title:"قضية ناقصة", claim:"قرأ الطالب المسألة، ثم خطط، ثم حل، ثم توقف.", prompt:"ما الخطوة التي نسيها في النهاية؟", answer:"أتحقق", explain:"بعد تنفيذ الحل يجب أن أتحقق من معقولية الإجابة."},
    {title:"قضية مستعجلة", claim:"بدأ الطالب بالحل مباشرة قبل أن يفهم المطلوب.", prompt:"ما الخطوة التي كان يجب أن يبدأ بها؟", answer:"أفهم", explain:"أبدأ دائمًا بفهم المعطيات والمطلوب قبل اختيار الخطة أو الحل."},
    {title:"قضية الخطة المفقودة", claim:"فهم الطالب المسألة، ثم انتقل مباشرة إلى الحساب.", prompt:"أي خطوة قفز فوقها؟", answer:"أخطط", explain:"بعد الفهم أختار الخطة أو العملية المناسبة، ثم أنتقل إلى الحل."}
  ]);
}
function renderSolveErrorGame(){
  state.solveError = makeSolveErrorCase();
  const g=state.solveError;
  const opts=["أفهم","أخطط","أحل","أتحقق"];
  return `<article class="solve-error-card">
    <span class="eyebrow">🩺 عيادة المحقق الرياضي</span>
    <h3>${g.title}</h3>
    <p>اقرأ سلوك الطالب، ثم حدّد الخطوة التي أخطأ فيها أو نسيها.</p>
    <div class="detective-note"><b>${g.claim}</b><br>${g.prompt}</div>
    <div class="detective-fix-grid">
      ${opts.map(step=>`<button class="fault-step" data-solve-error-pick="${step}"><span>${step}</span><small>${solveStepCaption(step)}</small></button>`).join("")}
    </div>
    <div class="solve-fix-box" id="solveErrorFeedback">💡 فكّر في الترتيب الصحيح: أفهم ← أخطط ← أحل ← أتحقق.</div>
    <div class="cta-row">
      <button class="btn secondary" id="revealSolveFix">أظهر التصحيح</button>
      <button class="btn" id="newSolveError">جولة جديدة</button>
    </div>
    <div class="solve-fix-box" id="solveErrorFix" hidden></div>
  </article>`;
}
function makePlaceErrorCase(len=3){
  const n=makePlaceLabNumber(len);
  const digits=String(n).split("").map(Number);
  const pos=rand(0,len-1);
  const digit=digits[pos];
  const power=len-1-pos;
  const labels=placeNamesFor(len);
  const correct=digit*(10**power);
  const wrong= digit;
  const options=shuffle([...new Set([correct, wrong, digit*(10**Math.max(0,power-1)), digit*(10**Math.min(len-1,power+1))])]).slice(0,4);
  if(!options.includes(correct)) options[0]=correct;
  return {n,digit,power,placeName:labels[power],correct,wrong,options:[...new Set(options)].slice(0,4)};
}
function renderPlaceErrorGame(skill){
  const len=skill.id==="tenThousands"?5:skill.id==="thousands"?4:3;
  state.placeError = makePlaceErrorCase(len);
  const g=state.placeError;
  return `<article class="place-error-card">
    <span class="eyebrow">🩺 عيادة البرج</span>
    <h3>أصلح بطاقة القيمة المنزلية</h3>
    <p>قال أحد الطلاب إجابة خاطئة. اختر القيمة الصحيحة لإصلاح بطاقة البرج.</p>
    <div class="place-error-scene">
      <div class="place-error-columns">
        <div class="tower-number-badge">
          <h4>العدد</h4>
          <div class="tower-big-number">${formatN(g.n)}</div>
          <div class="detective-note">الرقم المطلوب: <b>${arNum(g.digit)}</b> في منزلة <b>${g.placeName}</b></div>
        </div>
        <div class="case-paper">
          <h4>الإجابة الخاطئة</h4>
          <div class="case-prompt" style="font-size:28px">قال الطالب: قيمة الرقم ${arNum(g.digit)} هي ${formatN(g.wrong)}</div>
          <div class="tower-note">اختر القيمة الصحيحة من الخيارات لإصلاح البرج.</div>
        </div>
      </div>
    </div>
    <div class="value-choice-grid">
      ${g.options.map(v=>`<button class="option value-choice" data-place-error-pick="${v}">${formatN(v)}</button>`).join("")}
    </div>
    <div class="place-fix-box" id="placeErrorFeedback">💡 تذكّر: قيمة الرقم = الرقم × قيمة المنزلة.</div>
    <div class="cta-row">
      <button class="btn secondary" id="revealPlaceFix">أظهر التصحيح</button>
      <button class="btn" id="newPlaceError">جولة جديدة</button>
    </div>
    <div class="place-fix-box" id="placeErrorFix" hidden></div>
  </article>`;
}

function normalizeAnswer(v){return typeof v==="number"?String(v):String(v);}
function startQuiz(type="practice"){
  const count=type==="challenge"?7:5;
  state.quiz={type,index:0,score:0,count,questions:Array.from({length:count},()=>makeQuestion(state.skill,type==="challenge")),answered:false};
  renderQuiz();
}
function renderQuiz(){
  const qz=state.quiz,q=qz.questions[qz.index];
  if(qz.index>=qz.count){finishQuiz();return}
  if(state.skill.id==="patterns"){ renderPatternQuiz(qz,q); return; }
  if(state.skill.id==="solve"){ renderSolveQuiz(qz,q); return; }
  if(["place","thousands","tenThousands"].includes(state.skill.id)){ renderPlaceQuiz(qz,q); return; }
  $("#skillPanel").innerHTML=`<article class="practice-card">
    <div class="quiz-meta"><span>${qz.type==="challenge"?"🏆 تحدي":"🎯 تدريب"} ${arNum(qz.index+1)} / ${arNum(qz.count)}</span><span>النقاط: ${arNum(qz.score)}</span></div>
    <div class="question">${q.prompt}</div>
    <div class="options" id="quizOptions">${q.options.map(o=>`<button class="option" data-answer="${String(o).replaceAll('"','&quot;')}">${typeof o==="number"?formatN(o):o}</button>`).join("")}</div>
    <div class="cta-row"><button class="btn secondary" id="hintBtn">💡 ساعدني</button><button class="btn hidden" id="nextQ">التالي</button></div>
    <div id="quizHint" class="hint-box" hidden></div><div id="quizFeedback" class="feedback" hidden></div>
  </article>`;
  $$("#quizOptions .option").forEach(b=>b.onclick=()=>answerQuiz(b,q));
  $("#hintBtn").onclick=()=>{const h=$("#quizHint");h.hidden=false;h.textContent=q.hint};
  $("#nextQ").onclick=()=>{qz.index++;qz.answered=false;renderQuiz()};
}
function answerQuiz(btn,q){
  if(state.skill.id==="patterns"){ answerPatternQuiz(btn,q); return; }
  if(state.skill.id==="solve"){ answerSolveQuiz(btn,q); return; }
  if(["place","thousands","tenThousands"].includes(state.skill.id)){ answerPlaceQuiz(btn,q); return; }
  if(state.quiz.answered)return;
  state.quiz.answered=true;
  const raw=btn.dataset.answer, right=normalizeAnswer(q.answer), isNum=typeof q.answer==="number", ok=isNum?+raw===+q.answer:raw===right;
  if(ok)state.quiz.score++;
  btn.classList.add(ok?"correct":"wrong");
  $$("#quizOptions .option").forEach(b=>{
    const isCorrect=isNum?+b.dataset.answer===+q.answer:b.dataset.answer===right;
    if(isCorrect)b.classList.add("correct");
  });
  const f=$("#quizFeedback");f.hidden=false;f.innerHTML=`<strong>${ok?"أحسنت 🌟":"راجع الفكرة"}</strong><br>${q.explain}`;
  $("#nextQ").classList.remove("hidden");
}
function finishQuiz(){
  const qz=state.quiz, pct=Math.round(qz.score/qz.count*100), old=mastery[state.skill.id]||0;
  if(pct>old){mastery[state.skill.id]=pct;saveMastery()}
  $("#skillPanel").innerHTML=`<article class="mastery-card">
    <span class="eyebrow">📊 نتيجة ${qz.type==="challenge"?"التحدي":"التدريب"}</span>
    <h3>${pct>=80?"أتقنت المهارة 🌟":pct>=60?"أنت قريب من الإتقان":"نحتاج جولة دعم قصيرة"}</h3>
    <div class="example-big">${arNum(pct)}٪</div>
    ${state.skill.id==="patterns" ? `<div class="challenge-celebrate">${masteryStars(pct)}</div>` : ``}
    <p>${pct>=80?"انتقل إلى مهارة جديدة أو جرّب تحديًا أصعب.":"ارجع إلى «أفهمها» و«أجرّبها»، ثم أعد التدريب."}</p>
    <div class="cta-row"><button class="btn" id="retryQuiz">إعادة</button><button class="btn secondary" data-tab-jump="learn">مراجعة الشرح</button></div>
  </article>`;
  $("#retryQuiz").onclick=()=>startQuiz(qz.type); bindPanel();
}
function renderError(s){
  if(s.id==="patterns") return renderPatternErrorGame();
  if(s.id==="solve") return renderSolveErrorGame();
  if(["place","thousands","tenThousands"].includes(s.id)) return renderPlaceErrorGame(s);
  const e=s.teacher.error;
  let claim="";
  if(s.id==="place") claim="في العدد ٤٢٥، قيمة الرقم ٢ هي ٢.";
  else if(s.id==="compare") claim="٤٣٢٥ > ٤٣٥٢ لأن ٥ أكبر من ٢.";
  else if(s.id==="round1000") claim="٢٦٧٤ ≈ ٢٠٠٠ إلى أقرب ألف.";
  else if(s.id==="round10_100") claim="٣٤٧ ≈ ٣٤٠ إلى أقرب عشرة.";
  else if(s.id==="order") claim="٣٢٠١، ٣١٩٩، ٣٢١٠ ترتيب تصاعدي صحيح.";
  else if(s.id==="patterns") claim="في النمط ٥، ١٠، ١٥، ٢٠ القاعدة هي أزيد ١٠.";
  else claim=e;
  return `<article class="error-card"><span class="eyebrow">🩺 عيادة المهارة</span><h3>أين الخطأ؟</h3>
    <div class="claim">${claim}</div>
    <p>${e}</p>
    <button class="btn secondary" data-reveal="errorFix">أظهر التصحيح</button>
    <div class="feedback" id="errorFix" hidden>${errorFixFor(s.id)}</div>
  </article>`;
}
function errorFixFor(id){
  const map={
    place:"في العدد ٤٢٥، الرقم ٢ في منزلة العشرات، لذلك قيمته ٢٠.",
    compare:"المقارنة تبدأ من أكبر منزلة. في ٤٣٢٥ و٤٣٥٢ تتساوى الألوف والمئات، ثم ٢ عشرات < ٥ عشرات، إذن ٤٣٢٥ < ٤٣٥٢.",
    round1000:"٢٦٧٤ يقع بعد ٢٥٠٠، لذلك هو أقرب إلى ٣٠٠٠.",
    round10_100:"٣٤٧ أقرب إلى ٣٥٠ من ٣٤٠، لذا يقرب إلى ٣٥٠.",
    order:"٣١٩٩ أصغر من ٣٢٠١، لذا يجب أن يأتي قبله في الترتيب التصاعدي.",
    patterns:"الفرق بين كل عددين هو ٥، إذن القاعدة: أزيد ٥."
  };
  return map[id]||"استخدم القاعدة الأساسية للمهارة وحدد الخطوة التي لم تُطبق بصورة صحيحة.";
}
function renderMastery(s){
  const m=mastery[s.id]||0;
  const title = m>=80 ? "ممتاز! وصلت إلى مستوى الإتقان" : m>=60 ? "أنت قريب من الإتقان" : m>0 ? "واصل التدريب وستتقدم" : "ابدأ أول تدريب لك";
  const caption = m>=80 ? "أحسنت 🌟 حافظ على هذا المستوى بالتدريب المتباعد." : m>=60 ? "جرّب جولة تدريب جديدة حتى تصل إلى ٨٠٪ فأكثر." : m>0 ? "ابدأ من الفهم ثم التدريب، وبعدها أعد التحدي." : "لم تُسجل نتيجة بعد. ابدأ من التدريب أو التجربة العملية.";
  return `<article class="mastery-card"><span class="eyebrow">⭐ بطاقة الإتقان</span><h3>${s.title}</h3>
    <div class="mastery-celebration">
      <div class="mastery-trophy">${m>=80?"🏆":m>=60?"⭐":"🎒"}</div>
      <div>
        <div class="example-big">${arNum(m)}٪</div>
        <b>${title}</b>
        <div class="mastery-stars">${masteryStars(m)}</div>
      </div>
    </div>
    <div class="m-bar" style="height:18px;margin:15px 0"><i style="width:${m}%"></i></div>
    <p class="mastery-caption">${caption}</p>
    <div class="student-achievement">🎯 هدفك القادم: ${m>=80?"حافظ على الإتقان وراجع بعد يومين.":"واصل حتى تصل إلى ٨٠٪ أو أكثر."}</div>
    <div class="cta-row"><button class="btn" data-tab-jump="practice">ابدأ التدريب</button><button class="btn secondary" data-tab-jump="learn">راجع الفكرة</button></div>
  </article>`;
}

/* المعلم */
function renderTeacher(){
  const sel=$("#teacherSkill");
  if(!sel.options.length) sel.innerHTML=skills.map(s=>`<option value="${s.id}">${s.icon} ${s.title}</option>`).join("");
  sel.value=state.skill?.id||skills[0].id;
  renderTeacherSkill();
}
$("#teacherSkill").onchange=()=>{state.skill=skills.find(s=>s.id===$("#teacherSkill").value);renderTeacherSkill()};
function renderTeacherSkill(){
  const s=skills.find(x=>x.id===$("#teacherSkill").value)||skills[0]; state.skill=s;
  $("#teacherObjective").innerHTML=`<b>الهدف:</b> ${s.objective}`;
  const tools=[
    ["💡","الفكرة في دقيقة","شرح مختصر للمفهوم","idea"],
    ["🧩","اعرض النموذج","مثال بصري سريع","model"],
    ["🖐️","نشاط الفصل","تطبيق جماعي قصير","activity"],
    ["⚡","تحدي السبورة","سؤال فوري للفصل","challenge"],
    ["🩺","الخطأ الشائع","تشخيص المفهوم الخاطئ","error"],
    ["✅","بطاقة خروج","٣ أسئلة تقويمية سريعة","exit"]
  ];
  $("#teacherTools").innerHTML=tools.map(t=>`<button class="teacher-tool" data-tool="${t[3]}"><span>${t[0]}</span><b>${t[1]}</b><small>${t[2]}</small></button>`).join("");
  $$("#teacherTools .teacher-tool").forEach(b=>b.onclick=()=>openTeacherTool(b.dataset.tool,s));
}
function openTeacherTool(tool,s){
  const titles={idea:"الفكرة في دقيقة",model:"اعرض النموذج",activity:"نشاط الفصل",challenge:"تحدي السبورة",error:"الخطأ الشائع",exit:"بطاقة خروج"};
  $("#dialogKicker").textContent=`${s.icon} ${s.title}`;$("#dialogTitle").textContent=titles[tool];
  if(tool==="exit"){
    $("#dialogBody").innerHTML=`<div class="exit-list">${s.teacher.exit.map((x,i)=>`<div class="exit-item"><b>${arNum(i+1)}.</b> ${x}</div>`).join("")}</div>`;
  }else if(tool==="challenge"){
    const q=makeQuestion(s,true);
    $("#dialogBody").innerHTML=`<div class="dialog-content"><div class="question">${q.prompt}</div>
      <button class="btn secondary" data-reveal="boardAnswer">إظهار الإجابة</button>
      <div class="feedback" id="boardAnswer" hidden><b>الإجابة:</b> ${typeof q.answer==="number"?formatN(q.answer):q.answer}<br>${q.explain}</div></div>`;
  }else{
    $("#dialogBody").innerHTML=`<div class="dialog-content">${s.teacher[tool]}</div>`;
  }
  $("#teacherDialog").showModal();bindPanel();
}
$("#closeDialog").onclick=()=>$("#teacherDialog").close();
$("#presentBtn").onclick=()=>{document.body.classList.toggle("presentation");toast(document.body.classList.contains("presentation")?"تم تفعيل وضع العرض":"تم إنهاء وضع العرض")};


/* مسار مراجعة صفية متكامل */
let classReview={skill:null,step:0};
function openClassReview(){
  const s=skills.find(x=>x.id===$("#teacherSkill").value)||skills[0];
  classReview={skill:s,step:0};
  $("#dialogKicker").textContent=`🎬 مراجعة صفية • ${s.title}`;
  $("#dialogTitle").textContent="مسار مراجعة جاهز";
  $("#teacherDialog").showModal();
  renderClassReviewStep();
}
function renderClassReviewStep(){
  const s=classReview.skill, step=classReview.step;
  const titles=["الفكرة في دقيقة","اعرض النموذج","تحدي السبورة","الخطأ الشائع","بطاقة خروج"];
  const icons=["💡","🧩","⚡","🩺","✅"];
  let body="";
  if(step===0){
    body=`<p>${s.teacher.idea}</p><div class="rule-box"><b>قاعدة المهارة:</b><br>${s.rule}</div>`;
  }else if(step===1){
    body=`<p>${s.teacher.model}</p><div class="review-number">${s.example}</div>`;
  }else if(step===2){
    const q=makeQuestion(s,true);
    body=`<p>اعرض السؤال للفصل، واترك وقتًا للتفكير قبل إظهار الإجابة.</p>
      <div class="question">${q.prompt}</div>
      <button class="btn secondary" data-reveal="reviewAns">إظهار الإجابة</button>
      <div class="feedback" id="reviewAns" hidden><b>الإجابة:</b> ${typeof q.answer==="number"?formatN(q.answer):q.answer}<br>${q.explain}</div>`;
  }else if(step===3){
    body=`<p>${s.teacher.error}</p><div class="feedback"><b>التوجيه:</b> اطلب من الطلاب تفسير موضع الخطأ قبل إعطاء التصحيح.</div>`;
  }else{
    body=`<p>اختم الحصة بهذه الأسئلة الثلاثة:</p><div class="exit-list">
      ${s.teacher.exit.map((x,i)=>`<div class="exit-item"><b>${arNum(i+1)}.</b> ${x}</div>`).join("")}
      </div>`;
  }

  $("#dialogBody").innerHTML=`<div class="review-stepper">
    <div class="review-dots">${titles.map((_,i)=>`<i class="${i<step?"done":i===step?"active":""}"></i>`).join("")}</div>
    <div class="review-stage">
      <span class="eyebrow">${icons[step]} الخطوة ${arNum(step+1)} من ٥</span>
      <h4>${titles[step]}</h4>${body}
    </div>
    <div class="review-nav">
      <button class="btn secondary" id="prevReview" ${step===0?"disabled":""}>السابق</button>
      <button class="btn" id="nextReview">${step===4?"إنهاء":"التالي"}</button>
    </div>
  </div>`;
  $("#prevReview").onclick=()=>{if(classReview.step>0){classReview.step--;renderClassReviewStep()}};
  $("#nextReview").onclick=()=>{
    if(classReview.step<4){classReview.step++;renderClassReviewStep()}
    else $("#teacherDialog").close();
  };
  bindPanel();
}
$("#classReviewBtn").onclick=openClassReview;


/* عيادة عامة */
function renderClinic(){
  $("#clinicGrid").innerHTML=skills.map(s=>`<article class="clinic-card">
    <span class="eyebrow">${s.icon} ${s.title}</span><h3>خطأ شائع</h3><p>${s.teacher.error}</p>
    <button class="btn secondary" data-open-skill="${s.id}">افتح عيادة المهارة</button>
  </article>`).join("");
  $$("[data-open-skill]").forEach(b=>b.onclick=()=>{openSkill(b.dataset.openSkill,"learn");setTab("error")});
}

/* تحدي الفصل */
function startChallenge(){
  state.challenge={i:0,score:0,questions:[]};
  const chosen=shuffle(skills).slice(0,9);
  state.challenge.questions=chosen.map(s=>({...makeQuestion(s,true),skill:s})); 
  const bonusSkill=pick(skills); state.challenge.questions.push({...makeQuestion(bonusSkill,true),skill:bonusSkill});
  renderChapterQ();
}
function renderChapterQ(){
  const c=state.challenge;$("#challengeScore").textContent=`${arNum(c.score)} / ${arNum(c.questions.length)}`;
  if(c.i>=c.questions.length){
    const pct=Math.round(c.score/c.questions.length*100);
    $("#challengeBox").innerHTML=`<div class="mastery-card"><span class="eyebrow">🏆 اكتملت الرحلة</span><h3>${pct>=80?"أضأت برج الإتقان الذهبي ✨":"اقتربت من إضاءة البرج"}</h3>
      <div class="example-big">${arNum(pct)}٪</div><p>${pct>=80?"أداء قوي عبر مهارات الفصل.":"راجع المهارات التي شعرت أنها أصعب ثم أعد التحدي."}</p>
      <button class="btn" id="restartChapter">إعادة التحدي</button></div>`;
    $("#restartChapter").onclick=startChallenge;return;
  }
  const q=c.questions[c.i];
  $("#challengeBox").innerHTML=`<span class="eyebrow">${q.skill.icon} ${q.skill.title}</span>
    <div class="quiz-meta"><span>المهمة ${arNum(c.i+1)} / ${arNum(c.questions.length)}</span><span>النقاط: ${arNum(c.score)}</span></div>
    <div class="question">${q.prompt}</div>
    <div class="options" id="chapterOpts">${q.options.map(o=>`<button class="option" data-answer="${String(o).replaceAll('"','&quot;')}">${typeof o==="number"?formatN(o):o}</button>`).join("")}</div>
    <div class="feedback" id="chapterFeed" hidden></div><div class="cta-row"><button class="btn hidden" id="chapterNext">التالي</button></div>`;
  let answered=false;
  $$("#chapterOpts .option").forEach(b=>b.onclick=()=>{
    if(answered)return;answered=true;
    const isNum=typeof q.answer==="number",ok=isNum?+b.dataset.answer===+q.answer:b.dataset.answer===String(q.answer);
    if(ok)c.score++;
    b.classList.add(ok?"correct":"wrong");
    $$("#chapterOpts .option").forEach(x=>{if(isNum?+x.dataset.answer===+q.answer:x.dataset.answer===String(q.answer))x.classList.add("correct")});
    const f=$("#chapterFeed");f.hidden=false;f.innerHTML=`<strong>${ok?"صحيح 🌟":"راجع الفكرة"}</strong><br>${q.explain}`;
    $("#chapterNext").classList.remove("hidden");$("#challengeScore").textContent=`${arNum(c.score)} / ${arNum(c.questions.length)}`;
  });
  $("#chapterNext").onclick=()=>{c.i++;renderChapterQ()};
}

/* راشد وبسمة */
$("#mascotTipBtn")?.addEventListener("click", ()=> {
  setMascotMessage(mascotMessages[Math.floor(Math.random()*mascotMessages.length)]);
  toast("رسالة جديدة من راشد وبسمة ✨");
});
$("#mascotFab")?.addEventListener("click", ()=> {
  $("#mascotPanel")?.classList.toggle("hidden-panel");
});
$("#closeMascotPanel")?.addEventListener("click", ()=> {
  $("#mascotPanel")?.classList.add("hidden-panel");
});
$("#newMascotMessage")?.addEventListener("click", ()=> {
  setMascotMessage(mascotMessages[Math.floor(Math.random()*mascotMessages.length)]);
});


/* V1.7: تنظيف أي Service Worker / Cache قديم حتى تظهر التحديثات فورًا */
async function clearLegacyAppCache(){
  try{
    if("serviceWorker" in navigator){
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.unregister()));
    }
    if("caches" in window){
      const keys = await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }
    const flagKey="cityNumbersCacheReset_170";
    if(!sessionStorage.getItem(flagKey)){
      sessionStorage.setItem(flagKey,"1");
      console.log("City Numbers V1.7 cache cleaned.");
    }
  }catch(e){
    console.warn("Cache cleanup skipped", e);
  }
}
window.addEventListener("load", clearLegacyAppCache);

/* تهيئة */
renderStudent();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
