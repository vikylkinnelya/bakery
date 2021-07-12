const Spinner = () => {

    return (

        <div className='spinner-group'>

            <svg width="100" height="100" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6602 51.6472C19.9893 49.5597 19.5907 47.4023 19.4735 45.2231C19.4735 44.8218 19.2473 44.4511 18.8801 44.2504C18.5129 44.0498 18.0605 44.0498 17.6933 44.2504C17.3262 44.4511 17.1 44.8218 17.1 45.2231C17.19 47.5964 17.5886 49.9502 18.2867 52.2313C18.4571 52.8515 19.1266 53.2236 19.782 53.0624C20.4375 52.9011 20.8306 52.2675 20.6602 51.6472Z" fill="#FDB822" />
                <path d="M21.793 55.5096C21.648 55.171 21.3141 54.9373 20.9282 54.9041C20.5422 54.8709 20.169 55.0437 19.9612 55.3519C19.7534 55.6601 19.746 56.0518 19.9421 56.3667C20.4044 57.2584 20.9224 58.1236 21.4931 58.9577C21.8072 59.4095 22.4507 59.536 22.9304 59.2401C23.4101 58.9443 23.5444 58.3381 23.2303 57.8862C22.7018 57.1215 22.2218 56.3278 21.793 55.5096Z" fill="#FDB822" />
                <path d="M74.6892 22.476C75.5761 21.5751 75.8412 20.2212 75.3611 19.0449C74.8809 17.8686 73.75 17.1011 72.495 17.1C71.6718 17.1007 70.8825 17.4331 70.3008 18.024L60.2716 28.1985C53.8915 30.7198 48.1024 34.5684 43.2769 39.4965C43.063 39.7185 42.8626 39.9534 42.6766 40.2H16.605C14.8902 40.2 13.5 41.6103 13.5 43.35V44.4C13.5019 57.7475 21.7956 69.6448 34.2 74.094V76.95C34.2 78.6897 35.5902 80.1 37.305 80.1H51.795C53.5098 80.1 54.9 78.6897 54.9 76.95V74.094C67.3044 69.6448 75.5981 57.7475 75.6 44.4V43.35C75.6 41.6103 74.2098 40.2 72.495 40.2H60.9858C62.4397 37.8051 63.6698 35.2776 64.66 32.6505L74.6892 22.476ZM71.7602 19.5045C72.0563 19.2016 72.5036 19.1106 72.8919 19.2741C73.2802 19.4377 73.5324 19.8234 73.53 20.25C73.5262 20.528 73.419 20.7943 73.2298 20.9955L63.7596 30.5925L62.3003 29.112L71.7602 19.5045ZM60.5718 30.33L60.8409 30.5925L51.3706 40.2H45.585C49.9335 35.9948 55.0157 32.6478 60.5718 30.33ZM52.83 76.95C52.83 77.5299 52.3666 78 51.795 78H37.305C36.7334 78 36.27 77.5299 36.27 76.95V74.7555C41.6882 76.2763 47.4118 76.2763 52.83 74.7555V76.95ZM73.53 43.35V44.4C73.53 60.6371 60.5552 73.8 44.55 73.8C28.5448 73.8 15.57 60.6371 15.57 44.4V43.35C15.57 42.7701 16.0334 42.3 16.605 42.3H30.06V43.35C30.06 45.0897 31.4502 46.5 33.165 46.5H47.655C48.2266 46.5 48.69 46.9701 48.69 47.55V60.15C48.69 61.8897 50.0802 63.3 51.795 63.3C53.5098 63.3 54.9 61.8897 54.9 60.15V47.55C54.9 46.9701 55.3634 46.5 55.935 46.5C56.5066 46.5 56.97 46.9701 56.97 47.55V53.85C56.97 55.5897 58.3602 57 60.075 57C61.7898 57 63.18 55.5897 63.18 53.85V47.55C63.18 46.9701 63.6434 46.5 64.215 46.5C65.9298 46.5 67.32 45.0897 67.32 43.35V42.3H72.495C73.0666 42.3 73.53 42.7701 73.53 43.35ZM65.25 43.35C65.25 43.9299 64.7866 44.4 64.215 44.4C62.5002 44.4 61.11 45.8103 61.11 47.55V53.85C61.11 54.4299 60.6466 54.9 60.075 54.9C59.5034 54.9 59.04 54.4299 59.04 53.85V47.55C59.04 45.8103 57.6498 44.4 55.935 44.4C54.2202 44.4 52.83 45.8103 52.83 47.55V60.15C52.83 60.7299 52.3666 61.2 51.795 61.2C51.2234 61.2 50.76 60.7299 50.76 60.15V47.55C50.76 45.8103 49.3698 44.4 47.655 44.4H33.165C32.5934 44.4 32.13 43.9299 32.13 43.35V42.3H65.25V43.35ZM54.2893 40.2L62.3003 32.073L62.559 32.346C61.4727 35.089 60.1278 37.7192 58.5432 40.2H54.2893Z" fill="#FDB822" />
                <circle cx="45" cy="45" r="44" stroke="#FDB822" strokeWidth="2" />

                <animateTransform
                    attributeName="transform"
                    dur="1.5s"
                    type="translate"
                    values="0 25 ; 0 -25; 0 25"
                    repeatCount="indefinite"
                    begin="0.1" />

            </svg>

            <svg width="115" height="115" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M87.8181 25.129V24.9383C87.8181 23.6303 87.3093 22.4021 86.3848 21.4776C85.4603 20.5531 84.2321 20.0454 82.9252 20.0454H82.7345C81.4276 20.0454 80.1993 20.5542 79.2748 21.4787L74.352 26.4016C72.6848 25.5613 70.5199 25.7997 69.1642 27.1554L67.701 28.6186C66.7731 28.1508 65.7001 28.0122 64.6869 28.2251C61.7638 25.1423 57.7178 23.3709 53.4545 23.3709C48.7666 23.3709 44.378 25.4616 41.4183 29.1074C39.8021 31.0983 37.3246 32.239 34.6221 32.239C34.6187 32.239 34.6132 32.239 34.6099 32.239C33.4049 32.239 32.1845 32.3831 30.984 32.6691C24.6999 34.1644 19.9654 39.4642 19.2028 45.858C18.5222 51.589 21.0229 57.1914 25.7297 60.4792C26.8637 61.2718 27.7272 62.357 28.2925 63.6185C27.5432 64.4377 27.1197 65.4852 27.1197 66.6026C27.1197 67.3375 27.317 68.0359 27.6518 68.6677L26.2008 70.1188C24.793 71.5266 24.5524 73.6438 25.4359 75.3177L20.5241 80.2294C19.5996 81.1539 19.0908 82.3822 19.0908 83.6891V83.8797C19.0908 85.1867 19.5996 86.4149 20.5241 87.3394C21.4486 88.2639 22.6768 88.7727 23.9838 88.7727H24.1744C25.4813 88.7727 26.7096 88.2639 27.6341 87.3394L32.5458 82.4276C33.1921 82.769 33.8971 82.9597 34.6099 82.9597C35.745 82.9597 36.8812 82.5274 37.7447 81.6627L39.1958 80.2117C39.8276 80.5465 40.526 80.7438 41.2609 80.7438C42.4448 80.7438 43.5588 80.2826 44.3958 79.4457L47.3056 76.5359C47.3954 76.6334 47.4907 76.7243 47.5694 76.833C50.5125 80.879 55.1527 83.2302 60.1121 83.2302C60.3937 83.2302 60.6775 83.2224 60.9612 83.2069C66.6346 82.902 71.7193 79.3327 74.2312 73.8943C74.6646 72.9554 75.0005 71.9944 75.2299 71.0388C76.0391 67.6723 78.0488 64.7802 80.8877 62.8924C85.7463 59.6623 88.3646 54.0377 87.7216 48.2136C87.2572 44.0024 84.957 40.0994 81.5207 37.5387C82.1559 36.265 82.1392 34.763 81.4741 33.5015L86.3859 28.5898C87.3093 27.6653 87.8181 26.437 87.8181 25.129ZM73.8665 28.7228L79.1407 33.997C80.0042 34.8617 80.0042 36.2673 79.1407 37.1319L77.8416 38.4311L69.4324 30.0219L70.7316 28.7228C71.5696 27.8859 73.0284 27.8859 73.8665 28.7228ZM26.9989 58.6635C22.9639 55.8435 20.8212 51.0381 21.4054 46.1208C22.0583 40.6459 26.1132 36.1065 31.4972 34.8262C32.5303 34.5801 33.5768 34.456 34.6099 34.456H34.6221C37.9964 34.456 41.1002 33.016 43.1398 30.5053C45.6761 27.3804 49.4372 25.5879 53.4545 25.5879C56.8908 25.5879 60.1653 26.9248 62.6284 29.2793C62.5919 29.3136 62.5486 29.3369 62.5132 29.3724L29.9442 61.9413C29.2237 60.6422 28.2293 59.5226 26.9989 58.6635ZM26.0666 85.772C25.5612 86.2774 24.8883 86.5557 24.1744 86.5557H23.9838C23.2688 86.5557 22.597 86.2774 22.0915 85.772C21.5861 85.2665 21.3078 84.5936 21.3078 83.8797V83.6891C21.3078 82.9741 21.5861 82.3023 22.0915 81.7969L26.8504 77.0381L30.8254 81.0132L26.0666 85.772ZM33.0425 80.0953L27.7682 74.821C26.9047 73.9575 26.9047 72.5497 27.7682 71.6862L29.0674 70.387L37.4765 78.7961L36.1773 80.0953C35.3138 80.9588 33.906 80.9588 33.0425 80.0953ZM42.8283 77.8783C41.9648 78.7418 40.557 78.7418 39.6935 77.8783L29.9852 68.17C29.1217 67.3065 29.1217 65.8987 29.9852 65.0352L60.6597 34.3606L68.1898 41.8907L69.7572 40.3233L62.2272 32.7932L64.0806 30.9398C64.4996 30.5219 65.0561 30.2913 65.648 30.2913C66.2399 30.2913 66.7964 30.5219 67.2154 30.9398L76.9237 40.6481C77.7872 41.5127 77.7872 42.9183 76.9237 43.7829L46.2492 74.4575L38.7191 66.9274L37.1517 68.4948L44.6818 76.0249L42.8283 77.8783ZM85.5168 48.4575C86.0689 53.4535 83.8242 58.2777 79.6595 61.0457C76.355 63.2427 74.015 66.6081 73.0739 70.5201C72.8777 71.3348 72.5895 72.1584 72.2181 72.9654C70.0853 77.5845 65.6203 80.736 60.8426 80.9921C56.31 81.257 52.03 79.1941 49.363 75.5294C49.2155 75.3265 49.0404 75.1514 48.8697 74.9729L78.4922 45.3503C79.8989 43.9437 80.1395 41.8264 79.2571 40.1515L80.1395 39.2691C83.1191 41.465 85.1167 44.8282 85.5168 48.4575ZM85.6011 25.129C85.6011 25.844 85.3229 26.5158 84.8174 27.0212L80.0586 31.78L76.0835 27.8049L80.8423 23.0461C81.3478 22.5407 82.0206 22.2624 82.7345 22.2624H82.9252C83.6401 22.2624 84.3119 22.5407 84.8174 23.0472C85.3229 23.5516 85.6011 24.2234 85.6011 24.9383V25.129Z" fill="#FDB822" />
                <path d="M70.2035 44.2277L71.7787 42.6524L74.0061 44.8798L72.4309 46.455L70.2035 44.2277Z" fill="#FDB822" />
                <path d="M32.3346 64.2705L33.9098 62.6953L36.1372 64.9227L34.562 66.4979L32.3346 64.2705Z" fill="#FDB822" />
                <path d="M34.3636 40.303V38.1818C28.5735 38.1818 23.8636 42.4646 23.8636 47.7273H26.197C26.197 43.6333 29.8615 40.303 34.3636 40.303Z" fill="#FDB822" />
                <circle cx="52.5" cy="52.5" r="51.5" stroke="#FDB822" strokeWidth="2" />

                <animateTransform
                    attributeName="transform"
                    dur="1.5s"
                    type="translate"
                    values="0 25 ; 0 -25; 0 25"
                    repeatCount="indefinite"
                    begin="0.2" />
            </svg>



            <svg width="135" height="135" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="62.5" cy="62.5001" r="61.5" stroke="#FDB822" strokeWidth="2" />
                <path d="M47.4946 15.0804C46.0383 15.3021 42.8399 16.1887 42.5268 16.4495C42.4588 16.5017 42.309 16.5538 42.1866 16.5538C42.0777 16.5538 41.8055 16.6451 41.5877 16.7494C41.3835 16.8537 41.1386 16.945 41.0705 16.945C40.8119 16.945 37.559 18.4445 35.9394 19.3051C34.6736 19.957 31.6658 21.8607 30.4817 22.7343C27.3104 25.0553 23.8806 28.3672 21.3627 31.5487C20.8864 32.1616 20.4372 32.7092 20.3692 32.7874C20.3147 32.8526 19.9472 33.3872 19.5525 33.9609C19.1715 34.5347 18.8176 35.0301 18.7768 35.0693C18.6543 35.1605 17.2796 37.3772 17.2796 37.4684C17.2796 37.5076 17.0074 37.977 16.6671 38.4985C16.3269 39.0331 16.0547 39.5025 16.0547 39.5416C16.0547 39.5808 15.8097 40.1284 15.4967 40.7673C14.5439 42.7362 14.4214 43.01 14.4214 43.1404C14.4214 43.2056 14.3126 43.4534 14.1901 43.7011C13.7818 44.4704 13.7409 44.5877 13.7409 44.7442C13.7409 44.8355 13.6593 45.0702 13.5504 45.2527C13.3326 45.67 12.6521 47.8084 12.3118 49.1384C12.1757 49.673 12.0396 50.7291 12.0124 51.4854C11.9444 53.0631 12.1485 53.676 12.8154 53.8976C13.1285 54.0019 13.251 53.9758 13.5504 53.702C13.8498 53.4412 13.8906 53.3239 13.809 52.9327C13.5368 51.6288 13.9723 48.682 14.6392 47.2347C14.7481 47.013 14.8298 46.7131 14.8298 46.5697C14.8298 46.4132 14.8842 46.2567 14.9659 46.2176C15.0339 46.1785 15.102 46.0481 15.102 45.9438C15.102 45.7743 15.2517 45.4092 15.7825 44.2618C15.9594 43.8967 16.3949 42.9057 16.6127 42.3842C17.2252 40.9499 19.5389 36.8165 19.9609 36.3992C20.0561 36.308 20.1378 36.1645 20.1378 36.0993C20.1378 36.0341 20.3964 35.643 20.723 35.2127C21.0361 34.7954 21.3899 34.326 21.4988 34.1565C21.6758 33.9088 22.3835 32.983 22.751 32.5266C23.0912 32.1094 24.357 30.6229 24.7517 30.1796C25.0103 29.8928 26.1808 28.7453 27.3377 27.637C30.645 24.4816 34.4423 21.8216 38.2396 20.0092C38.5798 19.8397 39.2876 19.5137 39.8047 19.2529C40.8527 18.7574 44.405 17.4796 45.5891 17.1667C47.0591 16.7755 48.5426 16.5538 49.6314 16.5538C51.2783 16.5538 51.3463 16.619 52.7482 19.8136C52.8571 20.0613 53.0068 20.3612 53.0612 20.4655C53.1293 20.5829 53.2245 20.8698 53.279 21.1175C53.3334 21.3652 53.4287 21.6521 53.4968 21.7694C53.6329 22.0172 54.4631 24.4294 54.7761 25.4856C54.8986 25.9159 55.0483 26.3853 55.1028 26.5287C55.2253 26.8025 55.5519 27.8456 55.8105 28.7453C55.8922 29.0322 56.0419 29.5537 56.1508 29.9188C56.2733 30.2709 56.4502 30.8968 56.5455 31.2879C56.6407 31.6791 56.8313 32.3311 56.9538 32.7222C57.2532 33.6871 57.5526 34.8737 57.7024 35.6169C57.7704 35.9429 57.9065 36.5036 58.029 36.8556C58.3012 37.6771 58.4645 38.2769 58.7912 39.6981C58.9409 40.337 59.1178 41.0802 59.1995 41.328C59.2675 41.5757 59.4445 42.3711 59.6078 43.0883C59.7711 43.8054 59.9481 44.4965 60.0297 44.6138C60.0978 44.7442 60.1522 44.9659 60.1522 45.1093C60.1522 45.2527 60.2475 45.8525 60.37 46.4393C60.4789 47.0391 60.6694 47.9649 60.7783 48.5255C60.9552 49.4383 60.9552 49.5426 60.7375 49.9207C60.2611 50.7161 56.3005 54.3018 53.0068 56.9096C52.0404 57.6789 51.1149 58.4091 50.9652 58.5265C50.4344 58.9437 48.5018 60.3128 47.7668 60.7953C47.0318 61.2647 47.0046 61.2777 46.2288 61.1473C45.8069 61.0821 45.3986 61.0039 45.3305 60.9648C45.2761 60.9257 44.895 60.8344 44.4867 60.7692C43.6701 60.6258 42.9351 60.4562 39.6006 59.6478C39.1106 59.5305 38.4165 59.374 38.0354 59.2958C37.6679 59.2175 37.2324 59.1132 37.0827 59.048C36.933 58.9828 36.5655 58.8785 36.2661 58.8133C35.9666 58.7351 35.3814 58.5786 34.9731 58.4613C34.5648 58.3439 33.9251 58.1744 33.544 58.0962C33.1765 58.0049 32.7682 57.9006 32.6593 57.8615C32.5504 57.8093 31.9924 57.6529 31.4344 57.4964C30.8764 57.3269 30.1686 57.1183 29.8692 57.027C29.5698 56.9487 28.9573 56.7662 28.5082 56.6489C28.059 56.5315 27.569 56.3881 27.4193 56.3229C27.2696 56.2707 26.4394 56.0099 25.5819 55.7361C24.7245 55.4753 23.8942 55.2146 23.7445 55.1624C23.5948 55.0972 23.1729 54.9407 22.7918 54.8234C21.2402 54.3018 19.4709 53.4673 19.2667 53.1674C19.0762 52.8675 19.4845 50.4944 19.852 49.8294C19.92 49.7121 20.1786 49.0732 20.41 48.4343C20.655 47.7823 20.968 47 21.1177 46.674C21.5941 45.6048 23.4587 42.0582 23.8262 41.5236C25.7589 38.7071 26.6027 37.4945 26.7524 37.3511C26.8477 37.2598 27.0927 36.9599 27.2832 36.6861C28.0862 35.5517 31.693 31.9399 33.2582 30.7012C33.612 30.4143 34.102 30.0232 34.347 29.8406C34.5784 29.6581 35.3814 29.0713 36.1299 28.5367C37.314 27.6892 37.9946 27.2458 39.9817 26.0202C40.6894 25.5768 40.7575 24.8597 40.1178 24.5207C39.7911 24.3381 39.7095 24.3512 39.029 24.6772C38.3893 24.9901 35.8577 26.6069 35.4222 26.972C35.3269 27.0503 35.0547 27.2458 34.7961 27.4153C34.2926 27.7413 33.0676 28.6671 32.8635 28.8627C32.7954 28.9409 32.2102 29.4234 31.5705 29.9319C30.3183 30.9489 28.0046 33.1786 27.1471 34.2217C26.8477 34.5738 26.521 34.9519 26.4258 35.0562C26.0719 35.4083 24.67 37.2468 24.0031 38.1986C23.6356 38.7332 23.2954 39.2026 23.2546 39.2417C23.2001 39.2809 23.0232 39.5677 22.8462 39.8937C22.6829 40.2197 22.4652 40.5717 22.3699 40.676C22.2746 40.7934 21.8119 41.5757 21.3627 42.4363C20.9 43.2969 20.4644 44.0531 20.41 44.1314C20.3556 44.1966 20.0697 44.7833 19.7975 45.4353C19.5253 46.0742 19.2123 46.7913 19.1034 47.026C18.9945 47.2477 18.9129 47.5215 18.9129 47.6258C18.9129 47.7432 18.8584 47.8605 18.7904 47.9127C18.7223 47.9518 18.6134 48.1735 18.559 48.3951C18.5182 48.6298 18.4229 48.9037 18.3684 49.021C18.314 49.1253 18.1643 49.5426 18.0418 49.9338C17.3749 52.1765 17.2524 53.2978 17.6335 53.9367C17.9193 54.3931 18.7904 55.019 19.5934 55.3449C19.9336 55.4753 20.478 55.697 20.8183 55.8274C21.1586 55.9578 21.5397 56.1273 21.6621 56.1925C21.7983 56.2707 21.9752 56.3229 22.0705 56.3229C22.1657 56.3229 22.4107 56.4011 22.6149 56.5054C22.819 56.6097 23.1865 56.7271 23.4315 56.7792C23.6765 56.8314 23.9487 56.9227 24.0167 56.9748C24.1937 57.0922 27.9093 58.2266 30.4817 58.9307C31.0397 59.0871 31.6249 59.2567 31.7746 59.3219C31.9244 59.387 32.6593 59.5826 33.4079 59.7652C34.1564 59.9477 35.1092 60.1824 35.5175 60.2998C37.1916 60.7692 38.7159 61.1473 38.9881 61.1473C39.1514 61.1473 39.3284 61.1995 39.41 61.2647C39.4781 61.3299 39.8456 61.4472 40.2131 61.5124C40.5941 61.5906 41.4108 61.7732 42.0505 61.9297C44.2825 62.4773 44.7181 62.5686 45.8477 62.712C46.4602 62.7902 47.1679 62.8163 47.3993 62.7772C47.8621 62.6729 48.842 62.1383 49.7539 61.4863C50.0669 61.2647 50.4616 60.9908 50.625 60.8865C51.1558 60.5345 55.4703 57.1313 56.4094 56.3098C60.3019 52.9458 62.1938 51.1333 62.1938 50.7552C62.1938 50.677 62.2754 50.5857 62.3707 50.5466C62.5885 50.4814 62.5612 47.7562 62.3435 47.5476C62.2618 47.4694 62.1938 47.1956 62.1938 46.9478C62.1938 46.687 62.1257 46.2437 62.0577 45.9568C61.8807 45.2919 61.5405 43.8576 61.3091 42.7623C61.1049 41.8104 60.6966 40.1936 60.193 38.329C60.0161 37.651 59.7983 36.8295 59.7303 36.5036C59.6622 36.1776 59.5397 35.8125 59.4717 35.6951C59.39 35.5647 59.3356 35.2909 59.3356 35.0823C59.3356 34.8737 59.2675 34.5347 59.1859 34.326C59.1042 34.1304 58.9545 33.635 58.8456 33.2438C58.7503 32.8526 58.5734 32.1746 58.4509 31.7443C58.3284 31.314 58.1651 30.7012 58.0834 30.3752C58.0018 30.0492 57.8929 29.7233 57.8385 29.6581C57.784 29.5798 57.6887 29.2669 57.6343 28.9409C57.5799 28.6149 57.4846 28.289 57.4301 28.2238C57.3757 28.1455 57.2804 27.8848 57.226 27.637C57.1715 27.3893 56.9946 26.7373 56.8177 26.2027C56.6271 25.6681 56.3549 24.7815 56.1916 24.2469C56.0283 23.7123 55.8513 23.2168 55.7833 23.1385C55.7152 23.0734 55.6608 22.9299 55.6608 22.8126C55.6608 22.7083 55.5791 22.4605 55.4703 22.278C55.375 22.0954 55.2525 21.7173 55.198 21.4304C55.13 21.1566 55.0483 20.8567 54.9803 20.7915C54.9258 20.7133 54.8442 20.5047 54.7897 20.296C54.7353 20.1005 54.5584 19.631 54.3678 19.2529C54.1909 18.8878 53.9051 18.262 53.7554 17.8708C53.279 16.6973 52.4351 15.5759 51.7819 15.263C51.2783 15.0283 50.9925 14.9892 49.5225 15.0022C48.597 15.0152 47.6851 15.0543 47.4946 15.0804Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M61.173 17.4666C58.6414 17.6882 57.2396 17.8708 56.8721 18.0533C56.3685 18.3141 56.2324 18.7965 56.5454 19.2399C56.804 19.631 56.8585 19.631 60.0841 19.2138C63.4323 18.7835 66.726 18.8226 71.1766 19.3442C71.789 19.4094 73.6128 19.7484 74.6472 19.9961C76.9338 20.5177 79.0297 21.5739 79.3428 22.3692C79.4653 22.6822 79.3564 23.4254 79.0161 24.638C78.9073 25.0292 78.7439 25.616 78.6623 25.9419C78.567 26.2679 78.4581 26.646 78.3901 26.7895C78.3356 26.9329 78.1451 27.4545 77.9817 27.963C77.8184 28.4585 77.6279 28.9279 77.5734 29.0061C77.519 29.0713 77.4237 29.3321 77.3693 29.5668C77.3148 29.8015 77.1923 30.1535 77.0835 30.3491C76.9746 30.5447 76.8929 30.7924 76.8929 30.8968C76.8929 31.0141 76.8385 31.1575 76.784 31.2227C76.716 31.301 76.4302 31.966 76.1443 32.7222C75.8585 33.4785 75.5727 34.1435 75.5047 34.2087C75.4502 34.2869 75.3958 34.4173 75.3958 34.5086C75.3958 34.6129 75.2188 35.0562 75.0011 35.5126C74.7697 35.9559 74.5519 36.4905 74.5111 36.6731C74.4567 36.8686 74.3614 37.0642 74.2933 37.1033C74.2253 37.1425 74.1708 37.2598 74.1708 37.3641C74.1708 37.4684 73.885 38.1204 73.5448 38.8115C73.2045 39.5025 72.8098 40.3631 72.6601 40.7151C72.1701 41.9017 71.1493 43.7924 70.8499 44.0401C70.428 44.4052 68.89 44.7051 66.8893 44.7964C64.6572 44.9007 64.0992 45.1745 64.3306 46.009C64.4531 46.4393 64.9158 46.5697 66.2224 46.5045C69.4753 46.348 71.2991 45.9438 72.1021 45.2006C72.5512 44.7833 73.1909 43.6229 74.7017 40.3761C74.933 39.8807 75.1236 39.4634 75.1236 39.4373C75.1236 39.4112 75.3413 38.9549 75.5999 38.4203C75.8585 37.8857 76.0763 37.3902 76.0763 37.325C76.0763 37.2598 76.226 36.8947 76.4166 36.5296C76.6071 36.1515 76.7568 35.8125 76.7568 35.7603C76.7704 35.6951 76.8793 35.4213 77.029 35.1344C77.1787 34.8476 77.2876 34.5477 77.3012 34.4695C77.3012 34.3782 77.3965 34.1435 77.5054 33.9479C77.6143 33.7393 77.7095 33.4785 77.7095 33.3611C77.7095 33.2568 77.764 33.1134 77.8184 33.0352C77.8865 32.97 78.077 32.5397 78.254 32.0703C78.4173 31.6009 78.6487 31.0402 78.7439 30.8055C78.8528 30.5838 78.9345 30.31 78.9345 30.2057C78.9345 30.0883 79.0025 29.9579 79.0706 29.9188C79.1522 29.8797 79.2067 29.7363 79.2067 29.6189C79.2203 29.5016 79.3292 29.1626 79.4789 28.8757C79.6286 28.5889 79.7375 28.2368 79.7511 28.0803C79.7511 27.9369 79.8055 27.7674 79.8736 27.6892C79.9416 27.624 80.0641 27.311 80.1322 26.9851C80.2138 26.6591 80.3772 26.0462 80.4997 25.616C80.8127 24.5207 81.1121 23.0733 81.1121 22.6822C81.1121 21.9389 80.7991 21.3261 80.0914 20.6611C79.3836 19.9961 78.8936 19.7223 77.4373 19.1616C77.029 19.0052 76.5663 18.8226 76.4166 18.7574C76.1035 18.627 75.2325 18.4184 74.2389 18.2228C73.8714 18.1576 73.3542 18.0403 73.1092 17.962C72.8643 17.8968 72.1021 17.7795 71.4079 17.7143C70.7138 17.6491 69.6658 17.5448 69.067 17.4796C67.8284 17.3362 62.8062 17.3362 61.173 17.4666Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M91.143 25.2248C90.9116 25.5378 90.898 25.5899 91.1157 25.8898C91.2927 26.1506 91.4288 26.2158 91.769 26.1767C92.1365 26.1376 92.2046 26.0854 92.2454 25.7464C92.2862 25.2639 92.1637 25.0684 91.7282 24.9771C91.4696 24.9119 91.3335 24.9771 91.143 25.2248Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M84.052 28.628C83.8342 28.8236 83.7798 29.0713 83.8342 29.4625C83.8478 29.5668 84.12 29.9189 84.4331 30.2449C85.4402 31.2489 86.4202 32.8266 87.6315 35.3562C87.8629 35.8386 88.0534 36.295 88.0534 36.3732C88.0534 36.4514 88.1079 36.6079 88.1759 36.7383C88.3529 37.0382 89.0878 39.3852 89.292 40.2849C89.5234 41.3411 89.605 43.5186 89.4145 43.7403C89.0062 44.2097 88.4073 44.3401 86.3521 44.4052C84.2834 44.4835 80.6086 44.314 79.1522 44.0793C78.2131 43.9358 77.7776 44.0532 77.5462 44.5096C77.3285 44.992 77.6687 45.4223 78.4173 45.6048C79.4108 45.8395 82.8407 46.0873 85.1272 46.0873C88.8837 46.0873 90.5305 45.5918 91.0341 44.2879C91.211 43.8315 91.2247 40.9108 91.0477 40.2849C90.9797 40.0372 90.83 39.5026 90.7211 39.1114C90.6122 38.7202 90.4216 38.0683 90.3264 37.6771C90.1494 37.0121 89.5914 35.4996 89.292 34.8737C88.5979 33.4003 88.1759 32.618 87.6043 31.6792C86.8285 30.4274 86.6652 30.2188 85.7124 29.1626C84.9775 28.3672 84.4875 28.2108 84.052 28.628Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M94.9129 28.5236C94.5726 28.7322 94.5726 29.1495 94.9129 29.4494C95.1851 29.6841 95.294 29.7232 95.5118 29.6058C95.9609 29.3711 96.029 28.9278 95.6751 28.654C95.3484 28.4062 95.1579 28.3671 94.9129 28.5236ZM95.4846 29.0712C95.4846 29.2147 95.4709 29.332 95.4573 29.332C95.4573 29.332 95.3348 29.2147 95.1987 29.0712C94.9537 28.8235 94.9674 28.8105 95.2123 28.8105C95.3893 28.8105 95.4846 28.9017 95.4846 29.0712Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M97.9208 32.4615C97.7303 32.7614 98.2067 33.4915 98.615 33.5046C98.8736 33.5046 99.2411 33.0091 99.1866 32.6962C99.1458 32.4354 99.0641 32.3963 98.5605 32.3832C98.2475 32.3702 97.9617 32.3963 97.9208 32.4615Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M100.929 36.4905C100.398 37.0512 101.079 37.7814 101.786 37.4163C102.072 37.2728 102.167 36.8426 101.963 36.5427C101.759 36.2428 101.187 36.2167 100.929 36.4905ZM101.664 36.8947C101.664 37.0773 101.569 37.1555 101.364 37.1555C101.092 37.1555 101.079 37.1425 101.324 36.8947C101.46 36.7513 101.596 36.6339 101.623 36.6339C101.637 36.6339 101.664 36.7513 101.664 36.8947Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M103.596 40.6369C103.052 40.8455 103.161 41.8495 103.733 41.8495C104.413 41.8495 104.672 41.3019 104.236 40.8455C103.923 40.5326 103.882 40.5196 103.596 40.6369Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M105.23 45.7742C105.257 46.2045 105.339 46.348 105.584 46.4262C105.842 46.5175 105.924 46.4914 105.978 46.2828C106.019 46.1393 106.142 46.022 106.237 46.022C106.346 46.022 106.427 45.9568 106.427 45.8916C106.427 45.8134 106.373 45.7612 106.291 45.7612C106.223 45.7612 106.155 45.6439 106.155 45.5004C106.155 45.2918 106.06 45.2396 105.665 45.2396C105.189 45.2396 105.189 45.2396 105.23 45.7742Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M106.808 50.025C106.686 50.0511 106.55 50.2337 106.495 50.4292C106.332 51.0551 107.312 51.4724 107.679 50.9247C108.033 50.4162 107.489 49.8555 106.808 50.025ZM107.339 50.5857C107.353 50.7552 107.285 50.8465 107.135 50.8465C106.985 50.8465 106.89 50.7422 106.89 50.5857C106.89 50.4292 106.985 50.3249 107.108 50.3249C107.23 50.3249 107.326 50.4423 107.339 50.5857Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M107.693 54.9408C107.748 55.0711 107.707 55.1103 107.571 55.0581C107.435 55.006 107.38 55.0842 107.38 55.3189C107.38 55.7361 107.68 55.9578 108.156 55.9056C108.877 55.8274 108.632 54.7582 107.897 54.7582C107.72 54.7582 107.652 54.8234 107.693 54.9408Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M13.4143 58.8264C13.2646 59.048 13.1829 59.8043 13.1012 61.8645C12.9787 65.1242 12.9787 64.5375 13.1693 68.384C13.251 70.1051 13.3871 71.8393 13.4551 72.2305C13.5368 72.6217 13.6593 73.3258 13.7545 73.7952C13.8362 74.2646 13.9859 75.0469 14.0948 75.5554C14.2037 76.0509 14.3534 76.755 14.4214 77.1071C14.4895 77.4591 14.612 77.8112 14.6937 77.8894C14.7617 77.9546 14.8298 78.1111 14.8298 78.2154C14.8298 78.6196 15.8369 80.3408 16.2997 80.7319L16.776 81.1231L18.4229 81.0579C19.3348 81.0318 20.2603 80.9275 20.4781 80.8623C20.7094 80.7841 21.526 80.5233 22.3154 80.3016C23.1048 80.08 24.1392 79.767 24.6292 79.6367C25.1192 79.4932 25.6364 79.3237 25.7861 79.2716C25.9358 79.2194 26.453 79.0369 26.943 78.8674C27.4329 78.7109 27.8821 78.5283 27.9637 78.4631C28.0318 78.411 28.2087 78.3588 28.3721 78.3588C28.5218 78.3458 28.8892 78.2415 29.1887 78.0981C29.4881 77.9546 29.8284 77.8503 29.9509 77.8373C30.0597 77.8373 30.2095 77.7851 30.2911 77.733C30.3592 77.6678 30.7266 77.5113 31.0941 77.3809C31.4752 77.2636 31.9652 77.081 32.183 76.9897C32.4143 76.8985 33.2173 76.5986 33.9931 76.3378C34.7553 76.064 35.4222 75.7901 35.463 75.738C35.5039 75.6728 35.6264 75.6206 35.7489 75.6206C35.953 75.6206 37.5182 74.9948 38.852 74.3689C39.2331 74.1994 39.5734 74.056 39.6278 74.056C39.6686 74.056 40.3492 73.7691 41.125 73.404C43.6293 72.2566 43.7517 71.9958 43.7517 67.9276C43.7517 65.3328 43.7245 64.9417 43.5068 64.6287C43.1665 64.1202 42.6629 64.042 42.241 64.4201C41.9144 64.707 41.9007 64.7982 41.9824 65.5154C42.1866 67.4582 42.2002 68.6056 42.0505 69.7661C41.9688 70.4572 41.8463 71.07 41.8055 71.1483C41.6694 71.3569 37.6407 73.1693 35.6536 73.9125C35.2453 74.069 34.7825 74.2515 34.6328 74.3167C33.8842 74.6297 32.2782 75.2295 31.938 75.3077C31.7338 75.3468 31.5297 75.4381 31.4888 75.5033C31.448 75.5685 31.3255 75.6206 31.2166 75.6206C31.0261 75.6206 30.0189 75.9988 29.5289 76.2596C29.4064 76.3247 29.1206 76.416 28.8756 76.4551C28.6443 76.5073 28.4129 76.6116 28.3721 76.6768C28.3176 76.742 28.1543 76.7942 27.991 76.7942C27.8276 76.8072 27.4465 76.9115 27.1471 77.0549C26.8477 77.1984 26.5074 77.3027 26.3986 77.3157C26.2761 77.3157 26.1263 77.3679 26.0583 77.42C25.9766 77.4722 25.5547 77.6286 25.1056 77.759C24.6564 77.8894 23.7718 78.1632 23.1321 78.3588C20.5325 79.1673 18.9809 79.5323 18.1098 79.5323C17.4974 79.5323 17.4293 79.4932 17.1299 79.0369C16.5991 78.2676 16.4902 78.0329 16.3949 77.5243C16.3405 77.2636 16.2452 77.0158 16.1772 76.9767C16.1091 76.9376 16.0547 76.742 16.0547 76.5334C16.0547 76.3247 15.9594 75.8945 15.8505 75.5815C15.6055 74.8644 15.415 73.7821 15.1972 71.8393C15.102 71.0179 14.9795 70.2616 14.925 70.1703C14.857 70.0791 14.8025 67.5364 14.8161 64.5114C14.8161 61.2256 14.7617 58.9176 14.68 58.7742C14.4759 58.4222 13.6729 58.4613 13.4143 58.8264Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M107.748 59.8043C107.598 60.1042 107.693 60.6127 107.925 60.8213C108.156 61.0169 108.265 61.03 108.537 60.9126C108.877 60.7561 109.095 60.2476 108.959 59.9086C108.877 59.7 107.857 59.6217 107.748 59.8043Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M16.8167 60.1433C16.4629 60.391 16.422 61.1212 16.5854 64.6026C16.7487 68.058 16.9528 70.5354 17.1298 71.1873C17.1978 71.4351 17.3203 72.0218 17.402 72.4912C17.715 74.2124 17.7967 74.4993 18.0417 74.6688C18.3411 74.8774 18.94 74.8904 19.1577 74.6818C19.3619 74.4862 19.3619 73.3909 19.1713 72.6868C18.6814 70.9005 18.0961 64.8765 18.0961 61.5645C18.0961 60.7431 18.0417 60.2346 17.9328 60.1302C17.715 59.9216 17.1162 59.9347 16.8167 60.1433Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M72.7827 60.5084C72.4016 60.717 71.6258 61.8253 70.8772 63.2336C70.4553 64.042 70.4417 64.1463 70.4281 65.5936C70.4281 67.067 70.4417 67.1322 70.9045 67.9798C71.1631 68.4622 71.6394 69.1663 71.9797 69.5314C74.7698 72.6477 75.0147 73.9647 73.436 77.0549C73.2318 77.4461 72.946 77.9416 72.8099 78.1633C72.4424 78.737 72.4696 79.3237 72.8779 79.5845C73.3135 79.8583 73.3951 79.8453 73.8715 79.4672C74.2934 79.1281 75.668 76.6246 75.668 76.1813C75.668 76.0509 75.7497 75.8553 75.845 75.7771C76.0491 75.5685 76.0763 72.6738 75.8586 72.2175C75.2461 70.8875 74.7425 70.0791 74.0212 69.2967C73.0004 68.1754 72.4969 67.4843 72.211 66.8323C71.6666 65.5675 72.1702 63.9246 73.7218 61.9427C74.1981 61.3429 74.2662 61.03 74.0348 60.6127C73.8715 60.3389 73.191 60.2737 72.7827 60.5084Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M107.734 64.8243C107.543 65.5284 107.625 65.711 108.115 65.711C108.51 65.711 108.578 65.6588 108.646 65.3589C108.687 65.1633 108.646 64.9026 108.564 64.7722C108.333 64.4331 107.843 64.4723 107.734 64.8243Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M76.2533 65.737C75.7769 66.3238 75.6544 68.2144 76.0219 69.4662C76.3077 70.4702 76.9882 71.761 77.6007 72.413C78.2812 73.1692 78.8392 74.108 79.1523 75.0338C79.4653 75.9726 79.4925 77.9676 79.2203 78.9194C79.0434 79.5062 79.0434 79.5584 79.3428 79.8583C79.7375 80.2625 80.1594 80.2755 80.5269 79.8843C81.1802 79.2063 81.2891 75.6858 80.7039 74.2515C80.35 73.3648 79.9281 72.6086 79.4789 72.1C79.2067 71.7741 78.6759 71.0439 78.3084 70.4702L77.6415 69.427L77.6279 67.7059C77.6279 66.5063 77.5735 65.9326 77.451 65.7892C77.2332 65.5414 76.4302 65.5153 76.2533 65.737Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M106.958 69.5314C106.849 69.6749 106.876 70.3659 106.999 70.4963C107.407 70.9788 108.319 70.3007 107.965 69.7792C107.856 69.6097 107.04 69.4141 106.958 69.5314Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M105.706 74.2906C105.665 74.3428 105.652 74.6166 105.665 74.9035C105.679 75.399 105.706 75.425 106.087 75.425C106.427 75.425 106.495 75.3729 106.468 75.1251C106.441 74.9687 106.509 74.8383 106.604 74.8383C106.7 74.8383 106.713 74.7992 106.632 74.734C106.564 74.6818 106.495 74.5514 106.495 74.4471C106.495 74.2515 105.801 74.1211 105.706 74.2906ZM106.291 74.9948C106.291 75.06 106.237 75.0991 106.155 75.0991C106.087 75.0991 106.019 74.9687 106.019 74.7992C106.019 74.5645 106.046 74.5514 106.155 74.7079C106.223 74.8122 106.291 74.9426 106.291 74.9948Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M40.1995 76.3378C40.077 76.5203 40.0089 76.7811 40.0634 76.9637C40.1042 77.1201 40.1995 77.7851 40.2811 78.424C40.3628 79.076 40.5261 80.3016 40.635 81.1622C41.0161 84.109 41.2066 87.9686 41.0161 88.8944C40.8936 89.4811 40.5125 89.5072 38.1715 89.0508C37.7224 88.9596 37.1644 88.8161 36.9194 88.7118C36.688 88.6075 36.4158 88.5293 36.3069 88.5293C35.9803 88.5162 34.6873 88.0338 33.1765 87.3688C32.6866 87.1471 32.2374 86.9646 32.1966 86.9646C32.0197 86.9646 29.2976 85.3086 28.4401 84.6958C28.2496 84.5524 27.5146 83.8613 26.7933 83.1572C25.3778 81.7751 25.0376 81.6186 24.4795 82.1532C24.1665 82.4531 24.2073 82.9355 24.602 83.3789C25.3914 84.2525 25.895 84.7349 26.6844 85.3869C28.0863 86.5082 28.3313 86.6908 28.9846 87.0559C29.3248 87.2515 29.6242 87.447 29.6651 87.4862C29.8012 87.6296 31.938 88.6858 32.7955 89.0248C34.0068 89.5203 35.5992 90.0809 36.4022 90.2896C36.8513 90.4069 37.4094 90.5634 37.6271 90.6286C38.3485 90.8372 40.5397 91.0328 41.1658 90.9415C42.0097 90.8242 42.4452 90.433 42.6357 89.6376C42.9215 88.451 42.7174 82.753 42.3363 80.9536C42.2546 80.5624 42.1185 79.7149 42.0505 79.076C41.7647 76.5464 41.5605 76.0118 40.8119 76.0118C40.5533 76.0118 40.3492 76.1161 40.1995 76.3378Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M103.773 79.1413C103.515 79.4151 103.515 79.4281 103.842 79.6759C104.223 79.9366 104.386 79.9888 104.386 79.8062C104.386 79.741 104.508 79.715 104.658 79.7541C104.889 79.8193 104.93 79.7671 104.889 79.389C104.862 78.9978 104.808 78.9457 104.44 78.9066C104.155 78.8805 103.95 78.9587 103.773 79.1413Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M54.1638 83.1833C51.7003 83.3528 51.3737 83.5875 51.3737 85.2044C51.3737 86.2214 51.6731 88.5945 51.8364 88.8814C51.9045 89.0118 52.0133 89.4029 52.095 89.768C52.3128 90.759 52.5169 91.5674 52.653 91.8543C52.7619 92.102 53.1566 93.0147 53.5241 93.9405C53.701 94.3708 54.2999 95.4921 54.9668 96.6526C55.7698 98.0739 57.5119 100.134 58.9002 101.308C60.2204 102.429 60.0843 102.338 61.1731 103.016C62.2756 103.707 63.8407 104.437 64.916 104.763C65.3243 104.893 65.7734 105.05 65.9231 105.115C66.4403 105.363 70.8229 106.002 72.0342 106.002C73.5858 106.002 77.2061 105.415 77.6416 105.102C77.7097 105.037 78.0091 104.945 78.3086 104.906C78.5944 104.854 78.9346 104.763 79.0571 104.698C79.1796 104.632 79.7649 104.359 80.3637 104.098C84.8279 102.103 88.4891 98.4129 90.2857 94.0709C90.4898 93.5624 90.7484 92.9626 90.8573 92.7279C90.9662 92.4932 91.0887 92.0629 91.1295 91.75C91.184 91.4501 91.2792 91.085 91.3609 90.9546C91.4698 90.7329 91.5787 90.0027 91.8236 87.6818C91.8781 87.1081 91.8373 86.9777 91.5378 86.6647C91.1023 86.2214 90.9117 86.2214 90.4762 86.6647C90.1632 86.9907 90.1087 87.1993 89.9862 88.4641C89.8365 89.9767 89.5507 91.437 89.3874 91.6065C89.3193 91.6587 89.2785 91.8152 89.2785 91.9455C89.2785 92.089 89.156 92.4671 88.9927 92.8061C88.843 93.1451 88.6252 93.6276 88.5163 93.8753C88.1216 94.7489 87.8494 95.2444 87.55 95.6356C87.3867 95.8572 87.1961 96.1571 87.1417 96.3136C86.8286 97.0829 84.3379 99.6386 82.7183 100.851C82.2283 101.216 80.5679 102.194 80.0235 102.442C77.5055 103.576 76.7706 103.798 74.171 104.189C73.1502 104.359 69.6251 104.267 68.7269 104.072C68.3866 103.994 67.8422 103.876 67.5019 103.798C66.3042 103.55 65.6509 103.368 64.916 103.042C63.3644 102.364 62.1803 101.764 61.8945 101.503C61.7175 101.36 61.3228 101.073 60.9962 100.864C60.2748 100.395 58.1652 98.2955 57.5664 97.448C56.9267 96.5483 55.7698 94.6837 55.484 94.0709C55.3343 93.784 55.1437 93.3668 55.0348 93.1582C54.2863 91.6196 53.8371 90.094 53.2111 87.095C53.0341 86.2084 53.0477 85.1913 53.2519 85.0349C53.6466 84.7219 58.9002 84.5915 67.2978 84.6698C71.8572 84.7219 75.6273 84.7871 75.6681 84.8132C75.709 84.8262 79.7785 84.8914 84.719 84.9436C92.4905 85.0218 93.7835 85.0609 94.3143 85.2435C96.1926 85.8824 97.6353 87.4601 98.3838 89.6768C98.7649 90.7981 98.7241 91.8021 98.2613 92.9495C97.2133 95.5313 94.709 97.109 91.5923 97.1351C90.2857 97.1351 90.1496 97.1872 90.0271 97.6827C89.959 97.9565 90.0135 98.113 90.2857 98.3607C90.5987 98.6737 90.7212 98.6997 91.8236 98.6997C94.0285 98.6867 95.5665 98.2043 97.1453 97.0568C98.2613 96.2484 99.4999 94.7228 99.704 93.9144C99.7585 93.7188 99.8401 93.4841 99.9082 93.4189C99.9626 93.3407 100.085 92.8713 100.167 92.3758C100.248 91.8934 100.344 91.437 100.385 91.3849C100.548 91.1241 99.8946 88.5684 99.4454 87.6818C99.0235 86.8343 97.7441 85.3087 97.0636 84.8262C96.3831 84.3568 94.9676 83.6658 94.4096 83.5223C94.2191 83.4832 92.6267 83.4441 90.8709 83.4441C89.1288 83.4311 86.5564 83.3789 85.1818 83.3137C81.9834 83.1573 56.0556 83.0399 54.1638 83.1833Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M22.9143 92.9104C22.6829 93.2233 22.6965 93.2494 23.0096 93.5493C23.241 93.7709 23.4315 93.8492 23.6493 93.797C23.9487 93.7188 24.0167 93.5493 23.9623 93.0277C23.9079 92.4931 23.241 92.4149 22.9143 92.9104ZM23.6357 93.1972C23.6357 93.3276 23.5132 93.4319 23.3771 93.4319C23.1593 93.4319 23.1593 93.4058 23.3634 93.1972C23.4859 93.0668 23.5948 92.9625 23.622 92.9625C23.6357 92.9625 23.6493 93.0668 23.6357 93.1972Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M26.3033 95.805C26.0311 95.9615 26.0175 96.5483 26.2761 96.5352C26.3986 96.5222 26.4938 96.6134 26.4802 96.7308C26.4666 97.0046 26.9838 97.0698 27.2016 96.8221C27.2968 96.7178 27.3513 96.4309 27.3241 96.1962C27.2832 95.8311 27.2288 95.7659 26.8749 95.7398C26.6572 95.7268 26.3849 95.7529 26.3033 95.805Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M29.8827 98.6346C29.5697 98.9475 29.6105 99.3126 30.0052 99.5604C30.6041 99.9255 31.1485 99.4821 30.9988 98.7389C30.9443 98.4259 30.1822 98.3477 29.8827 98.6346Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M33.8025 100.969C33.7753 101.047 33.7617 101.321 33.7889 101.568C33.8161 101.973 33.8705 102.025 34.2652 102.051C34.8641 102.103 35.1227 101.634 34.7824 101.138C34.5511 100.799 33.9114 100.695 33.8025 100.969Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M37.872 103.342C37.7223 103.72 37.8992 103.981 38.3348 104.02C38.675 104.046 38.7839 104.007 38.852 103.785C38.9064 103.642 38.8792 103.433 38.7975 103.342C38.5934 103.12 37.9673 103.12 37.872 103.342Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M93.5907 105.097C93.5591 105.145 93.3485 105.194 93.1379 105.194C92.9273 105.194 92.3482 105.252 91.8534 105.329C90.5267 105.542 89.5791 105.678 88.6946 105.785C88.2629 105.833 87.6733 105.92 87.3784 105.969C86.7151 106.075 84.7461 106.249 82.8719 106.356C82.0823 106.404 80.9872 106.482 80.4502 106.54C77.5652 106.85 67.9836 106.85 65.0565 106.55C64.5406 106.492 63.3508 106.404 62.4242 106.356C60.8869 106.269 60.013 106.201 56.2646 105.872C55.6013 105.814 54.8853 105.726 54.6852 105.678C54.4852 105.63 53.9587 105.562 53.527 105.533C53.0953 105.504 52.4741 105.426 52.1372 105.368C51.6107 105.281 51.5159 105.291 51.2738 105.446C51.0842 105.571 51.0105 105.717 51 105.93C51 106.375 51.3685 106.559 52.4636 106.656C52.9584 106.695 53.9587 106.801 54.6852 106.889C55.4117 106.966 56.6647 107.102 57.4755 107.179C61.3081 107.547 60.8764 107.518 64.53 107.712C65.4566 107.76 66.8991 107.847 67.7415 107.906C69.7104 108.031 75.6278 108.031 77.7969 107.906C79.7974 107.78 82.1244 107.644 84.0091 107.518C84.7567 107.47 85.4937 107.402 85.6411 107.373C85.7885 107.334 86.494 107.247 87.2205 107.169C87.947 107.102 89.0105 106.966 89.5896 106.889C90.1687 106.801 90.9794 106.695 91.3795 106.646C93.5065 106.385 94.4962 106.191 94.7489 105.969C95.0542 105.707 95.0753 105.562 94.8437 105.242C94.6963 105.039 94.591 105 94.1593 105C93.8855 105 93.6223 105.039 93.5907 105.097Z" fill="#FDB822" stroke="#FDB822" />
                <path d="M61.8535 109.965C61.5677 110.37 61.7038 110.891 62.1802 111.204C63.0104 111.778 66.4674 112 74.0348 112C82.4324 112.013 83.9159 111.765 83.807 110.383C83.7662 109.939 83.7118 109.835 83.3851 109.731C83.0993 109.626 82.9088 109.652 82.5685 109.822C82.3235 109.939 81.398 110.135 80.4997 110.252C76.9474 110.709 64.3578 110.409 63.2554 109.835C62.6974 109.548 62.0985 109.6 61.8535 109.965Z" fill="#FDB822" stroke="#FDB822" />

                <animateTransform
                    attributeName="transform"
                    dur="1.5s"
                    type="translate"
                    values="0 25 ; 0 -25; 0 25"
                    repeatCount="indefinite"
                    begin="0.3" />
            </svg>
        </div >
    )
}

export default Spinner;