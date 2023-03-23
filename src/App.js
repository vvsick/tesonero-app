import './styles/App.scss';
import './assets/logo.svg';

function App() {
  const navItems = ["1", "2", "3"]
  const qnaItems = ["stability_icon", "led", "lights_off", "splitter", "power_off"]
  const showContent = event => {
    const allWithClass = Array.from(document.getElementsByClassName('split__qna_container_element'))
    if (event.currentTarget.classList.value.includes('disabled')) {
      allWithClass.forEach(el => {
        el.classList.remove('active')
        el.classList.add('disabled')
      })
      event.currentTarget.classList.remove('disabled')
      event.currentTarget.classList.add('active')
    } else {
      event.currentTarget.classList.remove('active')
      event.currentTarget.classList.add('disabled')
    }
  }


  return (
    <div className='wrapper'>
      <nav className='navbar'>
        <svg className='navbar__logo'  viewBox="0 0 304 93" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M271.792 36.8271C271.792 38.6458 271.338 40.919 270.431 43.1923C269.524 45.4656 268.163 47.2842 266.802 49.5575C265.441 51.8308 263.626 53.6494 261.812 55.0134C259.997 56.832 258.636 58.196 256.822 60.0146L253.646 62.2879V62.7426L257.275 61.8332H266.802L265.441 67.7438H244.573L245.481 64.1065C246.388 63.1972 247.749 61.8332 249.11 60.9239C250.471 59.56 251.832 58.196 253.193 56.832C254.554 55.4681 256.368 53.6494 257.729 52.2855C259.09 50.9215 260.451 49.1029 261.358 47.7389C262.265 46.3749 263.173 44.5563 264.08 43.1923C264.987 41.8283 264.987 40.4644 264.987 39.1004C264.987 37.7364 264.534 36.8271 264.08 36.3725C263.626 35.4632 262.265 35.0085 260.451 35.0085C259.544 35.0085 258.183 35.4632 256.822 35.9178C255.461 36.3725 254.554 37.2818 253.193 38.1911L251.378 33.1899C253.193 31.8259 255.007 30.9166 256.822 30.4619C258.636 30.0073 260.451 29.5526 263.173 29.5526C265.894 29.5526 267.709 30.4619 269.524 31.8259C271.338 32.2806 271.792 34.5538 271.792 36.8271Z" fill="#A6ABBD"/>
          <path d="M301.278 56.8317H295.381L293.113 67.7435H286.762L289.03 56.8317H273.606L274.514 52.7398L295.835 29.0977H301.278L296.742 51.3758H302.639L301.278 56.8317ZM292.205 42.7374L293.566 38.1908L290.844 42.2827L284.04 49.5572L280.864 51.8305L284.04 51.3758H289.937L292.205 42.7374Z" fill="#A6ABBD"/>
          <path d="M304 17.277L302.185 17.7316L296.742 19.0956L281.318 22.2782L284.04 13.1851C262.719 7.27451 240.491 19.5502 234.14 40.9191C227.335 62.288 238.676 85.0208 259.544 92.75C237.315 85.0208 224.613 60.924 231.872 37.7365C239.13 15.0037 263.173 1.81863 285.855 8.63848L288.123 0L304 17.277Z" fill="#00C368"/>
          <path d="M9.86328 54.4756L7.66602 67H0.512695L6.68945 31.4531L19.1406 31.4775C22.9818 31.4775 26.001 32.5436 28.1982 34.6758C30.3955 36.8079 31.3558 39.5911 31.0791 43.0254C30.8187 46.5085 29.362 49.2917 26.709 51.375C24.0723 53.4583 20.7031 54.5 16.6016 54.5L9.86328 54.4756ZM10.8643 48.543L16.8213 48.5918C18.7419 48.5918 20.3369 48.0954 21.6064 47.1025C22.876 46.1097 23.6328 44.7669 23.877 43.0742C24.1211 41.3815 23.8444 40.0306 23.0469 39.0215C22.2656 38.0124 21.1019 37.4753 19.5557 37.4102L12.8174 37.3857L10.8643 48.543ZM47.29 53.9873H41.4795L39.209 67H32.0557L38.2324 31.4531L50 31.4775C53.9388 31.4775 56.9661 32.4053 59.082 34.2607C61.2142 36.1162 62.1582 38.696 61.9141 42C61.5723 46.8828 58.9681 50.2764 54.1016 52.1807L59.1064 66.6094V67H51.4893L47.29 53.9873ZM42.5049 48.0547L47.8271 48.1035C49.7152 48.071 51.2695 47.5664 52.4902 46.5898C53.7272 45.597 54.4678 44.2542 54.7119 42.5615C54.9398 40.9827 54.6875 39.7458 53.9551 38.8506C53.2227 37.9554 52.0589 37.4753 50.4639 37.4102L44.3604 37.3857L42.5049 48.0547ZM77.5391 67.4883C75.179 67.4395 73.0957 66.8861 71.2891 65.8281C69.4987 64.7539 68.0745 63.2158 67.0166 61.2139C65.9749 59.1956 65.3727 56.8844 65.21 54.2803C65.0309 51.611 65.3158 48.7627 66.0645 45.7354C66.8132 42.708 68.0176 40.0469 69.6777 37.752C71.3379 35.457 73.2829 33.7399 75.5127 32.6006C77.7588 31.4613 80.1839 30.916 82.7881 30.9648C85.1807 31.0137 87.2721 31.5833 89.0625 32.6738C90.8529 33.748 92.2607 35.3024 93.2861 37.3369C94.3115 39.3551 94.8975 41.6501 95.0439 44.2217C95.2067 47.0863 94.8975 50.0322 94.1162 53.0596C93.335 56.0869 92.1224 58.7074 90.4785 60.9209C88.8346 63.1344 86.9059 64.7946 84.6924 65.9014C82.4951 67.0081 80.1107 67.5371 77.5391 67.4883ZM87.6709 48.25L87.8662 45.9307C88.029 43.0335 87.6383 40.8363 86.6943 39.3389C85.7666 37.8415 84.3506 37.0602 82.4463 36.9951C79.4678 36.8975 77.0996 38.2158 75.3418 40.9502C73.6003 43.6846 72.6156 47.5094 72.3877 52.4248C72.2249 55.3057 72.6074 57.5273 73.5352 59.0898C74.4629 60.6361 75.9033 61.4417 77.8564 61.5068C80.4118 61.6208 82.5277 60.6279 84.2041 58.5283C85.8805 56.4124 86.9792 53.4258 87.5 49.5684L87.6709 48.25ZM96.9971 67L103.174 31.4531L113.379 31.4775C115.771 31.5264 117.92 32.0716 119.824 33.1133C121.745 34.1387 123.299 35.6198 124.487 37.5566C125.675 39.4935 126.392 41.6745 126.636 44.0996C126.766 45.5156 126.75 46.9642 126.587 48.4453L126.416 49.7393C125.7 54.9476 123.649 59.1305 120.264 62.2881C116.895 65.4294 112.801 67 107.983 67H96.9971ZM109.302 37.3857L105.176 61.1162L108.154 61.1406C111.442 61.1406 114.079 59.9362 116.064 57.5273C118.066 55.1185 119.214 51.4808 119.507 46.6143L119.556 45.833C119.604 43.1475 119.092 41.0885 118.018 39.6562C116.943 38.224 115.34 37.4753 113.208 37.4102L109.302 37.3857ZM161.206 31.4531L157.202 54.8906C156.649 58.8132 155.021 61.9137 152.319 64.1924C149.618 66.471 146.265 67.5778 142.261 67.5127C139.754 67.4639 137.573 66.9186 135.718 65.877C133.879 64.819 132.52 63.3379 131.641 61.4336C130.762 59.513 130.461 57.3402 130.737 54.915L134.717 31.4531H141.87L137.891 54.9395C137.777 55.8509 137.769 56.7054 137.866 57.5029C138.192 60.1396 139.762 61.5068 142.578 61.6045C144.596 61.6696 146.248 61.1162 147.534 59.9443C148.82 58.7725 149.65 57.096 150.024 54.915L154.028 31.4531H161.206ZM189.941 55.1348C189.665 57.5924 188.826 59.7734 187.427 61.6777C186.027 63.5658 184.204 65.0225 181.958 66.0479C179.712 67.057 177.287 67.5371 174.683 67.4883C172.339 67.4395 170.296 66.9023 168.555 65.877C166.813 64.8353 165.438 63.3379 164.429 61.3848C163.436 59.4154 162.874 57.153 162.744 54.5977C162.63 52.5957 162.834 50.1055 163.354 47.127C163.892 44.1484 164.836 41.5036 166.187 39.1924C167.554 36.8812 169.173 35.0501 171.045 33.6992C173.682 31.8112 176.693 30.8997 180.078 30.9648C183.757 31.0299 186.67 32.1693 188.818 34.3828C190.983 36.5801 192.171 39.64 192.383 43.5625L185.254 43.5381C185.254 41.292 184.806 39.6481 183.911 38.6064C183.016 37.5648 181.624 37.0114 179.736 36.9463C177.295 36.8649 175.285 37.7357 173.706 39.5586C172.144 41.3815 171.094 44.0426 170.557 47.542C170.036 50.9437 169.808 53.4909 169.873 55.1836C169.954 57.332 170.435 58.9189 171.313 59.9443C172.192 60.9535 173.421 61.4824 175 61.5312C177.181 61.6126 178.923 61.0999 180.225 59.9932C181.543 58.8701 182.414 57.2669 182.837 55.1836L189.941 55.1348ZM223.34 37.3857H212.793L207.666 67H200.513L205.64 37.3857H195.215L196.265 31.4531H224.39L223.34 37.3857Z" fill="#A6ABBD"/>
        </svg>
        {navItems.map((item, index) => (
          <button className='navbar__item' key={index}>
            NavItem{item}
          </button>
        ))}
        <button className='navbar__button'>
          Button
        </button>
      </nav>
      <div className='main'>
        <div className='main__divider'></div>
        <h1 className='main__header'>
          Lorem ipsum, dolor sit amet consectetur 
        </h1>
        <div className='main__layer_left'></div>
        <div className='main__layer_right'></div>
        <div className='main__berry'></div>
        <div className='main__items_container'>
          
          <div className='main__items_row'>
            <div className='main__item first'>
              <svg className='main__item_svg' width="80" height="88" viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_19)">
                <path d="M64 43.5V29C64 15.7452 53.2548 5 40 5H32C18.7452 5 8 15.7452 8 29V43.5" stroke="#2E3A59" stroke-width="2"/>
                <path d="M59 35V43C59 55.7025 48.7025 66 36 66C23.2975 66 13 55.7025 13 43V35C13 22.2975 23.2975 12 36 12C48.7025 12 59 22.2975 59 35Z" stroke="#2E3A59" stroke-width="2"/>
                <path d="M33.5 74.5L40 74.5C53.2548 74.5 64 63.7548 64 50.5L64 40" stroke="#2E3A59" stroke-width="2"/>
                <rect x="5" y="36" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                <rect x="61" y="36" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                </g>
                <defs>
                <filter id="filter0_d_1_19" x="0" y="0" width="80" height="87.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_19"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_19" result="shape"/>
                </filter>
                </defs>
              </svg>
              <p className='main__item_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className='main__item'>
              <svg className='main__item_svg' width="81" height="94" viewBox="0 0 81 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_28)">
                <circle cx="31.69" cy="73.4106" r="7" transform="rotate(-15 31.69 73.4106)" stroke="#2E3A59" stroke-width="2"/>
                <rect x="30.9965" y="32.1854" width="30" height="30" transform="rotate(-15 30.9965 32.1854)" stroke="#2E3A59" stroke-width="2"/>
                <g filter="url(#filter1_d_1_28)">
                <rect x="43.1053" y="31.0114" width="6" height="8" transform="rotate(-15 43.1053 31.0114)" stroke="#00C368" stroke-width="2"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_1_28" x="19.688" y="19.196" width="61.2756" height="74.2165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_28"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_28" result="shape"/>
                </filter>
                <filter id="filter1_d_1_28" x="39.8805" y="26.2338" width="18.3156" height="19.7298" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_28"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_28" result="shape"/>
                </filter>
                </defs>
              </svg>
              <p className='main__item_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className='main__items_row'>
            <div className='main__item second'>
              <svg width="73" height="88" viewBox="0 0 73 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_10)">
                <rect x="5.5" y="5" width="54" height="70" rx="3" stroke="#2E3A59" stroke-width="2"/>
                <path d="M13.5 5H51.5V10C51.5 11.6569 50.1569 13 48.5 13H16.5C14.8431 13 13.5 11.6569 13.5 10V5Z" stroke="#2E3A59" stroke-width="2"/>
                <g filter="url(#filter1_d_1_10)">
                <path d="M16.5 58H48.5C50.1569 58 51.5 59.3431 51.5 61V63C51.5 64.6569 50.1569 66 48.5 66H16.5C14.8431 66 13.5 64.6569 13.5 63V61C13.5 59.3431 14.8431 58 16.5 58Z" stroke="#00C368" stroke-width="2"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_1_10" x="0.5" y="0" width="72" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_10"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_10" result="shape"/>
                </filter>
                <filter id="filter1_d_1_10" x="10.5" y="55" width="48" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_10"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_10" result="shape"/>
                </filter>
                </defs>
              </svg>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className='main__item'>
            <svg width="109" height="99" viewBox="0 0 109 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_55)">
              <path d="M15.1607 40.329L40.7138 14.7759C46.5717 8.91804 56.0692 8.91804 61.927 14.7759L66.3751 19.2239C72.7391 25.588 72.1152 36.1227 65.2298 42.0046C61.3795 45.2936 57.381 48.849 54.1861 52.0091C50.446 55.7086 46.2117 60.4447 42.3971 64.8965C36.5133 71.7631 25.9905 72.372 19.6345 66.016L15.1607 61.5422C9.30285 55.6844 9.30284 46.1869 15.1607 40.329Z" stroke="#2E3A59" stroke-width="2"/>
              <path d="M59.8823 12.5008L60.2826 12.9011C66.6467 19.2651 66.0228 29.7998 59.1373 35.6817C55.287 38.9708 51.2886 42.5261 48.0937 45.6863C44.3535 49.3857 40.1192 54.1218 36.3046 58.5736C30.4209 65.4402 19.898 66.0491 13.542 59.6931L13.1361 59.2873C7.76622 53.9173 7.26444 45.4045 12.1268 39.6211C16.509 34.4089 21.7879 28.3753 26.3021 23.9101C30.2798 19.9757 35.5538 15.3896 40.2347 11.4712C46.0198 6.62843 54.5204 7.13888 59.8823 12.5008Z" stroke="#2E3A59" stroke-width="2"/>
              <rect x="34.1522" y="26.7675" width="15.6653" height="15.6653" rx="7.83265" transform="rotate(-45 34.1522 26.7675)" stroke="#2E3A59" stroke-width="2"/>
              <rect x="69.5" y="63.9998" width="26" height="22" rx="1" stroke="#2E3A59" stroke-width="2"/>
              <path d="M71.5 40.9994C78.5 42.9994 82.5 45.9998 82.5002 56.999" stroke="#2E3A59" stroke-width="2"/>
              </g>
              <defs>
              <filter id="filter0_d_1_55" x="3.77332" y="3.1373" width="104.727" height="95.8625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="4" dy="4"/>
              <feGaussianBlur stdDeviation="4"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_55"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_55" result="shape"/>
              </filter>
              </defs>
            </svg>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          </div>
          
          <div className='main__items_row'>
          <div className='main__item third'>
              <svg className='main__item_svg' width="80" height="88" viewBox="0 0 80 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_19)">
                <path d="M64 43.5V29C64 15.7452 53.2548 5 40 5H32C18.7452 5 8 15.7452 8 29V43.5" stroke="#2E3A59" stroke-width="2"/>
                <path d="M59 35V43C59 55.7025 48.7025 66 36 66C23.2975 66 13 55.7025 13 43V35C13 22.2975 23.2975 12 36 12C48.7025 12 59 22.2975 59 35Z" stroke="#2E3A59" stroke-width="2"/>
                <path d="M33.5 74.5L40 74.5C53.2548 74.5 64 63.7548 64 50.5L64 40" stroke="#2E3A59" stroke-width="2"/>
                <rect x="5" y="36" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                <rect x="61" y="36" width="6" height="14" rx="3" stroke="#2E3A59" stroke-width="2"/>
                </g>
                <defs>
                <filter id="filter0_d_1_19" x="0" y="0" width="80" height="87.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_19"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_19" result="shape"/>
                </filter>
                </defs>
              </svg>
              <p className='main__item_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className='main__item last'>
              <svg className='main__item_svg' width="81" height="94" viewBox="0 0 81 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_28)">
                <circle cx="31.69" cy="73.4106" r="7" transform="rotate(-15 31.69 73.4106)" stroke="#2E3A59" stroke-width="2"/>
                <rect x="30.9965" y="32.1854" width="30" height="30" transform="rotate(-15 30.9965 32.1854)" stroke="#2E3A59" stroke-width="2"/>
                <g filter="url(#filter1_d_1_28)">
                <rect x="43.1053" y="31.0114" width="6" height="8" transform="rotate(-15 43.1053 31.0114)" stroke="#00C368" stroke-width="2"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_1_28" x="19.688" y="19.196" width="61.2756" height="74.2165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_28"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_28" result="shape"/>
                </filter>
                <filter id="filter1_d_1_28" x="39.8805" y="26.2338" width="18.3156" height="19.7298" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_28"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_28" result="shape"/>
                </filter>
                </defs>
              </svg>
              <p className='main__item_text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='split'>
        <div className='split__comments'>
          <div className='split__comments divider'></div>
          <h2 className='split__comments_header'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <div className='split__comments_comment big'>
            <img src={require('./assets/rectangle.png')} alt='user avatar' />
            <div className='split__comments_comment comment'>
              <p className='split__comments_comment text'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi
                expedita, provident excepturi officia!
                Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
              </p>
              <p className='split__comments_comment nickname'>Jane Doe</p>
            </div>
          </div>
          <div className='split__comments_comment container'>
            <div className='split__comments_comment comment'>
              <p className='split__comments_comment text'>
                <img src={require('./assets/rectangle.png')} alt='user avatar' />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                animi  autem aliquid
                <p className='split__comments_comment nickname'>
                  Jane Doe
                </p>
              </p>
            </div>
            <div className='split__comments_comment comment'>
              <p className='split__comments_comment text right'>
                <img src={require('./assets/rectangle.png')} alt='user avatar' />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                animi  autem aliquid
                <p className='split__comments_comment nickname'>
                  Jane Doe
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className='split__qna'>
          <div className='split__qna divider'></div>
          <h2 className='split__qna_header'>
            Lorem ipsum, dolor sit adipisicing elit.
          </h2>
          <p className='split__qna_text'>
            Porro ab rerum omnis magnam eligendi error nobis dolore?
          </p>
          <div className='split__qna_container'>
            {qnaItems.map((item, index) => (
              <div className='split__qna_container_element disabled' key={index} onClick={showContent}>
                <img src={require(`./assets/${item}.svg`)} alt='icon'/>
                <h2>
                  Lorem ipsum, dolor sit amet adipisicing elit.
                </h2>
                <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7 0.3C18.3 -0.1 17.7 -0.1 17.3 0.3L9.5 8.1L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L8.8 10.2C9.2 10.6 9.8 10.6 10.2 10.2L18.7 1.7C19.1 1.3 19.1 0.7 18.7 0.3Z" fill="#A6ABBD"/>
                </svg>
                <div className='split__qna_container_element_content'>
                  Laboriosam quas, aut consectetur animi autem aliquid
                  consequuntur suscipit exercitationem laborum cupiditate 
                  magnam eaque quae delenit
                </div>
                <div className='split__qna_container_element_divider'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
