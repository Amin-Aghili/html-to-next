import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HotDeals = () => {
  return (
    <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
      <h3 className="section-title">پیشنهادات داغ</h3>
      <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss" style={{ opacity: 1, display: 'block' }}>
        <div className="owl-wrapper-outer">
          <div className="owl-wrapper" style={{ width: '1338px', left: '0px', display: 'block' }}>
            <div className="owl-item" style={{ width: '223px' }}>
              <div className="item">
                <div className="products">
                  <div className="hot-deal-wrapper">
                    <div className="image">
                      <Image src="/assets/images/hot-deals/p25.jpg" alt="" width={223} height={223} />
                    </div>
                    <div className="sale-offer-tag">
                      <span>
                        49%
                        <br />
                        تخفیف
                      </span>
                    </div>
                    <div className="timing-wrapper">
                      <div className="box-wrapper">
                        <div className="date box">
                          <span className="key">120</span>
                          <span className="value">روز</span>
                        </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="hour box">
                          <span className="key">20</span>
                          <span className="value">ساعت</span>
                        </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="minutes box">
                          <span className="key">36</span>
                          <span className="value">دقیقه</span>
                        </div>
                      </div>
                      <div className="box-wrapper hidden-md">
                        <div className="seconds box">
                          <span className="key">60</span>
                          <span className="value">ثانیه</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-left m-t-20">
                    <h3 className="name">
                      <Link href="/detail">لورم اپیسوم متن ساختگی</Link>
                    </h3>
                    <div className="rating rateit-small rateit"></div>
                    <div className="product-price">
                      <span className="price">$600.00</span>
                      <span className="price-before-discount">$800.00</span>
                    </div>
                  </div>
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                          <i className="fa fa-shopping-cart"></i>
                        </button>
                        <button className="btn btn-primary cart-btn" type="button">
                          افزودن به سبد
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
