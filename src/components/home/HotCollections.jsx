import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import OwlCarousel from "@ntegral/react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SkeletonCard from "./SkeletonCard";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [carouselKey, setCarouselKey] = useState(0); 
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );

    setCollections(response.data);
    setLoading(false); 
    setCarouselKey((prevKey) => prevKey + 1); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    items: 4,
    loop: true,
    dots: false,
    margin: 30,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'><</div>",
      "<div class='nav-btn next-slide'>></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
            {loading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <div className="item" key={index}>
                    <SkeletonCard />
                  </div>
                ))
              : collections.map((collection) => (
                  <div className="item" key={collection.id}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <Link to={`/item-details/${collection.nftId}`}>
                          <img
                            src={collection.nftImage}
                            className="lazy img-fluid custom-img-size"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to="/author">
                          <img
                            className="lazy pp-coll"
                            src={collection.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{collection.title || "Pinky Ocean"}</h4>
                        </Link>
                        <span>ERC-{collection.code || "ERC-192"}</span>
                      </div>
                    </div>
                  </div>
                ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
