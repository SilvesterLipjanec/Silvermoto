import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/Seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <header id="headline">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    {/*<li data-target="#myCarousel" data-slide-to="1"></li>-->
              <!--<li data-target="#myCarousel" data-slide-to="2"></li>*/}
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="first-slide slide"></div>
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>Darujte nám 2% z dane</h1>
                                <p>Pomôžte nám rozvíjať klub darovaním podielu z Vašej dane.</p>
                                <p>
                                    <a
                                        className="btn btn-lg btn-primary"
                                        href="./posts/2-z-dane/"
                                        role="button"
                                    >
                                        Chcem darovať 2% z dane
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<!--  <div className="carousel-item">
                <div className="second-slide slide" style="background-image: url('./posts/premiera-v-skycove/img/top.jpg')"></div>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Premiéra v Skýcove</h1>
                    <p>Sezónu sme otvorili na countrycrosse</p>
                    <p><a className="btn btn-lg btn-primary" href="./posts/premiera-v-skycove/" role="button">Prečítať článok</a></p>
                  </div>
                </div>
              </div>-->
            <!-- <div className="carousel-item">
                <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
                <div className="container">
                  <div className="carousel-caption text-right">
                    <h1>One more for good measure.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                  </div>
                </div>
            </div> -->*/}
                    <div className="slide-overlay"></div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </header>

        <section id="aboutUs" className="background-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5">
                            <Image
                                className="img-fluid rounded-circle"
                                filename="img/01.jpg"
                                alt=""
                            ></Image>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">O nás</h2>
                            <p>
                                Sme skupina ľudí, ktorí si svoj život bez zvuku motoriek nedokážu
                                predstaviť. Blato, prach a vôňa spáleného benzínu je naším
                                každodenným chlebom. Preferujeme zdravý životný štýl a všetok náš
                                voľný čas venujeme športu. Aktívne sa zúčastňujeme na rôznych
                                športových podujatiach na regionálnej aj národnej úrovni.
                                Zameriavame sa predovšetkým na disciplíny enduro a countrycross, no
                                ani motocross nám nie je cudzí. Do budúcnosti plánujeme zväčšovať
                                počet našich členov a sympatizantov klubu, ktorí budú zdieľať
                                rovnaké hodnoty.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="background-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5">
                            <img className="img-fluid rounded-circle" src="img/02.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Naše ciele</h2>
                            <p>
                                <q>Sme silver, ale chceme byť gold.</q> Každý z nás má svoje ciele,
                                ktoré sa snaží naplniť. Napriek tomu, že aj my chodíme do práce či
                                do školy, snažíme sa každý deň zlepšovať, aby sa naše ciele stali
                                skutočnosťou. My vieme, ako veľmi to bolí, než človek niečo
                                dosiahne. No my sa napriek bolesti nevzdávame, my stále bojujeme!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="riders" className="bg-light section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading display-4">Jazdci tímu</h2>
                        <h3 className="section-subheading text-muted">
                            V sezóne 2020 klub reprezentujú
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="team-member">
                            <img
                                className="mx-auto rounded-circle"
                                src="img/team/silvo.jpg"
                                alt=""
                            ></img>
                            <h4>Silvester Lipjanec</h4>
                            <p className="text-muted">
                                SP E2 #474
                                <br />
                                Beta RR 390
                            </p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.instagram.com/silvester.lipjanec/"
                                        target="blank"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/silvesterl" target="blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="team-member">
                            <img
                                className="mx-auto rounded-circle"
                                src="img/team/oliver.jpg"
                                alt=""
                            ></img>
                            <h4>Oliver Rusnák</h4>
                            <p className="text-muted">
                                SP E2 #442
                                <br />
                                KTM exc 250 TPI
                            </p>

                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/oliikrusnak/" target="blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.facebook.com/Oliver-Rusn%C3%A1k-127-303743153064899/"
                                        target="blank"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">
                            V sezóne 2020 budú obaja jazdci štartovať na medzinárodných
                            Majstrovstvách Slovenska v kategórii Slovenský pohár E2. V rámci seriálu
                            Cassovia cup obaja jazdci štartujú v kategórii Profi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="sponsors" className="background-white section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h2 className="display-4">Podporili nás</h2>
                        <h3 className="section-subheading text-muted">
                            Za každú pomoc Vám ďakujeme
                        </h3>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <a href="http://www.imrichcar.sk/" target="blank">
                                    <img
                                        className="img-fluid greyscale"
                                        src="img/sponsors/imrich.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <a href="https://www.motomix.sk/" target="blank">
                                    <img
                                        className="img-fluid greyscale"
                                        src="img/sponsors/motomix.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <img
                                    className="img-fluid greyscale"
                                    src="img/sponsors/dom.png"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <a href="https://www.motoprox.sk/" target="blank">
                                    <img
                                        className="img-fluid greyscale"
                                        src="img/sponsors/motoprox.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <a href="http://www.opautoservis.sk/" target="blank">
                                    <img
                                        className="img-fluid greyscale"
                                        src="img/sponsors/OP.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <a href="https://www.mikona.sk/" target="blank">
                                    <img
                                        className="img-fluid greyscale"
                                        src="img/sponsors/mikona.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <a href="http://www.ktmkosice.sk/" target="blank">
                                    <img
                                        className="img-fluid greyscale"
                                        src="img/sponsors/adamoto.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content">
                                <a href="https://www.motard-design.com/" target="blank">
                                    <img
                                        className="img-fluid greyscale"
                                        src="img/sponsors/motard.jpg"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="container square-box">
                            <div className="square-box-content" style={{ margin: "20px" }}>
                                <a href="./contact.html" className="your-ad">
                                    <div className="card my-card">
                                        <span className="greyscale">Miesto pre Vašu reklamu</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default IndexPage;
