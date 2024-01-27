"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PREV_ICON from "@/assets/images/icon1.svg";
import NEXT_ICON from "@/assets/images/icon2.svg";

import Gallery1 from "@/assets/images/gallery/DSCN0663.webp";
import Gallery2 from "@/assets/images/gallery/DSCN0741.webp";
import Gallery3 from "@/assets/images/gallery/DSCN0774.webp";
import Gallery4 from "@/assets/images/gallery/DSCN0781.webp";

import Gallery5 from "@/assets/images/gallery/DSCN0785.webp";
import Gallery6 from "@/assets/images/gallery/DSCN0793.webp";
import Gallery7 from "@/assets/images/gallery/DSCN0796.webp";
import Gallery8 from "@/assets/images/gallery/DSCN0816.webp";

import Gallery9 from "@/assets/images/gallery/DSCN0821.webp";
import Gallery10 from "@/assets/images/gallery/DSCN0828.webp";
import Gallery11 from "@/assets/images/gallery/DSCN7302.webp";
import Gallery12 from "@/assets/images/gallery/DSCN7312.webp";

import Gallery13 from "@/assets/images/gallery/DSCN7323.webp";
import Gallery14 from "@/assets/images/gallery/DSCN7330.webp";
import Gallery15 from "@/assets/images/gallery/DSCN7333.webp";
import Gallery16 from "@/assets/images/gallery/DSCN7344.webp";

import Gallery17 from "@/assets/images/gallery/DSCN7357.webp";
import Gallery18 from "@/assets/images/gallery/DSCN7360.webp";
import Gallery19 from "@/assets/images/gallery/DSCN7365.webp";
import Gallery20 from "@/assets/images/gallery/DSCN7371.webp";

import Gallery21 from "@/assets/images/gallery/DSCN7395.webp";
import Gallery22 from "@/assets/images/gallery/DSCN7397.webp";
import Gallery23 from "@/assets/images/gallery/DSCN7419.webp";
import Gallery24 from "@/assets/images/gallery/DSCN7438.webp";

import Gallery25 from "@/assets/images/gallery/DSCN7440.webp";
import Gallery26 from "@/assets/images/gallery/DSCN7455.webp";
import Gallery27 from "@/assets/images/gallery/DSCN7510.webp";
import Gallery28 from "@/assets/images/gallery/DSCN7570.webp";

import Gallery29 from "@/assets/images/gallery/DSCN7572.webp";
import Gallery30 from "@/assets/images/gallery/DSCN7593.webp";
import Gallery31 from "@/assets/images/gallery/DSCN7607.webp";
import Gallery32 from "@/assets/images/gallery/DSCN7633.webp";

import Gallery33 from "@/assets/images/gallery/DSCN7654.webp";
import Gallery34 from "@/assets/images/gallery/DSCN7821.webp";
import Gallery35 from "@/assets/images/gallery/DSCN7981.webp";
import Gallery36 from "@/assets/images/gallery/DSCN8023.webp";

import Gallery37 from "@/assets/images/gallery/DSCN8041.webp";
import Gallery38 from "@/assets/images/gallery/DSCN8058.webp";
import Gallery39 from "@/assets/images/gallery/DSCN8071.webp";
import Gallery40 from "@/assets/images/gallery/DSCN8129.webp";

import Gallery41 from "@/assets/images/gallery/DSCN8131.webp";
import Gallery42 from "@/assets/images/gallery/DSCN8134.webp";
import Gallery43 from "@/assets/images/gallery/DSCN8183.webp";
import Gallery44 from "@/assets/images/gallery/DSCN8191.webp";

import Gallery45 from "@/assets/images/gallery/DSCN8197.webp";
import Gallery46 from "@/assets/images/gallery/DSCN8224.webp";
import Gallery47 from "@/assets/images/gallery/DSCN8270.webp";
import Gallery48 from "@/assets/images/gallery/DSCN8312.webp";

import Gallery49 from "@/assets/images/gallery/DSCN8326.webp";
import Gallery51 from "@/assets/images/gallery/DSCN8330.webp";
import Gallery52 from "@/assets/images/gallery/DSCN8360.webp";
import Gallery53 from "@/assets/images/gallery/DSCN8449.webp";

import Gallery54 from "@/assets/images/gallery/DSCN8576.webp";
import Gallery55 from "@/assets/images/gallery/DSCN8653.webp";
import Gallery56 from "@/assets/images/gallery/DSCN8669.webp";
import Gallery57 from "@/assets/images/gallery/DSCN8716.webp";

import Gallery58 from "@/assets/images/gallery/DSCN8836.webp";
import Gallery59 from "@/assets/images/gallery/DSCN8866.webp";
import Gallery60 from "@/assets/images/gallery/IMG_0617.webp";
import Gallery61 from "@/assets/images/gallery/IMG_0620.webp";

import Gallery62 from "@/assets/images/gallery/IMG_0931.webp";
import Gallery63 from "@/assets/images/gallery/IMG_1002.webp";
import Gallery64 from "@/assets/images/gallery/IMG_2238.webp";
import Gallery65 from "@/assets/images/gallery/DSCN8312.webp";

import "./Gallery.css";

import Modal from "react-modal";

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    responsive: [
      {
        swipeToSlide: true,
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [currentImage, setCurrentImage] = useState("");

  const slider = useRef<any>(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "transparent",
      border: "none",
    },
    overlay: {
      background: "#0000006d",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(image: any) {
    setCurrentImage(image.src);
    setIsOpen(true);
  }

  //   function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = "#f00";
  //   }

  function closeModal() {
    setCurrentImage("");
    setIsOpen(false);
  }

  return (
    <section id="gallery" className="my-[90px]">
      <div className="w-[1150px] max-w-full mx-auto relative">
        <h1 className="text-center mb-[50px] text-2xl tracking-[1.5px] text-white uppercase">
          Gallery
        </h1>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          shouldCloseOnOverlayClick={true}
          isOpen={modalIsOpen}
          // onAfterOpen={() => {
          //   document.body.style.top = `-${window.scrollY}px`;
          //   document.body.style.position = "fixed";
          // }}
          // onAfterClose={() => {
          //   const scrollY = document.body.style.top;
          //   document.body.style.position = "";
          //   document.body.style.top = "";
          //   window.scrollTo(0, parseInt(scrollY || "0") * -1);
          // }}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          // className={"relative z-[99]"}
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          {currentImage != "" && (
            <img
              src={currentImage}
              alt="currentImage"
              className="relative z-[999]"
            />
          )}
          {/* <button onClick={closeModal}>close</button> */}
          {/* <div>I am a modal</div> */}
        </Modal>
        <button
          className="absolute top-1/2 -left-6 -translate-y-1/2 z-20 prev__button"
          onClick={() => slider?.current?.slickPrev()}
        >
          <Image src={PREV_ICON} alt="PREV_ICON" />
        </button>
        <Slider ref={slider} {...settings} arrows={false}>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery1}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery2}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery3}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery4}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery5}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery6}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery7}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery8}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery9}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery10}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery11}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery12}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery13}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery14}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery15}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery16}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery17}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery18}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery19}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery20}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery21}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery22}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery23}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery24}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery25}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery26}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery27}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery28}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery29}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery30}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery31}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery32}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery33}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery34}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery35}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery36}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery37}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery38}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery39}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery40}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery41}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery42}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery43}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery44}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery45}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery46}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery47}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery48}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery49}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery51}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery52}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery53}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery54}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery55}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery56}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery57}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery58}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery59}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery60}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery61}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery62}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery63}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery64}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
              <Image
                onClick={(e) => openModal(e.target)}
                src={Gallery65}
                alt="Gallery1"
                width={280}
                height={280}
                className="w-[280px] h-[280px] object-cover"
              />
            </div>
          </div>
        </Slider>
        <button
          className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 next__button"
          onClick={() => slider?.current?.slickNext()}
        >
          <Image src={NEXT_ICON} alt="NEXT_ICON" />
        </button>
      </div>
    </section>
  );
}
