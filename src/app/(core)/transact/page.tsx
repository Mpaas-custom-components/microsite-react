"use client";
import classes from "./transact.module.css";
import HorizontalScroll from "@/app/components/horizontalScroll/horizontalScroll";
import HorizontalScrollFull from "@/app/components/horizontalScrollFull/horizontalScrollFull";
function Transact() {
  return (
    <>
      <div className={`${classes["container"]}`}>
        <div className={`${classes["title-account"]}`}>
          <div className={`${classes["title-text"]}`}>Transaction Account</div>
          <button className={`${classes["title-button"]}`}>
            <text>View All Account</text>
          </button>
        </div>
        <div className={`${classes["account-container"]}`}>
          <HorizontalScroll>
            <div className={`${classes["account-card"]}`}>
              <div className={`${classes["account-card-title"]}`}>
                <div className={`${classes["account-card-name"]}`}>
                  <text>BNI Taplus</text>
                  <div className={`${classes["account-card-title-tag"]}`}>
                    Primary
                  </div>
                </div>

                <div className={`${classes["account-card-number"]}`}>
                  <text>0223383830</text>
                </div>
              </div>

              <div className={`${classes["balance-card-container"]}`}>
                <text>Total Balance</text>

                <div className={`${classes["balance-card-with-icon"]}`}>
                  <text>Rp. 2.800.000.000</text>
                  <div className={`${classes["balance-card-icon"]}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M7.9974 4.48385C10.5241 4.48385 12.7774 5.90385 13.8774 8.15052C13.4841 8.96385 12.9307 9.66385 12.2707 10.2305L13.2107 11.1705C14.1374 10.3505 14.8707 9.32385 15.3307 8.15052C14.1774 5.22385 11.3307 3.15052 7.9974 3.15052C7.15073 3.15052 6.3374 3.28385 5.57073 3.53052L6.67073 4.63052C7.10406 4.54385 7.54406 4.48385 7.9974 4.48385ZM7.28406 5.24385L8.66406 6.62385C9.04406 6.79052 9.35073 7.09719 9.5174 7.47719L10.8974 8.85719C10.9507 8.63052 10.9907 8.39052 10.9907 8.14385C10.9974 6.49052 9.65073 5.15052 7.9974 5.15052C7.75073 5.15052 7.5174 5.18385 7.28406 5.24385ZM1.3374 3.06385L3.12406 4.85052C2.0374 5.70385 1.1774 6.83719 0.664062 8.15052C1.8174 11.0772 4.66406 13.1505 7.9974 13.1505C9.01073 13.1505 9.98406 12.9572 10.8774 12.6039L13.1574 14.8839L14.0974 13.9439L2.2774 2.11719L1.3374 3.06385ZM6.3374 8.06385L8.0774 9.80385C8.05073 9.81052 8.02406 9.81719 7.9974 9.81719C7.0774 9.81719 6.33073 9.07052 6.33073 8.15052C6.33073 8.11719 6.3374 8.09719 6.3374 8.06385ZM4.07073 5.79719L5.2374 6.96385C5.08406 7.33052 4.9974 7.73052 4.9974 8.15052C4.9974 9.80385 6.34406 11.1505 7.9974 11.1505C8.4174 11.1505 8.8174 11.0639 9.1774 10.9105L9.83073 11.5639C9.24406 11.7239 8.63073 11.8172 7.9974 11.8172C5.47073 11.8172 3.2174 10.3972 2.1174 8.15052C2.58406 7.19719 3.26406 6.41052 4.07073 5.79719Z"
                        fill="#0E0E0E"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div className={`${classes["card-vector"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="113"
                height="143"
                viewBox="0 0 113 143"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M113.486 63.2844C113.042 62.6886 111.184 59.8797 108.467 57.1134C100.161 48.6301 82.1746 35.0114 60.5285 46.6724C40.5265 57.4397 30.2897 82.1094 55.2385 114.723C75.7408 141.564 94.2701 144.188 104.721 142.656C106.523 142.401 112.056 141.067 113.5 140.188V63.2702H113.486V63.2844ZM113.486 27.3083V0H2.16684C2.05246 0.482329 1.22322 2.14209 0.908679 4.95095C0.193813 11.2354 -0.077835 23.1943 4.41152 40.1752C10.5737 63.4546 27.7161 84.2373 27.7161 84.2373C27.7161 84.2373 25.9576 61.0714 47.475 39.6787C61.0861 26.1451 76.5129 21.946 89.023 22.1304C93.4409 22.1871 97.5013 22.7829 100.99 23.5774C102.491 23.9037 112.342 26.7125 113.486 27.3083Z"
                  fill="#FF6A05"
                />
              </svg>
            </div> */}
            </div>
            <div className={`${classes["account-card"]}`}>
              <div className={`${classes["account-card-title"]}`}>
                <div className={`${classes["account-card-name"]}`}>
                  <text>BNI Taplus</text>
                  <div className={`${classes["account-card-title-tag"]}`}>
                    Primary
                  </div>
                </div>

                <div className={`${classes["account-card-number"]}`}>
                  <text>0223383830</text>
                </div>
              </div>

              <div className={`${classes["balance-card-container"]}`}>
                <text>Total Balance</text>

                <div className={`${classes["balance-card-with-icon"]}`}>
                  <text>Rp. 2.800.000.000</text>
                  <div className={`${classes["balance-card-icon"]}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M7.9974 4.48385C10.5241 4.48385 12.7774 5.90385 13.8774 8.15052C13.4841 8.96385 12.9307 9.66385 12.2707 10.2305L13.2107 11.1705C14.1374 10.3505 14.8707 9.32385 15.3307 8.15052C14.1774 5.22385 11.3307 3.15052 7.9974 3.15052C7.15073 3.15052 6.3374 3.28385 5.57073 3.53052L6.67073 4.63052C7.10406 4.54385 7.54406 4.48385 7.9974 4.48385ZM7.28406 5.24385L8.66406 6.62385C9.04406 6.79052 9.35073 7.09719 9.5174 7.47719L10.8974 8.85719C10.9507 8.63052 10.9907 8.39052 10.9907 8.14385C10.9974 6.49052 9.65073 5.15052 7.9974 5.15052C7.75073 5.15052 7.5174 5.18385 7.28406 5.24385ZM1.3374 3.06385L3.12406 4.85052C2.0374 5.70385 1.1774 6.83719 0.664062 8.15052C1.8174 11.0772 4.66406 13.1505 7.9974 13.1505C9.01073 13.1505 9.98406 12.9572 10.8774 12.6039L13.1574 14.8839L14.0974 13.9439L2.2774 2.11719L1.3374 3.06385ZM6.3374 8.06385L8.0774 9.80385C8.05073 9.81052 8.02406 9.81719 7.9974 9.81719C7.0774 9.81719 6.33073 9.07052 6.33073 8.15052C6.33073 8.11719 6.3374 8.09719 6.3374 8.06385ZM4.07073 5.79719L5.2374 6.96385C5.08406 7.33052 4.9974 7.73052 4.9974 8.15052C4.9974 9.80385 6.34406 11.1505 7.9974 11.1505C8.4174 11.1505 8.8174 11.0639 9.1774 10.9105L9.83073 11.5639C9.24406 11.7239 8.63073 11.8172 7.9974 11.8172C5.47073 11.8172 3.2174 10.3972 2.1174 8.15052C2.58406 7.19719 3.26406 6.41052 4.07073 5.79719Z"
                        fill="#0E0E0E"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div className={`${classes["card-vector"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="113"
                height="143"
                viewBox="0 0 113 143"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M113.486 63.2844C113.042 62.6886 111.184 59.8797 108.467 57.1134C100.161 48.6301 82.1746 35.0114 60.5285 46.6724C40.5265 57.4397 30.2897 82.1094 55.2385 114.723C75.7408 141.564 94.2701 144.188 104.721 142.656C106.523 142.401 112.056 141.067 113.5 140.188V63.2702H113.486V63.2844ZM113.486 27.3083V0H2.16684C2.05246 0.482329 1.22322 2.14209 0.908679 4.95095C0.193813 11.2354 -0.077835 23.1943 4.41152 40.1752C10.5737 63.4546 27.7161 84.2373 27.7161 84.2373C27.7161 84.2373 25.9576 61.0714 47.475 39.6787C61.0861 26.1451 76.5129 21.946 89.023 22.1304C93.4409 22.1871 97.5013 22.7829 100.99 23.5774C102.491 23.9037 112.342 26.7125 113.486 27.3083Z"
                  fill="#FF6A05"
                />
              </svg>
            </div> */}
            </div>
          </HorizontalScroll>
        </div>
        <div className={`${classes["home-shortcut"]}`}>
          <div className={`${classes["section-title"]}`}>
            <text>Shortcuts</text>
          </div>
          <HorizontalScrollFull>
            <div className={`${classes["shortcut-menus"]}`}>
              <div className={`${classes["shortcut-item"]}`}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="56"
                    viewBox="0 0 57 56"
                    fill="none"
                  >
                    <rect
                      x="0.664062"
                      width="56"
                      height="56"
                      rx="16"
                      fill="#71DBD3"
                    />
                    <path
                      d="M24.6022 35.308V24.9647C24.6022 24.624 24.3043 24.3563 23.9252 24.3563H16.5596C15.991 24.3563 15.6796 23.76 16.0316 23.3585L23.4107 15.315C23.8169 14.8769 24.6157 15.1325 24.6157 15.7044V20.7057M32.726 20.7057V31.049C32.726 31.3897 33.0239 31.6575 33.403 31.6575H40.7685C41.3372 31.6575 41.6486 32.2537 41.2966 32.6553L33.931 40.6987C33.5248 41.1368 32.726 40.8813 32.726 40.3093V35.308"
                      stroke="black"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <text>Transfer</text>
              </div>
              <div className={`${classes["shortcut-item-2"]}`}>
                <div className={`${classes["icon-item-2"]}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_6817_15966)">
                      <path
                        d="M12.2432 21.4902H3.21094V23.5225H12.2432V21.4902Z"
                        fill="black"
                      />
                      <path
                        d="M2.53226 4.72266H0.5V18.0114H2.53226V4.72266Z"
                        fill="black"
                      />
                      <path
                        d="M27.4836 18.0233H21.2739C20.7094 18.0233 20.2578 17.5717 20.2578 17.0072V12.3443C20.2578 11.7797 20.7094 11.3281 21.2739 11.3281H27.4836C28.0481 11.3281 28.4997 11.7797 28.4997 12.3443V17.0072C28.4997 17.5717 28.0481 18.0233 27.4836 18.0233ZM22.2901 15.991H26.4675V13.3604H22.2901V15.991Z"
                        fill="black"
                      />
                      <path
                        d="M24.6615 23.5223H12.2422V21.4901H23.6454V17.0078H25.6777V22.5062C25.6777 23.0707 25.2261 23.5223 24.6615 23.5223Z"
                        fill="black"
                      />
                      <path
                        d="M25.6774 12.3434H23.6452V8.27892H4.05645C2.09194 8.27892 0.5 6.68698 0.5 4.72247C0.5 2.75795 2.09194 1.16602 4.05645 1.16602H22.4032V3.19827H4.05645C3.22097 3.19827 2.53226 3.88698 2.53226 4.72247C2.53226 5.55795 3.22097 6.24666 4.05645 6.24666H24.6613C25.2258 6.24666 25.6774 6.69827 25.6774 7.26279V12.3434Z"
                        fill="black"
                      />
                      <path
                        d="M8.7432 17.9902H6.71094V27.0225H8.7432V17.9902Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6817_15966">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <text>E-Wallet</text>
              </div>
              <div className={`${classes["shortcut-item"]}`}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="56"
                    viewBox="0 0 57 56"
                    fill="none"
                  >
                    <rect
                      x="0.328125"
                      width="56"
                      height="56"
                      rx="16"
                      fill="#71DBD3"
                    />
                    <path
                      d="M28.3426 27.5113C25.8264 27.5113 23.7812 25.4662 23.7812 22.95C23.7812 20.4339 25.8264 18.3887 28.3426 18.3887C30.8587 18.3887 32.9039 20.4339 32.9039 22.95C32.9039 25.4662 30.8587 27.5113 28.3426 27.5113ZM28.3426 20.6198C27.0535 20.6198 26.0123 21.6609 26.0123 22.95C26.0123 24.2391 27.0535 25.2802 28.3426 25.2802C29.6316 25.2802 30.6728 24.2391 30.6728 22.95C30.6728 21.6609 29.6316 20.6198 28.3426 20.6198Z"
                      fill="black"
                    />
                    <path
                      d="M38.0483 40.6737H18.6132C13.68 40.6737 9.66406 36.6578 9.66406 31.7246C9.66406 27.7211 12.3537 24.201 16.159 23.1226C17.7331 17.7184 22.6539 14 28.3307 14C34.0076 14 38.9283 17.7184 40.5025 23.1226C44.3077 24.2134 46.9974 27.7211 46.9974 31.7246C46.9974 36.6578 42.9815 40.6737 38.0483 40.6737ZM28.3307 16.2311C23.4472 16.2311 19.2701 19.5529 18.1545 24.3001C18.0554 24.7216 17.7207 25.0562 17.2869 25.143C14.1634 25.7751 11.8951 28.5392 11.8951 31.7246C11.8951 35.4307 14.9071 38.4427 18.6132 38.4427H38.0483C41.7544 38.4427 44.7663 35.4307 44.7663 31.7246C44.7663 28.5392 42.4981 25.7627 39.3746 25.143C38.9407 25.0562 38.6061 24.734 38.5069 24.3001C37.3914 19.5529 33.2019 16.2311 28.3307 16.2311Z"
                      fill="black"
                    />
                    <path
                      d="M33.0013 36.9313H23.6556C22.8499 36.9313 22.1062 36.5595 21.6352 35.9149C21.1518 35.258 21.0031 34.4275 21.251 33.6467C22.2054 30.5107 25.0562 28.416 28.3408 28.416C31.6255 28.416 34.4639 30.5231 35.4183 33.6467C35.6538 34.4275 35.5175 35.258 35.0341 35.9149C34.5507 36.5595 33.8194 36.9313 33.0137 36.9313H33.0013ZM28.3285 30.6347C26.0354 30.6347 24.0522 32.1097 23.3829 34.2912C23.3457 34.4276 23.3829 34.5267 23.4325 34.5763C23.4697 34.6258 23.544 34.6878 23.668 34.6878H33.0137C33.1377 34.6878 33.212 34.6258 33.2492 34.5763C33.2864 34.5267 33.336 34.4276 33.2988 34.2912C32.6295 32.0973 30.6339 30.6347 28.3533 30.6347H28.3285Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <text>Virtual Account</text>
              </div>
            </div>
          </HorizontalScrollFull>
        </div>
      </div>
    </>
  );
}

export default Transact;
