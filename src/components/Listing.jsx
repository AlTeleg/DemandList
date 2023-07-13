export default function Listing({ items=[] }) {
  return (
        <div className="item-list">
            {items.filter(item => item.state === 'active').map((item, id) => 
                <div className="item" key={id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage?.url_570xN} alt={item.MainImage?.listing_image_id}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title? item.title.length > 50 ? item.title.substring(0,50) + '...' : item.title : undefined}</p>
                        {['USD', 'EUR'].includes(item.currency_code) ? 
                            <p className="item-price">{item.price}{item.currency_code === 'USD' ? '$' : '€'}</p> : 
                            <p className="item-price">{item.currency_code} {item.price}</p>
                        }
                        {item.quantity <= 10 ?
                            <p className="item-quantity level-low">{item.quantity} left</p> : undefined
                        }
                        {item.quantity <= 20 && item.quantity >= 10 ?
                            <p className="item-quantity level-medium">{item.quantity} left</p> : undefined
                        }
                        {item.quantity > 20 ?
                            <p className="item-quantity level-high">{item.quantity} left</p> : undefined
                        }    
                    </div> 
                </div>
            )}
        </div>
  )
}
