import classes from "./insighthome.module.css"
import infoOutlined from "../../../../public/ic_common_info_outlined.svg"
import arrow from "../../../../public/Icon_R.svg"
import Image from "next/image"
export default function InsightHome() {
    return (
        <>
            <div className={classes["content-container"]}>
                <div className={classes["content-title"]}>
                    <h4>Ringkasan Keuangan</h4>
                    <Image src={infoOutlined} alt="alt" />
                </div>
                <div className={classes["period-group"]}>
                    <p className={classes["period-text"]}>
                        Periode 1 nov 2023 - 2 nov 2023
                    </p>
                    <div className={classes["period-button"]}>
                        <p className={classes["detail-button"]}>Lihat detail</p>
                        <Image src={arrow} alt="alt" />
                    </div>
                </div>
                <div className={classes["content-container"]}>
                    <div className={classes["account-selection-card"]}>
                        <p className={classes["account-selection-text"]}>Semua Rekening</p>
                    </div>
                    <div>
                        <div>
                            <div>
                                pemasukan
                            </div>
                            <div>
                                pengeluaran
                            </div>
                        </div>
                        <p>Selisih <p>+2000000000</p></p>
                    </div>
                </div>
            </div>
        </>
    )
}
