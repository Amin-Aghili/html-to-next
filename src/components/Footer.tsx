import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer" className="footer color-bg">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">ارتباط با ما</h4>
              </div>
              <div className="module-body">
                <ul className="toggle-footer" style={{}}>
                  <li className="media">
                    <div className="pull-left">
                      <span className="icon fa-stack fa-lg">
                        <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <p>ایران، خوزستان، دزفول، خیابان نود و هشت</p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left">
                      <span className="icon fa-stack fa-lg">
                        <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <p>
                        +(888) 123-4567
                        <br />
                        +(888) 456-7890
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="pull-left">
                      <span className="icon fa-stack fa-lg">
                        <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <span>
                        <a href="#">Info@FlipMart.com</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">صفحات کمکی</h4>
              </div>
              <div className="module-body">
                <ul className="list-unstyled">
                  <li className="first">
                    <a href="#" title="حساب من">
                      حساب کاربری من
                    </a>
                  </li>
                  <li>
                    <a href="#" title="درباره ما">
                      تاریخچه سفارشات
                    </a>
                  </li>
                  <li>
                    <a href="#" title="پرسش های متداول">
                      پرسش های متداول
                    </a>
                  </li>
                  <li>
                    <a href="#" title="پیشنهادات محبوب">
                      پیشنهادات
                    </a>
                  </li>
                  <li className="last">
                    <a href="#" title="سفارش من کجاست؟">
                      پشتیبانی
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">صفحات اصلی</h4>
              </div>
              <div className="module-body">
                <ul className="list-unstyled">
                  <li className="first">
                    <a title="حساب من" href="#">
                      درباره ما
                    </a>
                  </li>
                  <li>
                    <a title="اطلاعات" href="#">
                      خدمات
                    </a>
                  </li>
                  <li>
                    <a title="درباره ما" href="#">
                      کمپانی
                    </a>
                  </li>
                  <li>
                    <a title="روابط سرمایه گذار" href="#">
                      روابط سرمایه گذار
                    </a>
                  </li>
                  <li className="last">
                    <a title="جستجوی پیشرفته" href="#">
                      جستجوی پیشرفته
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="module-heading">
                <h4 className="module-title">چرا انتخاب ما</h4>
              </div>
              <div className="module-body">
                <ul className="list-unstyled">
                  <li className="first">
                    <a href="#" title="درباره ما">
                      راهنمای خرید
                    </a>
                  </li>
                  <li>
                    <a href="#" title="وبلاگ">
                      وبلاگ
                    </a>
                  </li>
                  <li>
                    <a href="#" title="کمپانی">
                      کمپانی
                    </a>
                  </li>
                  <li>
                    <a href="#" title="روابط سرمایه گذار">
                      روابط سرمایه گذار
                    </a>
                  </li>
                  <li className=" last">
                    <a href="contact-us.html" title="ارتباط">
                      ارتباط با ما
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="container">
          <div className="col-xs-12 col-sm-6 no-padding social">
            <ul className="link">
              <li className="fb pull-left">
                <a target="_blank" rel="nofollow" href="#" title="Facebook"></a>
              </li>
              <li className="tw pull-left">
                <a target="_blank" rel="nofollow" href="#" title="Twitter"></a>
              </li>
              <li className="googleplus pull-left">
                <a target="_blank" rel="nofollow" href="#" title="GooglePlus"></a>
              </li>
              <li className="rss pull-left">
                <a target="_blank" rel="nofollow" href="#" title="RSS"></a>
              </li>
              <li className="pintrest pull-left">
                <a target="_blank" rel="nofollow" href="#" title="PInterest"></a>
              </li>
              <li className="linkedin pull-left">
                <a target="_blank" rel="nofollow" href="#" title="Linkedin"></a>
              </li>
              <li className="youtube pull-left">
                <a target="_blank" rel="nofollow" href="#" title="Youtube"></a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 no-padding">
            <div className="clearfix payment-methods">
              <ul>
                <li>
                  <Image src="/assets/images/payments/1.png" alt="payment" width={40} height={30} />
                </li>
                <li>
                  <Image src="/assets/images/payments/2.png" alt="payment" width={40} height={30} />
                </li>
                <li>
                  <Image src="/assets/images/payments/3.png" alt="payment" width={40} height={30} />
                </li>
                <li>
                  <Image src="/assets/images/payments/4.png" alt="payment" width={40} height={30} />
                </li>
                <li>
                  <Image src="/assets/images/payments/5.png" alt="payment" width={40} height={30} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
