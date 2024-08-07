import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from "../images/luisagdlogo.svg";
import main_img from "../images/mboeheka/una_1.jpg";
import location_icon from "../images/mboeheka/location-icon.svg";
import external_icon from "../images/mboeheka/external-icon.svg";
import internet_icon from "../images/mboeheka/internet-icon.svg";
import phone_icon from "../images/mboeheka/phone-icon.svg";

import "../styles/font.css";

import { Link } from "gatsby";
const Majors = require("../json/majors.json");

export function Head() {
  return (
    <>
      <title>Mbo'eheka</title>
      <meta name="description" content="Mbo'eheka: encontrá tu universidad." />
      <html lang="es" />
      <link rel="icon" type="image/x-icon" href={icon} />
    </>
  );
}

function Mboeheka() {
  let AvailableMajors = [
    1, 3, 4, 8, 9, 13, 14, 15, 16, 18, 22, 23, 24, 25, 26, 31, 33, 34, 36, 37,
    40, 41, 42, 43, 45, 46, 47, 49, 51, 54, 56, 57, 59, 67, 68, 69, 71, 72, 73,
    76, 77, 78, 79, 80, 83, 84, 86, 87, 88, 91, 92, 94, 95, 96, 97, 100, 103,
    111, 112, 113, 115, 117, 122, 123, 124,
  ];
  return (
    <div>
      <main className="min-h-screen  bg-red-50">
        <Navbar />

        <div className="px-10 lg:w-[1200px] m-auto">
          <div className=" bg-white">
            <img src={main_img} className="" />
            <div className=" p-3 lg:px-10 lg:py-4">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold font-serif text-gray-700">
                Universidad Nacional de Asunción
              </h1>
              <div className="flex items-center">
                <div>
                  <div>
                    <img src={location_icon} className="h-4 inline" />
                    <span> San Lorenzo, Central</span>
                  </div>
                  <div>
                    <img src={location_icon} className="h-4 inline" />
                    <span> Asunción</span>
                  </div>
                  <div>
                    <img src={location_icon} className="h-4 inline" />
                    <span> Luque, Central</span>
                  </div>
                </div>
                <div className="ml-10 lg:ml-40">
                  <div>
                    <img
                      src={internet_icon}
                      alt="Página web"
                      className="h-4 inline"
                    />
                    <a
                      href="https://www.una.py/"
                      className="text-blue-600 hover:underline ml-1 font-semibold"
                    >
                      una.py
                    </a>
                  </div>
                  <div>
                    <img
                      src={phone_icon}
                      alt="Numero de contacto"
                      className="h-5 inline"
                    />
                    (021) 328 5997
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className=" mt-4 bg-white p-3 lg:p-10 font-source-sans">
            La Universidad Nacional de Asunción (UNA) fue fundada el 24 de enero
            de 1943 y es una de las instituciones educativas más antiguas y
            prestigiosas de Paraguay. Su misión es ofrecer una educación
            superior de alta calidad y contribuir al desarrollo del país a
            través de la formación de profesionales competentes en diversas
            áreas del conocimiento. Su sede principal está ubicada en la Ciudad
            Universitaria, en San Lorenzo, y cuenta con varios campus en
            diferentes ciudades, incluyendo Asunción y Ciudad del Este.
          </p>

          <div className="p-3 lg:p-10 bg-white my-4">
            <h1 className="text-xl lg:text-3xl font-semibold text-blue-600">
              Admisiones
            </h1>
            <div className="lg:flex items-center">
              <div>
                <span className="text-2xl lg:text-4xl">44.96%</span>
                <a href="https://www.una.py/wp-content/uploads/2023/04/UNA_EN_CIFRAS_2022.pdf">
                  <img
                    src={external_icon}
                    alt="Link externo"
                    className="h-7 inline text-blue-600 align-top pt-2"
                  />
                </a>

                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  Porcentaje de Admisión
                </h1>
              </div>
              <div className="lg:ml-5">
                <p>
                  <a href="https://www.ing.una.py/?p=62437">FIUNA:</a> 202/1163
                </p>
                <p>
                  <a href="https://www.pol.una.py/admision/ingreso/">FPUNA:</a>
                  281/1015
                </p>
                <p>
                  <a href="https://www.abc.com.py/nacionales/2022/02/05/mas-de-250-estudiantes-buscan-ingresar-a-la-facen-en-examen-de-repechaje/">
                    FACEN:
                  </a>
                  197/250
                </p>
              </div>
              <div className="lg:ml-10 w-[600px]">
                <p className="font-source-sans ">
                  El proceso de admisión es bastante selectivo. Los aspirantes
                  deben cumplir con requisitos académicos previos, como la
                  finalización de la educación secundaria y la presentación de
                  documentos oficiales. Los candidatos deben rendir un examen de
                  admisión, el cual varía dependiendo de la facultad.
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 lg:p-10 bg-white ">
            <h1 className="text-xl lg:text-3xl font-semibold text-blue-600 ">
              Académico
            </h1>
            <div className="lg:flex justify-between">
              <div>
                <span className="text-2xl lg:text-4xl">47.320</span>
                <a href="https://www.una.py/la-universidad/estadisticas/anuario-estadistico">
                  <img
                    src={external_icon}
                    alt="Link externo"
                    className="h-7 inline text-blue-600 align-top pt-2"
                  />
                </a>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  Estudiantes de grado
                </h1>
              </div>
              <div className=" lg:ml-10 ">
                <span className="text-2xl lg:text-4xl">9.149</span>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
                  Docentes
                </h1>
              </div>
              <div className="lg:ml-10 ">
                <span className="text-2xl lg:text-4xl">5:1</span>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
                  Estudiantes por docente
                </h1>
              </div>
            </div>
          </div>
          <div className=" mt-4 bg-white p-3 lg:p-10">
            <h1 className="text-xl lg:text-3xl font-semibold text-blue-600">
              Facultades
            </h1>
            <div className="lg:flex lg:gap-10">
              <ul className="font-semibold lg:text-xl">
                <li>
                  <a
                    href="https://www.ing.una.py/"
                    aria-label="Link a la página de la FIUNA"
                  >
                    Facultad de Ingenería
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pol.una.py/"
                    aria-label="Link a la página de la FPUNA"
                  >
                    Facultad Politécnica
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.med.una.py/"
                    aria-label="Link a la página de Medicina UNA"
                  >
                    Facultad de Ciencias Médicas
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.eco.una.py/"
                    aria-label="Link a la página de Economía UNA"
                  >
                    Facultad de Ciencias Económicas
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.der.una.py/"
                    aria-label="Link a la página de Derecho UNA"
                  >
                    Facultad de Derecho y Ciencias Sociales
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facen.una.py/es/"
                    aria-label="Link a la página de FACEN"
                  >
                    Facultad de Ciencias Exactas y Naturales
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://qui.una.py/"
                    aria-label="Link a la página de la FCQ"
                  >
                    Facultad de Ciencias Químicas
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
              </ul>
              <ul className="font-semibold lg:text-xl">
                <li>
                  <a
                    href="http://www.odo.una.py/"
                    aria-label="Link a la página de Odontología UNA"
                  >
                    Facultad de Odontología
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.agr.una.py/"
                    aria-label="Link a la página de la FCA"
                  >
                    Facultad de Ciencias Agrarias
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://fada.una.py/"
                    aria-label="Link a la página de FADA"
                  >
                    Facultad de Arquitectura, Diseño y Arte
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fenob.una.py/"
                    aria-label="Link a la página de Enfermería y Obstetricia UNA"
                  >
                    Facultad de Enfermería y Obstetricia
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://facso.una.py/"
                    aria-label="Link a la página de FACSO"
                  >
                    Facultad de Ciencias Sociales
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vet.una.py/"
                    aria-label="Link a la página de Ciencias Veterinarias UNA"
                  >
                    Facultad de Ciencias Veterinarias
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.fil.una.py/home/"
                    aria-label="Link a la página de Filosofía UNA"
                  >
                    Facultad de Filosofía
                    <img
                      src={external_icon}
                      alt="Link externo"
                      className="h-6 inline text-blue-600 align-top pt-1 ml-2"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-3 lg:p-10 bg-white my-4">
            <h1 className="text-xl lg:text-3xl font-semibold text-blue-600">
              Carreras
            </h1>
            <div className="lg:flex items-center">
              <div className="lg:ml-5 grid grid-rows-[repeat(25,minmax(0,_1fr))] lg:gap-x-6 grid-flow-col">
                {AvailableMajors.map((major) => (
                  <div className="h-6 font-semibold">{Majors[major]}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Mboeheka;
