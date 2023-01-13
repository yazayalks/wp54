import styles from '../../styles/priceTable.module.scss'
const PriceTable = () => {
    return (

            <div className="sub-container">

                <table className={styles.priceTable}>
                    <caption><h2>ЦЕНЫ ПН-ЧТ</h2></caption>
                    <thead>
                    <tr>
                        <td><h3>КОЛИЧЕСТВО ЧАСОВ</h3></td>
                        <td><h3>ЦЕНА ЗА ЧАС</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>менее 7 часов</td>
                        <td>1200 руб/час</td>
                    </tr>
                    <tr>
                        <td>более 7 часов</td>
                        <td>1000 руб/час</td>
                    </tr>
                    </tbody>
                </table>

                <table className={styles.priceTable}>
                    <caption><h2>ЦЕНЫ ПТ-ВС</h2></caption>
                    <thead>

                    <tr>
                        <td><h3>КОЛИЧЕСТВО ЧАСОВ</h3></td>
                        <td><h3>ЦЕНА ЗА ЧАС</h3></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>менее 7 часов</td>
                        <td>1500 руб/час</td>
                    </tr>
                    <tr>
                        <td>более 7 часов</td>
                        <td>1300 руб/час</td>
                    </tr>

                    </tbody>
                </table>
            </div>

    );
};

export default PriceTable;