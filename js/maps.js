function initMap() {
    const uluru = { lat: 52.50320333687256, lng: -6.572661457028095 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
  
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice"></div>' +
      '<h1 id="firstHeading" class="firstHeading">Software City</h1>' +
      '<div id="bodyContent">' +
      '<p><b>Software City</b> is a dedicated provider of digital solutions. We specialize in creating innovative websites, web applications, digital menus, and effective digital advertising campaigns.</p>' +
      '<p>Our team is passionate about delivering high-quality products that meet the unique needs of our clients. Whether you need a dynamic website, a user-friendly web app, captivating digital menus, or impactful digital advertising, we have the expertise to bring your vision to life.</p>' +
      '<p>Discover the power of digital with Software City. Contact us today to elevate your online presence and engage your audience effectively.</p>' +
      '<p>Visit us at <a href="https://www.facebook.com/city.softeware/">Software City</a> to learn more.</p>' +
      '</div>' +
      '</div>';
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Your Company Information",
    });
  
    const marker = new google.maps.Marker({
      position: uluru,
      map,
      title: "Your Company Location",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  }
  
  window.initMap = initMap;
  