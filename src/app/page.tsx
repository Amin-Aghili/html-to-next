import Image from 'next/image';
import Link from 'next/link';
import HotDeals from '@/components/HotDeals';

export default function Home() {
  return (
    <div className="body-content outer-top-xs" id="top-banner-and-menu">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 homebanner-holder">
            <div id="hero">
              <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
                <div className="item" style={{ backgroundImage: 'url(/assets/images/sliders/01.jpg)' }}>
                  <div className="container-fluid">
                    <div className="caption bg-color vertical-center text-left">
                      <div className="slider-header fadeInDown-1">برترین برندها</div>
                      <div className="big-text fadeInDown-1"> مجموعه های جدید </div>
                      <div className="excerpt fadeInDown-2 hidden-xs">
                        <span>لورم اپیسوم متن ساختگی با تولید سادگی نامفهوم.</span>
                      </div>
                      <div className="button-holder fadeInDown-3">
                        <Link href="/single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">
                          هم اکنون بخرید
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item" style={{ backgroundImage: 'url(/assets/images/sliders/02.jpg)' }}>
                  <div className="container-fluid">
                    <div className="caption bg-color vertical-center text-left">
                      <div className="slider-header fadeInDown-1">تابستان 2016</div>
                      <div className="big-text fadeInDown-1">
                        مدل های <span className="highlight">زنانه</span>
                      </div>
                      <div className="excerpt fadeInDown-2 hidden-xs">
                        <span>لورم اپیسوم متن ساختگی با تولید سادگی نامفهوم</span>
                      </div>
                      <div className="button-holder fadeInDown-3">
                        <Link href="/single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">
                          هم اکنون بخرید
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-boxes wow fadeInUp">
              <div className="info-boxes-inner">
                <div className="row">
                  <div className="col-md-6 col-sm-4 col-lg-4">
                    <div className="info-box">
                      <div className="row">
                        <div className="col-xs-12">
                          <h4 className="info-box-heading green">ضمانت بازگشت وجه</h4>
                        </div>
                      </div>
                      <h6 className="text">ضمانت 30 روزه بازگشت وجه</h6>
                    </div>
                  </div>

                  <div className="hidden-md col-sm-4 col-lg-4">
                    <div className="info-box">
                      <div className="row">
                        <div className="col-xs-12">
                          <h4 className="info-box-heading green">حمل و نقل رایگان</h4>
                        </div>
                      </div>
                      <h6 className="text">برای سفارشات بیش از 100 تومان</h6>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-4 col-lg-4">
                    <div className="info-box">
                      <div className="row">
                        <div className="col-xs-12">
                          <h4 className="info-box-heading green">فروش ویژه</h4>
                        </div>
                      </div>
                      <h6 className="text">تخفیف 50 درصدی برای همه محصولات</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <HotDeals />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
