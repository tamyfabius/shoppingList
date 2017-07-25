import React from 'react';

const ItemList = (props) => {
    return(
        <div>
            <h3>{props.titleItemList}</h3>
            <div>
                {
                    props.articles.map(article => < div key={article.id}>{article.quantity} {article.name}</div>)
                }
            </div>
        </div>
    );
};

export default ItemList;