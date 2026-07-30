"use client";

import { useEffect, useRef, useState } from "react";

const concerns = [
  {
    icon: "≈",
    title: "Тревога и беспокойство",
    text: "Когда напряжение стало фоновым, а расслабиться привычными способами не получается.",
  },
  {
    icon: "☾",
    title: "Нарушения сна",
    text: "Трудности с засыпанием, поверхностный сон и ощущение усталости после пробуждения.",
  },
  {
    icon: "↯",
    title: "Раздражительность",
    text: "Повышенная нервозность, вспышки гнева и ощущение внутреннего перенапряжения.",
  },
  {
    icon: "○",
    title: "Телесный дискомфорт",
    text: "Привычные мышечные зажимы, которые могли сформироваться на фоне подавленных эмоций.",
  },
  {
    icon: "∿",
    title: "Хроническая усталость",
    text: "Снижение энергии, утомляемость и чувство, будто тело всё время остаётся собранным.",
  },
  {
    icon: "◌",
    title: "Стрессовые состояния",
    text: "Телесные реакции после длительного стресса, конфликтов или эмоционально сложных событий.",
  },
];

const steps = [
  {
    number: "01",
    title: "Подготовка",
    text: "Человек располагается на кушетке, закрывает глаза и переводит внимание к дыханию и ощущениям в теле.",
  },
  {
    number: "02",
    title: "Поиск напряжений",
    text: "Специалист последовательно работает с телом и определяет зоны глубокого мышечного напряжения.",
  },
  {
    number: "03",
    title: "Мягкая проработка",
    text: "Разминание выполняется через ткань. Внимание остаётся на дыхании, ощущениях и постепенном расслаблении.",
  },
  {
    number: "04",
    title: "Наблюдение динамики",
    text: "После сеанса оцениваются телесные ощущения и изменения психоэмоционального состояния.",
  },
];

const testimonials = [
  {
    quote:
      "После нескольких сеансов состояние значительно улучшилось: практически две недели не ощущаю привычной головной боли. Буду продолжать.",
    name: "Галина, 36 лет",
    detail: "Отзыв о курсе",
  },
  {
    quote:
      "Постепенно ушло головокружение, появилось чувство освобождения и лёгкости в области груди, перестали беспокоить боли в голове.",
    name: "Оксана, 26 лет",
    detail: "Отзыв о курсе",
  },
  {
    quote:
      "Нормализовался сон, стала спокойнее. Обычные массажи раньше не давали такого ощущения внутреннего расслабления.",
    name: "Светлана, 43 года",
    detail: "Отзыв о курсе",
  },
];

const books = [
  "Книга о духовной Работе",
  "Книга об очевидном и неочевидном",
  "Тёмная сторона поиска. Ключи к осознанности",
  "Наука духовного роста",
  "Путь преображения. Секс и духовный рост",
  "Путь преображения: мистический опыт",
  "За завесами Света",
  "Что-нибудь для Бога",
  "Основы мистического Пути",
  "Как укротить эмоции",
  "В присутствии Бога",
  "Мистическая работа со снами",
  "Великие мистики, как они есть",
  "Практика осознанности",
  "Огонь стремления",
  "Истинные чудеса",
  "Трансформация ума",
  "Круги на воде",
  "Суфийские притчи",
  "Великое Дао",
  "Становление мистика",
  "Книга о Просветлении",
];

const certifiedSpecialists = [
  { name: "Богачёва Ирина Николаевна", certificate: "001" },
  { name: "Борщ Николай Витальевич", certificate: "002" },
  { name: "Климков Дмитрий Вячеславович", certificate: "003" },
  { name: "Васильева Татьяна Владимировна", certificate: "004" },
  { name: "Бурлаков Сергей Владимирович", certificate: "005" },
  { name: "Иванов Николай Всеволодович", certificate: "007" },
  { name: "Накропина Надежда Владимировна", certificate: "008" },
  { name: "Баранова Марина Валентиновна", certificate: "009" },
  { name: "Гуринович Светлана Александровна", certificate: "010" },
  { name: "Суриков Дмитрий Олегович", certificate: "011" },
  { name: "Загольская Надежда Николаевна", certificate: "012" },
  { name: "Иванова Елена Юрьевна", certificate: "013" },
  { name: "Цветнова Ксения Александровна", certificate: "014" },
  { name: "Олиференко Полина Владимировна", certificate: "015" },
  { name: "Умяров Рашид Мансурович", certificate: "024" },
  { name: "Дибиргаджиев Олег Магомедович", certificate: "025" },
  { name: "Шония Владимир Вячеславович", certificate: "026" },
  { name: "Навалов Вячеслав Юрьевич", certificate: "027" },
  { name: "Бареа-Нуньес Евгения Сергеевна", certificate: "028" },
  { name: "Ефимова Ирина Анатольевна", certificate: "029" },
  { name: "Зимовец Эльмира Менеровна", certificate: "030" },
  { name: "Смолянинова Мария Александровна", certificate: "031" },
  { name: "Афанасенко Инна Владимировна", certificate: "032" },
  { name: "Бутов Павел Сергеевич", certificate: "033" },
  { name: "Бавыкина Елена Владимировна", certificate: "034" },
  { name: "Толстиков Олег Владимирович", certificate: "035" },
  { name: "Новак Александр Александрович", certificate: "036" },
  { name: "Клевцов Дмитрий Юрьевич", certificate: "037" },
  { name: "Гавердов Константин Константинович", certificate: "038" },
  { name: "Эрик Фриц", certificate: "039" },
  { name: "Чиркова Инна Владимировна", certificate: "041" },
  { name: "Рожкова Анна Александровна", certificate: "042" },
  { name: "Вахненко Виталий Алексеевич", certificate: "045" },
  { name: "Максимов Вадим Юрьевич", certificate: "047" },
  { name: "Муравлев Дмитрий Борисович", certificate: "048" },
  { name: "Карабаджак Игорь Анатольевич", certificate: "049" },
  { name: "Конюшенко Елена Карловна", certificate: "052" },
  { name: "Скляр Яна Викторовна", certificate: "053" },
  { name: "Койфман Ольга Васильевна", certificate: "054" },
  { name: "Вознесенская Ирина Викторовна (СПб)", certificate: "055" },
  { name: "Шевченко Татьяна Владимировна (СПб)", certificate: "056" },
  { name: "Сафиуллин Рафаэль Рафаэльевич", certificate: "057" },
  { name: "Добржанская Евгения Александровна", certificate: "058" },
  { name: "Шпиньков Вячеслав Игоревич", certificate: "059" },
  { name: "Певченко Юрий Владимирович", certificate: "060" },
  { name: "Страхова Елена Викторовна", certificate: "061" },
  { name: "Азарова Елена Валентиновна", certificate: "062" },
  { name: "Бакаева Ирина Владимировна", certificate: "063" },
  { name: "Лариса Ивановна Робинс", certificate: "064" },
  { name: "Гусь Дарья Игоревна (СПб)", certificate: "065" },
];

const specialists = [
  { city: "Москва", name: "Елена Страхова", phone: "+7 926 521-65-65", place: "метро Пыхтино" },
  { city: "Москва", name: "Юрий Певченко", phone: "+7 925 771-54-78", place: "Пыхтино / Мытищи" },
  { city: "Москва", name: "Евгения Добржанская", phone: "+7 900 577-53-19", place: "Октябрьское поле" },
  { city: "Москва", name: "Ксения Новак", phone: "+7 985 288-32-48", place: "Менделеевская" },
  { city: "Москва", name: "Анна Рожкова", phone: "+7 904 857-08-97", place: "Щукинская / Тульская" },
  { city: "Зеленоград", name: "Вячеслав Шпиньков", phone: "+7 925 805-80-45", place: "Зеленоград" },
  { city: "Коломна", name: "Екатерина Муравлёва", phone: "+7 919 967-10-81", place: "Коломна" },
  { city: "Калуга", name: "Евгения Добржанская", phone: "+7 900 577-53-19", place: "Калуга" },
  { city: "Великий Новгород", name: "Елена Конюшенко", phone: "+7 911 603-49-19", place: "Великий Новгород" },
  { city: "Краснодар", name: "Константин Гавердов", phone: "+7 964 935-09-33", place: "Краснодар" },
];

const faqs = [
  {
    q: "Чем метод отличается от обычного массажа?",
    a: "В описании патента акцент сделан не на общем массаже, а на последовательном обнаружении глубоких мышечных напряжений, фиксации внимания на ощущениях и наблюдении изменений психоэмоционального состояния.",
  },
  {
    q: "Сколько длится сеанс и курс?",
    a: "Согласно патенту, длительность постепенно увеличивается от 20–30 минут до часа. Описанный курс включает 5–15 сеансов с интервалом 1–3 суток. Конкретный формат специалист определяет индивидуально.",
  },
  {
    q: "Нужно ли рассказывать о сложных событиях?",
    a: "Метод сосредоточен прежде всего на телесной работе. Объём разговора и границы взаимодействия лучше заранее обсудить со специалистом.",
  },
  {
    q: "Есть ли противопоказания?",
    a: "Перед началом курса важно сообщить специалисту о состоянии здоровья и получить консультацию врача при острых, хронических или неясных симптомах. Метод не заменяет диагностику и медицинское лечение.",
  },
  {
    q: "Как выбрать специалиста?",
    a: "Проверьте наличие сертификата авторского курса, уточните опыт, формат первой встречи и задайте вопросы о ходе сеанса. Вы вправе остановить работу в любой момент.",
  },
];

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [city, setCity] = useState("Все города");
  const [headerRaised, setHeaderRaised] = useState(false);
  const booksRail = useRef<HTMLDivElement>(null);
  const registryDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setHeaderRaised(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cities = ["Все города", ...Array.from(new Set(specialists.map((item) => item.city)))];
  const visibleSpecialists =
    city === "Все города" ? specialists : specialists.filter((item) => item.city === city);

  const closeMenu = () => setMenuOpen(false);
  const scrollBooks = (direction: -1 | 1) => {
    const rail = booksRail.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <main>
      <header className={`site-header ${headerRaised ? "is-raised" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Метод Жуковца — наверх">
          <span className="brand-mark" aria-hidden="true">
            Ж
          </span>
          <span>
            <strong>Метод Жуковца</strong>
            <small>Телесно-ориентированная терапия</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={menuOpen ? "is-open" : ""} aria-label="Основная навигация">
          <a href="#method" onClick={closeMenu}>О методе</a>
          <a href="#process" onClick={closeMenu}>Как проходит</a>
          <a href="#specialists" onClick={closeMenu}>Специалисты</a>
          <a href="#faq" onClick={closeMenu}>Вопросы</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Связаться</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="hero-method.webp"
          alt="Светлое пространство для телесно-ориентированной терапии"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <p className="eyebrow reveal">Тело помнит. Тело может отпустить.</p>
          <h1 className="reveal reveal-delay-1">
            Путь к внутренней
            <span>свободе через тело</span>
          </h1>
          <p className="hero-lead reveal reveal-delay-2">
            Авторский метод работы с глубокими мышечными напряжениями,
            связанными с накопленным стрессом и подавленными эмоциями.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a className="button button-primary" href="#specialists">
              Найти специалиста <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#method">
              Узнать о методе <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-facts reveal reveal-delay-3">
            <div>
              <strong>с 1998</strong>
              <span>развивается метод</span>
            </div>
            <div>
              <strong>№ 2395308</strong>
              <span>патент РФ</span>
            </div>
            <div>
              <strong>20+ книг</strong>
              <span>автора о психологии</span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#method" aria-label="Перейти к следующему разделу">
          <span />
        </a>
      </section>

      <section className="intro section" id="method">
        <div className="shell intro-grid">
          <div className="section-heading">
            <p className="eyebrow">О методе</p>
            <h2>Расслабляя тело,<br />мы меняем состояние</h2>
          </div>
          <div className="intro-copy">
            <p className="large-copy">
              Метод создан врачом и психотерапевтом Русланом Жуковцом.
              В его основе — идея о том, что длительно подавляемые эмоции
              могут поддерживать хроническое мышечное напряжение.
            </p>
            <p>
              Во время сеанса специалист последовательно находит зоны глубокого
              напряжения и работает с ними через ткань мягким разминанием.
              Человек сохраняет внимание к дыханию и телесным ощущениям.
            </p>
            <a
              className="inline-link"
              href="https://patentimages.storage.googleapis.com/48/75/90/182907c3080e97/RU2395308C2.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Открыть патент РФ <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="shell books-showcase" id="books">
          <div className="books-heading">
            <div>
              <p className="eyebrow">Книги автора</p>
              <h3>Мысли, наблюдения<br />и практический опыт</h3>
            </div>
            <div className="books-intro">
              <p>
                Книги Руслана Жуковца о психологии, осознанности,
                духовном поиске и внутренней работе.
              </p>
              <a
                className="inline-link"
                href="https://mystic-school.ru/knigi"
                target="_blank"
                rel="noreferrer"
              >
                Все книги и материалы <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="books-rail-wrap">
            <div className="books-rail" ref={booksRail}>
              {books.map((title, index) => (
                <a
                  className="book-card"
                  href="https://mystic-school.ru/knigi"
                  target="_blank"
                  rel="noreferrer"
                  key={title}
                >
                  <span className="book-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="book-cover-wrap">
                    <img
                      className="book-cover"
                      src={`books/book-${String(index + 1).padStart(2, "0")}.webp`}
                      alt={`Обложка книги «${title}»`}
                      loading="lazy"
                    />
                  </span>
                  <strong>{title}</strong>
                  <span className="book-more">О книге <i aria-hidden="true">↗</i></span>
                </a>
              ))}
            </div>
            <div className="books-controls" aria-label="Прокрутка книг">
              <button type="button" onClick={() => scrollBooks(-1)} aria-label="Предыдущие книги">←</button>
              <span>Листайте коллекцию</span>
              <button type="button" onClick={() => scrollBooks(1)} aria-label="Следующие книги">→</button>
            </div>
          </div>
        </div>

        <div className="shell principle-panel">
          <div className="principle-visual" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="body-line" />
            <span className="pulse pulse-one" />
            <span className="pulse pulse-two" />
            <span className="pulse pulse-three" />
          </div>
          <div className="principle-copy">
            <span className="panel-index">01 / ПРИНЦИП</span>
            <h3>Внимание следует за ощущением</h3>
            <p>
              Работа объединяет физическое воздействие и осознанное наблюдение:
              мышца постепенно расслабляется, а человек замечает, как меняются
              дыхание, эмоции и общее самочувствие.
            </p>
            <div className="principle-tags">
              <span>Без лекарств</span>
              <span>Неинвазивно</span>
              <span>Индивидуально</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section concerns-section" id="help">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">С чем обращаются</p>
              <h2>Когда тело просит<br />внимания</h2>
            </div>
            <p>
              Ниже перечислены состояния, с которыми люди обращались к
              специалистам метода. Любые симптомы требуют внимательного отношения
              и, при необходимости, медицинской диагностики.
            </p>
          </div>
          <div className="concern-grid">
            {concerns.map((item, index) => (
              <article className="concern-card" key={item.title}>
                <span className="concern-index">0{index + 1}</span>
                <span className="concern-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="shell">
          <div className="section-heading centered">
            <p className="eyebrow">Как проходит сеанс</p>
            <h2>Спокойно. Последовательно.<br />С вниманием к вам.</h2>
          </div>
          <div className="process-list">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <span className="step-dot" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="course-note">
            <div>
              <span>20–60</span>
              <small>минут длится сеанс</small>
            </div>
            <div>
              <span>5–15</span>
              <small>сеансов в описании курса</small>
            </div>
            <div>
              <span>1–3</span>
              <small>дня между сеансами</small>
            </div>
            <p>
              Параметры приведены по описанию патента. Формат курса,
              продолжительность и допустимость метода определяются индивидуально.
            </p>
          </div>
        </div>
      </section>

      <section className="section author-section">
        <div className="shell author-grid">
          <div className="author-portrait">
            <img
              className="author-photo"
              src="ruslan-zhukovets.webp"
              alt="Руслан Жуковец"
              loading="lazy"
            />
            <span className="author-caption">Автор метода</span>
          </div>
          <div className="author-copy">
            <p className="eyebrow">Автор метода</p>
            <h2>Руслан Жуковец</h2>
            <p className="large-copy">
              Врач, длительное время занимавшийся психотерапией. Автор более
              двадцати книг о психологии и духовном развитии.
            </p>
            <p>
              Метод телесно-ориентированной терапии был открыт в 1998 году.
              В 2010 году способ получил патент Российской Федерации № 2395308.
            </p>
            <blockquote>
              «Через свободу тела от привычных блоков появляется возможность
              свободнее отвечать на происходящее — без автоматической реакции».
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="reviews">
        <div className="shell testimonial-wrap">
          <div className="testimonial-head">
            <div>
              <p className="eyebrow">Опыт людей</p>
              <h2>Отзывы о курсе</h2>
            </div>
            <div className="slider-controls">
              <button
                type="button"
                onClick={() => setTestimonial((value) => (value - 1 + testimonials.length) % testimonials.length)}
                aria-label="Предыдущий отзыв"
              >
                ←
              </button>
              <span>{String(testimonial + 1).padStart(2, "0")} / 0{testimonials.length}</span>
              <button
                type="button"
                onClick={() => setTestimonial((value) => (value + 1) % testimonials.length)}
                aria-label="Следующий отзыв"
              >
                →
              </button>
            </div>
          </div>
          <div className="testimonial-card" aria-live="polite">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{testimonials[testimonial].quote}</blockquote>
            <div>
              <strong>{testimonials[testimonial].name}</strong>
              <span>{testimonials[testimonial].detail}</span>
            </div>
          </div>
          <p className="review-note">
            Индивидуальный опыт не гарантирует такой же результат у другого человека.
          </p>
        </div>
      </section>

      <section className="section specialists-section" id="specialists">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">Сертифицированные специалисты</p>
              <h2>Найдите специалиста<br />в своём городе</h2>
            </div>
            <p>
              Контакты выпускников авторского курса. Перед записью уточните
              актуальность адреса, стоимость и формат первой встречи.
            </p>
          </div>

          <div className="registry-banner">
            <div className="registry-badge" aria-hidden="true">
              <span>50</span>
              <small>специалистов</small>
            </div>
            <div>
              <span className="registry-kicker">Авторский курс</span>
              <h3>Специалисты, прошедшие обучение по методу</h3>
              <p>
                Откройте полный реестр имён и номеров выданных сертификатов.
              </p>
            </div>
            <button
              type="button"
              onClick={() => registryDialog.current?.showModal()}
            >
              Сертифицированные специалисты <span aria-hidden="true">↗</span>
            </button>
          </div>

          <div className="city-tabs" role="group" aria-label="Фильтр по городу">
            {cities.map((item) => (
              <button
                type="button"
                key={item}
                className={city === item ? "is-active" : ""}
                onClick={() => setCity(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="specialist-list">
            {visibleSpecialists.map((item, index) => (
              <article className="specialist-row" key={`${item.city}-${item.name}`}>
                <span className="specialist-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="specialist-name">
                  <h3>{item.name}</h3>
                  <span>Сертифицированный специалист</span>
                </div>
                <div className="specialist-place">
                  <span>{item.city}</span>
                  <small>{item.place}</small>
                </div>
                <a href={phoneHref(item.phone)} aria-label={`Позвонить: ${item.name}`}>
                  {item.phone} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <dialog
        className="registry-dialog"
        ref={registryDialog}
        aria-labelledby="registry-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="registry-modal">
          <div className="registry-modal-head">
            <div>
              <p className="eyebrow">Официальный реестр</p>
              <h2 id="registry-title">Сертифицированные специалисты</h2>
              <p>
                Специалисты, прошедшие авторский курс обучения
                по телесно-ориентированной терапии.
              </p>
            </div>
            <button
              className="registry-close"
              type="button"
              onClick={() => registryDialog.current?.close()}
              aria-label="Закрыть список"
            >
              ×
            </button>
          </div>
          <div className="registry-list">
            {certifiedSpecialists.map((specialist, index) => (
              <div className="registry-person" key={specialist.certificate}>
                <span className="registry-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{specialist.name}</strong>
                <span className="certificate-number">
                  сертификат {specialist.certificate}
                </span>
              </div>
            ))}
          </div>
          <div className="registry-modal-foot">
            <span>Всего в реестре: {certifiedSpecialists.length}</span>
            <button type="button" onClick={() => registryDialog.current?.close()}>
              Закрыть
            </button>
          </div>
        </div>
      </dialog>

      <section className="section faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="section-heading">
            <p className="eyebrow">Вопросы и ответы</p>
            <h2>Важно знать<br />до первого сеанса</h2>
            <p>
              Не нашли ответ? Напишите координатору — вам помогут сориентироваться.
            </p>
            <a className="inline-link" href="mailto:innaksanti@mail.ru">
              Задать вопрос <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary>
                  <span>{item.q}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-content">
          <p className="eyebrow">Следующий шаг</p>
          <h2>Начните с короткого разговора</h2>
          <p>
            Координатор ответит на вопросы об обучении методу и поможет найти
            подходящего сертифицированного специалиста.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href="tel:+79175371882">
              +7 (917) 537-18-82 <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-mail" href="mailto:innaksanti@mail.ru">
              innaksanti@mail.ru
            </a>
          </div>
          <span className="contact-person">Инна · координатор обучения</span>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">Ж</span>
            <span>
              <strong>Метод Жуковца</strong>
              <small>Телесно-ориентированная терапия</small>
            </span>
          </a>
          <div className="footer-nav">
            <a href="#method">О методе</a>
            <a href="#process">Как проходит</a>
            <a href="#specialists">Специалисты</a>
            <a href="#faq">Вопросы</a>
          </div>
          <div className="footer-legal">
            <p>
              Информация на сайте носит ознакомительный характер и не является
              медицинской рекомендацией. При ухудшении самочувствия обратитесь к врачу.
            </p>
            <span>© Руслан Жуковец, 2017–2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
