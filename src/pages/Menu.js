import './Menu.css';
import leftImage from '../assets/beef.jpg';
import rightImage from '../assets/chicken.jpg';
import headerImage from '../assets/malek.jpg';


const menuData = [
  {
    category: "سندويشات",
    items: [
      { name: "طاووق", price: "300,000L.L" },
      { name: "كباب", price: "300,000L.L" },
      { name: "سجق", price: "300,000L.L" },
      { name: "مقانق", price: "300,000L.L" },
      { name: "شقف", price: "350,000L.L" },
      { name: "كباب دجاج", price: "300,000L.L" },
      { name: "دجاج", price: "300,000L.L" }
    ]
  },
  {
    category: "مشاوي",
    items: [
      { name: "كيلو شقف", price: "1,700,000L.L" },
      { name: "كيلو طاووق", price: "1,200,000L.L" },
      { name: "كيلو مشكل", price: "1,500,000L.L" }
    ]
  },
  {
    category: "فروج",
    items: [
      { name: "نصف فروج عالفحم", price: "550,000L.L" },
      { name: "فروج عالفحم", price: "1,000,000L.L" }
    ]
  },
  {
    category: "بطاطا",
    items: [
      { name: "ساندويش بطاط", price: "200,000L.L" },
      { name: "صحن بطاط صغير", price: "150,000L.L" },
      { name: "صحن بطاطا كبير", price: "300,000L.L" }
    ]
  },
  {
    category: "مقبلات",
    items: [
      { name: "حمص", price: "150,000L.L" },
      { name: "سلطة", price: "250,000L.L" },
      { name: "متبل باذنجان", price: "150,000L.L" }
    ]
  },
  {
    category: "مشروبات",
    items: [
      { name: "مرطبات", price: "80,000L.L" },
      { name: "مياه", price: "30,000L.L" }
    ]
  },
  {
    category: "صوص",
    items: [
      { name: "علبة ثوم او صوص صغير", price: "40,000L.L" },
      { name: "علبة ثوم او صوص كبير", price: "100,000L.L" }
    ]
  }
];

export default function Menu() {
    return (
      <div className="menu-container">
        {/* Left Image - Food Focus */}
        <div className="menu-side-image left">
          <img 
            src={leftImage} 
            alt="Authentic Lebanese cuisine" 
            loading="lazy"
          />
          <div className="image-overlay"></div>
        </div>
  
        {/* Main Menu */}
        <div className="menu-page">
          {/* Replace h2 with image */}
          <div className="menu-header-image">
            <img
              src={headerImage}
              alt="Farouj Malek Menu"
              loading="lazy"
            />
          </div>
          
          {menuData.map((section, index) => (
            <div key={index} className="menu-section">
              <h2 className="section-title">{section.category}</h2>
              <div className="section-items">
                {section.items.map((item, i) => (
                  <div key={i} className="menu-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        {/* Right Image - Ambiance */}
        <div className="menu-side-image right">
          <img 
            src={rightImage} 
            alt="Farouj Malek restaurant" 
            loading="lazy"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    );
}

const footerStyle = {
  backgroundColor: '#222',
  color: '#eee',
  textAlign: 'center',
  padding: '15px 10px',
  fontSize: '14px',
  fontFamily: 'Arial, sans-serif',
  position: 'relative', // if you want fixed footer you can change this
  bottom: 0,
  width: '100%'
};


