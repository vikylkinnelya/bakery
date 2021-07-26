import { Link } from 'react-router-dom';
import { Col} from 'react-bootstrap'; 
import { connect } from 'react-redux';

const ShopSider = ({menuType, menuTotalLength}) => {
    return (
        <Col sm={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} className="sidebar">

            <div className="article-header-4">
                <h1>Categories</h1>
            </div>
            <ul className="list-arrows">
                <li className={menuType === 'all' ? 'selected' : undefined}>

                    <Link to='all' >
                        <div className="list-arrows-content">
                            All
                        </div>
                        {menuType === 'all' && <div className="list-arrows-value">{menuTotalLength}</div>}
                    </Link>
                </li>

                <li className={menuType === 'bread' ? 'selected' : undefined}>
                    <Link to='bread' >
                        <article>
                            <div className="list-arrows-content">
                                Bread
                            </div>
                            {menuType === 'bread' && <div className="list-arrows-value">{menuTotalLength}</div>}
                        </article>
                    </Link>
                </li>

                <li className={menuType === 'breakfast' ? 'selected' : undefined}>
                    <Link to='breakfast' >
                        <article>
                            <div className="list-arrows-content">
                                Breakfast
                            </div>
                            {menuType === 'breakfast' && <div className="list-arrows-value">{menuTotalLength}</div>}
                        </article>
                    </Link>
                </li>

                <li className={menuType === 'lunch' ? 'selected' : undefined}>
                    <Link to='lunch' >
                        <article>
                            <div className="list-arrows-content">
                                Lunch
                            </div>
                            {menuType === 'lunch' && <div className="list-arrows-value">{menuTotalLength}</div>}
                        </article>
                    </Link>
                </li>

                <li className={menuType === 'tarts' ? 'selected' : undefined}>
                    <Link to='tarts' >
                        <article>
                            <div className="list-arrows-content">
                                Tarts
                            </div>
                            {menuType === 'tarts' && <div className="list-arrows-value">{menuTotalLength}</div>}
                        </article>
                    </Link>
                </li>

                <li className={menuType === 'drinks' ? 'selected' : undefined}>
                    <Link to='drinks' >
                        <article>
                            <div className="list-arrows-content">
                                Drinks
                            </div>
                            {menuType === 'drinks' && <div className="list-arrows-value">{menuTotalLength}</div>}
                        </article>
                    </Link>
                </li>
            </ul>
        </Col>
    )
}

const mapStateToProps = state => {
    return {
        menuType: state.menuType,
        menuTotalLength: state.menuTotalLength,
    }
}

export default connect(mapStateToProps)(ShopSider);