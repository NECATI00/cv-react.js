import './App.css';
import profilePhoto from './assets/imresizer-1736182969953.jpg';
import uniPhoto from './assets/as.jpg';
import twitterPhoto from './assets/download.png';
import instagramPhoto from './assets/download.jpg';
function App() {
  const personalInfo = {
    name: 'Necati',
    surname: 'Coşkun',
    contact: 'necaticoskun000@gmail.com',
    profilePhoto: profilePhoto,};
  const education = [{ university: 'Kapadokya Üniversitesi', department: 'Bilgisayar Programcılığı', graduationYear: 2025 },];
  const experience = [{ company: 'Twitter', position: 'IT', duration: '2 Yıl', description: ' bilgisayar ağlarını, fiziksel donanımları, yazılımları, sistemleri, sesli ve görüntülü iletişim araçlarını yönetimi ' },];
  const skills = ['JavaScript', 'React.js', 'CSS', 'HTML', 'Node.js', 'yapay zeka', 'robotik kodlama'];
  const hobbies = ['Kodlama', 'Seyahat', 'Yüzme'];
  const socialMediaLinks = {
    university: 'https://kapadokya.edu.tr/',
    twitter: 'https://x.com/Necati_coskun_',
    instagram: 'https://instagram.com/necati_exe',};
  return (
    <div className="cv-container">
      {/* Kişisel Bilgiler */}
      <div className="personal-info">
        <h2>Kişisel Bilgiler</h2>
        <img src={personalInfo.profilePhoto} alt="Profil Fotoğrafı" style={{ borderRadius: '50%', width: '100px' }} />
        <p>Ad: {personalInfo.name}</p>
        <p>Soyad: {personalInfo.surname}</p>
        <p>İletişim: {personalInfo.contact}</p>
      </div>
      {/* Eğitim Bilgileri */}
      <div className="education">
        <h2>Eğitim Bilgileri</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <p>Üniversite: {edu.university}</p>
            <p>Bölüm: {edu.department}</p>
            <p>Mezuniyet Yılı: {edu.graduationYear}</p>
          </div>
        ))}
      </div>
      {/* İş Deneyimi */}
      <div className="experience">
        <h2>İş Deneyimi</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>Şirket: {exp.company}</p>
            <p>Pozisyon: {exp.position}</p>
            <p>Çalışma Süresi: {exp.duration}</p>
            <p>Açıklama: {exp.description}</p>
          </div>
        ))}
      </div>
      {/* Yetenekler */}
      <div className="skills">
        <h2>Yetenekler</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      {/* Hobiler ve İlgi Alanları */}
      <div className="hobbies">
        <h2>Hobiler ve İlgi Alanları</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
      {/* Sosyal Medya */}
      <div className="social-media">
        <h2>Sosyal Medya</h2>
        <a href={socialMediaLinks.university} target="_blank" rel="noopener noreferrer">
          <img src={uniPhoto} alt="Üniversite" style={{ width: '50px', margin: '10px' }} />
        </a>
        <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
          <img src={twitterPhoto} alt="Twitter" style={{ width: '50px', margin: '10px' }} />
        </a>
        <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
          <img src={instagramPhoto} alt="Instagram" style={{ width: '50px', margin: '10px' }} />
        </a>
      </div>
    </div>
  );
}
export default App;