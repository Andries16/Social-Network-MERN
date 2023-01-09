import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getPosts} from './actions/posts';
import Posts from "./Components/Posts/Posts";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
const App = () => {

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])

    return (
        <div>
            <Header></Header>
            <main>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center d-lg-none">
                                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                                    <i className="btn btn-primary fw-bold fa-solid fa-sliders-h"/>
                                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
                                </button>
                            </div>
                            <nav className="navbar navbar-expand-lg mx-0">
                                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasSideNavbar">
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset ms-auto"
                                                data-bs-dismiss="offcanvas" aria-label="Close"/>
                                    </div>
                                    <div className="offcanvas-body d-block px-2 px-lg-0">
                                        <div className="card overflow-hidden">
                                            <div className="h-50px" style={{
                                                backgroundImage: 'url(assets/images/bg/01.jpg)',
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'
                                            }}/>
                                            <div className="card-body pt-0">
                                                <div className="text-center">
                                                    <div className="avatar avatar-lg mt-n5 mb-3">
                                                        <a href="#!"><img
                                                            className="avatar-img rounded border border-white border-3"
                                                            src="assets/images/avatar/07.jpg" alt=""/></a>
                                                    </div>
                                                    <h5 className="mb-0"><a href="#!">Sam Lanson </a></h5>
                                                    <small>Web Developer at Webestica</small>
                                                    <p className="mt-3">I'd love to change the world, but they won’t
                                                        give me the source code.</p>
                                                    <div className="hstack gap-2 gap-xl-3 justify-content-center">
                                                        <div>
                                                            <h6 className="mb-0">256</h6>
                                                            <small>Post</small>
                                                        </div>
                                                        <div className="vr"/>
                                                        <div>
                                                            <h6 className="mb-0">2.5K</h6>
                                                            <small>Followers</small>
                                                        </div>
                                                        <div className="vr"/>
                                                        <div>
                                                            <h6 className="mb-0">365</h6>
                                                            <small>Following</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="my-profile.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/home-outline-filled.svg"
                                                            alt=""/><span>Feed </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="my-profile-connections.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/person-outline-filled.svg"
                                                            alt=""/><span>Connections </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="blog.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/earth-outline-filled.svg"
                                                            alt=""/><span>Latest News </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="events.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/calendar-outline-filled.svg"
                                                            alt=""/><span>Events </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="groups.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/chat-outline-filled.svg"
                                                            alt=""/><span>Groups </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="notifications.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/notification-outlined-filled.svg"
                                                            alt=""/><span>Notifications </span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="settings.html"> <img
                                                            className="me-2 h-20px fa-fw"
                                                            src="assets/images/icon/cog-outline-filled.svg"
                                                            alt=""/><span>Settings </span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-footer text-center py-2">
                                                <a className="btn btn-link btn-sm" href="my-profile.html">View
                                                    Profile </a>
                                            </div>
                                        </div>
                                        <ul className="nav small mt-4 justify-content-center lh-1">
                                            <li className="nav-item">
                                                <a className="nav-link" href="my-profile-about.html">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="settings.html">Settings</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" 
                                                   href="https://support.webestica.com/login">Support </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"  href="docs/index.html">Docs </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="help.html">Help</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link"
                                                   href="privacy-and-terms.html">Privacy &amp; terms</a>
                                            </li>
                                        </ul>
                                        <p className="small text-center mt-1">©2022 <a className="text-body"
                                                                                       
                                                                                       href="https://www.webestica.com/"> Webestica </a>
                                        </p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-8 col-lg-6 vstack gap-4">



                            <div className="tiny-slider arrow-hover overflow-hidden">
                                <div className="tns-outer" id="tns1-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1 to 5</span>  of 6</div><div id="tns1-mw" className="tns-ovh"><div className="tns-inner" id="tns1-iw"><div className="tiny-slider-inner ms-n4  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" data-arrow="true" data-dots="true" data-loop="false" data-autoplay="false" data-items-xl={4} data-items-lg={3} data-items-md={3} data-items-sm={3} data-items-xs={2} data-gutter={12} data-edge={30} id="tns1" style={{transitionDuration: '0s', transform: 'translate3d(0%, 0px, 0px)'}}>
                                    {/* Slider items */}
                                    <div className="tns-item tns-slide-active" id="tns1-item0">
                                        {/* Card add story START */}
                                        <div className="card border border-2 border-dashed h-150px shadow-none d-flex align-items-center justify-content-center text-center">
                                            <div>
                                                <a className="stretched-link btn btn-light rounded-circle icon-md" href="#!"><i className="fa-solid fa-plus" /></a>
                                                <h6 className="mt-2 mb-0 small">Post a Story</h6>
                                            </div>
                                        </div>
                                        {/* Card add story END */}
                                    </div>
                                    {/* Slider items */}
                                    <div className="tns-item tns-slide-active" id="tns1-item1">
                                        {/* Card START */}
                                        <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{backgroundImage: 'url(assets/images/post/1by1/02.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                                            <div className="card-img-overlay d-flex align-items-center p-2">
                                                <div className="w-100 mt-auto">
                                                    {/* Name */}
                                                    <a href="#!" className="stretched-link text-white small">Judy Nguyen</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card END */}
                                    </div>
                                    {/* Slider items */}
                                    <div className="tns-item tns-slide-active" id="tns1-item2">
                                        {/* Card START */}
                                        <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{backgroundImage: 'url(assets/images/post/1by1/03.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                                            <div className="card-img-overlay d-flex align-items-center p-2">
                                                <div className="w-100 mt-auto">
                                                    {/* Name */}
                                                    <a href="#!" className="stretched-link text-white small">Samuel Bishop</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card END */}
                                    </div>
                                    {/* Slider items */}
                                    <div className="tns-item tns-slide-active" id="tns1-item3">
                                        {/* Card START */}
                                        <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{backgroundImage: 'url(assets/images/post/1by1/04.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                                            <div className="card-img-overlay d-flex align-items-center p-2">
                                                <div className="w-100 mt-auto">
                                                    {/* Name */}
                                                    <a href="#!" className="stretched-link text-white small">Carolyn Ortiz</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card END */}
                                    </div>
                                    {/* Slider items */}
                                    <div className="tns-item tns-slide-active" id="tns1-item4">
                                        {/* Card START */}
                                        <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{backgroundImage: 'url(assets/images/post/1by1/05.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                                            <div className="card-img-overlay d-flex align-items-center p-2">
                                                <div className="w-100 mt-auto">
                                                    {/* Name */}
                                                    <a href="#!" className="stretched-link text-white small">Amanda Reed</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card END */}
                                    </div>
                                    {/* Slider items */}
                                    <div className="tns-item" id="tns1-item5" aria-hidden="true" tabIndex={-1}>
                                        {/* Card START */}
                                        <div className="card card-overlay-bottom border-0 position-relative h-150px" style={{backgroundImage: 'url(assets/images/post/1by1/01.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
                                            <div className="card-img-overlay d-flex align-items-center p-2">
                                                <div className="w-100 mt-auto">
                                                    {/* Name */}
                                                    <a href="#!" className="stretched-link text-white small">Lori Stevens</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Card END */}
                                    </div>
                                </div></div></div><div className="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav={0} aria-controls="tns1" style={{}} aria-label="Carousel Page 1 (Current Slide)" className="tns-nav-active" /><button type="button" data-nav={1} tabIndex={-1} aria-controls="tns1" style={{}} aria-label="Carousel Page 2" /><button type="button" data-nav={2} tabIndex={-1} aria-controls="tns1" style={{display: 'none'}} aria-label="Carousel Page 3" /><button type="button" data-nav={3} tabIndex={-1} aria-controls="tns1" style={{display: 'none'}} aria-label="Carousel Page 4" /><button type="button" data-nav={4} tabIndex={-1} aria-controls="tns1" style={{display: 'none'}} aria-label="Carousel Page 5" /><button type="button" data-nav={5} tabIndex={-1} aria-controls="tns1" style={{display: 'none'}} aria-label="Carousel Page 6" /></div><div className="tns-controls" aria-label="Carousel Navigation" tabIndex={0}><button type="button" data-controls="prev" tabIndex={-1} aria-controls="tns1" disabled><i className="fa-solid fa-chevron-left" /></button><button type="button" data-controls="next" tabIndex={-1} aria-controls="tns1"><i className="fa-solid fa-chevron-right" /></button></div></div>
                            </div>
                            <Form></Form>
                            <Posts></Posts>
                            <a href="#!" role="button" className="btn btn-loader btn-primary-soft"
                               data-bs-toggle="button" aria-pressed="true">
                                <span className="load-text"> Load more </span>
                                <div className="load-icon">
                                    <div className="spinner-grow spinner-grow-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <div className="row g-4">
                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header pb-0 border-0">
                                            <h5 className="card-title mb-0">Who to follow</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar">
                                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/04.jpg" alt=""/></a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Judy Nguyen </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                                                   href="/"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar avatar-story">
                                                    <a href="#!"> <img className="avatar-img rounded-circle"
                                                                       src="assets/images/avatar/05.jpg" alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Amanda Reed </a>
                                                    <p className="mb-0 small text-truncate">Web Developer</p>
                                                </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                                                   href="/"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar">
                                                    <a href="/"> <img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/11.jpg" alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Billy Vasquez </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                <a className="btn btn-primary rounded-circle icon-md ms-auto"
                                                   href="/"><i className="bi bi-person-check-fill"> </i></a>
                                            </div>
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar">
                                                    <a href="/"> <img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/01.jpg" alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Lori Ferguson </a>
                                                    <p className="mb-0 small text-truncate">Web Developer at
                                                        Webestica</p>
                                                </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                                                   href="/"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            <div className="hstack gap-2 mb-3">
                                                <div className="avatar">
                                                    <a href="/"> <img className="avatar-img rounded-circle"
                                                                      src="assets/images/avatar/placeholder.jpg"
                                                                      alt=""/> </a>
                                                </div>
                                                <div className="overflow-hidden">
                                                    <a className="h6 mb-0" href="#!">Carolyn Ortiz </a>
                                                    <p className="mb-0 small text-truncate">News anchor</p>
                                                </div>
                                                <a className="btn btn-primary-soft rounded-circle icon-md ms-auto"
                                                   href="/"><i className="fa-solid fa-plus"> </i></a>
                                            </div>
                                            <div className="d-grid mt-3">
                                                <a className="btn btn-sm btn-primary-soft" href="#!">View more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-12">
                                    <div className="card">
                                        <div className="card-header pb-0 border-0">
                                            <h5 className="card-title mb-0">Today’s news</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Ten questions you
                                                    should answer truthfully</a></h6>
                                                <small>2hr</small>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Five unbelievable facts
                                                    about money</a></h6>
                                                <small>3hr</small>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Best Pinterest Boards
                                                    for learning about business</a></h6>
                                                <small>4hr</small>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0"><a href="blog-details.html">Skills that you can
                                                    learn from business</a></h6>
                                                <small>6hr</small>
                                            </div>
                                            <a href="#!" role="button"
                                               className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                                               data-bs-toggle="button" aria-pressed="true">
                                                <div className="spinner-dots me-2">
                                                    <span className="spinner-dot"/>
                                                    <span className="spinner-dot"/>
                                                    <span className="spinner-dot"/>
                                                </div>
                                                View all latest news
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="d-none d-lg-block">
                <a className="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5"
                   data-bs-toggle="offcanvas" href="#offcanvasChat" role="button" aria-controls="offcanvasChat">
                    <i className="bi bi-chat-left-text-fill"/>
                </a>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1}
                     id="offcanvasChat">
                    <div className="offcanvas-header d-flex justify-content-between">
                        <h5 className="offcanvas-title">Messaging</h5>
                        <div className="d-flex">
                            <a href="/" className="btn btn-secondary-soft-hover py-1 px-2">
                                <i className="bi bi-pencil-square"/>
                            </a>
                            <div className="dropdown">
                                <a href="/" className="btn btn-secondary-soft-hover py-1 px-2" id="chatAction"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots"/>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatAction">
                                    <li><a className="dropdown-item" href="/"> <i
                                        className="bi bi-check-square fa-fw pe-2"/>Mark all as read</a></li>
                                    <li><a className="dropdown-item" href="/"> <i className="bi bi-gear fa-fw pe-2"/>Chat
                                        setting </a></li>
                                    <li><a className="dropdown-item" href="/"> <i className="bi bi-bell fa-fw pe-2"/>Disable
                                        notifications</a></li>
                                    <li><a className="dropdown-item" href="/"> <i
                                        className="bi bi-volume-up-fill fa-fw pe-2"/>Message sounds</a></li>
                                    <li><a className="dropdown-item" href="/"> <i
                                        className="bi bi-slash-circle fa-fw pe-2"/>Block setting</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/"> <i className="bi bi-people fa-fw pe-2"/>Create
                                        a group chat</a></li>
                                </ul>
                            </div>
                            <a href="/" className="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="offcanvas"
                               aria-label="Close">
                                <i className="fa-solid fa-xmark"/>
                            </a>
                        </div>
                    </div>
                    <div className="offcanvas-body pt-0 custom-scrollbar">
                        <form className="rounded position-relative">
                            <input className="form-control ps-5 bg-light" type="search" placeholder="Search..."
                                   aria-label="Search"/>
                            <button
                                className="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y"
                                type="submit"><i className="bi bi-search fs-5"> </i></button>
                        </form>
                        <ul className="list-unstyled">
                            <li className="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
                                data-target="chatToast">
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Frances Guerrero </a>
                                    <div className="small text-secondary text-truncate">Frances sent a photo.</div>
                                </div>
                                <div className="small ms-auto text-nowrap"> Just now</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
                                data-target="chatToast2">
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Lori Ferguson </a>
                                    <div className="small text-secondary text-truncate">You missed a call form
                                        Carolyn
                                    </div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 1min</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar status-offline">
                                    <img className="avatar-img rounded-circle"
                                         src="assets/images/avatar/placeholder.jpg" alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Samuel Bishop </a>
                                    <div className="small text-secondary text-truncate">Day sweetness why cordially
                                    </div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 2min</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Dennis Barrett </a>
                                    <div className="small text-secondary text-truncate">Happy birthday</div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 10min</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar avatar-story status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Judy Nguyen </a>
                                    <div className="small text-secondary text-truncate">Thank you!</div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 2hrs</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Carolyn Ortiz </a>
                                    <div className="small text-secondary text-truncate">Greetings from Webestica.</div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 1 day</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="flex-shrink-0 avatar">
                                    <ul className="avatar-group avatar-group-four">
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xxs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg"
                                                 alt="avatar"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link text-truncate d-inline-block" href="#!">Frances,
                                        Lori, Amanda, Lawson </a>
                                    <div className="small text-secondary text-truncate">Btw are you looking for job
                                        change?
                                    </div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 4 day</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar status-offline">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Bryan Knight </a>
                                    <div className="small text-secondary text-truncate">if you are available to
                                        discuss
                                    </div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 6 day</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Louis Crawford </a>
                                    <div className="small text-secondary text-truncate">Congrats on your work
                                        anniversary!
                                    </div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 1 day</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Jacqueline Miller </a>
                                    <div className="small text-secondary text-truncate">No sorry, Thanks.</div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 15, dec</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Amanda Reed </a>
                                    <div className="small text-secondary text-truncate">Interested can share CV at.
                                    </div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 18, dec</div>
                            </li>
                            <li className="mt-3 hstack gap-3 align-items-center position-relative">
                                <div className="avatar status-online">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg"
                                         alt=""/>
                                </div>
                                <div className="overflow-hidden">
                                    <a className="h6 mb-0 stretched-link" href="#!">Larry Lawson </a>
                                    <div className="small text-secondary text-truncate">Hope you're doing well and
                                        Safe.
                                    </div>
                                </div>
                                <div className="small ms-auto text-nowrap"> 20, dec</div>
                            </li>
                            <li className="mt-3 d-grid">
                                <a className="btn btn-primary-soft" href="messaging.html"> See all in messaging </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div aria-live="polite" aria-atomic="true" className="position-relative">
                    <div className="toast-container toast-chat d-flex gap-3 align-items-end">
                        <div id="chatToast" className="toast mb-0 bg-mode" role="alert" aria-live="assertive"
                             aria-atomic="true" data-bs-autohide="false">
                            <div className="toast-header bg-mode">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 avatar me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                                            <div className="small text-secondary"><i
                                                className="fa-solid fa-circle text-success me-1"/>Online
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="dropdown">
                                            <a className="btn btn-secondary-soft-hover py-1 px-2" href="/"
                                               id="chatcoversationDropdown" data-bs-toggle="dropdown"
                                               data-bs-auto-close="outside" aria-expanded="false"><i
                                                className="bi bi-three-dots-vertical"/></a>
                                            <ul className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="chatcoversationDropdown">
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-camera-video me-2 fw-icon"/>Video call</a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-telephone me-2 fw-icon"/>Audio call</a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-trash me-2 fw-icon"/>Delete </a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-chat-square-text me-2 fw-icon"/>Mark as unread</a>
                                                </li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-volume-up me-2 fw-icon"/>Muted</a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-archive me-2 fw-icon"/>Archive</a></li>
                                                <li className="dropdown-divider"/>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-flag me-2 fw-icon"/>Report</a></li>
                                            </ul>
                                        </div>
                                        <a className="btn btn-secondary-soft-hover py-1 px-2" data-bs-toggle="collapse"
                                           href="#collapseChat" aria-expanded="false" aria-controls="collapseChat"><i
                                            className="bi bi-dash-lg"/></a>
                                        <button className="btn btn-secondary-soft-hover py-1 px-2"
                                                data-bs-dismiss="toast" aria-label="Close"><i
                                            className="fa-solid fa-xmark"/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="toast-body collapse show" id="collapseChat">
                                <div className="chat-conversation-content custom-scrollbar h-200px">
                                    <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div
                                                        className="bg-light text-secondary p-2 px-3 rounded-2">Applauded
                                                        no discovery
                                                    </div>
                                                    <div className="small my-2">6:15 AM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">With
                                                    pleasure
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">Please
                                                        find the attached
                                                    </div>
                                                    <div className="small my-2">12:16 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">How
                                                        promotion excellent curiosity
                                                    </div>
                                                    <div className="small my-2">3:22 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">And sir dare
                                                    view.
                                                </div>
                                                <div className="d-flex my-2">
                                                    <div className="small text-secondary">5:35 PM</div>
                                                    <div className="small ms-2"><i className="fa-solid fa-check"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center small my-2">2 New Messages</div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-3 rounded-2">
                                                        <div className="typing d-flex align-items-center">
                                                            <div className="dot"/>
                                                            <div className="dot"/>
                                                            <div className="dot"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <textarea className="form-control mb-sm-0 mb-3" placeholder="Type a message"
                                              rows={1} defaultValue={""}/>
                                    <div className="d-sm-flex align-items-end mt-2">
                                        <button className="btn btn-sm btn-danger-soft me-2"><i
                                            className="fa-solid fa-face-smile fs-6"/></button>
                                        <button className="btn btn-sm btn-secondary-soft me-2"><i
                                            className="fa-solid fa-paperclip fs-6"/></button>
                                        <button className="btn btn-sm btn-success-soft me-2"> Gif</button>
                                        <button className="btn btn-sm btn-primary ms-auto"> Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="chatToast2" className="toast mb-0 bg-mode" role="alert" aria-live="assertive"
                             aria-atomic="true" data-bs-autohide="false">
                            <div className="toast-header bg-mode">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 avatar me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0 mt-1">Lori Ferguson</h6>
                                            <div className="small text-secondary"><i
                                                className="fa-solid fa-circle text-success me-1"/>Online
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="dropdown">
                                            <a className="btn btn-secondary-soft-hover py-1 px-2" href="/"
                                               id="chatcoversationDropdown2" role="button" data-bs-toggle="dropdown"
                                               data-bs-auto-close="outside" aria-expanded="false"><i
                                                className="bi bi-three-dots-vertical"/></a>
                                            <ul className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="chatcoversationDropdown2">
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-camera-video me-2 fw-icon"/>Video call</a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-telephone me-2 fw-icon"/>Audio call</a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-trash me-2 fw-icon"/>Delete </a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-chat-square-text me-2 fw-icon"/>Mark as unread</a>
                                                </li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-volume-up me-2 fw-icon"/>Muted</a></li>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-archive me-2 fw-icon"/>Archive</a></li>
                                                <li className="dropdown-divider"/>
                                                <li><a className="dropdown-item" href="/"><i
                                                    className="bi bi-flag me-2 fw-icon"/>Report</a></li>
                                            </ul>
                                        </div>
                                        <a className="btn btn-secondary-soft-hover py-1 px-2" data-bs-toggle="collapse"
                                           href="#collapseChat2" role="button" aria-expanded="false"
                                           aria-controls="collapseChat2"><i className="bi bi-dash-lg"/></a>
                                        <button className="btn btn-secondary-soft-hover py-1 px-2"
                                                data-bs-dismiss="toast" aria-label="Close"><i
                                            className="fa-solid fa-xmark"/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="toast-body collapse show" id="collapseChat2">
                                <div className="chat-conversation-content custom-scrollbar h-200px">
                                    <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div
                                                        className="bg-light text-secondary p-2 px-3 rounded-2">Applauded
                                                        no discovery
                                                    </div>
                                                    <div className="small my-2">6:15 AM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">With
                                                    pleasure
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">Please
                                                        find the attached
                                                    </div>
                                                    <div className="small my-2">12:16 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-2 px-3 rounded-2">How
                                                        promotion excellent curiosity
                                                    </div>
                                                    <div className="small my-2">3:22 PM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end text-end mb-1">
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-end">
                                                <div className="bg-primary text-white p-2 px-3 rounded-2">And sir dare
                                                    view.
                                                </div>
                                                <div className="d-flex my-2">
                                                    <div className="small text-secondary">5:35 PM</div>
                                                    <div className="small ms-2"><i className="fa-solid fa-check"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center small my-2">2 New Messages</div>
                                    <div className="d-flex mb-1">
                                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                                 alt=""/>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="w-100">
                                                <div className="d-flex flex-column align-items-start">
                                                    <div className="bg-light text-secondary p-3 rounded-2">
                                                        <div className="typing d-flex align-items-center">
                                                            <div className="dot"/>
                                                            <div className="dot"/>
                                                            <div className="dot"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <textarea className="form-control mb-sm-0 mb-3" placeholder="Type a message"
                                              rows={1} defaultValue={""}/>
                                    <div className="d-sm-flex align-items-end mt-2">
                                        <button className="btn btn-sm btn-danger-soft me-2"><i
                                            className="fa-solid fa-face-smile fs-6"/></button>
                                        <button className="btn btn-sm btn-secondary-soft me-2"><i
                                            className="fa-solid fa-paperclip fs-6"/></button>
                                        <button className="btn btn-sm btn-success-soft me-2"> Gif</button>
                                        <button className="btn btn-sm btn-primary ms-auto"> Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalCreateFeed" tabIndex={-1} aria-labelledby="modalLabelCreateFeed"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreateFeed">Create post</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                         alt=""/>
                                </div>
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={4}
                                              placeholder="Share your thoughts..." autoFocus defaultValue={""}/>
                                </form>
                            </div>
                            <div className="hstack gap-2">
                                <a className="icon-md bg-success bg-opacity-10 text-success rounded-circle" href="/"
                                   data-bs-toggle="tooltip" data-bs-placement="top" title="Photo"> <i
                                    className="bi bi-image-fill"/> </a>
                                <a className="icon-md bg-info bg-opacity-10 text-info rounded-circle" href="/"
                                   data-bs-toggle="tooltip" data-bs-placement="top" title="Video"> <i
                                    className="bi bi-camera-reels-fill"/> </a>
                                <a className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle" href="/"
                                   data-bs-toggle="tooltip" data-bs-placement="top" title="Events"> <i
                                    className="bi bi-calendar2-event-fill"/> </a>
                                <a className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle" href="/"
                                   data-bs-toggle="tooltip" data-bs-placement="top" title="Feeling/Activity"> <i
                                    className="bi bi-emoji-smile-fill"/> </a>
                                <a className="icon-md bg-light text-secondary rounded-circle" href="/"
                                   data-bs-toggle="tooltip" data-bs-placement="top" title="Check in"> <i
                                    className="bi bi-geo-alt-fill"/> </a>
                                <a className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle" href="/"
                                   data-bs-toggle="tooltip" data-bs-placement="top" title="Tag people on top"> <i
                                    className="bi bi-tag-fill"/> </a>
                            </div>
                        </div>
                        <div className="modal-footer row justify-content-between">
                            <div className="col-lg-3">
                                <select className="form-select js-choice choice-select-text-none" data-position="top"
                                        data-search-enabled="false">
                                    <option value="PB">Public</option>
                                    <option value="PV">Friends</option>
                                    <option value="PV">Only me</option>
                                    <option value="PV">Custom</option>
                                </select>
                            </div>
                            <div className="col-lg-8 text-sm-end">
                                <button type="button" className="btn btn-danger-soft me-2"><i
                                    className="bi bi-camera-video-fill pe-1"/> Live video
                                </button>
                                <button type="button" className="btn btn-success-soft">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="feedActionPhoto" tabIndex={-1} aria-labelledby="feedActionPhotoLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                         alt=""/>
                                </div>
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={2}
                                              placeholder="Share your thoughts..." defaultValue={""}/>
                                </form>
                            </div>
                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none"
                                     data-dropzone="{&quot;maxFiles&quot;:2}">
                                    <div className="dz-message">
                                        <i className="bi bi-images display-3"/>
                                        <p>Drag here or click to upload photo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer ">
                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel
                            </button>
                            <button type="button" className="btn btn-success-soft">Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="feedActionVideo" tabIndex={-1} aria-labelledby="feedActionVideoLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionVideoLabel">Add post video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex mb-3">
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                         alt=""/>
                                </div>
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={2}
                                              placeholder="Share your thoughts..." defaultValue={""}/>
                                </form>
                            </div>
                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none"
                                     data-dropzone="{&quot;maxFiles&quot;:2}">
                                    <div className="dz-message">
                                        <i className="bi bi-camera-reels display-3"/>
                                        <p>Drag here or click to upload video.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger-soft me-2"><i
                                className="bi bi-camera-video-fill pe-1"/> Live video
                            </button>
                            <button type="button" className="btn btn-success-soft">Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalCreateEvents" tabIndex={-1} aria-labelledby="modalLabelCreateAlbum"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabelCreateAlbum">Create event</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form className="row g-4">
                                <div className="col-12">
                                    <label className="form-label">Title</label>
                                    <input type="email" className="form-control" placeholder="Event name here"/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" rows={2} placeholder="Ex: topics, schedule, etc."
                                              defaultValue={""}/>
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Date</label>
                                    <input type="text" className="form-control flatpickr" placeholder="Select date"/>
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Time</label>
                                    <input type="text" className="form-control flatpickr" data-enabletime="true"
                                           data-nocalendar="true" placeholder="Select time"/>
                                </div>
                                <div className="col-sm-4">
                                    <label className="form-label">Duration</label>
                                    <input type="email" className="form-control" placeholder="1hr 23m"/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Location</label>
                                    <input type="email" className="form-control" placeholder="Logansport, IN 46947"/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Add guests</label>
                                    <input type="email" className="form-control" placeholder="Guest email"/>
                                </div>
                                <div className="col-12 mt-3">
                                    <ul className="avatar-group list-unstyled align-items-center mb-0">
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="avatar avatar-xs">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg"
                                                 alt="avatar"/>
                                        </li>
                                        <li className="ms-3">
                                            <small> +50 </small>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <label className="form-label">Upload attachment</label>
                                    <div className="dropzone dropzone-default card shadow-none"
                                         data-dropzone="{&quot;maxFiles&quot;:2}">
                                        <div className="dz-message">
                                            <i className="bi bi-file-earmark-text display-3"/>
                                            <p>Drop presentation and document here or click to upload.</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal"> Cancel
                            </button>
                            <button type="button" className="btn btn-success-soft">Create now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;