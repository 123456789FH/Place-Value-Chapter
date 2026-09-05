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
  if(id==="studentScreen") renderStudent();
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
function renderStudent(){
  const ov=overall(), deg=Math.round(ov*3.6);
  $("#overallRing").style.background=`conic-gradient(var(--gold) ${deg}deg,rgba(255,255,255,.08) 0)`;
  $("#overallRing b").textContent=arNum(ov)+"٪";
  $("#skillMap").innerHTML=skills.map((s,i)=>{
    const m=mastery[s.id]||0;
    return `<button class="skill-card ${m>=80?"done":""}" data-skill="${s.id}">
      <span class="num">${arNum(i+1)}</span><span class="icon">${s.icon}</span>
      <b>${s.place}</b><small>${s.title}</small>
      <div class="progress"><i style="width:${m}%"></i></div>
    </button>`;
  }).join("");
  $$("#skillMap [data-skill]").forEach(b=>b.onclick=()=>openSkill(b.dataset.skill,state.mode));
}
$$(".mode-card").forEach(b=>b.onclick=()=>{
  state.mode=b.dataset.mode;
  $$(".mode-card").forEach(x=>x.classList.toggle("selected",x===b));
  toast(state.mode==="learn"?"اختر مهارة لتبدأ بالفهم":state.mode==="practice"?"اختر مهارة لبدء التدريب":"اختر مهارة لبدء التحدي");
});

function openSkill(id,mode="learn"){
  state.skill=skills.find(s=>s.id===id)||skills[0];
  state.mode=mode;
  state.tab = mode==="practice"?"practice":mode==="challenge"?"challenge":"learn";
  $("#skillKicker").textContent=state.skill.place;
  $("#skillTitle").textContent=state.skill.title;
  $("#skillSubtitle").textContent=state.skill.subtitle;
  $("#skillBadge").textContent=state.skill.icon;
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
  return `<article class="lesson-card">
    <span class="eyebrow">${s.icon} الفكرة الأساسية</span>
    <h3>${s.title}</h3>
    <p>${s.subtitle}</p>
    <div class="rule-box"><b>قاعدة سهلة:</b><br>${s.rule}</div>
    <div class="example-box"><b>مثال:</b><div class="example-big">${s.example}</div></div>
    <div class="cta-row">
      <button class="btn mint" data-tab-jump="try">🧪 جرّبها بيدك</button>
      <button class="btn secondary" data-tab-jump="practice">🎯 ابدأ التدريب</button>
    </div>
  </article>`;
}
function bindPanel(){
  $$("[data-tab-jump]").forEach(b=>b.onclick=()=>setTab(b.dataset.tabJump));
  $$("[data-reveal]").forEach(b=>b.onclick=()=>{ const x=document.getElementById(b.dataset.reveal);x.hidden=false;b.disabled=true;});
}

function renderTry(s){
  if(["place","thousands","tenThousands"].includes(s.id)) return tryPlace(s);
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
function tryPlace(s){
  const digitsCount=s.id==="tenThousands"?5:s.id==="thousands"?4:3;
  let min=10**(digitsCount-1), max=10**digitsCount-1, n=rand(min,max);
  return `<article class="try-card" data-number="${n}">
    <span class="eyebrow">🏗️ مختبر المنازل</span><h3>المس الرقم الذي تريد فحصه</h3>
    <p>سنُظهر لك اسم منزلته وقيمته داخل العدد.</p>
    <div class="example-big" id="placeNumber">${formatN(n)}</div>
    <div class="number-pick" id="digitPick">${String(n).split("").map((d,i)=>`<button data-pos="${i}">${arNum(d)}</button>`).join("")}</div>
    <div id="placeExplain" class="feedback">اختر رقمًا من العدد.</div>
    <div class="cta-row"><button class="btn secondary" id="newPlaceNumber">عدد جديد</button></div>
  </article>`;
}
function tryPattern(){
  const step=pick([2,5,10,-2,-5,-10]), start=rand(step<0?40:2,step<0?80:20);
  const seq=[start,start+step,start+2*step,start+3*step];
  const ans=start+4*step;
  const opts=shuffle([ans,ans+(step>0?5:-5),ans+(step>0?10:-10)]);
  return `<article class="try-card" data-answer="${ans}">
    <span class="eyebrow">🚂 قطار الأنماط</span><h3>ما العدد التالي؟</h3>
    <div class="example-big">${seq.map(formatN).join(" ، ")} ، ؟</div>
    <div class="options" id="tryPatternOpts">${opts.map(o=>`<button class="option" data-value="${o}">${formatN(o)}</button>`).join("")}</div>
    <div class="feedback" id="tryPatternFeedback">ابحث عن الفرق بين كل عدد والذي يليه.</div>
  </article>`;
}
function tryCompare(){
  const a=rand(1200,9999), b=Math.random()<.2?a:rand(1200,9999);
  const ans=a===b?"=":a>b?">":"<";
  return `<article class="try-card" data-a="${a}" data-b="${b}" data-answer="${ans}">
    <span class="eyebrow">⚖️ ميزان الأعداد</span><h3>اختر رمز المقارنة</h3>
    <div class="example-big">${formatN(a)} <span id="symbolSlot">؟</span> ${formatN(b)}</div>
    <div class="symbols" id="compareSymbols"><button>&gt;</button><button>&lt;</button><button>=</button></div>
    <div class="feedback" id="compareFeedback">ابدأ من أكبر منزلة ثم انتقل حتى أول اختلاف.</div>
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
    bindPlaceTry();
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
function bindPlaceTry(){
  const card=$(".try-card"), n=String(card.dataset.number), names=["آحاد","عشرات","مئات","ألوف","عشرات الألوف"];
  $$("#digitPick button").forEach(b=>b.onclick=()=>{
    const pos=+b.dataset.pos, digit=+n[pos], power=n.length-1-pos, value=digit*(10**power);
    $("#placeExplain").innerHTML=`الرقم <strong>${arNum(digit)}</strong> في منزلة <strong>${names[power]}</strong>، وقيمته <strong>${formatN(value)}</strong>.`;
  });
  $("#newPlaceNumber").onclick=()=>setTab("try");
}

function makeQuestion(skill, hard=false){
  const id=skill.id;
  if(id==="patterns"){
    const step=pick([2,5,10,-2,-5,-10]), start=rand(step<0?50:2,step<0?90:25), seq=[start,start+step,start+2*step,start+3*step], ans=start+4*step;
    return {prompt:`أكمل النمط: ${seq.map(formatN).join(" ، ")} ، ؟`,options:shuffle([ans,ans+(step>0?5:-5),ans+(step>0?10:-10),ans-step]),answer:ans,hint:"احسب الفرق بين عددين متتاليين.",explain:`القاعدة هي ${step>0?"أزيد":"أنقص"} ${formatN(Math.abs(step))}.`};
  }
  if(id==="solve"){
    const opts=["أفهم","أخطط","أحل","أتحقق"];
    const q=pick([
      {p:"ما الخطوة الأولى عند حل المسألة؟",a:"أفهم",h:"ابدأ بتحديد المعطيات والمطلوب.",e:"نبدأ بفهم المسألة قبل اختيار الخطة."},
      {p:"بعد تنفيذ الحل، ما الخطوة التي تساعدني على التأكد من معقولية الإجابة؟",a:"أتحقق",h:"اسأل: هل إجابتي منطقية؟",e:"التحقق هو الخطوة الأخيرة."},
      {p:"في أي خطوة أختار العملية أو الاستراتيجية المناسبة؟",a:"أخطط",h:"هذه الخطوة تأتي بعد الفهم وقبل التنفيذ.",e:"أختار الخطة المناسبة في مرحلة أخطط."}
    ]);
    return {prompt:q.p,options:opts,answer:q.a,hint:q.h,explain:q.e};
  }
  if(["place","thousands","tenThousands"].includes(id)){
    const len=id==="tenThousands"?5:id==="thousands"?4:3, min=10**(len-1), n=rand(min,10**len-1), pos=rand(0,len-1), digit=+String(n)[pos], power=len-1-pos, ans=digit*(10**power);
    const vals=shuffle([...new Set([ans,digit, digit*10, digit*100, digit*1000, digit*10000])]).slice(0,4);
    if(!vals.includes(ans)){vals[0]=ans}
    return {prompt:`ما قيمة الرقم ${arNum(digit)} في العدد ${formatN(n)}؟`,options:shuffle(vals),answer:ans,hint:"حدد منزلة الرقم أولًا، ثم اكتب قيمته.",explain:`منزلة الرقم تحدد قيمته داخل العدد.`};
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
function normalizeAnswer(v){return typeof v==="number"?String(v):String(v);}
function startQuiz(type="practice"){
  const count=type==="challenge"?7:5;
  state.quiz={type,index:0,score:0,count,questions:Array.from({length:count},()=>makeQuestion(state.skill,type==="challenge")),answered:false};
  renderQuiz();
}
function renderQuiz(){
  const qz=state.quiz,q=qz.questions[qz.index];
  if(qz.index>=qz.count){finishQuiz();return}
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
    <p>${pct>=80?"انتقل إلى مهارة جديدة أو جرّب تحديًا أصعب.":"ارجع إلى «أفهمها» و«أجرّبها»، ثم أعد التدريب."}</p>
    <div class="cta-row"><button class="btn" id="retryQuiz">إعادة</button><button class="btn secondary" data-tab-jump="learn">مراجعة الشرح</button></div>
  </article>`;
  $("#retryQuiz").onclick=()=>startQuiz(qz.type); bindPanel();
}
function renderError(s){
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
  return `<article class="mastery-card"><span class="eyebrow">📊 بطاقة الإتقان</span><h3>${s.title}</h3>
    <div class="example-big">${arNum(m)}٪</div>
    <div class="m-bar" style="height:16px;margin:15px 0"><i style="width:${m}%"></i></div>
    <p>${m>=80?"المهارة في مستوى الإتقان. حافظ على التدريب المتباعد.":m? "أعد التدريب حتى تصل إلى ٨٠٪ فأكثر.":"لم تسجل نتيجة بعد. ابدأ بتدريب قصير من ٥ أسئلة."}</p>
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
  state.challenge.questions.push({...makeQuestion(pick(skills),true),skill:pick(skills)});
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

/* تهيئة */
renderStudent();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
