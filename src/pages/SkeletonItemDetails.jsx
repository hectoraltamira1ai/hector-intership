import React from "react";
import Skeleton from "../components/UI/Skeleton"; 
import '../css/styles/skeletonItemDetails.css'; 

const SkeletonItemDetails = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt-5 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <Skeleton width="100%" height="630px" borderRadius="8px" />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <Skeleton width="60%" height="40px" borderRadius="4px" className="mb-3" />
                  <div className="mt-3 mb-3">
                    <Skeleton width="20%" height="20px" borderRadius="4px" className="mr-3" />
                    <Skeleton width="20%" height="20px" borderRadius="4px" />
                  </div>
                  <Skeleton width="100%" height="80px" borderRadius="4px" className="mb-3" />
                  <Skeleton width="100px" height="17px" borderRadius="4px" className="mb-3" />
                  <div className="d-flex flex-row mt-3">
                    <Skeleton width="50px" height="50px" borderRadius="50%" />
                    <Skeleton width="107px" height="20px" borderRadius="4px" className="ml-3" />
                  </div>
                  <Skeleton width="100px" height="17px" borderRadius="4px" className="mb-3" />
                  <div className="d-flex flex-row mt-3">
                    <Skeleton width="50px" height="50px" borderRadius="50%" />
                    <Skeleton width="107px" height="20px" borderRadius="4px" className="ml-3" />
                  </div>
                  <div className="mt-3">
                    <Skeleton width="24px" height="24px" borderRadius="50%" />
                    <Skeleton width="62px" height="37px" borderRadius="4px" className="ml-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkeletonItemDetails;
