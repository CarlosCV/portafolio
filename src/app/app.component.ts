import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  targetHeight: number
  shrinkHeader: number = 220;
  @ViewChild('target', { static: false }) elementView: ElementRef;
  constructor() {

  }
  ArraySkills = [
    {
      lenguaje: "JavaScript ES6 +",
      porcentaje: "90%",
      color: "#F7E018"
    },
    {
      lenguaje: "Angular (7,8)",
      porcentaje: "90%",
      color: "#F16161"
    },
    {
      lenguaje: "Bootstrap (3,4)",
      porcentaje: "90%",
      color: "#810FF4"
    },
    {
      lenguaje: "HTML 5 + Css 3",
      porcentaje: "90%",
      color: "#249AD9"
    },
    {
      lenguaje: "Node Js",
      porcentaje: "80%",
      color: "#088A85"
    },
    {
      lenguaje: "Ionic 5",
      porcentaje: "80%",
      color: "#3679F6"
    },
    {
      lenguaje: "Jquery",
      porcentaje: "80%",
      color: "#162B43"
    },
    {
      lenguaje: "SQL Server",
      porcentaje: "80%",
      color: "#DD2F29"
    },
    {
      lenguaje: "Git",
      porcentaje: "80%",
      color: "#E84D31"
    },
    {
      lenguaje: "C#",
      porcentaje: "70%",
      color: "#9669CF"
    },
    {
      lenguaje: "MySQL",
      porcentaje: "70%",
      color: "#005983"
    },
    {
      lenguaje: "Heroku",
      porcentaje: "70%",
      color: "#453B82"
    },
    {
      lenguaje: "Java",
      porcentaje: "50%",
      color: "#0E86C2"
    },
    {
      lenguaje: "React Js",
      porcentaje: "30%",
      color: "#48CEF7"
    },
    {
      lenguaje: "Vue Js",
      porcentaje: "20%",
      color: "#3FB27F"
    }

  ]

  ngOnInit() {
    this.UpAndDown(false)
  }
  getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  SendEmail() {
    window.open('mailto:cruzvenegasc@gmail.com?body=Hola Carlos ');
  }

  UpAndDown(mobileStatus) {
    if (mobileStatus =="up") {
      document.getElementById("header").classList.add("shrink")
      document.getElementById("imagen-me").classList.add("m-circle")
      document.getElementById("up").style.display = "none"
      document.getElementById("down").style.display = "grid"
    }else if (mobileStatus == "down"){
      document.getElementById("header").classList.remove("shrink")
      document.getElementById("imagen-me").classList.remove("m-circle")
      document.getElementById("up").style.display = "grid"
      document.getElementById("down").style.display = "none"
    } else {
      this.UpAndDownDefault(this.shrinkHeader);
    }

  }
  UpAndDownDefault(shrinkHeader) {
    var width = 0;
    setTimeout(() => {
      this.targetHeight = this.elementView.nativeElement.offsetHeight;
      width = this.elementView.nativeElement.offsetWidth;
    }, 1000 / 60);
    window.onscroll = () => {
      var scroll = this.getCurrentScroll();
      if (scroll >= shrinkHeader) {
        document.getElementById("header").classList.add("shrink")
        /* document.getElementById("m-context").style.marginTop="550px" */
        document.getElementById("imagen-me").classList.add("m-circle")
        document.getElementById("m-content-sms").style.marginTop = "18px"
        document.getElementById("m-grid").classList.remove("lg-grid-3")
        document.getElementById("m-grid").classList.add("lg-grid-4")
        document.getElementById("m-content-img").classList.remove("s-cross-center")
        document.getElementById("m-banner-social").style.display = "none"
        document.getElementById("m-tabsid").classList.remove("lg-cols-2")
        document.getElementById("m-tabsid").classList.remove("m-order-2")
        document.getElementById("m-tabsid").classList.remove("lg-order-2")
        document.getElementById("m-tabsid").classList.add("m-order-3")
        document.getElementById("m-tabsid").classList.add("lg-order-3")
        document.getElementById("m-tabsid").style.marginTop = "0px"
        document.getElementById("m-info-personal").classList.remove("m-order-3")
        document.getElementById("m-info-personal").classList.remove("lg-order-3")
        document.getElementById("m-info-personal").classList.add("m-order-2")
        document.getElementById("m-info-personal").classList.add("lg-order-2")
        if (width <= 768) {
          document.getElementById("up").style.display = "none"
          document.getElementById("down").style.display = "grid"
        }

      }
      else {
        document.getElementById("header").classList.remove("shrink")
        document.getElementById("imagen-me").classList.remove("m-circle")
        document.getElementById("m-content-sms").style.marginTop = "42px"
        document.getElementById("m-grid").classList.remove("lg-grid-4")
        document.getElementById("m-grid").classList.add("lg-grid-3")
        document.getElementById("m-content-img").classList.add("s-cross-center")
        document.getElementById("m-banner-social").style.display = "flex"
        document.getElementById("m-tabsid").classList.add("lg-cols-2")
        document.getElementById("m-tabsid").classList.remove("m-order-3")
        document.getElementById("m-tabsid").classList.remove("lg-order-3")
        document.getElementById("m-tabsid").classList.add("m-order-2")
        document.getElementById("m-tabsid").classList.add("lg-order-2")
        document.getElementById("m-tabsid").style.marginTop = "16px"
        document.getElementById("m-info-personal").classList.remove("m-order-2")
        document.getElementById("m-info-personal").classList.remove("lg-order-2")
        document.getElementById("m-info-personal").classList.add("m-order-3")
        document.getElementById("m-info-personal").classList.add("lg-order-3")
        if (width <= 768) {
          document.getElementById("up").style.display = "grid"
          document.getElementById("down").style.display = "none"
        }
      }
    };
  }
  scrollToId(id: string, page) {
    this.scrollToElementById(id);
    if(page == "Proyectos"){
      document.getElementById("m-context").style.marginTop="384px"
    }

  }

  scrollToElementById(id: string) {
    const element = this.__getElementById(id);
    this.scrollToElement(element);
  }
  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({behavior:"smooth"});
  }
  
  private __getElementById(id: string): HTMLElement {
    const element = <HTMLElement>document.querySelector(`#${id}`);
    return element;
  }

}
