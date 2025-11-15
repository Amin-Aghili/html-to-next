'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="header-style-1">
      <div className="top-bar animate-dropdown">
        <div className="container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                <li>
                  <Link href="/profile">
                    <i className="icon fa fa-user"></i>
                    حساب من
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist">
                    <i className="icon fa fa-heart"></i>
                    علاقه مندیها
                  </Link>
                </li>
                <li>
                  <Link href="/shopping-cart">
                    <i className="icon fa fa-shopping-cart"></i>
                    سبد من
                  </Link>
                </li>
                <li>
                  <Link href="/checkout">
                    <i className="icon fa fa-check"></i>
                    پرداختی ها
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in">
                    <i className="icon fa fa-lock"></i>
                    ورود
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cnt-block">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small">
                  <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                    <span className="value">دلار </span>
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">دلار</a>
                    </li>
                    <li>
                      <a href="#">پوند</a>
                    </li>
                    <li>
                      <a href="#">تومان</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-small">
                  <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                    <span className="value">انگلیسی </span>
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">انگلیسی</a>
                    </li>
                    <li>
                      <a href="#">فرانسوی</a>
                    </li>
                    <li>
                      <a href="#">آلمانی</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ThemeSwitcher />
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
              <div className="logo">
                <Link href="/">
                  <Image src="/assets/images/logo.png" alt="logo" width={200} height={50} />
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
              <div className="search-area">
                <form>
                  <div className="control-group">
                    <ul className="categories-filter animate-dropdown">
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="category.html">
                          دسته بندیها <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li className="menu-header">کامپیوتر</li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - لباس
                            </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - الکترونیک
                            </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - کفش
                            </a>
                          </li>
                          <li role="presentation">
                            <a role="menuitem" tabIndex={-1} href="category.html">
                              - ساعت
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <input className="search-field" placeholder="جستجو در محتوای سایت ..." />
                    <a className="search-button" href="#"></a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">
              <div className="dropdown dropdown-cart">
                <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                  <div className="items-cart-inner">
                    <div className="basket">
                      <i className="glyphicon glyphicon-shopping-cart"></i>
                    </div>
                    <div className="basket-item-count">
                      <span className="count">2</span>
                    </div>
                    <div className="total-price-basket">
                      <span className="lbl">سبد -</span>
                      <span className="total-price">
                        <span className="sign">$</span>
                        <span className="value">600.00</span>
                      </span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="cart-item product-summary">
                      <div className="row">
                        <div className="col-xs-4">
                          <div className="image">
                            <Link href="/detail">
                              <Image src="/assets/images/cart.jpg" alt="" width={100} height={100} />
                            </Link>
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <h3 className="name">
                            <a href="index.php?page-detail">نمونه محصول</a>
                          </h3>
                          <div className="price">$600.00</div>
                        </div>
                        <div className="col-xs-1 action">
                          <a href="#">
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <hr />
                    <div className="clearfix cart-total">
                      <div className="pull-right">
                        <span className="text">زیرمجموع :</span>
                        <span className="price">$600.00</span>
                      </div>
                      <div className="clearfix"></div>
                      <Link href="/checkout" className="btn btn-upper btn-primary btn-block m-t-20">
                        پرداخت
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav animate-dropdown">
        <div className="container">
          <div className="yamm navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                data-target="#mc-horizontal-menu-collapse"
                data-toggle="collapse"
                className="navbar-toggle collapsed"
                type="button"
              >
                <span className="sr-only">تعویض ناوبری</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="nav-bg-class">
              <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                <div className="nav-outer">
                  <ul className="nav navbar-nav">
                    <li className="active dropdown yamm-fw">
                      <Link href="/" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">
                        صفحه اصلی
                      </Link>
                    </li>
                    <li className="dropdown yamm mega-menu">
                      <Link href="/category" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">
                        لباس
                      </Link>
                    </li>
                    <li className="dropdown mega-menu">
                      <Link href="/category" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">
                        لوازم الکترونیکی
                        <span className="menu-label hot-menu hidden-xs">داغ</span>
                      </Link>
                    </li>
                    <li className="dropdown hidden-sm">
                      <Link href="/category">
                        سلامت و زیبایی
                        <span className="menu-label new-menu hidden-xs">جدید</span>
                      </Link>
                    </li>
                    <li className="dropdown hidden-sm">
                      <Link href="/category">ساعت</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="/category">جواهر</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="/category">کفش</Link>
                    </li>
                    <li className="dropdown">
                      <Link href="/category">دخترانه</Link>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                        صفحات
                      </a>
                    </li>
                    <li className="dropdown  navbar-right special-menu">
                      <a href="#">پیشنهادات روز</a>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
