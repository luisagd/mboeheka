import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from "../images/luisagdlogo.svg";
import location_icon from "../images/mboeheka/location-icon.svg";

import "../images/mboeheka/portada_una.jpg";

import { Link } from "gatsby";

const universities = require("../json/universities.json");
const majors = require("../json/majors.json");

export function Head() {
  return (
    <>
      <title>Mbo'eheka: encontrá tu universidad</title>
      <meta
        name="description"
        content="Mbo'eheka: universidades en Paraguay."
      />
      <html lang="es" />
      <link rel="icon" type="image/x-icon" href={icon} />
    </>
  );
}
function liveSearch() {
  // Locate the card elements
  let cards = document.querySelectorAll(".uni");
  // Locate the search input
  let search_query = document.getElementById("searchbox").value;
  // Loop through the cards
  for (var i = 0; i < cards.length; i++) {
    // If the text is within the card...
    if (
      cards[i].innerText
        .toLowerCase()
        // ...and the text matches the search query...
        .includes(search_query.toLowerCase())
    ) {
      // ...remove the `.is-hidden` class.
      cards[i].classList.remove("hidden");
    } else {
      // Otherwise, add the class.
      cards[i].classList.add("hidden");
    }
  }
}
function haveCommonItems(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonItems = arr2.filter((item) => set1.has(item));
  return commonItems.length > 0;
}

function Mboeheka() {
  var major_filters = [];
  return (
    <div>
      <main className="min-h-screen ">
        <Navbar />
        <div className="flex bg-red-50 ">
          <div className="bg-white ml-32 max-h-[80vh] overflow-y-auto mt-10 lg:mt-24 hidden lg:block">
            {majors.map((major) => major!="" && (

              <div>
                <input
                  type="checkbox"
                  id="major-check"
                  onClick={(event) => {
                    let major_code = majors.indexOf(major);
                    if (major_filters.includes(major_code)) {
                      major_filters = major_filters.filter(
                        (item) => item !== major_code
                      );
                    } else {
                      major_filters.push(major_code);
                    }
                    console.log(major_filters);
                    let unis = document.querySelectorAll(".uni");
                    if (major_filters.length !== 0) {
                      for (var i = 0; i < unis.length; i++) {
                        if (
                          haveCommonItems(universities[i].majors, major_filters) //TODO: instead of sharing elements, major filters should be contained by majors. (It is inclusive, when it should be exclusive)
                        )
                          unis[i].classList.remove("hidden");
                        //TODO: there is a bug expected here. should merge the behavior of search and filter. up
                        else unis[i].classList.add("hidden");
                      }
                    } else {
                      for (var i = 0; i < unis.length; i++) {
                        unis[i].classList.remove("hidden");
                      }
                    }
                  }}
                />
                <label htmlFor="major-check" className="ml-2">
                  {major}
                </label>
              </div>
            ))}
          </div>
          <div className="px-10 lg:w-[1060px] mx-auto">
            <p className="text-left  lg:text-2xl  pt-5 ">
              Encuentra la universidad en la que encajas.
            </p>
            <form className="w-2/3 lg:w-1/2">
              <label htmlFor="searchbox"> </label>
              <input
                type="search"
                onInput={liveSearch}
                id="searchbox"
                className="border w-full text-black p-1 mb-3 rounded xl:h-12"
              />
            </form>

            {universities.map((uni) => (
              <div className="border my-8 uni bg-white p-2 lg:p-5 flex gap-6 text-xs lg:text-base">
                <img src={"/" + uni.photo} className="w-36 max-h-24 lg:w-56 lg:max-h-48"></img>
                <div>
                  <h1 className="text-xl lg:text-2xl font-semibold text-blue-700 hover:underline">
                    <a href={uni.url}>{uni.name}</a>
                  </h1>
                  <div>
                    <img src={location_icon} className="h-4 inline" />
                    <span> {uni.location}</span>
                  </div>
                  <p>{uni.description}</p>
                  <p>
                    Programas disponibles: {uni.principales_áreas_de_estudio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Mboeheka;
