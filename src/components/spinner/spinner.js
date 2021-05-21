import React from 'react';
import './styles.css'

const Spinner = (type) => {

    const dought = <svg className='dought'fill="#fdb822" height="75" viewBox="0 0 60 60" width="75" >
        <g id="035---Mixing-Dough">
            <path id="Shape" d="m7 32.72c-.56535584-1.8587504-.90118386-3.7796867-1-5.72 0-.3572656-.19059892-.6873926-.5-.8660254s-.69059892-.1786328-1 0-.5.5087598-.5.8660254c.07586178 2.1131692.41172386 4.2089485 1 6.24.14359403.5522847.70771525.883594 1.26.74s.88359403-.7077153.74-1.26z" />
            <path id="Shape" d="m8.45 36.56c-.14025315-.3475704-.46308796-.587532-.83633389-.6216433-.37324593-.0341112-.73422987.1433557-.93516279.4597449-.20093292.3163891-.20807542.7185742-.01850332 1.0418984.44714426.9154514.94801803 1.8036676 1.5 2.66.30375662.4639192.9260808.5937566 1.38999997.29.46391913-.3037566.59375663-.9260808.29000003-1.39-.51113322-.7851569-.9752804-1.5999189-1.39-2.44z" />
            <path id="Shape" d="m59.12 5.12c.8568812-.85794728 1.1130328-2.14736832.6491479-3.26769405-.4638849-1.12032574-1.5565813-1.85123941-2.7691479-1.85230595-.7953814.00070021-1.5579306.31723005-2.12.88l-9.69 9.69c-6.1643732 2.4012507-11.7577015 6.0665499-16.42 10.76-.2066869.211415-.400375.4351582-.58.67h-25.19c-1.65685425 0-3 1.3431458-3 3v1c.0018099 12.7119222 8.01508465 24.0426927 20 28.28v2.72c0 1.6568542 1.3431458 3 3 3h14c1.6568542 0 3-1.3431458 3-3v-2.72c11.9849154-4.2373073 19.9981901-15.5680778 20-28.28v-1c0-1.6568542-1.3431458-3-3-3h-11.12c1.4047032-2.2808601 2.5932028-4.6879902 3.55-7.19zm-2.83-2.83c.2860905-.28845995.7182668-.37516186 1.0934815-.21937095s.6188811.52310588.6165185.92937095c-.0036835.26476698-.1072663.51836621-.29.71l-9.15 9.14-1.41-1.41zm-10.81 10.31.26.25-9.15 9.15h-5.59c4.2014134-4.0048886 9.1117491-7.1925375 14.48-9.4zm-7.48 44.4c0 .5522847-.4477153 1-1 1h-14c-.5522847 0-1-.4477153-1-1v-2.09c5.2349896 1.4484472 10.7650104 1.4484472 16 0zm20-32v1c-.0000002 15.4639728-12.5360272 27.9999996-28 27.9999996s-27.99999977-12.5360268-28-27.9999996v-1c0-.5522847.44771525-1 1-1h13v1c0 1.6568542 1.3431458 3 3 3h14c.5522847 0 1 .4477153 1 1v12c0 1.6568542 1.3431458 3 3 3s3-1.3431458 3-3v-12c0-.5522847.4477153-1 1-1s1 .4477153 1 1v6c0 1.6568542 1.3431458 3 3 3s3-1.3431458 3-3v-6c0-.5522847.4477153-1 1-1 1.6568542 0 3-1.3431458 3-3v-1h5c.5522847 0 1 .4477153 1 1zm-8 0c0 .5522847-.4477153 1-1 1-1.6568542 0-3 1.3431458-3 3v6c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-6c0-1.6568542-1.3431458-3-3-3s-3 1.3431458-3 3v12c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-12c0-1.6568542-1.3431458-3-3-3h-14c-.5522847 0-1-.4477153-1-1v-1h32zm-10.59-3 7.74-7.74.25.26c-1.0495915 2.6123924-2.3489528 5.1173467-3.88 7.48z" />
        </g>
    </svg>
    const coffee = <svg className='coffee'fill="#fdb822" height="80" viewBox="0 0 60 51" width="80" >
        <g id="Page-1" fill-rule="evenodd">
            <g id="008---Coffee-and-Croissant" >
                <path id="Shape" d="m57.65 43h-6.745c2.5278438-1.0887131 4.6755749-2.9033736 6.171-5.214.318727-.5301793.3593932-1.1823321.109-1.748-.066-.15-.148-.33-.24-.526 1.1869029-1.7145836 2.0713574-3.6197966 2.615-5.633.4593302-2.1816141.5646763-4.4229201.312-6.638-.102854-.9380104-.7371439-1.7327223-1.629-2.041-1.014-4.866-2.379-5.643-2.841-5.9-.5870222-.336412-1.295492-.3864909-1.924-.136-2.476.943-2.485 3.156-2.493 5.107 0 .467-.015.944-.045 1.42-.9606752.2242445-1.7360728.9311133-2.048 1.867-.19953.5831694-.4766875 1.1368117-.824 1.646-.4126926-.2196886-.8377343-.415348-1.273-.586-.4138928-.1533309-.8693158-.1515547-1.282.005l-5.135 1.962c-.4032179.1561665-.7394708.4478686-.951.825-.2377353.4337225-.4517177.8800476-.641 1.337-.2677382-.0819151-.5302264-.1800977-.786-.294v-11.453c0-1.1045695-.8954305-2-2-2h-24c-1.1045695 0-2 .8954305-2 2v1.362c-.92415187-.2402582-1.87512793-.3619025-2.83-.362-7.17 0-7.17 7.88-7.17 10.47 0 5.789 2.814 9.53 7.17 9.53 1.1539351-.0063393 2.30157749-.1705286 3.411-.488.738266 2.2190528 2.1690634 4.1426726 4.082 5.488h-8.313c-.5774462-.049152-1.15058902.1345035-1.59192723.5101105s-.71426775.9120131-.75807277 1.4898895v2c0 2.243 2.218 4 5.05 4h45.9c2.832 0 5.05-1.757 5.05-4v-2c-.043805-.5778764-.3167346-1.1142825-.7580728-1.4898895s-1.014481-.5592625-1.5919272-.5101105zm-3.462-25.974c.0747636-.0402587.1657055-.0356346.236.012.171.095.992.726 1.747 4.037-.841.035-1.931.109-3.2.273.013-.373.016-.737.017-1.076.005-2.072.106-2.829 1.2-3.246zm-3.388 7.138c.1019189-.2975694.3594957-.5147796.67-.565.185-.038.368-.065.571-.1 1.7461601-.2950592 3.513135-.4498869 5.284-.463h.066c.2442174-.0166374.4599992.1577318.495.4.2304313 1.9904468.1406276 4.0049523-.266 5.967-.37752 1.4268423-.9627788 2.7904246-1.737 4.047-1.5143404-2.7984192-3.5952424-5.250546-6.11-7.2.4325107-.6471831.7778187-1.3485584 1.027-2.086zm-9.65 4.261 5.013-1.915c5.353 2.105 8.6 8.972 9.2 10.26-.553.956-2.333 3.369-6.909 5.115-1.5695028.6177391-3.2236731.9936869-4.906 1.115h-1.319c-.6979997-.0321057-1.3886722-.1565209-2.054-.37-.057-.245-.134-.581-.211-.985-.476-2.477-1.307-8.702 1.182-13.22zm-6.091 13.032c.9858946.4784678 2.0113974.8706014 3.065 1.172.03.14.058.259.083.371h-4.907c.639346-.4505591 1.2289914-.9677978 1.759-1.543zm2.673-1.057c-1.3459917-.4450366-2.6125199-1.1015924-3.752-1.945-1.4908343-1.2477453-2.7597514-2.738799-3.753-4.41-.1188041-.2554172-.0439255-.5590914.18-.73.013-.012.026-.024.037-.036 1.3787513-1.1878761 2.8467388-2.2680555 4.391-3.231.159-.1.318-.207.511-.319.2329366-.1515624.5316094-.1581479.771-.017.6260338.3968764 1.3041874.7048221 2.015.915-.7806113 3.1988362-.9165873 6.5210707-.4 9.773zm-8.656-13.672c.0313739-.1057772.1129613-.1892359.218-.223 1.06-.4 1.545.078 2.78 1.661.212.271.439.561.683.852-1.09.731-1.987 1.409-2.665 1.955-1.04-2.318-1.226-3.703-1.016-4.245zm-19.076 4.645c-.89069279.3998395-1.85377499.613215-2.83.627-.76 0-1.17-1.819-1.17-3.53 0-4.47.676-4.47 1.17-4.47 1.02383378-.0417217 2.02845333.2866433 2.83.925zm-8-2.9c0-3.946.588-8.473 5.17-8.473.96081055-.0048014 1.91620706.1440784 2.83.441v2.149c-.8889702-.4008443-1.85491297-.6022246-2.83-.59-2.928 0-3.17 3.061-3.17 6.47 0 3.463 1.185 5.53 3.17 5.53.96441082-.0099033 1.92058186-.1788381 2.83-.5v.5c.0042461.5226935.0463564 1.0443924.126 1.561-.96002924.2835145-1.95501198.4312809-2.956.439-3.237 0-5.17-2.815-5.17-7.53zm10.233 7.551c-.1557672-.6633702-.2339578-1.3425878-.233-2.024l-.0000087-17h24.0000087v10.645c-.5240387-.0488168-1.0509886.0553921-1.517.3-.289-.33-.567-.67-.832-1.01-1.133-1.452-2.54-3.263-5.068-2.3-.6336668.2341163-1.1341067.7323661-1.371 1.365-.521 1.343-.067 3.459 1.359 6.431-.5226578.8072245-.5401172 1.8415963-.045 2.666 1.1192697 1.8743231 2.5493516 3.5444991 4.229 4.939.175.135.356.258.537.382-1.6743466 1.6573767-3.9360879 2.5855102-6.292 2.582h-6c-4.197284.0172163-7.8426871-2.8847192-8.767-6.979zm45.767 10.976c0 1.084-1.4 2-3.05 2h-45.9c-1.65 0-3.05-.916-3.05-2v-1.909c.10544796-.0634555.22699837-.0950586.35-.091h51.3c.1230016-.0040586.244552.0275445.35.091z" />
                <path id="Shape" d="m22 11c0 .5522847.4477153 1 1 1s1-.4477153 1-1c-.0066363-.705428.2755433-1.3828758.781-1.875 1.6253757-1.76631178 1.6253757-4.48368822 0-6.25-.5054567-.4921242-.7876363-1.16957203-.781-1.875 0-.55228475-.4477153-1-1-1s-1 .44771525-1 1c-.0088131 1.15932949.4275017 2.27785595 1.219 3.125.4999069.49588303.7810925 1.17086442.7810925 1.875s-.2811856 1.37911697-.7810925 1.875c-.7914983.84714405-1.2278131 1.96567051-1.219 3.125z" />
                <path id="Shape" d="m16 11c0 .5522847.4477153 1 1 1s1-.4477153 1-1c-.0066363-.705428.2755433-1.3828758.781-1.875 1.6253757-1.76631178 1.6253757-4.48368822 0-6.25-.5054567-.4921242-.7876363-1.16957203-.781-1.875 0-.55228475-.4477153-1-1-1s-1 .44771525-1 1c-.0088131 1.15932949.4275017 2.27785595 1.219 3.125.4999069.49588303.7810925 1.17086442.7810925 1.875s-.2811856 1.37911697-.7810925 1.875c-.7914983.84714405-1.2278131 1.96567051-1.219 3.125z" />
                <path id="Shape" d="m28 11c0 .5522847.4477153 1 1 1s1-.4477153 1-1c-.0066363-.705428.2755433-1.3828758.781-1.875 1.6253757-1.76631178 1.6253757-4.48368822 0-6.25-.5054567-.4921242-.7876363-1.16957203-.781-1.875 0-.55228475-.4477153-1-1-1s-1 .44771525-1 1c-.0088131 1.15932949.4275017 2.27785595 1.219 3.125.4999069.49588303.7810925 1.17086442.7810925 1.875s-.2811856 1.37911697-.7810925 1.875c-.7914983.84714405-1.2278131 1.96567051-1.219 3.125z" />
            </g>
        </g>
    </svg>
    const roller = <svg className='roller'fill="#fdb822" enable-background="new 0 0 64 64" height="75" viewBox="0 0 64 64" width="75" >
        <g>
            <path d="m63 5.586v-.172c0-1.18-.459-2.288-1.293-3.122s-1.942-1.292-3.121-1.292h-.172c-1.179 0-2.287.459-3.121 1.293l-4.441 4.441c-1.504-.758-3.457-.543-4.68.68l-1.32 1.32c-.837-.422-1.805-.547-2.719-.355-2.637-2.781-6.287-4.379-10.133-4.379-4.229 0-8.188 1.886-10.858 5.175-1.458 1.796-3.693 2.825-6.131 2.825-.003 0-.008 0-.011 0-1.087 0-2.188.13-3.271.388-5.669 1.349-9.94 6.13-10.628 11.898-.614 5.17 1.642 10.224 5.888 13.19 1.023.715 1.802 1.694 2.312 2.832-.676.739-1.058 1.684-1.058 2.692 0 .663.178 1.293.48 1.863l-1.309 1.309c-1.27 1.27-1.487 3.18-.69 4.69l-4.431 4.431c-.834.834-1.293 1.942-1.293 3.121v.172c0 1.179.459 2.287 1.293 3.121s1.942 1.293 3.121 1.293h.172c1.179 0 2.287-.459 3.121-1.293l4.431-4.431c.583.308 1.219.48 1.862.48 1.024 0 2.049-.39 2.828-1.17l1.309-1.309c.57.302 1.2.48 1.863.48 1.068 0 2.073-.416 2.828-1.171l2.625-2.625c.081.088.167.17.238.268 2.655 3.65 6.841 5.771 11.315 5.771.254 0 .51-.007.766-.021 5.118-.275 9.705-3.495 11.971-8.401.391-.847.694-1.714.901-2.576.73-3.037 2.543-5.646 5.104-7.349 4.383-2.914 6.745-7.988 6.165-13.242-.419-3.799-2.494-7.32-5.594-9.63.573-1.149.558-2.504-.042-3.642l4.431-4.431c.833-.834 1.292-1.942 1.292-3.122zm-12.586 3.242 4.758 4.758c.779.78.779 2.048 0 2.828l-1.172 1.172-7.586-7.586 1.172-1.172c.756-.755 2.072-.755 2.828 0zm-42.28 27.01c-3.64-2.544-5.573-6.879-5.046-11.315.589-4.939 4.247-9.034 9.104-10.189.932-.222 1.876-.334 2.808-.334h.011c3.044 0 5.844-1.299 7.684-3.564 2.288-2.819 5.681-4.436 9.305-4.436 3.1 0 6.054 1.206 8.276 3.33-.033.031-.072.052-.104.084l-29.381 29.381c-.65-1.172-1.547-2.182-2.657-2.957zm-.841 24.455c-.456.456-1.063.707-1.707.707h-.172c-.645 0-1.251-.251-1.707-.707s-.707-1.063-.707-1.707v-.172c0-.645.251-1.251.707-1.707l4.293-4.293 3.586 3.586zm6.293-5.121-4.758-4.758c-.779-.779-.779-2.049 0-2.828l1.172-1.172 7.586 7.586-1.172 1.172c-.779.779-2.049.779-2.828 0zm8.828-2c-.779.779-2.049.779-2.828 0l-8.758-8.758c-.779-.779-.779-2.049 0-2.828l27.672-27.672 6.793 6.793 1.414-1.414-6.793-6.793 1.672-1.672c.378-.377.88-.585 1.414-.585s1.036.208 1.414.585l8.758 8.758c.779.78.779 2.048 0 2.828l-27.672 27.672-6.793-6.793-1.414 1.414 6.793 6.793zm38.51-26.541c.498 4.507-1.527 8.859-5.284 11.356-2.981 1.982-5.092 5.018-5.941 8.547-.177.735-.437 1.478-.772 2.206-1.924 4.167-5.952 7.01-10.262 7.241-4.089.239-7.95-1.622-10.356-4.928-.133-.183-.291-.341-.445-.502l26.723-26.723c1.269-1.269 1.486-3.179.69-4.69l.796-.796c2.688 1.981 4.49 5.015 4.851 8.289zm.076-21.045c0 .645-.251 1.251-.707 1.707l-4.293 4.293-3.586-3.586 4.293-4.293c.456-.456 1.063-.707 1.707-.707h.172c.645 0 1.251.251 1.707.708.456.455.707 1.061.707 1.706z" /><path d="m48 21.586h2v2.828h-2z" transform="matrix(.707 -.707 .707 .707 -1.912 41.385)" />
            <path d="m14 39.586h2v2.828h-2z" transform="matrix(.707 -.707 .707 .707 -24.598 22.615)" />
            <path d="m15 19v-2c-4.963 0-9 4.038-9 9h2c0-3.86 3.141-7 7-7z" />
        </g>
    </svg>
    const cake = <svg className='cake' fill="#fdb822"enable-background="new 0 0 512 512" height="75" viewBox="0 0 512 512" width="75">
        <g>
            <path d="m239.896 69.819c0 9.85 3.836 19.111 10.801 26.076 2.929 2.93 7.678 2.929 10.607 0s2.929-7.678 0-10.606c-8.53-8.53-8.53-22.409 0-30.939 14.378-14.378 14.378-37.774 0-52.153-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606c8.53 8.53 8.53 22.41 0 30.94-6.966 6.965-10.801 16.226-10.801 26.076zm206.605 170.109c-8.624 0-17.007 1.645-24.921 4.89-9.75-22.785-26.419-43.393-48.229-59.617-3.322-2.472-8.021-1.782-10.494 1.541-2.473 3.324-1.782 8.022 1.541 10.494 19.813 14.738 34.876 33.368 43.559 53.874 3.103 7.329 11.633 10.785 19.024 7.707 6.186-2.581 12.753-3.889 19.521-3.889 27.845 0 50.498 22.462 50.498 50.072s-22.653 50.072-50.499 50.072c-13.415 0-26.049-5.17-35.575-14.557-5.605-5.521-14.724-5.521-20.329.001-9.523 9.387-22.157 14.556-35.574 14.556-14.824 0-28.845-6.428-38.467-17.636-2.778-3.235-6.803-5.091-11.043-5.091 0 0 0 0-.001 0-4.239 0-8.266 1.854-11.045 5.092-9.621 11.207-23.642 17.635-38.467 17.635s-28.846-6.428-38.468-17.637c-2.779-3.235-6.805-5.091-11.045-5.09-4.24 0-8.265 1.855-11.043 5.091-9.622 11.208-23.643 17.636-38.467 17.636-13.417 0-26.051-5.169-35.575-14.557-5.605-5.521-14.725-5.522-20.328.001-9.526 9.386-22.16 14.556-35.575 14.556-27.846 0-50.499-22.462-50.499-50.072s22.653-50.072 50.499-50.072c6.768 0 13.335 1.308 19.521 3.889 7.39 3.083 15.921-.379 19.023-7.707 22.315-52.701 83.382-88.11 151.957-88.11 27.933 0 55.443 5.923 79.557 17.129 3.759 1.747 8.217.116 9.963-3.641 1.745-3.756.115-8.216-3.641-9.962-26.081-12.12-55.777-18.526-85.879-18.526-74.328 0-140.796 38.889-165.58 96.817-7.914-3.245-16.297-4.89-24.921-4.89-36.116.001-65.499 29.192-65.499 65.073 0 30.205 20.824 55.665 48.957 62.966l35.715 99.36c9.602 26.721 35.128 44.674 63.518 44.674h44.567c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-44.567c-22.081 0-41.934-13.964-49.402-34.747l-33.136-92.185c17.153-.039 33.316-6.603 45.586-18.512 12.305 11.943 28.528 18.516 45.739 18.516 19.031 0 37.048-8.187 49.512-22.476 12.463 14.29 30.478 22.476 49.511 22.476 19.034 0 37.05-8.186 49.512-22.476 12.464 14.29 30.479 22.476 49.511 22.476 17.212 0 33.435-6.571 45.739-18.516 12.271 11.909 28.433 18.473 45.586 18.512l-33.137 92.186c-7.468 20.782-27.32 34.746-49.401 34.746h-136.052c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h136.052c28.391 0 53.916-17.953 63.518-44.673l35.716-99.361c28.132-7.301 48.956-32.761 48.956-62.966 0-35.881-29.383-65.072-65.499-65.072zm-150.805-136.224c2.929 2.929 7.677 2.928 10.606 0 2.93-2.929 2.93-7.677.001-10.606-5.471-5.471-5.471-14.373 0-19.844 11.318-11.319 11.318-29.737 0-41.057-2.929-2.929-7.678-2.93-10.606 0-2.93 2.929-2.93 7.677-.001 10.606 5.471 5.471 5.471 14.373 0 19.844-11.318 11.319-11.318 29.738 0 41.057zm-90 0c2.929 2.929 7.677 2.928 10.606 0 2.93-2.929 2.93-7.677.001-10.606-5.471-5.471-5.471-14.373 0-19.844 11.318-11.319 11.318-29.737 0-41.057-2.929-2.929-7.678-2.93-10.606 0-2.93 2.929-2.93 7.677-.001 10.606 5.471 5.471 5.471 14.373 0 19.844-11.318 11.319-11.318 29.738 0 41.057zm-71.041 158.141c3.252 3.252 7.66 4.81 12.716 4.81 9.984 0 22.493-6.077 33.599-17.184 7.208-7.208 12.666-15.47 15.367-23.265 3.329-9.606 2.267-17.793-2.992-23.051-9.674-9.673-29.585-4.356-46.315 12.375h.001c-7.208 7.208-12.666 15.47-15.367 23.265-3.33 9.605-2.268 17.792 2.991 23.05zm11.181-18.14c1.945-5.612 6.246-12.016 11.8-17.57h.001c9.828-9.829 18.938-12.896 23.033-12.896 1.028 0 1.74.193 2.068.521.493.493 1.002 2.983-.574 7.533-1.945 5.612-6.246 12.016-11.801 17.57-12.296 12.296-23.465 14.009-25.102 12.374-.492-.492-1.001-2.982.575-7.532zm86.164-11.205c0 23.659 10.317 41.5 24 41.5s24-17.841 24-41.5-10.317-41.5-24-41.5-24 17.841-24 41.5zm33 0c0 17.388-6.688 26.5-9 26.5s-9-9.112-9-26.5 6.688-26.5 9-26.5 9 9.112 9 26.5zm49.654-29.345c-5.258 5.258-6.32 13.444-2.991 23.051 2.701 7.795 8.159 16.057 15.366 23.265 11.107 11.107 23.614 17.185 33.6 17.184 5.055 0 9.465-1.559 12.717-4.81 5.258-5.258 6.32-13.444 2.991-23.051-2.701-7.795-8.159-16.057-15.366-23.265-16.73-16.73-36.639-22.048-46.317-12.374zm35.71 22.981c5.554 5.554 9.854 11.958 11.8 17.57 1.576 4.549 1.067 7.04.575 7.532-1.639 1.638-12.808-.079-25.104-12.374-5.554-5.554-9.854-11.958-11.8-17.57-1.576-4.549-1.067-7.04-.575-7.532.329-.329 1.041-.522 2.069-.522 4.097 0 13.207 3.067 23.035 12.896-.001 0-.001 0 0 0z" />
        </g>
    </svg>

    let iconType

    if (type === 'dought'){
        iconType = dought
    } else if (type === 'coffee') {
        iconType = coffee
    } else if (type === 'cake') {
        iconType = cake
    } else {
        iconType = roller
    }

    return (

        <div class="spinner-container">
            <div class="circle"> {iconType}</div>
            <div class="circle">{iconType}</div>
            <div class="circle">{iconType}</div>
        </div>

    )







}

export default Spinner;