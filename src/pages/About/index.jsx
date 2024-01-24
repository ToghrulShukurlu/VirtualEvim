import React from 'react'
import './style.scss'
import img from '../../assets/img/vrtur.jpeg'

const About = () => {
  return (
    <div className="about">
      <div className="virtual-evim">
        <div className="logo-container">
            <img src={img} alt="" className="logo" />
        </div>
        <h1>Haqqımızda: VirtualEvim.com</h1>
        <p>
          VirtualEvim.com, digər bütün əmlak təcrübələrini üstələyən, maraqli və
          interaktiv bir yanaşma ilə müştərilərin əmlak dünyasına maraqlı bir
          səyahət təklif edən bir online platformadır. Biz, 360 dərəcəli virtual
          turların və interaktiv xüsusiyyətlərinin əmlak təcrübəsini
          zənginləşdirdiyini bilərək, müştərilərimizə evlərini tapmağa və
          satmağa kömək etmək üçün bu texnologiyalardan istifadə edirik.
        </p>

        <h2>Kimik?</h2>
        <p>
          VirtualEvim.com, təcrübəli və sənaye lideri əmlak agentlərindən təşkil
          olunmuş bir komanda tərəfindən yaradılmışdır. Bizim missiyamız,
          müştərilərimizin əmlak təcrübəsini daha maraqli, dəqiq və effektiv
          etməkdir. VirtualEvim.com olaraq, əmlak bazarında fəaliyyət
          göstərənlər üçün ən əhəmiyyətli və müstəqil bir təcrübə təklif etmək
          üçün 360 dərəcəli virtual turların və interaktiv xüsusiyyətlərin
          əhəmiyyətini vurğulayırıq.
        </p>

        <h2>Missiya və Güclü Tərəflərimiz:</h2>
        <ul>
          <li>Müştərilərimiz üçün maraqli və interaktiv əmlak təcrüməsi.</li>
          <li>
            360 dərəcəli virtual turlar və detallı məlumatlarla
            zənginləşdirilmiş əmlak təcrübəsi.
          </li>
          <li>Mobil uyğun və intuativ dizayn.</li>
          <li>
            Əmlak bazarında müstəqil və müvafiq qərarlar verməyə kömək üçün
            profesiyanal mütəxəssislər tərəfindən təşkil olunan komanda.
          </li>
        </ul>

        <h2>Niyə Biz?</h2>
        <p>
          VirtualEvim.com, müştərilərimizin əmlak bazarında çox xüsusi və
          maraqli təcrübələr yaşamağını təmin etmək üçün burada. Bizimlə
          birlikdə, VirtualEvim.com-a xoş gəlmisiniz – Görməyiniz yerləri görmək
          üçün ən yaxşı yerlərdən biri!
        </p>
      </div>
    </div>
  );
}

export default About