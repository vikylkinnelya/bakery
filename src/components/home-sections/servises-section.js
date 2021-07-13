import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServisesSection = ({ setMenuType }) => {
    return (
        <section id="services-section">
            <header className="section-header onscroll-animate">
                <h1>Main services we provide</h1>
                <p>Our services are the best in town, we provide great quality baked products</p>
            </header>

            <Row >
                <Col xs={6} lg={3} >
                    <div className="service-box">
                        <div className="icon-big-container">
                            <svg viewBox="0 -106 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="70px" height="130px" enableBackground="new 0 0 1000 1000">
                                <path d="m492 201.71875v-44.363281c12.382812-5.507813 20.398438-18.96875 17.089844-33.125-21.332032-91.503907-158.980469-124.230469-253.089844-124.230469-46.144531 0-98.507812 7.738281-142.71875 23.5625-5.203125 1.863281-7.90625 7.585938-6.046875 12.785156 1.863281 5.203125 7.589844 7.90625 12.785156 6.046875 1.703125-.613281 3.441407-1.210937 5.191407-1.800781l13.125 36.046875c5.664062 15.566406 22.929687 23.574219 38.445312 17.933594 15.535156-5.652344 23.582031-22.902344 17.9375-38.453125l-10.914062-29.988282c11.324218-1.90625 22.875-3.390624 34.527343-4.421874l20.003907 54.929687c5.664062 15.570313 22.929687 23.574219 38.445312 17.9375 15.535156-5.65625 23.582031-22.90625 17.9375-38.457031l-12.851562-35.300782c12.511718.769532 25.085937 2.089844 37.582031 3.9375l18.886719 51.882813c5.667968 15.570313 22.929687 23.574219 38.445312 17.9375 15.535156-5.65625 23.585938-22.90625 17.9375-38.460937l-5.320312-14.597657c38.804687 13.597657 89.199218 40 100.214843 87.257813 1.363281 5.828125-4.019531 11.226562-9.980469 11.226562h-447.261718c-5.980469 0-11.34375-5.410156-9.980469-11.230468 4.269531-18.324219 14.808594-34.996094 
                                                31.316406-49.558594 4.140625-3.652344 4.539063-9.972656.886719-14.113282-3.65625-4.140624-9.976562-4.539062-14.117188-.886718-19.6875 17.367187-32.328124 37.558594-37.5625 60.011718-3.304687 14.132813 4.675782 27.609376 17.085938 33.128907v44.363281c-11.640625 4.128906-20 15.246094-20 28.28125 0 38.597656 31.402344 70 70 70h372c38.597656 0 70-31.402344 70-70 0-13.035156-8.359375-24.152344-20-28.28125zm-322.054688-125.9375c-5.183593 1.882812-10.933593-.800781-12.816406-5.980469l-12.761718-35.046875c6.367187-1.746094 12.898437-3.34375 19.546874-4.789062l12.007813 32.988281c1.882813 5.1875-.800781 10.941406-5.976563 12.828125zm100 0c-5.183593 1.882812-10.933593-.800781-12.816406-5.984375l-18.003906-49.429687c5.703125-.234376 11.347656-.367188 16.875-.367188 1.46875 0 2.890625.011719 4.296875.027344l15.625 
                                                42.925781c1.882813 5.1875-.800781 10.941406-5.976563 12.828125zm100 0c-5.183593 1.882812-10.933593-.800781-12.816406-5.980469l-14.957031-41.085937c7.933594 1.605468 15.707031 3.425781 23.261719 5.441406l10.488281 28.796875c1.882813 5.1875-.800781 10.941406-5.976563 12.828125zm-9.800781 124.21875 40-40h71.855469v40zm-144.144531 35.855469-75.855469-75.855469h151.714844zm-176-75.855469h71.855469l40 40h-111.855469zm280.144531 0h51.714844l-75.859375 75.855469-25.855469-25.855469zm121.855469 120h-372c-27.570312 0-50-22.429688-50-50 0-5.515625 4.484375-10 10-10h141.855469l37.074219 37.070312c1.953124 1.953126 4.511718 2.929688 7.070312 2.929688s5.117188-.976562 7.070312-2.929688l32.929688-32.925781 32.929688 32.925781c1.953124 1.953126 4.511718 2.929688 7.070312 2.929688s5.117188-.976562 7.070312-2.929688l37.074219-37.070312h141.855469c5.515625 0 10 4.484375 10 10 0 27.570312-22.429688 50-50 50zm0 0" />
                                <path d="m90 49c0-5.519531-4.480469-10-10-10s-10 4.480469-10 10 4.480469 10 10 10 10-4.480469 10-10zm0 0" />
                            </svg>
                        </div>
                        <h2>Chef’s Hat</h2>
                        <div className="horizontal-delimiter"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link
                            title='Lunch'
                            className='more-href'
                            to='/shop/lunch'
                            onClick={() => setMenuType('lunch')}
                        > more lunch </Link>
                    </div>
                </Col>
                <Col xs={6} lg={3} >
                    <div className="service-box">
                        <div className="icon-big-container">
                            <svg viewBox="0 0 61 47" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="70px" height="130px" enableBackground="new 0 0 1000 1000" >
                                <path id="Shape" d="m55.635 13.445c.4673369-1.0070791.1219124-2.2045506-.81-2.808-1.7455193-1.08751569-3.6731362-1.85077066-5.69-2.253-.6283026-1.18602254-1.5756092-2.1728147-2.735-2.849-3.451-2.181-9.4-4.285-18.247-2.16-3.142-3.18-7.114-3.669-11.171-2.12-4.028 1.545-8.611 5.556-11.582 8.688-1.895 1.986-3.1 3.336-2.463 5.932-1.04177621 2.210386-1.72144703 
                                                    4.5738712-2.013 7-.80091502 6.2807961 1.54718983 12.5525108 6.276 16.763 2.168 4.69 7.432 6.409 12.612 6.409 1.0056099-.0153291 2.0094025-.0907972 3.006-.226.3219725.1509591.6631649.2569508 1.014.315 3.4.513 10.6-.324 11.249-3.775.329-1.759-1.016-3.634-4.09-5.708.1142498-1.754911-.4458982-3.4872206-1.566-4.843.6502787-.4696585 1.1443298-1.12398 1.418-1.878 1.6041169-.2263908 2.9793114-1.2612803 3.641-2.74 
                                                    3.068.862 5.506.516 6.886-2.357 2.682.953 5.94.409 8.562-.713 2.6834247 1.5435956 5.9071363 1.8383537 8.826.807 4.782-1.91.997-8.349-3.123-11.484zm-52.735 9.78c.26086894-2.2327646.87768159-4.4093334 1.827-6.447 3.64243682-1.8276025 7.8761071-2.0771098 11.708-.69 7.492 2.84 11.83 11.551 12.541 13.074-.1785534.5476036-.5604874 1.0057811-1.067 1.28-2.3724506-1.455646-4.9246492-2.5955966-7.592-3.391-8.2-2.732-14.24 
                                                    2.228-14.07 8.55-2.72175998-3.5137615-3.92674708-7.9693697-3.347-12.376zm16.426 20.815c-2.44-.04-8.326-.651-10.393-5.405-2.733-6.294 2.642-12.391 10.751-9.686 2.2482254.6926743 4.4203533 1.6117159 6.483 2.743 1.985 1.219 2.539 2.272 2.741 3.735-.7818656-.328153-1.6494928-.3920576-2.471-.182-2.7469866.783102-4.9093488 2.9059294-5.743 5.638-.3563628 
                                                    1.027284-.2731504 2.1560776.23 3.12-.5315555.0422093-1.0650606.054562-1.598.037zm13.792-2.047c-.122.652-1.311 1.526-4.282 
                                                    2.021-1.549643.292-3.1353042.3409194-4.7.145-.577677-.0943686-1.0842027-.4390101-1.3840492-.941711s-.36241-1.1121529-.1709508-1.665289c.6106157-2.1159306 2.2662349-3.7692834 4.383-4.377.5120803-.1242492 1.0526126-.0374037 1.5.241 4.601 2.73 4.725 4.194 4.654 4.577zm-2.5-14.043c-3.682-7.639-10.518-14.768-19.075-14.768-2.33088336.0238539-4.63504515.4992889-6.785 
                                                    1.4.017-1 .742-1.842 1.845-3 7.119-7.464 
                                                    15.863-13.576 21.565-5.028 5.232 7.846 7.472 20.53 2.449 21.396zm4.519-2.645c1.294-5.949-1.865-14.99-5.553-20.209 7.639-1.6 12.752.233 15.756 2.131.6773767.40658751 1.2660512.94527065 1.731 1.584-3.3326733 1.893314-5.5782374 5.2464674-6.06 9.049-.2010017 1.8074664-.5730012 3.5917914-1.111 5.329-.748 2.123-1.819 2.942-4.764 
                                                    2.116zm6.926-2.344c.4132951-1.5845579.7232803-3.1942765.928-4.819.4250287-3.3781901 2.5055951-6.3224091 5.548-7.851 1.8375573.3481325 3.5954468 1.0311536 5.186 2.015.165.109.184.349-.077.514-1.6541094 1.2008057-2.901813 2.8783669-3.576 4.808-.7273871 1.5134098-1.1762198 3.1454673-1.325 4.818-2.1062686.9215358-4.4624357 1.1030505-6.685.515zm15.956.111c-2.794 1.119-5.647.069-7.265-.776.1958937-1.3589363.5922032-2.681316 1.176-3.924.4708695-1.3321984 
                                                    1.2604863-2.5289828 2.3-3.486 2.356 1.683 4.92 5.063 4.76 7-.0315261.5646771-.4245124 1.0441851-.972 1.186z" />
                                <path id="Shape" d="m23.2 4.746c-1.5719997-.49879704-3.271454-.41140871-4.784.246-1.8455383.80125832-3.5691115 1.85829344-5.12 3.14-.2.156-.4.315-.6.477-.3333333.26666667-.6666667.54433333-1 .833-.3904054.36663158-.4226511.9757549-.0731366 1.3815562s.9566892.4641953 1.3771366.1324438c.314-.2713333.6293333-.535.946-.791.189-.152.379-.3.572-.452 1.3970364-1.15901424 2.9477451-2.11912097 4.608-2.853 
                                                    1.0540254-.47628102 2.242776-.56344426 3.355-.246.515834.1974418 1.0940582-.06066604 1.2915-.5765s-.060666-1.0940582-.5765-1.2915z" />
                                <path id="Shape" d="m52.5 27c-1.9329966 0-3.5 1.5670034-3.5 3.5s1.5670034 3.5 3.5 3.5 3.5-1.5670034 3.5-3.5-1.5670034-3.5-3.5-3.5zm0 5c-.8284271 0-1.5-.6715729-1.5-1.5s.6715729-1.5 1.5-1.5 1.5.6715729 1.5 1.5-.6715729 1.5-1.5 1.5z" />
                                <circle id="Oval" cx="46" cy="29" r="1" />
                                <circle id="Oval" cx="42" cy="30" r="1" />
                            </svg>
                        </div>
                        <h2>Sweet's and stuff</h2>
                        <div className="horizontal-delimiter"></div>
                        <p> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                        </p>
                        <Link
                            title='Breakfast'
                            className='more-href'
                            to='/shop/breakfast'
                            onClick={() => setMenuType('breakfast')}
                        > more breakfast</Link>
                    </div>
                </Col>
                <Col xs={6} lg={3} >
                    <div className="service-box">
                        <div className="icon-big-container">
                            <svg viewBox="0 0 901 828" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="1000px" height="1000px" enableBackground="new 0 0 1000 1000">
                                <path d="M156.2 1.40005C146.1 7.00005 127.6 30.2 119.8 47C112.4 63 109.6 75.2 110.1 89.8C110.6 102 111.5 101.2 100 98.2C81.9 93.4 57.4 92 51.3 95.3C46.2 98 44 103.4 44 
                                                113.2C44 124.6 47.9 147.2 51.7 157.5C57.1 172.2 63.8 182.9 73.8 193.2C76.9 196.4 79.2 199.2 78.9 199.4C78.6 199.7 76.6 199.5 74.5 199C62.3 196.3 50 195 37.6 195C25.4 195 23.3 195.2 20.5 197C14.5 200.7 14 202.4 14 217.9C14 231.4 14.8 238.3 18.6 256C24.1 281.4 36.8 304.4 53.8 320L61.5 327H41.6H21.8L17.9 330.9L14 334.8V349.6C14 391.6 30.5 433.1 55 452.9C57.5 454.9 59.6 456.9 59.8 457.5C59.9 458.1 52.9 458.5 40.4 458.5H20.8L17.4 462.4L14 466.3V481.3C14 496.1 15.5 508.6 18.6 519.6C19.4 522.4 20 525.4 20 526.3C20 527.2 20.6 529.4 21.4 531.2C22.2 533 23.6 536.5 24.5 539C28.5 549.1 33.8 559.2 38.3 565.1C39.8 567.1 41 569.5 
                                                41 570.5C41 571.4 39 575.4 36.7 579.3C31.7 587.5 20 611.2 20 613C20 613.6 19.5 615.1 18.8 616.3C16 621.3 10.3 638.8 6.6 653.5C1.4 674.6 0 687.9 0 715.5C0 741.1 1.1 750.8 5 761C6.2 764 7.4 767.4 7.8 768.5C8.9 772.3 17.8 786.5 22.5 792C38.5 810.7 57.6 821.5 83 826.1C88.4 827.1 99.8 827.5 123.2 827.5H155.8L159.7 824.4C163.3 821.5 163.5 820.9 163.8 815.2C164 810.7 163.6 808.4 162.4 806.5C158.9 801.2 157.8 801 122.5 801C85.3 801 80.7 800.3 65 792.7C51.2 785.9 36.4 769.9 31.2 756C26.9 744.5 26 737.9 26.1 716C26.1 704.2 26.5 692 27 689C27.5 686 28.2 681.2 28.5 678.5C29.6 669.5 33.5 654 38.6 638.5C47.1 612.6 61.4 586.3 80.2 561.9C90.5 548.5 115.4 524 129.5 513.4C140.2 505.2 160.7 492.4 170 487.8C181.8 482 183.9 481.3 184.9 482.3C185.7 483.1 186 499.9 186 536.2C186 571 186.4 590.7 187.1 594.1C188.8 602 191.7 607.6 196.5 612.4C214.9 630.9 249.1 626.6 260.7 604.5C264.8 596.7 265 593.9 265 528C265 493.1 265.4 
                                                463.9 265.8 463.2C266.5 462.3 273.7 462 298.6 462.2L330.5 462.5L331 530C331.5 594.5 331.6 597.7 333.5 601.5C340.5 615.9 353.8 624 370.5 624C384.1 624 396.1 618.2 403 608.1C409.5 598.7 409.3 601 409.9 528.5L410.5 462.5L441.9 
                                                462.2C464 462 473.7 462.3 474.6 463.1C475.7 464 475.9 475.8 475.8 529.9C475.7 591.2 475.8 595.8 477.5 600C481.8 610.6 490.3 618.4 501.7 622.4C505.8 623.8 509.2 624.1 516.7 623.8C525.2 623.5 527.4 623 533.1 620.3C542 616 548.9 608.5 551.8 599.8C554 593.5 554 592.2 554 538.1C554 490.3 554.2 482.9 555.5 482.4C556.9 481.8 561.8 483.8 570 488C597.1 502 616 515.9 637.6 537.5C668.4 568.4 689.1 601.5 701.9 640C709.1 661.7 712.3 678 714 701.7C715.4 720 714 741.1 710.9 750.5C702.6 775.3 684.9 792.2 659.8 799.1C653.3 800.9 645.6 801 435.1 801H217.3L214.6 803.1C206.2 809.7 207.5 822.6 217 826.4C220.7 827.8 241.2 828 436 828C627.9 828 651.8 827.8 658.7 826.4C673.6 823.4 681.1 820.5 694.2 812.8C703.9 807.1 719.8 791.3 725.7 781.5C728.9 776.2 733.3 766.9 735 762C739.9 747.3 740.4 743.8 740.4 716C740.4 689 739.7 681.5 735.4 662.8C734.5 659.1 734.1 655.6 734.5 655C734.9 654.4 
                                                742.5 654 754.8 654C770.2 654 776.2 
                                                653.6 782.5 652.1C814.8 644.8 837.6 622.3 845.7 589.9C847.2 584.2 847.4 565.1 847.9 413.3L848.5 243.2L857 234.8C877.9 214.3 891.6 189.3 896 163.5C896.6 160.2 897.7 157 898.5 156.4C900.7 154.8 900.7 117.5 898.6 116.7C897.8 116.4 896.9 114.1 896.5 111.3C895.8 106.1 890.5 88.1 888.5 84C882.1 71.2 880.3 67.8 877.3 63.3C874.9 59.6 872.9 57.8 870.4 57C863.6 54.7 856.8 57.7 853.4 64.2C851.1 68.7 851.8 72 857.1 81C858.9 84.1 860.3 86.5 864.1 94.2C865.4 96.8 868.6 107.5 870.4 115.2C872.6 124.3 872.6 149 870.4 157.9C867.6 169.9 864.8 177.9 860.3 186.8C854.4 198.4 848.1 206.7 837.1 217.3C827.4 226.8 825.6 229.3 822.8 238C821.1 243.2 821 253.6 821 411.5C821 572.6 820.9 579.8 819.1 586.5C816.5 596.3 812.5 603.3 805.5 610.5C798.7 617.5 793.1 621.1 783.3 624.6C776.8 627 776 627 751.2 626.8L725.9 626.5L722.4 618.5C720.5 614.1 719.1 609.9 719.2 609C719.5 607.7 723.6 607.4 
                                                748 607C775.5 606.5 776.6 606.4 780.9 604.1C787 600.9 795.2 592.4 798.1 586.5L800.5 581.5L801.1 410C801.5 289.4 802 237.3 802.7 234.5C806.1 222.3 810.2 215.7 821 205.1C844.5 182 853.1 161.2 851.6 131.2C850.5 109.4 842.2 90.2 827.2 75.1C813 60.9 806 56.8 784 49.4C778.8 47.7 770.8 47.6 623.6 47.2C469 46.9 459 47.1 447.4
                                                50.4C433.7 54.2 418.6 63.5 408.4 74.2C391.2 92.3 383 112.6 383 136.8C383 154.1 386.8 166.8 397.8 186.5C398.4 187.8 404.8 194.9 411.9 202.4C426 217.2 429.4 222.6 432.4 235.5C433.9 241.8 434 251.8 433.8 338.5L433.5 434.5H423.5H413.5L413 335.5C412.5 227.7 412.9 235.5 406.8 226.5C405.3 224.3 401.3 220.1 397.9 217.1C391.9 211.8 377 193 377 190.8C377 190.2 376.4 188.9 375.7 188.1C374.2 186.3 369 173.9 366.7 166.5C365.9 163.7 364.4 156.6 363.4 150.6C360.5 132 363 114.1 371.3 94C383.1 65.3 408.5 42 438.7 32.1C455.2 26.7 445.9 27 616.2 27C769.7 27 773.9 27.1 783.1 29C794 31.3 799.6 33 806.3 35.9C809 37.1 812.4 38 813.8 38C820.6 38 827.8 29.1 826.5 22.4C825.9 18.7 821.1 13.4 817.1 11.8C804.8 6.80005 798.1 4.90005 783 1.90005C777.8 0.800049 744.3 0.500049 620.2 0.300049C467.6 4.93526e-05 463.6 4.93526e-05 452.2 2.00005C445.8 3.10005 437.6 4.80005 434 5.80005C399 15.8 368 41.7 350.8 75.1C347.6 81.3 346.6 83.7 343.4 93C339.1 105.1 336 123.2 336 136.5C336 150.3 339.5 169.8 344.1 182C345.2 185 346.5 188.6 347 190C347.8 192.4 352.8 202.5 355.3 206.5C359.6 213.5 371.1 227.7 377.9 234.3C383.6 239.9 386.1 243.1 386.5 245.3C386.8 247.1 386.9 290.3 386.8 341.5L386.5 434.5L335.6 434.8C305 434.9 284.2 434.6 
                                                283.7 434.1C283.1 433.5 283.6 432 284.9 430.1C297.1 413 307 375.2 307 346.3C307 337.1 304.9 331.7 300.3 328.9C297.1 326.9 295.9 326.8 278.4 327.2C266 327.5 260 327.2 260 326.5C260 326 262.8 323.2 266.2 320.5C276.9 311.9 290.8 291 296.5 275C303.2 256.1 305.5 243.6 306.5 220C307.1 206.5 307 205.3 305.1 202.2C301.2 196.1 298 195 284.3 195C273.7 195 251.3 197.6 244.3 199.6C240.8 200.6 241.5 198.9 246.6 194C252.2 188.5 259.3 178.5 263.2 170.5C264.9 167.2 266.6 163.7 267.1 162.8C268.3 160.4 271.5 149.9 273.4 142C275.4 133.4 277.5 110.4 276.6 105.9C275.8 101.4 272.9 97.5 268.7 95.4C261.7 91.7 233.3 94.2 214.1 100.2C210.5 101.3 208.6 100 209.5 97C213.1 83.4 209.3 62.8 199.3 42.5C195 33.7 194.7 33.2 187.5 
                                                23.5C172.6 3.50005 163.7 -2.79995 156.2 1.40005ZM166.1 38.7C185.8 65.6 189 88.3 176.6 114C173.5 120.5 165.4 132.4 161.8 135.7L159.4 138L154.4 131.3C151.7 127.6 149 123.7 148.3 122.5C145.7 118 140 105.9 140 104.7C140 104.1 139.3 101.7 138.5 99.5C137.7 97.1 137.1 91.7 137 86.2C137 75.3 139 67.5 144.8 55.9C149.5 46.7 158.9 34 161.1 34C161.9 34 164.2 36.1 166.1 38.7ZM768.4 74.1C784.7 76.1 797.4 82.2 808.1 93.2C822.5 108.1 828.6 128.6 824.6 148.5C821.7 162.6 816.7 171.5 805.3 183C792.2 196.1 787.8 201.8 782.7 212.4C778.9 220.2 776.3 229.1 775.6 236.5C775.3 239.8 774.8 317.2 774.4 408.4C774.1 499.6 773.5 575.3 773 576.5C771.4 580.7 768.3 581 735.5 580.8L704.5 580.5L697.5 570C671.8 531.5 640.2 501.6 597.5 475.5C593.5 473.1 583.4 467.6 577 464.4C567.4 459.6 561.4 457 548.2 451.9C526.7 443.5 499.8 437.9 468.5 435.2L460.5 434.5L460.4 337.4C460.3 235.9 460.2 233 455.9 
                                                221.1C450.5 206.2 445.5 198.9 430.4 183.4C420 172.8 415.5 165.8 411.9 154.5C409.2 145.8 409.3 126.9 412.1 118C418 99.2 432.1 84.2 450.5 77.2C460.8 73.3
                                                464.9 73.2 614.4 73.1C714.1 73 762.2 73.3 768.4 74.1ZM84.7 121.9C112 127.6 126 136.6 136.2 155C141.4 164.5 146.4 182.5 145.8 190.1C145.5 195.1 146.3 195 132.5 192.5C120.7 190.3 114.7 188.5 107.7 184.9C91.5 176.7 82.7 166 76.1 146.5C73.4 138.2 70.5 123.7 71.3 121.7C72.1 119.5 73.7 119.6 84.7 121.9ZM248.9 121.4C249.5 122.1 249.8 123.4 249.5 124.1C249.3 124.9 248.6 128.4 248 132C244.3 156.1 232.5 174.7 215.3 183.7C206.6 188.2 199.2 190.6 188 192.6C179.1 194.2 175.3 194.3 174.5 193.1C173.8 191.8 175.9 178.5 177.6 173.5C178.4 171.2 179 168.9 179 168.2C179 167.6 180.6 163.5 182.6 159.3C192.5 138 206.9 127.9 236 122C246.8 119.8 247.5 119.7 248.9 121.4ZM137.9 
                                                220.1C141.5 220.7 145.1 221.7 145.8 222.2C147.3 223.5 147.5 237.6 146 238.5C145.5 238.8 142.3 236.2 139 232.7C135.8 229.2 131.3 225.1 129 223.5C126.8 222 125 220.3 125 219.9C125 218.7 130.1 218.8 137.9 220.1ZM195 220.3C195 221.1 194.1 222.1 193.1 222.6C190.9 223.6 183.1 230.8 178.2 236.4C176.4 238.4 174.5 239.8 174 239.5C172.5 238.6 172.7 223.3 174.3 222.3C175.9 221.3 186.4 219.3 191.3 219.1C193.8 219 195 219.4 195 220.3ZM64.5 223.9C84.5 228.1 94.5 231.9 106.1 239.6C126.8 253.3 137.8 272.1 144.4 305.3C146.1 313.4 146.5 324.6 145.3 325.3C144.2 326 123.9 323.4 116 321.7C89.1 315.8 68.6 302 56.6 281.9C48.6 268.4 41 242.2 41 228.2V222H48.3C52.2 222 59.6 222.9 64.5 223.9ZM280.2 223.2C280.7 224.6 277.5 246.9 276.1 251.3C275.6 253.1 274.4 257.2 273.4 260.5C271.8 266 266.6 277.8 263.7 282.5C248.9 306.8 223.2 320.7 185.5 324.8C180.6 325.3 176 325.5 175.3 325.3C171.1 
                                                323.7 178.1 289.5 185.9 273C195.9 252 
                                                211.1 238.5 234.5 229.7C249.8 224 279.1 219.8 280.2 223.2ZM145.8 353.7C147.2 355.6 147.4 367.8 146.1 369.9C145.4 370.9 143.4 369.4 137.9 363.5C133.9 359.3 129.3 355.2 127.8 354.4C122.7 351.8 125.5 350.7 135.4 
                                                351.4C142.3 351.8 144.8 352.4 145.8 353.7ZM194.4 351.9C194.7 352.4 193.7 353.6 192.2 354.5C190.7 355.5 186.1 359.8 181.9 364.1C177.7 368.4 174 371.7 173.6 371.3C172.7 370.4 172.9 354.8 173.8 353.3C174.9 351.6 193.4 350.3 194.4 351.9ZM68.5 356.3C81.8 359.3 95.3 364.4 102.5 369C104.2 370.1 106.2 371.3 107 371.7C110.7 373.4 119.7 382.1 124.9 389C130.4 396.3 137 408.5 137 411.4C137 412.2 137.4 413.1 137.9 413.5C138.4 413.8 139.1 415.5 139.5 417.3C139.9 419 140.7 422.3 141.5 424.5C143.8 431.5 146.2 446.3 145.8 451.5L145.5 456.5L136.5 456.2C125.7 455.9 106.2 451.7 98 448C81.9 440.6 75.1 436 66.4 426.8C55.1 414.9 47.6 398.5 43 375.9C40.9 365.5 40.4 354.4 42 353.8C44 353.1 61.8 354.8 68.5 356.3ZM280 356.8C280 364.2 275.9 385.8 273.4 391.8C272.6 393.6 272 395.5 272 396.1C272 396.7 270.7 400.1 269 403.7C267.4 407.2 266 410.3 266 410.6C266 410.8 263.9 414 261.4 417.7C255.9 425.8 245 436.8 241.8 437.4C227.8 
                                                440.1 221.6 441.4 216.5 442.7C201.3 446.5 185.8 451.5 178.8 454.9C175.5 456.6 172.7 455.7 173.4 453.3C173.7 452.3 174.4 447.7 175 443C178.5 416.6 188.5 394.3 203.1 380.5C210.8 373.2 213.5 371.3 222 366.9C236.4 359.5 256.2 354.4 271.3 354.1L280 354V356.8ZM382.8 526.1L383 589.7L380.8 593C377.7 597.5 371.9 599.5 366.5 598C356.6 595.1 357 598.1 357 525.5C357 491.3 357.3 463 357.7 462.6C358.1 462.3 363.8 462.1 370.4 462.2L382.5 462.5L382.8 526.1ZM237.4 465.6C238.8 466.2 239 472.5 239 526.6C239 590.5 239 591.2 234.4 595.1C230.5 598.4 226 599.2 220.9 597.5C216.8 596.1 215.8 595.2 213.9 591.4L211.8 586.9L212.3 529.2C212.6 497.5 212.9 471.5 212.9 471.4C213.1 471.2 224.3 467.9 229.5 466.7C232.8 465.9 235.6 465.1 235.7 465.1C235.8 465 236.5 465.3 237.4 465.6ZM521.8 469.8C525.5 471 527.2 472 527.6 473.5C527.8 474.6 527.9 501.4 527.8 533L527.5 590.5L525.1 593.7C520.4 599.9 
                                                510.4 600.3 504.9 594.4L502.5 591.8L502.2 529.2C502 483.9 502.3 466.5 503.1 466C504.2 465.2 512.3 466.9 521.8 469.8ZM54.7 485.5C64.4 486.4 81.1 490.4 89.5 493.9C97.1 497.1 101 499.3 101 500.6C101 501.4 97.7 505.1 93.8 508.8C82.5 519.2 71.1 531.2 60.8 543.4C59.4 545 57.9 546.1 57.4 545.8C56.4 545.1 51 534.5 48.7
                                                528.5C47.1 524.1 45 516.4 42.6 505.4C40.9 497.9 40.5 485.9 41.7 484.6C42.2 484.2 43.7 484.1 45.2 484.4C46.7 484.7 51 485.2 54.7 485.5Z" />
                                <path d="M730.3 120.1C726 121.3 722 127.2 722 132.2C722 136.9 725.3 142.5 728.8 143.8C734.1 145.8 734.9 145.9 738.2 144.9C750.3 141.6 750.6 123.3 738.7 119.9C735 118.9 734.6 118.9 730.3 120.1Z" />
                                <path d="M491.5 143C487.8 145.4 485 150.4 485 154.6C485 158.8 488.7 164.1 493.4 166.4C500.2 169.7 507.3 166 510 157.7C513.5 146.8 500.9 136.8 491.5 143Z" />
                                <path d="M678.8 287.5C672.2 292 671.4 302.7 677.2 308.2C685.6 316.1 698 310.1 698 298.3C698 287.5 687.5 281.6 678.8 287.5Z" />
                                <path d="M527.3 344.1C524.5 345.9 521 352 521 355.2C521 358 525.4 365.2 528.1 366.5C534.6 369.9 542.1 367.5 545.5 361C551.6 349.3 538.3 337 527.3 344.1Z" />
                                <path d="M701.2 452.8C697.8 455.9 696.4 461.1 697.4 466.2C699 474.1 707.8 478.2 715 474.5C719.9 472 722 468.3 722 462.5C722 457.9 721.6 456.9 718.5 453.7C715.2 450.3 714.4 450 709.6 450C705.1 450 703.7 450.5 701.2 452.8Z" />
                            </svg>
                        </div>
                        <h2>Lots of bread</h2>
                        <div className="horizontal-delimiter"></div>
                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, arcu.
                        </p>
                        <Link
                            title='Bread'
                            className='more-href'
                            to='/shop/bread'
                            onClick={() => setMenuType('bread')}
                        > more bread</Link>
                    </div>
                </Col>
                <Col xs={6} lg={3} >
                    <div className="service-box">
                        <div className="icon-big-container">
                            <svg viewBox="0 0 433 350" ersion="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="100px" height="1000px" enableBackground="new 0 0 1000 1000">
                                <path d="M417.12 243.71C397.65 243.71 432.74 243.71 396.56 243.71C396.56 200.62 396.56 176.68 396.56 171.89C396.56 158.72 386.59 147.83 373.8 146.38C373.8 144.92 373.8 133.19 373.8 131.73C373.8 120.9 364.99 112.1 354.16 112.1C343.37 112.1 256.98 112.1 246.18 112.1C249.9 106.43 252.04 99.68 252.04 92.53C252.04 78.79 244.19 66.8499 232.75 60.9299C238.93 43.1399 251.21 19.0799 272.97 15.9499C277.1 15.3499 279.96 11.5199 279.37 7.39994C278.77 3.26994 274.95 0.409947 270.82 0.999947C242 5.14995 226.4 32.4799 218.12 57.0099C217.57 56.9799 217.02 56.9699 216.46 56.9699C196.84 56.9699 180.88 72.9199 180.88 92.5399C180.88 99.6799 183.01 106.43 186.74 112.1C175.94 112.1 89.55 112.1 78.75 112.1C67.93 112.1 59.12 120.9 59.12 131.73C59.12 133.21 59.12 145.06 59.12 146.54C46.33 147.99 36.36 158.87 36.36 172.04C36.36 176.82 36.36 200.71 36.36 243.71C0.179985 243.71 20.9196 243.71 16.9096 243.71C11.8696 243.71 5.48965 245.93 2.51965 249.99C-0.41035 254 1.01962 264.05 2.51962 268.78C3.79962 272.79 14.0096 304.84 15.2896 308.84C18.2896 318.28 26.4495 319.89 36.3595 319.89C42.0795 319.89 126.92 319.89 227.54 319.89C308.22 319.89 359.15 319.89 364.5 319.89C368.67 319.89 372.05 316.51 372.05 312.34C372.05 308.17 368.67 304.79 364.5 304.79C326.72 304.79 30.5 305.5 30.5 305.5C30 304.5 30 305 29.6696 304.26C28.3996 300.25 18.1896 268.21 16.9096 264.2C16.8796 264.12 16.5 263.5 16.5196 263.5C15 260 16.5 259 17.5 259C65.58 259 417.12 258.81 417.12 258.81C417.21 258.81 397.65 258.81 417.54 259.02C417.69 259.23 417.64 259.39 417.61 259.47C416.34 263.47 406.12 295.52 404.85 299.53C403.84 302.67 400.95 304.79 397.65 304.79C394.77 304.79 386.39 304.79 383.5 304.79C379.33 304.79 385 308.17 385 312.34C385 316.51 379.33 319.89 383.5 319.89C386.39 319.89 394.77 319.89 397.65 319.89C407.56 319.89 416.23 313.55 419.23 304.11C420.51 300.1 430.73 268.05 432 264.05C433.5 259.32 432.65 254.11 429.72 250.1C426.75 246.04 422.16 243.71 417.12 243.71ZM381.46 243.71H339.04V172.04C339.04 171.95 339.04 171.9 339.04 171.89C339.04 166.06 343.78 161.32 349.61 161.32C351.74 161.32 368.76 161.32 370.89 161.32C376.72 161.32 381.46 166.06 381.46 171.89C381.46 181.46 381.46 205.4 381.46 243.71ZM108.98 172.04C108.98 166.21 113.72 161.47 119.55 161.47C121.68 161.47 138.69 161.47 140.82 161.47C146.65 161.47 151.39 166.21 151.39 172.04C151.39 176.82 151.39 200.71 151.39 243.71H108.98C108.98 205.48 108.98 181.59 108.98 172.04ZM166.49 172.04C166.49 166.21 171.24 161.47 177.06 161.47C179.19 161.47 196.21 161.47 198.34 161.47C204.17 161.47 208.91 166.21 208.91 172.04C208.91 176.82 208.91 200.71 208.91 243.71H166.49C166.49 205.48 166.49 181.59 166.49 172.04ZM224.01 172.04C224.01 166.21 228.75 161.47 234.58 161.47C236.71 161.47 253.73 161.47 255.85 161.47C261.68 161.47 266.43 166.21 266.43 172.04C266.43 176.82 266.43 200.71 266.43 243.71H224.01C224.01 205.48 224.01 181.59 224.01 172.04ZM281.53 172.04C281.53 166.21 286.27 161.47 292.1 161.47C294.22 161.47 311.24 161.47 313.37 161.47C319.2 161.47 323.94 166.21 323.94 172.04C323.94 176.82 323.94 200.71 323.94 243.71H281.53C281.53 205.48 281.53 181.59 281.53 172.04ZM216.46 72.0699C227.75 72.0699 236.94 81.25 236.94 92.53C236.94 101.57 231.02 109.48 222.46 112.1C221.26 112.1 211.66 112.1 210.46 112.1C201.9 109.48 195.98 101.57 195.98 92.53C195.98 81.25 205.17 72.0699 216.46 72.0699ZM354.16 127.2C356.66 127.2 358.69 129.23 358.69 131.73C358.69 132.69 358.69 137.52 358.69 146.21C353.25 146.21 350.22 146.21 349.61 146.21C342.51 146.21 336.07 149.12 331.42 153.8C326.77 149.21 320.4 146.36 313.37 146.36C311.24 146.36 294.22 146.36 292.1 146.36C285.03 146.36 278.62 149.24 273.98 153.87C269.33 149.24 262.92 146.36 255.85 146.36C253.73 146.36 236.71 146.36 234.58 146.36C227.51 146.36 221.11 149.24 216.46 153.87C211.81 149.24 205.4 146.36 198.34 146.36C196.21 146.36 179.19 146.36 177.06 146.36C170 146.36 163.59 149.24 158.94 153.87C154.3 149.24 147.89 146.36 140.82 146.36C138.69 146.36 121.68 146.36 119.55 146.36C112.48 146.36 106.07 149.24 101.43 153.87C96.7801 149.24 90.3701 146.36 83.3101 146.36C82.7001 146.36 79.67 146.36 74.22 146.36C74.22 137.58 74.22 132.7 74.22 131.73C74.22 129.23 76.26 127.2 78.75 127.2C133.84 127.2 326.62 127.2 354.16 127.2ZM51.46 172.04C51.46 166.21 56.2001 161.47 62.0301 161.47C64.1601 161.47 81.1801 161.47 83.3101 161.47C89.1301 161.47 93.8801 166.21 93.8801 172.04C93.8801 176.82 93.8801 200.71 93.8801 243.71H51.46C51.46 205.48 51.46 181.59 51.46 172.04Z" />
                            </svg>
                        </div>
                        <h2>Tarts</h2>
                        <div className="horizontal-delimiter"></div>
                        <p>
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                        </p>
                        <Link
                            title='Tarts'
                            className='more-href'
                            to='/shop/tarts'
                            onClick={() => setMenuType('tarts')}
                        > more tarts</Link>
                    </div>
                </Col>
            </Row>
        </section>
    )
}


export default ServisesSection