import { Modal } from 'pretty-modal'
import React, { useState } from 'react'
import apple from './../SourceFiles/apple.png'

const ShopItems = ({ showItems, close }) => {

    return (
        <div>
            <Modal open={showItems}>
                <div>

                    <div className="card mb-3" style={{ backgroundColor: '#232323' }}>
                        <div className="card-body">
                            <button className='btn btn-outline-danger btn-sm float-end' onClick={() => close()}>X</button>
                            <h1 className="card-title">Buy Apple Products</h1>
                            <p className="card-text">Coming soon!</p>
                            <img src={apple} className="img-fluid rounded-start" alt="..." />
                            {/* <p className="card-text"><small className="text-muted">You will be able to</small></p> */}
                        </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default ShopItems