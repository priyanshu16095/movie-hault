import React from 'react'
import Item from './Item'

function Items({data}) {
    return (
        <div className='items'>
            {data.error ?
                <div className='center-both'><p className='info'>{data.error}</p></div>
                :
                <div className="items__items flex-b gap">
                    {data.data.results ?
                        data.data.results.map((item, index) => {
                            return (
                                <Item item={item} key={index} />
                            )
                        })
                        : null}
                </div>
            }
        </div>
    )
}

export default Items
