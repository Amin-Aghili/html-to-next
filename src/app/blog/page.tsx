import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <ul className="list-inline list-unstyled">
              <li>
                <Link href="/">خانه</Link>
              </li>
              <li className="active">وبلاگ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body-content">
        <div className="container">
          <div className="row">
            <div className="blog-page">
              <div className="col-md-9">
                <div className="blog-post  wow fadeInUp">
                  <Link href="/blog/details">
                    <Image className="img-responsive" src="/assets/images/blog-post/blog_big_01.jpg" alt="" width={870} height={400} />
                  </Link>
                  <h1>
                    <Link href="/blog/details">لورم اپیسوم متن ساختگی</Link>
                  </h1>
                  <span className="author">فلانی</span>
                  <span className="review">6 دیدگاه</span>
                  <span className="date-time">14/06/2016 10.00AM</span>
                  <p>
                    لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                    گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                    گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
                  </p>
                  <Link href="#" className="btn btn-upper btn-primary read-more">
                    خواندن بیشتر
                  </Link>
                </div>
                <div className="blog-post outer-top-bd  wow fadeInUp">
                  <Link href="/blog/details">
                    <Image className="img-responsive" src="/assets/images/blog-post/blog_big_02.jpg" alt="" width={870} height={400} />
                  </Link>
                  <h1>
                    <Link href="/blog/details">لورم اپیسوم متن ساختگی</Link>
                  </h1>
                  <span className="author">فلانی</span>
                  <span className="review">6 دیدگاه</span>
                  <span className="date-time">14/06/2016 10.00AM</span>
                  <p>
                    لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                    گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                    گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
                  </p>
                  <Link href="#" className="btn btn-upper btn-primary read-more">
                    خواندن بیشتر
                  </Link>
                </div>
                <div className="blog-post outer-top-bd  wow fadeInUp">
                  <Link href="/blog/details">
                    <Image className="img-responsive" src="/assets/images/blog-post/blog_big_03.jpg" alt="" width={870} height={400} />
                  </Link>
                  <h1>
                    <Link href="/blog/details">لورم اپیسوم متن ساختگی</Link>
                  </h1>
                  <span className="author">فلانی</span>
                  <span className="review">6 دیدگاه</span>
                  <span className="date-time">14/06/2016 10.00AM</span>
                  <p>
                    لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
                    گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                    گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
                  </p>
                  <Link href="#" className="btn btn-upper btn-primary read-more">
                    خواندن بیشتر
                  </Link>
                </div>
              </div>
              <div className="col-md-3 sidebar">
                <div className="sidebar-module-container">
                  <div className="search-area outer-bottom-small">
                    <form>
                      <div className="control-group">
                        <input placeholder="جستجو در محتوای سایت... " className="search-field" />
                        <a href="#" className="search-button"></a>
                      </div>
                    </form>
                  </div>
                  <div className="home-banner outer-top-n outer-bottom-xs">
                    <Image src="/assets/images/banners/LHS-banner.jpg" alt="Image" width={270} height={270} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
