const categoryData = [
  {
    title: 'Biology - Mathematics',
    image: 'https://biologyresearchtopics.com/wp-content/uploads/sites/826/2021/10/item9-math.png',
    link: 'biology-math',
    categorydetails: [
      {
        year: '2021',
        subcategories: ['Sub1', 'Sub2'],
        files: [
          { id: 1, name: 'File1', downloadLink: '/path/to/file1' },
          { id: 2, name: 'File2', downloadLink: '/path/to/file2' },
        ],
      },
      {
        year: '2022',
        subcategories: ['Sub3', 'Sub4'],
        files: [
          { id: 3, name: 'File3', downloadLink: '/path/to/file3' },
          { id: 4, name: 'File4', downloadLink: '/path/to/file4' },
        ],
      },
    ],
  },
  {
    title: 'Computer - Mathematics',
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190731155550/Importance-of-Mathematics-in-Computer-Science.png',
    link: 'computer-math',
    categorydetails: [
      {
        year: '2021',
        subcategories: ['Sub1', 'Sub2'],
        files: [
          { id: 1, name: 'File1', downloadLink: '/path/to/file1' },
          { id: 2, name: 'File2', downloadLink: '/path/to/file2' },
        ],
      },
      {
        year: '2022',
        subcategories: ['Sub3', 'Sub4'],
        files: [
          { id: 3, name: 'File3', downloadLink: '/path/to/file3' },
          { id: 4, name: 'File4', downloadLink: '/path/to/file4' },
        ],
      },
    ],
  },
  {
    title: 'Science',
    image: 'https://i.pinimg.com/originals/5c/b4/8c/5cb48cea9219f94fbbb6a77009d0b56a.png',
    link: 'science',
    categorydetails: [
      {
        year: '2021',
        subcategories: ['Sub1', 'Sub2'],
        files: [
          { id: 1, name: 'File1', downloadLink: '/path/to/file1' },
          { id: 2, name: 'File2', downloadLink: '/path/to/file2' },
        ],
      },
      {
        year: '2022',
        subcategories: ['Sub3', 'Sub4'],
        files: [
          { id: 3, name: 'File3', downloadLink: '/path/to/file3' },
          { id: 4, name: 'File4', downloadLink: '/path/to/file4' },
        ],
      },
    ],
  },
  {
    title: 'Commerce',
    image: 'https://png.pngtree.com/png-clipart/20230111/original/pngtree-e-commerce-marketplace-illustration-png-image_8902721.png',
    link: 'commerce',
    categorydetails: [
      {
        year: '2021',
        subcategories: ['Sub1', 'Sub2'],
        files: [
          { id: 1, name: 'File1', downloadLink: '/path/to/file1' },
          { id: 2, name: 'File2', downloadLink: '/path/to/file2' },
        ],
      },
      {
        year: '2022',
        subcategories: ['Sub3', 'Sub4'],
        files: [
          { id: 3, name: 'File3', downloadLink: '/path/to/file3' },
          { id: 4, name: 'File4', downloadLink: '/path/to/file4' },
        ],
      },
    ],
  },
  {
    title: 'Vocational',
    image: 'https://cdni.iconscout.com/illustration/premium/thumb/vocational-specialists-graduating-7996366-6456476.png?f=webp',
    link: 'vocational',
    categorydetails: [
      {
        year: '2021',
        subcategories: ['Sub1', 'Sub2'],
        files: [
          { id: 1, name: 'File1', downloadLink: '/path/to/file1' },
          { id: 2, name: 'File2', downloadLink: '/path/to/file2' },
        ],
      },
      {
        year: '2022',
        subcategories: ['Sub3', 'Sub4'],
        files: [
          { id: 3, name: 'File3', downloadLink: '/path/to/file3' },
          { id: 4, name: 'File4', downloadLink: '/path/to/file4' },
        ],
      },
    ],
  },
  {
    title: 'All Groups',
    image: 'https://cdni.iconscout.com/illustration/premium/thumb/group-of-students-doing-online-education-learning-together-and-sit-on-big-books-composition-5263490-4397234.png',
    link: 'all-groups',
    categorydetails: [
      {
        year: '2021',
        subcategories: ['Sub1', 'Sub2'],
        files: [
          { id: 1, name: 'File1', downloadLink: '/path/to/file1' },
          { id: 2, name: 'File2', downloadLink: '/path/to/file2' },
        ],
      },
      {
        year: '2022',
        subcategories: ['Sub3', 'Sub4'],
        files: [
          { id: 3, name: 'File3', downloadLink: '/path/to/file3' },
          { id: 4, name: 'File4', downloadLink: '/path/to/file4' },
        ],
      },
    ],
  },
];

const categoryDetailsPage = [
  {
    year: '2018',
    subcategories: ['Technology', 'Health'],
    files: [
      { id: 1, name: 'TechTrends2018.pdf', downloadLink: '/downloads/TechTrends2018.pdf' },
      { id: 2, name: 'HealthReport2018.pdf', downloadLink: '/downloads/HealthReport2018.pdf' },
    ],
  },
  {
    year: '2019',
    subcategories: ['Finance', 'Education'],
    files: [
      { id: 3, name: 'FinancialAnalysis2019.pdf', downloadLink: '/downloads/FinancialAnalysis2019.pdf' },
      { id: 4, name: 'EducationStats2019.pdf', downloadLink: '/downloads/EducationStats2019.pdf' },
    ],
  },
  {
    year: '2020',
    subcategories: ['Environment', 'Travel'],
    files: [
      { id: 5, name: 'ClimateChange2020.pdf', downloadLink: '/downloads/ClimateChange2020.pdf' },
      { id: 6, name: 'TravelGuide2020.pdf', downloadLink: '/downloads/TravelGuide2020.pdf' },
    ],
  },
  {
    year: '2021',
    subcategories: ['Science', 'Art'],
    files: [
      { id: 7, name: 'ScientificDiscoveries2021.pdf', downloadLink: '/downloads/ScientificDiscoveries2021.pdf' },
      { id: 8, name: 'ArtExhibitions2021.pdf', downloadLink: '/downloads/ArtExhibitions2021.pdf' },
    ],
  },
  {
    year: '2022',
    subcategories: ['Sports', 'Politics'],
    files: [
      { id: 9, name: 'SportsHighlights2022.pdf', downloadLink: '/downloads/SportsHighlights2022.pdf' },
      { id: 10, name: 'PoliticalEvents2022.pdf', downloadLink: '/downloads/PoliticalEvents2022.pdf' },
    ],
  },
  {
    year: '2024',
    subcategories: ['Technology', 'Health'],
    files: [
      { id: 11, name: 'TechInnovations2024.pdf', downloadLink: '/downloads/TechInnovations2024.pdf' },
      { id: 12, name: 'HealthSurvey2024.pdf', downloadLink: '/downloads/HealthSurvey2024.pdf' },
    ],
  },
]

export default categoryData;
export {
  categoryDetailsPage
}
