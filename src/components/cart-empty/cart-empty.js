import './styles.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartEmpty = () => {

    return (
        <Col className='cart-empty'>
            <Row>
                <svg width="400" height="293" viewBox="0 0 400 293" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M194.748 151.738L205.48 138.989C205.786 138.625 205.955 138.14 205.955 137.623C205.955 137.105 205.786 136.621 205.48 136.257L204.506 135.099C204.2 134.736 203.791 134.535 203.356 134.535C202.92 134.535 202.498 134.736 202.192 135.099L195.918 142.537L195.918 118.907C195.918 117.842 195.216 117 194.319 117L192.941 117C192.044 117 191.271 117.842 191.271 118.907L191.271 142.621L184.961 135.1C184.655 134.736 184.258 134.536 183.822 134.536C183.387 134.536 182.984 134.736 182.678 135.1L181.706 136.257C181.4 136.621 181.233 137.106 181.233 137.624C181.233 138.141 181.402 138.626 181.708 138.99L192.44 151.739C192.747 152.104 193.157 152.304 193.594 152.303C194.031 152.304 194.442 152.104 194.748 151.738Z" fill="#FDB822" />
                    <path d="M176.6 148.523C177.012 148.771 177.372 149.099 177.658 149.487C177.944 149.874 178.152 150.315 178.269 150.784C178.385 151.252 178.409 151.739 178.339 152.217C178.268 152.695 178.105 153.154 177.858 153.568L159.238 184.775H226.771L208.143 153.568C207.645 152.732 207.497 151.73 207.733 150.784C207.969 149.838 208.569 149.024 209.401 148.523C210.233 148.022 211.229 147.873 212.17 148.111C213.111 148.348 213.92 148.951 214.418 149.788L235.298 184.775H247.856C248.825 184.775 249.756 185.162 250.441 185.852C251.127 186.541 251.512 187.477 251.512 188.452V195.807C251.512 196.782 251.127 197.717 250.441 198.407C249.756 199.097 248.825 199.484 247.856 199.484H138.153C137.183 199.484 136.253 199.097 135.568 198.407C134.882 197.717 134.497 196.782 134.497 195.807V188.452C134.497 187.477 134.882 186.541 135.568 185.852C136.253 185.162 137.183 184.775 138.153 184.775H150.711L171.576 149.788C171.823 149.374 172.148 149.012 172.534 148.724C172.92 148.437 173.358 148.228 173.824 148.11C174.29 147.993 174.774 147.969 175.249 148.04C175.724 148.111 176.181 148.275 176.593 148.523H176.6ZM159.319 250.967L148.495 206.839H141.401L152.554 254.1C152.842 255.304 153.525 256.374 154.492 257.14C155.459 257.906 156.654 258.322 157.885 258.322H228.138C229.371 258.324 230.567 257.908 231.536 257.142C232.504 256.376 233.188 255.305 233.477 254.1L244.608 206.839H237.5L226.683 250.967H159.326H159.319Z" fill="#684F40" />
                    <path d="M285.786 192.024C285.786 245.192 244.222 288.049 193.247 288.049C142.273 288.049 100.709 245.192 100.709 192.024C100.709 138.857 142.273 96 193.247 96C244.222 96 285.786 138.857 285.786 192.024Z" stroke="#FDB822" strokeWidth="8" />
                    <path d="M340.122 71.7822C337.74 71.7822 335.734 73.7995 335.734 76.1951C335.734 78.5906 337.74 80.6079 340.122 80.6079C342.504 80.6079 344.51 78.5906 344.51 76.1951C344.385 73.6734 342.504 71.7822 340.122 71.7822ZM340.122 77.9602C339.119 77.9602 338.241 77.0776 338.241 76.069C338.241 75.0603 339.119 74.1778 340.122 74.1778C341.125 74.1778 342.003 75.0603 342.003 76.069C342.003 77.0776 341.125 77.9602 340.122 77.9602Z" fill="#FDB822" />
                    <path d="M84.4462 55.3076C82.0641 55.3076 80.0581 57.3249 80.0581 59.7204C80.0581 62.1159 82.0641 64.1332 84.4462 64.1332C86.8283 64.1332 88.8343 62.1159 88.8343 59.7204C88.7089 57.1988 86.8283 55.3076 84.4462 55.3076ZM84.4462 61.4855C83.4432 61.4855 82.5656 60.603 82.5656 59.5943C82.5656 58.5857 83.4432 57.7031 84.4462 57.7031C85.4492 57.7031 86.3268 58.5857 86.3268 59.5943C86.3268 60.603 85.4492 61.4855 84.4462 61.4855Z" fill="#FDB822" />
                    <path d="M93.2152 135.327C90.8331 135.327 88.8271 137.344 88.8271 139.74C88.8271 142.136 90.8331 144.153 93.2152 144.153C95.5974 144.153 97.6033 142.136 97.6033 139.74C97.478 137.218 95.5974 135.327 93.2152 135.327ZM93.2152 141.505C92.2123 141.505 91.3346 140.623 91.3346 139.614C91.3346 138.605 92.2123 137.723 93.2152 137.723C94.2182 137.723 95.0959 138.605 95.0959 139.614C95.0959 140.623 94.2182 141.505 93.2152 141.505Z" fill="#FDB822" />
                    <path d="M147.042 4.11864C144.66 4.11864 142.654 6.13593 142.654 8.53148C142.654 10.927 144.66 12.9443 147.042 12.9443C149.424 12.9443 151.43 10.927 151.43 8.53148C151.305 6.00985 149.424 4.11864 147.042 4.11864ZM147.042 10.2966C146.039 10.2966 145.162 9.41405 145.162 8.4054C145.162 7.39675 146.039 6.51418 147.042 6.51418C148.045 6.51418 148.923 7.39675 148.923 8.4054C148.923 9.41405 148.045 10.2966 147.042 10.2966Z" fill="#684F40" />
                    <path d="M306.776 157.686C304.394 157.686 302.388 159.703 302.388 162.098C302.388 164.494 304.394 166.511 306.776 166.511C309.158 166.511 311.164 164.494 311.164 162.098C311.039 159.577 309.158 157.686 306.776 157.686ZM306.776 163.864C305.773 163.864 304.895 162.981 304.895 161.972C304.895 160.964 305.773 160.081 306.776 160.081C307.779 160.081 308.656 160.964 308.656 161.972C308.656 162.981 307.779 163.864 306.776 163.864Z" fill="#684F40" />
                    <path d="M330.207 106.564C329.072 103.852 326.478 103.114 320.948 103.806C314.557 104.671 313.593 104.024 312.308 97.8623C311.494 93.7659 311.39 93.5466 309.084 92.1502C305.871 90.0961 303.795 90.1536 299.285 92.3803C295.797 94.0417 295.452 94.1109 293.903 93.5223C291.31 92.4836 288.717 93.245 286.824 95.7258C284.907 98.0911 284.093 98.495 283.312 97.2718C283.037 96.7871 282.291 96.637 281.568 96.9024L280.283 97.3408L284.516 119.531C287.601 135.651 289.012 141.848 289.597 142.39C290.297 142.909 293.866 142.252 311.651 138.376C323.309 135.792 333.269 133.369 333.74 133.035C334.554 132.331 334.531 132.216 333.304 130.842C332.053 129.354 332.03 129.238 332.96 127.311C333.786 125.465 333.763 124.75 332.582 119.407C331.813 116.142 331.171 112.311 331.056 110.834C330.999 109.345 330.62 107.441 330.207 106.564ZM328.612 115.645C328.715 117.364 329.254 119.476 330.011 120.884C331.009 122.903 331.078 123.55 330.596 125.327C330.206 126.665 329.735 127.3 329.116 127.184C328.565 127.115 327.9 127.069 327.555 127.138C327.211 127.207 326.913 126.307 326.844 124.761C326.535 118.403 326.202 116.43 325.17 114.837C322.829 111.168 318.492 109.159 314.453 109.852C311.458 110.394 310.793 110.047 310.116 107.243C309.106 103.366 306.399 100.25 302.853 98.9232C300.157 97.9653 293.306 99.2226 292.044 100.976C291.195 102.107 291.08 102.13 289.497 101.369C287.466 100.457 287.328 99.4645 289.084 97.4914C290.209 96.2453 290.713 96.0838 292.997 96.1647C294.5 96.2225 297.851 95.6689 301.086 94.8383L306.583 93.3732L308.177 95.0926C309.313 96.3043 309.761 97.3544 309.795 98.7276C309.852 101.716 311.872 104.97 314.545 106.413C316.679 107.544 317.287 107.602 321.189 106.817C324.459 106.16 325.767 106.137 326.777 106.714C328.142 107.579 328.176 107.752 328.612 115.645ZM309.345 136.079L291.64 139.459L287.866 121.377C285.411 109.33 284.276 103.018 284.597 102.534C284.918 102.049 291.722 106.261 306.937 116.463C325.192 128.753 328.622 131.304 327.911 131.927C327.394 132.331 319.913 134.015 309.345 136.079ZM323.081 122.937C322.105 123.134 310.517 115.863 310.333 114.94C310.173 114.132 312.123 112.84 314.017 112.459C316.369 111.986 318.916 112.794 321.257 114.664C322.886 115.956 323.253 116.603 323.643 119.464C324.056 122.141 323.941 122.764 323.081 122.937ZM306.708 112.009C305.824 112.366 294.029 104.958 293.822 103.919C293.65 103.054 295.544 101.773 297.609 101.358C300.088 100.919 303.335 101.946 305.194 103.793C307.052 105.639 308.142 111.42 306.708 112.009Z" fill="#FDB822" />
                    <path d="M303.471 119.14C293.225 112.319 291.068 111.373 291.079 113.531C291.113 114.604 312.581 128.948 313.843 128.695C316.195 128.222 313.717 125.96 303.471 119.14Z" fill="#FDB822" />
                    <path d="M77.3447 77.4642C74.8242 79.3053 70.8766 86.0352 71.4946 87.4303C71.6372 87.7523 71.6015 88.5406 71.4171 89.1382C70.7927 91.3494 72.1889 96.3843 74.3698 99.7149C81.1326 110.058 82.7846 112.919 85.0426 118.017C86.849 122.095 87.8236 123.716 88.5487 123.905C89.2203 124.117 93.518 122.378 103.047 117.965L116.564 111.694L115.655 109.207C114.579 106.344 114.591 103.765 115.668 97.9399C116.917 91.2008 116.846 89.8815 115.016 85.7496C113.09 81.4031 110.796 79.4103 107.23 78.8904C104.859 78.6055 101.72 79.6306 101.589 80.7834C101.387 82.3544 99.9129 81.9233 97.5832 79.5604C94.3264 76.263 91.64 74.8327 88.0678 74.4442C84.9116 74.126 80.1088 75.4491 77.3447 77.4642ZM86.0049 77.1735C88.9947 77.1161 90.647 77.6601 93.4701 79.5438C95.3541 80.7557 96.0672 81.7864 97.7667 85.3335C99.585 89.149 99.906 89.5838 100.887 89.3359C101.659 89.0527 102.147 88.1257 102.361 86.292C102.73 83.3591 104.026 81.9399 106.338 81.8011C108.335 81.6752 109.358 82.2451 111.242 84.6154C113.476 87.3428 114.082 91.3174 113.089 95.8823C112.66 97.8123 112.155 100.871 111.97 102.627L111.667 105.852L100.272 110.976C91.7655 114.801 88.6449 116.011 87.9792 115.667C87.5156 115.489 85.7209 112.886 84.0213 109.918C82.3218 106.95 79.7546 102.892 78.3521 100.884C74.7864 95.7311 73.9902 93.6439 74.1809 90.019C74.5623 82.7692 79.6034 77.3494 86.0049 77.1735ZM112.344 109.409C112.653 110.106 111.042 110.959 101.858 115.282C95.5692 118.174 90.6295 120.202 90.2432 120.054C88.157 119.255 89.9879 118.174 100.842 113.422C110.329 109.349 112.035 108.711 112.344 109.409Z" fill="#684F40" />
                    <path d="M81.6706 87.2304C81.932 87.8206 82.6096 88.4812 83.1742 88.7421C83.7151 88.9493 87.8101 91.0976 92.2023 93.627C97.2363 96.4469 100.6 97.9586 101.189 97.694C102.847 96.9483 101.522 95.5494 96.5117 92.7832C84.1196 85.8074 80.4346 84.44 81.6706 87.2304Z" fill="#684F40" />
                    <path d="M83.0422 96.8449C82.9232 97.7349 82.8994 97.6813 91.9691 102.805C99.6599 107.133 102.412 108.276 102.947 107.457C103.678 106.356 102.032 105.101 93.6218 100.453C85.2118 95.805 83.2505 95.1426 83.0422 96.8449Z" fill="#684F40" />
                    <path d="M38.3971 74.4411C32.2421 77.2758 29.5023 85.0143 32.8594 89.9253C34.351 92.0489 34.3732 93.23 32.9762 94.8829C32.1495 95.8733 30.8161 96.5713 29.027 96.9114C25.856 97.5413 26.1191 97.2719 16.2386 109.98C9.36689 118.704 8.9266 119.469 9.16911 121.511C9.53634 124.602 11.8656 126.326 15.1156 125.864C17.3187 125.532 17.8449 124.993 25.3826 115.417C33.8425 104.66 34.9653 102.686 34.0927 100.308C33.7146 99.1123 33.9084 98.2596 35.1822 96.5628C36.7426 94.2976 36.8008 94.2904 38.6052 95.073C39.7864 95.5777 41.7472 95.6897 44.1317 95.3941C47.3886 94.9904 48.0588 94.6706 50.1261 92.6977C56.8914 86.0584 53.7207 75.2643 44.5037 73.6841C41.1941 73.1473 41.0778 73.1617 38.3971 74.4411ZM43.0846 76.642C43.3588 76.9631 43.0349 77.7136 42.3412 78.3323C40.728 79.6569 37.1627 84.4198 36.4705 86.0446C36.051 86.9845 35.709 87.0861 35.1232 86.626C34.4792 86.1731 34.3241 85.3636 34.5095 83.4465C34.6879 81.4711 35.2168 80.4585 37.0141 78.6967C39.3444 76.4545 42.1761 75.4524 43.0846 76.642ZM47.3153 79.965C47.447 81.0733 42.7823 87.5114 40.4104 89.4036C37.6591 91.5796 37.1342 90.6384 39.0795 87.1418C42.1337 81.5543 47.0035 77.34 47.3153 79.965ZM50.7983 84.446C51.2418 88.1793 47.5186 92.6066 43.5638 93.0969C41.7027 93.3276 42.0502 92.2783 44.998 88.7757C46.4975 86.9917 48.0067 84.7921 48.375 83.9178C49.333 81.5497 50.4796 81.7628 50.7983 84.446ZM31.4493 101.406C31.8995 102.711 16.0902 123.139 14.4618 123.341C12.9496 123.528 11.5204 121.929 12.0659 120.56C12.2874 119.94 16.1089 114.85 20.5216 109.271C28.0593 99.695 28.5786 99.0979 29.8318 99.712C30.5851 100.092 31.3219 100.83 31.4493 101.406Z" fill="#FDB822" />
                    <path d="M180.62 29.18C179.509 30.3568 178.748 30.4744 173.6 30.4156C170.44 30.3568 166.462 30.0626 164.706 29.7095C160.903 29.0035 157.802 29.7095 155.93 31.71C154.584 33.181 154.467 35.005 155.696 35.4168C156.047 35.5345 157.1 34.8284 157.978 33.887C159.85 31.71 161.313 31.5924 168.685 33.0045C176.057 34.4166 180.972 33.4752 183.136 30.3568C184.833 28.0032 182.727 27.0618 180.62 29.18Z" fill="#FDB822" />
                    <path d="M143.41 37.7703C143.176 37.9468 143 43.8895 143 50.8912C143 61.0113 143.176 64.1886 143.936 66.3656C145.048 69.7193 148.909 73.6615 152.127 74.7794C155.053 75.8385 167.281 75.8973 170.616 74.8382C173.541 73.9557 178.514 69.3663 178.982 67.0128C179.626 64.012 180.387 62.6588 181.791 62.1292C183.721 61.3643 187.173 57.3045 188.578 54.1273C189.982 50.8912 190.274 43.4776 189.104 41.9478C187.583 40.1238 185.418 39.1236 182.727 39.1236C180.855 39.1236 179.86 38.8294 179.626 38.241C179.333 37.4761 176.818 37.3585 161.547 37.3585C151.776 37.3585 143.585 37.535 143.41 37.7703ZM176.935 40.8887C177.754 42.1832 177.637 44.772 176.701 45.5369C176.174 46.0076 171.552 46.1842 161.079 46.0665L146.218 45.89L146.042 43.5953C145.691 39.4178 144.872 39.6531 161.43 39.8297C173.951 40.0062 176.467 40.1238 176.935 40.8887ZM185.711 42.6539C188.812 44.3013 187.056 53.7154 182.844 57.8341C180.504 60.1287 180.153 59.3638 179.977 51.1265C179.86 44.5367 179.977 43.4776 180.855 42.8304C182.025 41.889 184.19 41.8301 185.711 42.6539ZM176.642 49.5379C177.461 50.3028 177.578 51.5384 177.403 57.3045C177.169 65.3653 176.291 67.7188 172.371 70.7196L169.797 72.6612H161.547C153.473 72.6024 153.18 72.6024 150.899 71.0138C149.611 70.1312 147.973 68.3072 147.271 67.0716C146.101 64.9535 145.925 63.8944 145.925 57.0103C145.925 52.774 146.101 49.1261 146.335 48.9495C146.51 48.7142 153.239 48.5377 161.196 48.5377C173.892 48.5377 175.823 48.6553 176.642 49.5379Z" fill="#FDB822" />
                    <path d="M240.868 36.8524C239.777 37.7004 239.782 37.9356 240.642 41.858C241.506 45.9568 241.508 46.0156 239.974 47.8736C239.18 48.8914 238.512 50.2594 238.525 50.7886C238.559 52.1409 236.055 55.0207 234.826 55.0481C233.481 55.0782 225.501 63.7279 225.309 65.3794C225.215 66.3228 224.358 67.1655 222.278 68.2709C220.661 69.1307 218.815 70.2308 218.124 70.7169C217.09 71.5048 216.214 71.5832 212.75 71.1899C209.638 70.8476 208.409 70.875 207.896 71.4159C206.926 72.4377 207.251 76.0191 208.465 77.7569C209.622 79.4959 213.649 81.3474 216.109 81.3513C217.103 81.3291 218.584 82.002 219.839 83.0329C221.693 84.5799 222.224 84.7446 226.086 84.6583C228.72 84.5995 231.577 84.1239 233.781 83.3099C235.696 82.62 237.903 81.9236 238.719 81.7877C239.593 81.5917 242.626 78.8178 246.333 74.9111C251.294 69.6232 252.424 68.0096 252.39 66.6573C252.367 65.7165 252.906 63.8807 253.517 62.5728C254.466 60.7279 254.719 59.1338 254.617 55.0768C254.548 50.019 254.545 49.9014 252.624 48.0029C251.302 46.6793 250.688 45.5164 250.655 44.2229C250.594 41.8122 249.056 38.8462 247.208 37.5344C245.181 36.1089 242.187 35.764 240.868 36.8524ZM245.98 39.9151C247.186 41.3 248.512 45.1532 248.129 46.2207C247.749 47.4058 244.529 47.4189 244.032 46.2534C243.843 45.7281 243.621 43.9093 243.577 42.1454C243.491 38.7352 244.234 38.0126 245.98 39.9151ZM251.058 50.9206C252.616 52.3565 252.176 60.4849 250.473 62.582C249.961 63.1817 242.114 58.474 240.547 56.6853C239.702 55.704 239.942 53.5808 241.236 51.4929C241.968 50.3587 242.549 50.1693 246.119 50.0896C248.986 50.0255 250.396 50.2294 251.058 50.9206ZM239.509 59.65C240.88 60.6195 243.681 62.5571 245.764 63.9225C247.791 65.348 249.465 66.7226 249.472 67.0166C249.488 67.6633 238.768 79.0804 238.183 79.0935C237.949 79.0987 236.803 77.7712 235.65 76.1497C234.497 74.5282 232.376 71.6929 230.982 69.7827C229.53 67.9325 228.371 66.0758 228.362 65.7231C228.334 64.6059 234.725 57.9919 235.895 57.9658C236.48 57.9527 238.139 58.7393 239.509 59.65ZM227.66 70.3863C228.017 70.6137 229.347 72.29 230.681 74.1428C231.958 75.9969 233.294 77.9084 233.597 78.3135C234.566 79.5861 233.131 80.7359 229.58 81.58C226.323 82.4175 222.687 82.2045 222.019 81.2194C221.167 79.9441 220.998 73.2412 221.786 71.9882C222.801 70.436 226.231 69.4769 227.66 70.3863ZM217.343 74.5583C217.698 74.7269 218.073 75.6598 218.098 76.6593L218.146 78.5408L215.385 78.1907C212.39 77.8457 210.125 76.249 210.616 74.8262C210.834 74.1742 211.591 73.9808 213.762 74.1676C215.286 74.2512 216.93 74.4499 217.343 74.5583Z" fill="#684F40" />
                    <path d="M76.9126 156.181C76.3039 155.332 76.1276 155.331 73.1684 155.877C70.0769 156.422 70.0328 156.422 68.6783 155.211C67.9351 154.583 66.9266 154.041 66.5299 154.037C65.516 154.026 63.4196 152.054 63.4289 151.124C63.4391 150.104 57.1535 143.834 55.921 143.644C55.2166 143.548 54.6061 142.877 53.8286 141.273C53.2239 140.025 52.4446 138.599 52.0973 138.063C51.5322 137.26 51.4948 136.594 51.8736 133.982C52.2056 131.636 52.2149 130.705 51.8222 130.302C51.0803 129.541 48.3896 129.691 47.0583 130.564C45.7275 131.393 44.2426 134.393 44.1799 136.254C44.1724 137.008 43.6323 138.111 42.8296 139.034C41.6256 140.396 41.4894 140.793 41.4602 143.719C41.4402 145.714 41.727 147.889 42.2833 149.58C42.7535 151.047 43.2216 152.737 43.3035 153.358C43.4291 154.025 45.4334 156.395 48.2698 159.305C52.1104 163.201 53.2917 164.1 54.3056 164.11C55.0109 164.117 56.373 164.574 57.3379 165.072C58.6968 165.839 59.8848 166.073 62.9264 166.103C66.717 166.186 66.8051 166.187 68.274 164.783C69.2976 163.818 70.1837 163.384 71.1534 163.394C72.9608 163.412 75.22 162.326 76.2476 160.962C77.3647 159.466 77.6959 157.209 76.9126 156.181ZM74.4941 159.969C73.4273 160.845 70.5086 161.747 69.7183 161.428C68.8397 161.109 68.9082 158.671 69.7934 158.326C70.1914 158.197 71.5593 158.078 72.8817 158.091C75.4384 158.117 75.9616 158.698 74.4941 159.969ZM66.1264 163.52C65.0129 164.661 58.9345 164.112 57.405 162.767C56.9682 162.363 60.6854 156.549 62.0635 155.41C62.8191 154.797 64.4038 155.035 65.9364 156.07C66.7682 156.655 66.896 157.099 66.869 159.803C66.8472 161.976 66.6603 163.038 66.1264 163.52ZM59.8678 154.546C59.1083 155.558 57.5887 157.626 56.5152 159.167C55.3981 160.663 54.3277 161.893 54.1073 161.891C53.6224 161.886 45.3304 153.468 45.3348 153.024C45.3366 152.847 46.3589 152.015 47.6016 151.185C48.8443 150.355 51.0197 148.826 52.4846 147.821C53.9059 146.771 55.3249 145.943 55.5894 145.946C56.4269 145.954 61.2262 150.968 61.2173 151.855C61.2129 152.298 60.5833 153.533 59.8678 154.546ZM52.1132 145.29C51.9342 145.554 50.6461 146.516 49.2257 147.477C47.8058 148.394 46.3414 149.355 46.0306 149.573C45.0537 150.273 44.2273 149.156 43.6812 146.446C43.133 143.958 43.3809 141.212 44.1352 140.731C45.1112 140.121 50.1364 140.172 51.0559 140.801C52.194 141.611 52.8291 144.233 52.1132 145.29ZM49.2386 137.369C49.1037 137.634 48.3958 137.893 47.6464 137.885L46.2358 137.871L46.5652 135.791C46.8964 133.533 48.1475 131.861 49.2015 132.271C49.6846 132.453 49.8111 133.03 49.6183 134.669C49.5186 135.821 49.3299 137.06 49.2386 137.369Z" fill="#FDB822" />
                    <path d="M369.76 129.797C365.437 130.756 361.263 132.616 356.256 135.816C349.309 140.255 344.289 145.463 339.953 152.742C337.919 156.216 337.586 157.249 337.105 161.694C336.655 166.437 336.675 166.852 338.218 169.18C339.86 171.695 343.751 174.062 346.723 174.336C348.705 174.519 355.193 173.05 358.857 171.616C366.672 168.557 376.491 160.484 380.91 153.567C384.512 147.815 384.834 146.9 385.398 141.577C385.987 135.37 385.373 133.777 381.272 131.154C378.117 129.091 374.625 128.71 369.76 129.797ZM380.545 133.863C382.082 135.009 383.603 138.812 383.397 140.979C383.18 143.262 381.301 147.578 378.734 151.712C374.235 158.858 364.513 166.526 356.104 169.649C352.266 171.067 351.136 171.199 347.115 170.828C342.686 170.419 342.458 170.339 341.162 168.507C339.045 165.417 338.87 162.92 340.522 158.524C342.795 152.532 344.652 149.69 349.464 144.818C352.515 141.792 361.16 135.56 362.964 135.136C363.383 135.056 364.063 134.706 364.562 134.397C368.32 131.968 377.523 131.635 380.545 133.863Z" fill="#FDB822" />
                    <path d="M368.098 136.791C366.307 137.689 366.024 138.194 365.819 140.361C365.674 141.884 365.907 143.145 366.388 143.662C366.815 144.115 367.162 144.797 367.123 145.207C367.084 145.617 367.431 146.299 367.858 146.751C369.04 147.924 368.635 149.718 367.053 150.28C365.901 150.647 365.097 150.454 362.888 148.951C357.027 145.043 352.789 145.716 352.328 150.576C352.139 152.567 352.547 153.845 354.409 157.147C355.666 159.39 356.52 161.536 356.301 161.988C355.344 164.026 351.425 163.192 348.062 160.224C345.786 158.183 344.737 158.086 344.565 159.901C344.387 161.775 350.062 165.784 353.209 166.074C358.402 166.494 360.569 161.614 357.448 156.719C355.247 153.267 354.645 151.557 355.17 150.365C355.93 148.545 357.271 148.669 360.537 150.802C364.627 153.542 368.177 153.928 369.781 151.891C371.374 149.97 371.502 147.383 370.128 145.13C369.523 144.07 368.927 142.302 368.858 141.173C368.691 139.208 368.755 139.155 370.795 139.343C371.96 139.451 373.775 140.15 374.816 140.955C376.797 142.378 377.974 142.369 378.113 140.905C378.207 139.909 374.092 136.812 371.741 136.182C370.598 135.84 369.463 136.031 368.098 136.791Z" fill="#FDB822" />
                    <path d="M10.0813 169.059C9.37109 172.339 9.32291 175.798 9.92765 180.252C10.7658 186.431 12.7371 191.524 16.34 196.796C18.0709 199.288 18.671 199.841 21.5556 201.567C24.6535 203.366 24.9433 203.483 27.0208 203.151C29.2573 202.808 32.1033 200.871 33.2294 198.909C33.9802 197.602 35.0264 192.671 35.2039 189.697C35.5825 183.353 33.1697 174.054 29.8404 168.839C27.0493 164.552 26.5257 164.043 23.0674 161.984C19.0134 159.63 17.7319 159.553 14.6446 161.555C12.2386 163.081 10.8755 165.367 10.0813 169.059ZM16.2655 162.906C17.5339 162.207 20.6118 162.353 22.0269 163.174C23.5185 164.04 25.8731 166.69 27.8863 169.756C31.3465 175.098 33.5137 184.203 32.9907 190.976C32.7469 194.065 32.4804 194.885 30.9568 197.539C29.2786 200.462 29.152 200.593 27.4909 200.911C24.7115 201.4 22.9506 200.736 20.4694 198.219C17.094 194.772 15.7396 192.601 13.9315 187.756C12.8276 184.705 11.3014 176.793 11.5814 175.417C11.6595 175.104 11.6347 174.525 11.5818 174.084C11.1092 170.733 13.7889 164.289 16.2655 162.906Z" fill="#684F40" />
                    <path d="M14.3334 172.4C14.3815 173.915 14.6374 174.269 16.0525 175.09C17.0469 175.668 17.9825 175.903 18.4872 175.735C18.9316 175.583 19.5068 175.558 19.7746 175.713C20.0423 175.868 20.6175 175.843 21.0619 175.691C22.2361 175.245 23.3334 176.087 23.2183 177.353C23.1047 178.262 22.7191 178.756 20.9944 179.806C16.4738 182.617 15.5944 185.748 18.7688 187.591C20.0692 188.346 21.0711 188.466 23.9151 188.22C25.844 188.057 27.5801 188.142 27.8198 188.435C28.9096 189.735 27.1021 192.173 24.012 193.558C21.899 194.485 21.5015 195.177 22.6871 195.866C23.911 196.576 28.4418 193.925 29.6342 191.848C31.5612 188.403 28.9124 185.377 24.5823 185.992C21.5293 186.424 20.1714 186.302 19.5228 185.567C18.5197 184.472 19.0276 183.587 21.516 182.006C24.6798 180.048 26.065 177.724 25.1799 175.98C24.3712 174.279 22.6443 173.379 20.6712 173.618C19.7561 173.702 18.3599 173.558 17.567 173.252C16.1724 172.75 16.1562 172.689 16.9291 171.343C17.3707 170.574 18.4215 169.543 19.3 169.079C20.8981 168.16 21.2632 167.347 20.3071 166.791C19.6569 166.414 16.2415 168.277 15.0684 169.699C14.4738 170.379 14.2455 171.221 14.3334 172.4Z" fill="#684F40" />
                    <path d="M308.036 17.832C303.411 16.0404 300.044 15.3963 296.965 15.8062C294.545 16.1374 293.76 16.5661 292.525 18.1372C291.18 19.847 291.046 20.491 291.536 23.656L292.111 27.1877L284.279 37.3342L276.53 47.4709L291.212 59.1128L305.894 70.7547L313.846 60.9287L321.752 51.0663L325.38 50.7165C330.698 50.2064 332.262 48.5959 332.094 43.8853C332.052 41.0015 330.583 37.6605 327.464 33.3863C324.518 29.1751 312.488 19.5607 308.036 17.832ZM322.75 32.2751C328.651 38.9799 330.529 43.6955 328.312 46.5143C327.258 47.8544 326.574 48.0618 323.849 47.927L320.621 47.7686L312.86 57.4461L305.054 67.0872L293.061 57.8032C284.638 51.2743 281.031 48.1888 280.909 47.4917C280.731 46.6756 282.229 44.487 288.044 37.0935L295.386 27.7591L294.569 25.01C293.008 19.7959 295.712 17.5887 301.953 18.9359C308.615 20.3166 316.813 25.6165 322.75 32.2751Z" fill="#FDB822" />
                    <path d="M300.754 31.0164C299.673 31.8066 298.251 33.3558 297.531 34.3727C295.97 36.6164 296.107 38.2484 298.096 41.2725C299.255 42.9545 299.316 43.5847 298.656 45.66C298.208 47.0004 297.147 48.7762 296.291 49.6314C295.079 50.8738 294.876 51.3663 295.275 52.0939C296.113 53.6219 297.741 52.6224 300.039 49.3053C302.685 45.4151 302.789 43.7915 300.666 40.1774C299.756 38.6897 299.152 36.9843 299.331 36.3625C299.495 35.7972 300.69 34.6113 301.932 33.684C303.23 32.7729 304.353 31.6273 304.5 31.1185C304.941 29.5923 302.77 29.5166 300.754 31.0164Z" fill="#FDB822" />
                    <path d="M310.908 34.8678C307.139 38.0051 306.615 40.2422 308.738 43.8562C310.565 47.0175 310.347 49.0368 307.785 52.2162C305.012 55.7023 306.829 57.6356 309.754 54.2548C310.708 53.0604 311.827 50.8727 312.333 49.1203C313.149 46.294 313.095 45.8496 311.706 43.4887C309.703 40.093 310.347 38.0742 314.24 35.7691C315.869 34.7696 315.961 33.8165 314.509 33.152C313.811 32.8279 312.683 33.3595 310.908 34.8678Z" fill="#FDB822" />
                    <path d="M339.603 181.255C338.63 181.935 337.273 183.394 336.494 184.597C334.991 186.944 333.66 187.401 332.443 186.029C332.019 185.572 331.479 185.178 331.186 185.188C330.601 185.207 303.529 214.375 303.549 214.963C303.559 215.257 303.865 215.659 304.163 215.825C305.477 216.605 304.726 218.691 302.343 220.949C299.505 223.635 298.87 225.658 299.998 227.916C301.998 231.734 306.614 231.461 309.347 227.366C311.075 224.777 313.383 223.757 313.96 225.269C314.537 226.78 317.151 224.396 329.755 210.845L343.038 196.564L341.864 194.719L340.691 192.875L342.065 191.946C344.755 190.089 347.109 186.949 347.056 185.361C346.998 183.597 345.528 181.645 343.565 180.71C341.84 179.885 341.608 179.951 339.603 181.255ZM343.372 183.719C343.795 184.117 344.113 184.871 344.133 185.459C344.17 186.577 339.223 190.981 338.217 190.662C336.857 190.237 337.204 188.341 339.168 185.803C341.298 182.964 342.164 182.582 343.372 183.719ZM336.323 193.551L339.227 196.397L327.075 209.463L314.921 222.469L311.297 219.118C309.303 217.242 307.66 215.354 307.644 214.884C307.628 214.414 312.871 208.35 319.313 201.364C332.594 187.024 330.576 187.975 336.323 193.551ZM309.633 221.882C309.66 222.705 305.949 227.304 304.965 227.631C304.329 227.888 303.442 227.624 302.899 227.112C301.632 225.977 302.507 224.123 305.419 221.906C307.073 220.614 307.711 220.416 308.547 220.917C309.143 221.251 309.625 221.647 309.633 221.882Z" fill="#684F40" />
                    <path d="M127.105 34.297C126.391 34.2846 123.273 35.4576 119.887 34.3784C119.21 34.1627 118.489 34.5394 118.274 35.2192C118.06 35.8991 118.434 36.6249 119.11 36.8407C119.399 36.9325 119.686 37.0114 119.971 37.0785C117.611 38.7063 115.918 41.1554 115.275 44.4208C113.587 41.8025 111.205 40.0214 108.23 39.3135C110.791 37.5246 112.323 34.958 112.927 31.9679C113.282 32.5213 113.581 32.8957 113.592 32.9114C114.027 33.475 114.834 33.5777 115.394 33.141C115.955 32.7042 116.057 31.893 115.623 31.329C115.616 31.3128 113.56 28.8005 113.037 25.0347C113.008 24.3156 112.389 23.7133 111.62 23.7175C110.918 23.7126 110.25 24.287 110.22 25.0844C110.205 25.4976 112.149 32.2251 107.804 36.3469C104.974 39.0256 101.199 39.0806 100.547 39.3657C99.17 39.9696 99.5611 42.0378 101.061 42.093C101.763 42.1172 105.368 40.7667 108.985 42.2606C114.358 44.4819 115.087 51.2524 115.176 51.5451C115.471 53.1096 117.76 53.0379 117.963 51.4179C118.031 50.8664 116.086 44.3845 120.194 40.2332C122.901 37.4966 126.853 37.2785 127.51 37.0747C129.012 36.6086 128.725 34.3314 127.105 34.297Z" fill="#FDB822" />
                    <path d="M55.8565 34.9786C55.2667 34.9684 52.692 35.9369 49.8964 35.0458C49.3378 34.8677 48.7421 35.1788 48.5651 35.74C48.3882 36.3014 48.6973 36.9006 49.2554 37.0788C49.4936 37.1546 49.7303 37.2198 49.9656 37.2752C48.0172 38.6192 46.6196 40.6412 46.0887 43.3373C44.6953 41.1755 42.7283 39.705 40.2718 39.1205C42.3862 37.6435 43.6514 35.5243 44.1504 33.0556C44.4431 33.5125 44.6899 33.8217 44.6995 33.8346C45.058 34.3 45.7243 34.3848 46.1872 34.0242C46.65 33.6635 46.7344 32.9938 46.3757 32.5281C46.37 32.5148 44.6725 30.4405 44.2407 27.3313C44.2169 26.7375 43.7063 26.2403 43.0711 26.2437C42.4917 26.2396 41.9401 26.7139 41.9151 27.3723C41.9023 27.7134 43.5077 33.268 39.9201 36.6711C37.5839 38.8828 34.4667 38.9282 33.9287 39.1636C32.7916 39.6622 33.1146 41.3698 34.3532 41.4154C34.9322 41.4353 37.909 40.3203 40.8956 41.5537C45.3313 43.3878 45.9339 48.9778 46.0067 49.2195C46.2503 50.5112 48.1406 50.452 48.3081 49.1145C48.3643 48.6591 46.7581 43.3073 50.1502 39.8798C52.3848 37.6204 55.6481 37.4403 56.1901 37.272C57.4305 36.8872 57.1935 35.007 55.8565 34.9786Z" fill="#684F40" />
                    <path d="M376.328 35.1531C375.766 34.9762 373.022 35.1757 370.593 33.5292C370.108 33.2002 369.449 33.3297 369.12 33.8179C368.791 34.3061 368.918 34.9684 369.403 35.2974C369.61 35.4375 369.818 35.5671 370.028 35.6868C367.779 36.4239 365.866 37.9672 364.593 40.4024C363.869 37.9345 362.399 35.967 360.209 34.7106C362.655 33.8931 364.469 32.2191 365.647 29.9928C365.798 30.5139 365.947 30.8803 365.952 30.8954C366.164 31.4433 366.779 31.7134 367.326 31.4987C367.872 31.2839 368.142 30.6655 367.93 30.1173C367.928 30.1029 366.888 27.6327 367.355 24.5285C367.5 23.9524 367.151 23.3308 366.541 23.1542C365.987 22.9862 365.323 23.2847 365.113 23.9091C365.004 24.2327 364.97 30.0144 360.565 32.2619C357.698 33.7212 354.696 32.8817 354.113 32.9551C352.882 33.1112 352.708 34.8403 353.883 35.2349C354.432 35.418 357.603 35.1919 360.118 37.2209C363.852 40.2363 362.847 45.7681 362.848 46.0204C362.716 47.3282 364.545 47.807 365.085 46.5717C365.268 46.1509 365.243 40.5633 369.468 38.2371C372.251 36.7032 375.431 37.4549 375.999 37.4471C377.297 37.4294 377.603 35.5591 376.328 35.1531Z" fill="#684F40" />
                    <path d="M376.043 88.8668C375.301 88.7833 370.011 89.5359 367.699 84.62C366.484 82.0342 366.795 79.6901 366.729 79.396C366.669 79.1316 366.423 78.9732 366.187 79.0037C365.917 79.0346 365.739 79.2603 365.739 79.4875V80.5543C365.555 84.2215 363.908 87.3432 360.447 88.4421C358.449 89.0769 356.714 88.8027 356.39 88.8744C355.871 88.9938 355.867 89.7493 356.396 89.8683C356.849 89.9651 360.256 89.406 362.902 91.6313C363.074 91.7764 363.33 91.7523 363.473 91.5777C363.617 91.403 363.593 91.1439 363.42 90.9988C362.513 90.2352 361.424 89.6896 360.179 89.3726C363.457 88.5364 365.469 86.1667 366.239 82.8473C367.003 86.1463 368.999 88.537 372.312 89.369C369.032 90.2003 366.992 92.568 366.235 95.8783C365.953 94.665 365.483 93.5037 364.776 92.4896C364.647 92.3041 364.393 92.2599 364.21 92.3907C364.027 92.5217 363.983 92.7782 364.113 92.9637C364.362 93.3211 364.586 93.7106 364.779 94.1214C365.926 96.5612 365.723 99.0434 365.74 99.2828C365.783 99.8944 366.768 99.9252 366.737 99.169C366.682 97.8058 366.786 93.188 370.469 90.9967C372.954 89.5196 375.719 89.9511 376.088 89.867C376.644 89.7392 376.584 88.9283 376.043 88.8668Z" fill="#FDB822" />
                    <path d="M244.132 13.3208C243.263 13.1395 236.407 14.3601 233.344 8.14639C231.904 5.23133 232.004 1.99015 232.024 1.5838C232.127 0.880431 231.642 0.165355 230.875 0.0246811C230.191 -0.111516 229.424 0.325141 229.247 1.10771C229.155 1.5089 229.819 8.48352 224.787 11.7195C221.625 13.7478 217.935 13.2239 217.239 13.3019C215.677 13.4806 215.55 15.7481 217.097 16.1023C217.844 16.2714 221.556 15.594 224.852 17.7514C228.364 20.0525 229.094 24.2786 229.215 26.6153C229.231 27.9507 229.173 28.106 229.277 28.4314C229.469 29.0288 230.012 29.4298 230.627 29.4298C231.333 29.4301 231.906 28.9048 232.019 28.261C232.097 27.8195 231.755 24.4613 233.381 21.2109C233.7 20.5737 233.445 19.7973 232.811 19.4765C232.178 19.1556 231.406 19.4125 231.087 20.0496C230.924 20.3741 230.774 20.7108 230.634 21.0579C229.462 18.1671 227.451 15.969 224.656 14.7145C227.504 13.436 229.485 11.2016 230.632 8.37659C231.779 11.2223 233.744 13.447 236.604 14.719C236.324 14.8434 236.043 14.9807 235.765 15.1319C235.141 15.4712 234.909 16.2548 235.247 16.8824C235.584 17.5099 236.363 17.7432 236.987 17.404C240.019 15.7548 243.33 16.2033 244.015 16.1267C245.586 15.9456 245.705 13.6554 244.132 13.3208Z" fill="#FDB822" />
                    <path d="M78.936 205.721C78.0664 205.539 71.2105 206.76 68.1478 200.546C66.708 197.631 66.808 194.39 66.8277 193.984C66.9308 193.28 66.4452 192.565 65.6787 192.425C64.9943 192.288 64.2278 192.725 64.0506 193.508C63.9591 193.909 64.623 200.883 59.5904 204.119C56.4287 206.148 52.7386 205.624 52.0431 205.702C50.4804 205.881 50.354 208.148 51.9007 208.502C52.6475 208.671 56.36 207.994 59.6556 210.151C63.1679 212.452 63.8978 216.679 64.0186 219.015C64.0352 220.351 63.9764 220.506 64.0807 220.831C64.2726 221.429 64.8152 221.83 65.4306 221.83C66.137 221.83 66.7094 221.305 66.8227 220.661C66.9012 220.219 66.5584 216.861 68.185 213.611C68.5038 212.974 68.2486 212.197 67.6151 211.877C66.9815 211.556 66.2094 211.812 65.8905 212.45C65.7282 212.774 65.5773 213.111 65.4381 213.458C64.2654 210.567 62.2543 208.369 59.4597 207.114C62.3072 205.836 64.2882 203.602 65.4359 200.777C66.5829 203.622 68.5479 205.847 71.4076 207.119C71.1273 207.243 70.847 207.381 70.5688 207.532C69.9447 207.871 69.7127 208.655 70.0504 209.282C70.3878 209.91 71.1669 210.143 71.7911 209.804C74.8224 208.155 78.134 208.603 78.8184 208.527C80.3893 208.346 80.5085 206.055 78.936 205.721Z" fill="#FDB822" />
                </svg>
            </Row>

            <Row>
                <Link to='/shop/all' className='button-void'> Go shop now!</Link>
            </Row>
        </Col>
    )
}

export default CartEmpty