/* global AndroidTest */
"use client";

import React from "react";
import classes from "./breakdownCategory.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TotalDownloadImage from "/assets/images/totalDownload.png";
import TotalUsersImage from "../../../../public/assets/images/totalUsers.png";
import DeleteSearch from "/assets/images/delete-search.png";
import { useStateProvider } from "@/context/stateContext";

import BackArrow from "../../../../public/assets/images/ic_common_arrow_back.svg";
import SwipeUpCard from "@/app/components/swipeUpCard/swipeUpCard";

export default function BreakdownCategory() {
  const [{ isLoading }] = useStateProvider();
  const [loading, setLoading] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [token, setToken] = useState("");
  const [functionAndroid, setFunctionAndroid] = useState(null);

  const router = useRouter();

  const handleSwipeUp = () => {
    setIsCardOpen(!isCardOpen);
  };

  useEffect(() => {
    // eslint-disable-next-line
    // let AndroidTest:any
    if (global?.window["AndroidTest"]) {
      const token = global?.window["AndroidTest"].getToken();
      setToken(token);
    } else {
      setToken("KAGAK DAPET");
    }
  }, []);

  return (
    <>
      <div className={`${classes.main_container}`}>
        <div className={`${classes.topBar_container}`}>
          <div className={`${classes.topBar_systemBar}`}></div>
          <div className={`${classes.topBar_titleBar}`}>
            <div className={`${classes.left_icon}`}>
              <img width="0" height="0" className={`${classes.left_icon_image}`} src="/assets/images/ic_common_arrow_back.png" alt="" />
            </div>
            <div className={`${classes.title_container}`}>
              <div className={`${classes.topBar_title}`}>{token}</div>
            </div>
            <div className={`${classes.right_icon}`}></div>
          </div>
        </div>

        <div className={`${classes.category_detail_container}`}>
          <div className={`${classes.section1_container}`}>
            <div className={`${classes.section1_date}`}>Total per 1 Jun 2023 - 30 Jun 2023</div>
            <div className={`${classes.section1_category}`}>
              <div className={`${classes.section1_nominal_left}`}>
                <div className={`${classes.section1_nominal}`}>Rp7.000.000</div>
                <div className={`${classes.section1_totalTransaksi}`}>dari 2 total transaksi</div>
              </div>
              <div className={`${classes.section1_nominal_right}`}>
                <img className={`${classes.section1_nominal_right_image}`} width="0" height="0" src="/assets/images/ic_common_money_out.png" alt="" />
              </div>
            </div>
          </div>
          <div className={`${classes.section2_container}`}>
            <div className={`${classes.section2_grafik_title}`}>Grafik Mingguan</div>
            <div className={`${classes.section2_container_grafik_data}`}></div>
          </div>
        </div>

        <SwipeUpCard isOpen={isCardOpen} onClose={handleSwipeUp}>
          <div className={`${classes.casa_container}`}>
            <div className={`${classes.casa_list_container}`}>
              <div className={`${classes.casa_list_container_title}`}>7 Juni 2023</div>
              <div className={`${classes.divider}`}></div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.casa_list_container}`}>
              <div className={`${classes.casa_list_container_title}`}>7 Juni 2023</div>
              <div className={`${classes.divider}`}></div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.casa_list_container}`}>
              <div className={`${classes.casa_list_container_title}`}>7 Juni 2023</div>
              <div className={`${classes.divider}`}></div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.casa_list_container}`}>
              <div className={`${classes.casa_list_container_title}`}>7 Juni 2023</div>
              <div className={`${classes.divider}`}></div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.casa_list_container}`}>
              <div className={`${classes.casa_list_container_title}`}>7 Juni 2023</div>
              <div className={`${classes.divider}`}></div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.casa_content}`}>
                <div className={`${classes.casa_content_left}`}>
                  <div className={`${classes.avatar}`}>
                    <img width="0" height="0" className={`${classes.avatar_image}`} src="/assets/images/ic_common_transfer.png" alt="" />
                  </div>
                </div>

                <div className={`${classes.casa_content_right}`}>
                  <div className={`${classes.casa_content_detail_top}`}>
                    <div className={`${classes.title_transaction}`}>Transfer</div>
                    <div className={`${classes.nominal_transaction}`}>+Rp2.000.000</div>
                  </div>
                  <div className={`${classes.casa_content_detail_bottom}`}>
                    <div className={`${classes.username_transaction}`}>BNI - Ivan Agustinus</div>
                    <div className={`${classes.type_transaction}`}>
                      <div className={`${classes.type_title_transaction}`}>Uang Masuk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwipeUpCard>
      </div>
    </>
  );
}
