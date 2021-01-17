import { Link } from "gatsby";
import PropTypes from "prop-types";

import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer class="py-5 bg-black">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                            <ul class="list-inline text-center">
                                <li class="list-inline-item">
                                    <a href="https://www.facebook.com/silvermoto.eu/">
                                        <span class="fa-stack fa-lg">
                                            <i class="fas fa-circle fa-stack-2x foot-circle"></i>
                                            <i class="fab fa-facebook-f fa-stack-1x fa-inverse foot-icon"></i>
                                        </span>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://instagram.com/silvermoto.eu/">
                                        <span class="fa-stack fa-lg">
                                            <i class="fas fa-circle fa-stack-2x foot-circle"></i>
                                            <i class="fab fa-instagram fa-stack-1x fa-inverse foot-icon"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p class="copyright text-muted text-center">
                                Copyright &copy; Silver Moto Racing 2019
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
