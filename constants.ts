
import { PanoramicImage, NavItem } from './types';

// Import local assets
import p1 from './assets/portfolio-1.jpg';
import p2 from './assets/portfolio-2.jpg';
import p3 from './assets/portfolio-3.jpg';
import p4 from './assets/portfolio-4.jpg';
import p5 from './assets/portfolio-5.jpg';
import p6 from './assets/portfolio-6.jpg';
import p7 from './assets/portfolio-7.jpg';
import p8 from './assets/portfolio-8.jpg';
import p9 from './assets/portfolio-9.jpg';
import p10 from './assets/portfolio-10.jpg';
import p11 from './assets/portfolio-11.jpg';
import p12 from './assets/portfolio-12.jpg';
import p13 from './assets/portfolio-13.jpg';
import logo from './assets/shuutzlg.svg';

export const ASSETS = {
  LOGO: logo,
};

export const COLORS = {
  WHITE: '#FDFCF7', // Off-white/Cream from brand kit
  BLACK: '#0B1222', // Deep Navy/Black from brand kit
  SUBTLE: '#94A3B8', // Muted blue-grey
  ACCENT: '#E7E5E4', // Logo cream color
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export const CONTACT_INFO = {
  NAME: 'Shuutz',
  OWNER: 'Anthony Cabrera',
  PHONE: '+1 (914) 354-1544',
  INSTAGRAM: '@shuuztzstudio',
  LOCATION: 'Croton on Hudson, NY'
};

export interface WorkItem extends PanoramicImage {
  category: string;
  year: string;
}

export const PORTFOLIO_WORKS: WorkItem[] = [
  {
    id: 'work-01',
    url: p1,
    title: 'BMW M2 Profile',
    location: 'Croton on Hudson, NY',
    specs: 'Canon EOS',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-02',
    url: p2,
    title: 'Badge Detail',
    location: 'Croton on Hudson, NY',
    specs: 'Macro Lens',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-03',
    url: p3,
    title: 'Audi on Bridge',
    location: 'Croton on Hudson, NY',
    specs: 'Wide Angle',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-04',
    url: p4,
    title: 'Black BMW in Snow',
    location: 'Croton on Hudson, NY',
    specs: 'Standard Prime',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-05',
    url: p5,
    title: 'Night Rear Profile',
    location: 'Croton on Hudson, NY',
    specs: 'Natural Light',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-06',
    url: p6,
    title: 'Exhaust & Vapor',
    location: 'Croton on Hudson, NY',
    specs: 'Close Up',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-07',
    url: p7,
    title: 'Bridge Structure',
    location: 'Croton on Hudson, NY',
    specs: 'Steel Geometry',
    category: 'Architecture',
    year: '2025'
  },
  {
    id: 'work-08',
    url: p8,
    title: 'Porsche LED Matrix',
    location: 'Croton on Hudson, NY',
    specs: 'Detail Shot',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-09',
    url: p9,
    title: 'Audi Front Profile',
    location: 'Croton on Hudson, NY',
    specs: 'Low Light',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-10',
    url: p10,
    title: 'Field Textures',
    location: 'Croton on Hudson, NY',
    specs: 'Macro',
    category: 'Nature',
    year: '2025'
  },
  {
    id: 'work-11',
    url: p11,
    title: 'BMW Steering Wheel',
    location: 'Croton on Hudson, NY',
    specs: 'Interior',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-12',
    url: p12,
    title: 'BMW Side Profile',
    location: 'Croton on Hudson, NY',
    specs: 'Outdoor',
    category: 'Automotive',
    year: '2025'
  },
  {
    id: 'work-13',
    url: p13,
    title: 'The Moon',
    location: 'Croton on Hudson, NY',
    specs: 'Telephoto',
    category: 'Night Sky',
    year: '2025'
  }
];
