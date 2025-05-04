// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: '',
      title: '还没有工作',
      logo: 'college',
      start: 'none',
      end: 'none'
    },
    /*
    {
      company: 'Bigo Live',
      title: 'US Operations',
      logo: 'coffee',
      start: '2018',
      end: '2020'
    },
    {
      company: 'Sinovation Ventures',
      title: 'Investment Analyst',
      logo: 'bank',
      start: '2017',
      end: '2018'
    },
    {
      company: 'Expedia',
      title: 'Software Engineer',
      logo: 'coffee',
      start: '2015',
      end: '2017'
    }
      */
  ]