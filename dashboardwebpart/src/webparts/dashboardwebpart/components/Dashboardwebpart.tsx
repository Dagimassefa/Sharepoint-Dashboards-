import * as React from "react";

import { IDashboardwebpartProps } from "./IDashboardwebpartProps";
import { Card, Col, Row, Button, Icon } from "antd";
import { SPComponentLoader } from "@microsoft/sp-loader";
import SPService from "../../../_services/SpServices";
import "./Dashboardwebpart.module.scss";
import "./styles.css";
import "./cardstyle.css";
export interface Props {
  context: any;
}

export interface States {
  data: any;
}

export default class Dashboardwebpart extends React.Component<
  IDashboardwebpartProps,
  States
> {
  service = new SPService(this.props.context);

  constructor(props: IDashboardwebpartProps) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount(): void {
    this.getdata();
    const cssURL =
      "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);
    SPComponentLoader.loadCss(
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
    );
    SPComponentLoader.loadCss(
      "https://fonts.googleapis.com/icon?family=Material+Icons"
    );
    // SPComponentLoader.loadCss(
    //   "https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
    // );
    SPComponentLoader.loadScript(
      "https://fonts.googleapis.com/icon?family=Material+Icons"
    );
    this.updateWebPartTitle();
  }

  public getdata() {
    console.log("here is the start");
    this.service.getAllPagesData().then((response) => {
      console.log("responseeeeeeeeeeeeeeeeeeeeeeee", response);
      this.setState({
        data: response,
      });
    });
  }
  private handleViewClick(url: string) {
    // Redirect to the specified URL
    console.log("function  is called here ");
    window.open(url);
  }
  private handleViewClickk() {
    // Scroll to the target element with a smooth behavior
    const targetElement = document.querySelector(".neon__card");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  private updateWebPartTitle(): void {
    // Find the title element
    const titleElement = document.querySelector(
      ".js-webpart-titleCell h2 span"
    );

    // Check if the title element is found
    if (titleElement) {
      // Update the text content of the title element
      titleElement.textContent = "My Dashboard";
      // Apply inline styles for centering and styling the title
      titleElement.setAttribute(
        "style",
        "display: flex; justify-content: center; align-items: center; height: 100%;text-align: center; font-size: 24px; color: #007acc;"
      ); // Adjust the color and styles to your preference
    }
  }
  public render(): React.ReactElement<IDashboardwebpartProps> {
    const { data } = this.state;

    const cardElements: JSX.Element[] = [];
    const combinedPath = `
    M51.676,21.931C45.917,16.171,38.26,13,30.115,13s-15.802,3.171-21.561,8.931l-7.941,7.941l7.711,7.711
    c5.759,5.759,13.416,8.931,21.561,8.931s15.802-3.171,21.561-8.931l7.941-7.941L51.676,21.931z M50.031,36.168
    c-5.381,5.381-12.536,8.345-20.146,8.345S15.12,41.55,9.738,36.168l-6.297-6.297l6.527-6.527C15.35,17.963,22.505,15,30.115,15
    s14.765,2.963,20.146,8.345l6.297,6.297L50.031,36.168z
    M29.671,16.97c-7.065,0-12.813,5.748-12.813,12.813s5.748,12.813,12.813,12.813c7.064,0,12.813-5.748,12.813-12.813
    S36.735,16.97,29.671,16.97z M29.671,40.596c-5.963,0-10.813-4.851-10.813-10.813c0-5.962,4.851-10.813,10.813-10.813
    c5.962,0,10.813,4.851,10.813,10.813C40.483,35.745,35.633,40.596,29.671,40.596z
    M29.265,11.706c0.092,0.093,0.203,0.166,0.326,0.217C29.713,11.973,29.842,12,29.973,12s0.26-0.027,0.382-0.077
    c0.123-0.051,0.233-0.124,0.326-0.217l3.999-3.999c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-2.293,2.293V1
    c0-0.552-0.447-1-1-1s-1,0.448-1,1v7.586L26.68,6.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L29.265,11.706z
    M30.681,48.294c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0
    c-0.123,0.051-0.233,0.124-0.326,0.217l-3.999,3.999c-0.391,0.391-0.391,1.023,0,1.414C25.461,53.902,25.717,54,25.973,54
    s0.512-0.098,0.707-0.293l2.293-2.293V59c0,0.552,0.447,1,1,1s1-0.448,1-1v-7.586l2.293,2.293C33.461,53.902,33.717,54,33.973,54
    s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L30.681,48.294z
  `;
    const neonCardStyle = {
      background: "linear-gradient(135deg,#00ffd6,#08e260)",
    };
    if (data && data.value) {
      data.value.forEach((item: any, index: number) => {
        cardElements.push(
          <div className="col-xl-4 col-sm-12 col-24" key={item.Id}>
            <div className="container" style={{ width: "100%" }}>
              <div className="parent" style={{ width: "100%" }}>
                <div
                  className="card"
                  style={{ width: "100%", borderRadius: "30px" }}
                >
                  <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5"></span>
                  </div>
                  <div className="glass"></div>
                  <div className="content">
                    <span className="text">{item.Title}</span>
                  </div>
                  <div className="bottom">
                    <div className="view-more">
                      <a
                        href="javascript:void(0)"
                        className="neon__button"
                        onClick={() => this.handleViewClick(item.FileRef)}
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="neon__container">
              <div className="neon__card mb-3" style={neonCardStyle}>
                <svg
                  className="neon__icon"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M35.712 6C40.28 6 43.998 9.68403 43.998 14.2103L44 19.5649C44 19.9573 43.842 20.3378 43.562 20.6152C43.28 20.8946 42.9 21.0512 42.5 21.0512C40.858 21.0512 39.522 22.375 39.522 24.002C39.522 25.629 40.858 26.9528 42.5 26.9528C43.328 26.9528 44 27.6186 44 28.4391V33.7917C44 38.318 40.284 42 35.716 42H12.286C7.718 42 4 38.318 4 33.7917V28.4391C4 27.6186 4.672 26.9528 5.5 26.9528C7.144 26.9528 8.48 25.629 8.48 24.002C8.48 22.4166 7.198 21.2236 5.5 21.2236C5.102 21.2236 4.722 21.067 4.44 20.7876C4.158 20.5082 4 20.1297 4 19.7373L4.004 14.2103C4.004 9.68403 7.72 6 12.288 6H35.712ZM24.004 16.3069C23.436 16.3069 22.928 16.6201 22.674 17.1234L21.216 20.0504L17.964 20.5201C17.402 20.5994 16.942 20.9799 16.764 21.5149C16.588 22.05 16.73 22.6286 17.138 23.021L19.496 25.296L18.94 28.5124C18.844 29.0673 19.07 29.6182 19.53 29.9491C19.79 30.1334 20.092 30.2286 20.398 30.2286C20.632 30.2286 20.868 30.1711 21.084 30.0581L24 28.5401L26.91 30.0542C27.414 30.3217 28.012 30.2801 28.47 29.9472C28.932 29.6182 29.158 29.0673 29.062 28.5124L28.504 25.296L30.862 23.021C31.272 22.6286 31.414 22.05 31.236 21.5149C31.06 20.9799 30.6 20.5994 30.044 20.5221L26.786 20.0504L25.328 17.1254C25.078 16.622 24.57 16.3089 24.004 16.3069Z" />
                </svg>

                <h1 className="neon__title">{item.Title}</h1>

                <a
                  href="#"
                  className="neon__button"
                  onClick={() => this.handleViewClick(item.FileRef)}
                  target="_blank"
                >
                  View
                  <svg
                    className="neon__button-icon"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={combinedPath} />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        );
      });
    }

    return (
      <div>
        <div
          className="container-fluid"
          style={{ background: "#ECECEC", padding: "30px" }}
        >
          <div className="row">{cardElements}</div>
        </div>
      </div>
    );
  }
}
