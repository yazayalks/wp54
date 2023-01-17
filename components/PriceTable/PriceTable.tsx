import styles from '../../styles/priceTable.module.scss'

const PriceTable = () => {
    return (

        <div className="sub-container">
            <div className={styles.priceTableContainer}>
                <table className={styles.priceTable}>
                    <caption><h2>ЦЕНЫ ПН-ЧТ</h2></caption>
                    <thead>
                    <tr>
                        <td><h3>ЧАСЫ АРЕНДЫ</h3></td>
                        <td><h3>ЦЕНА ЗА ЧАС</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>менее 7 часов</td>
                        <td>1200 руб</td>
                    </tr>
                    <tr>
                        <td>7 и более часов</td>
                        <td>1000 руб</td>
                    </tr>
                    </tbody>
                </table>

                <table className={styles.priceTable}>
                    <caption><h2>ЦЕНЫ ПТ-ВС</h2></caption>
                    <thead>

                    <tr>
                        <td><h3>ЧАСЫ АРЕНДЫ</h3></td>
                        <td><h3>ЦЕНА ЗА ЧАС</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>менее 7 часов</td>
                        <td>1500 руб</td>
                    </tr>
                    <tr>
                        <td>7 и более часов</td>
                        <td>1300 руб</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default PriceTable;