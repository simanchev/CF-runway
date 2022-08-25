module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Fin_data', [{
      fin_types_id: 1,
      project_id: 1,
      title: 'Косметика - опт',
      sum: 150000,
      start_date: '2022-09',
      end_date: '2023-07',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 1,
      project_id: 1,
      title: 'Косметика - розница',
      sum: 250000,
      start_date: '2022-11',
      end_date: '2023-07',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 1,
      project_id: 1,
      title: 'Одежда - опт',
      sum: 200000,
      start_date: '2023-02',
      end_date: '2023-07',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'COGS - Косметика - опт',
      sum: 80000,
      start_date: '2022-09',
      end_date: '2023-07',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'COGS - Косметика - розница',
      sum: 110000,
      start_date: '2022-11',
      end_date: '2023-08',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'COGS - Одежда - опт',
      sum: 105000,
      start_date: '2023-02',
      end_date: '2023-05',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'Аренда',
      sum: 50000,
      start_date: '2022-08',
      end_date: '2023-07',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'Логистические расходы',
      sum: 90000,
      start_date: '2022-09',
      end_date: '',
      regular: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'Логистические расходы',
      sum: 90000,
      start_date: '2023-01',
      end_date: '',
      regular: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'Зарплата',
      sum: 70000,
      start_date: '2022-08',
      end_date: '',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'Процентные платежи',
      sum: 8000,
      start_date: '2022-11',
      end_date: '2023-07',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 2,
      project_id: 1,
      title: 'Прочее',
      sum: 20000,
      start_date: '2022-08',
      end_date: '2023-07',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 3,
      project_id: 1,
      title: 'Оборудование',
      sum: 850000,
      start_date: '2023-04',
      end_date: '',
      regular: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 3,
      project_id: 1,
      title: 'Прочее',
      sum: 450000,
      start_date: '2023-02',
      end_date: '',
      regular: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 4,
      project_id: 1,
      title: 'Собственные средства',
      sum: 400000,
      start_date: '2022-08',
      end_date: '',
      regular: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 4,
      project_id: 1,
      title: 'Банковский кредит',
      sum: 500000,
      start_date: '2022-11',
      end_date: '',
      regular: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Fin_data', null, {});
  },
};
