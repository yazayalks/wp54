import styles from '../../styles/priceTable.module.scss'
import {FC} from "react";

const NewYearPriceTable: FC = () => {
    return (

        <div className="sub-container">
            <div className={styles.price_table__container}>
                <table className={styles.price_table}>
                    <caption><h2 className="text__separate">ЦЕНЫ ПН-ВС:</h2></caption>
                    <thead>
                    <tr>
                        <td><h3>ЧАСЫ АРЕНДЫ</h3></td>
                        <td><h3>ЦЕНА ЗА ЧАС</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>менее 7 часов</td>
                        <td>2000 руб</td>
                    </tr>
                    <tr>
                        <td>7 и более часов</td>
                        <td>1800 руб</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default NewYearPriceTable;