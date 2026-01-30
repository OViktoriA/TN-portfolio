import foto from '../assets/5460779406667676395.jpg'

export default function Resume() {
  return (
    <main className="resume-page">
      <section className="resume-card">

        <div className="resume-header">
          <img src={foto} alt="Фото" className="resume-photo" />
          <div>
            <h1>Остапенко Виктория Алексеевна</h1>
            <p className="resume-subtitle">Фотограф · Дизайнер · Ретушер · Видеомонтажёр</p>
          </div>
        </div>

        <div className="resume-block">
          <h2>Обо мне</h2>
          <p>
            Женщина, 23 года (родилась 3 декабря 2002).  
            Создаю визуальные решения, объединяя фотографию, дизайн и авторское творчество. 
            Люблю придумывать новое, экспериментировать с идеями и превращать их в выразительные образы. 
            В работе ценю разнообразие задач и возможность постоянно учиться. Отличаюсь внимательностью, 
            развитым чувством композиции, креативностью и высокой обучаемостью. Сочетаю спокойный профессиональный 
            подход с ярким творческим мышлением, что помогает мне создавать продуманные и эстетичные проекты.
          </p>
        </div>

        <div className="resume-block">
          <h2>Навыки</h2>

          <ul className="skills-list">
            <li><strong>Средний уровень:</strong> Adobe Photoshop, Adobe After Effects</li>
            <li><strong>Базовый уровень:</strong> Adobe InDesign, CorelDRAW, C#, создание сайтов</li>
            <li><strong>Дополнительно:</strong> 3ds Max, Unity, Visual Studio, фотография, видеомонтаж</li>
            <li><strong>Интересы:</strong> фотография, визуальные истории, дизайн интерфейсов, разработка компьютерных игр</li>
          </ul>
        </div>

        <div className="resume-block">
          <h2>Опыт работы</h2>
          <p>Пока без опыта работы</p>
        </div>

        <div className="resume-block">
          <h2>Образование</h2>
          <p>
            <strong>Сибирский государственный университет телекоммуникаций и информатики (СибГУТИ)</strong>, Новосибирск  
            <br />2025 — Информационные технологии в медиаиндустрии (инженер)
          </p>
        </div>

        <div className="resume-block">
          <h2>Контакты</h2>
          <p>
            <strong>Телефон:</strong> +7 (913) 719‑93‑53<br />
            <strong>Telegram:</strong> @Vik1tori3a — предпочитаемый способ связи<br />
            <strong>Email:</strong> vikaost02@gmail.com
          </p>
        </div>

      </section>
    </main>
  );
}
