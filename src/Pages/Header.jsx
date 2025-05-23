import React from "react";
import { Row, Col, Button, Divider, Card } from "antd";
import Union from "../assets/Icons/Union.png";
import Group from "../assets/Icons/Group.png";
import Line from "../assets/Icons/Line.png";
import Html from "../assets/Icons/Html.png";
import Bootstrap from "../assets/Icons/Bootstrap.png";
import Antd from "../assets/Icons/Antd.png";
import Reactlogo from "../assets/Icons/Reactlogo.png";
import javascriptlogo from "../assets/Icons/javascriptlogo.png";
import zillitlogo from "../assets/Icons/zillitlogo.png";
import whatsp from "../assets/Icons/whatsp.png";
import linkedin from "../assets/Icons/linkedin.png";
import github from "../assets/Icons/github.png";
import topgridBG from "../../src/assets/Icons/topgridBG.png";
import amanpic from "../../src/assets/Icons/amanpic.png";
import "../../src/Pages/providers/Header.css";
import Figma from "../../src/assets/Icons/Figma.png";
import deepseek from "../../src/assets/Icons/deepseek.png";
import ChatGPt from "../../src/assets/Icons/ChatGPt.png";
import Adobe_XD from "../../src/assets/Icons/Adobe_XD.png";
import Sketch_Logo from "../../src/assets/Icons/Sketch_Logo.png";
import Adobe_Illustrator from "../../src/assets/Icons/Adobe_Illustrator.png";
import Adobe_Photoshop from "../../src/assets/Icons/Adobe_Photoshop.png";
import Protopie from "../../src/assets/Icons/Protopie.png";
import expBG from "../../src/assets/Icons/expBG.png";
import A from "../../src/assets/Icons/A.png";
import B from "../../src/assets/Icons/B.png";
import C from "../../src/assets/Icons/C.png";
import D from "../../src/assets/Icons/D.png";
import E from "../../src/assets/Icons/E.png";
import F from "../../src/assets/Icons/F.png";
import G from "../../src/assets/Icons/G.png";
import H from "../../src/assets/Icons/H.png";
import J from "../../src/assets/Icons/J.png";
import oodles from "../../src/assets/Icons/oodles.png";
import sundaylabs from "../../src/assets/Icons/sundaylabs.png";
import p01 from "../../src/assets/Icons/p01.png";
import p02 from "../../src/assets/Icons/p02.png";
import p03 from "../../src/assets/Icons/p03.png";
import p04 from "../../src/assets/Icons/p04.png";
import p05 from "../../src/assets/Icons/p05.png";
import p06 from "../../src/assets/Icons/p06.png";
import p07 from "../../src/assets/Icons/p07.png";
import p08 from "../../src/assets/Icons/p08.png";
import p09 from "../../src/assets/Icons/p09.png";
import whatsaap5 from "../../src/assets/Icons/whatsaap5.png";
import linked5 from "../../src/assets/Icons/linked5.png";
import instagram5 from "../../src/assets/Icons/instagram5.png";
import behance5 from "../../src/assets/Icons/behance5.png";
import g01 from "../../src/assets/Icons/g01.png";
import g02 from "../../src/assets/Icons/g02.png";
import g03 from "../../src/assets/Icons/g03.png";
import g04 from "../../src/assets/Icons/g04.png";
import g05 from "../../src/assets/Icons/g05.png";
import g06 from "../../src/assets/Icons/g06.png";
import g07 from "../../src/assets/Icons/g07.png";
import g08 from "../../src/assets/Icons/g08.png";
import g09 from "../../src/assets/Icons/g09.png";
const HeroSection = () => {
  const experiences = ["ADD TEXT HERE"];

  const phoneNumber = "9953558983";
  const message = encodeURIComponent("Hi there, I want to get in touch!");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}

      {/* Grid Background */}
      <div
        className="absolute inset-0   pointer-events-none"
        style={{
          backgroundImage: `url(${topgridBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Hero Section Content */}
      <div className="relative z-10 px-2 py-2 rounded shadow-md ">
        <Row justify="center" className="z-10 relative mb-10">
          <div className="bg-black rounded-[9px] px-6 py-1 shadow border border-gray-700  w-[447px]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 ">
              <a href="/AmanResume.pdf" download className="w-full sm:w-auto">
                <Button
                  type="default"
                  className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                >
                  Download Resume
                </Button>
              </a>

              <Divider
                type="vertical"
                className="hidden sm:block bg-gray-600 h-6"
              />

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  type="default"
                  className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contact Now
                </Button>
              </a>
              <Divider
                type="vertical"
                className="hidden sm:block bg-gray-600 h-6"
              />
              <a href="https://www.behance.net/amanpachisia" target="_blank">
                {" "}
                <Button
                  type="default"
                  className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                >
                  Work Portfolio
                </Button>
              </a>
            </div>
          </div>
        </Row>
        <Row gutter={[32, 32]} align="middle">
          {/* Left Column */}
          <Col xs={24} md={12}>
            <div className="text-left px-2 ">
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 ">
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #c4c4c4, #ffffff, #cacaca)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Aman Kumar
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-400 mb-4">
                (UI/UX Designer)
              </h2>
              <p className="text-gray-300 mb-12  max-w-[450px] leading-relaxed">
                I am a UI/UX Designer with four years of experience in both
                service-based and product-based IT companies. I specialise in
                creating intuitive and visually engaging designs that enhance
                user experience. Proficient in tools like Sketch, Figma, and
                Adobe XD, I have successfully led projects that improved user
                retention and satisfaction. My experience spans from redesigning
                e-commerce platforms to enhancing flagship product usability,
                always focusing on user-centric solutions.
              </p>

              <div className="flex flex-wrap gap-8">
                <a href="/AmanResume.pdf" download>
                  {" "}
                  <Button type="primary" size="large" className="ButtonClass">
                    Download Resume
                  </Button>
                </a>

                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <Button type="primary" size="large" className="ButtonClass">
                    Contact Now
                  </Button>
                </a>
              </div>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={24} md={12} className="flex justify-center md:justify-end">
            <img
              src={amanpic}
              alt="Aman kumar"
              className="rounded-xl border-[3px] border-white max-w-[350px] w-full"
            />
          </Col>
        </Row>

        {/* Skills Placeholder */}
        <div className="mt-24 flex flex-col items-center text-center">
          <h1 className="text-4xl text-white">Tools</h1>
          <div className="  rounded-lg text-center">
            <img
              src={Line}
              className="rounded-xl border-[3px] border-white max-w-[300px] w-full mb-2"
              alt="Portfolio Line"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-8 justify-center mt-4">
            <div className=" p-4 rounded-lg text-center">
              <img src={Figma} />
            </div>
            <div className=" p-4 rounded-lg text-center">
              <img src={Adobe_XD} />
            </div>
            <div className=" p-4 rounded-lg text-center">
              <img src={Sketch_Logo} />
            </div>
            <div className=" p-4 rounded-lg text-center">
              <img src={Adobe_Photoshop} />
            </div>
            <div className=" p-4 rounded-lg text-center">
              <img src={Adobe_Illustrator} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-4">
          <div className=" p-4 rounded-lg text-center">
            <img src={Protopie} />
          </div>
          <div className=" p-4 rounded-lg text-center">
            <img src={ChatGPt} />
          </div>
          <div className=" p-4 rounded-lg text-center">
            <img src={deepseek} />
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center text-center">
          <h1 className="text-4xl text-white">Skills</h1>
          <div className="  rounded-lg text-center">
            <img
              src={Line}
              className="rounded-xl border-[3px] border-white max-w-[300px] w-full mb-8"
              alt="Portfolio Line"
            />
          </div>
          <div className="mt-2">
            <div className="grid grid-row-6 gap-4 mb-2">
              <div className="text-white justify-center items-center font-medium text-lg flex flex-wrap gap-4 text-center">
                <p className="skilsection">Wireframe</p>
                <p className="skilsection">Prototype</p>
                <p className="skilsection">Mockups</p>
                <p className="skilsection">Micro Animation</p>
                <p className="skilsection">Client Handling</p>
                <p className="skilsection">SaaS</p>
              </div>
            </div>

            <div className="grid grid-row-6 gap-4 mb-2">
              <div className="text-white justify-center items-center font-medium text-lg flex flex-wrap gap-4 text-center">
                {" "}
                <p className="skilsection">Design System</p>
                <p className="skilsection">Web Portal Design</p>
                <p className="skilsection">Mobile UI</p>
                <p className="skilsection">User Research</p>
                <p className="skilsection">Information Architecture</p>
                <p className="skilsection">ERP</p>
              </div>
            </div>

            <div className="grid grid-row-6 gap-4 ">
              <div className="text-white justify-center items-center font-medium text-lg flex flex-wrap gap-4 text-center">
                {" "}
                <p className="skilsection">User Flow</p>
                <p className="skilsection">Card Shorting</p>
                <p className="skilsection">Design Thinking</p>
                <p className="skilsection">User Centered Design</p>
                <p className="skilsection">UX Testing</p>
                <p className="skilsection">Blockchain</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center text-center">
          <h1 className="text-4xl text-white">Work Experiance</h1>
          <div className="  rounded-lg text-center">
            <img
              src={Line}
              className="rounded-xl border-[3px] border-white max-w-[300px] w-full mb-10"
              alt="Portfolio Line"
            />
          </div>

          <div className="relative z-10 p-0 rounded-xl bg-gradient-to-r from-[#E9D0FF] to-[#424242]">
            <Card
              className="bg-[#131313] rounded-xl"
              style={{
                backgroundImage: `url(${expBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {" "}
              <Row gutter={[32, 32]} align="middle">
                {/* Left Column */}
                <Col xs={24} md={12}>
                  <div className="text-left px-2 ">
                    <div>
                      {" "}
                      <div className="justify-items-start">
                        {" "}
                        <img
                          src={zillitlogo}
                          className="rounded-[8px] h-16 w-16 border-white text-lg  mt-2"
                          alt="Zillit Logo"
                        />
                        <p className="text-4xl font-extrabold mt-4 text-gray-300">
                          Zillit
                        </p>
                        <p className="text-xl font-semibold text-[#E5E5E5] mb-2">
                          (Sr. UI/UX Designer)
                        </p>
                        <p className="text-base font-normal text-[#E5E5E5]">
                          July, 2024 - Currently Working
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-12">
                      <a
                        href="
                                    https://web.zillit.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          type="primary"
                          size="large"
                          className="ButtonClass"
                        >
                          Visit Zillit
                        </Button>
                      </a>
                    </div>
                  </div>
                </Col>

                {/* Right Column - Experience List */}
                <Col xs={24} md={12}>
                  <div
                    className="text-white gap-3 md:p-6 text-base font-md p-4 leading-loose

"
                  >
                    <p className="text-start">
                      As a UI/UX Designer at ITOP, I contributed to the design
                      of Zillit, a comprehensive dashboard tailored to manage
                      and streamline all aspects of pre-production, production,
                      and filmmaking processes. Collaborating closely with
                      stakeholders, I ensured that Zillit met the unique
                      requirements of Hollywood movie-making teams, facilitating
                      efficient communication and workflow management. By
                      creating user-centered designs, I simplified complex
                      filmmaking tasks, enhancing team coordination and
                      productivity.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>

          <div className="relative z-10 p-0 mt-6 rounded-xl bg-gradient-to-r from-[#E9D0FF] to-[#424242]">
            <Card
              className="bg-[#131313] rounded-xl"
              style={{
                backgroundImage: `url(${expBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {" "}
              <Row gutter={[32, 32]} align="middle">
                {/* Left Column */}
                <Col xs={24} md={12}>
                  <div className="text-left px-4 ">
                    <div>
                      {" "}
                      <img
                        src={sundaylabs}
                        className="rounded-[8px] h-16 w-16 border-white text-lg  mt-2"
                        alt="Zillit Logo"
                      />
                      <p className="text-4xl font-extrabold mt-4  text-gray-300">
                        Sunday Labs (Growpital | Zeeta farms)
                      </p>
                    </div>
                    <p className="text-xl font-semibold text-[#E5E5E5] mb-2">
                      (UI/UX Designer)
                    </p>
                    <p className="text-base font-normal text-[#E5E5E5]">
                      December, 2023 - April, 2024
                    </p>

                    <div className="flex flex-wrap gap-6 mt-6">
                      <a
                        href="
                                    https://web.zillit.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </div>
                  </div>
                </Col>

                {/* Right Column - Experience List */}
                <Col xs={24} md={12}>
                  <div className="text-white gap-3 md:p-6 text-base font-md p-4 leading-loose text-start ">
                    <p>
                      Working for Gropital (Zetta farms), My duty is to creating
                      intuitive interfaces and delightful user experiences.
                      Through collaboration with cross-functional teams, I
                      design and iterate to ensure our digital products align
                      with user needs and business goals, ultimately driving
                      customer satisfaction and product success.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>

          <div className="relative z-10 p-0 mt-6 rounded-xl bg-gradient-to-r from-[#E9D0FF] to-[#424242]">
            <Card
              className="bg-[#131313] rounded-xl"
              style={{
                backgroundImage: `url(${expBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {" "}
              <Row gutter={[32, 32]} align="middle">
                {/* Left Column */}
                <Col xs={24} md={12}>
                  <div className="text-left px-4 ">
                    <div>
                      {" "}
                      <img
                        src={oodles}
                        className="rounded-[8px] h-16 w-16 border-white text-lg  mt-2"
                        alt="Zillit Logo"
                      />
                      <p className="text-4xl font-extrabold mt-4  text-gray-300">
                        Oodles Technology | Oodles Blockchain
                      </p>
                    </div>
                    <p className="text-xl font-semibold text-[#E5E5E5] mb-2">
                      (UI/UX Designer)
                    </p>
                    <p className="text-base font-normal text-[#E5E5E5]">
                      September, 2021 - December, 2023
                    </p>

                    <div className="flex flex-wrap gap-6 mt-6">
                      <a
                        href="
                                    https://web.zillit.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </div>
                  </div>
                </Col>

                {/* Right Column - Experience List */}
                <Col xs={24} md={12}>
                  <div className="text-white gap-3 md:p-6 text-base font-md p-4 leading-loose text-start">
                    <p>
                      Conducting user research and testing to gather feedback
                      and ensure that the designs are optimized for user
                      satisfaction. I am also create wireframes, prototypes, and
                      high-fidelity designs, ensuring that they adhere to design
                      principles and industry best practices.
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center text-center">
          <h1 className="text-4xl text-white">Want to Hire</h1>
          <div className="rounded-lg">
            <img
              src={Line}
              className="rounded-xl border-[3px] border-white max-w-[300px] w-full mb-10"
              alt="Decorative line under Portfolio heading"
            />
          </div>
        </div>
        <Row justify="center" className="z-10 relative mb-10 gap-10">
          {/* <div className="bg-black rounded-xl px-4 h-14 flex items-center gap-4 shadow border border-gray-700"> */}
          <a href="/AmanResume.pdf" download>
            <Button type="primary" className="ButtonClass">
              Download Resume
            </Button>
          </a>

          {/* <Button
                    type="default"
                    className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition w-52 h-14 font-bold text-white"
                >
                    Contact Now
                </Button> */}

          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button type="primary" className="ButtonClass">
              Contact Now
            </Button>
          </a>
          {/* </div> */}
        </Row>

        <div className="mt-32 flex flex-col items-center text-center">
          <h1 className="text-4xl text-white">Portfolio</h1>
          <div className="  rounded-lg text-center">
            <img
              src={Line}
              className="rounded-xl border-[3px] border-white max-w-[300px] w-full mb-6 "
              alt="Portfolio Line"
            />
          </div>

          <div className="flex flex-wrap gap-16  justify-center ">
            {" "}
            <a href="https://www.behance.net/gallery/196169581/Design-System-(UiUx)">
              <Card
                hoverable
                className="cardbody h-96  max-h-96 border-0 shadow-md rounded-lg p-0 m-0 overflow-hidden"
                cover={
                  <img alt="example" src={g01} className="h-72 object-cover" />
                }
              >
                {/* Custom bottom row below image */}
              </Card>
            </a>
            <a href="https://www.figma.com/proto/rnORef65IwwI7U8HnCDF9T/Asingment-Growtomation?page-id=0%3A1&node-id=5-2933&viewport=1765%2C1465%2C0.1&t=OXES2NnKCW0ip8F3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5%3A2933">
              <Card
                hoverable
                className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
                cover={
                  <img alt="example" src={g02} className="h-72 object-cover" />
                }
              ></Card>
            </a>
            <a href="https://www.figma.com/proto/BSI2ANX9MPRbhZUIZW7jgC/Extra-miles--Aman-?page-id=0%3A1&node-id=0-1498&viewport=2033%2C1418%2C0.18&t=dm75DMdkkGngI7ES-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A1498">
              <Card
                hoverable
                className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
                cover={
                  <img alt="example" src={g03} className="h-72 object-cover" />
                }
              ></Card>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-16  justify-center ">
          <a href="https://www.behance.net/gallery/180169689/Stolpersteine-Stories-of-Holocaust">
            <Card
              hoverable
              className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
              cover={
                <img alt="example" src={g07} className="h-72 object-cover" />
              }
            ></Card>
          </a>
          <a href="https://www.behance.net/gallery/221619183/Crypto-Dashboard">
            <Card
              hoverable
              className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
              cover={
                <img alt="example" src={g08} className="h-72 object-cover" />
              }
            >
              {/*  */}
            </Card>
          </a>
          <a href="https://www.figma.com/proto/IlgXenQLfJtj6QXFgliBHb/VIZARA-Assignment?page-id=0%3A1&node-id=1-3&viewport=382%2C345%2C0.14&t=Csk3pl0qAdmeuEpi-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3">
            <Card
              hoverable
              className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
              cover={
                <img alt="example" src={g09} className="h-72 object-cover" />
              }
            ></Card>
          </a>
        </div>
        <div className="flex flex-wrap gap-16  justify-center ">
          <a href="https://www.figma.com/proto/lgEg4w1iW5yrlIK7uMnlQ6/88Gravity?page-id=0%3A1&node-id=61-2092&viewport=-2405%2C566%2C0.24&t=k7gRgp55a2IseMvp-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=61%3A2092">
            <Card
              hoverable
              className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
              cover={
                <img alt="example" src={g04} className="h-72 object-cover" />
              }
            ></Card>
          </a>
          <a href="https://www.figma.com/proto/C1eqVDpa2wgaDx6SSSN858/Webitlab-Assignment?page-id=0%3A1&node-id=1-442&viewport=411%2C108%2C0.09&t=5w9T8tyHXRTsKUQj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A442">
            <Card
              hoverable
              className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
              cover={
                <img alt="example" src={g05} className="h-72 object-cover" />
              }
            ></Card>
          </a>
          <a href="https://www.behance.net/gallery/173883495/Landing-page-Fintech-service">
            <Card
              hoverable
              className="cardbody border-0 shadow-md rounded-lg overflow-hidden"
              cover={
                <img alt="example" src={g06} className="h-72 object-cover" />
              }
            ></Card>
          </a>
        </div>

        <div
          className="flex flex-wrap gap-8 justify-center align-center mt-8
      "
        >
          <a
            href="
          https://www.behance.net/amanpachisia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" size="large" className="ButtonClass">
              Go to Behance{" "}
            </Button>
          </a>

          <a
            href="https://www.instagram.com/amanuiux2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" size="large" className="ButtonClass">
              Go to Instagram{" "}
            </Button>
          </a>
        </div>

        <div className="mt-24 flex flex-col items-center text-center">
          <h1 className="text-4xl text-white">Contact Me</h1>
          <div className="  rounded-lg text-center">
            <img
              src={Line}
              className="rounded-xl border-[3px] border-white max-w-[300px] w-full mb-8"
              alt="Portfolio Line"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2 list-disc   text-base md:text-lg leading-relaxed text-gray-300">
            <p>
              <span className="text-xl font-medium">Email:</span>{" "}
              amanpachisia3@gmail.com
            </p>
            <p>
              <span className="text-xl font-medium">Contact : {""}</span>
              9953558983
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 justify-center text-center mt-6">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <img className="h-12 w-12" src={whatsaap5} alt="Portfolio Line" />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aman-pachisia/"
            >
              <img className="h-12 w-12" src={linked5} alt="Portfolio Line" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/amanuiux2024/"
            >
              <img
                className="h-12 w-12"
                src={instagram5}
                alt="Portfolio Line"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/amanpachisia"
            >
              <img className="h-12 w-12" src={behance5} alt="Portfolio Line" />
            </a>
            {/* <img src={github} alt="Portfolio Line" /> */}
          </div>
          <Row justify="center" className="z-10 relative mb-6 mt-24">
            <div className="bg-black rounded-[9px] px-6 py-1 shadow border border-gray-700  w-[447px]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 ">
                <a href="/AmanResume.pdf" download className="w-full sm:w-auto">
                  <Button
                    type="default"
                    className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Download Resume
                  </Button>
                </a>

                <Divider
                  type="vertical"
                  className="hidden sm:block bg-gray-600 h-6"
                />

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="default"
                    className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Contact Now
                  </Button>
                </a>
                <Divider
                  type="vertical"
                  className="hidden sm:block bg-gray-600 h-6"
                />
                <a href="https://www.behance.net/amanpachisia" target="_blank">
                  {" "}
                  <Button
                    type="default"
                    className="w-full sm:w-auto text-white bg-black border-none hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Work Portfolio
                  </Button>
                </a>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
