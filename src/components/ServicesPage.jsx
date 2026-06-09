import React, { useState, useMemo } from 'react';

// 1. Исходный массив объектов (минимум 5-6 услуг)
const INITIAL_SERVICES = [
  {
    id: 1,
    title: 'Веб-разработка под ключ',
    category: 'development',
    description: 'Создание современных сайтов и веб-приложений любой сложности.'
  },
  {
    id: 2,
    title: 'Дизайн мобильных интерфейсов',
    category: 'design',
    description: 'Разработка UX/UI дизайна для приложений на iOS и Android.'
  },
  {
    id: '3',
    title: 'Контекстная реклама в сети',
    category: 'marketing',
    description: 'Настройка и ведение рекламных кампаний для быстрого привлечения клиентов.'
  },
  {
    id: 4,
    title: 'Разработка корпоративного портала',
    category: 'development',
    description: 'Внутренние web-системы автоматизации бизнес-процессов компании.'
  },
  {
    id: 5,
    title: 'Графический дизайн и брендинг',
    category: 'design',
    description: 'Создание логотипов, фирменного стиля и брендбуков.'
  },
  {
    id: 6,
    title: 'SEO оптимизация и продвижение',
    category: 'marketing',
    description: 'Вывод сайтов в топ поисковых систем по целевым web-запросам.'
  }
];

function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');


  const filteredServices = useMemo(() => {
    return INITIAL_SERVICES.filter((service) => {

      const matchesSearch = service.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h1>Список услуг</h1>


      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>

        <input
          type="text"
          placeholder="Поиск по названию..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', flex: 1, fontSize: '16px' }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '8px', fontSize: '16px', cursor: 'pointer' }}
        >
          <option value="all">Все категории</option>
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>

      <div>
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '6px',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h3 style={{ margin: '0 0 8px 0' }}>{service.title}</h3>
              <span
                style={{
                  fontSize: '12px',
                  backgroundColor: '#e0e0e0',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}
              >
                {service.category}
              </span>
              <p style={{ margin: '10px 0 0 0', color: '#555' }}>
                {service.description}
              </p>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', color: '#777', marginTop: '30px' }}>
            <p>По вашему запросу ничего не найдено.</p>
            <p style={{ fontSize: '14px' }}>Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default ServicesPage;