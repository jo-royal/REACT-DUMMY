import { useState } from "react";
import HoverZoom from "./packages/HoverZoom";
import TestOne from "../assets/test-one.png";
import TestTwo from "../assets/test-two.png";
import TestThree from "../assets/test-three.png";
import Truck from "../assets/truck-delevery.svg";
import Packet from "../assets/packet.svg";
import Paystack from "../assets/paystack.png";
import { Heart, CircleHelp, ArrowUpDown, Share2 } from "lucide-react";
import { colorClasses } from "../constants/colorList";
import { Link } from "react-router";
import ReviewProduct from "./reviewProduct";
import RelatedProduct from "./relatedProduct";
import { products } from '../constants/shopCon';
import SizeGuide from "./sizeGuide";
import ProductDescription from "./productDescription";

export default function DetailsCom() {
  const img = [TestTwo, TestOne, TestThree];
  const [imgIndex, setImgIndex] = useState(img[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    setImgIndex(img[index]);
  };

  const rating = 4.5;
  const count = 100;
  const price = 12500;
  const salesPrice = 9500;
  const discount = Math.floor(((salesPrice - price) / price) * 100);
  const stock = 5;
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const estimated_delivery = "2-3 business days";

  const [activeWish, setActiveWish] = useState(false);
  const handleWishClick = () => {
    setActiveWish(!activeWish);
  };

  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const handleQuantityChange = (change) => {
    setSelectedQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", {
      selectedSize,
      selectedColor,
      selectedQuantity,
    });
  };

  const [activeTab, setActiveTab] = useState('description');

  const tabSwither = () => {
    switch (activeTab) {
      case 'description':
        return <ProductDescription />;
      case 'reviews':
        return <ReviewProduct />;
      case 'size-guide':
        return <SizeGuide />;
      default:
        return <ProductDescription />;
    }
  };

  return (
    <section>
      <div className="sm:px-5 m-auto w-full pb-25 lg:pb-35 flex flex-col lg:flex-row bg-white lg:pt-5 gap-2 justify-start items-start">

        {/** image */}
        <div className=" flex flex-col sm:flex-row w-full lg:w-[50%] gap-1 sm:gap-5 lg:gap-1  lg:h-fit lg:sticky top-0 sm:my-5 md:my-0">
          <div className="flex order-2 sm:order-1 sm:flex-col p-1 overflow-x-auto lg:overflow-y-auto gap-2 h-full w-full sm:w-auto">
            {img.map((item, index) => (
              <img
                key={index}
                className={`w-18 h-20 p-1 ${index === activeIndex ? "border border-pink-500" : ""
                  }`}
                src={item}
                alt=""
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <div className="w-full sm:max-w-[450px] h-auto order-1 sm:order-2">
            <HoverZoom
              src={imgIndex}
              zoomScale={2}
              className="w-full h-auto "
            />
          </div>
        </div>

        {/** details */}
        <div className="w-full lg:w-[50%] px-3 lg:px-5">

          {/** vendor */}
          <p className="font-header pb-2">Pesmic</p>

          {/** title and wishlist */}
          <div className="flex gap-3 justify-between w-full mb-2">
            <h1 className="text-lg lg:text-2xl font-normal text-start text-black">
              Long Hat Summer Lorem ipsum dolor sit amet.
            </h1>
            <button
              className={`p-2 w-fit h-fit border rounded-full cursor-pointer ${activeWish ? "border-accent" : "border-primary"
                }`}
              onClick={handleWishClick}
            >
              <Heart
                color="#FB00B5"
                size={15}
                strokeWidth={1.5}
                className="m-auto"
                fill={activeWish ? "#FB00B5" : "none"}
              />
            </button>
          </div>

          {/** stars and rating */}
          <div className="w-full flex gap-2 py-2 lg:py-0">
            <div className="text-accent lg:text-md ">
              {"★".repeat(Math.floor(rating))}
              {"☆".repeat(5 - Math.floor(rating))}
            </div>
            <span className="text-secondary">({count})</span>
          </div>

          {/** price and sales */}
          <div className="mt-5">
            {salesPrice ? (
              <div className="flex items-start gap-3">
                <div className="flex items-start">
                  <span className="text-secondary text-2xl lg:text-3xl font-header">
                    ₦{salesPrice}
                  </span>
                  <span className="text-secondary-deep font-jost line-through text-sm">
                    ₦{price}
                  </span>
                </div>
                <div>
                  <span className="text-white font-jost bg-accent rounded-2xl px-3 text-sm">
                    SAVE {discount}%{" "}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-secondary text-2xl lg:text-3xl font-header">
                ₦{price}
              </span>
            )}
          </div>

          {/** Stock */}
          <p className="pt-5 font-jost text-secondary-deep">
            Only <b>{stock}</b> item(s) left in stock!
          </p>
          <div className="w-full sm:w-3/4 lg:w-2/3 h-1 bg-border rounded-2xl mt-2">
            <div className="h-1 bg-accent rounded-2xl"
              style={{ width: `${(stock / 50) * 100}%` }}></div>
          </div>

          {/** Color */}
          <div className="mt-7">
            <p className="font-header text-secondary">
              <b>Color:</b> {selectedColor}{" "}
            </p>
            <div className="flex gap-2 mt-1">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorClick(color)}
                  className={`w-6 h-6 rounded-full border transition duration-200 cursor-pointer
                                ${selectedColor === color
                      ? "scale-110 border-4 border-accent"
                      : "border"
                    } `}
                  style={{ backgroundColor: colorClasses[color] || color }}
                />
              ))}
            </div>
          </div>

          {/** Size */}
          <div className="mt-7">
            <p className="font-header text-secondary">
              <b>Size:</b> {selectedSize}
            </p>
            <div className="flex gap-2 mt-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeClick(size)}
                  className={`px-3 py-1 border rounded-md cursor-pointer 
                            ${selectedSize === size
                      ? "border-accent"
                      : "border-border text-primary"
                    } 
                            bg-white transition duration-200`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/** qauntity and add to cart */}
          <div className="mt-7 w-full">
            <p className="font-header text-secondary">
              <b>Quantity:</b> {selectedQuantity}
            </p>
            <div className="flex w-full gap-3 mt-2">
              {/** qauntity */}
              <div className="flex gap-2 mt-2 p-1 border border-border rounded w-fit">
                <button
                  className="px-2 py-1 cursor-pointer"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="px-2 py-1 cursor-pointer">
                  {selectedQuantity}
                </span>
                <button
                  className="px-2 py-1 cursor-pointer"
                  onClick={() => handleQuantityChange(+1)}
                >
                  +
                </button>
              </div>
              {/** add to cart */}
              <div className="mt-2 flex-1">
                <button
                  className="card  cursor-pointer w-full bg-black text-white px-5 py-2 rounded font-header hover:bg-accent transition duration-200"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/** related, ask question, share */}
          <div className="flex gap-3 justify-between w-full mt-15 pb-5 border-b border-border">
            <div className="flex gap-3 text-black">
              <ArrowUpDown size={16} />
              <Link className="font-jost text-sm" to="#">
                Related
              </Link>
            </div>
            <div className="flex items-center gap-3 text-black">
              <CircleHelp size={16} />
              <Link className="font-jost text-sm" to="#">
                Ask a question
              </Link>
            </div>
            <div className="flex items-center gap-3 text-black">
              <Share2 size={16} />
              <Link className="font-jost text-sm" to="#">
                Share
              </Link>
            </div>
          </div>

          {/** delivery and shipping */}
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <img src={Truck} alt="" />
              <p className="font-header text-secondary">
                <b>Estimated Delivery: </b>
                {estimated_delivery}
              </p>
            </div>
            <div className="flex items-center gap-2 py-2">
              <img src={Packet} alt="" />
              <p className="font-header text-secondary">
                <b>Free shipping on all orders: </b>
                over ₦100,000
              </p>
            </div>
          </div>

          {/** payments method and garantees */}
          <div className="mt-10 w-full h-fit bg-bg-shop rounded ">
            <img
              src={Paystack}
              alt=""
              className="m-auto p-4 pb-2 h-[50px] lg:h-[60px] w-auto"
            />
            <p className="w-fit pb-4 font-header text-secondary m-auto">
              Guarantee safe & secure checkout
            </p>
          </div>
        </div>
      </div>

      {/** description, review, size guides */}
      <div className="w-full mt-1 ">
        <div className="bg-white w-full justify-center flex gap-15 text-md text-secondary font-header">
          <button
            className={` my-5 py-1 px-1 cursor-pointer ${activeTab === 'description' ? "border-b-2 border-accent" : ""}`}
            onClick={() => setActiveTab('description')}>
            Description
          </button>
          <button
            className={` my-5 py-1 px-1 cursor-pointer ${activeTab === 'reviews' ? "border-b-2 border-accent" : ""}`}
            onClick={() => setActiveTab('reviews')}>
            Reviews</button>
          <button
            className={` my-5 py-1 px-1 cursor-pointer ${activeTab === 'size-guide' ? "border-b-2 border-accent" : ""}`}
            onClick={() => setActiveTab('size-guide')}>
            Size Guide</button>
        </div>
        <div className=" mt-1 bg-white w-full">
          {tabSwither()}
        </div>
      </div>

      {/** Related Products */}
      <div className="w-full py-20 bg-white">
        <RelatedProduct title={'Related Products'} data={products} />
      </div>

      {/** Goes With */}
      <div className="w-full pb-20 bg-white">
        <RelatedProduct title={'Goes With'} data={products} />
      </div>
    </section>
  );
}
