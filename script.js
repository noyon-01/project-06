const all_levels_load = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => display_all_levels(data.data));
};

const display_all_levels = (levels) => {
  const all_levels_section = document.getElementById("all_levels_section");

  levels.forEach((level) => {
    const all_levels = document.createElement("div");
    all_levels.innerHTML = `
    <button id="lesson_word_${level.level_no}" onclick="level_word(${level.level_no})" class="btn btn-primary btn-outline px-6 text-[14px] font-bold all_lesson_btn"><span><i class="fa-solid fa-book-open"></i></span>Lesson - ${level.level_no}</button>
    `;
    all_levels_section.appendChild(all_levels);
  });
};

all_levels_load();

const level_word = (level_no) => {
  fetch(`https://openapi.programming-hero.com/api/level/${level_no}`)
    .then((res) => res.json())
    .then((data) => {
      display_level_word(data.data);
      remove_class();
      const select_lesson = document.getElementById(`lesson_word_${level_no}`);
      select_lesson.classList.add("active");
    });
};

const remove_class = () => {
  const all_lesson_btn = document.querySelectorAll(".all_lesson_btn");
  all_lesson_btn.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const display_level_word = (words) => {
  const select_btn_section = document.getElementById("select_btn_section");
  select_btn_section.classList.add("hidden");

  const level_word_section = document.getElementById("level_word_section");
  level_word_section.innerHTML = "";
  level_word_section.classList.remove("hidden");

  if (words.length == 0) {
    select_btn_section.classList.remove("hidden");
    select_btn_section.innerHTML = `
    <div>
        <p class="font-bangla text-[#79716B] pb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-4xl font-medium">নেক্সট Lesson এ যান</h1>
    </div>
    `;
  }

  words.forEach((word) => {
    const level_word = document.createElement("div");
    level_word.innerHTML = `
    <div class="bg-[#FFFFFF] p-14 rounded-xl shadow">
    <h1 class="text-3xl font-bold">${word.word}</h1>
    <p class="text-xl font-medium py-6">meaning / pronunciation</p>
    <h1 class="font-bangla text-3xl font-semibold">${word.meaning} / ${word.pronunciation}</h1>

    <div class="flex justify-between items-center pt-10">
    <span class="btn btn-soft"><i class="fa-solid fa-circle-info"></i></span>
    <span class="btn btn-soft"><i class="fa-solid fa-volume-high"></i></span>
    </div>
    </div>
    `;
    level_word_section.appendChild(level_word);
  });
};



























const all_levels_load = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => display_all_levels(data.data));
};

const display_all_levels = (levels) => {
  const all_levels_section = document.getElementById("all_levels_section");

  levels.forEach((level) => {
    const all_levels = document.createElement("div");
    all_levels.innerHTML = `
    <button id="lesson_word_${level.level_no}" onclick="level_word(${level.level_no})" class="btn btn-primary btn-outline px-6 text-[14px] font-bold all_lesson_btn"><span><i class="fa-solid fa-book-open"></i></span>Lesson - ${level.level_no}</button>
    `;
    all_levels_section.appendChild(all_levels);
  });
};

all_levels_load();

const level_word = (level_no) => {
  fetch(`https://openapi.programming-hero.com/api/level/${level_no}`)
    .then((res) => res.json())
    .then((data) => {
      display_level_word(data.data);
      remove_class();
      const select_lesson = document.getElementById(`lesson_word_${level_no}`);
      select_lesson.classList.add("active");
    });
};

const remove_class = () => {
  const all_lesson_btn = document.querySelectorAll(".all_lesson_btn");
  all_lesson_btn.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const display_level_word = (words) => {
  const select_btn_section = document.getElementById("select_btn_section");
  select_btn_section.classList.add("hidden");

  const level_word_section = document.getElementById("level_word_section");
  level_word_section.innerHTML = "";
  level_word_section.classList.remove("hidden");

  if (words.length == 0) {
    select_btn_section.classList.remove("hidden");
    select_btn_section.innerHTML = `
    <div>
        <p class="font-bangla text-[#79716B] pb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-4xl font-medium">নেক্সট Lesson এ যান</h1>
    </div>
    `;
  }

  words.forEach((word) => {
    const level_word = document.createElement("div");
    level_word.innerHTML = `
    <div class="bg-[#FFFFFF] p-14 rounded-xl shadow">
    <h1 class="text-3xl font-bold">${word.word}</h1>
    <p class="text-xl font-medium py-6">meaning / pronunciation</p>
    <h1 class="font-bangla text-3xl font-semibold">${word.meaning} / ${word.pronunciation}</h1>

    <div class="flex justify-between items-center pt-10">
    <span class="btn btn-soft"><i class="fa-solid fa-circle-info"></i></span>
    <span class="btn btn-soft"><i class="fa-solid fa-volume-high"></i></span>
    </div>
    </div>
    `;
    level_word_section.appendChild(level_word);
  });
};
const all_levels_load = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => display_all_levels(data.data));
};

const display_all_levels = (levels) => {
  const all_levels_section = document.getElementById("all_levels_section");

  levels.forEach((level) => {
    const all_levels = document.createElement("div");
    all_levels.innerHTML = `
    <button id="lesson_word_${level.level_no}" onclick="level_word(${level.level_no})" class="btn btn-primary btn-outline px-6 text-[14px] font-bold all_lesson_btn"><span><i class="fa-solid fa-book-open"></i></span>Lesson - ${level.level_no}</button>
    `;
    all_levels_section.appendChild(all_levels);
  });
};

all_levels_load();

const level_word = (level_no) => {
  fetch(`https://openapi.programming-hero.com/api/level/${level_no}`)
    .then((res) => res.json())
    .then((data) => {
      display_level_word(data.data);
      remove_class();
      const select_lesson = document.getElementById(`lesson_word_${level_no}`);
      select_lesson.classList.add("active");
    });
};

const remove_class = () => {
  const all_lesson_btn = document.querySelectorAll(".all_lesson_btn");
  all_lesson_btn.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const display_level_word = (words) => {
  const select_btn_section = document.getElementById("select_btn_section");
  select_btn_section.classList.add("hidden");

  const level_word_section = document.getElementById("level_word_section");
  level_word_section.innerHTML = "";
  level_word_section.classList.remove("hidden");

  if (words.length == 0) {
    select_btn_section.classList.remove("hidden");
    select_btn_section.innerHTML = `
    <div>
        <p class="font-bangla text-[#79716B] pb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-4xl font-medium">নেক্সট Lesson এ যান</h1>
    </div>
    `;
  }

  words.forEach((word) => {
    const level_word = document.createElement("div");
    level_word.innerHTML = `
    <div class="bg-[#FFFFFF] p-14 rounded-xl shadow">
    <h1 class="text-3xl font-bold">${word.word}</h1>
    <p class="text-xl font-medium py-6">meaning / pronunciation</p>
    <h1 class="font-bangla text-3xl font-semibold">${word.meaning} / ${word.pronunciation}</h1>

    <div class="flex justify-between items-center pt-10">
    <span class="btn btn-soft"><i class="fa-solid fa-circle-info"></i></span>
    <span class="btn btn-soft"><i class="fa-solid fa-volume-high"></i></span>
    </div>
    </div>
    `;
    level_word_section.appendChild(level_word);
  });
};
