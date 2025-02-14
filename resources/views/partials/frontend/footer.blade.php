<section id="footer">
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 footer-text-container">
                    <table class="footerTable">
                        <thead>
                            <tr>
                                <th colspan="2">聯絡我們</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="information-title">電話</td>
                                <td>{{ $information->tel }}</td>
                            </tr>
                            <tr>
                                <td class="information-title">傳真</td>
                                <td>{{ $information->fax }}</td>
                            </tr>
                            <tr>
                                <td class="information-title">信箱</td>
                                <td>{{ $information->email }}</td>
                            </tr>
                            <tr>
                                <td class="information-title">地址</td>
                                <td>{{ $information->address }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="row">
                        <div class="col-md-12">
                            <table class="footerTable">
                                <thead>
                                    <tr>
                                        <th>開館時間</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ $information->showOpenAt() }} - {{ $information->showCloseAt() }} (國定假日依網站公告)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footerText">
                <div class="d-inline-block">
                    <ul class="navbar-nav button-area">
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <img src="{{ asset('images/frontend/icons/facebook.png') }}" alt="facebook">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <img src="{{ asset('images/frontend/icons/web.png') }}" alt="web">
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <img src="{{ asset('images/frontend/icons/instagram.png') }}" alt="instagram">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footerLink">
                    <a href="#">隱私政策</a>
                    <span class="mx-1">|</span>
                    <a href="#">網站使用條例</a>
                </div>
                <div class="copyright">
                    <span>網銀基金會版權所有 &copy; 2020 All rights reserved</span>
                </div>
            </div>
        </div>
        <div class="top">
            <img src="{{ asset('images/frontend/icons/top.png') }}" alt="top">
            <span>TOP</span>
        </div>
    </footer>
</section>
